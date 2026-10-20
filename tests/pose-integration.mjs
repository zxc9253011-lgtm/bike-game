import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { mkdtemp, readFile, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { join } from "node:path";

// Optional integration check; not part of the quick, offline npm test suite.
// Requires the app server, Chromium, Playwright, ffmpeg, and Git when downloading
// the fixture. POSE_IMAGE_PATH can reuse the exact verified fixture from /tmp.
// Images and fake camera video stay in /tmp, never in the application assets.
const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const baseURL = process.env.BASE_URL || "http://127.0.0.1:5173";
const origin = new URL(baseURL).origin;
const fixtureCommit = "c9215687b8f906c4a9dc0ed63b5b0d0dd0beb9e5";
const fixtureSource =
  "examples/pose_landmarker/ios/PoseLandmarkerTests/test_image.jpg";
const fixtureHash =
  "8da0e95f027a4fe298e3554b5728e08961014b651f1160a070f7c58670dbeda9";
const artifacts = await mkdtemp(
  join(tmpdir(), "forest-pedal-pose-integration-"),
);
const imagePath = join(artifacts, "official-pose-person.jpg");
const videoPath = join(artifacts, "official-pose-camera.y4m");

let image;
if (process.env.POSE_IMAGE_PATH) {
  image = await readFile(process.env.POSE_IMAGE_PATH);
} else {
  const repository = join(artifacts, "fixture-source");
  execFileSync("git", ["init", "--quiet", repository]);
  execFileSync("git", [
    "-C",
    repository,
    "fetch",
    "--quiet",
    "--depth=1",
    "--filter=blob:none",
    "https://github.com/google-ai-edge/mediapipe-samples.git",
    fixtureCommit,
  ]);
  image = execFileSync("git", [
    "-C",
    repository,
    "show",
    `FETCH_HEAD:${fixtureSource}`,
  ]);
}
assert.equal(
  createHash("sha256").update(image).digest("hex"),
  fixtureHash,
  "fixture matches the pinned official MediaPipe sample",
);
await writeFile(imagePath, image);
execFileSync(process.env.FFMPEG_PATH || "ffmpeg", [
  "-hide_banner",
  "-loglevel",
  "error",
  "-y",
  "-loop",
  "1",
  "-i",
  imagePath,
  "-vf",
  "scale=640:426",
  "-r",
  "10",
  "-t",
  "1",
  "-pix_fmt",
  "yuv420p",
  videoPath,
]);

const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || "/usr/bin/chromium",
  headless: true,
  args: [
    "--no-sandbox",
    "--disable-dev-shm-usage",
    "--enable-webgl",
    "--use-gl=angle",
    "--use-angle=swiftshader",
    "--enable-unsafe-swiftshader",
    "--use-fake-device-for-media-stream",
    "--use-fake-ui-for-media-stream",
    `--use-file-for-fake-video-capture=${videoPath}`,
  ],
});
const context = await browser.newContext({
  viewport: { width: 1440, height: 1080 },
  permissions: ["camera"],
});
const errors = [];
const externalRequests = [];
try {
  await context.route("**/*", (route) => {
    const url = new URL(route.request().url());
    if (url.protocol.startsWith("http") && url.origin !== origin) {
      externalRequests.push(url.href);
      return route.abort();
    }
    return route.continue();
  });
  await context.addInitScript(() => {
    // Observe actual model results without replacing inference or image input.
    let WrappedPose;
    Object.defineProperty(window, "Pose", {
      configurable: true,
      get() {
        return WrappedPose;
      },
      set(OriginalPose) {
        WrappedPose = class extends OriginalPose {
          onResults(callback) {
            return super.onResults((result) => {
              window.__poseIntegration = {
                landmarks: result.poseLandmarks,
                frames: (window.__poseIntegration?.frames || 0) + 1,
              };
              callback(result);
            });
          }
        };
      },
    });
    const getUserMedia = navigator.mediaDevices.getUserMedia.bind(
      navigator.mediaDevices,
    );
    navigator.mediaDevices.getUserMedia = async (options) => {
      const stream = await getUserMedia(options);
      window.__poseIntegrationStream = stream;
      return stream;
    };
  });
  const page = await context.newPage();
  page.on("pageerror", (error) => errors.push(error.message));
  assert.equal(
    (await page.goto(baseURL, { waitUntil: "networkidle" }))?.ok(),
    true,
  );
  await page.getByRole("button", { name: "使用攝影機", exact: true }).click();
  await page
    .getByText("姿態追蹤中", { exact: true })
    .waitFor({ timeout: 45000 });
  await page.waitForFunction(
    () => (window.__poseIntegration?.frames || 0) >= 3,
  );
  const result = await page.evaluate(() => {
    const canvas = document.querySelector(".pose-overlay");
    const pixels = canvas
      .getContext("2d")
      .getImageData(0, 0, canvas.width, canvas.height).data;
    let markedPixels = 0;
    for (let i = 3; i < pixels.length; i += 4)
      if (pixels[i] > 0) markedPixels += 1;
    return {
      ...window.__poseIntegration,
      markedPixels,
      overlayTransform: getComputedStyle(canvas).transform,
      videoTransform: getComputedStyle(document.querySelector(".pose-video"))
        .transform,
    };
  });
  assert.equal(
    result.landmarks.length,
    33,
    "real local model detects all 33 pose landmarks",
  );
  for (const index of [23, 24, 25, 26, 27, 28]) {
    const point = result.landmarks[index];
    assert.ok(
      point.visibility >= 0.5,
      `leg landmark ${index} is visible (${point.visibility})`,
    );
    assert.ok(
      point.x > 0 && point.x < 1 && point.y > 0 && point.y < 1,
      `leg landmark ${index} is inside the frame`,
    );
  }
  assert.ok(
    result.markedPixels > 100,
    "the camera overlay draws visible joint markers and connections",
  );
  assert.equal(
    result.overlayTransform,
    result.videoTransform,
    "video and landmark overlay use matching mirroring",
  );
  await page.screenshot({
    path: join(artifacts, "camera-integration.png"),
    fullPage: true,
  });
  await page.getByRole("button", { name: "先試玩看看", exact: true }).click();
  await page.waitForFunction(() =>
    window.__poseIntegrationStream
      .getTracks()
      .every((track) => track.readyState === "ended"),
  );
  assert.deepEqual(
    externalRequests,
    [],
    "game and model inference make no remote browser requests",
  );
  assert.deepEqual(
    errors,
    [],
    "camera integration has no uncaught browser errors",
  );
  console.log(
    "Pose integration passed: real camera pipeline, 33 landmarks, six visible leg joints, overlay, local-only requests, and camera cleanup.",
  );
  console.log(`Official fixture: ${imagePath}`);
  console.log(`Fake camera video: ${videoPath}`);
  console.log(`Screenshot: ${join(artifacts, "camera-integration.png")}`);
} finally {
  await context.close();
  await browser.close();
}
