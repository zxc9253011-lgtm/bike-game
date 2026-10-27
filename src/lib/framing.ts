import type { ExerciseMode } from "./exercise";
import { visiblePoint, type PosePoint } from "./motion.ts";

/** Actionable framing guidance without treating a face as a usable leg pose. */
export function framingFeedback(
  points: PosePoint[] | undefined,
  mode: ExerciseMode,
): string {
  if (!points || !points.some((point) => visiblePoint(point, 0.35))) {
    return mode === "seated"
      ? "請讓肩膀、髖部、膝蓋和腳踝入鏡"
      : "請站在鏡頭前，讓肩膀到膝蓋入鏡";
  }
  const hips = [23, 24].every((joint) => visiblePoint(points[joint]));
  const knees = [25, 26].every((joint) => visiblePoint(points[joint]));
  if (!hips) return "請後退，讓髖部與膝蓋入鏡";
  if (!knees) return "請後退或調低鏡頭，讓雙膝入鏡";
  if (![11, 12].every((joint) => visiblePoint(points[joint], 0.4))) {
    return "請退後一些，讓肩膀也入鏡";
  }
  if (
    mode === "seated" &&
    ![27, 28].every((joint) => visiblePoint(points[joint]))
  ) {
    return "請後退或調低鏡頭，讓腳踝入鏡";
  }
  const center = (points[23].x + points[24].x) / 2;
  if (center < 0.1 || center > 0.9) return "請站在自己的鏡頭區域中間";
  return "請面向鏡頭，讓肩膀、髖部與雙膝清楚入鏡";
}
