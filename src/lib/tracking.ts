const INITIAL_FRESHNESS_MS = 3500;
const MIN_FRESHNESS_MS = 1800;
const MAX_FRESHNESS_MS = 6000;
export const POSE_DROPOUT_GRACE_MS = 1200;

/** Camera capture time measures motion; completion time measures model health. */
export class PoseFreshness {
  lastResultAt: number | null = null;
  private lastCaptureAt: number | null = null;
  private captureInterval: number | null = null;
  private invalidSince: number | null = null;

  observe(capturedAt: number, completedAt: number): void {
    if (this.lastCaptureAt !== null && capturedAt > this.lastCaptureAt) {
      const interval = capturedAt - this.lastCaptureAt;
      this.captureInterval =
        this.captureInterval === null
          ? interval
          : this.captureInterval * 0.6 + interval * 0.4;
    }
    this.lastCaptureAt = capturedAt;
    this.lastResultAt = completedAt;
  }

  freshnessMs(): number {
    return this.captureInterval === null
      ? INITIAL_FRESHNESS_MS
      : Math.min(
          MAX_FRESHNESS_MS,
          Math.max(MIN_FRESHNESS_MS, this.captureInterval * 2.5),
        );
  }

  isStale(now: number): boolean {
    return (
      this.lastResultAt !== null && now - this.lastResultAt > this.freshnessMs()
    );
  }

  valid(): void {
    this.invalidSince = null;
  }

  /** Consecutive invalid results cannot renew the dropout grace period. */
  keepMotion(now: number): boolean {
    this.invalidSince ??= now;
    return now - this.invalidSince <= POSE_DROPOUT_GRACE_MS;
  }
}

export class PoseTimeoutError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "PoseTimeoutError";
  }
}

/** This limits waiting, without pretending to cancel the underlying WASM work. */
export function poseDeadline<T>(
  operation: Promise<T>,
  durationMs: number,
  message: string,
): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timeout = setTimeout(
      () => reject(new PoseTimeoutError(message)),
      durationMs,
    );
    operation.then(
      (value) => {
        clearTimeout(timeout);
        resolve(value);
      },
      (error: unknown) => {
        clearTimeout(timeout);
        reject(error);
      },
    );
  });
}
