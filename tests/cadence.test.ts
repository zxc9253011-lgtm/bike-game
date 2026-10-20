import assert from "node:assert/strict";
import test from "node:test";
import { CadenceEstimator } from "../src/lib/cadence.ts";

const FRAME_MS = 1000 / 30;

function pedal(
  estimator: CadenceEstimator,
  targetRpm: number,
  seconds = 18,
): number {
  let result = 0;
  for (let frame = 0; frame <= seconds * 30; frame++) {
    const signal =
      0.4 + 0.3 * Math.sin((((2 * Math.PI * targetRpm) / 60) * frame) / 30);
    result = estimator.update(signal, frame * FRAME_MS);
  }
  return result;
}

for (const rpm of [30, 60, 90]) {
  test(`measures ${rpm} full pedal revolutions per minute without double counting legs`, () => {
    const estimated = pedal(new CadenceEstimator(), rpm);
    assert.ok(
      Math.abs(estimated - rpm) < 3,
      `expected approximately ${rpm} rpm, received ${estimated}`,
    );
  });
}

test("a stationary person with camera jitter does not generate movement", () => {
  const estimator = new CadenceEstimator();
  for (let frame = 0; frame < 30 * 20; frame++) {
    const jitter =
      Math.sin(frame * 0.8) * 0.008 + Math.cos(frame * 1.7) * 0.004;
    assert.equal(estimator.update(0.4 + jitter, frame * FRAME_MS), 0);
  }
});

test("stopping pedaling returns the cadence to zero after 1.6 seconds", () => {
  for (const targetRpm of [30, 60, 90]) {
    const estimator = new CadenceEstimator();
    assert.ok(pedal(estimator, targetRpm) > 0);
    let result = 0;
    for (let frame = 1; frame <= 48; frame++) {
      result = estimator.update(0.4, 18000 + frame * FRAME_MS);
    }
    assert.equal(
      result,
      0,
      `stationary legs must stop the ${targetRpm} rpm signal`,
    );
  }
});

test("nonfinite inputs are rejected without producing nonfinite cadence", () => {
  const estimator = new CadenceEstimator();
  for (const value of [NaN, Infinity, -Infinity]) {
    assert.equal(estimator.update(value, 100), 0);
    assert.equal(estimator.update(0.4, value), 0);
  }
  assert.ok(Math.abs(pedal(estimator, 60) - 60) < 3);
});

test("a reversed timestamp or long frame gap discards the previous motion", () => {
  for (const nextTime of [100, 22000]) {
    const estimator = new CadenceEstimator();
    assert.ok(pedal(estimator, 60) > 0);
    assert.equal(estimator.update(0.4, nextTime), 0);
    for (let frame = 1; frame < 90; frame++) {
      assert.equal(estimator.update(0.4, nextTime + frame * FRAME_MS), 0);
    }
  }
});

test("explicit reset starts a new ride with no inherited cadence", () => {
  const estimator = new CadenceEstimator();
  assert.ok(pedal(estimator, 90) > 0);
  estimator.reset();
  assert.equal(estimator.update(0.4, 0), 0);
  assert.ok(Math.abs(pedal(estimator, 30) - 30) < 3);
});

test("slow inference retains multiple pedal samples and detects full turns", () => {
  const estimator = new CadenceEstimator();
  let result = 0;
  // A genuine 7.6-second full turn sampled every 1.9 seconds. The former
  // fixed 1.6-second window contained only one point and could never move.
  for (let frame = 0; frame <= 40; frame++) {
    result = estimator.update(
      0.4 + 0.3 * Math.sin((frame * Math.PI) / 2),
      frame * 1900,
      5000,
    );
  }
  assert.ok(
    Math.abs(result - 60000 / 7600) < 0.01,
    `expected a slow full-turn rate, received ${result}`,
  );
  for (let frame = 41; frame <= 50; frame++)
    result = estimator.update(0.4, frame * 1900, 5000);
  assert.equal(
    result,
    0,
    "slow inference must still detect that motion has stopped",
  );
});

test("a low-frame-rate stationary person never manufactures pedal movement", () => {
  const estimator = new CadenceEstimator();
  for (let frame = 0; frame <= 30; frame++) {
    assert.equal(
      estimator.update(0.4 + Math.sin(frame) * 0.008, frame * 1900, 5000),
      0,
    );
  }
});
