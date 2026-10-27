import assert from "node:assert/strict";
import test from "node:test";
import { SteeringEstimator } from "../src/lib/steering.ts";
import type { PosePoint } from "../src/lib/motion.ts";

function pose(left = 0.7, right = 0.7, lean = 0): PosePoint[] {
  const points = Array.from({ length: 33 }, () => ({
    x: 0.5,
    y: 0.6,
    visibility: 0.99,
  }));
  points[11] = { x: 0.6 + lean, y: 0.3, visibility: 0.99 };
  points[12] = { x: 0.4 + lean, y: 0.3, visibility: 0.99 };
  points[23] = { x: 0.56, y: 0.6, visibility: 0.99 };
  points[24] = { x: 0.44, y: 0.6, visibility: 0.99 };
  points[15] = { x: 0.7 + lean, y: left, visibility: 0.99 };
  points[16] = { x: 0.3 + lean, y: right, visibility: 0.99 };
  return points;
}
function neutral(estimator: SteeringEstimator, offset = 0): void {
  assert.equal(estimator.update(pose(0.7, 0.7, offset), 0), null);
  assert.equal(estimator.update(pose(0.7, 0.7, offset), 100), null);
}

test("upper-chest hand lift confirms in 100ms, without lifting above the shoulder", () => {
  const estimator = new SteeringEstimator();
  neutral(estimator);
  assert.equal(estimator.cue(), "ready");
  assert.equal(estimator.update(pose(0.36), 200), null);
  assert.equal(estimator.cue(), "left");
  assert.equal(estimator.update(pose(0.36), 299), null);
  assert.equal(estimator.update(pose(0.36), 300), -1);
  assert.equal(estimator.cue(), "return");
});

test("a held hand at startup cannot steer before a lower-hand observation", () => {
  const estimator = new SteeringEstimator();
  for (let time = 0; time < 1000; time += 100)
    assert.equal(estimator.update(pose(0.36), time), null);
  assert.equal(estimator.cue(), "return");
  assert.equal(estimator.update(pose(), 1000), null);
  assert.equal(estimator.update(pose(0.36), 1100), null);
  assert.equal(estimator.update(pose(0.36), 1200), -1);
});

test("one gesture changes one lane; that same hand must lower before another", () => {
  const estimator = new SteeringEstimator();
  neutral(estimator);
  estimator.update(pose(0.36), 200);
  assert.equal(estimator.update(pose(0.36), 300), -1);
  for (let time = 400; time <= 3000; time += 100)
    assert.equal(estimator.update(pose(0.36), time), null);
  estimator.update(pose(), 3100);
  estimator.update(pose(0.7, 0.36), 3200);
  assert.equal(estimator.update(pose(0.7, 0.36), 3300), 1);
});

test("player 2 can steer with the other wrist obscured, and cannot rearm from an obscured active hand", () => {
  const estimator = new SteeringEstimator();
  const down = pose();
  down[15].visibility = 0.1;
  assert.equal(estimator.update(down, 0), null);
  const right = pose(0.7, 0.36);
  right[15].visibility = 0.1;
  assert.equal(estimator.update(right, 100), null);
  assert.equal(estimator.update(right, 200), 1);
  const missing = pose();
  missing[16].visibility = 0.1;
  for (const time of [300, 400, 500])
    assert.equal(estimator.update(missing, time), null);
  assert.equal(estimator.update(right, 600), null);
  assert.equal(
    estimator.update(right, 700),
    null,
    "lost active wrist is not a lower-hand release",
  );
  estimator.update(down, 800);
  estimator.update(right, 900);
  assert.equal(estimator.update(right, 1000), 1);
});

test("hand gestures require shoulders and the relevant wrist, not knees, ankles or hips", () => {
  const estimator = new SteeringEstimator();
  const down = pose();
  for (const index of [16, 23, 24, 25, 26, 27, 28])
    down[index].visibility = 0.1;
  estimator.update(down, 0);
  const hand = pose(0.36);
  for (const index of [16, 23, 24, 25, 26, 27, 28])
    hand[index].visibility = 0.1;
  estimator.update(hand, 100);
  assert.equal(estimator.update(hand, 200), -1);
});

test("a small mirrored upperbody lean changes each direction and returns upright to rearm", () => {
  const estimator = new SteeringEstimator();
  neutral(estimator);
  assert.equal(estimator.update(pose(0.7, 0.7, 0.045), 200), null);
  assert.equal(estimator.cue(), "left");
  assert.equal(estimator.update(pose(0.7, 0.7, 0.045), 300), -1);
  for (const time of [400, 500, 600])
    assert.equal(estimator.update(pose(0.7, 0.7, 0.045), time), null);
  estimator.update(pose(), 700);
  estimator.update(pose(0.7, 0.7, -0.045), 800);
  assert.equal(estimator.update(pose(0.7, 0.7, -0.045), 900), 1);
});

test("a relaxed asymmetric posture is calibrated without becoming an initial lean command", () => {
  const estimator = new SteeringEstimator();
  neutral(estimator, 0.035);
  for (let time = 200; time <= 1200; time += 100)
    assert.equal(estimator.update(pose(0.7, 0.7, 0.035), time), null);
  estimator.update(pose(0.7, 0.7, 0.08), 1300);
  assert.equal(estimator.update(pose(0.7, 0.7, 0.08), 1400), -1);
});

test("body lean works when both wrists are outside the image", () => {
  const estimator = new SteeringEstimator();
  const body = (offset: number) => {
    const points = pose(0.7, 0.7, offset);
    points[15].visibility = 0.1;
    points[16].visibility = 0.1;
    return points;
  };
  estimator.update(body(0), 0);
  estimator.update(body(0), 100);
  estimator.update(body(-0.05), 200);
  assert.equal(estimator.update(body(-0.05), 300), 1);
});

test("naturally bent arms at the chest do not block the separate body-lean control", () => {
  const estimator = new SteeringEstimator();
  estimator.update(pose(0.36, 0.36), 0);
  estimator.update(pose(0.36, 0.36), 100);
  estimator.update(pose(0.36, 0.36, 0.045), 200);
  assert.equal(estimator.update(pose(0.36, 0.36, 0.045), 300), -1);
  estimator.update(pose(0.36, 0.36), 400);
  estimator.update(pose(0.36, 0.36, -0.045), 500);
  assert.equal(estimator.update(pose(0.36, 0.36, -0.045), 600), 1);
});

test("lean uses physical image aspect rather than changing sensitivity with crop width", () => {
  for (const aspect of [0.6, 1.2, 1.8]) {
    const estimator = new SteeringEstimator();
    const options = { imageAspect: aspect };
    estimator.update(pose(), 0, options);
    estimator.update(pose(), 100, options);
    estimator.update(pose(0.7, 0.7, 0.045 / aspect), 200, options);
    assert.equal(
      estimator.update(pose(0.7, 0.7, 0.045 / aspect), 300, options),
      -1,
    );
  }
});

test("normal low arm swing, small gait sway and wholebody translation do not steer", () => {
  const estimator = new SteeringEstimator();
  neutral(estimator);
  for (let frame = 2; frame <= 40; frame++) {
    const wave = Math.sin(frame * 0.7);
    const points = pose(0.49 + wave * 0.04, 0.49 - wave * 0.04, wave * 0.012);
    for (const point of points) {
      point.x += 0.015 * wave;
      point.y += 0.008 * wave;
    }
    assert.equal(estimator.update(points, frame * 100), null);
  }
});

test("brief hand crossing or leaning for less than 100ms does not steer", () => {
  const estimator = new SteeringEstimator();
  neutral(estimator);
  for (let time = 200; time < 1200; time += 200) {
    assert.equal(estimator.update(pose(0.36), time), null);
    assert.equal(estimator.update(pose(), time + 90), null);
  }
  estimator.update(pose(0.7, 0.7, 0.05), 1300);
  assert.equal(estimator.update(pose(), 1399), null);
});

test("simultaneously raised hands cancel confirmation and require a clear release", () => {
  const estimator = new SteeringEstimator();
  neutral(estimator);
  estimator.update(pose(0.36), 200);
  for (let time = 300; time <= 800; time += 100)
    assert.equal(estimator.update(pose(0.36, 0.36), time), null);
  assert.equal(estimator.update(pose(0.7, 0.36), 900), null);
  assert.equal(estimator.update(pose(0.7, 0.36), 1000), null);
  estimator.update(pose(), 1100);
  estimator.update(pose(0.7, 0.36), 1200);
  assert.equal(estimator.update(pose(0.7, 0.36), 1300), 1);
});

test("a short cooldown preserves intentional fast commands without duplicate firing", () => {
  const estimator = new SteeringEstimator();
  neutral(estimator);
  estimator.update(pose(0.36), 200);
  assert.equal(estimator.update(pose(0.36), 300), -1);
  estimator.update(pose(), 320);
  estimator.update(pose(0.7, 0.36), 350);
  assert.equal(estimator.update(pose(0.7, 0.36), 450), null);
  assert.equal(estimator.update(pose(0.7, 0.36), 519), null);
  assert.equal(estimator.update(pose(0.7, 0.36), 520), 1);
});

test("missing shoulders and nonfinite relevant joints discard partial commands", () => {
  for (const joint of [11, 12, 15]) {
    const estimator = new SteeringEstimator();
    neutral(estimator);
    estimator.update(pose(0.36), 200);
    const bad = pose(0.36);
    bad[joint].visibility = 0.1;
    assert.equal(estimator.update(bad, 300), null);
    if (joint !== 15) assert.equal(estimator.cue(), "positioning");
  }
  const estimator = new SteeringEstimator();
  estimator.update(pose(), 0);
  const bad = pose();
  bad[11].y = NaN;
  assert.equal(estimator.update(bad, 100), null);
  assert.equal(estimator.update(undefined, 200), null);
  assert.equal(estimator.update(pose(0.36), Infinity), null);
});

test("time reversal, reset and long gaps do not finish an earlier hand command", () => {
  for (const nextTime of [50, 5000]) {
    const estimator = new SteeringEstimator();
    neutral(estimator);
    estimator.update(pose(0.36), 200);
    assert.equal(estimator.update(pose(0.36), nextTime), null);
    assert.equal(estimator.update(pose(0.36), nextTime + 400), null);
  }
  const estimator = new SteeringEstimator();
  neutral(estimator);
  estimator.update(pose(0.36), 200);
  estimator.reset();
  assert.equal(estimator.cue(), "positioning");
  assert.equal(estimator.update(pose(0.36), 300), null);
});

test("slow live inference can confirm one gesture while a held pose never repeats", () => {
  const estimator = new SteeringEstimator();
  estimator.update(pose(), 0);
  assert.equal(estimator.update(pose(0.36), 1900), null);
  assert.equal(estimator.update(pose(0.36), 3800), -1);
  assert.equal(estimator.update(pose(0.36), 5700), null);
});

test("players keep independent neutral calibration, wrists and command histories", () => {
  const players = [new SteeringEstimator(), new SteeringEstimator()];
  neutral(players[0], 0.02);
  neutral(players[1], -0.02);
  players[0].update(pose(0.7, 0.7, 0.07), 200);
  const right = pose(0.7, 0.36, -0.02);
  right[15].visibility = 0.1;
  players[1].update(right, 200);
  assert.equal(players[0].update(pose(0.7, 0.7, 0.07), 300), -1);
  assert.equal(players[1].update(right, 300), 1);
  players[0].reset();
  assert.equal(players[0].update(pose(0.7, 0.7, 0.07), 400), null);
  assert.equal(players[1].update(right, 400), null);
});
