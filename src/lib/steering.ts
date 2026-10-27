import type { PosePoint } from "./motion";

export type SteeringDirection = -1 | 1;

const HOLD_MS = 180;
const COOLDOWN_MS = 450;
const MAX_FRAME_GAP_MS = 3000;

function visible(point: PosePoint | undefined): point is PosePoint {
  return (
    !!point &&
    Number.isFinite(point.x) &&
    Number.isFinite(point.y) &&
    (point.visibility ?? 0) >= 0.5 &&
    (point.presence ?? 1) >= 0.5 &&
    point.x > 0.015 &&
    point.x < 0.985 &&
    point.y > 0.015 &&
    point.y < 0.985
  );
}

/**
 * Raise one hand just above its shoulder to steer one virtual lane. The user
 * stays in place. Both hands must first be lowered; holding a hand cannot
 * repeatedly move the player. Raw anatomical left is mirrored screen-left.
 */
export class SteeringEstimator {
  private armed = false;
  private candidate: SteeringDirection | null = null;
  private candidateSince = 0;
  private lastFrameTime: number | null = null;
  private lastEventAt = -Infinity;

  reset(): void {
    this.armed = false;
    this.candidate = null;
    this.candidateSince = 0;
    this.lastFrameTime = null;
    this.lastEventAt = -Infinity;
  }

  update(
    points: PosePoint[] | undefined,
    timeMs: number,
  ): SteeringDirection | null {
    if (
      !Number.isFinite(timeMs) ||
      !points ||
      ![11, 12, 15, 16, 23, 24].every((index) => visible(points[index]))
    ) {
      this.reset();
      return null;
    }
    if (this.lastFrameTime !== null) {
      if (
        timeMs < this.lastFrameTime ||
        timeMs - this.lastFrameTime > MAX_FRAME_GAP_MS
      )
        this.reset();
      else if (timeMs === this.lastFrameTime) return null;
    }
    this.lastFrameTime = timeMs;
    const torso =
      (points[23].y + points[24].y - (points[11].y + points[12].y)) / 2;
    if (!Number.isFinite(torso) || torso < 0.07) {
      this.reset();
      return null;
    }
    const leftRaised = points[15].y <= points[11].y - torso * 0.03;
    const rightRaised = points[16].y <= points[12].y - torso * 0.03;
    const leftLowered = points[15].y >= points[11].y + torso * 0.15;
    const rightLowered = points[16].y >= points[12].y + torso * 0.15;

    if (leftLowered && rightLowered) {
      this.armed = true;
      this.candidate = null;
      return null;
    }
    if (leftRaised && rightRaised) {
      this.armed = false;
      this.candidate = null;
      return null;
    }
    const direction =
      leftRaised && rightLowered ? -1 : rightRaised && leftLowered ? 1 : null;
    if (!this.armed || direction === null) {
      this.candidate = null;
      return null;
    }
    if (direction !== this.candidate) {
      this.candidate = direction;
      this.candidateSince = timeMs;
      return null;
    }
    if (
      timeMs - this.candidateSince < HOLD_MS ||
      timeMs - this.lastEventAt < COOLDOWN_MS
    )
      return null;
    this.armed = false;
    this.candidate = null;
    this.lastEventAt = timeMs;
    return direction;
  }
}
