export type MarchingReading = {
  /** Two alternating steps are one pedal-equivalent turn. */
  cadence: number;
  steps: number;
  feedback: "step" | "good";
};

type Side = 0 | 1;

const MOVE_BAND = 0.025;
const RETURN_BAND = 0.012;
const MIN_STEP_MS = 250;
const MAX_STEP_MS = 6000;

/**
 * Detects gentle marching from relative knee motion, with no knee-height goal.
 * Inputs are (hip.y - knee.y) / torso length. A small dead band rejects camera
 * jitter; common movement of both legs is removed instead of counted as steps.
 */
export class MarchingEstimator {
  private filtered: [number, number] | null = null;
  private neutral: [number, number] = [0, 0];
  private armed: [boolean, boolean] = [true, true];
  private lastFrameTime: number | null = null;
  private lastStepTime: number | null = null;
  private lastStepSide: Side | null = null;
  private intervals: number[] = [];
  private cadence = 0;
  private steps = 0;

  reset(): void {
    this.steps = 0;
    this.suspend();
  }

  /** Pause or lose tracking without discarding completed workout steps. */
  suspend(): void {
    this.filtered = null;
    this.neutral = [0, 0];
    this.armed = [true, true];
    this.lastFrameTime = null;
    this.lastStepTime = null;
    this.lastStepSide = null;
    this.intervals = [];
    this.cadence = 0;
  }

  update(
    leftLift: number,
    rightLift: number,
    timeMs: number,
    maxFrameGapMs = 1500,
  ): MarchingReading {
    if (![leftLift, rightLift, timeMs].every(Number.isFinite)) {
      this.suspend();
      return this.reading();
    }
    const allowedGap = Math.min(
      MAX_STEP_MS,
      Math.max(1500, Number.isFinite(maxFrameGapMs) ? maxFrameGapMs : 1500),
    );
    if (
      this.lastFrameTime !== null &&
      (timeMs < this.lastFrameTime || timeMs - this.lastFrameTime > allowedGap)
    )
      this.suspend();
    if (timeMs === this.lastFrameTime) return this.reading();

    if (this.lastFrameTime === null || !this.filtered) {
      this.lastFrameTime = timeMs;
      this.filtered = [leftLift, rightLift];
      this.neutral = [leftLift, rightLift];
      return this.reading();
    }

    const dt = timeMs - this.lastFrameTime;
    this.lastFrameTime = timeMs;
    const smoothing = 1 - Math.exp(-dt / 90);
    this.filtered[0] += (leftLift - this.filtered[0]) * smoothing;
    this.filtered[1] += (rightLift - this.filtered[1]) * smoothing;

    if (this.lastStepTime !== null) {
      const period = this.intervals.at(-1);
      const stopAfter =
        period === undefined
          ? 1800
          : Math.min(MAX_STEP_MS, Math.max(1800, period * 1.8));
      if (timeMs - this.lastStepTime >= stopAfter) this.cadence = 0;
      // Retain the reference through a slow step; resetting it at the stop
      // threshold would make a continuous 2–5-second pace permanently zero.
      if (timeMs - this.lastStepTime > MAX_STEP_MS) {
        this.lastStepTime = null;
        this.intervals = [];
      }
    }

    for (const side of [0, 1] as const) {
      this.neutral[side] = Math.min(this.neutral[side], this.filtered[side]);
    }
    // Accommodate changes in standing posture and whole-body movement. The
    // relative difference remains, but raising both knees equally is not a step.
    const commonRise = Math.max(
      0,
      Math.min(
        this.filtered[0] - this.neutral[0],
        this.filtered[1] - this.neutral[1],
      ),
    );
    this.neutral[0] += commonRise;
    this.neutral[1] += commonRise;
    const lift: [number, number] = [
      this.filtered[0] - this.neutral[0],
      this.filtered[1] - this.neutral[1],
    ];

    for (const side of [0, 1] as const) {
      if (lift[side] <= RETURN_BAND) this.armed[side] = true;
    }
    const side: Side | null =
      lift[0] >= MOVE_BAND && lift[0] - lift[1] >= MOVE_BAND
        ? 0
        : lift[1] >= MOVE_BAND && lift[1] - lift[0] >= MOVE_BAND
          ? 1
          : null;
    if (side !== null && this.armed[side]) {
      this.armed[side] = false;
      const interval =
        this.lastStepTime === null ? null : timeMs - this.lastStepTime;
      if (
        side !== this.lastStepSide &&
        (interval === null || interval >= MIN_STEP_MS)
      ) {
        this.steps += 1;
        if (interval !== null && interval <= MAX_STEP_MS) {
          this.intervals.push(interval);
          if (this.intervals.length > 5) this.intervals.shift();
          const sorted = [...this.intervals].sort((a, b) => a - b);
          const midpoint = Math.floor(sorted.length / 2);
          const median =
            sorted.length % 2
              ? sorted[midpoint]
              : (sorted[midpoint - 1] + sorted[midpoint]) / 2;
          this.cadence = 30000 / median;
        } else this.cadence = 15;
        this.lastStepTime = timeMs;
        this.lastStepSide = side;
      }
    }
    return this.reading();
  }

  private reading(): MarchingReading {
    return {
      cadence: this.cadence,
      steps: this.steps,
      feedback: this.cadence > 0 ? "good" : "step",
    };
  }
}
