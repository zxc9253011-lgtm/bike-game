import type { PosePoint } from "./motion";

export type SteeringDirection = -1 | 1;
export type SteeringCue = "positioning" | "ready" | "left" | "right" | "return";
export type SteeringOptions = { imageAspect?: number };

const HOLD_MS = 100;
const COOLDOWN_MS = 220;
const MAX_FRAME_GAP_MS = 3000;
const LEAN_TRIGGER = 0.12;
const LEAN_RELEASE = 0.045;
type Gesture = { source: "hand" | "lean"; direction: SteeringDirection };

function visible(point: PosePoint | undefined): point is PosePoint {
  return (
    !!point &&
    Number.isFinite(point.x) &&
    Number.isFinite(point.y) &&
    (point.visibility ?? 0) >= 0.45 &&
    (point.presence ?? 1) >= 0.45 &&
    point.x > 0.015 &&
    point.x < 0.985 &&
    point.y > 0.015 &&
    point.y < 0.985
  );
}

/**
 * One small upper-body lean or one hand lifted to the upper chest changes one
 * virtual lane. The person stays in place, then returns upright/lowers that
 * hand to rearm. Each camera player owns a separate estimator and neutral.
 * Raw camera +x is mirrored screen-left; anatomical left hand is screen-left.
 */
export class SteeringEstimator {
  private handArmed = false;
  private leanArmed = false;
  private neutralLean: number | null = null;
  private neutralSince: number | null = null;
  private candidate: Gesture | null = null;
  private candidateSince = 0;
  private returning: Gesture | null = null;
  private lastFrameTime: number | null = null;
  private lastEventAt = -Infinity;
  private currentCue: SteeringCue = "positioning";

  cue(): SteeringCue {
    return this.currentCue;
  }

  reset(): void {
    this.handArmed = false;
    this.leanArmed = false;
    this.neutralLean = null;
    this.neutralSince = null;
    this.candidate = null;
    this.candidateSince = 0;
    this.returning = null;
    this.lastFrameTime = null;
    this.lastEventAt = -Infinity;
    this.currentCue = "positioning";
  }

  update(
    points: PosePoint[] | undefined,
    timeMs: number,
    options: SteeringOptions = {},
  ): SteeringDirection | null {
    if (
      !Number.isFinite(timeMs) ||
      !points ||
      ![11, 12].every((index) => visible(points[index]))
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
    const aspect =
      Number.isFinite(options.imageAspect) && (options.imageAspect ?? 0) > 0
        ? options.imageAspect!
        : 1;
    const shoulderY = (points[11].y + points[12].y) / 2;
    const shoulderX = (points[11].x + points[12].x) / 2;
    const hipsVisible = [23, 24].every((index) => visible(points[index]));
    const torsoHeight = hipsVisible
      ? (points[23].y + points[24].y) / 2 - shoulderY
      : Math.abs(points[11].x - points[12].x) * aspect * 1.4;
    if (!Number.isFinite(torsoHeight) || torsoHeight < 0.07) {
      this.reset();
      return null;
    }
    const raised = [15, 16].map(
      (joint, index) =>
        visible(points[joint]) &&
        points[joint].y <= points[11 + index].y + torsoHeight * 0.25,
    );
    const lowered = [15, 16].map(
      (joint, index) =>
        visible(points[joint]) &&
        points[joint].y >= points[11 + index].y + torsoHeight * 0.45,
    );
    const handsNeutral =
      !raised.some(Boolean) &&
      lowered.some(Boolean) &&
      [15, 16].every(
        (joint, index) => !visible(points[joint]) || lowered[index],
      );
    const lean = hipsVisible
      ? ((shoulderX - (points[23].x + points[24].x) / 2) * aspect) / torsoHeight
      : null;

    // Calibrate the actual person's relaxed posture, including a natural
    // asymmetry. Two stable samples establish the neutral without an event.
    if (lean !== null) {
      if (this.neutralLean === null) {
        this.neutralLean = lean;
        this.neutralSince = timeMs;
      } else if (
        !this.leanArmed &&
        !this.returning &&
        this.neutralSince !== null
      ) {
        if (Math.abs(lean - this.neutralLean) <= LEAN_RELEASE) {
          if (timeMs - this.neutralSince >= HOLD_MS) {
            this.leanArmed = true;
            this.neutralSince = null;
          }
        } else {
          this.neutralLean = lean;
          this.neutralSince = timeMs;
        }
      }
    }
    const delta =
      lean === null || this.neutralLean === null
        ? null
        : lean - this.neutralLean;
    const upright = delta !== null && Math.abs(delta) <= LEAN_RELEASE;

    if (this.returning) {
      const released =
        this.returning.source === "hand"
          ? lowered[this.returning.direction === -1 ? 0 : 1]
          : upright;
      this.candidate = null;
      if (released) {
        this.returning = null;
        this.handArmed = handsNeutral;
        this.leanArmed = upright && this.neutralSince === null;
        this.currentCue = "ready";
      } else this.currentCue = "return";
      return null;
    }
    if (raised.every(Boolean)) {
      this.handArmed = false;
      if (this.candidate?.source === "hand") this.candidate = null;
    }
    if (handsNeutral) this.handArmed = true;
    if (upright && this.neutralSince === null) this.leanArmed = true;

    let gesture: Gesture | null = null;
    if (this.handArmed && raised[0] !== raised[1] && raised.some(Boolean)) {
      gesture = { source: "hand", direction: raised[0] ? -1 : 1 };
    } else if (
      this.leanArmed &&
      delta !== null &&
      Math.abs(delta) >= LEAN_TRIGGER
    ) {
      gesture = { source: "lean", direction: delta > 0 ? -1 : 1 };
    }
    if (!gesture) {
      this.candidate = null;
      this.currentCue =
        raised.some(Boolean) && !this.handArmed
          ? "return"
          : this.handArmed || this.leanArmed
            ? "ready"
            : "positioning";
      // Follow very slow neutral posture changes, never a deliberate lean.
      if (upright && !raised.some(Boolean) && this.neutralSince === null)
        this.neutralLean! += delta! * 0.015;
      return null;
    }
    this.currentCue = gesture.direction === -1 ? "left" : "right";
    if (
      !this.candidate ||
      this.candidate.source !== gesture.source ||
      this.candidate.direction !== gesture.direction
    ) {
      this.candidate = gesture;
      this.candidateSince = timeMs;
      return null;
    }
    if (
      timeMs - this.candidateSince < HOLD_MS ||
      timeMs - this.lastEventAt < COOLDOWN_MS
    )
      return null;
    this.returning = gesture;
    this.handArmed = false;
    this.leanArmed = false;
    this.candidate = null;
    this.lastEventAt = timeMs;
    this.currentCue = "return";
    return gesture.direction;
  }
}
