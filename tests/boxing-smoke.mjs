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
      maxHp: Number(element.dataset.maxHp),
      dodges: Number(element.dataset.dodges),
      dodge: element.dataset.dodge || "none",
      calibrated: element.dataset.calibrated === "true",
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
async function sceneAction(page, key, playerIndex, value) {
  await page.waitForFunction(
    ({ key, playerIndex, value }) =>
      document
        .querySelector('canvas[data-engine="boxing-ring"]')
        ?.dataset[key]?.split(",")[playerIndex - 1] === value,
    { key, playerIndex, value },
    { timeout: 8000 },
  );
}
async function demoPunch(page, index, label, type, damage) {
  const before = await stats(page),
    other = index === 1 ? 1 : 0;
  await action(page, index, label).click();
  await expectStats(
    page,
    before.map((fields, playerIndex) =>
      playerIndex === index - 1
        ? {
            punches: fields.punches + 1,
            hits: fields.hits + 1,
            score: fields.score + 10,
          }
        : { hp: fields.hp - damage },
    ),
  );
  await sceneAction(page, "punchTypes", index, type);
  assert.equal((await stats(page))[other].hp, before[other].hp - damage);
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
            // Prime both two-frame gesture candidates on a player-2-first
            // capture. On the next player-1-first capture both become valid;
            // the new guard result returns 350ms after its opponent's punch.
            if (state.fairnessProbe?.stage === "waiting" && index === 1) {
              state.programs = ["left", "guard"];
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
              programs: state.programs.map((program) =>
                program.startsWith("spike-") ? program.slice(6) : program,
              ),
              tracked: [...state.tracked],
              used: 0,
            };
            state.programs = state.programs.map((program) =>
              program.startsWith("spike-") ? "neutral" : program,
            );
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
          if (program === "hook-left") {
            set(13, 0.76, 0.35, -0.1);
            set(15, 0.49, 0.32, -0.3);
          }
          if (program === "hook-right") {
            set(14, 0.24, 0.35, -0.1);
            set(16, 0.51, 0.32, -0.3);
          }
          if (program === "upper-left") {
            set(13, 0.64, 0.43, -0.15);
            set(15, 0.61, 0.24, -0.38);
          }
          if (program === "upper-right") {
            set(14, 0.36, 0.43, -0.15);
            set(16, 0.39, 0.24, -0.38);
          }
          if (program === "guard") {
            set(13, 0.64, 0.5, -0.02);
            set(14, 0.36, 0.5, -0.02);
            set(15, 0.43, 0.43, -0.1);
            set(16, 0.57, 0.43, -0.1);
          }
          if (program === "wave") {
            set(13, 0.66, 0.29, -0.02);
            set(14, 0.34, 0.29, -0.02);
            set(15, 0.62, 0.17, -0.12);
            set(16, 0.38, 0.17, -0.12);
          }
          if (program === "jump") {
            for (const joint of [0, 11, 12, 13, 14, 15, 16]) {
              points[joint].x += 0.13;
              points[joint].y += 0.1;
            }
          }
          if (["lean-left", "lean-right", "duck"].includes(program)) {
            for (const point of points) {
              if (point.visibility < 0.45) continue;
              if (program === "duck") point.y += 0.065;
              else point.x += program === "lean-left" ? 0.065 : -0.065;
            }
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
        { score: 10, punches: 1, hits: 1, hp: 300 },
        { hp: 294, score: 0 },
      ]);
      await action(page, 2, "交叉防守").click();
      await expectStats(page, [{}, { guarding: true }]);
      await action(page, 1, "右拳").click();
      await expectStats(page, [
        { score: 10, punches: 2 },
        { hp: 294, score: 3, blocks: 1 },
      ]);
      await action(page, 2, "交叉防守").click();
      await expectStats(page, [{}, { guarding: false }]);
      await action(page, 2, "右拳").click();
      await expectStats(page, [
        { hp: 294 },
        { score: 13, punches: 1, hits: 1 },
      ]);
      await page.keyboard.down("a");
      await page.keyboard.down("a");
      await page.keyboard.up("a");
      await expectStats(page, [{ punches: 3, score: 20 }, { hp: 288 }]);
      await page.waitForTimeout(500);
      assert.equal(
        (await stats(page))[0].punches,
        3,
        "holding a keyboard key does not auto-repeat punches",
      );
      await expectStats(page, [{ maxHp: 300 }, { maxHp: 300 }]);
      for (const index of [1, 2])
        assert.equal(
          await player(page, index)
            .getByRole("progressbar")
            .getAttribute("aria-valuemax"),
          "300",
        );
      await demoPunch(page, 1, "勾拳", "hook", 8);
      await demoPunch(page, 1, "上鉤拳", "uppercut", 10);
      for (const [label, dodge] of [
        ["左閃", "left"],
        ["右閃", "right"],
        ["下閃", "duck"],
      ]) {
        const before = await stats(page);
        await action(page, 2, label).click();
        await expectStats(page, [{}, { dodge, guarding: false }]);
        await sceneAction(page, "dodgeState", 2, dodge);
        await action(page, 1, "左拳").click();
        await expectStats(page, [
          {
            punches: before[0].punches + 1,
            hits: before[0].hits,
            score: before[0].score,
          },
          {
            hp: before[1].hp,
            score: before[1].score + 3,
            dodges: before[1].dodges + 1,
          },
        ]);
        await action(page, 2, label).click();
        await expectStats(page, [{}, { dodge: "none" }]);
      }
      // The former round ended after ten ordinary hits. The real new match
      // must survive twelve landed punches without changing its engine state.
      for (let index = 0; index < 8; index++)
        await demoPunch(page, 1, "左拳", "straight", 6);
      await expectStats(page, [
        { score: 120, punches: 16, hits: 12, hp: 294 },
        { score: 22, hp: 222, dodges: 3 },
      ]);
      assert.equal(
        await page.locator(".boxing-result").count(),
        0,
        "higher vitality keeps a twelve-hit round running",
      );
      assert.ok(
        Number(
          await player(page, 2)
            .getByRole("progressbar")
            .getAttribute("aria-valuenow"),
        ) > 0,
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
        [120, 22],
        "actual game scores are saved",
      );
      assert.deepEqual(
        records[0].hp,
        [294, 222],
        "actual remaining vitality is saved",
      );
      assert.equal(records[0].maxHp, 300);
      assert.deepEqual(records[0].punches, [16, 1]);
      assert.deepEqual(records[0].hits, [12, 1]);
      assert.deepEqual(records[0].blocks, [0, 1]);
      assert.deepEqual(records[0].dodges, [0, 3]);
      assert.equal(records[0].reason, "manual");
      await page.getByRole("button", { name: "重新一局", exact: true }).click();
      await expectStats(page, [
        { hp: 300, maxHp: 300, score: 0, punches: 0, dodges: 0 },
        { hp: 300, maxHp: 300, score: 0, punches: 0, dodges: 0 },
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
          .getByRole("combobox", { name: "拳擊回合時間", exact: true })
          .selectOption("120");
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
        await expectStats(page, [
          { tracking: true, calibrated: true },
          { tracking: true, calibrated: true },
        ]);
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
        const quietStart = await stats(page);
        for (const programs of [
          ["spike-left", "spike-right"],
          ["spike-jump", "neutral"],
          ["wave", "wave"],
        ]) {
          await sampled(page, { programs }, 7);
          const observed = await stats(page);
          assert.deepEqual(
            observed.map(({ tracking, calibrated, ...fields }) => fields),
            quietStart.map(({ tracking, calibrated, ...fields }) => fields),
            "single-frame pose spikes and overhead waving do not fabricate combat",
          );
        }
        await sampled(page, { programs: ["neutral", "neutral"] }, 6);
        await expectStats(page, [{ calibrated: true }, { calibrated: true }]);
        await sampled(page, { programs: ["left", "neutral"] });
        await expectStats(page, [
          { punches: 1, hits: 1, score: 10 },
          { hp: 294 },
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
          { hp: 294, blocks: 1, score: 3 },
        ]);
        await sampled(page, { programs: ["guard", "neutral"] });
        await expectStats(page, [{ guarding: true }, { guarding: false }]);
        await sampled(page, { programs: ["guard", "right"] });
        await expectStats(page, [
          { hp: 300, blocks: 1, score: 13 },
          { punches: 1, score: 3 },
        ]);
        await sampled(page, { programs: ["neutral", "neutral"] });
        await sampled(page, { programs: ["left", "left"] });
        await expectStats(page, [
          { hp: 294, score: 23, hits: 2, punches: 3 },
          { hp: 288, score: 13, hits: 1, punches: 2 },
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
        await sampled(
          page,
          {
            delays: [0, 0],
            programs: ["neutral", "neutral"],
          },
          6,
        );
        for (const [index, program, type, damage] of [
          [1, "hook-left", "hook", 8],
          [2, "upper-right", "uppercut", 10],
        ]) {
          const before = await stats(page);
          const programs = ["neutral", "neutral"];
          programs[index - 1] = program;
          await sampled(page, { programs });
          await expectStats(
            page,
            before.map((fields, playerIndex) =>
              playerIndex === index - 1
                ? {
                    punches: fields.punches + 1,
                    hits: fields.hits + 1,
                    score: fields.score + 10,
                  }
                : { hp: fields.hp - damage },
            ),
          );
          await sceneAction(page, "punchTypes", index, type);
          await sampled(page, { programs: ["neutral", "neutral"] }, 6);
        }
        for (const [index, program, dodge] of [
          [2, "lean-left", "left"],
          [2, "lean-right", "right"],
          [2, "duck", "duck"],
          [1, "lean-left", "left"],
        ]) {
          const before = await stats(page),
            attacker = index === 1 ? 2 : 1;
          const programs = ["neutral", "neutral"];
          programs[index - 1] = program;
          await sampled(page, { programs }, 5);
          await expectStats(
            page,
            programs.map((_, playerIndex) =>
              playerIndex === index - 1
                ? { dodge, guarding: false }
                : { dodge: "none" },
            ),
          );
          await sceneAction(page, "dodgeState", index, dodge);
          programs[attacker - 1] = attacker === 1 ? "left" : "right";
          await sampled(page, { programs });
          await expectStats(
            page,
            before.map((fields, playerIndex) =>
              playerIndex === index - 1
                ? {
                    hp: fields.hp,
                    dodges: fields.dodges + 1,
                    score: fields.score + 3,
                  }
                : {
                    punches: fields.punches + 1,
                    hits: fields.hits,
                    score: fields.score,
                  },
            ),
          );
          await sampled(page, { programs: ["neutral", "neutral"] }, 6);
          await expectStats(page, [{ dodge: "none" }, { dodge: "none" }]);
        }
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
          afterPause.map(({ tracking, calibrated, ...fields }) => fields),
          paused.map(({ tracking, calibrated, ...fields }) => fields),
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
