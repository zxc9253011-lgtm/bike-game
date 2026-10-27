export type Lane = -1 | 0 | 1;
export type CoinKind = "star" | "leaf";
export type CognitiveItem = { lane: Lane; kind: CoinKind | "bomb" };
export type CognitiveRow = {
  id: number;
  distance: number;
  target: CoinKind;
  pattern: "choice" | "coin-trail";
  items: CognitiveItem[];
};
export type CognitiveEvent = {
  id: number;
  row: number;
  result: "coin" | "wrong-coin" | "bomb" | "clear";
  kind: CoinKind | "bomb" | "empty";
  target: CoinKind;
  message: string;
};
export type CognitivePlayerState = {
  /** Session seed makes the visible layout match the eventual collision. */
  seed: number;
  lane: Lane;
  distance: number;
  nextRow: number;
  coins: number;
  avoided: number;
  bombHits: number;
  wrongCoins: number;
  choices: number;
  score: number;
  lastEvent: CognitiveEvent | null;
};
export type CognitiveState = [CognitivePlayerState, CognitivePlayerState];
export type CognitiveSummary = {
  coins: number;
  avoided: number;
  bombHits: number;
  wrongCoins: number;
  choices: number;
  score: number;
  /** Success in this game's coin choices, not a cognitive or medical score. */
  accuracy: number | null;
};

export const coinLabels: Record<CoinKind, string> = {
  star: "星星金幣",
  leaf: "藍色葉子幣",
};
export const FIRST_ROW_METERS = 12;
export const ROW_SPACING_METERS = 18;
export const COIN_TRAIL_SPACING_METERS = 4;
export const DEFAULT_COGNITIVE_SEED = 0x6d2b79f5;
const MAX_ROW_INDEX = 1_000_000;
const LANES: [Lane, Lane, Lane] = [-1, 0, 1];
const PERMUTATIONS = [
  [1, 0, 2],
  [0, 2, 1],
  [2, 1, 0],
  [1, 2, 0],
  [0, 1, 2],
  [2, 0, 1],
] as const;

function normalizedSeed(seed: number): number {
  return Number.isFinite(seed)
    ? Math.floor(seed) >>> 0
    : DEFAULT_COGNITIVE_SEED;
}

function sessionSeed(): number {
  if (globalThis.crypto?.getRandomValues) {
    return globalThis.crypto.getRandomValues(new Uint32Array(1))[0];
  }
  return Math.floor(Math.random() * 0x1_0000_0000) >>> 0;
}

/** Small integer mixer: random-access layout without mutable RNG state. */
function mixed(seed: number, index: number): number {
  let value = (seed ^ Math.imul(index + 1, 0x9e3779b9)) >>> 0;
  value = Math.imul(value ^ (value >>> 16), 0x85ebca6b);
  value = Math.imul(value ^ (value >>> 13), 0xc2b2ae35);
  return (value ^ (value >>> 16)) >>> 0;
}

function createPlayer(seed: number): CognitivePlayerState {
  return {
    seed,
    lane: 0,
    distance: 0,
    nextRow: 0,
    coins: 0,
    avoided: 0,
    bombHits: 0,
    wrongCoins: 0,
    choices: 0,
    score: 0,
    lastEvent: null,
  };
}

export function createCognitiveState(seed?: number): CognitiveState {
  const chosen = seed === undefined ? sessionSeed() : normalizedSeed(seed);
  return [createPlayer(chosen), createPlayer(chosen)];
}

/**
 * Alternate four widely spaced choice rows with a four-coin trail. Layouts
 * vary per session but remain identical between previews and collision checks.
 * Trails stay within one target block and offer empty safe neighbouring lanes.
 */
export function cognitiveRow(
  rowIndex: number,
  playerIndex: 0 | 1,
  seed = DEFAULT_COGNITIVE_SEED,
): CognitiveRow {
  const id = Number.isFinite(rowIndex)
    ? Math.min(MAX_ROW_INDEX, Math.max(0, Math.floor(rowIndex)))
    : 0;
  const player = playerIndex === 1 ? 1 : 0;
  const block = Math.floor(id / 4);
  const offset = id % 4;
  const target: CoinKind = block % 2 === 0 ? "star" : "leaf";
  const other: CoinKind = target === "star" ? "leaf" : "star";
  const chosenSeed = normalizedSeed(seed);
  const pairStart = FIRST_ROW_METERS + Math.floor(block / 2) * 102;
  if (block % 2 === 1) {
    const lane = LANES[(mixed(chosenSeed, block) + player) % LANES.length];
    return {
      id,
      distance:
        pairStart + ROW_SPACING_METERS * 4 + offset * COIN_TRAIL_SPACING_METERS,
      target,
      pattern: "coin-trail",
      items: [{ lane, kind: target }],
    };
  }
  // The first correct coin is straight ahead for both players. Every following
  // choice shuffles all three symbols while always preserving a safe route.
  const order =
    PERMUTATIONS[
      id === 0 ? 0 : (mixed(chosenSeed, id) + player * 3) % PERMUTATIONS.length
    ];
  const kinds: [CoinKind, CoinKind, "bomb"] = [target, other, "bomb"];
  const items = LANES.map((lane, index) => ({
    lane,
    kind: kinds[order[index]],
  }));
  return {
    id,
    distance: pairStart + offset * ROW_SPACING_METERS,
    target,
    pattern: "choice",
    items,
  };
}

export function setCognitiveLane(
  state: CognitiveState,
  playerIndex: 0 | 1,
  lane: Lane,
): CognitiveState {
  if (
    (playerIndex !== 0 && playerIndex !== 1) ||
    !LANES.includes(lane) ||
    state[playerIndex].lane === lane
  )
    return state;
  const next = [...state] as CognitiveState;
  next[playerIndex] = { ...state[playerIndex], lane };
  return next;
}

/** Resolve crossed rows once, using metres rather than rendering frame rate. */
export function advanceCognitivePlayer(
  state: CognitivePlayerState,
  distance: number,
  playerIndex: 0 | 1,
): CognitivePlayerState {
  if (
    !Number.isFinite(distance) ||
    distance < state.distance ||
    distance < 0 ||
    distance >
      cognitiveRow(MAX_ROW_INDEX, playerIndex, state.seed).distance +
        ROW_SPACING_METERS ||
    (playerIndex !== 0 && playerIndex !== 1)
  )
    return state;
  if (distance === state.distance) return state;
  const next: CognitivePlayerState = { ...state, distance };
  while (
    next.nextRow <= MAX_ROW_INDEX &&
    cognitiveRow(next.nextRow, playerIndex, next.seed).distance <= distance
  ) {
    const row = cognitiveRow(next.nextRow, playerIndex, next.seed);
    const item = row.items.find((value) => value.lane === next.lane);
    // A missed trail coin is still a target-recognition opportunity. Empty
    // lanes give no reward, rather than inflating the game's accuracy metric.
    next.choices += 1;
    let result: CognitiveEvent["result"];
    let message: string;
    if (!item) {
      result = "clear";
      message = "這排安全通過，下一排再收目標金幣。";
    } else if (item.kind === "bomb") {
      next.bombHits += 1;
      result = "bomb";
      message = "碰到炸彈了，下一排換道避開，再試一次。";
    } else {
      if (row.items.some((value) => value.kind === "bomb")) {
        next.avoided += 1;
        next.score += 3;
      }
      if (item.kind === row.target) {
        next.coins += 1;
        next.score += 10;
        result = "coin";
        message =
          row.pattern === "coin-trail"
            ? `連續收對${coinLabels[row.target]}，保持這條跑道！`
            : `收對${coinLabels[row.target]}，也避開炸彈，做得很好！`;
      } else {
        next.wrongCoins += 1;
        result = "wrong-coin";
        message = `這輪要收${coinLabels[row.target]}，下一排再試試。`;
      }
    }
    next.lastEvent = {
      id: row.id * 2 + playerIndex + 1,
      row: row.id,
      result,
      kind: item?.kind ?? "empty",
      target: row.target,
      message,
    };
    next.nextRow += 1;
    // The finite guard also makes malformed/extreme calls terminate safely.
    if (next.nextRow > MAX_ROW_INDEX) break;
  }
  return next;
}

export function advanceCognitiveState(
  state: CognitiveState,
  distances: [number, number],
): CognitiveState {
  const first = advanceCognitivePlayer(state[0], distances[0], 0);
  const second = advanceCognitivePlayer(state[1], distances[1], 1);
  return first === state[0] && second === state[1] ? state : [first, second];
}

export function cognitiveSummary(state: CognitivePlayerState): CognitiveSummary;
export function cognitiveSummary(
  state: CognitiveState,
): [CognitiveSummary, CognitiveSummary];
export function cognitiveSummary(
  state: CognitivePlayerState | CognitiveState,
): CognitiveSummary | [CognitiveSummary, CognitiveSummary] {
  if (Array.isArray(state))
    return [cognitiveSummary(state[0]), cognitiveSummary(state[1])];
  const { coins, avoided, bombHits, wrongCoins, choices, score } = state;
  return {
    coins,
    avoided,
    bombHits,
    wrongCoins,
    choices,
    score,
    accuracy: choices === 0 ? null : Math.round((coins / choices) * 100),
  };
}
