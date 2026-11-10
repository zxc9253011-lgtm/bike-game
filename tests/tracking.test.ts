import assert from "node:assert/strict";
import test from "node:test";
import {
  PoseFreshness,
  PoseTimeoutError,
  poseDeadline,
} from "../src/lib/tracking.ts";

test("slow normal inference expands the freshness budget within fixed bounds", () => {
  const clock = new PoseFreshness();
  assert.equal(clock.freshnessMs(), 3500);
  clock.observe(0, 4000);
  assert.equal(
    clock.isStale(5000),
    false,
    "completion time, not old capture time, measures result freshness",
  );
  clock.observe(2000, 6000);
  assert.equal(clock.freshnessMs(), 5000);
  assert.equal(clock.isStale(10999), false);
  assert.equal(clock.isStale(11001), true);
  clock.observe(12000, 16000);
  assert.equal(clock.freshnessMs(), 6000);
});

test("fast inference retains a bounded minimum freshness budget", () => {
  const clock = new PoseFreshness();
  clock.observe(0, 20);
  clock.observe(100, 120);
  assert.equal(clock.freshnessMs(), 1800);
});

test("a heavy first result gives the second model time to warm up without false recovery", () => {
  const first = new PoseFreshness();
  first.observe(0, 4366);
  assert.equal(first.freshnessMs(), 6000);
  assert.equal(
    first.isStale(8397),
    false,
    "the first player stays healthy while the second model needs another 4031ms",
  );
  assert.equal(
    first.isStale(10367),
    true,
    "startup grace still has a fixed upper bound",
  );
  first.observe(8400, 9000);
  first.observe(9400, 10000);
  for (let index = 0; index < 12; index++)
    first.observe(10400 + index * 1000, 11000 + index * 1000);
  assert.ok(
    first.freshnessMs() < 2700,
    "normal intervals replace the warm-up estimate",
  );

  const fast = new PoseFreshness();
  fast.observe(0, 20);
  assert.equal(
    fast.freshnessMs(),
    3500,
    "fast startup keeps the original grace period",
  );
});

test("repeated invalid pose results do not extend dropout grace", () => {
  const clock = new PoseFreshness();
  assert.equal(clock.keepMotion(100), true);
  assert.equal(clock.keepMotion(1000), true);
  assert.equal(clock.keepMotion(1300), true);
  assert.equal(clock.keepMotion(1301), false);
  assert.equal(clock.keepMotion(2000), false);
  clock.valid();
  assert.equal(
    clock.keepMotion(2100),
    true,
    "a genuinely valid pose starts a new grace period",
  );
});

test("a deadline rejects a hung graph without settling or cancelling its raw operation", async () => {
  let settle!: (value: number) => void;
  let rawFinished = false;
  const operation = new Promise<number>((resolve) => {
    settle = resolve;
  });
  void operation.then(() => {
    rawFinished = true;
  });
  await assert.rejects(
    poseDeadline(operation, 10, "graph stalled"),
    PoseTimeoutError,
  );
  assert.equal(rawFinished, false);
  settle(7);
  assert.equal(
    await operation,
    7,
    "the caller can safely await the raw operation before deleting its graph",
  );
});

test("a deadline preserves normal values and original graph errors", async () => {
  assert.equal(await poseDeadline(Promise.resolve(9), 50, "unused"), 9);
  const error = new Error("original graph failure");
  await assert.rejects(
    poseDeadline(Promise.reject(error), 50, "unused"),
    (received: unknown) => received === error,
  );
});
