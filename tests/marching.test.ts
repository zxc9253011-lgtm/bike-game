import assert from "node:assert/strict";
import test from "node:test";
import { MarchingEstimator } from "../src/lib/marching.ts";

const DOWN = -0.75;
const LOW_STEP = -0.68;

function replay(period = 1000, baseline: [number, number] = [DOWN, DOWN]) {
  const estimator = new MarchingEstimator();
  let reading = estimator.update(...baseline, 0);
  let lastStepReading = reading;
  for (let time = 50; time <= period * 8; time += 50) {
    const cycle = Math.floor(time / period);
    const phase = (time % period) / period;
    const lift = phase > 0.2 && phase < 0.65 ? 0.07 : 0;
    const previousSteps = reading.steps;
    reading = estimator.update(
      baseline[0] + (cycle % 2 === 0 ? lift : 0),
      baseline[1] + (cycle % 2 === 1 ? lift : 0),
      time,
    );
    if (reading.steps > previousSteps) lastStepReading = reading;
  }
  return { estimator, reading, lastStepReading };
}

test("gentle alternating steps count while both knees stay far below hip height", () => {
  const { reading } = replay();
  assert.equal(reading.steps, 8);
  assert.equal(
    reading.cadence,
    30,
    "60 gentle steps/min is 30 equivalent turns/min",
  );
  assert.equal(reading.feedback, "good");
});

test("marching adapts to different initial knee heights without an absolute target", () => {
  for (const baseline of [
    [-1.1, -0.95],
    [-0.55, -0.73],
    [-0.28, -0.4],
  ] as [number, number][]) {
    const { reading } = replay(1000, baseline);
    assert.equal(reading.steps, 8);
    assert.equal(reading.cadence, 30);
  }
});

test("the first gentle movement starts a conservative speed estimate", () => {
  const estimator = new MarchingEstimator();
  estimator.update(DOWN, DOWN, 0);
  const reading = estimator.update(LOW_STEP, DOWN, 300);
  assert.equal(reading.steps, 1);
  assert.equal(reading.cadence, 15);
});

test("a tiny gentle lift responds within its first 100ms camera interval", () => {
  const estimator = new MarchingEstimator();
  estimator.update(DOWN, DOWN, 0);
  estimator.update(DOWN, DOWN, 100);
  const reading = estimator.update(DOWN + 0.035, DOWN, 200);
  assert.equal(
    reading.steps,
    1,
    "the unchanged movement band is reached without an extra delayed frame",
  );
  assert.equal(reading.cadence, 15);
});

test("stationary knee jitter and moving both legs together do not count", () => {
  for (const commonMovement of [false, true]) {
    const estimator = new MarchingEstimator();
    for (let time = 0; time <= 20000; time += 50) {
      const common = commonMovement ? Math.sin(time / 500) * 0.12 : 0;
      const left = DOWN + common + Math.sin(time / 47) * 0.006;
      const right = DOWN + common + Math.cos(time / 53) * 0.006;
      const reading = estimator.update(left, right, time);
      assert.equal(reading.steps, 0);
      assert.equal(reading.cadence, 0);
    }
  }
});

test("holding one leg or repeatedly using the same leg does not repeat steps", () => {
  const held = new MarchingEstimator();
  held.update(DOWN, DOWN, 0);
  for (let time = 50; time <= 15000; time += 50) {
    assert.equal(held.update(LOW_STEP, DOWN, time).steps, 1);
  }
  assert.equal(held.update(LOW_STEP, DOWN, 15050).cadence, 0);

  const repeated = new MarchingEstimator();
  repeated.update(DOWN, DOWN, 0);
  for (let time = 50; time <= 15000; time += 50) {
    const up = time % 1000 >= 200 && time % 1000 < 600;
    assert.ok(repeated.update(up ? LOW_STEP : DOWN, DOWN, time).steps <= 1);
  }
});

test("slow alternating steps continue to generate cadence at 2 to 5 seconds per step", () => {
  for (const period of [2000, 2400, 3000, 5000]) {
    const { reading, lastStepReading } = replay(period);
    assert.equal(
      reading.steps,
      8,
      `${period}ms: all shallow steps should count`,
    );
    assert.ok(
      Math.abs(lastStepReading.cadence - 30000 / period) < 0.001,
      "the measured pace stays available when each slow step occurs, even after a still interval",
    );
  }
});

test("slow inference can use real 1.9-second frame intervals without resetting every step", () => {
  const estimator = new MarchingEstimator();
  estimator.update(DOWN, DOWN, 0, 5000);
  let reading = estimator.update(LOW_STEP, DOWN, 1900, 5000);
  for (let step = 1; step <= 5; step++) {
    estimator.update(DOWN, DOWN, step * 3800, 5000);
    reading = estimator.update(
      step % 2 ? DOWN : LOW_STEP,
      step % 2 ? LOW_STEP : DOWN,
      step * 3800 + 1900,
      5000,
    );
  }
  assert.equal(reading.steps, 6);
  assert.ok(Math.abs(reading.cadence - 30000 / 3800) < 0.001);
});

test("stopping returns to zero and leaves the completed count intact", () => {
  const { estimator, reading } = replay(2400);
  for (let time = 19250; time <= 27000; time += 50) {
    const result = estimator.update(DOWN, DOWN, time);
    assert.equal(result.steps, reading.steps);
  }
  assert.equal(estimator.update(DOWN, DOWN, 27050).cadence, 0);
});

test("a 10fps stationary signal stops within 800ms while retaining slow-step timing", () => {
  const estimator = new MarchingEstimator();
  estimator.update(DOWN, DOWN, 0);
  let reading = estimator.update(LOW_STEP, DOWN, 100);
  for (let time = 200; time <= 1100; time += 100) {
    reading = estimator.update(
      time < 600 ? LOW_STEP : DOWN,
      time >= 700 ? LOW_STEP : DOWN,
      time,
    );
  }
  assert.equal(reading.steps, 2);
  assert.ok(reading.cadence > 0);
  let stoppedAt: number | null = null;
  for (let time = 1200; time <= 4600; time += 100) {
    const jitter = Math.sin(time / 70) * 0.0005;
    reading = estimator.update(DOWN + jitter, DOWN - jitter, time);
    assert.equal(reading.steps, 2, "still camera noise cannot add steps");
    if (reading.cadence === 0 && stoppedAt === null) stoppedAt = time;
  }
  assert.ok(
    stoppedAt !== null && stoppedAt - 1200 <= 800,
    `stopped at ${stoppedAt}`,
  );
  reading = estimator.update(LOW_STEP, DOWN, 4700);
  assert.equal(reading.steps, 3);
  assert.ok(
    reading.cadence > 0 && reading.cadence < 15,
    "the next slow alternate step uses its retained measured interval rather than a fresh provisional speed",
  );
});

test("holding one raised leg stops promptly without counting or resuming phantom steps", () => {
  const estimator = new MarchingEstimator();
  estimator.update(DOWN, DOWN, 0);
  assert.equal(estimator.update(LOW_STEP, DOWN, 100).steps, 1);
  let reading;
  for (let time = 200; time <= 1000; time += 100) {
    reading = estimator.update(LOW_STEP, DOWN, time);
    assert.equal(reading.steps, 1);
  }
  assert.equal(reading?.cadence, 0);
});

test("continuous slow knee waves retain motion through the top of each gentle step", () => {
  for (const period of [2000, 2400, 3000, 5000]) {
    const estimator = new MarchingEstimator();
    let reading = estimator.update(DOWN, DOWN, 0);
    for (let time = 50; time <= period * 6; time += 50) {
      const cycle = Math.floor(time / period);
      const lift = Math.sin(Math.PI * ((time % period) / period)) * 0.07;
      reading = estimator.update(
        cycle % 2 ? DOWN : DOWN + lift,
        cycle % 2 ? DOWN + lift : DOWN,
        time,
      );
      if (time >= period * 2)
        assert.ok(
          reading.cadence > 0,
          `${period}ms: continuous slow motion was marked stationary at ${time}`,
        );
    }
    assert.equal(reading.steps, 6);
    assert.ok(Math.abs(reading.cadence - 30000 / period) < 0.001);
  }
});

test("suspend preserves steps but requires new motion; reset clears the workout", () => {
  const { estimator, reading } = replay();
  estimator.suspend();
  assert.deepEqual(estimator.update(DOWN, DOWN, 0), {
    cadence: 0,
    steps: reading.steps,
    feedback: "step",
  });
  assert.equal(estimator.update(LOW_STEP, DOWN, 300).steps, reading.steps + 1);
  estimator.reset();
  assert.deepEqual(estimator.update(DOWN, DOWN, 0), {
    cadence: 0,
    steps: 0,
    feedback: "step",
  });
});

test("bad inputs, duplicate times, backward time and long gaps cannot invent steps", () => {
  const estimator = new MarchingEstimator();
  estimator.update(DOWN, DOWN, 0);
  assert.equal(estimator.update(LOW_STEP, DOWN, 0).steps, 0);
  assert.equal(estimator.update(LOW_STEP, DOWN, 5000).steps, 0);
  assert.equal(estimator.update(DOWN, LOW_STEP, 100).steps, 0);
  for (const value of [NaN, Infinity, -Infinity]) {
    assert.equal(estimator.update(value, DOWN, 200).cadence, 0);
    assert.equal(estimator.update(DOWN, value, 300).cadence, 0);
    assert.equal(estimator.update(DOWN, DOWN, value).cadence, 0);
  }
});
