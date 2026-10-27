import assert from "node:assert/strict";
import test from "node:test";
import { SteeringEstimator } from "../src/lib/steering.ts";
import type { PosePoint } from "../src/lib/motion.ts";

function pose(left = 0.7, right = 0.7): PosePoint[] {
  const points = Array.from({ length: 33 }, () => ({
    x: 0.5,
    y: 0.6,
    visibility: 0.99,
  }));
  points[11] = { x: 0.6, y: 0.3, visibility: 0.99 };
  points[12] = { x: 0.4, y: 0.3, visibility: 0.99 };
  points[23] = { x: 0.56, y: 0.6, visibility: 0.99 };
  points[24] = { x: 0.44, y: 0.6, visibility: 0.99 };
  points[15] = { x: 0.7, y: left, visibility: 0.99 };
  points[16] = { x: 0.3, y: right, visibility: 0.99 };
  return points;
}

test("a held hand at startup cannot steer until both hands are first lowered", () => {
  const estimator = new SteeringEstimator();
  for (let time = 0; time < 1000; time += 100)
    assert.equal(estimator.update(pose(0.27), time), null);
  assert.equal(estimator.update(pose(), 1000), null);
  assert.equal(estimator.update(pose(0.27), 1100), null);
  assert.equal(estimator.update(pose(0.27), 1279), null);
  assert.equal(
    estimator.update(pose(0.27), 1280),
    -1,
    "anatomical left becomes mirrored screen-left",
  );
});

test("one raised hand steers once and must be lowered before another command", () => {
  const estimator = new SteeringEstimator();
  estimator.update(pose(), 0);
  estimator.update(pose(0.27), 100);
  assert.equal(estimator.update(pose(0.27), 280), -1);
  for (let time = 300; time <= 3000; time += 100)
    assert.equal(estimator.update(pose(0.27), time), null);
  estimator.update(pose(), 3100);
  estimator.update(pose(0.7, 0.27), 3200);
  assert.equal(estimator.update(pose(0.7, 0.27), 3380), 1);
});

test("a brief wrist crossing and shoulder-height jitter never count as a held gesture", () => {
  const estimator = new SteeringEstimator();
  estimator.update(pose(), 0);
  for (let frame = 1; frame <= 30; frame++) {
    assert.equal(
      estimator.update(pose(frame % 2 ? 0.29 : 0.295), frame * 100),
      null,
    );
  }
  estimator.update(pose(0.27), 3100);
  assert.equal(estimator.update(pose(0.27), 3279), null);
  assert.equal(
    estimator.update(pose(), 3280),
    null,
    "lowering just before the hold completes cancels it",
  );
});

test("raising both hands cancels the candidate and requires a clear neutral posture", () => {
  const estimator = new SteeringEstimator();
  estimator.update(pose(), 0);
  estimator.update(pose(0.27), 100);
  for (let time = 200; time <= 800; time += 100)
    assert.equal(estimator.update(pose(0.27, 0.27), time), null);
  assert.equal(estimator.update(pose(0.7, 0.27), 1000), null);
  assert.equal(estimator.update(pose(0.7, 0.27), 1500), null);
  estimator.update(pose(), 1600);
  estimator.update(pose(0.7, 0.27), 1700);
  assert.equal(estimator.update(pose(0.7, 0.27), 1880), 1);
});

test("cooldown prevents a quick release from generating rapid lane commands", () => {
  const estimator = new SteeringEstimator();
  estimator.update(pose(), 0);
  estimator.update(pose(0.27), 100);
  assert.equal(estimator.update(pose(0.27), 280), -1);
  estimator.update(pose(), 320);
  estimator.update(pose(0.7, 0.27), 350);
  assert.equal(estimator.update(pose(0.7, 0.27), 530), null);
  assert.equal(estimator.update(pose(0.7, 0.27), 729), null);
  assert.equal(estimator.update(pose(0.7, 0.27), 730), 1);
});

test("low confidence, missing joints and nonfinite coordinates discard a partial gesture", () => {
  for (const joint of [11, 12, 15, 16, 23, 24]) {
    const estimator = new SteeringEstimator();
    estimator.update(pose(), 0);
    estimator.update(pose(0.27), 100);
    const bad = pose(0.27);
    bad[joint].visibility = 0.2;
    assert.equal(estimator.update(bad, 400), null);
    assert.equal(
      estimator.update(pose(0.27), 800),
      null,
      "confidence recovery with an already held hand must not steer",
    );
  }
  const estimator = new SteeringEstimator();
  estimator.update(pose(), 0);
  const missing = pose();
  delete missing[15];
  assert.equal(estimator.update(missing, 100), null);
  const invalid = pose();
  invalid[11].y = NaN;
  assert.equal(estimator.update(invalid, 200), null);
  assert.equal(estimator.update(pose(0.27), Infinity), null);
  assert.equal(estimator.update(undefined, 300), null);
});

test("time reversal and a long camera gap cannot complete an old gesture", () => {
  for (const nextTime of [50, 5000]) {
    const estimator = new SteeringEstimator();
    estimator.update(pose(), 0);
    estimator.update(pose(0.27), 100);
    assert.equal(estimator.update(pose(0.27), nextTime), null);
    assert.equal(estimator.update(pose(0.27), nextTime + 400), null);
  }
});

test("slow live inference may confirm a held hand without receiving concurrent gestures", () => {
  const estimator = new SteeringEstimator();
  estimator.update(pose(), 0);
  assert.equal(estimator.update(pose(0.27), 1900), null);
  assert.equal(estimator.update(pose(0.27), 3800), -1);
  assert.equal(estimator.update(pose(0.27), 5700), null);
});

test("two players use independent hand histories and reset cancels a raised hand", () => {
  const players = [new SteeringEstimator(), new SteeringEstimator()];
  players.forEach((estimator) => estimator.update(pose(), 0));
  players[0].update(pose(0.27), 100);
  players[1].update(pose(0.7, 0.27), 150);
  assert.equal(players[0].update(pose(0.27), 280), -1);
  assert.equal(players[1].update(pose(0.7, 0.27), 330), 1);
  players[0].reset();
  assert.equal(players[0].update(pose(0.27), 900), null);
  assert.equal(players[1].update(pose(0.7, 0.27), 1000), null);
});

test("a stable gesture sampled at 10 fps responds within 250 milliseconds", () => {
  const estimator = new SteeringEstimator();
  estimator.update(pose(), 0);
  assert.equal(estimator.update(pose(0.27), 100), null);
  assert.equal(
    estimator.update(pose(0.27), 200),
    null,
    "one short observation is still rejected",
  );
  assert.equal(
    estimator.update(pose(0.27), 300),
    -1,
    "200ms of stable evidence reacts without the former 350ms wait",
  );
  assert.equal(
    estimator.update(pose(0.27), 400),
    null,
    "the faster response must not repeat while held",
  );
});
