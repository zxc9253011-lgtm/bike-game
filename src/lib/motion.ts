import type { ExerciseMode } from "./exercise";

export type PosePoint = {
  x: number;
  y: number;
  z?: number;
  visibility?: number;
  presence?: number;
};

export type CameraRegion = { x: number; width: number };

/**
 * The video is mirrored in the UI: the raw right half belongs to player 1.
 * The extra inner margin keeps a person's reaching arm inside their input;
 * ownsPlayerPose still assigns the body to only one side of the divider.
 */
export function cameraRegion(
  playerIndex: 0 | 1,
  playerCount: 1 | 2,
): CameraRegion {
  return playerCount === 1
    ? { x: 0, width: 1 }
    : { x: playerIndex === 0 ? 0.4 : 0, width: 0.6 };
}

export function mapLandmarksToFrame(
  points: PosePoint[],
  region: CameraRegion,
): PosePoint[] {
  return points.map((point) => ({
    ...point,
    x: region.x + point.x * region.width,
  }));
}

export function visiblePoint(
  point: PosePoint | undefined,
  confidence = 0.5,
): point is PosePoint {
  return (
    !!point &&
    Number.isFinite(point.x) &&
    Number.isFinite(point.y) &&
    Number.isFinite(point.visibility ?? 0) &&
    Number.isFinite(point.presence ?? 1) &&
    (point.visibility ?? 0) >= confidence &&
    (point.presence ?? 1) >= confidence &&
    point.x > 0.015 &&
    point.x < 0.985 &&
    point.y > 0.015 &&
    point.y < 0.985
  );
}

/**
 * Overlapping crops provide arm room, never shared ownership of one person.
 * Prefer hips because a steering lean deliberately moves the shoulders.
 * Shoulder-only results can still guide framing / upper-body controls while
 * leg analysis independently decides whether exercise may generate speed.
 */
export function ownsPlayerPose(
  points: PosePoint[] | undefined,
  region: CameraRegion,
  playerIndex: 0 | 1,
  playerCount: 1 | 2,
): boolean {
  if (playerCount === 1) return true;
  if (
    !points ||
    !Number.isFinite(region.x) ||
    !Number.isFinite(region.width) ||
    region.width <= 0
  )
    return false;
  // A narrow neutral strip avoids crediting a person standing on the divider
  // to both models when their independently estimated centers jitter.
  const ownsX = (x: number) => (playerIndex === 0 ? x >= 0.512 : x <= 0.488);
  const frameX = (joint: number) => region.x + points[joint].x * region.width;
  if ([23, 24].every((joint) => visiblePoint(points[joint], 0.4))) {
    return ownsX((frameX(23) + frameX(24)) / 2);
  }
  // A leaning neighbor may put their shoulder midpoint across the divider.
  // Without hips, require the complete shoulder pair on the assigned side.
  return [11, 12].every(
    (joint) => visiblePoint(points[joint], 0.4) && ownsX(frameX(joint)),
  );
}

/** Analyze coordinates in each person's original crop, before display mapping. */
export function analyzeLegPose(
  points: PosePoint[] | undefined,
  imageAspect = 4 / 3,
  exerciseMode: ExerciseMode = "seated",
): {
  signal: number;
  leftLift: number;
  rightLift: number;
  quality: number;
} | null {
  // Standing modes use hips and knees. A foot can be hidden while marching,
  // so ankles must not gate either high knees or gentle running in place.
  const legJoints =
    exerciseMode === "seated" ? [23, 24, 25, 26, 27, 28] : [23, 24, 25, 26];
  if (
    !points ||
    !Number.isFinite(imageAspect) ||
    imageAspect <= 0 ||
    !legJoints.every((joint) => visiblePoint(points[joint])) ||
    !visiblePoint(points[11], 0.4) ||
    !visiblePoint(points[12], 0.4)
  )
    return null;
  const hipCenterX = (points[23].x + points[24].x) / 2;
  if (hipCenterX < 0.1 || hipCenterX > 0.9) return null;
  const torso = Math.hypot(
    ((points[11].x + points[12].x - points[23].x - points[24].x) / 2) *
      imageAspect,
    (points[11].y + points[12].y - points[23].y - points[24].y) / 2,
  );
  if (torso < 0.07) return null;
  let signal = 0;
  if (exerciseMode === "seated") {
    const leftPedalLift =
      points[23].y - (points[25].y * 0.6 + points[27].y * 0.4);
    const rightPedalLift =
      points[24].y - (points[26].y * 0.6 + points[28].y * 0.4);
    signal = (leftPedalLift - rightPedalLift) / torso;
  }
  return {
    signal,
    leftLift: (points[23].y - points[25].y) / torso,
    rightLift: (points[24].y - points[26].y) / torso,
    quality: Math.round(
      (legJoints.reduce(
        (sum, joint) => sum + (points[joint].visibility ?? 0),
        0,
      ) /
        legJoints.length) *
        100,
    ),
  };
}
