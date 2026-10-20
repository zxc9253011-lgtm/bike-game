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
const MAX_STEP_INTERVAL_MS = 6000;

/**
 * Counts complete, alternating high knees, rather than small foot movements.
 * Each input is (hip.y - knee.y) / torso length: zero is hip height.
 * A leg must first be lowered, reach hip height (with a small tolerance), and
 * return down before it can count. Timestamps are monotonic milliseconds.
 */
export class HighKneeEstimator {
  private phases: [LegPhase, LegPhase] = ["unarmed", "unarmed"];
  private loweredAt: [number | null, number | null] = [null, null];
  private liftStartedAt: [number | null, number | null] = [null, null];
  private lastFrameTime: number | null = null;
  private lastStepTime: number | null = null;
  private lastStepSide: Side | null = null;
  private lastGoodTime: number | null = null;
  private intervals: number[] = [];
  private lastCycleDuration = 0;
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
    this.loweredAt = [null, null];
    this.liftStartedAt = [null, null];
    this.lastFrameTime = null;
    this.lastStepTime = null;
    this.lastStepSide = null;
    this.lastGoodTime = null;
    this.intervals = [];
    this.lastCycleDuration = 0;
    this.cadence = 0;
    this.feedback = "raise";
  }

  update(
    leftLift: number,
    rightLift: number,
    timeMs: number,
    maxFrameGapMs = MAX_FRAME_GAP_MS,
  ): HighKneeReading {
    if (![leftLift, rightLift, timeMs].every(Number.isFinite)) {
      this.suspend();
      return this.reading();
    }

    if (this.lastFrameTime !== null) {
      if (
        timeMs < this.lastFrameTime ||
        timeMs - this.lastFrameTime >
          Math.min(
            6000,
            Math.max(
              MAX_FRAME_GAP_MS,
              Number.isFinite(maxFrameGapMs) ? maxFrameGapMs : MAX_FRAME_GAP_MS,
            ),
          )
      ) {
        this.suspend();
      } else if (timeMs === this.lastFrameTime) {
        return this.reading();
      }
    }
    this.lastFrameTime = timeMs;

    if (this.lastStepTime !== null) {
      const lastInterval = this.intervals.at(-1) ?? this.lastCycleDuration;
      const staleAfter = Math.min(
        MAX_STEP_INTERVAL_MS,
        Math.max(IDLE_MS, lastInterval * 1.5),
      );
      if (timeMs - this.lastStepTime >= staleAfter) this.cadence = 0;
      // Stopping the output must not discard the timing reference for a slow
      // alternating step. The old 2-second reset made every slow step 0 RPM.
      if (timeMs - this.lastStepTime > MAX_STEP_INTERVAL_MS) {
        this.lastStepTime = null;
        this.lastStepSide = null;
        this.intervals = [];
      }
    }

    const lifts: [number, number] = [leftLift, rightLift];
    const completed: Side[] = [];
    const durations: [number, number] = [0, 0];

    // A simultaneous two-knee lift is not an alternating running step.
    if (lifts.every((lift) => lift >= RAISED_THRESHOLD)) {
      this.phases = ["unarmed", "unarmed"];
      this.loweredAt = [null, null];
      this.liftStartedAt = [null, null];
    } else {
      for (const side of [0, 1] as const) {
        if (lifts[side] <= LOWERED_THRESHOLD) {
          if (this.phases[side] === "raised") {
            completed.push(side);
            durations[side] = timeMs - (this.liftStartedAt[side] ?? timeMs);
          }
          this.phases[side] = "lowered";
          this.loweredAt[side] = timeMs;
          this.liftStartedAt[side] = null;
        } else if (this.phases[side] === "lowered") {
          this.liftStartedAt[side] ??= this.loweredAt[side] ?? timeMs;
          if (lifts[side] >= RAISED_THRESHOLD) this.phases[side] = "raised";
        }
      }
    }

    if (completed.length === 1 && completed[0] !== this.lastStepSide) {
      this.steps += 1;
      this.lastCycleDuration = durations[completed[0]];
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
      } else {
        // Give feedback after the first complete lift, rather than requiring
        // two repetitions before the bike can move. Include raising AND
        // lowering time and cap this provisional estimate conservatively.
        this.cadence = Math.min(
          60,
          30000 / Math.max(500, this.lastCycleDuration),
        );
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
