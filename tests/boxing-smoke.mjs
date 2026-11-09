import assert from "node:assert/strict";
import { mkdtemp } from "node:fs/promises";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { cameraRegion } from "../src/lib/motion.ts";

// Demo controls exercise the actual match engine. Only the explicitly labelled
// camera/Pose TEST DOUBLE supplies controlled upper-body coordinates; no match
// state, hits, scores, damage or gesture events are injected into the App.
// This does not measure a real model's accuracy or real webcam latency.
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const baseURL = process.env.BASE_URL || "http://127.0.0.1:5173";
const artifacts = await mkdtemp(join(tmpdir(), "forest-pedal-boxing-"));
const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || "/usr/bin/chromium",
  headless: true,
  args: [
    "--no-sandbox",
    "--disable-dev-shm-usage",
    "--use-angle=swiftshader",
    "--enable-unsafe-swiftshader",
  ],
});
const scene = (page) => page.locator('canvas[data-engine="boxing-ring"]');
const player = (page, index) => page.locator(`[data-boxing-player="${index}"]`);
const action = (page, index, name) =>
  page.getByRole("button", { name: `玩家 ${index} ${name}`, exact: true });
async function stats(page) {
  return page.locator("[data-boxing-player]").evaluateAll((elements) =>
    elements.map((element) => ({
      score: Number(element.dataset.score),
      hp: Number(element.dataset.hp),
      guarding: element.dataset.guarding === "true",
      tracking: element.dataset.tracking === "true",
      punches: Number(element.dataset.punches),
      hits: Number(element.dataset.hits),
      blocks: Number(element.dataset.blocks),
    })),
  );
}
async function expectStats(page, expected) {
  await page.waitForFunction(
    (expected) =>
      expected.every((fields, index) => {
        const element = document.querySelector(
          `[data-boxing-player="${index + 1}"]`,
        );
        return (
          element &&
          Object.entries(fields).every(
            ([key, value]) => String(element.dataset[key]) === String(value),
          )
        );
      }),
    expected,
    { timeout: 8000 },
  );
}
async function start(page) {
  await page
    .getByRole("button", { name: /^(開始|繼續)拳擊比賽$/, exact: true })
    .click();
  await page
    .getByRole("button", { name: "暫停拳擊比賽", exact: true })
    .waitFor({ timeout: 10000 });
  assert.equal(
    await page.locator(".boxing-game").getAttribute("data-running"),
    "true",
  );
}
async function pause(page) {
  await page.getByRole("button", { name: "暫停拳擊比賽", exact: true }).click();
  await page.waitForFunction(
    () => document.querySelector(".boxing-game")?.dataset.running === "false",
  );
}
async function withScenario(name, run, camera = false) {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1080 },
    deviceScaleFactor: 0.5,
  });
  if (camera) await installCameraDouble(context);
  const page = await context.newPage();
  const errors = [],
    badResponses = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("response", (response) => {
    if (response.status() >= 400)
      badResponses.push(`${response.status()} ${response.url()}`);
  });
  try {
    assert.equal(
      (await page.goto(baseURL, { waitUntil: "networkidle" }))?.ok(),
      true,
    );
    await page.getByRole("button", { name: "雙人拳擊", exact: true }).click();
    await page.locator(".boxing-game").waitFor();
    await scene(page).waitFor();
    assert.equal(
      await scene(page).getAttribute("data-facing"),
      "opponents",
      "characters face each other while people face the webcam",
    );
    await run(page);
    assert.deepEqual(errors, [], `${name}: no browser exceptions`);
    assert.deepEqual(
      badResponses,
      [],
      `${name}: application/model assets load`,
    );
    console.log(`Boxing passed: ${name}.`);
  } catch (error) {
    await page
      .screenshot({
        path: join(artifacts, `${name}-failure.png`),
        fullPage: true,
      })
      .catch(() => undefined);
    console.error(
      JSON.stringify({
        name,
        error: error.message,
        errors,
        badResponses,
        artifacts,
        state: await page
          .evaluate(() => ({
            game: { ...document.querySelector(".boxing-game")?.dataset },
            scene: {
              ...document.querySelector('canvas[data-engine="boxing-ring"]')
                ?.dataset,
            },
            players: [...document.querySelectorAll("[data-boxing-player]")].map(
              (element) => ({ ...element.dataset }),
            ),
            feedback: document.querySelector(".pose-footer")?.textContent,
            samples: window.__boxingDouble?.samples?.slice(-16),
          }))
          .catch(() => undefined),
      }),
    );
    throw error;
  } finally {
    await context.close();
  }
}

async function installCameraDouble(context) {
  await context.addInitScript(
    ({ regions }) => {
      const state = {
        tracked: [false, false],
        programs: ["neutral", "neutral"],
        instances: [],
        streams: [],
        cameraCalls: 0,
        samples: [],
        delays: [0, 0],
        capture: null,
        captureId: 0,
        fairnessProbe: null,
      };
      window.__boxingDouble = state;
      navigator.mediaDevices.getUserMedia = async () => {
        state.cameraCalls += 1;
        const input = document.createElement("canvas");
        input.width = 1280;
        input.height = 720;
        const drawing = input.getContext("2d");
        let frame = 0;
        const draw = () => {
          drawing.fillStyle = "#243a42";
          drawing.fillRect(0, 0, input.width, input.height);
          drawing.fillStyle = "#eaf2df";
          drawing.font = "24px sans-serif";
          drawing.fillText(
            "UPPER-BODY BOXING TEST DOUBLE — NOT REAL PEOPLE",
            70,
            100,
          );
          drawing.fillText(`Frame ${frame++}`, 70, 145);
        };
        draw();
        const stream = input.captureStream(30);
        const timer = setInterval(() => {
          if (stream.getTracks().every((track) => track.readyState === "ended"))
            clearInterval(timer);
          else draw();
        }, 33);
        state.streams.push(stream);
        return stream;
      };
      window.Pose = class ControlledPose {
        constructor() {
          this.player = state.instances.filter(
            (instance) => !instance.closed,
          ).length;
          this.closed = false;
          this.frames = 0;
          state.instances.push(this);
        }
        initialize() {
          return Promise.resolve();
        }
        setOptions() {}
        onResults(callback) {
          this.callback = callback;
        }
        close() {
          this.closed = true;
          return Promise.resolve();
        }
        async send() {
          const index = this.player,
            region = regions[index];
          if (!state.capture) {
            let phase = null;
            // Start the guard on a player-2-first frame. The immediately
            // following player-1-first frame contains both a fresh attack and
            // the now-confirmable crossed guard, whose result returns late.
            if (state.fairnessProbe?.stage === "waiting" && index === 1) {
              state.programs = ["neutral", "guard"];
              state.fairnessProbe.stage = "priming";
              phase = "prime";
            } else if (
              state.fairnessProbe?.stage === "priming" &&
              index === 0
            ) {
              state.programs = ["left", "guard"];
              state.fairnessProbe.stage = "attacking";
              phase = "attack";
            }
            // Both graphs analyze the same captured image, even if the fake
            // person changes posture while the slower send is still pending.
            state.capture = {
              id: ++state.captureId,
              first: index,
              phase,
              programs: [...state.programs],
              tracked: [...state.tracked],
              used: 0,
            };
          }
          const capture = state.capture;
          capture.used += 1;
          if (capture.used === 2) state.capture = null;
          const center =
            ((index === 0 ? 0.75 : 0.25) - region.x) / region.width;
          const visible = capture.tracked[index] ? 0.99 : 0.05;
          const points = Array.from({ length: 33 }, () => ({
            x: center,
            y: 0.6,
            z: 0,
            visibility: 0.05,
          }));
          const set = (joint, x, y, z) => {
            points[joint] = { x: center + x - 0.5, y, z, visibility: visible };
          };
          set(0, 0.5, 0.15, 0);
          set(11, 0.6, 0.3, 0);
          set(12, 0.4, 0.3, 0);
          set(13, 0.66, 0.48, -0.02);
          set(14, 0.34, 0.48, -0.02);
          set(15, 0.62, 0.42, -0.12);
          set(16, 0.38, 0.42, -0.12);
          // Hips, knees and feet deliberately remain occluded in every frame.
          const program = capture.programs[index];
          if (program === "left") {
            set(13, 0.62, 0.34, -0.22);
            set(15, 0.61, 0.31, -0.55);
          }
          if (program === "right") {
            set(14, 0.38, 0.34, -0.22);
            set(16, 0.39, 0.31, -0.55);
          }
          if (program === "guard") {
            set(13, 0.64, 0.5, -0.02);
            set(14, 0.36, 0.5, -0.02);
            set(15, 0.43, 0.43, -0.1);
            set(16, 0.57, 0.43, -0.1);
          }
          const sentAt = performance.now();
          if (state.delays[index] > 0)
            await new Promise((resolve) =>
              setTimeout(resolve, state.delays[index]),
            );
          this.frames += 1;
          state.samples.push({
            player: index + 1,
            program,
            tracked: capture.tracked[index],
            capture: capture.id,
            first: capture.first,
            phase: capture.phase,
            sentAt: Math.round(sentAt),
            at: Math.round(performance.now()),
          });
          if (state.samples.length > 32) state.samples.shift();
          this.callback({ poseLandmarks: points });
          return Promise.resolve();
        }
      };
    },
    { regions: [cameraRegion(0, 2), cameraRegion(1, 2)] },
  );
}
async function sampled(page, patch, frames = 4) {
  const before = await page.evaluate((patch) => {
    const before = window.__boxingDouble.instances
      .filter((instance) => !instance.closed)
      .map((instance) => instance.frames);
    Object.assign(window.__boxingDouble, patch);
    return before;
  }, patch);
  await page.waitForFunction(
    ({ before, frames }) => {
      const current = window.__boxingDouble.instances.filter(
        (instance) => !instance.closed,
      );
      return (
        current.length === 2 &&
        current.every(
          (instance, index) => instance.frames >= (before[index] ?? 0) + frames,
        )
      );
    },
    { before, frames },
    { timeout: 12000 },
  );
}

try {
  const selected = process.env.BOXING_SCENARIO;
  if (!selected || selected === "demo")
    await withScenario("demo", async (page) => {
      const duration = page.getByRole("combobox", {
        name: "拳擊回合時間",
        exact: true,
      });
      for (const value of ["90", "120", "60"]) {
        await duration.selectOption(value);
        assert.equal(await duration.inputValue(), value);
        assert.equal(
          await page.locator(".boxing-game").getAttribute("data-duration"),
          value,
        );
      }
      await start(page);
      assert.equal(
        await duration.isDisabled(),
        true,
        "round length cannot change during combat",
      );
      await action(page, 1, "左拳").click();
      await expectStats(page, [
        { score: 10, punches: 1, hits: 1, hp: 100 },
        { hp: 90, score: 0 },
      ]);
      await action(page, 2, "交叉防守").click();
      await expectStats(page, [{}, { guarding: true }]);
      await action(page, 1, "右拳").click();
      await expectStats(page, [
        { score: 10, punches: 2 },
        { hp: 90, score: 3, blocks: 1 },
      ]);
      await action(page, 2, "交叉防守").click();
      await expectStats(page, [{}, { guarding: false }]);
      await action(page, 2, "右拳").click();
      await expectStats(page, [{ hp: 90 }, { score: 13, punches: 1, hits: 1 }]);
      await page.keyboard.down("a");
      await page.keyboard.down("a");
      await page.keyboard.up("a");
      await expectStats(page, [{ punches: 3, score: 20 }, { hp: 80 }]);
      await page.waitForTimeout(500);
      assert.equal(
        (await stats(page))[0].punches,
        3,
        "holding a keyboard key does not auto-repeat punches",
      );
      await pause(page);
      const frozen = await stats(page),
        elapsed = await page
          .locator(".boxing-game")
          .getAttribute("data-elapsed");
      assert.notEqual(elapsed, null, "the actual match clock is observable");
      await page.keyboard.press("a");
      await page.keyboard.down("k");
      await page.waitForTimeout(500);
      await page.keyboard.up("k");
      assert.deepEqual(
        await stats(page),
        frozen,
        "paused manual input neither punches nor guards",
      );
      assert.equal(
        await page.locator(".boxing-game").getAttribute("data-elapsed"),
        elapsed,
        "pause freezes the round clock",
      );
      await page.evaluate(() => {
        window.__boxingCanvas = document.querySelector(
          'canvas[data-engine="boxing-ring"]',
        );
      });
      await page
        .getByRole("button", { name: "拳擊全螢幕", exact: true })
        .click();
      await page.waitForFunction(() =>
        document.fullscreenElement?.classList.contains("boxing-stage"),
      );
      assert.equal(
        await page.evaluate(
          () =>
            document.querySelector('canvas[data-engine="boxing-ring"]') ===
            window.__boxingCanvas,
        ),
        true,
      );
      await page.screenshot({
        path: join(artifacts, "boxing-ring-fullscreen.png"),
      });
      await page.evaluate(() => document.exitFullscreen());
      await page
        .getByRole("button", { name: "結束拳擊比賽", exact: true })
        .click();
      await page.locator(".boxing-result").waitFor();
      assert.match(
        await page.locator(".boxing-result").textContent(),
        /玩家\s*1\s*獲勝/,
      );
      const records = await page.evaluate(() =>
        JSON.parse(localStorage.getItem("forest-pedal-boxing-matches") || "[]"),
      );
      assert.equal(records.length, 1, "one completed match is saved once");
      assert.equal(records[0].winner, 1);
      assert.deepEqual(
        records[0].scores,
        [20, 13],
        "actual game scores are saved",
      );
      assert.deepEqual(
        records[0].hp,
        [90, 80],
        "actual remaining vitality is saved",
      );
      assert.deepEqual(records[0].punches, [3, 1]);
      assert.deepEqual(records[0].hits, [2, 1]);
      assert.deepEqual(records[0].blocks, [0, 1]);
      assert.equal(records[0].reason, "manual");
      await page.getByRole("button", { name: "重新一局", exact: true }).click();
      await expectStats(page, [
        { hp: 100, score: 0, punches: 0 },
        { hp: 100, score: 0, punches: 0 },
      ]);
      assert.equal(await page.locator(".boxing-result").count(), 0);
      assert.equal(
        await page.evaluate(
          () =>
            JSON.parse(
              localStorage.getItem("forest-pedal-boxing-matches") || "[]",
            ).length,
        ),
        1,
        "reset does not duplicate records",
      );
      await page.setViewportSize({ width: 390, height: 844 });
      await page.waitForTimeout(200);
      assert.ok(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        "boxing fits narrow screens",
      );
      await page.screenshot({
        path: join(artifacts, "boxing-mobile.png"),
        fullPage: true,
      });
      await page.setViewportSize({ width: 1440, height: 1080 });
      await page
        .getByRole("button", { name: "返回騎行與跑步", exact: true })
        .click();
      await page.locator(".ride-scene canvas").waitFor();
      await page
        .getByRole("button", { name: "原地踏步跑步", exact: true })
        .click();
      assert.equal(
        await page
          .getByRole("button", { name: "原地踏步跑步", exact: true })
          .getAttribute("aria-pressed"),
        "true",
        "existing running mode remains available",
      );
    });

  if (!selected || selected === "camera")
    await withScenario(
      "camera",
      async (page) => {
        await page
          .getByRole("button", { name: "使用攝影機", exact: true })
          .click();
        await sampled(page, {});
        await expectStats(page, [{ tracking: false }, { tracking: false }]);
        assert.equal(
          await page
            .getByRole("button", { name: "開始拳擊比賽", exact: true })
            .isDisabled(),
          true,
        );
        await sampled(page, {
          tracked: [true, true],
          programs: ["neutral", "neutral"],
        });
        await expectStats(page, [{ tracking: true }, { tracking: true }]);
        await page.evaluate(() => {
          window.__boxingFullscreen = {
            video: document.querySelector(".pose-video"),
            overlay: document.querySelector(".pose-overlay"),
            stream: document.querySelector(".pose-video").srcObject,
            models: window.__boxingDouble.instances.filter(
              (instance) => !instance.closed,
            ),
          };
        });
        await page
          .getByRole("button", { name: "拳擊全螢幕", exact: true })
          .click();
        await page.waitForFunction(() =>
          document.fullscreenElement?.classList.contains("boxing-stage"),
        );
        await sampled(page, {}, 3);
        assert.equal(
          await page.evaluate(() => {
            const before = window.__boxingFullscreen,
              current = window.__boxingDouble.instances.filter(
                (instance) => !instance.closed,
              );
            return (
              before.video === document.querySelector(".pose-video") &&
              before.overlay === document.querySelector(".pose-overlay") &&
              before.stream ===
                document.querySelector(".pose-video").srcObject &&
              window.__boxingDouble.cameraCalls === 1 &&
              current.length === 2 &&
              current.every((model, index) => model === before.models[index])
            );
          }),
          true,
          "fullscreen preserves both graphs and the single live camera",
        );
        await page.screenshot({
          path: join(artifacts, "boxing-camera-fullscreen.png"),
        });
        await page.evaluate(() => document.exitFullscreen());
        await start(page);
        await sampled(page, { programs: ["neutral", "neutral"] });
        await sampled(page, { programs: ["left", "neutral"] });
        await expectStats(page, [
          { punches: 1, hits: 1, score: 10 },
          { hp: 90 },
        ]);
        await page.waitForFunction(
          () =>
            document.querySelector('canvas[data-engine="boxing-ring"]')?.dataset
              .punchIds === "1,0",
        );
        const held = await stats(page);
        await sampled(page, {}, 8);
        assert.deepEqual(
          await stats(page),
          held,
          "holding an extended arm cannot repeatedly attack",
        );
        await sampled(page, { programs: ["neutral", "guard"] });
        await expectStats(page, [{}, { guarding: true }]);
        await page.waitForFunction(
          () =>
            document.querySelector('canvas[data-engine="boxing-ring"]')?.dataset
              .guards === "false,true",
        );
        await sampled(page, { programs: ["right", "guard"] });
        await expectStats(page, [
          { punches: 2, score: 10 },
          { hp: 90, blocks: 1, score: 3 },
        ]);
        await sampled(page, { programs: ["guard", "neutral"] });
        await expectStats(page, [{ guarding: true }, { guarding: false }]);
        await sampled(page, { programs: ["guard", "right"] });
        await expectStats(page, [
          { hp: 100, blocks: 1, score: 13 },
          { punches: 1, score: 3 },
        ]);
        await sampled(page, { programs: ["neutral", "neutral"] });
        await sampled(page, { programs: ["left", "left"] });
        await expectStats(page, [
          { hp: 90, score: 23, hits: 2, punches: 3 },
          { hp: 80, score: 13, hits: 1, punches: 2 },
        ]);
        await sampled(page, { programs: ["neutral", "neutral"] });
        const beforeDelayedGuard = await stats(page);
        await page.evaluate(() => {
          window.__boxingDouble.delays = [0, 350];
          window.__boxingDouble.fairnessProbe = { stage: "waiting" };
        });
        await expectStats(page, [
          {
            score: beforeDelayedGuard[0].score,
            punches: beforeDelayedGuard[0].punches + 1,
          },
          {
            hp: beforeDelayedGuard[1].hp,
            score: beforeDelayedGuard[1].score + 3,
            blocks: beforeDelayedGuard[1].blocks + 1,
          },
        ]);
        const delayedSamples = await page.evaluate(() =>
          window.__boxingDouble.samples.filter(
            (sample) => sample.phase === "attack",
          ),
        );
        assert.equal(
          delayedSamples.length,
          2,
          "both results from the targeted capture were delivered",
        );
        assert.ok(
          delayedSamples.every(
            (sample) =>
              sample.first === 0 &&
              sample.capture === delayedSamples[0].capture,
          ),
        );
        assert.ok(
          delayedSamples.find((sample) => sample.player === 2).at -
            delayedSamples.find((sample) => sample.player === 2).sentAt >=
            300,
          "the opponent's same-frame guard really returned after the attack result",
        );
        await sampled(page, {
          delays: [0, 0],
          programs: ["neutral", "neutral"],
        });
        await sampled(page, {
          tracked: [true, false],
          programs: ["neutral", "guard"],
        });
        await expectStats(page, [
          { tracking: true },
          { tracking: false, guarding: false },
        ]);
        const missing = await stats(page);
        await sampled(page, { programs: ["left", "guard"] }, 5);
        assert.deepEqual(
          await stats(page),
          missing,
          "an absent opponent cannot be hit or keep guarding",
        );
        if (
          await page
            .getByRole("button", { name: "暫停拳擊比賽", exact: true })
            .count()
        )
          await pause(page);
        const paused = await stats(page);
        await sampled(
          page,
          { tracked: [true, true], programs: ["right", "left"] },
          5,
        );
        const afterPause = await stats(page);
        assert.deepEqual(
          afterPause.map(({ tracking, ...fields }) => fields),
          paused.map(({ tracking, ...fields }) => fields),
          "paused camera poses never queue attacks or hold defense",
        );
        await expectStats(page, [{ guarding: false }, { guarding: false }]);
        await page
          .getByRole("button", { name: "先試玩拳擊", exact: true })
          .click();
        await page.waitForFunction(() =>
          window.__boxingDouble.streams.every((stream) =>
            stream.getTracks().every((track) => track.readyState === "ended"),
          ),
        );
        assert.equal(
          await page.evaluate(() => window.__boxingDouble.cameraCalls),
          1,
        );
      },
      true,
    );
} finally {
  await browser.close();
}
console.log(`Boxing screenshots: ${artifacts}`);
