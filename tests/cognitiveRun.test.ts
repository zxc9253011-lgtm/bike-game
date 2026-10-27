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
  DEFAULT_COGNITIVE_SEED,
  COIN_TRAIL_SPACING_METERS,
} from "../src/lib/cognitiveRun.ts";

test("seeded rows always provide a collectible target and a safe route", () => {
  for (const seed of [0, 1, 87, 0xffffffff]) {
    for (const player of [0, 1] as const) {
      let lastDistance = 0;
      for (let index = 0; index < 48; index++) {
        const row = cognitiveRow(index, player, seed);
        assert.equal(
          row.items.filter((item) => item.kind === row.target).length,
          1,
        );
        assert.ok(row.items.length <= 3);
        assert.equal(
          new Set(row.items.map((item) => item.lane)).size,
          row.items.length,
          "one lane never contains conflicting objects",
        );
        assert.ok(
          [-1, 0, 1].some(
            (lane) =>
              row.items.find((item) => item.lane === lane)?.kind !== "bomb",
          ),
        );
        assert.ok(row.distance > lastDistance);
        lastDistance = row.distance;
        assert.deepEqual(row, cognitiveRow(index, player, seed));
        if (row.pattern === "choice") {
          assert.deepEqual(
            row.items.map((item) => item.lane),
            [-1, 0, 1],
          );
          assert.equal(
            row.items.filter((item) => item.kind === "bomb").length,
            1,
          );
        } else {
          assert.equal(row.items.length, 1);
          assert.equal(row.items[0].kind, row.target);
        }
      }
      assert.equal(
        cognitiveRow(0, player, seed).items.find((item) => item.lane === 0)
          ?.kind,
        "star",
      );
    }
  }
  assert.notDeepEqual(cognitiveRow(1, 0).items, cognitiveRow(1, 1).items);
});

test("a session fixes its random seed so preview, collision and replay agree", () => {
  const first = createCognitiveState(173);
  const replay = createCognitiveState(173);
  assert.deepEqual(first, replay);
  assert.ok(
    Array.from({ length: 24 }, (_, index) => index).some(
      (index) =>
        JSON.stringify(cognitiveRow(index, 0, 173).items) !==
        JSON.stringify(cognitiveRow(index, 0, 174).items),
    ),
    "different seeds produce different routes rather than a fixed six-row cycle",
  );
  const seeds = Array.from({ length: 8 }, () => createCognitiveState()[0].seed);
  assert.ok(
    seeds.every(
      (seed) => Number.isInteger(seed) && seed >= 0 && seed <= 0xffffffff,
    ),
  );
  assert.ok(new Set(seeds).size > 1, "new journeys generate new layouts");
  assert.deepEqual(
    cognitiveRow(7, 1),
    cognitiveRow(7, 1, DEFAULT_COGNITIVE_SEED),
    "unseeded direct calls retain a stable compatibility default",
  );
});

test("four consecutive target coins share a lane and keep the same rule", () => {
  const lanes = new Set<number>();
  for (const seed of [1, 2, 3, 4, 5, 6, 7, 8]) {
    for (const player of [0, 1] as const) {
      const trail = Array.from({ length: 4 }, (_, offset) =>
        cognitiveRow(4 + offset, player, seed),
      );
      const lane = trail[0].items[0].lane;
      lanes.add(lane);
      for (let offset = 0; offset < trail.length; offset++) {
        assert.equal(trail[offset].pattern, "coin-trail");
        assert.deepEqual(trail[offset].items, [{ lane, kind: "leaf" }]);
        assert.equal(
          trail[offset].distance,
          84 + offset * COIN_TRAIL_SPACING_METERS,
        );
      }
    }
  }
  assert.deepEqual(
    [...lanes].sort(),
    [-1, 0, 1],
    "continuous chains can appear on each running lane",
  );
  assert.deepEqual(
    Array.from({ length: 8 }, (_, index) => cognitiveRow(index, 0).distance),
    [12, 30, 48, 66, 84, 88, 92, 96],
  );
  assert.equal(cognitiveRow(8, 0).distance, 114);
  assert.ok(
    Number.isFinite(cognitiveRow(1_000_000, 0).distance),
    "distant rows remain available without generating all preceding rows",
  );
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
  const initial = createCognitiveState(DEFAULT_COGNITIVE_SEED);
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
  const initial = advanceCognitivePlayer(
    createCognitiveState(DEFAULT_COGNITIVE_SEED)[0],
    12,
    0,
  );
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
  const progressed = advanceCognitivePlayer(
    createCognitiveState(DEFAULT_COGNITIVE_SEED)[0],
    48,
    0,
  );
  for (const distance of [48, 47, -1, NaN, Infinity, -Infinity, 1e30]) {
    assert.equal(advanceCognitivePlayer(progressed, distance, 0), progressed);
  }
  assert.equal(progressed.choices, 3);
});

test("one skipped rendering frame resolves all crossed rows exactly once", () => {
  let gradual = createCognitiveState(DEFAULT_COGNITIVE_SEED)[0];
  for (let distance = 1; distance <= 150; distance++)
    gradual = advanceCognitivePlayer(gradual, distance, 0);
  const skipped = advanceCognitivePlayer(
    createCognitiveState(DEFAULT_COGNITIVE_SEED)[0],
    150,
    0,
  );
  assert.deepEqual(skipped, gradual);
  assert.equal(skipped.choices, 11);
  assert.equal(skipped.lastEvent?.row, 10);
});

test("players advance and steer independently; stationary players stay unchanged", () => {
  const initial = createCognitiveState(DEFAULT_COGNITIVE_SEED);
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
  let state = advanceCognitiveState(
    createCognitiveState(DEFAULT_COGNITIVE_SEED),
    [12, 0],
  );
  const initialScore = state[0].score;
  state = setCognitiveLane(state, 0, -1);
  assert.equal(state[0].score, initialScore);
  assert.equal(advanceCognitiveState(state, [12, 0]), state);
  assert.equal(setCognitiveLane(state, 0, -1), state);
  for (const badLane of [-2, 2, NaN, Infinity])
    assert.equal(setCognitiveLane(state, 0, badLane as Lane), state);
});

test("summary is a game-only result and a new session clears both players", () => {
  const initial = createCognitiveState(DEFAULT_COGNITIVE_SEED);
  assert.equal(cognitiveSummary(initial)[0].accuracy, null);
  const state = advanceCognitiveState(initial, [30, 12]);
  const summary = cognitiveSummary(state);
  assert.equal(summary[0].choices, 2);
  assert.equal(summary[1].choices, 1);
  assert.deepEqual(
    cognitiveSummary(createCognitiveState(DEFAULT_COGNITIVE_SEED)),
    cognitiveSummary(initial),
  );
  assert.equal(summary[0].accuracy, Math.round((state[0].coins / 2) * 100));
});

test("coin trails reward collected coins without inventing bomb avoidance", () => {
  let player = createCognitiveState(39)[0];
  player = advanceCognitivePlayer(player, 66, 0);
  const baseline = {
    coins: player.coins,
    avoided: player.avoided,
    score: player.score,
    choices: player.choices,
  };
  player = { ...player, lane: cognitiveRow(4, 0, player.seed).items[0].lane };
  player = advanceCognitivePlayer(player, 96, 0);
  assert.equal(player.coins, baseline.coins + 4);
  assert.equal(player.avoided, baseline.avoided);
  assert.equal(player.score, baseline.score + 40);
  assert.equal(player.choices, baseline.choices + 4);
  assert.equal(player.lastEvent?.row, 7);
  assert.equal(
    advanceCognitivePlayer(player, 96, 0),
    player,
    "a collected chain cannot score a second time",
  );
});

test("an empty trail lane is a missed opportunity and cannot inflate score or accuracy", () => {
  let player = advanceCognitivePlayer(createCognitiveState(39)[0], 66, 0);
  const baseline = cognitiveSummary(player);
  const targetLane = cognitiveRow(4, 0, player.seed).items[0].lane;
  player = { ...player, lane: targetLane === -1 ? 0 : -1 };
  player = advanceCognitivePlayer(player, 96, 0);
  assert.equal(player.coins, baseline.coins);
  assert.equal(player.avoided, baseline.avoided);
  assert.equal(player.score, baseline.score);
  assert.equal(player.bombHits, baseline.bombHits);
  assert.equal(player.wrongCoins, baseline.wrongCoins);
  assert.equal(player.choices, baseline.choices + 4);
  assert.equal(player.lastEvent?.result, "clear");
  assert.equal(player.lastEvent?.kind, "empty");
  assert.equal(
    cognitiveSummary(player).accuracy,
    Math.round((player.coins / player.choices) * 100),
  );
});
