import assert from "node:assert/strict";
import test from "node:test";
import {
  advanceCognitivePlayer,
  advanceCognitiveState,
  cognitiveRow,
  cognitiveSummary,
  createCognitiveState,
  setCognitiveLane,
  type Lane,
} from "../src/lib/cognitiveRun.ts";

test("every row has one requested coin and safe alternatives with deterministic independent layouts", () => {
  for (const player of [0, 1] as const) {
    for (let index = 0; index < 48; index++) {
      const row = cognitiveRow(index, player);
      assert.deepEqual(
        row.items.map((item) => item.lane),
        [-1, 0, 1],
      );
      assert.equal(
        row.items.filter((item) => item.kind === row.target).length,
        1,
      );
      assert.equal(row.items.filter((item) => item.kind === "bomb").length, 1);
      assert.equal(row.items.filter((item) => item.kind !== "bomb").length, 2);
      assert.deepEqual(row, cognitiveRow(index, player));
      assert.equal(row.distance, 12 + index * 18);
    }
    assert.equal(
      cognitiveRow(0, player).items.find((item) => item.lane === 0)?.kind,
      "star",
    );
  }
  assert.notDeepEqual(cognitiveRow(1, 0).items, cognitiveRow(1, 1).items);
});

test("the requested coin switches every four rows and repeats the practice", () => {
  assert.deepEqual(
    Array.from({ length: 12 }, (_, index) => cognitiveRow(index, 0).target),
    [
      "star",
      "star",
      "star",
      "star",
      "leaf",
      "leaf",
      "leaf",
      "leaf",
      "star",
      "star",
      "star",
      "star",
    ],
  );
});

test("a correct coin collects ten points plus safe avoidance without changing its input", () => {
  const initial = createCognitiveState();
  const next = advanceCognitivePlayer(initial[0], 12, 0);
  assert.equal(next.coins, 1);
  assert.equal(next.avoided, 1);
  assert.equal(next.score, 13);
  assert.equal(next.choices, 1);
  assert.equal(next.nextRow, 1);
  assert.equal(next.lastEvent?.result, "coin");
  assert.equal(cognitiveSummary(next).accuracy, 100);
  assert.equal(initial[0].coins, 0);
  assert.equal(initial[0].nextRow, 0);
});

test("bomb and non-target coin choices give distinct gentle feedback without deductions", () => {
  const initial = advanceCognitivePlayer(createCognitiveState()[0], 12, 0);
  const row = cognitiveRow(1, 0);
  for (const kind of ["bomb", "star", "leaf"] as const) {
    const lane = row.items.find((item) => item.kind === kind)!.lane;
    const next = advanceCognitivePlayer({ ...initial, lane }, row.distance, 0);
    assert.ok(next.score >= initial.score);
    if (kind === "bomb") {
      assert.equal(next.bombHits, 1);
      assert.equal(next.avoided, initial.avoided);
      assert.equal(next.score, initial.score);
      assert.equal(next.lastEvent?.result, "bomb");
    } else if (kind !== row.target) {
      assert.equal(next.wrongCoins, 1);
      assert.equal(next.coins, initial.coins);
      assert.equal(next.score, initial.score + 3);
      assert.equal(next.lastEvent?.result, "wrong-coin");
    } else assert.equal(next.coins, initial.coins + 1);
    assert.ok(next.lastEvent?.message.length);
  }
});

test("the same position or a backwards and invalid distance never processes a row again", () => {
  const progressed = advanceCognitivePlayer(createCognitiveState()[0], 48, 0);
  for (const distance of [48, 47, -1, NaN, Infinity, -Infinity, 1e30]) {
    assert.equal(advanceCognitivePlayer(progressed, distance, 0), progressed);
  }
  assert.equal(progressed.choices, 3);
});

test("one skipped rendering frame resolves all crossed rows exactly once", () => {
  let gradual = createCognitiveState()[0];
  for (let distance = 1; distance <= 150; distance++)
    gradual = advanceCognitivePlayer(gradual, distance, 0);
  const skipped = advanceCognitivePlayer(createCognitiveState()[0], 150, 0);
  assert.deepEqual(skipped, gradual);
  assert.equal(skipped.choices, 8);
  assert.equal(skipped.lastEvent?.row, 7);
});

test("players advance and steer independently; stationary players stay unchanged", () => {
  const initial = createCognitiveState();
  const steered = setCognitiveLane(initial, 0, -1);
  assert.equal(steered[0].lane, -1);
  assert.equal(steered[1], initial[1]);
  const next = advanceCognitiveState(steered, [30, 0]);
  assert.equal(next[0].choices, 2);
  assert.equal(next[1], initial[1]);
  assert.equal(next[1].coins, 0);
  assert.equal(initial[0].lane, 0);
  assert.equal(advanceCognitiveState(next, [30, 0]), next);
});

test("lane choices apply to the next crossing and cannot retroactively change a score", () => {
  let state = advanceCognitiveState(createCognitiveState(), [12, 0]);
  const initialScore = state[0].score;
  state = setCognitiveLane(state, 0, -1);
  assert.equal(state[0].score, initialScore);
  assert.equal(advanceCognitiveState(state, [12, 0]), state);
  assert.equal(setCognitiveLane(state, 0, -1), state);
  for (const badLane of [-2, 2, NaN, Infinity])
    assert.equal(setCognitiveLane(state, 0, badLane as Lane), state);
});

test("summary is a game-only result and a new session clears both players", () => {
  const initial = createCognitiveState();
  assert.equal(cognitiveSummary(initial)[0].accuracy, null);
  const state = advanceCognitiveState(initial, [30, 12]);
  const summary = cognitiveSummary(state);
  assert.equal(summary[0].choices, 2);
  assert.equal(summary[1].choices, 1);
  assert.deepEqual(
    cognitiveSummary(createCognitiveState()),
    cognitiveSummary(initial),
  );
  assert.equal(summary[0].accuracy, Math.round((state[0].coins / 2) * 100));
});
