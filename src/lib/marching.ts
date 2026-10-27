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
const STILL_WINDOW_MS = 600;
const STILL_RANGE = 0.0045;

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
  private measuredCadence = 0;
  private steps = 0;
  private motionSamples: Array<{ time: number; difference: number }> = [];

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
    this.measuredCadence = 0;
    this.motionSamples = [];
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
      this.motionSamples = [{ time: timeMs, difference: leftLift - rightLift }];
      return this.reading();
    }

    const dt = timeMs - this.lastFrameTime;
    this.lastFrameTime = timeMs;
    const smoothing = 1 - Math.exp(-dt / 45);
    this.filtered[0] += (leftLift - this.filtered[0]) * smoothing;
    this.filtered[1] += (rightLift - this.filtered[1]) * smoothing;
    // A slow, continuous step naturally changes less near its highest point.
    // Give that pace a little more observation time, while ordinary marching
    // still stops after a 600ms still window rather than the old 1.8–6s delay.
    const stillWindow = Math.max(
      STILL_WINDOW_MS,
      Math.min(1500, (this.intervals.at(-1) ?? 0) * 0.3),
    );
    this.motionSamples.push({
      time: timeMs,
      difference: this.filtered[0] - this.filtered[1],
    });
    // Retain the sample at/before the window boundary, so low frame rates
    // cannot manufacture a full window from just a few milliseconds.
    while (
      this.motionSamples.length > 1 &&
      this.motionSamples[1].time <= timeMs - stillWindow
    )
      this.motionSamples.shift();

    let stopAfter = 1800;
    if (this.lastStepTime !== null) {
      const period = this.intervals.at(-1);
      stopAfter =
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
    if (
      this.motionSamples.length > 1 &&
      timeMs - this.motionSamples[0].time >= stillWindow
    ) {
      const differences = this.motionSamples.map((sample) => sample.difference);
      const range = Math.max(...differences) - Math.min(...differences);
      if (range <= STILL_RANGE) {
        // Stop promptly when the person has stopped or is holding one knee.
        // Keep the timing reference, so the next slow alternating step still
        // measures its real period instead of starting over at zero forever.
        this.cadence = 0;
      } else if (
        range >= MOVE_BAND / 2 &&
        this.lastStepTime !== null &&
        timeMs - this.lastStepTime < stopAfter
      ) {
        // A very slow knee briefly becomes almost still at its highest point.
        // Resume its measured pace when real movement returns, without making
        // another step or losing the alternating-step timing reference.
        this.cadence = this.measuredCadence;
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
        this.measuredCadence = this.cadence;
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
