import assert from "node:assert/strict";
import test from "node:test";
import { HighKneeEstimator } from "../src/lib/highKnee.ts";

const DOWN = -0.55;
const HIGH = 0.04;

function step(estimator: HighKneeEstimator, side: 0 | 1, finishTime: number) {
  estimator.update(
    side === 0 ? HIGH : DOWN,
    side === 1 ? HIGH : DOWN,
    finishTime - 200,
  );
  return estimator.update(DOWN, DOWN, finishTime);
}

test("counts complete alternating high knees and converts steps to full-turn RPM", () => {
  const estimator = new HighKneeEstimator();
  assert.deepEqual(estimator.update(DOWN, DOWN, 0), {
    cadence: 0,
    steps: 0,
    feedback: "raise",
  });
  assert.deepEqual(step(estimator, 0, 400), {
    cadence: 60,
    steps: 1,
    feedback: "good",
  });
  let result = step(estimator, 1, 900);
  assert.equal(result.cadence, 60, "120 steps/min is 60 pedal-equivalent RPM");
  for (let index = 2; index < 10; index++) {
    result = step(estimator, (index % 2) as 0 | 1, 400 + index * 500);
  }
  assert.equal(result.steps, 10);
  assert.equal(result.cadence, 60);
});

test("shuffling and lifts below hip-height tolerance do not count", () => {
  const estimator = new HighKneeEstimator();
  estimator.update(DOWN, DOWN, 0);
  for (let index = 0; index < 20; index++) {
    const time = 200 + index * 400;
    estimator.update(index % 2 ? DOWN : -0.12, index % 2 ? -0.12 : DOWN, time);
    assert.equal(estimator.update(DOWN, DOWN, time + 180).steps, 0);
  }
});

test("a knee must first be down, then high, then down; holding it high never repeats", () => {
  const estimator = new HighKneeEstimator();
  for (let time = 0; time <= 3000; time += 100) {
    const result = estimator.update(HIGH, DOWN, time);
    assert.equal(result.steps, 0);
    assert.equal(result.feedback, "lower");
  }
  assert.equal(estimator.update(DOWN, DOWN, 3100).steps, 0);
  estimator.update(HIGH, DOWN, 3300);
  for (let time = 3400; time <= 6000; time += 100) {
    assert.equal(estimator.update(HIGH, DOWN, time).steps, 0);
  }
  assert.equal(estimator.update(DOWN, DOWN, 6100).steps, 1);
  assert.equal(
    step(estimator, 0, 6600).steps,
    1,
    "the same leg cannot score twice",
  );
  assert.equal(step(estimator, 1, 7100).steps, 2);
});

test("both knees rising together do not count as alternating steps", () => {
  const estimator = new HighKneeEstimator();
  estimator.update(DOWN, DOWN, 0);
  estimator.update(HIGH, HIGH, 200);
  assert.equal(estimator.update(DOWN, DOWN, 400).steps, 0);
});

test("lowering and raising thresholds have hysteresis", () => {
  const estimator = new HighKneeEstimator();
  estimator.update(-0.3, DOWN, 0);
  estimator.update(-0.08, DOWN, 200);
  for (let index = 0; index < 10; index++) {
    assert.equal(
      estimator.update(index % 2 ? -0.09 : -0.07, DOWN, 250 + index * 30).steps,
      0,
    );
  }
  assert.equal(estimator.update(-0.3, DOWN, 600).steps, 1);
});

test("two seconds idle stops cadence while retaining completed steps", () => {
  const estimator = new HighKneeEstimator();
  estimator.update(DOWN, DOWN, 0);
  step(estimator, 0, 400);
  assert.equal(step(estimator, 1, 900).cadence, 60);
  for (let time = 1000; time < 2900; time += 100) {
    assert.equal(estimator.update(DOWN, DOWN, time).steps, 2);
  }
  assert.deepEqual(estimator.update(DOWN, DOWN, 2900), {
    steps: 2,
    cadence: 0,
    feedback: "raise",
  });
  assert.ok(
    step(estimator, 0, 3400).cadence > 0,
    "the next slow step still has a timing reference",
  );
  assert.ok(step(estimator, 1, 3900).cadence > 0);
});

test("slow alternating high knees at 2 to 5 seconds per step generate speed", () => {
  for (const period of [2000, 2400, 3000, 5000]) {
    const estimator = new HighKneeEstimator();
    let result = estimator.update(DOWN, DOWN, 0);
    let counted = 0;
    for (let time = 100; time <= period * 6; time += 100) {
      const cycle = Math.floor(time / period);
      const progress = (time % period) / period;
      const lift = progress >= 0.2 && progress < 0.7 ? HIGH : DOWN;
      result = estimator.update(
        cycle % 2 ? DOWN : lift,
        cycle % 2 ? lift : DOWN,
        time,
      );
      if (result.steps > counted) {
        assert.ok(
          result.cadence > 0,
          `${period}ms: a completed slow step must move the bike`,
        );
        counted = result.steps;
      }
    }
    assert.equal(result.steps, 6);
    assert.ok(
      Math.abs(result.cadence - 30000 / period) < 0.001,
      `${period}ms: speed follows actual step timing`,
    );
    const stopped = estimator.update(DOWN, DOWN, period * 6 + 100);
    assert.equal(stopped.steps, 6);
  }
});

test("the first complete lift gives a bounded speed estimate after both raising and lowering", () => {
  const estimator = new HighKneeEstimator();
  for (let time = 0; time <= 4000; time += 100)
    estimator.update(DOWN, DOWN, time);
  estimator.update(-0.2, DOWN, 4200);
  estimator.update(HIGH, DOWN, 4500);
  assert.equal(
    estimator.update(HIGH, DOWN, 4700).cadence,
    0,
    "holding a raised knee has not completed a step",
  );
  const result = estimator.update(DOWN, DOWN, 5000);
  assert.equal(result.steps, 1);
  assert.equal(
    result.cadence,
    30,
    "the first estimate includes the entire one-second lift, excluding time spent waiting",
  );
});

test("a slow pace stops after its adaptive timeout and restarts after a long rest", () => {
  const estimator = new HighKneeEstimator();
  estimator.update(DOWN, DOWN, 0);
  let reading = estimator.update(DOWN, DOWN, 0);
  for (let time = 100; time <= 9000; time += 100) {
    const cycle = Math.floor(time / 3000);
    const high = time % 3000 >= 1000 && time % 3000 < 2000;
    reading = estimator.update(
      cycle % 2 || !high ? DOWN : HIGH,
      cycle % 2 && high ? HIGH : DOWN,
      time,
    );
  }
  assert.equal(reading.cadence, 10);
  const steps = reading.steps;
  for (let time = 9100; time <= 16000; time += 100)
    reading = estimator.update(DOWN, DOWN, time);
  assert.equal(reading.cadence, 0);
  assert.equal(reading.steps, steps);
  assert.ok(
    step(estimator, 0, 16400).cadence > 0,
    "a complete lift restarts after a long rest, including the same side",
  );
});

test("tracking gaps and reversed timestamps discard incomplete lifts, preserving the count", () => {
  for (const resumeTime of [100, 5000]) {
    const estimator = new HighKneeEstimator();
    estimator.update(DOWN, DOWN, 0);
    step(estimator, 0, 400);
    step(estimator, 1, 900);
    estimator.update(HIGH, DOWN, 1100);
    const afterGap = estimator.update(DOWN, DOWN, resumeTime);
    assert.equal(afterGap.cadence, 0);
    assert.equal(afterGap.steps, 2);
    assert.equal(step(estimator, 0, resumeTime + 400).steps, 3);
  }
});

test("suspend clears partial motion while reset also clears workout steps", () => {
  const estimator = new HighKneeEstimator();
  estimator.update(DOWN, DOWN, 0);
  step(estimator, 0, 400);
  estimator.update(DOWN, HIGH, 600);
  estimator.suspend();
  assert.equal(estimator.update(DOWN, DOWN, 700).steps, 1);
  assert.equal(step(estimator, 1, 1100).steps, 2);
  estimator.reset();
  assert.deepEqual(estimator.update(DOWN, DOWN, 0), {
    cadence: 0,
    steps: 0,
    feedback: "raise",
  });
});

test("nonfinite inputs and duplicate timestamps cannot manufacture steps or cadence", () => {
  const estimator = new HighKneeEstimator();
  estimator.update(DOWN, DOWN, 0);
  assert.equal(estimator.update(HIGH, DOWN, 0).steps, 0);
  assert.equal(estimator.update(DOWN, DOWN, 100).steps, 0);
  for (const invalid of [NaN, Infinity, -Infinity]) {
    assert.equal(estimator.update(invalid, DOWN, 200).cadence, 0);
    assert.equal(estimator.update(DOWN, invalid, 300).steps, 0);
    assert.equal(estimator.update(DOWN, DOWN, invalid).cadence, 0);
  }
});

test("slow but live inference preserves a complete high knee across long frame intervals", () => {
  const estimator = new HighKneeEstimator();
  let reading = estimator.update(DOWN, DOWN, 0, 5000);
  for (let step = 0; step < 5; step++) {
    const left = step % 2 === 0;
    reading = estimator.update(
      left ? HIGH : DOWN,
      left ? DOWN : HIGH,
      (step * 2 + 1) * 1900,
      5000,
    );
    assert.equal(reading.steps, step);
    reading = estimator.update(DOWN, DOWN, (step * 2 + 2) * 1900, 5000);
    assert.equal(reading.steps, step + 1);
    assert.ok(
      reading.cadence > 0,
      "a live 1.9-second camera interval must not cancel each raised phase",
    );
  }
  assert.ok(Math.abs(reading.cadence - 30000 / 3800) < 0.001);
  assert.equal(
    estimator.update(DOWN, DOWN, 26000, 5000).cadence,
    0,
    "a gap beyond the bounded tolerance still discards old motion",
  );
});
