import assert from "node:assert/strict";
import test from "node:test";
import { HighKneeEstimator } from "../src/lib/highKnee.ts";
import { MarchingEstimator } from "../src/lib/marching.ts";
import { analyzeLegPose } from "../src/lib/motion.ts";
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
