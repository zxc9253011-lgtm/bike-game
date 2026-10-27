import assert from "node:assert/strict";
import { mkdtemp } from "node:fs/promises";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { cognitiveRow } from "../src/lib/cognitiveRun.ts";

// Layout/gameplay uses the real App clock, demo speed and distance crossings.
// Only camera-response checks supply explicitly labelled camera/Pose TEST
// DOUBLES. Their timing measures App scheduling, not real model accuracy or
// the latency of a person's actual webcam/hardware.
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const baseURL = process.env.BASE_URL || "http://127.0.0.1:5173";
const artifacts = await mkdtemp(join(tmpdir(), "forest-pedal-dual-track-"));
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
const canvas = (page) => page.locator(".ride-scene canvas");
const card = (page, player) =>
  page.locator(`[data-cognitive-player="${player}"]`);
const laneButton = (page, player, lane) =>
  page.getByRole("button", {
    name: `玩家 ${player} ${lane === -1 ? "左道" : lane === 0 ? "中道" : "右道"}`,
    exact: true,
  });
async function seed(page, player) {
  const raw = await card(page, player).getAttribute("data-cognitive-seed");
  assert.notEqual(raw, null, "each session exposes its actual layout seed");
  const value = Number(raw);
  assert.ok(Number.isInteger(value) && value >= 0);
  return value;
}
async function row(page, index, player) {
  return cognitiveRow(index, player - 1, await seed(page, player));
}
async function stats(page, player) {
  return card(page, player).evaluate((element) => {
    const metric = (key) =>
      Number(
        element.querySelector(`[data-cognitive-metric="${key}"]`)?.textContent,
      );
    return {
      next: Number(element.dataset.nextRow),
      lane: Number(element.dataset.lane),
      coins: metric("coins"),
      score: metric("score"),
      bombs: metric("bomb-hits"),
    };
  });
}
async function choose(page, player, lane) {
  await laneButton(page, player, lane).click();
  await page.waitForFunction(
    ({ player, lane }) => {
      const hud = document.querySelector(`[data-cognitive-player="${player}"]`);
      const visual = document
        .querySelector(".ride-scene canvas")
        ?.dataset.lanes?.split(",");
      return (
        Number(hud?.dataset.lane) === lane &&
        Number(visual?.[player - 1]) === lane
      );
    },
    { player, lane },
  );
}
async function crossed(page, player, index) {
  await page.waitForFunction(
    ({ player, index }) =>
      Number(
        document.querySelector(`[data-cognitive-player="${player}"]`)?.dataset
          .nextRow,
      ) > index,
    { player, index },
    { timeout: 15000 },
  );
}
async function start(page) {
  await page.locator(".start-button").click();
  await page.locator(".start-button.is-running").waitFor({ timeout: 10000 });
}
async function pause(page) {
  const button = page.locator(".start-button.is-running");
  if (await button.count()) await button.click();
}
async function tracked(page, expected = true) {
  await page.waitForFunction(
    (expected) =>
      [1, 2].every(
        (player) =>
          document.querySelector(`[data-player-status="${player}"]`)?.dataset
            .tracking === String(expected),
      ),
    expected,
  );
}
async function withPage(name, run, camera = false) {
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 0.5,
  });
  if (camera) await installCameraDouble(context);
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  try {
    assert.equal(
      (await page.goto(baseURL, { waitUntil: "networkidle" }))?.ok(),
      true,
    );
    await page.evaluate(() => {
      window.__initialTrackCanvas =
        document.querySelector(".ride-scene canvas");
    });
    await page
      .getByRole("button", { name: "原地踏步跑步", exact: true })
      .click();
    await page.getByRole("button", { name: "雙人競賽", exact: true }).click();
    await page
      .getByRole("combobox", { name: "競賽距離", exact: true })
      .selectOption("500");
    await canvas(page).waitFor();
    await page.waitForFunction(
      () =>
        document.querySelector(".ride-scene canvas")?.dataset.dualTrack ===
        "wide",
    );
    await run(page);
    assert.deepEqual(errors, [], `${name}: no browser exceptions`);
    console.log(`Dual track passed: ${name}.`);
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
        artifacts,
        state: await page
          .evaluate(() => ({
            scene: { ...document.querySelector(".ride-scene canvas")?.dataset },
            camera: { ...document.querySelector(".pose-camera")?.dataset },
            samples: window.__fastTrackDouble?.samples,
            cards: [
              ...document.querySelectorAll("[data-cognitive-player]"),
            ].map((element) => ({ ...element.dataset })),
            feedback: document.querySelector(".pose-footer")?.textContent,
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
  await context.addInitScript(() => {
    const state = {
      pose: "face",
      hands: ["down", "down"],
      walking: [false, false],
      epochs: [0, 0],
      instances: [],
      streams: [],
      cameraCalls: 0,
      samples: [],
    };
    window.__fastTrackDouble = state;
    navigator.mediaDevices.getUserMedia = async () => {
      state.cameraCalls += 1;
      const source = document.createElement("canvas");
      source.width = 1280;
      source.height = 720;
      const context = source.getContext("2d");
      let frame = 0;
      const draw = () => {
        context.fillStyle = "#263d43";
        context.fillRect(0, 0, source.width, source.height);
        context.fillStyle = "#e8f0df";
        context.font = "24px sans-serif";
        context.fillText(
          "LOW-LATENCY CAMERA TEST DOUBLE — NOT A REAL PERSON",
          90,
          110,
        );
        context.fillText(`Frame ${frame++}`, 90, 150);
      };
      draw();
      const stream = source.captureStream(30);
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
        state.instances.push(this);
      }
      setOptions() {}
      initialize() {
        return Promise.resolve();
      }
      onResults(callback) {
        this.callback = callback;
      }
      close() {
        this.closed = true;
        return Promise.resolve();
      }
      send() {
        const now = performance.now();
        state.samples.push({
          now: Math.round(now),
          player: this.player,
          hand: state.hands[this.player],
        });
        if (state.samples.length > 16) state.samples.shift();
        const points = Array.from({ length: 33 }, (_, index) => ({
          x: 0.5,
          y: 0.35,
          visibility: index <= 10 || state.pose === "full" ? 0.99 : 0.05,
        }));
        points[0] = { x: 0.5, y: 0.14, visibility: 0.99 };
        const visible = state.pose === "full" ? 0.99 : 0.05;
        points[11] = { x: 0.4, y: 0.27, visibility: visible };
        points[12] = { x: 0.6, y: 0.27, visibility: visible };
        points[23] = { x: 0.44, y: 0.55, visibility: visible };
        points[24] = { x: 0.56, y: 0.55, visibility: visible };
        let left = -0.75,
          right = -0.75;
        if (state.walking[this.player]) {
          const elapsed = now - state.epochs[this.player];
          const lift = Math.sin(Math.PI * ((elapsed % 1200) / 1200)) * 0.07;
          if (Math.floor(elapsed / 1200) % 2 === 0) left += lift;
          else right += lift;
        }
        points[25] = { x: 0.43, y: 0.55 - left * 0.28, visibility: visible };
        points[26] = { x: 0.57, y: 0.55 - right * 0.28, visibility: visible };
        points[27] = { x: 0.43, y: 0.94, visibility: 0.05 };
        points[28] = { x: 0.57, y: 0.94, visibility: 0.05 };
        const hand = state.hands[this.player];
        points[15] = {
          x: 0.32,
          y: hand === "left" ? 0.2 : 0.65,
          visibility: visible,
        };
        points[16] = {
          x: 0.68,
          y: hand === "right" ? 0.2 : 0.65,
          visibility: visible,
        };
        this.callback({ poseLandmarks: points });
        return Promise.resolve();
      }
    };
    window.__timedTrackAction = (action, expected) =>
      new Promise((resolve, reject) => {
        const began = performance.now();
        if (action === "hand") state.hands[0] = "left";
        if (action === "walk") {
          state.epochs[0] = began;
          state.walking[0] = true;
        }
        if (action === "stop") state.walking[0] = false;
        const timer = setTimeout(
          () => reject(new Error(`No App response to ${action}`)),
          2500,
        );
        const check = () => {
          const status = document.querySelector('[data-player-status="1"]');
          const ready =
            action === "hand"
              ? Number(
                  document.querySelector('[data-cognitive-player="1"]')?.dataset
                    .lane,
                ) === expected
              : action === "walk"
                ? Number(status?.dataset.steps) > 0 &&
                  Number(status?.dataset.cadence) > 0
                : Number(status?.dataset.cadence) === 0;
          if (ready) {
            clearTimeout(timer);
            resolve(performance.now() - began);
          } else requestAnimationFrame(check);
        };
        check();
      });
  });
}

try {
  const selected = process.env.DUAL_TRACK_SCENARIO;
  if (!selected || selected === "gameplay")
    await withPage("gameplay", async (page) => {
      assert.equal(await canvas(page).getAttribute("data-lane-count"), "6");
      assert.equal(
        await canvas(page).getAttribute("data-lane-markings"),
        "true",
      );
      assert.ok(
        Number(await canvas(page).getAttribute("data-track-width")) >= 11,
        "the road is genuinely wider than the original 6.1m route",
      );
      await page
        .getByRole("slider", { name: "示範踩踏速度", exact: true })
        .fill("90");
      await page
        .getByRole("slider", { name: "玩家 2 示範速度", exact: true })
        .fill("90");
      const firstSeed = [await seed(page, 1), await seed(page, 2)];
      await page
        .getByRole("button", { name: "切換全螢幕", exact: true })
        .click();
      await page.waitForFunction(() => !!document.fullscreenElement);
      assert.equal(
        await page.evaluate(
          () =>
            document.querySelector(".ride-scene canvas") ===
            window.__initialTrackCanvas,
        ),
        true,
      );
      const openCenter = await page.evaluate(() => {
        const game = document
          .querySelector(".ride-card")
          .getBoundingClientRect();
        const element = document.elementFromPoint(
          game.x + game.width / 2,
          game.y + game.height * 0.55,
        );
        return !element?.closest(
          ".cognitive-targets, .race-hud, .scene-camera",
        );
      });
      assert.equal(
        openCenter,
        true,
        "the center of the enlarged raceway remains free of camera and score panels",
      );
      await page.screenshot({ path: join(artifacts, "dual-wide-desktop.png") });
      for (const player of [1, 2]) {
        const first = await row(page, 0, player);
        const item = first.items.find((item) =>
          player === 1 ? item.kind === first.target : item.kind === "bomb",
        );
        await choose(page, player, item.lane);
      }
      await start(page);
      await crossed(page, 1, 0);
      await crossed(page, 2, 0);
      await pause(page);
      assert.equal((await stats(page, 1)).coins, 1);
      assert.equal((await stats(page, 2)).bombs, 1);
      for (let index = 1; index <= 3; index++) {
        for (const player of [1, 2]) {
          const current = await row(page, index, player);
          await choose(
            page,
            player,
            current.items.find((item) => item.kind === current.target).lane,
          );
        }
        await start(page);
        await crossed(page, 1, index);
        await crossed(page, 2, index);
        await pause(page);
      }
      const beforeTrail = await stats(page, 1);
      const trail = await row(page, 4, 1);
      assert.equal(trail.pattern, "coin-trail");
      assert.equal(trail.items.length, 1);
      for (let index = 4; index <= 7; index++) {
        const next = await row(page, index, 1);
        assert.equal(next.items[0].lane, trail.items[0].lane);
        assert.equal(next.items[0].kind, next.target);
      }
      for (const player of [1, 2])
        await choose(page, player, (await row(page, 4, player)).items[0].lane);
      await start(page);
      await crossed(page, 1, 7);
      await crossed(page, 2, 7);
      await pause(page);
      const afterTrail = await stats(page, 1);
      assert.equal(
        afterTrail.coins - beforeTrail.coins,
        4,
        "one chosen lane collects four consecutive real-distance coins",
      );
      assert.equal(
        afterTrail.score - beforeTrail.score,
        40,
        "coin-only rows do not invent bomb-avoidance points",
      );
      const frozen = [await stats(page, 1), await stats(page, 2)];
      await page.waitForTimeout(700);
      assert.deepEqual([await stats(page, 1), await stats(page, 2)], frozen);
      await page.getByRole("button", { name: "結束旅程", exact: true }).click();
      await page.getByRole("dialog").waitFor();
      const records = await page.evaluate(() =>
        JSON.parse(localStorage.getItem("forest-pedal-rides") || "[]"),
      );
      assert.equal(records[0].cognitive[0].coins, afterTrail.coins);
      assert.ok(records[0].distance * 1000 >= 96);
      await page
        .getByRole("button", { name: "開始一段新旅程", exact: true })
        .click();
      const freshSeed = [await seed(page, 1), await seed(page, 2)];
      assert.notDeepEqual(
        freshSeed,
        firstSeed,
        "a new journey gets a fresh random layout seed",
      );
      assert.equal((await stats(page, 1)).coins, 0);
      await choose(page, 1, -1);
      await choose(page, 2, 1);
      await page.setViewportSize({ width: 390, height: 844 });
      await page.waitForTimeout(250);
      assert.ok(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      );
      for (const player of [1, 2])
        for (const lane of [-1, 0, 1])
          assert.equal(await laneButton(page, player, lane).isVisible(), true);
      await page.screenshot({
        path: join(artifacts, "dual-wide-phone-outer-lanes.png"),
      });
      await page
        .getByRole("combobox", { name: "畫面內騎行玩法", exact: true })
        .selectOption("1");
      await page.waitForFunction(
        () =>
          document.querySelector(".ride-scene canvas")?.dataset.dualTrack ===
          "standard",
      );
      assert.equal(await canvas(page).getAttribute("data-lane-count"), "3");
      assert.equal(
        await page.evaluate(
          () =>
            document.querySelector(".ride-scene canvas") ===
            window.__initialTrackCanvas,
        ),
        true,
        "restoring the original single-player route keeps the same renderer",
      );
      await page.evaluate(() => document.exitFullscreen());
    });

  if (!selected || selected === "response")
    await withPage(
      "response",
      async (page) => {
        await page
          .getByRole("button", { name: "使用攝影機", exact: true })
          .click();
        await tracked(page, false);
        await page.waitForFunction(() =>
          /後退|退後/.test(
            document.querySelector(".pose-footer")?.textContent || "",
          ),
        );
        assert.match(await page.locator(".pose-footer").textContent(), /髖|膝/);
        assert.equal(
          await page.locator(".start-button").isDisabled(),
          true,
          "a face-only picture must not be mistaken for usable marching legs",
        );
        await page.evaluate(() => {
          window.__fastTrackDouble.pose = "full";
        });
        await tracked(page, true);
        await start(page);
        await page.waitForTimeout(500);
        const handMs = await page.evaluate(() =>
          window.__timedTrackAction("hand", -1),
        );
        assert.ok(
          handMs <= 500,
          `controlled hand-to-lane response should be within 500ms, observed ${handMs.toFixed(1)}ms`,
        );
        assert.equal(
          (await stats(page, 2)).lane,
          0,
          "the other player never inherits a hand gesture",
        );
        await page.evaluate(() => {
          window.__fastTrackDouble.hands[0] = "down";
        });
        const beginMs = await page.evaluate(() =>
          window.__timedTrackAction("walk"),
        );
        assert.ok(
          beginMs <= 500,
          `controlled small-step start should be within 500ms, observed ${beginMs.toFixed(1)}ms`,
        );
        assert.equal(
          await page
            .locator('[data-player-status="2"]')
            .getAttribute("data-steps"),
          "0",
        );
        const stopMs = await page.evaluate(() =>
          window.__timedTrackAction("stop"),
        );
        assert.ok(
          stopMs <= 1200,
          `controlled stillness should stop old movement promptly, observed ${stopMs.toFixed(1)}ms`,
        );
        assert.equal(
          (await stats(page, 1)).next,
          0,
          "brief response checks never fabricate a distant coin crossing",
        );
        assert.equal(
          await page.evaluate(() => window.__fastTrackDouble.cameraCalls),
          1,
        );
        await pause(page);
        console.log(
          `Controlled App response: hand ${handMs.toFixed(1)}ms, gentle step ${beginMs.toFixed(1)}ms, stop ${stopMs.toFixed(1)}ms; actual model/hardware latency is not measured by this test.`,
        );
      },
      true,
    );
} finally {
  await browser.close();
}
console.log(`Dual-track screenshots: ${artifacts}`);
