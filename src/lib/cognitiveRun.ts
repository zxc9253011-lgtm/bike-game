export type Lane = -1 | 0 | 1;
export type CoinKind = "star" | "leaf";
export type CognitiveItem = { lane: Lane; kind: CoinKind | "bomb" };
export type CognitiveRow = {
  id: number;
  distance: number;
  target: CoinKind;
  items: [CognitiveItem, CognitiveItem, CognitiveItem];
};
export type CognitiveEvent = {
  id: number;
  row: number;
  result: "coin" | "wrong-coin" | "bomb";
  kind: CoinKind | "bomb";
  target: CoinKind;
  message: string;
};
export type CognitivePlayerState = {
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

function createPlayer(): CognitivePlayerState {
  return {
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

export function createCognitiveState(): CognitiveState {
  return [createPlayer(), createPlayer()];
}

/** Every row has one requested coin, one other coin and one avoidable bomb. */
export function cognitiveRow(
  rowIndex: number,
  playerIndex: 0 | 1,
): CognitiveRow {
  const id = Number.isFinite(rowIndex)
    ? Math.min(MAX_ROW_INDEX, Math.max(0, Math.floor(rowIndex)))
    : 0;
  const player = playerIndex === 1 ? 1 : 0;
  const target: CoinKind = Math.floor(id / 4) % 2 === 0 ? "star" : "leaf";
  const other: CoinKind = target === "star" ? "leaf" : "star";
  // The first correct coin is straight ahead for both players. Subsequent
  // deterministic rows vary independently, allowing reproducible fair play.
  const order = PERMUTATIONS[id === 0 ? 0 : (id + player * 3) % 6];
  const kinds: [CoinKind, CoinKind, "bomb"] = [target, other, "bomb"];
  const items = LANES.map((lane, index) => ({
    lane,
    kind: kinds[order[index]],
  })) as [CognitiveItem, CognitiveItem, CognitiveItem];
  return {
    id,
    distance: FIRST_ROW_METERS + id * ROW_SPACING_METERS,
    target,
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
    distance > FIRST_ROW_METERS + MAX_ROW_INDEX * ROW_SPACING_METERS ||
    (playerIndex !== 0 && playerIndex !== 1)
  )
    return state;
  if (distance === state.distance) return state;
  const next: CognitivePlayerState = { ...state, distance };
  while (cognitiveRow(next.nextRow, playerIndex).distance <= distance) {
    const row = cognitiveRow(next.nextRow, playerIndex);
    const item = row.items.find((value) => value.lane === next.lane)!;
    next.choices += 1;
    let result: CognitiveEvent["result"];
    let message: string;
    if (item.kind === "bomb") {
      next.bombHits += 1;
      result = "bomb";
      message = "碰到炸彈了，下一排換道避開，再試一次。";
    } else {
      next.avoided += 1;
      next.score += 3;
      if (item.kind === row.target) {
        next.coins += 1;
        next.score += 10;
        result = "coin";
        message = `收對${coinLabels[row.target]}，也避開炸彈，做得很好！`;
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
      kind: item.kind,
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
