import assert from 'node:assert/strict';
import { mkdtemp } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

// This regression deliberately uses a Pose TEST DOUBLE, not a real model or a
// recording of a person. It exercises the production landmark -> motion -> game
// pipeline at 2 fps, with three seconds between completed alternating steps.
// Real model coverage remains in pose-integration and dual-pose-integration.
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const baseURL = process.env.BASE_URL || 'http://127.0.0.1:5173';
const artifacts = await mkdtemp(join(tmpdir(), 'forest-pedal-standing-motion-'));
const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium',
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--enable-webgl', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
});

async function configureTestDouble(context) {
  await context.addInitScript(() => {
    const state = {
      programs: [{ kind: 'still', epoch: 0 }, { kind: 'still', epoch: 0 }],
      instances: [],
      streams: [],
      emissions: [],
      cameraCalls: 0,
    };
    window.__standingDouble = state;

    // An actual MediaStream keeps video.currentTime advancing. Only the camera
    // picture and Pose results are controlled; the application code is intact.
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
        context.fillText('SYNTHETIC TEST CAMERA - NOT A REAL PERSON', 120, 110);
        context.fillText(`Frame ${frame++}`, 120, 160);
      };
      draw();
      const stream = canvas.captureStream(15);
      const timer = setInterval(() => {
        if (stream.getVideoTracks().every((track) => track.readyState === 'ended')) clearInterval(timer);
        else draw();
      }, 66);
      state.streams.push(stream);
      return stream;
    };

    window.Pose = class ControlledPose {
      constructor() {
        this.player = state.instances.filter((instance) => !instance.closed).length;
        this.lastEmission = -Infinity;
        this.closed = false;
        this.programEpoch = null;
        state.instances.push(this);
      }
      setOptions() {}
      initialize() { return Promise.resolve(); }
      onResults(callback) { this.callback = callback; }
      close() { this.closed = true; return Promise.resolve(); }
      send() {
        if (this.closed) return Promise.reject(new Error('A closed test graph was used'));
        const time = performance.now();
        if (time - this.lastEmission < 500) return Promise.resolve();
        this.lastEmission = time;
        const program = state.programs[this.player];
        if (this.programEpoch !== program.epoch) {
          this.programEpoch = program.epoch;
          this.cycleStarted = time;
          this.side = 0;
        }
        const phase = time - this.cycleStarted;
        const side = this.side;
        const completed = phase >= 3000;
        const raised = program.kind !== 'still' && phase >= 1000 && !completed;
        const points = Array.from({ length: 33 }, () => ({ x: 0.5, y: 0.35, z: 0, visibility: 0.99, presence: 0.99 }));
        points[0] = { ...points[0], y: 0.14 };
        points[11] = { ...points[11], x: 0.4, y: 0.27 };
        points[12] = { ...points[12], x: 0.6, y: 0.27 };
        points[23] = { ...points[23], x: 0.44, y: 0.55 };
        points[24] = { ...points[24], x: 0.56, y: 0.55 };
        for (const leg of [0, 1]) {
          const active = raised && leg === side;
          const fullLift = active && program.kind === 'slow';
          const x = leg === 0 ? 0.43 : 0.57;
          points[25 + leg] = { ...points[25 + leg], x, y: fullLift ? 0.52 : active ? 0.74 : 0.82 };
          points[27 + leg] = { ...points[27 + leg], x, y: fullLift ? 0.7 : 0.94, visibility: fullLift ? 0.05 : 0.99 };
          points[31 + leg] = { ...points[31 + leg], x, y: fullLift ? 0.72 : 0.96, visibility: fullLift ? 0.05 : 0.99 };
        }
        const emission = {
          player: this.player + 1, time, epoch: program.epoch, kind: program.kind,
          side, raised, ankleHidden: raised && program.kind === 'slow',
        };
        state.emissions.push(emission);
        this.callback({ poseLandmarks: points });
        // Start the next cycle at the actual observed return, so delayed
        // software WebGL frames cannot shorten the next completed interval.
        if (completed) {
          this.cycleStarted = time;
          this.side = 1 - this.side;
        }
        if (emission.ankleHidden) setTimeout(() => {
          emission.trackingAfterRender = document.querySelector(`[data-player-status="${this.player + 1}"]`)?.getAttribute('data-tracking');
        }, 120);
        return Promise.resolve();
      }
    };
  });
}

async function setPrograms(page, kinds) {
  return page.evaluate((programs) => {
    const epoch = performance.now();
    window.__standingDouble.programs = programs.map((kind) => ({ kind, epoch }));
    return epoch;
  }, kinds);
}

async function reading(page, player) {
  return page.locator(`[data-player-status="${player}"]`).evaluate((element) => ({
    tracking: element.dataset.tracking === 'true',
    cadence: Number(element.dataset.cadence),
    steps: Number(element.dataset.highKnees),
  }));
}

async function waitForSteps(page, player, steps) {
  await page.waitForFunction(({ player, steps }) => {
    const status = document.querySelector(`[data-player-status="${player}"]`);
    return status?.dataset.tracking === 'true'
      && Number(status.dataset.highKnees) >= steps
      && Number(status.dataset.cadence) > 0;
  }, { player, steps }, { timeout: 15000 });
}

async function assertSlowOccludedTrace(page, player, epoch) {
  const trace = await page.evaluate(({ player, epoch }) => window.__standingDouble.emissions
    .filter((entry) => entry.player === player && entry.epoch === epoch), { player, epoch });
  assert.ok(trace.length >= 8, 'the controlled pose emits multiple low-frame-rate samples');
  for (let index = 1; index < trace.length; index++) {
    assert.ok(trace[index].time - trace[index - 1].time >= 480, 'landmark samples arrive at no more than 2 fps');
  }
  const completions = trace.filter((entry, index) => index > 0 && trace[index - 1].raised && !entry.raised);
  assert.ok(completions.length >= 3, 'at least three complete knee raises and returns reach the application');
  for (let index = 1; index < completions.length; index++) {
    assert.ok(completions[index].time - completions[index - 1].time >= 2400, 'completed steps are slower than the previous two-second reset boundary');
    assert.notEqual(completions[index].side, completions[index - 1].side, 'completed steps alternate left and right');
  }
  assert.ok(trace.some((entry) => entry.ankleHidden && entry.trackingAfterRender === 'true'), 'standing remains tracked while the raised ankle is occluded');
}

async function waitForStopped(page, players) {
  await page.waitForFunction((count) => Array.from({ length: count }, (_, index) => index + 1).every((player) => {
    const status = document.querySelector(`[data-player-status="${player}"]`);
    return status?.dataset.tracking === 'true' && Number(status.dataset.cadence) === 0;
  }), players, { timeout: 7500 });
}

try {
  for (const playerCount of [1, 2]) {
    const context = await browser.newContext({ viewport: { width: 1100, height: 800 }, deviceScaleFactor: 0.5 });
    await configureTestDouble(context);
    const errors = [];
    const page = await context.newPage();
    page.on('pageerror', (error) => errors.push(error.message));
    try {
      assert.equal((await page.goto(baseURL, { waitUntil: 'networkidle' }))?.ok(), true);
      await page.getByRole('button', { name: '站姿高抬膝', exact: true }).click();
      if (playerCount === 2) {
        await page.getByRole('button', { name: '雙人競賽', exact: true }).click();
        await page.getByRole('combobox', { name: '競賽距離', exact: true }).selectOption('250');
      }
      await page.getByRole('button', { name: '使用攝影機', exact: true }).click();
      await page.waitForFunction((count) => Array.from({ length: count }, (_, index) => index + 1).every((player) =>
        document.querySelector(`[data-player-status="${player}"]`)?.dataset.tracking === 'true',
      ), playerCount);
      await page.getByRole('button', { name: playerCount === 1 ? '開始騎行' : '開始競賽', exact: true }).click();
      await page.getByRole('button', { name: '暫停一下', exact: true }).waitFor({ timeout: 10000 });

      const firstEpoch = await setPrograms(page, ['slow', 'small']);
      await waitForSteps(page, 1, 1);
      assert.ok((await reading(page, 1)).cadence > 0, 'the first completed high knee can start the bicycle');
      await waitForSteps(page, 1, 3);
      await assertSlowOccludedTrace(page, 1, firstEpoch);
      if (playerCount === 1) {
        assert.ok(Number(await page.locator('.speed-reading strong').textContent()) > 0);
        await page.waitForFunction(() => Number.parseFloat(document.querySelector('.ride-metrics strong')?.textContent || '0') > 0, undefined, { timeout: 5000 });
      } else {
        assert.ok(Number(await page.locator('.race-player-1 .race-player-distance strong').textContent()) > 0);
        assert.equal(await page.locator('.race-player-2 .race-player-distance strong').textContent(), '0', 'small foot movements do not move the other player');
        assert.deepEqual(await reading(page, 2), { tracking: true, cadence: 0, steps: 0 });
      }

      await setPrograms(page, ['still', 'still']);
      await waitForStopped(page, playerCount);
      if (playerCount === 1) {
        assert.equal(await page.locator('.speed-reading strong').textContent(), '0.0');
        const stoppedDistance = await page.locator('.ride-metrics strong').first().textContent();
        const stoppedSteps = (await reading(page, 1)).steps;
        await setPrograms(page, ['small', 'still']);
        await page.waitForTimeout(4000);
        assert.equal(await page.locator('.ride-metrics strong').first().textContent(), stoppedDistance, 'stopped or shallow movements do not advance distance');
        assert.deepEqual(await reading(page, 1), { tracking: true, cadence: 0, steps: stoppedSteps });
      } else {
        const baseline = await page.locator('.race-player-distance strong').allTextContents();
        const steps1 = (await reading(page, 1)).steps;
        const secondEpoch = await setPrograms(page, ['small', 'slow']);
        await waitForSteps(page, 2, 3);
        await assertSlowOccludedTrace(page, 2, secondEpoch);
        assert.equal(await page.locator('.race-player-1 .race-player-distance strong').textContent(), baseline[0], 'player 1 does not inherit player 2 movement');
        assert.ok(Number(await page.locator('.race-player-2 .race-player-distance strong').textContent()) > Number(baseline[1]), 'player 2 independently advances from its own landmarks');
        assert.deepEqual(await reading(page, 1), { tracking: true, cadence: 0, steps: steps1 }, 'player 1 shallow movements produce no extra steps');
        await setPrograms(page, ['still', 'still']);
        await waitForStopped(page, 2);
        const stoppedDistances = await page.locator('.race-player-distance strong').allTextContents();
        await page.waitForTimeout(1200);
        assert.deepEqual(await page.locator('.race-player-distance strong').allTextContents(), stoppedDistances, 'both riders stop advancing after motion ends');
      }
      await page.screenshot({ path: join(artifacts, `standing-${playerCount}-player-test-double.png`), fullPage: true });
      await page.getByRole('button', { name: '暫停一下', exact: true }).click();
      assert.equal(await page.evaluate(() => window.__standingDouble.cameraCalls), 1, 'players share one camera stream');
      assert.deepEqual(errors, [], 'the landmark-to-game pipeline has no uncaught browser errors');
      await page.getByRole('button', { name: '先試玩看看', exact: true }).click();
      await page.waitForFunction(() => window.__standingDouble.streams.every((stream) => stream.getTracks().every((track) => track.readyState === 'ended')));
      console.log(`Standing motion TEST DOUBLE passed: ${playerCount} player(s), 2 fps, >=2.4 s alternating steps, ankle occlusion, real game movement, stop, and shallow-motion rejection.`);
    } catch (error) {
      await page.screenshot({ path: join(artifacts, `standing-${playerCount}-player-failure.png`), fullPage: true }).catch(() => undefined);
      const diagnostics = await page.evaluate(() => ({
        statuses: [...document.querySelectorAll('[data-player-status]')].map((element) => ({ ...element.dataset })),
        speed: document.querySelector('.speed-reading strong')?.textContent,
        distances: [...document.querySelectorAll('.race-player-distance strong')].map((element) => element.textContent),
        emissions: window.__standingDouble?.emissions.slice(-12),
      })).catch(() => undefined);
      console.error(JSON.stringify({ playerCount, diagnostics, errors, artifacts }));
      throw error;
    } finally {
      await context.close();
    }
  }
} finally {
  await browser.close();
}
console.log(`Standing test-double artifacts: ${artifacts}`);
