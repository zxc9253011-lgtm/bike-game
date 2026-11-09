import assert from "node:assert/strict";
import test from "node:test";
import {
  BoxingEstimator,
  advanceBoxingMatch,
  createBoxingMatch,
  finishBoxingMatch,
  resolveBoxingExchange,
  type BoxingAction,
  type BoxingSide,
} from "../src/lib/boxing.ts";
import type { PosePoint } from "../src/lib/motion.ts";

function pose(
  kind: "neutral" | "guard" | BoxingSide = "neutral",
  depth = true,
): PosePoint[] {
  const points = Array.from({ length: 33 }, () => ({
    x: 0.5,
    y: 0.5,
    z: 0,
    visibility: 0.99,
  }));
  const point = (x: number, y: number, z: number): PosePoint =>
    depth ? { x, y, z, visibility: 0.99 } : { x, y, visibility: 0.99 };
  points[11] = point(0.6, 0.3, 0);
  points[12] = point(0.4, 0.3, 0);
  points[23] = point(0.56, 0.65, 0);
  points[24] = point(0.44, 0.65, 0);
  points[13] = point(0.66, 0.48, -0.02);
  points[14] = point(0.34, 0.48, -0.02);
  points[15] = point(0.62, 0.42, -0.12);
  points[16] = point(0.38, 0.42, -0.12);
  if (kind === "left") {
    points[13] = depth ? point(0.62, 0.34, -0.22) : point(0.77, 0.33, 0);
    points[15] = depth ? point(0.61, 0.31, -0.55) : point(0.94, 0.33, 0);
  } else if (kind === "right") {
    points[14] = depth ? point(0.38, 0.34, -0.22) : point(0.23, 0.33, 0);
    points[16] = depth ? point(0.39, 0.31, -0.55) : point(0.06, 0.33, 0);
  } else if (kind === "guard") {
    points[13] = point(0.64, 0.5, -0.02);
    points[14] = point(0.36, 0.5, -0.02);
    points[15] = point(0.43, 0.43, -0.1);
    points[16] = point(0.57, 0.43, -0.1);
  }
  return points;
}

const neutral: BoxingAction = { guarding: false };
const hit = (side: BoxingSide = "left"): BoxingAction => ({
  punch: side,
  guarding: false,
});

test("a bent arm followed by extension toward the camera emits one punch until retracted", () => {
  const estimator = new BoxingEstimator();
  assert.equal(estimator.update(pose(), 0).tracking, true);
  const left = estimator.update(pose("left"), 100);
  assert.equal(left.punch, "left");
  assert.equal(left.punches, 1);
  for (let time = 200; time <= 2000; time += 100)
    assert.equal(estimator.update(pose("left"), time).punch, null);
  estimator.update(pose(), 2100);
  assert.equal(estimator.update(pose("left"), 2200).punches, 2);
});

test("left and right arms have independent return histories and no held-startup attack", () => {
  const estimator = new BoxingEstimator();
  for (let time = 0; time <= 500; time += 100)
    assert.equal(estimator.update(pose("left"), time).punch, null);
  estimator.update(pose(), 600);
  assert.equal(estimator.update(pose("right"), 700).punch, "right");
  assert.equal(estimator.update(pose("right"), 800).punch, null);
  assert.equal(estimator.update(pose("left"), 900).punch, "left");
});

test("gentle extension works without locking the elbow or showing any hips or legs", () => {
  const estimator = new BoxingEstimator();
  const neutralPose = pose();
  const extended = pose();
  for (const points of [neutralPose, extended]) {
    for (let joint = 23; joint < 33; joint++) points[joint].visibility = 0.01;
  }
  extended[13] = { x: 0.62, y: 0.39, z: -0.15, visibility: 0.99 };
  extended[15] = { x: 0.62, y: 0.38, z: -0.31, visibility: 0.99 };
  estimator.update(neutralPose, 0);
  assert.equal(estimator.update(extended, 100).punch, "left");
});

test("horizontal image-plane punches can be recognized if depth is unavailable", () => {
  for (const side of ["left", "right"] as const) {
    const estimator = new BoxingEstimator();
    estimator.update(pose("neutral", false), 0);
    assert.equal(estimator.update(pose(side, false), 100).punch, side);
  }
});

test("switching between depth and image-plane estimates cannot invent an extension", () => {
  const estimator = new BoxingEstimator();
  estimator.update(pose(), 0);
  assert.equal(estimator.update(pose("left", false), 100).punch, null);
  estimator.update(pose("neutral", false), 200);
  assert.equal(estimator.update(pose("left", false), 300).punch, "left");
});

test("crossed hands inside the chest band confirm defence after 100ms", () => {
  const estimator = new BoxingEstimator();
  assert.equal(estimator.update(pose("guard"), 0).guarding, false);
  assert.equal(estimator.update(pose("guard"), 99).guarding, false);
  const defence = estimator.update(pose("guard"), 100);
  assert.equal(defence.guarding, true);
  assert.equal(defence.punch, null);
  assert.equal(
    estimator.update(pose(), 150).guarding,
    true,
    "brief crossing jitter does not flicker defence",
  );
  assert.equal(estimator.update(pose(), 240).guarding, false);
  assert.equal(
    estimator.update(pose("left"), 340).punch,
    "left",
    "fresh retraction after guard allows a new attack",
  );
});

test("extending an arm backward in depth is not mistaken for a planar punch", () => {
  const estimator = new BoxingEstimator();
  estimator.update(pose(), 0);
  const backward = pose("left");
  backward[13].z = 0.22;
  backward[15].z = 0.55;
  assert.equal(estimator.update(backward, 100).punch, null);
  assert.equal(estimator.update(backward, 200).punches, 0);
});

test("crossed hands at the waist, overhead hands and uncrossed hands are not defence", () => {
  for (const kind of ["waist", "overhead", "uncrossed"]) {
    const estimator = new BoxingEstimator();
    const points = pose("guard");
    if (kind === "waist") points[15].y = points[16].y = 0.72;
    if (kind === "overhead") points[15].y = points[16].y = 0.15;
    if (kind === "uncrossed") {
      points[15].x = 0.6;
      points[16].x = 0.4;
    }
    for (let time = 0; time <= 600; time += 100)
      assert.equal(estimator.update(points, time).guarding, false, kind);
  }
});

test("a brief cross cancels attacks but does not turn into a punch while uncrossing", () => {
  const estimator = new BoxingEstimator();
  estimator.update(pose(), 0);
  assert.equal(estimator.update(pose("guard"), 50).punch, null);
  assert.equal(estimator.update(pose("left"), 100).punch, null);
  estimator.update(pose(), 200);
  assert.equal(estimator.update(pose("left"), 300).punch, "left");
});

test("one occluded opposite arm never blocks the visible arm, but cannot retain defence", () => {
  const estimator = new BoxingEstimator();
  const neutralPose = pose();
  const punchPose = pose("left");
  neutralPose[16].visibility = punchPose[16].visibility = 0.1;
  estimator.update(neutralPose, 0);
  assert.equal(estimator.update(punchPose, 100).punch, "left");
  estimator.update(pose("guard"), 200);
  assert.equal(estimator.update(pose("guard"), 300).guarding, true);
  const partial = pose("guard");
  partial[16].visibility = 0.1;
  assert.equal(estimator.update(partial, 350).guarding, false);
});

test("stationary jitter, raising a bent hand and waving overhead do not attack", () => {
  const estimator = new BoxingEstimator();
  for (let time = 0; time <= 4000; time += 50) {
    const points = pose();
    for (const joint of [11, 12, 13, 14, 15, 16]) {
      points[joint].x += Math.sin(time * 0.01 + joint) * 0.003;
      points[joint].y += Math.cos(time * 0.01 + joint) * 0.003;
    }
    assert.equal(estimator.update(points, time).punch, null);
  }
  const lifted = pose();
  lifted[15].y = 0.32;
  assert.equal(estimator.update(lifted, 4100).punch, null);
  const overhead = pose();
  overhead[13] = { x: 0.61, y: 0.2, z: -0.12, visibility: 0.99 };
  overhead[15] = { x: 0.62, y: 0.06, z: -0.25, visibility: 0.99 };
  assert.equal(estimator.update(overhead, 4200).punch, null);
  assert.equal(
    estimator.update(pose("left"), 4300).punch,
    null,
    "lowering a straight wave cannot attack without retraction",
  );
});

test("low confidence, missing shoulders, stale frames and reset discard old posture", () => {
  for (const invalid of [
    undefined,
    [],
    pose().map((point) => ({ ...point, visibility: 0.1 })),
  ]) {
    const estimator = new BoxingEstimator();
    estimator.update(pose(), 0);
    const reading = estimator.update(invalid, 100);
    assert.equal(reading.tracking, false);
    assert.equal(reading.guarding, false);
    assert.equal(estimator.update(pose("left"), 200).punch, null);
  }
  for (const time of [NaN, Infinity, -100, 5000]) {
    const estimator = new BoxingEstimator();
    estimator.update(pose(), 0);
    assert.equal(estimator.update(pose("left"), time).punch, null);
  }
  const estimator = new BoxingEstimator();
  estimator.update(pose(), 0);
  estimator.update(pose("left"), 100);
  estimator.suspend();
  assert.equal(estimator.update(pose(), 200).punches, 1);
  estimator.reset();
  assert.equal(estimator.update(pose(), 300).punches, 0);
});

test("repeated timestamps never emit a second event and cooldown limits return flicker", () => {
  const estimator = new BoxingEstimator();
  estimator.update(pose(), 0);
  assert.equal(estimator.update(pose("left"), 100).punch, "left");
  assert.equal(estimator.update(pose("left"), 100).punch, null);
  estimator.update(pose(), 150);
  assert.equal(estimator.update(pose("left"), 200).punch, null);
  assert.equal(estimator.update(pose("left"), 320).punch, "left");
});

test("two estimators keep completely independent guards and attack counts", () => {
  const first = new BoxingEstimator();
  const second = new BoxingEstimator();
  first.update(pose(), 0);
  second.update(pose("guard"), 0);
  assert.equal(first.update(pose("left"), 100).punches, 1);
  const defence = second.update(pose("guard"), 100);
  assert.equal(defence.guarding, true);
  assert.equal(defence.punches, 0);
  assert.equal(first.update(pose("left"), 200).guarding, false);
});

test("a clean attack scores and reduces only the opponent's health without mutating input", () => {
  const initial = createBoxingMatch();
  const next = resolveBoxingExchange(initial, [hit(), neutral]);
  assert.deepEqual(next.hp, [100, 90]);
  assert.deepEqual(next.scores, [10, 0]);
  assert.deepEqual(next.hits, [1, 0]);
  assert.deepEqual(next.punches, [1, 0]);
  assert.deepEqual(next.lastExchange?.landed, [true, false]);
  assert.deepEqual(initial, createBoxingMatch());
});

test("cross-arm defence blocks all damage and credits the defender rather than the attacker", () => {
  const next = resolveBoxingExchange(createBoxingMatch(), [
    hit(),
    { guarding: true },
  ]);
  assert.deepEqual(next.hp, [100, 100]);
  assert.deepEqual(next.scores, [0, 3]);
  assert.deepEqual(next.blocks, [0, 1]);
  assert.deepEqual(next.hits, [0, 0]);
  assert.deepEqual(next.lastExchange?.blocked, [true, false]);
  assert.deepEqual(
    resolveBoxingExchange(createBoxingMatch(), [
      { punch: "left", guarding: true },
      neutral,
    ]),
    createBoxingMatch(),
    "guarding cannot also attack",
  );
});

test("simultaneous punches resolve from the same pre-exchange state, including a double finish", () => {
  const initial = { ...createBoxingMatch(), hp: [10, 10] as [number, number] };
  const next = resolveBoxingExchange(initial, [hit(), hit("right")]);
  assert.deepEqual(next.hp, [0, 0]);
  assert.deepEqual(next.scores, [10, 10]);
  assert.equal(next.result?.winner, "tie");
  assert.equal(next.result?.reason, "knockout");
});

test("missing player tracking prevents attacks and ghost defences from awarding points", () => {
  const initial = createBoxingMatch();
  assert.equal(
    resolveBoxingExchange(initial, [
      hit(),
      { guarding: false, tracked: false },
    ]),
    initial,
  );
  assert.equal(
    resolveBoxingExchange(initial, [
      { ...hit(), tracked: false },
      { guarding: true },
    ]),
    initial,
  );
});

test("a timed match uses scores and exact expiry rejects after-gong attacks", () => {
  const initial = resolveBoxingExchange(createBoxingMatch(10), [
    hit(),
    neutral,
  ]);
  const beforeGong = advanceBoxingMatch(initial, 9.9);
  assert.equal(beforeGong.result, null);
  const finished = advanceBoxingMatch(beforeGong, 0.1, [neutral, hit()]);
  assert.equal(finished.elapsed, 10);
  assert.deepEqual(finished.scores, [10, 0]);
  assert.equal(finished.result?.winner, 1);
  assert.equal(finished.result?.reason, "time");
  assert.equal(advanceBoxingMatch(finished, 2, [hit(), hit()]), finished);
  assert.equal(resolveBoxingExchange(finished, [hit(), hit()]), finished);
});

test("clock validation, default duration, ties and manual finish have stable boundaries", () => {
  const initial = createBoxingMatch();
  for (const duration of [-1, 0, NaN, Infinity])
    assert.equal(createBoxingMatch(duration).duration, 60);
  for (const dt of [-1, NaN, Infinity])
    assert.equal(advanceBoxingMatch(initial, dt), initial);
  assert.equal(advanceBoxingMatch(initial, 0), initial);
  assert.equal(advanceBoxingMatch(initial, 60).result?.winner, "tie");
  const punched = advanceBoxingMatch(initial, 1, [neutral, hit("right")]);
  assert.equal(punched.elapsed, 1);
  assert.equal(finishBoxingMatch(punched).result?.winner, 2);
  assert.equal(finishBoxingMatch(punched).result?.reason, "manual");
  assert.equal(advanceBoxingMatch(createBoxingMatch(1), 100).elapsed, 1);
});
