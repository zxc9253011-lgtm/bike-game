export type HighKneeFeedback = "raise" | "lower" | "good";

export type HighKneeReading = {
  /** Equivalent pedal RPM: two completed, alternating knee lifts are one turn. */
  cadence: number;
  steps: number;
  feedback: HighKneeFeedback;
};

type LegPhase = "unarmed" | "lowered" | "raised";
type Side = 0 | 1;

const RAISED_THRESHOLD = -0.08;
const LOWERED_THRESHOLD = -0.3;
const MAX_FRAME_GAP_MS = 1500;
const IDLE_MS = 2000;

/**
 * Counts complete, alternating high knees, rather than small foot movements.
 * Each input is (hip.y - knee.y) / torso length: zero is hip height.
 * A leg must first be lowered, reach hip height (with a small tolerance), and
 * return down before it can count. Timestamps are monotonic milliseconds.
 */
export class HighKneeEstimator {
  private phases: [LegPhase, LegPhase] = ["unarmed", "unarmed"];
  private lastFrameTime: number | null = null;
  private lastStepTime: number | null = null;
  private lastStepSide: Side | null = null;
  private lastGoodTime: number | null = null;
  private intervals: number[] = [];
  private cadence = 0;
  private steps = 0;
  private feedback: HighKneeFeedback = "raise";

  /** Start a new workout, including its step count. */
  reset(): void {
    this.steps = 0;
    this.suspend();
  }

  /** Pause or lose tracking without losing the workout's completed steps. */
  suspend(): void {
    this.phases = ["unarmed", "unarmed"];
    this.lastFrameTime = null;
    this.lastStepTime = null;
    this.lastStepSide = null;
    this.lastGoodTime = null;
    this.intervals = [];
    this.cadence = 0;
    this.feedback = "raise";
  }

  update(leftLift: number, rightLift: number, timeMs: number): HighKneeReading {
    if (![leftLift, rightLift, timeMs].every(Number.isFinite)) {
      this.suspend();
      return this.reading();
    }

    if (this.lastFrameTime !== null) {
      if (
        timeMs < this.lastFrameTime ||
        timeMs - this.lastFrameTime > MAX_FRAME_GAP_MS
      ) {
        this.suspend();
      } else if (timeMs === this.lastFrameTime) {
        return this.reading();
      }
    }
    this.lastFrameTime = timeMs;

    if (this.lastStepTime !== null && timeMs - this.lastStepTime >= IDLE_MS) {
      this.lastStepTime = null;
      this.intervals = [];
      this.cadence = 0;
    }

    const lifts: [number, number] = [leftLift, rightLift];
    const completed: Side[] = [];

    // A simultaneous two-knee lift is not an alternating running step.
    if (lifts.every((lift) => lift >= RAISED_THRESHOLD)) {
      this.phases = ["unarmed", "unarmed"];
    } else {
      for (const side of [0, 1] as const) {
        if (lifts[side] <= LOWERED_THRESHOLD) {
          if (this.phases[side] === "raised") completed.push(side);
          this.phases[side] = "lowered";
        } else if (
          lifts[side] >= RAISED_THRESHOLD &&
          this.phases[side] === "lowered"
        ) {
          this.phases[side] = "raised";
        }
      }
    }

    if (completed.length === 1 && completed[0] !== this.lastStepSide) {
      this.steps += 1;
      if (this.lastStepTime !== null) {
        const interval = timeMs - this.lastStepTime;
        if (interval > 0) {
          this.intervals.push(interval);
          if (this.intervals.length > 5) this.intervals.shift();
          const mean =
            this.intervals.reduce((sum, value) => sum + value, 0) /
            this.intervals.length;
          const cadence = 30000 / mean;
          this.cadence = Number.isFinite(cadence) ? cadence : 0;
        }
      }
      this.lastStepTime = timeMs;
      this.lastStepSide = completed[0];
      this.lastGoodTime = timeMs;
      this.feedback = "good";
    } else if (
      lifts.some((lift) => lift >= RAISED_THRESHOLD) ||
      this.phases.some((phase) => phase === "raised")
    ) {
      this.feedback = "lower";
    } else {
      this.feedback =
        this.lastGoodTime !== null && timeMs - this.lastGoodTime < 800
          ? "good"
          : "raise";
    }

    return this.reading();
  }

  private reading(): HighKneeReading {
    return {
      cadence: this.cadence,
      steps: this.steps,
      feedback: this.feedback,
    };
  }
}
