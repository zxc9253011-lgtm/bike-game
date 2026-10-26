import assert from 'node:assert/strict';
import { mkdtemp } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

// Controlled camera/Pose TEST DOUBLES, not a real person or model recording.
// The production pipeline receives small, alternating knee movements while
// both knees remain far below hip height and the ankles are occluded.
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const baseURL = process.env.BASE_URL || 'http://127.0.0.1:5173';
const artifacts = await mkdtemp(join(tmpdir(), 'forest-pedal-running-'));
const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium',
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
});

async function controlledCamera(context) {
  await context.addInitScript(() => {
    const state = {
      cameraCalls: 0, instances: [], streams: [], emissions: [],
      programs: [{ kind: 'still', epoch: 0 }, { kind: 'still', epoch: 0 }],
    };
    window.__runningDouble = state;
    navigator.mediaDevices.getUserMedia = async () => {
      state.cameraCalls += 1;
      const canvas = document.createElement('canvas');
      canvas.width = 1280;
      canvas.height = 720;
      const context = canvas.getContext('2d');
      let frame = 0;
      const draw = () => {
        context.fillStyle = '#233b44';
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = '#d8e9df';
        context.font = '24px sans-serif';
        context.fillText('GENTLE MARCH TEST DOUBLE — NOT A REAL PERSON', 110, 105);
        context.fillText(`Camera frame ${frame++}`, 110, 150);
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
        this.player = state.instances.filter((instance) => !instance.closed).length;
        this.closed = false;
        this.lastEmission = -Infinity;
        state.instances.push(this);
      }
      initialize() { return Promise.resolve(); }
      setOptions() {}
      onResults(callback) { this.callback = callback; }
      close() { this.closed = true; return Promise.resolve(); }
      send() {
        if (this.closed) return Promise.reject(new Error('A closed controlled graph was used'));
        const time = performance.now();
        if (time - this.lastEmission < 150) return Promise.resolve();
        this.lastEmission = time;
        const program = state.programs[this.player];
        const period = program.kind === 'slow' ? 2400 : 1200;
        const elapsed = Math.max(0, time - program.epoch);
        const side = Math.floor(elapsed / period) % 2;
        const lift = program.kind === 'still' ? 0 : Math.sin(Math.PI * ((elapsed % period) / period)) * 0.07;
        const torso = 0.28;
        const hips = 0.55;
        const lifts = [0, 1].map((leg) => -0.75 + (program.kind === 'sway' || leg === side ? lift : 0));
        const points = Array.from({ length: 33 }, () => ({ x: 0.5, y: 0.35, z: 0, visibility: 0.99, presence: 0.99 }));
        points[0].y = 0.14;
        points[11] = { x: 0.4, y: hips - torso, visibility: 0.99 };
        points[12] = { x: 0.6, y: hips - torso, visibility: 0.99 };
        points[23] = { x: 0.44, y: hips, visibility: 0.99 };
        points[24] = { x: 0.56, y: hips, visibility: 0.99 };
        for (const leg of [0, 1]) {
          const x = leg === 0 ? 0.43 : 0.57;
          points[25 + leg] = { x, y: hips - lifts[leg] * torso, visibility: 0.99 };
          points[27 + leg] = { x, y: 0.94, visibility: 0.05 };
          points[31 + leg] = { x, y: 0.96, visibility: 0.05 };
        }
        state.emissions.push({ player: this.player + 1, kind: program.kind, time, lifts });
        this.callback({ poseLandmarks: points });
        return Promise.resolve();
      }
    };
  });
}

async function programs(page, kinds) {
  await page.evaluate((kinds) => {
    const epoch = performance.now();
    window.__runningDouble.programs = kinds.map((kind) => ({ kind, epoch }));
  }, kinds);
}

async function status(page, player) {
  return page.locator(`[data-player-status="${player}"]`).evaluate((element) => ({
    tracking: element.dataset.tracking === 'true',
    cadence: Number(element.dataset.cadence),
    steps: Number(element.dataset.steps),
  }));
}

async function tracked(page, count) {
  await page.waitForFunction((count) => Array.from({ length: count }, (_, index) => index + 1).every((player) =>
    document.querySelector(`[data-player-status="${player}"]`)?.dataset.tracking === 'true'), count);
}

async function moving(page, player, steps = 4) {
  await page.waitForFunction(({ player, steps }) => {
    const status = document.querySelector(`[data-player-status="${player}"]`);
    return status?.dataset.tracking === 'true' && Number(status.dataset.steps) >= steps && Number(status.dataset.cadence) > 0;
  }, { player, steps }, { timeout: 18000 });
}

async function stopped(page, count) {
  await page.waitForFunction((count) => Array.from({ length: count }, (_, index) => index + 1).every((player) =>
    Number(document.querySelector(`[data-player-status="${player}"]`)?.dataset.cadence) === 0), count, { timeout: 8500 });
}

try {
  for (const playerCount of [1, 2]) {
    const context = await browser.newContext({ viewport: { width: 1100, height: 850 }, deviceScaleFactor: 0.5 });
    await controlledCamera(context);
    const page = await context.newPage();
    const errors = [];
    const badResponses = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('response', (response) => { if (response.status() >= 400) badResponses.push(`${response.status()} ${response.url()}`); });
    try {
      assert.equal((await page.goto(baseURL, { waitUntil: 'networkidle' }))?.ok(), true);
      const seated = page.getByRole('button', { name: '坐姿踩踏', exact: true });
      const highKnees = page.getByRole('button', { name: '站姿高抬膝', exact: true });
      const running = page.getByRole('button', { name: '原地踏步跑步', exact: true });
      assert.equal(await seated.getAttribute('aria-pressed'), 'true');
      await highKnees.click();
      assert.equal(await highKnees.getAttribute('aria-pressed'), 'true', 'the existing high-knee mode remains selectable');
      await running.click();
      assert.equal(await running.getAttribute('aria-pressed'), 'true');
      assert.match(await page.locator('.game-setup:not(.game-setup-compact)').textContent(), /不必|不需|不用|無須/);
      await page.locator('.ride-card canvas[data-activity="running"]').waitFor();
      assert.match(await page.locator('.ride-card canvas[data-activity="running"]').getAttribute('aria-label'), /跑步/);
      if (playerCount === 2) {
        await page.getByRole('button', { name: '雙人競賽', exact: true }).click();
        await page.getByRole('combobox', { name: '競賽距離', exact: true }).selectOption('500');
      }
      await page.getByRole('button', { name: '使用攝影機', exact: true }).click();
      await tracked(page, playerCount);
      assert.equal(await page.evaluate(() => window.__runningDouble.cameraCalls), 1);

      if (playerCount === 1) {
        await page.evaluate(() => { window.__runningFullscreen = { video: document.querySelector('.pose-video'), overlay: document.querySelector('.pose-overlay'), stream: document.querySelector('.pose-video').srcObject }; });
        await page.getByRole('button', { name: '切換全螢幕', exact: true }).click();
        await page.waitForFunction(() => document.fullscreenElement?.classList.contains('ride-card'));
        await page.locator('.scene-camera').waitFor({ state: 'visible' });
        const selector = page.getByRole('combobox', { name: '畫面內運動模式', exact: true });
        assert.equal(await selector.inputValue(), 'running');
        await selector.selectOption('seated');
        await selector.selectOption('standing');
        await selector.selectOption('running');
        await tracked(page, 1);
        assert.equal(await page.evaluate(() => {
          const probe = window.__runningFullscreen;
          return probe.video === document.querySelector('.pose-video') && probe.overlay === document.querySelector('.pose-overlay')
            && probe.stream === document.querySelector('.pose-video').srcObject && window.__runningDouble.cameraCalls === 1;
        }), true, 'fullscreen and paused exercise switches preserve the same camera and overlay');
        await page.screenshot({ path: join(artifacts, 'running-fullscreen.png') });
        await page.evaluate(() => document.exitFullscreen());
      }

      await page.locator('.start-button').click();
      await page.locator('.start-button.is-running').waitFor({ timeout: 10000 });
      await programs(page, ['walk', 'still']);
      await moving(page, 1);
      assert.ok(Number(await page.locator('.speed-reading strong').textContent()) > 0, 'gentle steps drive the game speed');
      assert.equal(await page.locator('.pose-camera').getAttribute('data-exercise-mode'), 'running');
      if (playerCount === 2) {
        assert.ok(Number(await page.locator('.race-player-1 .race-player-distance strong').textContent()) > 0);
        assert.equal(await page.locator('.race-player-2 .race-player-distance strong').textContent(), '0');
        assert.deepEqual(await status(page, 2), { tracking: true, cadence: 0, steps: 0 }, 'a still second person never inherits player 1 steps');
      }
      await page.screenshot({ path: join(artifacts, `running-${playerCount}-player-moving.png`), fullPage: true });
      await programs(page, ['still', 'still']);
      await stopped(page, playerCount);
      const firstSteps = (await status(page, 1)).steps;
      if (playerCount === 1) {
        await programs(page, ['sway', 'still']);
        await page.waitForTimeout(3500);
        assert.deepEqual(await status(page, 1), { tracking: true, cadence: 0, steps: firstSteps }, 'simultaneous leg/body sway must not become alternating steps');
      } else {
        const baseline = await page.locator('.race-player-distance strong').allTextContents();
        await programs(page, ['still', 'slow']);
        await moving(page, 2, 3);
        assert.equal(await page.locator('.race-player-1 .race-player-distance strong').textContent(), baseline[0]);
        assert.ok(Number(await page.locator('.race-player-2 .race-player-distance strong').textContent()) > Number(baseline[1]), 'slow gentle steps independently drive player 2');
        assert.equal((await status(page, 1)).steps, firstSteps);
        await programs(page, ['still', 'still']);
        await stopped(page, 2);
        const stoppedDistances = await page.locator('.race-player-distance strong').allTextContents();
        await page.waitForTimeout(1300);
        assert.deepEqual(await page.locator('.race-player-distance strong').allTextContents(), stoppedDistances, 'both runners stop advancing when their real inputs stop');
      }
      const trace = await page.evaluate(() => window.__runningDouble.emissions);
      assert.ok(trace.some((entry) => entry.kind === 'walk'));
      assert.ok(trace.every((entry) => entry.lifts.every((lift) => lift >= -0.751 && lift <= -0.679)), 'every knee remains far below hip height throughout the movement trace');
      await page.locator('.start-button.is-running').click();
      await page.locator('.end-ride').click();
      await page.getByRole('dialog').waitFor();
      const records = await page.evaluate(() => JSON.parse(localStorage.getItem('forest-pedal-rides') || '[]'));
      assert.equal(records.length, 1);
      assert.equal(records[0].exerciseMode, 'running');
      assert.equal(records[0].playerCount, playerCount);
      assert.ok(records[0].distance > 0, 'gentle running advances actual saved distance, without relying on rounded HUD kilometres');
      if (playerCount === 2) assert.ok(records[0].secondDistance > 0);
      await page.getByRole('button', { name: '關閉視窗', exact: true }).click();
      await page.getByRole('button', { name: '我的紀錄', exact: true }).click();
      await page.getByRole('dialog').waitFor();
      assert.match(await page.locator('.record-row').textContent(), /原地踏步跑步/);
      await page.getByRole('button', { name: '關閉視窗', exact: true }).click();
      await page.setViewportSize({ width: 390, height: 844 });
      await page.waitForTimeout(250);
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'three exercise choices and running world fit the mobile viewport');
      await page.screenshot({ path: join(artifacts, `running-${playerCount}-player-mobile.png`), fullPage: true });
      await page.setViewportSize({ width: 1100, height: 850 });
      await page.getByRole('button', { name: '先試玩看看', exact: true }).click();
      await page.waitForFunction(() => window.__runningDouble.streams.every((stream) => stream.getTracks().every((track) => track.readyState === 'ended')));
      assert.deepEqual(errors, []);
      assert.deepEqual(badResponses, []);
      console.log(`Running TEST DOUBLE passed: ${playerCount} player(s), gentle low knees, hidden ankles, independent movement, stop, fullscreen, mobile, and saved running mode.`);
    } catch (error) {
      await page.screenshot({ path: join(artifacts, `running-${playerCount}-player-failure.png`), fullPage: true }).catch(() => undefined);
      const diagnostics = await page.evaluate(() => ({
        statuses: [...document.querySelectorAll('[data-player-status]')].map((element) => ({ ...element.dataset })),
        speed: document.querySelector('.speed-reading strong')?.textContent,
        activity: document.querySelector('.ride-card canvas[data-activity]')?.dataset.activity,
        emissions: window.__runningDouble?.emissions.slice(-12),
      })).catch(() => undefined);
      console.error(JSON.stringify({ playerCount, diagnostics, errors, badResponses, artifacts }));
      throw error;
    } finally {
      await context.close();
    }
  }
} finally {
  await browser.close();
}
console.log(`Running test-double artifacts: ${artifacts}`);
