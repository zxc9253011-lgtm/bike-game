import assert from "node:assert/strict";
import test from "node:test";
import { HighKneeEstimator } from "../src/lib/highKnee.ts";
import { MarchingEstimator } from "../src/lib/marching.ts";
import {
  analyzeLegPose,
  cameraRegion,
  mapLandmarksToFrame,
  ownsPlayerPose,
  visiblePoint,
} from "../src/lib/motion.ts";
import type { PosePoint } from "../src/lib/motion.ts";

const DOWN = -0.65;
const HIGH = 0.02;

function pose(leftLift: number, rightLift: number): PosePoint[] {
  const points = Array.from({ length: 33 }, () => ({
    x: 0.5,
    y: 0.5,
    visibility: 0.99,
  }));
  points[11] = { x: 0.42, y: 0.2, visibility: 0.99 };
  points[12] = { x: 0.58, y: 0.2, visibility: 0.99 };
  points[23] = { x: 0.46, y: 0.5, visibility: 0.99 };
  points[24] = { x: 0.54, y: 0.5, visibility: 0.99 };
  points[25] = { x: 0.44, y: 0.5 - leftLift * 0.3, visibility: 0.99 };
  points[26] = { x: 0.56, y: 0.5 - rightLift * 0.3, visibility: 0.99 };
  points[27] = { x: 0.44, y: 0.9, visibility: leftLift > -0.25 ? 0.2 : 0.99 };
  points[28] = { x: 0.56, y: 0.9, visibility: rightLift > -0.25 ? 0.2 : 0.99 };
  return points;
}

function kneeLift(progress: number, peak = HIGH): number {
  if (progress < 0.2 || progress > 0.8) return DOWN;
  if (progress < 0.45) return DOWN + ((peak - DOWN) * (progress - 0.2)) / 0.25;
  if (progress <= 0.55) return peak;
  return peak + ((DOWN - peak) * (progress - 0.55)) / 0.25;
}

/** Replay the component's analysis -> update/suspend path at 20 camera fps. */
function replay(exerciseMode: "seated" | "standing", peak = HIGH) {
  const estimator = new HighKneeEstimator();
  let reading = estimator.update(DOWN, DOWN, 0);
  let rejected = 0;
  for (let time = 50; time <= 5000; time += 50) {
    const phase = time % 1000;
    const leftLift = phase < 500 ? kneeLift(phase / 500, peak) : DOWN;
    const rightLift = phase >= 500 ? kneeLift((phase - 500) / 500, peak) : DOWN;
    const motion = analyzeLegPose(
      pose(leftLift, rightLift),
      4 / 3,
      exerciseMode,
    );
    if (!motion) {
      rejected += 1;
      estimator.suspend();
    } else reading = estimator.update(motion.leftLift, motion.rightLift, time);
  }
  return { reading, rejected };
}

test("alternating high knees generate cadence when each raised ankle becomes occluded", () => {
  const standing = replay("standing");
  assert.equal(
    standing.rejected,
    0,
    "standing needs shoulders, hips and knees, not hidden ankles",
  );
  assert.equal(standing.reading.steps, 10);
  assert.equal(standing.reading.cadence, 60);

  const seated = replay("seated");
  assert.ok(
    seated.rejected > 0,
    "the same clip must retain the seated ankle-confidence guard",
  );
  assert.equal(
    seated.reading.steps,
    0,
    "this reproduces the old standing path discarding every raised-knee phase",
  );
  assert.equal(seated.reading.cadence, 0);
});

test("standing does not dereference missing ankles or produce a nonfinite signal", () => {
  const points = pose(HIGH, DOWN);
  delete points[27];
  delete points[28];
  const motion = analyzeLegPose(points, 4 / 3, "standing");
  assert.ok(motion);
  assert.equal(motion.signal, 0);
  assert.ok(Number.isFinite(motion.leftLift));
  assert.ok(Number.isFinite(motion.rightLift));
  assert.equal(analyzeLegPose(points, 4 / 3, "seated"), null);
});

test("standing accepts cropped feet but still rejects missing knees or shoulders", () => {
  const points = pose(DOWN, HIGH);
  points[27].y = 1.1;
  points[28].y = 1.2;
  assert.ok(analyzeLegPose(points, 4 / 3, "standing"));
  assert.equal(analyzeLegPose(points, 4 / 3, "seated"), null);
  points[25].visibility = 0.2;
  assert.equal(analyzeLegPose(points, 4 / 3, "standing"), null);
  points[25].visibility = 0.99;
  points[11].visibility = 0.2;
  assert.equal(analyzeLegPose(points, 4 / 3, "standing"), null);
});

test("standing mode still rejects low shuffling throughout a moving clip", () => {
  const result = replay("standing", -0.14);
  assert.equal(result.rejected, 0);
  assert.equal(result.reading.steps, 0);
  assert.equal(result.reading.cadence, 0);
});

test("existing callers retain seated ankle requirements by default", () => {
  const points = pose(HIGH, DOWN);
  assert.equal(analyzeLegPose(points), null);
  points[27].visibility = 0.99;
  assert.ok(analyzeLegPose(points));
});

test("running analyzes low alternating knee motion without an absolute lift target or visible ankles", () => {
  const marching = new MarchingEstimator();
  const highKnees = new HighKneeEstimator();
  let reading = marching.update(DOWN, DOWN, 0);
  let highReading = highKnees.update(DOWN, DOWN, 0);
  for (let time = 50; time <= 8000; time += 50) {
    const cycle = Math.floor(time / 1000);
    const phase = time % 1000;
    const lift = phase > 200 && phase < 650 ? 0.07 : 0;
    const points = pose(
      DOWN + (cycle % 2 ? 0 : lift),
      DOWN + (cycle % 2 ? lift : 0),
    );
    points[27].visibility = 0.1;
    points[28].visibility = 0.1;
    const motion = analyzeLegPose(points, 4 / 3, "running");
    assert.ok(motion, "gentle running needs only shoulders, hips and knees");
    assert.equal(
      motion.signal,
      0,
      "missing ankle data must not enter seated pedal calculations",
    );
    assert.equal(analyzeLegPose(points, 4 / 3, "seated"), null);
    reading = marching.update(motion.leftLift, motion.rightLift, time);
    highReading = highKnees.update(motion.leftLift, motion.rightLift, time);
  }
  assert.equal(reading.steps, 8);
  assert.equal(reading.cadence, 30);
  assert.equal(
    highReading.steps,
    0,
    "existing high-knee mode retains its distinct lift-height requirement",
  );
});

/** Express one real body's full-frame landmarks in either overlapping crop. */
function inCrop(points: PosePoint[], player: 0 | 1): PosePoint[] {
  const region = cameraRegion(player, 2);
  return points.map((point) => ({
    ...point,
    x: (point.x - region.x) / region.width,
  }));
}

test("dual crops include an inner arm margin and map landmarks back without changing the mirror convention", () => {
  assert.deepEqual(cameraRegion(0, 1), { x: 0, width: 1 });
  assert.deepEqual(cameraRegion(1, 1), { x: 0, width: 1 });
  const leftPlayer = cameraRegion(0, 2);
  const rightPlayer = cameraRegion(1, 2);
  assert.ok(leftPlayer.x < 0.5 && leftPlayer.x + leftPlayer.width === 1);
  assert.ok(rightPlayer.x === 0 && rightPlayer.width > 0.5);
  const leftReach = { x: 0.44, y: 0.45, visibility: 0.99 };
  const leftCrop = inCrop([leftReach], 0);
  assert.ok(
    visiblePoint(leftCrop[0]),
    "P1 inner wrist survives a reach across the old hard half boundary",
  );
  const restored = mapLandmarksToFrame(leftCrop, leftPlayer)[0];
  assert.ok(Math.abs(restored.x - leftReach.x) < 1e-12);
  assert.equal(restored.y, leftReach.y);
  const rightReach = inCrop([{ ...leftReach, x: 0.56 }], 1);
  assert.ok(visiblePoint(rightReach[0]), "P2 has the same inner wrist margin");
});

test("one body visible in both padded crops belongs only to its own raw camera side", () => {
  for (const [center, owner] of [
    [0.55, 0],
    [0.45, 1],
  ] as const) {
    const body = pose(DOWN, DOWN);
    for (const point of body) point.x += center - 0.5;
    for (const player of [0, 1] as const) {
      assert.equal(
        ownsPlayerPose(
          inCrop(body, player),
          cameraRegion(player, 2),
          player,
          2,
        ),
        player === owner,
        `the person at ${center} must not be counted for both players`,
      );
    }
  }
});

test("divider jitter does not give the same central body to both players", () => {
  for (const center of [0.489, 0.5, 0.511]) {
    const body = pose(DOWN, DOWN);
    for (const point of body) point.x += center - 0.5;
    for (const player of [0, 1] as const) {
      assert.equal(
        ownsPlayerPose(
          inCrop(body, player),
          cameraRegion(player, 2),
          player,
          2,
        ),
        false,
      );
    }
  }
});

test("ownership prefers stable hips while leaning and falls back to shoulders when hips are hidden", () => {
  const body = pose(DOWN, DOWN);
  body[23].x = 0.52;
  body[24].x = 0.58;
  body[11].x = 0.43;
  body[12].x = 0.47;
  assert.equal(ownsPlayerPose(inCrop(body, 0), cameraRegion(0, 2), 0, 2), true);
  assert.equal(
    ownsPlayerPose(inCrop(body, 1), cameraRegion(1, 2), 1, 2),
    false,
  );
  body[23].visibility = body[24].visibility = 0.1;
  assert.equal(ownsPlayerPose(inCrop(body, 1), cameraRegion(1, 2), 1, 2), true);
  assert.equal(
    ownsPlayerPose(inCrop(body, 0), cameraRegion(0, 2), 0, 2),
    false,
  );
});

test("ownership rejects missing or nonfinite anchors and does not impose dual restrictions on single player", () => {
  assert.equal(ownsPlayerPose(undefined, cameraRegion(0, 2), 0, 2), false);
  const points = pose(DOWN, DOWN);
  for (const joint of [11, 12, 23, 24]) points[joint].x = NaN;
  assert.equal(ownsPlayerPose(points, cameraRegion(0, 2), 0, 2), false);
  assert.equal(ownsPlayerPose(points, cameraRegion(0, 1), 0, 1), true);
  assert.equal(
    ownsPlayerPose(pose(DOWN, DOWN), { x: Infinity, width: 0.6 }, 0, 2),
    false,
  );
  assert.equal(visiblePoint({ x: 0.5, y: 0.5, visibility: Infinity }), false);
  assert.equal(analyzeLegPose(pose(DOWN, DOWN), NaN, "running"), null);
});

test("a leaning neighbor with hidden hips cannot claim the other player's shoulder-only ownership", () => {
  const body = pose(DOWN, DOWN);
  body[23].x = 0.54;
  body[24].x = 0.58;
  // Their lean shifts the shoulder midpoint into P2's half, but one shoulder
  // still spans the divider. P1's visible hips establish the actual owner.
  body[11].x = 0.38;
  body[12].x = 0.53;
  assert.equal(ownsPlayerPose(inCrop(body, 0), cameraRegion(0, 2), 0, 2), true);
  const neighborCrop = inCrop(body, 1);
  neighborCrop[23].visibility = neighborCrop[24].visibility = 0.1;
  assert.equal(
    ownsPlayerPose(neighborCrop, cameraRegion(1, 2), 1, 2),
    false,
    "a shoulder midpoint alone must not turn the same leaning body into P2",
  );

  body[11].x = 0.47;
  body[12].x = 0.62;
  const ownPartial = inCrop(body, 0);
  ownPartial[23].visibility = ownPartial[24].visibility = 0.1;
  assert.equal(
    ownsPlayerPose(ownPartial, cameraRegion(0, 2), 0, 2),
    false,
    "the shoulder-only rule applies symmetrically to P1",
  );
});
