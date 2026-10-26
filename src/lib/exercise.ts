export type ExerciseMode = "seated" | "standing" | "running";

export const exerciseNames: Record<ExerciseMode, string> = {
  seated: "坐姿踩踏",
  standing: "站姿高抬膝",
  running: "原地踏步跑步",
};

export function usesSteps(mode: ExerciseMode): boolean {
  return mode !== "seated";
}

/** Game speed only; this is not a physical speed measurement. */
export function exerciseSpeed(mode: ExerciseMode, cadence: number): number {
  const safeCadence = Number.isFinite(cadence) ? Math.max(0, cadence) : 0;
  return mode === "running"
    ? Math.min(12, safeCadence * 0.16)
    : Math.min(30, safeCadence * 0.28);
}
