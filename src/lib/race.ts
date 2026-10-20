export type RaceState = {
  elapsed: number;
  distances: [number, number];
  result: null | { winner: 1 | 2 | "tie"; elapsed: number };
};

export function createRaceState(): RaceState {
  return { elapsed: 0, distances: [0, 0], result: null };
}

/** Advance both riders to the same instant, including within the finish frame. */
export function advanceRace(
  state: RaceState,
  speedsKmh: [number, number],
  dtSeconds: number,
  targetMeters: number,
): RaceState {
  if (
    state.result !== null ||
    !Number.isFinite(dtSeconds) ||
    dtSeconds <= 0 ||
    !Number.isFinite(targetMeters) ||
    targetMeters <= 0
  ) {
    return state;
  }

  const speeds = speedsKmh.map((speed) =>
    Number.isFinite(speed) && speed > 0 ? speed / 3.6 : 0,
  );
  const distances = state.distances.map((distance) =>
    Number.isFinite(distance) && distance > 0
      ? Math.min(distance, targetMeters)
      : 0,
  );
  const finishTimes = distances.map((distance, side) => {
    const remaining = targetMeters - distance;
    return remaining <= 0
      ? 0
      : speeds[side] > 0
        ? remaining / speeds[side]
        : Infinity;
  });
  const firstFinish = Math.min(...finishTimes);
  const finished = firstFinish <= dtSeconds;
  const duration = finished ? firstFinish : dtSeconds;
  const elapsed =
    (Number.isFinite(state.elapsed) && state.elapsed > 0 ? state.elapsed : 0) +
    duration;
  const nextDistances: [number, number] = [
    Math.min(targetMeters, distances[0] + speeds[0] * duration),
    Math.min(targetMeters, distances[1] + speeds[1] * duration),
  ];

  if (!finished) return { elapsed, distances: nextDistances, result: null };

  const tie =
    finishTimes.every((time) => time <= dtSeconds) &&
    Math.abs(finishTimes[0] - finishTimes[1]) < 1e-6;
  const winner = tie ? "tie" : finishTimes[0] < finishTimes[1] ? 1 : 2;
  if (winner === "tie" || winner === 1) nextDistances[0] = targetMeters;
  if (winner === "tie" || winner === 2) nextDistances[1] = targetMeters;
  return { elapsed, distances: nextDistances, result: { winner, elapsed } };
}
