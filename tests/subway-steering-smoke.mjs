import assert from "node:assert/strict";
import { mkdtemp } from "node:fs/promises";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { cameraRegion } from "../src/lib/motion.ts";

// These camera/Pose TEST DOUBLES exercise production ownership, steering,
// controls and rendering. They do not measure a real model's accuracy or a
// person's webcam latency. Real-model coverage remains test:dual-pose.
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const baseURL = process.env.BASE_URL || "http://127.0.0.1:5173";
const artifacts = await mkdtemp(join(tmpdir(), "forest-pedal-subway-"));
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
const context = await browser.newContext({
  viewport: { width: 1440, height: 1080 },
  deviceScaleFactor: 0.5,
});
await context.addInitScript(
  ({ regions }) => {
    const state = {
      pose: "face",
      centers: [0.75, 0.25],
      hands: ["down", "down"],
      lean: [0, 0],
      hideOtherWrist: [false, false],
      missingKnee: [false, false],
      cameraCalls: 0,
      streams: [],
      instances: [],
      samples: [],
    };
    window.__subwayDouble = state;
    navigator.mediaDevices.getUserMedia = async () => {
      state.cameraCalls += 1;
      const source = document.createElement("canvas");
      source.width = 1280;
      source.height = 720;
      const drawing = source.getContext("2d");
      let frame = 0;
      const draw = () => {
        drawing.fillStyle = "#263d43";
        drawing.fillRect(0, 0, source.width, source.height);
        drawing.fillStyle = "#e8f0df";
        drawing.font = "24px sans-serif";
        drawing.fillText(
          "TWO-PLAYER STEERING TEST DOUBLE — NOT REAL PEOPLE",
          70,
          110,
        );
        drawing.fillText(`Camera frame ${frame++}`, 70, 155);
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
        this.frames = 0;
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
        const index = this.player;
        const region = regions[index];
        const center = (state.centers[index] - region.x) / region.width;
        const visibility = state.pose === "full" ? 0.99 : 0.05;
        const points = Array.from({ length: 33 }, () => ({
          x: center,
          y: 0.4,
          visibility,
        }));
        const lean = state.lean[index];
        points[0] = { x: center + lean, y: 0.14, visibility: 0.99 };
        points[11] = { x: center + 0.055 + lean, y: 0.27, visibility };
        points[12] = { x: center - 0.055 + lean, y: 0.27, visibility };
        points[23] = { x: center + 0.035, y: 0.55, visibility };
        points[24] = { x: center - 0.035, y: 0.55, visibility };
        points[25] = { x: center + 0.035, y: 0.76, visibility };
        points[26] = {
          x: center - 0.035,
          y: 0.76,
          visibility: state.missingKnee[index] ? 0.05 : visibility,
        };
        points[27] = { x: center + 0.035, y: 0.94, visibility: 0.05 };
        points[28] = { x: center - 0.035, y: 0.94, visibility: 0.05 };
        const hand = state.hands[index];
        points[13] = { x: center + 0.1 + lean, y: 0.43, visibility };
        points[14] = { x: center - 0.1 + lean, y: 0.43, visibility };
        points[15] = {
          x: center + 0.13 + lean,
          y: hand === "left" ? 0.33 : 0.65,
          visibility:
            state.hideOtherWrist[index] && hand === "right" ? 0.05 : visibility,
        };
        points[16] = {
          x: center - 0.13 + lean,
          y: hand === "right" ? 0.33 : 0.65,
          visibility:
            state.hideOtherWrist[index] && hand !== "right" ? 0.05 : visibility,
        };
        this.frames += 1;
        state.samples.push({
          time: Math.round(performance.now()),
          player: index + 1,
          hand,
          lean,
          center: state.centers[index],
        });
        if (state.samples.length > 24) state.samples.shift();
        this.callback({ poseLandmarks: points });
        return Promise.resolve();
      }
    };
    window.__measureSubway = (patch, expected) =>
      new Promise((resolve, reject) => {
        const began = performance.now();
        Object.assign(state, patch);
        const timer = setTimeout(
          () =>
            reject(
              new Error("No response to the controlled two-player gesture"),
            ),
          2500,
        );
        const check = () => {
          const visual = document
            .querySelector(".ride-scene canvas")
            ?.dataset.lanes?.split(",")
            .map(Number);
          const ready = expected.every(
            (lane, index) =>
              Number(
                document.querySelector(`[data-cognitive-player="${index + 1}"]`)
                  ?.dataset.lane,
              ) === lane && visual?.[index] === lane,
          );
          if (ready) {
            clearTimeout(timer);
            resolve(performance.now() - began);
          } else requestAnimationFrame(check);
        };
        check();
      });
  },
  { regions: [cameraRegion(0, 2), cameraRegion(1, 2)] },
);

const page = await context.newPage();
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
const button = (player, lane) =>
  page.getByRole("button", {
    name: `玩家 ${player} ${lane === -1 ? "左道" : lane === 0 ? "中道" : "右道"}`,
    exact: true,
  });
async function lanes(expected) {
  await page.waitForFunction(
    (expected) =>
      expected.every(
        (lane, index) =>
          Number(
            document.querySelector(`[data-cognitive-player="${index + 1}"]`)
              ?.dataset.lane,
          ) === lane,
      ),
    expected,
  );
}
async function tracking(expected) {
  await page.waitForFunction(
    (expected) =>
      expected.every(
        (value, index) =>
          document.querySelector(`[data-player-status="${index + 1}"]`)?.dataset
            .tracking === String(value),
      ),
    expected,
  );
}
async function sampled(patch, frames = 3) {
  await page.waitForFunction(
    () =>
      window.__subwayDouble.instances.filter((instance) => !instance.closed)
        .length === 2,
  );
  const before = await page.evaluate((patch) => {
    const before = window.__subwayDouble.instances.map(
      (instance) => instance.frames,
    );
    Object.assign(window.__subwayDouble, patch);
    return before;
  }, patch);
  await page.waitForFunction(
    ({ before, frames }) =>
      window.__subwayDouble.instances.every(
        (instance, index) => instance.frames >= before[index] + frames,
      ),
    { before, frames },
  );
}
async function neutral() {
  await sampled(
    {
      hands: ["down", "down"],
      lean: [0, 0],
      hideOtherWrist: [false, false],
      missingKnee: [false, false],
    },
    4,
  );
}
async function centered() {
  await button(1, 0).click();
  await button(2, 0).click();
  await lanes([0, 0]);
}
async function timed(patch, expected, description) {
  const duration = await page.evaluate(
    ({ patch, expected }) => window.__measureSubway(patch, expected),
    { patch, expected },
  );
  assert.ok(
    duration <= 500,
    `${description}: controlled App/scene response must be within 500ms, observed ${duration.toFixed(1)}ms`,
  );
  console.log(
    `${description}: ${duration.toFixed(1)}ms (controlled App response, not real webcam/model latency).`,
  );
}
async function swipe(player, direction) {
  const panel = page.locator(`[data-swipe-player="${player}"]`);
  const box = await panel.boundingBox();
  assert.ok(box && box.width > 120);
  const startX = box.x + box.width * (direction === 1 ? 0.25 : 0.75);
  const endX = box.x + box.width * (direction === 1 ? 0.75 : 0.25);
  const y = box.y + box.height * 0.6;
  await page.mouse.move(startX, y);
  await page.mouse.down();
  await page.mouse.move(endX, y, { steps: 5 });
  await page.mouse.up();
}

try {
  assert.equal(
    (await page.goto(baseURL, { waitUntil: "networkidle" }))?.ok(),
    true,
  );
  await page.getByRole("button", { name: "原地踏步跑步", exact: true }).click();
  await page.getByRole("button", { name: "雙人競賽", exact: true }).click();
  await page
    .getByRole("combobox", { name: "競賽距離", exact: true })
    .selectOption("500");
  await page.getByRole("button", { name: "使用攝影機", exact: true }).click();
  await sampled({ hands: ["left", "right"] });
  await tracking([false, false]);
  assert.equal(
    await page.locator(".start-button").isDisabled(),
    true,
    "a face without torso/legs cannot start a camera race",
  );
  await lanes([0, 0]);
  await sampled({ pose: "full", hands: ["down", "down"] });
  await tracking([true, true]);
  const inputRegions = (
    await page.locator(".pose-camera").getAttribute("data-pose-regions")
  )
    .split(",")
    .map((region) => region.split(":").map(Number));
  assert.ok(
    inputRegions[0][0] < 0.5 && inputRegions[1][0] + inputRegions[1][1] > 0.5,
    "both real camera inputs keep an inner arm margin across the player divider",
  );
  await page.locator(".start-button").click();
  await page.locator(".start-button.is-running").waitFor({ timeout: 10000 });
  await neutral();

  await timed(
    { hands: ["left", "right"] },
    [-1, 1],
    "Both players steer in opposite directions with upper-chest hands",
  );
  await centered();
  await sampled({}, 8);
  await lanes([0, 0]);
  await neutral();

  await timed(
    {
      hands: ["down", "left"],
      hideOtherWrist: [false, true],
      missingKnee: [false, true],
    },
    [0, -1],
    "Player 2 steers despite an occluded opposite wrist and knee",
  );
  await tracking([true, false]);
  assert.equal(
    Number(
      await page
        .locator('[data-player-status="2"]')
        .getAttribute("data-cadence"),
    ),
    0,
    "upper-body steering never invents movement from a missing knee",
  );
  await neutral();
  await tracking([true, true]);
  await centered();

  await timed(
    { lean: [-0.08, 0.08] },
    [1, -1],
    "Both players independently lean to change one lane",
  );
  await centered();
  await sampled({}, 8);
  await lanes([0, 0]);
  await neutral();
  await timed(
    { lean: [0.08, -0.08] },
    [-1, 1],
    "Returning upright rearms each player's opposite lean",
  );
  await neutral();
  await centered();

  await sampled(
    { pose: "face", hands: ["left", "right"], lean: [0.08, -0.08] },
    5,
  );
  await tracking([false, false]);
  await lanes([0, 0]);
  assert.deepEqual(
    await page
      .locator("[data-player-status]")
      .evaluateAll((elements) =>
        elements.map((element) => Number(element.dataset.cadence)),
      ),
    [0, 0],
  );

  // Both fake graphs return the same person's globally mapped hip center.
  // The overlap provides arm room but must not award that person to player 2.
  await sampled(
    {
      pose: "full",
      centers: [0.53, 0.53],
      hands: ["down", "down"],
      lean: [0, 0],
    },
    4,
  );
  await tracking([true, false]);
  await sampled({ hands: ["down", "left"] }, 5);
  await lanes([0, 0]);
  await sampled({ centers: [0.75, 0.25], hands: ["down", "down"] }, 4);
  await tracking([true, true]);
  assert.equal(
    await page.evaluate(() => window.__subwayDouble.cameraCalls),
    1,
    "two players reuse one live camera",
  );
  await page.locator(".start-button.is-running").click();

  await button(1, -1).click();
  await button(2, 1).click();
  await swipe(1, 1);
  await lanes([0, 1]);
  await swipe(2, -1);
  await lanes([0, 0]);
  await swipe(1, 1);
  await lanes([1, 0]);
  await swipe(1, 1);
  await lanes([1, 0]);
  await swipe(2, -1);
  await lanes([1, -1]);
  await swipe(2, -1);
  await lanes([1, -1]);

  await centered();
  const panel = page.locator('[data-swipe-player="1"]');
  const box = await panel.boundingBox();
  await page.mouse.move(box.x + 25, box.y + 10);
  await page.mouse.down();
  await page.mouse.move(box.x + 37, box.y + 12);
  await page.mouse.up();
  await lanes([0, 0]);
  await page.mouse.move(box.x + 25, box.y + 10);
  await page.mouse.down();
  await page.mouse.move(box.x + 27, box.y + 36);
  await page.mouse.move(box.x + 130, box.y + 38);
  await page.mouse.up();
  await lanes([0, 0]);
  await page.mouse.move(box.x + 25, box.y + 10);
  await page.mouse.down();
  await panel.dispatchEvent("pointercancel", {
    pointerId: 1,
    pointerType: "mouse",
  });
  await page.mouse.move(box.x + 130, box.y + 10);
  await page.mouse.up();
  await lanes([0, 0]);

  await page.keyboard.press("ArrowLeft");
  await lanes([-1, 0]);
  await page.keyboard.down("ArrowRight");
  await page.keyboard.down("ArrowRight");
  await page.keyboard.up("ArrowRight");
  await lanes([0, 0]);
  await page.keyboard.press("l");
  await lanes([0, 1]);
  await page.keyboard.press("j");
  await lanes([0, -1]);
  await button(1, 1).click();
  await button(2, 0).click();
  await lanes([1, 0]);
  assert.deepEqual(errors, []);
  await page.screenshot({
    path: join(artifacts, "subway-two-player.png"),
    fullPage: true,
  });
  console.log(
    "Subway steering passed: two independent players, chest-height hands, slight lean, missing-knee zero speed, shared-person rejection, held-gesture lock, swipes, keys and lane boundaries.",
  );
} catch (error) {
  await page
    .screenshot({ path: join(artifacts, "subway-failure.png"), fullPage: true })
    .catch(() => undefined);
  console.error(
    JSON.stringify({
      error: error.message,
      artifacts,
      errors,
      state: await page
        .evaluate(() => ({
          camera: { ...document.querySelector(".pose-camera")?.dataset },
          scene: { ...document.querySelector(".ride-scene canvas")?.dataset },
          players: [...document.querySelectorAll("[data-player-status]")].map(
            (element) => ({ ...element.dataset }),
          ),
          cards: [...document.querySelectorAll("[data-cognitive-player]")].map(
            (element) => ({ ...element.dataset }),
          ),
          samples: window.__subwayDouble.samples,
        }))
        .catch(() => undefined),
    }),
  );
  throw error;
} finally {
  await context.close();
  await browser.close();
}
console.log(`Subway steering artifacts: ${artifacts}`);
