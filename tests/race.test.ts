import assert from "node:assert/strict";
import test from "node:test";
import { advanceRace, createRaceState } from "../src/lib/race.ts";

test("advances independent rider speeds in meters and keeps its input unchanged", () => {
  const initial = createRaceState();
  const next = advanceRace(initial, [36, 18], 2, 1000);
  assert.deepEqual(next, { elapsed: 2, distances: [20, 10], result: null });
  assert.deepEqual(initial, { elapsed: 0, distances: [0, 0], result: null });
});

test("a stopped rider still races against an independently moving opponent", () => {
  const next = advanceRace(createRaceState(), [0, 36], 2, 1000);
  assert.deepEqual(next.distances, [0, 20]);
  assert.equal(next.elapsed, 2);
});

test("compares fractional finish times rather than final frame distances or player order", () => {
  const initial = { elapsed: 4, distances: [99, 96] as [number, number], result: null };
  const result = advanceRace(initial, [3.6, 36], 2, 100);
  assert.equal(result.result?.winner, 2);
  assert.equal(result.elapsed, 4.4);
  assert.equal(result.result.elapsed, result.elapsed);
  assert.deepEqual(result.distances, [99.4, 100]);
});

test("both riders advance only until the first finish within a long frame", () => {
  const result = advanceRace(
    { elapsed: 2, distances: [95, 98], result: null },
    [36, 3.6],
    10,
    100,
  );
  assert.deepEqual(result, {
    elapsed: 2.5,
    distances: [100, 98.5],
    result: { winner: 1, elapsed: 2.5 },
  });
});

test("matching crossing times produce a tie even with different speeds and starting distances", () => {
  const result = advanceRace(
    { elapsed: 1, distances: [90, 80], result: null },
    [36, 72],
    2,
    100,
  );
  assert.deepEqual(result, {
    elapsed: 2,
    distances: [100, 100],
    result: { winner: "tie", elapsed: 2 },
  });
});

test("sub-microsecond crossing differences count as a tie", () => {
  const nearTie = advanceRace(
    { elapsed: 0, distances: [99, 98.9999995], result: null },
    [3.6, 3.6],
    2,
    100,
  );
  assert.equal(nearTie.result?.winner, "tie");
  assert.deepEqual(nearTie.distances, [100, 100]);
  const clearWinner = advanceRace(
    { elapsed: 0, distances: [99, 98.999998], result: null },
    [3.6, 3.6],
    2,
    100,
  );
  assert.equal(clearWinner.result?.winner, 1);
});

test("a finish exactly at the frame boundary is recorded", () => {
  const result = advanceRace(createRaceState(), [36, 18], 10, 100);
  assert.deepEqual(result.distances, [100, 50]);
  assert.deepEqual(result.result, { winner: 1, elapsed: 10 });
});

test("paused or invalid durations keep the race unchanged", () => {
  const initial = advanceRace(createRaceState(), [36, 18], 2, 1000);
  for (const dt of [0, -1, NaN, Infinity, -Infinity]) {
    assert.equal(advanceRace(initial, [36, 36], dt, 1000), initial);
  }
});

test("invalid or negative speeds stop that rider without moving backward or poisoning the race", () => {
  for (const speed of [-36, NaN, Infinity, -Infinity]) {
    const result = advanceRace(
      { elapsed: 2, distances: [10, 10], result: null },
      [speed, 36],
      1,
      1000,
    );
    assert.deepEqual(result.distances, [10, 20]);
    assert.equal(result.elapsed, 3);
  }
});

test("a recorded winner and both distances stay frozen after the finish", () => {
  const finished = advanceRace(createRaceState(), [36, 18], 20, 100);
  assert.equal(advanceRace(finished, [0, 180], 100, 100), finished);
  assert.deepEqual(finished.distances, [100, 50]);
});

test("invalid finish distances do not start or corrupt the race", () => {
  const initial = createRaceState();
  for (const target of [0, -1, NaN, Infinity]) {
    assert.equal(advanceRace(initial, [36, 36], 1, target), initial);
  }
});
