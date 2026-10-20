/**
 * Estimates full pedal revolutions per minute from an alternating leg signal.
 * Input is (left leg lift - right leg lift), normalized by torso length. One
 * positive-going crossing is one revolution, not one individual knee lift.
 * Timestamps are monotonic milliseconds (e.g. performance.now()).
 */
export class CadenceEstimator {
  private lastTime: number | null = null;
  private filtered = 0;
  private center = 0;
  private armed = false;
  private lastCrossing: number | null = null;
  private intervals: number[] = [];
  private samples: Array<{ time: number; value: number }> = [];
  private rpm = 0;

  reset(): void {
    this.lastTime = null;
    this.filtered = 0;
    this.center = 0;
    this.armed = false;
    this.lastCrossing = null;
    this.intervals = [];
    this.samples = [];
    this.rpm = 0;
  }

  update(signal: number, timeMs: number): number {
    if (!Number.isFinite(signal) || !Number.isFinite(timeMs)) return 0;
    if (
      this.lastTime !== null &&
      (timeMs < this.lastTime || timeMs - this.lastTime > 1500)
    )
      this.reset();
    if (this.lastTime === null) {
      this.lastTime = timeMs;
      this.filtered = signal;
      this.center = signal;
      this.samples.push({ time: timeMs, value: signal });
      return 0;
    }
    const dt = Math.max(0, timeMs - this.lastTime);
    this.lastTime = timeMs;
    this.filtered += (signal - this.filtered) * (1 - Math.exp(-dt / 65));
    this.center += (this.filtered - this.center) * (1 - Math.exp(-dt / 2400));
    this.samples.push({ time: timeMs, value: this.filtered });
    while (this.samples.length > 1 && this.samples[0].time < timeMs - 1600)
      this.samples.shift();

    let min = Infinity;
    let max = -Infinity;
    for (const sample of this.samples) {
      min = Math.min(min, sample.value);
      max = Math.max(max, sample.value);
    }
    const range = max - min;
    // Confidence gating belongs to the caller. This dead band rejects camera
    // jitter and ensures a stationary person cannot generate a cadence.
    const threshold = Math.max(0.024, Math.min(0.065, range * 0.12));
    const centered = this.filtered - this.center;
    if (centered < -threshold) this.armed = true;
    if (this.armed && centered > threshold && range >= 0.065) {
      this.armed = false;
      if (this.lastCrossing !== null) {
        const interval = timeMs - this.lastCrossing;
        // Physiological operating range: 12–180 complete revolutions/minute.
        if (interval >= 333 && interval <= 5000) {
          this.intervals.push(interval);
          if (this.intervals.length > 3) this.intervals.shift();
          const sorted = [...this.intervals].sort((a, b) => a - b);
          const middle = Math.floor(sorted.length / 2);
          const median =
            sorted.length % 2
              ? sorted[middle]
              : (sorted[middle - 1] + sorted[middle]) / 2;
          this.rpm = Math.min(180, 60000 / median);
        } else if (interval > 5000) {
          this.intervals = [];
          this.rpm = 0;
        }
        // Ignore implausibly close crossings without moving the reference.
        if (interval >= 333) this.lastCrossing = timeMs;
      } else {
        this.lastCrossing = timeMs;
      }
    }

    const staleAfter = this.intervals.length
      ? Math.max(1800, this.intervals[this.intervals.length - 1] * 1.8)
      : 5500;
    const stale =
      this.lastCrossing !== null && timeMs - this.lastCrossing > staleAfter;
    const still =
      this.samples.length > 1 &&
      timeMs - this.samples[0].time > 1400 &&
      range < 0.045;
    if (stale || still) {
      this.rpm = 0;
      this.intervals = [];
      this.lastCrossing = null;
      this.armed = false;
    }
    return this.rpm;
  }
}
