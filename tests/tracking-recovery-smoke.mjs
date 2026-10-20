import assert from 'node:assert/strict';
import { mkdtemp } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

// Controlled camera and Pose TEST DOUBLES. Unlike standing-motion-smoke, send()
// really remains pending for 1.9 seconds, or never settles. No actual moving
// person/model inference is claimed; the real-model suites remain unchanged.
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const baseURL = process.env.BASE_URL || 'http://127.0.0.1:5173';
const artifacts = await mkdtemp(join(tmpdir(), 'forest-pedal-tracking-recovery-'));
const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium',
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
});

async function prepare(scenario, playerCount) {
  const context = await browser.newContext({ viewport: { width: 1100, height: 800 }, deviceScaleFactor: 0.5 });
  await context.addInitScript(({ scenario, playerCount }) => {
    const state = {
      scenario, playerCount, instances: [], streams: [], cameraCalls: 0,
      programs: [{ kind: 'still', epoch: 0 }, { kind: 'still', epoch: 0 }],
      emissions: [], samples: [], sample: false,
    };
    window.__trackingRecovery = state;
    navigator.mediaDevices.getUserMedia = async () => {
      state.cameraCalls += 1;
      const canvas = document.createElement('canvas');
      canvas.width = 1280;
      canvas.height = 720;
      const context = canvas.getContext('2d');
      let frame = 0;
      const draw = () => {
        context.fillStyle = frame++ % 2 ? '#233b44' : '#243b44';
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = '#d8e9df';
        context.font = '26px sans-serif';
        context.fillText('TRACKING RECOVERY TEST DOUBLE — NOT A REAL PERSON', 100, 100);
        context.fillText(`Camera frame ${frame}`, 100, 150);
      };
      draw();
      const stream = canvas.captureStream(15);
      const timer = setInterval(() => {
        if (stream.getTracks().every((track) => track.readyState === 'ended')) clearInterval(timer);
        else draw();
      }, 66);
      state.streams.push(stream);
      return stream;
    };

    window.Pose = class ControlledPose {
      constructor() {
        this.id = state.instances.length;
        this.player = this.id % playerCount;
        this.closed = false;
        this.pending = 0;
        this.maxPending = 0;
        this.frames = 0;
        this.programEpoch = null;
        state.instances.push(this);
      }
      setOptions() {}
      initialize() { return Promise.resolve(); }
      onResults(callback) { this.callback = callback; }
      close() { this.closed = true; return Promise.resolve(); }
      async send() {
        if (this.closed) throw new Error('A closed controlled graph received send');
        this.pending += 1;
        this.maxPending = Math.max(this.maxPending, this.pending);
        if (state.scenario === 'always-stall'
          || (state.scenario === 'recover-mid-ride' && state.stallCurrent && this.id === 0)
          || (state.scenario === 'recover-first-send' && this.id === 0)) {
          return new Promise(() => {});
        }
        const time = performance.now();
        const program = state.programs[this.player];
        if (this.programEpoch !== program.epoch) {
          this.programEpoch = program.epoch;
          this.cycleStarted = time;
          this.side = 0;
        }
        const phase = time - this.cycleStarted;
        const completed = phase >= 4000;
        const raised = program.kind === 'move' && phase >= 1000 && !completed;
        const side = this.side;
        const points = Array.from({ length: 33 }, () => ({ x: 0.5, y: 0.35, z: 0, visibility: 0.99, presence: 0.99 }));
        points[0].y = 0.14;
        points[11] = { x: 0.4, y: 0.27, visibility: 0.99 };
        points[12] = { x: 0.6, y: 0.27, visibility: 0.99 };
        points[23] = { x: 0.44, y: 0.55, visibility: 0.99 };
        points[24] = { x: 0.56, y: 0.55, visibility: 0.99 };
        for (const leg of [0, 1]) {
          const high = raised && leg === side;
          const x = leg === 0 ? 0.43 : 0.57;
          points[25 + leg] = { x, y: high ? 0.52 : 0.82, visibility: 0.99 };
          points[27 + leg] = { x, y: high ? 0.7 : 0.94, visibility: high ? 0.05 : 0.99 };
          points[31 + leg] = { x, y: high ? 0.72 : 0.96, visibility: high ? 0.05 : 0.99 };
        }
        if (completed) {
          this.cycleStarted = time;
          this.side = 1 - this.side;
        }
        if (state.scenario === 'slow-dual' && this.player === 1) {
          await new Promise((resolve) => setTimeout(resolve, 1900));
        }
        this.frames += 1;
        state.emissions.push({ player: this.player + 1, id: this.id, time, returned: performance.now(), epoch: program.epoch, raised, side });
        this.callback({ poseLandmarks: points });
        this.pending -= 1;
      }
    };

    const tiny = document.createElement('canvas');
    tiny.width = 200;
    tiny.height = 120;
    window.__trackingOverlay = () => {
      const overlay = document.querySelector('.pose-overlay');
      if (!overlay?.width) return { green: 0, blue: 0 };
      const context = tiny.getContext('2d', { willReadFrequently: true });
      context.clearRect(0, 0, tiny.width, tiny.height);
      context.drawImage(overlay, 0, 0, tiny.width, tiny.height);
      const pixels = context.getImageData(0, 0, tiny.width, tiny.height).data;
      let green = 0;
      let blue = 0;
      for (let offset = 0; offset < pixels.length; offset += 4) {
        const [red, g, b, alpha] = pixels.slice(offset, offset + 4);
        if (alpha < 40) continue;
        if (g > 175 && red > 150 && b < 200 && g > red) green += 1;
        if (b > 190 && b > red + 30 && g > 150 && red < 190) blue += 1;
      }
      return { green, blue };
    };
    setInterval(() => {
      if (!state.sample) return;
      state.samples.push({
        time: performance.now(), ...window.__trackingOverlay(),
        tracked: [1, 2].slice(0, playerCount).map((player) => document.querySelector(`[data-player-status="${player}"]`)?.dataset.tracking === 'true'),
      });
    }, 300);
  }, { scenario, playerCount });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto(baseURL, { waitUntil: 'networkidle' });
  await page.getByRole('button', { name: '站姿高抬膝', exact: true }).click();
  if (playerCount === 2) {
    await page.getByRole('button', { name: '雙人競賽', exact: true }).click();
    await page.getByRole('combobox', { name: '競賽距離', exact: true }).selectOption('500');
  }
  await page.getByRole('button', { name: '使用攝影機', exact: true }).click();
  return { context, page, errors };
}

async function tracked(page, count, timeout = 20000) {
  await page.waitForFunction((count) => Array.from({ length: count }, (_, index) => index + 1).every((player) =>
    document.querySelector(`[data-player-status="${player}"]`)?.dataset.tracking === 'true'), count, { timeout });
}

async function programs(page, kinds) {
  return page.evaluate((kinds) => {
    const epoch = performance.now();
    window.__trackingRecovery.programs = kinds.map((kind) => ({ kind, epoch }));
    return epoch;
  }, kinds);
}

async function moving(page, player, steps = 2) {
  await page.waitForFunction(({ player, steps }) => {
    const status = document.querySelector(`[data-player-status="${player}"]`);
    return status?.dataset.tracking === 'true' && Number(status.dataset.highKnees) >= steps && Number(status.dataset.cadence) > 0;
  }, { player, steps }, { timeout: 23000 });
}

async function stopped(page, count) {
  await page.waitForFunction((count) => Array.from({ length: count }, (_, index) => index + 1).every((player) => {
    const status = document.querySelector(`[data-player-status="${player}"]`);
    return status?.dataset.tracking === 'true' && Number(status.dataset.cadence) === 0;
  }), count, { timeout: 13000 });
}

async function snapshot(page) {
  return page.evaluate(() => ({
    instances: window.__trackingRecovery.instances.map((instance) => ({ id: instance.id, player: instance.player, frames: instance.frames, closed: instance.closed, maxPending: instance.maxPending })),
    cameraCalls: window.__trackingRecovery.cameraCalls,
    statuses: [...document.querySelectorAll('[data-player-status]')].map((status) => ({ ...status.dataset })),
    overlay: window.__trackingOverlay(),
  }));
}

async function withScenario(scenario, count, run) {
  const { context, page, errors } = await prepare(scenario, count);
  try {
    await run(page);
    assert.deepEqual(errors, [], `${scenario}: no browser exceptions`);
    assert.equal(await page.evaluate(() => window.__trackingRecovery.instances.every((instance) => instance.maxPending <= 1)), true, 'each graph receives at most one in-flight send');
    await page.screenshot({ path: join(artifacts, `${scenario}.png`), fullPage: true });
    const pause = page.getByRole('button', { name: '暫停一下', exact: true });
    if (await pause.isVisible()) await pause.click();
    await page.getByRole('button', { name: '先試玩看看', exact: true }).click();
    await page.waitForFunction(() => window.__trackingRecovery.streams.every((stream) => stream.getTracks().every((track) => track.readyState === 'ended')));
    console.log(`Tracking recovery TEST DOUBLE passed: ${scenario}.`);
  } catch (error) {
    await page.screenshot({ path: join(artifacts, `${scenario}-failure.png`), fullPage: true }).catch(() => undefined);
    console.error(JSON.stringify({ scenario, diagnostics: await snapshot(page).catch(() => undefined), errors, artifacts }));
    throw error;
  } finally {
    await context.close();
  }
}

try {
  const selected = process.env.TRACKING_SCENARIO;
  if (!selected || selected === 'slow-dual') await withScenario('slow-dual', 2, async (page) => {
    await tracked(page, 2);
    assert.equal(await page.getByRole('button', { name: '開始競賽', exact: true }).isDisabled(), false, 'a slow second model must not prevent both players being ready');
    await page.evaluate(() => { window.__trackingRecovery.sample = true; });
    await page.getByRole('button', { name: '開始競賽', exact: true }).click();
    await page.getByRole('button', { name: '暫停一下', exact: true }).waitFor({ timeout: 10000 });
    const firstEpoch = await programs(page, ['move', 'still']);
    await moving(page, 1);
    assert.ok(Number(await page.locator('.race-player-1 .race-player-distance strong').textContent()) > 0, 'player 1 high knees advance the race');
    assert.equal(await page.locator('.race-player-2 .race-player-distance strong').textContent(), '0', 'player 2 does not inherit the other cadence');
    await programs(page, ['still', 'still']);
    await stopped(page, 2);
    const baseline = await page.locator('.race-player-distance strong').allTextContents();
    const secondEpoch = await programs(page, ['still', 'move']);
    await moving(page, 2);
    assert.equal(await page.locator('.race-player-1 .race-player-distance strong').textContent(), baseline[0], 'player 1 remains stationary while player 2 moves');
    assert.ok(Number(await page.locator('.race-player-2 .race-player-distance strong').textContent()) > Number(baseline[1]), 'player 2 independently advances despite real send latency');
    await programs(page, ['still', 'still']);
    await stopped(page, 2);
    const finalDistances = await page.locator('.race-player-distance strong').allTextContents();
    await page.waitForTimeout(2400);
    assert.deepEqual(await page.locator('.race-player-distance strong').allTextContents(), finalDistances, 'both race distances stop when the controlled people stop');
    const probe = await page.evaluate(() => ({ samples: window.__trackingRecovery.samples, emissions: window.__trackingRecovery.emissions, cameraCalls: window.__trackingRecovery.cameraCalls }));
    assert.ok(probe.samples.length >= 30, 'tracking and both overlay colors were sampled across the workout');
    assert.ok(probe.samples.every((sample) => sample.tracked.every(Boolean) && sample.green > 20 && sample.blue > 20), 'both skeletons remain visible and tracked while one model takes 1.9 seconds');
    for (const [player, epoch] of [[1, firstEpoch], [2, secondEpoch]]) {
      const frames = probe.emissions.filter((entry) => entry.player === player && entry.epoch === epoch);
      const returns = frames.filter((entry, index) => index > 0 && frames[index - 1].raised && !entry.raised);
      assert.ok(returns.length >= 2, 'complete high-knee cycles reached the production estimator');
      assert.ok(returns[1].time - returns[0].time >= 4000, 'the person uses slow steps, at least four seconds apart');
    }
    assert.equal(probe.cameraCalls, 1);
  });

  if (!selected || selected === 'recover-first-send') await withScenario('recover-first-send', 1, async (page) => {
    await page.evaluate(() => { window.__trackingRecovery.originalVideo = document.querySelector('.pose-video'); });
    await tracked(page, 1, 22000);
    const result = await snapshot(page);
    assert.equal(result.instances.length, 2, 'one automatic model reconstruction recovers a first send that never settles');
    assert.equal(result.cameraCalls, 1, 'automatic model recovery keeps the original camera stream');
    assert.equal(await page.evaluate(() => window.__trackingRecovery.originalVideo === document.querySelector('.pose-video')), true, 'recovery keeps the video DOM element');
    assert.ok(result.overlay.green > 20, 'reconstructed model restores the visible skeleton');
    await page.getByRole('button', { name: '開始騎行', exact: true }).click();
    await programs(page, ['move', 'still']);
    await moving(page, 1, 1);
    assert.ok(Number(await page.locator('.speed-reading strong').textContent()) > 0, 'movement after reconstruction controls the actual game speed');
    // The single-player HUD rounds kilometres to two decimals. Check the
    // actual saved metres rather than waiting for a slow rider to reach 5m.
    await page.waitForTimeout(1300);
    await page.getByRole('button', { name: '暫停一下', exact: true }).click();
    await page.getByRole('button', { name: '結束旅程', exact: true }).click();
    await page.getByRole('dialog').waitFor();
    assert.ok(await page.evaluate(() => JSON.parse(localStorage.getItem('forest-pedal-rides') || '[]')[0]?.distance > 0), 'new movement after recovery increases the actual saved ride distance');
    await page.getByRole('button', { name: '關閉視窗', exact: true }).click();
  });

  if (!selected || selected === 'recover-mid-ride') await withScenario('recover-mid-ride', 1, async (page) => {
    await tracked(page, 1);
    await page.getByRole('button', { name: '開始騎行', exact: true }).click();
    await programs(page, ['move', 'still']);
    await moving(page, 1, 1);
    assert.ok(Number(await page.locator('.speed-reading strong').textContent()) > 0);
    const before = await page.locator('[data-player-status="1"]').getAttribute('data-high-knees');
    await page.evaluate(() => { window.__trackingRecovery.stallCurrent = true; });
    await page.waitForFunction(() => document.querySelector('[data-player-status="1"]')?.dataset.cadence === '0.00', undefined, { timeout: 4500 });
    assert.ok((await snapshot(page)).overlay.green > 20, 'a stalled mid-ride model leaves a dimmed, visible last skeleton while stopping old movement');
    await page.waitForFunction(() => window.__trackingRecovery.instances.length === 2, undefined, { timeout: 8000 });
    await tracked(page, 1);
    assert.equal((await snapshot(page)).cameraCalls, 1);
    assert.equal(await page.locator('[data-player-status="1"]').getAttribute('data-high-knees'), before, 'automatic recovery preserves completed steps');
    await programs(page, ['move', 'still']);
    await moving(page, 1, Number(before) + 1);
    assert.ok(Number(await page.locator('.speed-reading strong').textContent()) > 0, 'the same ride resumes from new movement after automatic recovery');
    await page.getByRole('button', { name: '暫停一下', exact: true }).click();
  });

  if (!selected || selected === 'always-stall') await withScenario('always-stall', 1, async (page) => {
    await page.getByRole('alert').waitFor({ timeout: 35000 });
    const result = await snapshot(page);
    assert.equal(result.instances.length, 2, 'a second stalled graph fails clearly instead of restarting forever');
    assert.equal(result.cameraCalls, 1, 'automatic attempts reuse the same camera');
    assert.equal(await page.getByRole('button', { name: '重新連線', exact: true }).isVisible(), true, 'the user receives an explicit reconnect action');
    await page.waitForTimeout(1500);
    assert.equal(await page.evaluate(() => window.__trackingRecovery.instances.length), 2, 'automatic model reconstruction is bounded');
    await page.evaluate(() => { window.__trackingRecovery.scenario = 'none'; });
    await page.getByRole('button', { name: '重新連線', exact: true }).click();
    await tracked(page, 1);
    assert.ok((await snapshot(page)).overlay.green > 20, 'manual reconnect restores the skeleton after an explicit failure');
    await page.getByRole('button', { name: '開始騎行', exact: true }).click();
    await programs(page, ['move', 'still']);
    await moving(page, 1, 1);
    assert.ok(Number(await page.locator('.speed-reading strong').textContent()) > 0);
    await page.getByRole('button', { name: '暫停一下', exact: true }).click();
  });
} finally {
  await browser.close();
}
console.log(`Tracking recovery test-double artifacts: ${artifacts}`);
