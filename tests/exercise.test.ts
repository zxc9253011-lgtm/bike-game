import assert from "node:assert/strict";
import test from "node:test";
import {
  exerciseNames,
  exerciseSpeed,
  usesSteps,
} from "../src/lib/exercise.ts";
import { analyzeLegPose } from "../src/lib/motion.ts";

test("boxing is an upper-body mode and never produces travel or leg cadence", () => {
  assert.equal(exerciseNames.boxing, "雙人拳擊");
  assert.equal(usesSteps("boxing"), false);
  for (const cadence of [0, 90, NaN, Infinity])
    assert.equal(exerciseSpeed("boxing", cadence), 0);
  assert.equal(analyzeLegPose(undefined, 1, "boxing"), null);
});

test("adding boxing retains the original exercise speed and step modes", () => {
  assert.equal(usesSteps("seated"), false);
  assert.equal(usesSteps("standing"), true);
  assert.equal(usesSteps("running"), true);
  assert.ok(Math.abs(exerciseSpeed("seated", 50) - 14) < 1e-9);
  assert.ok(Math.abs(exerciseSpeed("standing", 50) - 14) < 1e-9);
  assert.equal(exerciseSpeed("running", 50), 8);
});
