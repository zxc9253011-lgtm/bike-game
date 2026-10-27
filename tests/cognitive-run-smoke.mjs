import assert from 'node:assert/strict';
import { mkdtemp } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { cognitiveRow } from '../src/lib/cognitiveRun.ts';

// Gameplay uses the actual application timer, demo running speed and distance
// crossings. Only the final hand-gesture scenario supplies a clearly labelled
// camera/Pose TEST DOUBLE; no App state, score or game-engine result is injected.
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const baseURL = process.env.BASE_URL || 'http://127.0.0.1:5173';
const artifacts = await mkdtemp(join(tmpdir(), 'forest-pedal-cognitive-'));
const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium',
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
});

const laneNames = ['左道', '中道', '右道'];
function card(page, player = 1) {
  return page.locator('[data-cognitive-player="' + player + '"]');
}
function laneButton(page, player, lane) {
  return page.getByRole('button', { name: '玩家 ' + player + ' ' + laneNames[lane + 1], exact: true });
}
async function rowFor(page, index, player = 1) {
  const raw = await card(page, player).getAttribute('data-cognitive-seed');
  assert.notEqual(raw, null, 'the visible layout carries its session seed');
  const seed = Number(raw);
  assert.ok(Number.isInteger(seed), 'each HUD exposes its session seed for consistent preview and collision checks');
  return cognitiveRow(index, player - 1, seed);
}
function laneFor(row, result) {
  const item = row.items.find((item) => result === 'bomb' ? item.kind === 'bomb'
    : result === 'coin' ? item.kind === row.target : item.kind !== row.target && item.kind !== 'bomb');
  assert.ok(item, 'each row has a requested coin, another coin, and an avoidable bomb');
  return item.lane;
}
async function stats(page, player = 1) {
  return card(page, player).evaluate((element) => {
    const metric = (name) => Number.parseFloat(
      element.querySelector('[data-cognitive-metric="' + name + '"]')?.textContent.replace(/[^\d.-]/g, '') || '0',
    );
    return {
      lane: Number(element.dataset.lane),
      choices: Number(element.dataset.nextRow),
      coins: metric('coins'),
      avoided: metric('avoided'),
      bombHits: metric('bomb-hits'),
      score: metric('score'),
      target: element.querySelector('[data-cognitive-target]')?.getAttribute('data-cognitive-target'),
    };
  });
}
async function choose(page, player, lane) {
  await laneButton(page, player, lane).click();
  await assertLane(page, player, lane);
}
async function assertLane(page, player, lane) {
  await page.waitForFunction(({ player, lane }) => {
    const hud = document.querySelector('[data-cognitive-player="' + player + '"]');
    const lanes = document.querySelector('.ride-scene canvas')?.dataset.lanes?.split(',');
    return Number(hud?.dataset.lane) === lane && Number(lanes?.[player - 1]) === lane;
  }, { player, lane });
  assert.equal(await laneButton(page, player, lane).getAttribute('aria-pressed'), 'true');
}
async function crossed(page, player, row) {
  await page.waitForFunction(({ player, row }) =>
    Number(document.querySelector('[data-cognitive-player="' + player + '"]')?.dataset.nextRow) > row,
  { player, row }, { timeout: 14000 });
}
async function start(page) {
  await page.locator('.start-button').click();
  await page.locator('.start-button.is-running').waitFor({ timeout: 10000 });
}
async function pause(page) {
  const button = page.locator('.start-button.is-running');
  if (await button.count()) await button.click();
  await page.waitForTimeout(200);
}
async function endRide(page) {
  await pause(page);
  await page.getByRole('button', { name: '結束旅程', exact: true }).click();
  await page.getByRole('dialog').waitFor();
  return page.evaluate(() => JSON.parse(localStorage.getItem('forest-pedal-rides') || '[]'));
}
async function closeDialog(page) {
  await page.getByRole('button', { name: '關閉視窗', exact: true }).click();
}

async function withPage(name, run, cameraDouble = false) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1080 }, deviceScaleFactor: 0.5 });
  if (cameraDouble) await installGestureDouble(context);
  const page = await context.newPage();
  const errors = [];
  const badResponses = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('response', (response) => {
    if (response.status() >= 400) badResponses.push(response.status() + ' ' + response.url());
  });
  try {
    assert.equal((await page.goto(baseURL, { waitUntil: 'networkidle' }))?.ok(), true);
    await page.getByRole('button', { name: '原地踏步跑步', exact: true }).click();
    await page.locator('.ride-scene canvas[data-activity="running"]').waitFor();
    await run(page);
    assert.deepEqual(errors, [], name + ': no browser exceptions');
    assert.deepEqual(badResponses, [], name + ': all local assets load');
    await page.screenshot({ path: join(artifacts, name + '.png'), fullPage: true });
    console.log('Cognitive gameplay passed: ' + name + '.');
  } catch (error) {
    await page.screenshot({ path: join(artifacts, name + '-failure.png'), fullPage: true }).catch(() => undefined);
    const diagnostics = await page.evaluate(() => ({
      cards: [...document.querySelectorAll('[data-cognitive-player]')].map((element) => ({
        data: { ...element.dataset }, text: element.textContent,
      })),
      scene: { ...document.querySelector('.ride-scene canvas')?.dataset },
      running: !!document.querySelector('.start-button.is-running'),
      records: localStorage.getItem('forest-pedal-rides'),
    })).catch(() => undefined);
    console.error(JSON.stringify({ name, diagnostics, errors, badResponses, artifacts }));
    throw error;
  } finally {
    await context.close();
  }
}

async function installGestureDouble(context) {
  await context.addInitScript(() => {
    const state = { hand: 'down', cameraCalls: 0, streams: [] };
    window.__coinGesture = state;
    navigator.mediaDevices.getUserMedia = async () => {
      state.cameraCalls += 1;
      const canvas = document.createElement('canvas');
      canvas.width = 960;
      canvas.height = 720;
      const context = canvas.getContext('2d');
      let frame = 0;
      const draw = () => {
        context.fillStyle = '#233b44';
        context.fillRect(0, 0, 960, 720);
        context.fillStyle = '#d8e9df';
        context.font = '24px sans-serif';
        context.fillText('GESTURE TEST DOUBLE — NOT A REAL PERSON', 70, 100);
        context.fillText('Camera frame ' + frame++, 70, 145);
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
      setOptions() {}
      initialize() { return Promise.resolve(); }
      onResults(callback) { this.callback = callback; }
      close() { return Promise.resolve(); }
      send() {
        const points = Array.from({ length: 33 }, () => ({ x: 0.5, y: 0.35, visibility: 0.99 }));
        points[0] = { x: 0.5, y: 0.14, visibility: 0.99 };
        points[11] = { x: 0.4, y: 0.27, visibility: 0.99 };
        points[12] = { x: 0.6, y: 0.27, visibility: 0.99 };
        points[23] = { x: 0.44, y: 0.55, visibility: 0.99 };
        points[24] = { x: 0.56, y: 0.55, visibility: 0.99 };
        points[25] = { x: 0.43, y: 0.76, visibility: 0.99 };
        points[26] = { x: 0.57, y: 0.76, visibility: 0.99 };
        points[27] = { x: 0.43, y: 0.94, visibility: 0.05 };
        points[28] = { x: 0.57, y: 0.94, visibility: 0.05 };
        points[15] = { x: 0.32, y: state.hand === 'left' || state.hand === 'both' ? 0.2 : 0.65, visibility: 0.99 };
        points[16] = { x: 0.68, y: state.hand === 'right' || state.hand === 'both' ? 0.2 : 0.65, visibility: 0.99 };
        this.callback({ poseLandmarks: points });
        return Promise.resolve();
      }
    };
  });
}

try {
  const selected = process.env.COGNITIVE_SCENARIO;
  if (!selected || selected === 'layout') for (const playerCount of [1, 2]) {
    await withPage(`layout-${playerCount}`, async (page) => {
      if (playerCount === 2) await page.getByRole('button', { name: '雙人競賽', exact: true }).click();
      await page.setViewportSize({ width: 390, height: 844 });
      await start(page);
      await page.waitForTimeout(500);
      await pause(page);
      await page.locator('.end-ride').click({ trial: true });
      await page.getByRole('button', { name: '切換全螢幕', exact: true }).click();
      await page.waitForFunction(() => !!document.fullscreenElement);
      await page.locator('.end-ride').click({ trial: true });
      for (let player = 1; player <= playerCount; player++) await choose(page, player, -1);
      const controls = await page.locator('.cognitive-controls').boundingBox();
      const setup = await page.locator('.scene-fullscreen-setup').boundingBox();
      assert.ok(controls && setup && controls.y + controls.height <= setup.y + 1, 'paused phone lane controls leave the fullscreen settings fully accessible');
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
      await page.screenshot({ path: join(artifacts, `phone-fullscreen-${playerCount}.png`) });
      await page.evaluate(() => document.exitFullscreen());
    });
  }
  if (!selected || selected === 'single') await withPage('single', async (page) => {
    const toggle = page.getByRole('switch', { name: '專注小遊戲', exact: true });
    assert.equal(await toggle.getAttribute('aria-checked'), 'true', 'running enables the cognitive game by default');
    assert.equal((await stats(page)).target, (await rowFor(page, 0, 1)).target);
    await toggle.click();
    await page.locator('.ride-scene canvas[data-cognitive-game="false"]').waitFor();
    assert.equal(await card(page).count(), 0, 'disabled gameplay hides targets and lane controls');
    await toggle.click();
    await page.locator('.ride-scene canvas[data-cognitive-game="true"]').waitFor();
    assert.equal((await stats(page)).choices, 0);
    const slider = page.getByRole('slider', { name: '示範踩踏速度', exact: true });
    await slider.fill('90');
    await page.keyboard.press('a');
    assert.equal((await stats(page)).lane, 0, 'typing while a form control has focus does not steer');
    await choose(page, 1, laneFor((await rowFor(page, 0, 1)), 'coin'));
    await start(page);
    assert.equal(await toggle.isDisabled(), true, 'an active game cannot be reset accidentally by its setup switch');
    await crossed(page, 1, 0);
    let result = await stats(page);
    assert.equal(result.coins, 1);
    assert.equal(result.avoided, 1);
    assert.equal(result.score, 13);
    await pause(page);
    const frozen = await stats(page);
    await page.waitForTimeout(1300);
    assert.deepEqual(await stats(page), frozen, 'pausing freezes every resolved choice and score');
    await choose(page, 1, laneFor((await rowFor(page, 1, 1)), 'bomb'));
    await start(page);
    await crossed(page, 1, 1);
    result = await stats(page);
    assert.equal(result.bombHits, 1);
    assert.equal(result.coins, 1);
    assert.equal(result.score, 13, 'a bomb does not remove previously earned points');
    assert.equal(await page.locator('.start-button.is-running').count(), 1, 'a bomb gives feedback rather than ending the workout');
    assert.equal(await page.locator('.speed-reading [data-metric="speed"]').textContent(), '12.0', 'a bomb does not impair the exercise-controlled speed');
    const wrongLane = laneFor((await rowFor(page, 2, 1)), 'wrong');
    await page.keyboard.press(['a', 's', 'd'][wrongLane + 1]);
    await assertLane(page, 1, wrongLane);
    await crossed(page, 1, 2);
    assert.equal((await stats(page)).coins, 1, 'the wrong coin type is not rewarded as a requested coin');
    const correctLane = laneFor((await rowFor(page, 3, 1)), 'coin');
    await page.keyboard.press('ArrowDown');
    if (correctLane !== 0) await page.keyboard.press(correctLane < 0 ? 'ArrowLeft' : 'ArrowRight');
    await assertLane(page, 1, correctLane);
    await crossed(page, 1, 3);
    assert.equal((await stats(page)).target, (await rowFor(page, 4, 1)).target, 'the requested shape changes after four real row crossings');
    assert.notEqual((await rowFor(page, 4, 1)).target, (await rowFor(page, 0, 1)).target);
    await choose(page, 1, laneFor((await rowFor(page, 4, 1)), 'coin'));
    await crossed(page, 1, 4);
    const records = await endRide(page);
    assert.equal(records.length, 1);
    assert.equal(records[0].exerciseMode, 'running');
    assert.ok(records[0].distance * 1000 >= (await rowFor(page, 4, 1)).distance);
    assert.deepEqual(records[0].cognitive[0], {
      coins: 3, avoided: 3, bombHits: 1, wrongCoins: 1, choices: 5, score: 39, accuracy: 60,
    });
    await page.locator('[data-cognitive-result-player="1"]').waitFor();
    await page.getByRole('button', { name: '開始一段新旅程', exact: true }).click();
    result = await stats(page);
    assert.deepEqual({ coins: result.coins, choices: result.choices, bombHits: result.bombHits, score: result.score, lane: result.lane },
      { coins: 0, choices: 0, bombHits: 0, score: 0, lane: 0 }, 'a new journey starts with a fresh game');
    await page.reload({ waitUntil: 'networkidle' });
    await page.getByRole('button', { name: '我的紀錄', exact: true }).click();
    await page.getByRole('dialog').waitFor();
    assert.match(await page.locator('.record-row').textContent(), /金幣|專注|辨識/, 'saved cognitive results are visible after reloading');
    assert.equal(await page.evaluate(() => JSON.parse(localStorage.getItem('forest-pedal-rides') || '[]')[0].cognitive[0].score), 39);
    await closeDialog(page);
    await page.getByRole('button', { name: '原地踏步跑步', exact: true }).click();
    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForTimeout(250);
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'the cognitive game fits a phone viewport');
    for (const lane of [-1, 0, 1]) assert.equal(await laneButton(page, 1, lane).isVisible(), true);
  });

  if (!selected || selected === 'dual') await withPage('dual', async (page) => {
    await page.getByRole('button', { name: '雙人競賽', exact: true }).click();
    await page.getByRole('combobox', { name: '競賽距離', exact: true }).selectOption('500');
    await page.getByRole('slider', { name: '示範踩踏速度', exact: true }).fill('90');
    await page.getByRole('slider', { name: '玩家 2 示範速度', exact: true }).fill('90');
    await choose(page, 1, laneFor((await rowFor(page, 0, 1)), 'coin'));
    await choose(page, 2, laneFor((await rowFor(page, 0, 2)), 'bomb'));
    await start(page);
    await crossed(page, 1, 0);
    await crossed(page, 2, 0);
    await pause(page);
    assert.equal((await stats(page, 1)).coins, 1);
    assert.equal((await stats(page, 1)).bombHits, 0);
    assert.equal((await stats(page, 2)).coins, 0);
    assert.equal((await stats(page, 2)).bombHits, 1, 'each player resolves the object in their own lane');
    const before = [await stats(page, 1), await stats(page, 2)];
    await page.waitForTimeout(1100);
    assert.deepEqual([await stats(page, 1), await stats(page, 2)], before, 'both players pause together without resolving another row');
    await choose(page, 1, laneFor((await rowFor(page, 1, 1)), 'wrong'));
    const secondLane = laneFor((await rowFor(page, 1, 2)), 'coin');
    await page.locator('.scene-location h2').click();
    await page.keyboard.press(['j', 'k', 'l'][secondLane + 1]);
    await assertLane(page, 2, secondLane);
    await start(page);
    await crossed(page, 1, 1);
    await crossed(page, 2, 1);
    const records = await endRide(page);
    assert.equal(records[0].playerCount, 2);
    assert.equal(records[0].cognitive[0].coins, 1);
    assert.equal(records[0].cognitive[0].wrongCoins, 1);
    assert.equal(records[0].cognitive[0].bombHits, 0);
    assert.equal(records[0].cognitive[1].coins, 1);
    assert.equal(records[0].cognitive[1].bombHits, 1);
    assert.equal(records[0].cognitive[1].wrongCoins, 0);
    assert.ok(Math.abs(records[0].distance - records[0].secondDistance) < 0.00001, 'a bomb never changes the independent distance race');
    await page.locator('[data-cognitive-result-player="1"]').waitFor();
    await page.locator('[data-cognitive-result-player="2"]').waitFor();
    await closeDialog(page);
    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForTimeout(250);
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    for (const player of [1, 2]) for (const lane of [-1, 0, 1]) {
      assert.equal(await laneButton(page, player, lane).isVisible(), true, 'both players keep accessible mobile lane buttons');
    }
  });

  if (!selected || selected === 'gestures') await withPage('gestures', async (page) => {
    await page.getByRole('button', { name: '使用攝影機', exact: true }).click();
    await page.waitForFunction(() => document.querySelector('[data-player-status="1"]')?.dataset.tracking === 'true');
    await start(page);
    await page.waitForTimeout(600);
    await choose(page, 1, 1);
    await page.evaluate(() => { window.__coinGesture.hand = 'left'; });
    await assertLane(page, 1, 0);
    await page.waitForTimeout(1100);
    await assertLane(page, 1, 0, 'holding one raised hand must not keep changing lanes');
    await page.evaluate(() => { window.__coinGesture.hand = 'down'; });
    await page.waitForTimeout(600);
    await page.evaluate(() => { window.__coinGesture.hand = 'left'; });
    await assertLane(page, 1, -1);
    await page.evaluate(() => { window.__coinGesture.hand = 'down'; });
    await page.waitForTimeout(600);
    await page.evaluate(() => { window.__coinGesture.hand = 'right'; });
    await assertLane(page, 1, 0);
    await page.evaluate(() => { window.__coinGesture.hand = 'down'; });
    await page.waitForTimeout(600);
    await page.evaluate(() => { window.__coinGesture.hand = 'both'; });
    await page.waitForTimeout(900);
    await assertLane(page, 1, 0, 'ambiguous two-hand movement does not make an arbitrary choice');
    assert.equal(await page.locator('[data-player-status="1"]').getAttribute('data-steps'), '0', 'steering alone never invents marching steps');
    assert.equal((await stats(page)).choices, 0, 'without footsteps there is no approach or automatic scoring');
    await pause(page);
    await page.evaluate(() => {
      window.__cognitiveFullscreen = {
        video: document.querySelector('.pose-video'), overlay: document.querySelector('.pose-overlay'),
        stream: document.querySelector('.pose-video').srcObject,
      };
    });
    await page.getByRole('button', { name: '切換全螢幕', exact: true }).click();
    await page.waitForFunction(() => !!document.fullscreenElement);
    assert.equal(await page.evaluate(() => {
      const probe = window.__cognitiveFullscreen;
      return document.fullscreenElement.contains(document.querySelector('[data-cognitive-player="1"]'))
        && document.fullscreenElement.contains(document.querySelector('.scene-camera'))
        && probe.video === document.querySelector('.pose-video') && probe.overlay === document.querySelector('.pose-overlay')
        && probe.stream === document.querySelector('.pose-video').srcObject && window.__coinGesture.cameraCalls === 1;
    }), true, 'fullscreen retains targets, controls, and the same live camera');
    await choose(page, 1, 1);
    await page.screenshot({ path: join(artifacts, 'cognitive-fullscreen-camera.png') });
    await page.evaluate(() => document.exitFullscreen());
    await page.getByRole('button', { name: '先試玩看看', exact: true }).click();
    await page.waitForFunction(() => window.__coinGesture.streams.every((stream) => stream.getTracks().every((track) => track.readyState === 'ended')));
  }, true);
} finally {
  await browser.close();
}
console.log('Cognitive gameplay screenshots: ' + artifacts);
