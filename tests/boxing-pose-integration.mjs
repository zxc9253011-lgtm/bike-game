import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { mkdtemp, readFile, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { join } from "node:path";

// Real local MediaPipe models consume a real photographed person through
// Chromium's file camera. This static-image check validates model loading,
// upper-body tracking and false-attack rejection; dynamic attack/guard tests
// are separately labelled camera/Pose doubles in test:boxing.
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const baseURL = process.env.BASE_URL || "http://127.0.0.1:5173";
const origin = new URL(baseURL).origin;
const artifacts = await mkdtemp(join(tmpdir(), "forest-pedal-boxing-pose-"));
const fixtureCommit = "c9215687b8f906c4a9dc0ed63b5b0d0dd0beb9e5";
const fixtureSource = "examples/pose_landmarker/ios/PoseLandmarkerTests/test_image.jpg";
const fixtureHash = "8da0e95f027a4fe298e3554b5728e08961014b651f1160a070f7c58670dbeda9";
let image;
if (process.env.POSE_IMAGE_PATH) image = await readFile(process.env.POSE_IMAGE_PATH);
else {
  const repository = join(artifacts, "fixture-source");
  execFileSync("git", ["init", "--quiet", repository]);
  execFileSync("git", ["-C", repository, "fetch", "--quiet", "--depth=1", "--filter=blob:none",
    "https://github.com/google-ai-edge/mediapipe-samples.git", fixtureCommit]);
  image = execFileSync("git", ["-C", repository, "show", `FETCH_HEAD:${fixtureSource}`]);
}
assert.equal(createHash("sha256").update(image).digest("hex"), fixtureHash,
  "fixture is the pinned official MediaPipe photograph");
const imagePath = join(artifacts, "official-person.jpg");
await writeFile(imagePath, image);

const scenarios = [
  {
    name: "both-players",
    filter: "[0:v]scale=640:426,setsar=1,split=2[left][right];[left][right]hstack=inputs=2[out]",
    expected: [true, true],
  },
  {
    // Mirrored preview: the raw left image belongs to visible-right player 2.
    name: "player-2-only",
    filter: "[0:v]scale=640:426,setsar=1[left];color=c=0x26352d:s=640x426:r=10[right];[left][right]hstack=inputs=2[out]",
    expected: [false, true],
  },
];
const selected = process.env.BOXING_POSE_SCENARIO
  ? scenarios.filter((scenario) => scenario.name === process.env.BOXING_POSE_SCENARIO)
  : scenarios;
assert.ok(selected.length, "BOXING_POSE_SCENARIO selects a known real-camera scenario");

async function waitSameModels(page, extraFrames = 0) {
  await page.waitForFunction((extra) => {
    const probe = window.__boxingRealProbe;
    return probe.models.some((model) => model.closed)
      || probe.models.every((model, index) => model.frames > probe.frames[index] + extra);
  }, extraFrames, { timeout: 20000 });
  assert.equal(await page.evaluate((extra) => {
    const probe = window.__boxingRealProbe;
    const active = window.__boxingReal.instances.filter((model) => !model.closed);
    return active.length === 2 && probe.models.length === 2
      && probe.models.every((model, index) => !model.closed && active[index] === model
        && model.frames > probe.frames[index] + extra);
  }, extraFrames), true, "the same two live models continue producing genuine results");
}
async function snapshotModels(page) {
  await page.evaluate(() => {
    const models = window.__boxingReal.instances.filter((model) => !model.closed);
    window.__boxingRealProbe = {
      models,
      frames: models.map((model) => model.frames),
      video: document.querySelector(".pose-video"),
      overlay: document.querySelector(".pose-overlay"),
      stream: document.querySelector(".pose-video").srcObject,
    };
  });
}

for (const scenario of selected) {
  const video = join(artifacts, `${scenario.name}.y4m`);
  execFileSync(process.env.FFMPEG_PATH || "ffmpeg", [
    "-hide_banner", "-loglevel", "error", "-y", "-filter_complex_threads", "1",
    "-loop", "1", "-i", imagePath, "-filter_complex", scenario.filter,
    "-map", "[out]", "-r", "10", "-t", "1", "-pix_fmt", "yuv420p", video,
  ]);
  const browser = await chromium.launch({
    executablePath: process.env.CHROMIUM_PATH || "/usr/bin/chromium",
    headless: true,
    args: ["--no-sandbox", "--disable-dev-shm-usage", "--enable-webgl", "--use-gl=angle",
      "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--use-fake-device-for-media-stream",
      "--use-fake-ui-for-media-stream", `--use-file-for-fake-video-capture=${video}`],
  });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1080 }, permissions: ["camera"] });
  const errors = [], externalRequests = [], badResponses = [];
  let page;
  try {
    await context.route("**/*", (route) => {
      const url = new URL(route.request().url());
      if (url.protocol.startsWith("http") && url.origin !== origin) {
        externalRequests.push(url.href);
        return route.abort();
      }
      return route.continue();
    });
    context.on("response", (response) => {
      if (response.status() >= 400) badResponses.push(`${response.status()} ${response.url()}`);
    });
    await context.addInitScript(() => {
      window.__boxingReal = { instances: [], cameraCalls: 0, streams: [] };
      let WrappedPose;
      Object.defineProperty(window, "Pose", {
        configurable: true,
        get() { return WrappedPose; },
        set(OriginalPose) {
          WrappedPose = class extends OriginalPose {
            constructor(...args) {
              super(...args);
              this.observed = { frames: 0, landmarks: undefined, closed: false };
              window.__boxingReal.instances.push(this.observed);
            }
            onResults(callback) {
              return super.onResults((result) => {
                this.observed.frames += 1;
                this.observed.landmarks = result.poseLandmarks;
                callback(result);
              });
            }
            close() {
              this.observed.closed = true;
              return super.close();
            }
          };
        },
      });
      const acquire = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
      navigator.mediaDevices.getUserMedia = async (options) => {
        window.__boxingReal.cameraCalls += 1;
        const stream = await acquire(options);
        window.__boxingReal.streams.push(stream);
        return stream;
      };
    });
    page = await context.newPage();
    page.on("pageerror", (error) => errors.push(error.message));
    assert.equal((await page.goto(baseURL, { waitUntil: "networkidle" }))?.ok(), true);
    await page.getByRole("button", { name: "雙人拳擊", exact: true }).click();
    await page.getByRole("button", { name: "使用攝影機", exact: true }).click();
    await page.waitForFunction(() => {
      const active = window.__boxingReal.instances.filter((model) => !model.closed);
      return active.length === 2 && active.every((model) => model.frames >= 3);
    }, undefined, { timeout: 90000 });
    await page.waitForFunction((expected) => expected.every((tracked, index) =>
      document.querySelector(`[data-boxing-player="${index + 1}"]`)?.dataset.tracking === String(tracked)),
    scenario.expected, { timeout: 15000 });
    const detected = await page.evaluate(() => {
      const overlay = document.querySelector(".pose-overlay");
      const pixels = overlay.getContext("2d").getImageData(0, 0, overlay.width, overlay.height).data;
      const markers = [0, 0];
      for (let offset = 0; offset < pixels.length; offset += 4) {
        if (pixels[offset + 3] < 100) continue;
        const [red, green, blue] = pixels.slice(offset, offset + 3);
        if (green > 190 && red > 150 && blue < 190 && green > red) markers[0] += 1;
        if (blue > 190 && blue > red + 30 && green > 150 && red < 190) markers[1] += 1;
      }
      return {
        models: window.__boxingReal.instances.filter((model) => !model.closed),
        cameraCalls: window.__boxingReal.cameraCalls,
        exercise: document.querySelector(".pose-camera")?.dataset.exerciseMode,
        mirror: getComputedStyle(document.querySelector(".pose-video")).transform,
        overlayMirror: getComputedStyle(overlay).transform,
        markers,
      };
    });
    assert.equal(detected.models.length, 2);
    assert.equal(detected.cameraCalls, 1);
    assert.equal(detected.exercise, "boxing");
    assert.equal(detected.models.filter((model) => model.landmarks?.length === 33).length,
      scenario.expected.filter(Boolean).length, "only occupied inputs contain a real person");
    for (const [index, tracked] of scenario.expected.entries()) {
      if (!tracked) {
        assert.ok(detected.markers[index] < 40, `absent player ${index + 1} has no invented skeleton`);
        continue;
      }
      assert.ok(detected.markers[index] > 100, `player ${index + 1} has visible colored skeleton markers`);
      for (const joint of [11, 12, 13, 14, 15, 16]) {
        const point = detected.models[index].landmarks[joint];
        assert.ok(point && point.visibility >= 0.45 && Number.isFinite(point.x) && Number.isFinite(point.y),
          `player ${index + 1} real upper-body landmark ${joint} is usable`);
      }
    }
    assert.equal(detected.mirror, detected.overlayMirror, "real video and joints share a mirror transform");
    const start = page.getByRole("button", { name: "開始拳擊比賽", exact: true });
    assert.equal(await start.isDisabled(), !scenario.expected.every(Boolean),
      "boxing requires two independently tracked upper bodies before starting");

    if (scenario.expected.every(Boolean)) {
      await snapshotModels(page);
      await page.getByRole("button", { name: "拳擊全螢幕", exact: true }).click();
      await page.waitForFunction(() => document.fullscreenElement?.classList.contains("boxing-stage"));
      await waitSameModels(page);
      assert.equal(await page.evaluate(() => {
        const probe = window.__boxingRealProbe;
        return probe.video === document.querySelector(".pose-video")
          && probe.overlay === document.querySelector(".pose-overlay")
          && probe.stream === document.querySelector(".pose-video").srcObject
          && window.__boxingReal.cameraCalls === 1
          && probe.stream.getTracks().every((track) => track.readyState === "live");
      }), true, "fullscreen preserves the same camera, overlay and model graphs");
      await start.click();
      await page.getByRole("button", { name: "暫停拳擊比賽", exact: true }).waitFor({ timeout: 10000 });
      await snapshotModels(page);
      await waitSameModels(page, 3);
      assert.deepEqual(await page.locator("[data-boxing-player]").evaluateAll((elements) =>
        elements.map((element) => ({ score: Number(element.dataset.score), hp: Number(element.dataset.hp),
          punches: Number(element.dataset.punches), hits: Number(element.dataset.hits) }))),
      [{ score: 0, hp: 100, punches: 0, hits: 0 }, { score: 0, hp: 100, punches: 0, hits: 0 }],
      "model jitter on still photographs cannot generate punches, damage or points");
      await page.screenshot({ path: join(artifacts, "real-boxing-fullscreen.png") });
      await page.getByRole("button", { name: "暫停拳擊比賽", exact: true }).click();
      await page.evaluate(() => document.exitFullscreen());
    }
    await page.screenshot({ path: join(artifacts, `${scenario.name}.png`), fullPage: true });
    await page.getByRole("button", { name: "返回騎行與跑步", exact: true }).click();
    await page.locator(".app-shell").waitFor();
    await page.waitForFunction(() => window.__boxingReal.streams.every((stream) =>
      stream.getTracks().every((track) => track.readyState === "ended"))
      && window.__boxingReal.instances.every((model) => model.closed));
    assert.deepEqual(errors, [], "no browser exceptions during real boxing analysis");
    assert.deepEqual(externalRequests, [], "boxing loads all pose assets locally");
    assert.deepEqual(badResponses, [], "all game and pose assets load successfully");
    console.log(`Real boxing pose passed: ${scenario.name}, independent upper-body tracking and camera cleanup.`);
  } catch (error) {
    if (page) {
      await page.screenshot({ path: join(artifacts, `${scenario.name}-failure.png`), fullPage: true }).catch(() => undefined);
      console.error(JSON.stringify({ scenario: scenario.name, error: error.message, artifacts, errors, badResponses,
        state: await page.evaluate(() => ({
          game: { ...document.querySelector(".boxing-game")?.dataset },
          players: [...document.querySelectorAll("[data-boxing-player]")].map((element) => ({ ...element.dataset })),
          models: window.__boxingReal.instances.map((model) => ({ frames: model.frames, closed: model.closed, landmarks: model.landmarks?.length })),
          feedback: document.querySelector(".pose-footer")?.textContent,
        })).catch(() => undefined) }));
    }
    throw error;
  } finally {
    await context.close();
    await browser.close();
  }
}
console.log(`Real boxing pose artifacts: ${artifacts}`);
