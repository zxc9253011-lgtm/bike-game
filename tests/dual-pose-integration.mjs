import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { mkdtemp, readFile, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

// Uses the real local models with three camera videos: two people, then each
// person alone. No landmarks, inference results, or camera inputs are mocked.
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const baseURL = process.env.BASE_URL || 'http://127.0.0.1:5173';
const origin = new URL(baseURL).origin;
const artifacts = await mkdtemp(join(tmpdir(), 'forest-pedal-dual-pose-'));
const fixtureCommit = 'c9215687b8f906c4a9dc0ed63b5b0d0dd0beb9e5';
const fixtureSource = 'examples/pose_landmarker/ios/PoseLandmarkerTests/test_image.jpg';
const fixtureHash = '8da0e95f027a4fe298e3554b5728e08961014b651f1160a070f7c58670dbeda9';
let image;
if (process.env.POSE_IMAGE_PATH) {
  image = await readFile(process.env.POSE_IMAGE_PATH);
} else {
  const repository = join(artifacts, 'fixture-source');
  execFileSync('git', ['init', '--quiet', repository]);
  execFileSync('git', ['-C', repository, 'fetch', '--quiet', '--depth=1', '--filter=blob:none', 'https://github.com/google-ai-edge/mediapipe-samples.git', fixtureCommit]);
  image = execFileSync('git', ['-C', repository, 'show', `FETCH_HEAD:${fixtureSource}`]);
}
assert.equal(createHash('sha256').update(image).digest('hex'), fixtureHash, 'fixture matches the pinned official MediaPipe source');
const imagePath = join(artifacts, 'official-person.jpg');
await writeFile(imagePath, image);

const scenarios = [
  {
    name: 'both-players',
    filter: '[0:v]scale=640:426,setsar=1,split=2[left][right];[left][right]hstack=inputs=2[out]',
    expected: [true, true],
  },
  {
    // The webcam preview is mirrored: raw left is visible right (player 2).
    name: 'player-2-only',
    filter: '[0:v]scale=640:426,setsar=1[left];color=c=0x26352d:s=640x426:r=10[right];[left][right]hstack=inputs=2[out]',
    expected: [false, true],
  },
  {
    name: 'player-1-only',
    filter: '[0:v]scale=640:426,setsar=1[right];color=c=0x26352d:s=640x426:r=10[left];[left][right]hstack=inputs=2[out]',
    expected: [true, false],
  },
];

const selectedScenarios = process.env.DUAL_POSE_SCENARIO
  ? scenarios.filter((scenario) => scenario.name === process.env.DUAL_POSE_SCENARIO)
  : scenarios;
assert.ok(selectedScenarios.length, 'DUAL_POSE_SCENARIO must select a known scenario');

for (const scenario of selectedScenarios) {
  const video = join(artifacts, `${scenario.name}.y4m`);
  execFileSync(process.env.FFMPEG_PATH || 'ffmpeg', [
    '-hide_banner', '-loglevel', 'error', '-y', '-filter_complex_threads', '1',
    '-loop', '1', '-i', imagePath, '-filter_complex', scenario.filter,
    '-map', '[out]', '-r', '10', '-t', '1', '-pix_fmt', 'yuv420p', video,
  ]);
  const browser = await chromium.launch({
    executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium',
    headless: true,
    args: [
      '--no-sandbox', '--disable-dev-shm-usage', '--enable-webgl',
      '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader',
      '--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream',
      `--use-file-for-fake-video-capture=${video}`,
    ],
  });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1080 }, permissions: ['camera'] });
  const errors = [];
  const badResponses = [];
  const externalRequests = [];
  let page;
  try {
    await context.route('**/*', (route) => {
      const url = new URL(route.request().url());
      if (url.protocol.startsWith('http') && url.origin !== origin) {
        externalRequests.push(url.href);
        return route.abort();
      }
      return route.continue();
    });
    context.on('response', (response) => {
      if (response.status() >= 400) badResponses.push(`${response.status()} ${response.url()}`);
    });
    await context.addInitScript(() => {
      window.__dualPose = { instances: [], cameraCalls: 0, streams: [] };
      let WrappedPose;
      Object.defineProperty(window, 'Pose', {
        configurable: true,
        get() { return WrappedPose; },
        set(OriginalPose) {
          WrappedPose = class extends OriginalPose {
            constructor(...args) {
              super(...args);
              this.integrationState = { frames: 0, landmarks: undefined, closed: false };
              window.__dualPose.instances.push(this.integrationState);
            }
            onResults(callback) {
              return super.onResults((result) => {
                this.integrationState.frames += 1;
                this.integrationState.landmarks = result.poseLandmarks;
                callback(result);
              });
            }
            close() {
              this.integrationState.closed = true;
              return super.close();
            }
          };
        },
      });
      const getUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
      navigator.mediaDevices.getUserMedia = async (options) => {
        window.__dualPose.cameraCalls += 1;
        const stream = await getUserMedia(options);
        window.__dualPose.streams.push(stream);
        return stream;
      };
    });
    page = await context.newPage();
    page.on('pageerror', (error) => errors.push(error.message));
    assert.equal((await page.goto(baseURL, { waitUntil: 'networkidle' }))?.ok(), true);
    await page.getByRole('button', { name: '雙人競賽', exact: true }).click();
    await page.getByRole('button', { name: '使用攝影機', exact: true }).click();
    await page.waitForFunction(() => {
      const instances = window.__dualPose?.instances.filter((instance) => !instance.closed);
      return instances?.length === 2 && instances.every((instance) => instance.frames >= 3);
    }, undefined, { timeout: 90000 });
    await page.waitForFunction((expected) => expected.every((tracked, index) =>
      document.querySelector(`[data-player-status="${index + 1}"]`)?.getAttribute('data-tracking') === String(tracked),
    ), scenario.expected, { timeout: 15000 });

    const result = await page.evaluate(() => {
      const canvas = document.querySelector('.pose-overlay');
      const pixels = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height).data;
      let green = 0;
      let blue = 0;
      let greenX = 0;
      let blueX = 0;
      for (let pixel = 0; pixel < pixels.length / 4; pixel++) {
        const offset = pixel * 4;
        if (pixels[offset + 3] < 100) continue;
        const [red, g, b] = pixels.slice(offset, offset + 3);
        const x = pixel % canvas.width;
        if (g > 190 && red > 150 && b < 190 && g > red) { green += 1; greenX += x; }
        if (b > 190 && b > red + 30 && g > 150 && red < 190) { blue += 1; blueX += x; }
      }
      return {
        instances: window.__dualPose.instances.filter((instance) => !instance.closed),
        cameraCalls: window.__dualPose.cameraCalls,
        width: document.querySelector('.pose-video').videoWidth,
        canvasWidth: canvas.width,
        green, blue,
        greenMeanX: greenX / Math.max(1, green),
        blueMeanX: blueX / Math.max(1, blue),
        statuses: [1, 2].map((player) => ({
          tracking: document.querySelector(`[data-player-status="${player}"]`)?.getAttribute('data-tracking'),
          cadence: Number(document.querySelector(`[data-player-status="${player}"]`)?.getAttribute('data-cadence')),
        })),
        overlayTransform: getComputedStyle(canvas).transform,
        videoTransform: getComputedStyle(document.querySelector('.pose-video')).transform,
      };
    });
    assert.equal(result.instances.length, 2, 'two real model graphs independently analyze the two camera halves');
    assert.equal(result.cameraCalls, 1, 'both players share one camera acquisition');
    assert.equal(result.width, 1280, 'dual-player camera preserves the full wide fixture');
    assert.equal(result.instances.filter((instance) => instance.landmarks?.length === 33).length,
      scenario.expected.filter(Boolean).length, 'only the occupied camera halves produce full poses');
    for (const instance of result.instances.filter((value) => value.landmarks?.length === 33)) {
      for (const index of [23, 24, 25, 26, 27, 28]) {
        assert.ok(instance.landmarks[index].visibility >= 0.5, `real leg landmark ${index} is visible`);
      }
    }
    for (const [index, expected] of scenario.expected.entries()) {
      assert.equal(result.statuses[index].tracking, String(expected));
      assert.equal(result.statuses[index].cadence, 0, 'a still or absent person does not generate imaginary cadence');
    }
    assert.equal(await page.getByRole('button', { name: '開始競賽', exact: true }).isDisabled(),
      !scenario.expected.every(Boolean), 'camera competition requires both independently tracked players');
    assert.equal(result.overlayTransform, result.videoTransform, 'camera and joint markers use the same mirror transform');
    if (scenario.expected[0]) {
      assert.ok(result.green > 100, 'player 1 has visible green joint markers');
      assert.ok(result.greenMeanX > result.canvasWidth / 2, 'player 1 markers appear on the mirrored left half');
    }
    if (scenario.expected[1]) {
      assert.ok(result.blue > 100, 'player 2 has visible blue joint markers');
      assert.ok(result.blueMeanX < result.canvasWidth / 2, 'player 2 markers appear on the mirrored right half');
    }

    if (scenario.name === 'both-players') {
      await page.evaluate(() => {
        window.__fullscreenProbe = {
          video: document.querySelector('.pose-video'),
          overlay: document.querySelector('.pose-overlay'),
          stream: document.querySelector('.pose-video').srcObject,
          frames: window.__dualPose.instances.map((instance) => instance.frames),
        };
      });
      await page.getByRole('button', { name: '切換全螢幕', exact: true }).click();
      await page.waitForFunction(() => document.fullscreenElement?.classList.contains('ride-card'));
      await page.locator('.scene-camera').waitFor({ state: 'visible' });
      await page.waitForFunction(() => window.__dualPose.instances.every((instance, index) => instance.frames > window.__fullscreenProbe.frames[index]));
      assert.equal(await page.evaluate(() => {
        const probe = window.__fullscreenProbe;
        return document.querySelectorAll('.pose-camera').length === 1
          && probe.video === document.querySelector('.pose-video')
          && probe.overlay === document.querySelector('.pose-overlay')
          && probe.stream === document.querySelector('.pose-video').srcObject
          && window.__dualPose.cameraCalls === 1
          && probe.stream.getVideoTracks().every((track) => track.readyState === 'live');
      }), true, 'fullscreen retains the same live camera, overlay, and model instances');
      await page.screenshot({ path: join(artifacts, 'dual-fullscreen.png') });
      await page.evaluate(() => document.exitFullscreen());

      // A paused UI always displays zero. Start actual camera races to verify
      // that model jitter on a still image cannot move either rider or count
      // a held knee as repeated exercise, in both supported exercise modes.
      for (const exercise of ['seated', 'standing']) {
        if (exercise === 'standing') {
          await page.getByRole('button', { name: '站姿高抬膝', exact: true }).click();
        }
        await page.getByRole('button', { name: '開始競賽', exact: true }).click();
        await page.getByRole('button', { name: '暫停一下', exact: true }).waitFor({ timeout: 10000 });
        const framesAtStart = await page.evaluate(() => window.__dualPose.instances.map((instance) => instance.frames));
        await page.waitForTimeout(1800);
        await page.waitForFunction((before) => window.__dualPose.instances.every((instance, index) => instance.frames > before[index] + 2), framesAtStart, { timeout: 15000 });
        assert.deepEqual(await page.locator('.race-player-speed strong').allTextContents(), ['0.0', '0.0'], `${exercise}: still camera subjects generate no game speed`);
        assert.deepEqual(await page.locator('.race-player-distance strong').allTextContents(), ['0', '0'], `${exercise}: still camera subjects generate no race distance`);
        assert.equal(await page.evaluate(() => [1, 2].every((player) => {
          const status = document.querySelector(`[data-player-status="${player}"]`);
          return status?.getAttribute('data-tracking') === 'true'
            && Number(status.getAttribute('data-cadence')) === 0
            && Number(status.getAttribute('data-high-knees')) === 0;
        })), true, `${exercise}: both real poses remain tracked without imaginary cadence or high knees`);
        await page.getByRole('button', { name: '暫停一下', exact: true }).click();
        console.log(`Dual pose active camera passed: ${exercise}, still subjects stay at zero speed, distance, cadence, and counted high knees.`);
      }
      assert.equal(await page.evaluate(() => window.__dualPose.cameraCalls), 1, 'changing exercise mode reuses the same live camera');
    }
    await page.screenshot({ path: join(artifacts, `${scenario.name}.png`), fullPage: true });
    await page.getByRole('button', { name: '先試玩看看', exact: true }).click();
    await page.waitForFunction(() => window.__dualPose.streams.every((stream) => stream.getTracks().every((track) => track.readyState === 'ended')));
    await page.waitForFunction(() => window.__dualPose.instances.every((instance) => instance.closed));
    assert.deepEqual(errors, [], `no browser errors in ${scenario.name}`);
    assert.deepEqual(externalRequests, [], 'models and camera analysis remain local');
    assert.deepEqual(badResponses, [], 'all application and model assets load');
    console.log(`Dual pose passed: ${scenario.name}, real per-half detection, independent status/cadence, colored markers, and camera cleanup.`);
  } catch (error) {
    console.error(`Dual pose failed in ${scenario.name}: ${error.message}`);
    if (page) {
      await page.screenshot({ path: join(artifacts, `${scenario.name}-failure.png`), fullPage: true }).catch(() => undefined);
      const diagnostics = await page.evaluate(() => ({
        startButtons: [...document.querySelectorAll('.start-button')].map((button) => ({ text: button.textContent, disabled: button.disabled, display: getComputedStyle(button).display, visibility: getComputedStyle(button).visibility })),
        fullScreen: !!document.fullscreenElement,
        cameraCount: document.querySelectorAll('.pose-camera').length,
        statuses: [...document.querySelectorAll('[data-player-status]')].map((element) => ({ player: element.dataset.playerStatus, tracking: element.dataset.tracking, cadence: element.dataset.cadence })),
        models: window.__dualPose?.instances.map((instance) => ({ frames: instance.frames, landmarkCount: instance.landmarks?.length || 0, closed: instance.closed })),
      })).catch(() => undefined);
      console.error(JSON.stringify({ diagnostics, errors, badResponses, artifacts }));
    }
    throw error;
  } finally {
    await context.close();
    await browser.close();
  }
}
console.log(`Dual pose artifacts: ${artifacts}`);
