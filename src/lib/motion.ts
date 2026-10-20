export type PosePoint = {
  x: number;
  y: number;
  z?: number;
  visibility?: number;
  presence?: number;
};

export type CameraRegion = { x: number; width: number };

/** The video is mirrored in the UI: the raw right half belongs to player 1. */
export function cameraRegion(
  playerIndex: 0 | 1,
  playerCount: 1 | 2,
): CameraRegion {
  return playerCount === 1
    ? { x: 0, width: 1 }
    : { x: playerIndex === 0 ? 0.5 : 0, width: 0.5 };
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
    (point.visibility ?? 0) >= confidence &&
    (point.presence ?? 1) >= confidence &&
    point.x > 0.015 &&
    point.x < 0.985 &&
    point.y > 0.015 &&
    point.y < 0.985
  );
}

/** Analyze coordinates in each person's original crop, before display mapping. */
export function analyzeLegPose(
  points: PosePoint[] | undefined,
  imageAspect = 4 / 3,
): {
  signal: number;
  leftLift: number;
  rightLift: number;
  quality: number;
} | null {
  const legJoints = [23, 24, 25, 26, 27, 28];
  if (
    !points ||
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
  const leftPedalLift =
    points[23].y - (points[25].y * 0.6 + points[27].y * 0.4);
  const rightPedalLift =
    points[24].y - (points[26].y * 0.6 + points[28].y * 0.4);
  return {
    signal: (leftPedalLift - rightPedalLift) / torso,
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
