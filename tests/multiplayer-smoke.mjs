import assert from 'node:assert/strict';
import { mkdtemp } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const baseURL = process.env.BASE_URL || 'http://127.0.0.1:5173';
const artifacts = await mkdtemp(join(tmpdir(), 'forest-pedal-multiplayer-'));
const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium',
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--enable-webgl', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
});
const context = await browser.newContext({ viewport: { width: 1440, height: 1080 } });
const errors = [];
const badResponses = [];

try {
  await context.addInitScript(() => {
    navigator.mediaDevices.getUserMedia = async () => {
      throw new DOMException('Camera permission denied by test', 'NotAllowedError');
    };
  });
  context.on('response', (response) => {
    if (response.status() >= 400) badResponses.push(`${response.status()} ${response.url()}`);
  });
  const page = await context.newPage();
  page.on('pageerror', (error) => errors.push(error.message));
  assert.equal((await page.goto(baseURL, { waitUntil: 'networkidle' }))?.ok(), true);
  await page.locator('.ride-card').waitFor();
  assert.equal(await page.locator('.pose-camera').count(), 1, 'there is one pose preview and one inference owner');
  assert.equal(await page.locator('.ride-card .scene-camera .pose-camera').count(), 1, 'body tracking lives inside the game view');

  const seated = page.getByRole('button', { name: '坐姿踩踏', exact: true });
  const standing = page.getByRole('button', { name: '站姿高抬膝', exact: true });
  assert.equal(await seated.getAttribute('aria-pressed'), 'true');
  await standing.click();
  assert.equal(await standing.getAttribute('aria-pressed'), 'true');
  assert.match(await page.locator('.game-setup:not(.game-setup-compact)').textContent(), /膝蓋抬到髖部高度/);
  await seated.click();

  await page.evaluate(() => { window.__previewBeforeFullscreen = document.querySelector('.pose-camera'); });
  await page.getByRole('button', { name: '切換全螢幕', exact: true }).click();
  await page.waitForFunction(() => document.fullscreenElement?.classList.contains('ride-card'));
  await page.locator('.scene-camera').waitFor({ state: 'visible' });
  assert.equal(await page.evaluate(() =>
    document.querySelector('.pose-camera') === window.__previewBeforeFullscreen
      && document.querySelectorAll('.pose-camera').length === 1
      && document.fullscreenElement.contains(window.__previewBeforeFullscreen),
  ), true, 'fullscreen retains the same pose component inside the game');
  const cameraBounds = await page.locator('.scene-camera').boundingBox();
  const gameBounds = await page.locator('.ride-card').boundingBox();
  assert.ok(cameraBounds && gameBounds && cameraBounds.x >= gameBounds.x && cameraBounds.y >= gameBounds.y
    && cameraBounds.x + cameraBounds.width <= gameBounds.x + gameBounds.width + 1
    && cameraBounds.y + cameraBounds.height <= gameBounds.y + gameBounds.height + 1,
  'the camera preview remains visible within the fullscreen game');
  await page.getByRole('combobox', { name: '畫面內運動模式', exact: true }).selectOption('standing');
  assert.equal(await page.getByRole('combobox', { name: '畫面內運動模式', exact: true }).inputValue(), 'standing');
  await page.getByRole('combobox', { name: '畫面內運動模式', exact: true }).selectOption('seated');
  await page.screenshot({ path: join(artifacts, 'fullscreen-tracking-preview.png') });
  await page.evaluate(() => document.exitFullscreen());

  await page.getByRole('button', { name: '雙人競賽', exact: true }).click();
  assert.equal(await page.getByRole('button', { name: '雙人競賽', exact: true }).getAttribute('aria-pressed'), 'true');
  await page.getByRole('combobox', { name: '競賽距離', exact: true }).selectOption('50');
  const speed1 = page.getByRole('slider', { name: '示範踩踏速度', exact: true });
  const speed2 = page.getByRole('slider', { name: '玩家 2 示範速度', exact: true });
  await speed1.fill('90');
  await speed2.fill('30');

  await page.getByRole('button', { name: '開始競賽', exact: true }).click();
  await page.locator('.race-countdown').waitFor();
  assert.equal(await page.locator('.race-player-1 .race-player-distance strong').textContent(), '0');
  assert.equal(await page.locator('.race-player-2 .race-player-distance strong').textContent(), '0');
  await page.getByRole('button', { name: /取消倒數/ }).click();
  assert.equal(await page.locator('.race-countdown').count(), 0, 'a cancelled countdown does not start the race');
  const startTime = Date.now();
  await page.getByRole('button', { name: '開始競賽', exact: true }).click();
  await page.getByRole('button', { name: '暫停一下', exact: true }).waitFor({ timeout: 10000 });
  assert.ok(Date.now() - startTime >= 2200, 'both players share the three-second start countdown');
  await page.waitForFunction(() =>
    document.querySelector('.race-player-1 .race-player-speed strong')?.textContent === '25.2'
      && document.querySelector('.race-player-2 .race-player-speed strong')?.textContent === '8.4',
  );
  assert.equal(await seated.isDisabled(), true, 'exercise mode is locked during a race');
  assert.equal(await page.getByRole('combobox', { name: '競賽距離', exact: true }).isDisabled(), true, 'race length is locked during a race');
  await page.waitForFunction(() =>
    Number(document.querySelector('.race-player-1 .race-player-distance strong')?.textContent) >= 4
      && Number(document.querySelector('.race-player-2 .race-player-distance strong')?.textContent) > 0,
  );
  assert.ok(Number(await page.locator('.race-player-1 .race-player-distance strong').textContent())
    > Number(await page.locator('.race-player-2 .race-player-distance strong').textContent()), 'different cadences advance riders independently');
  await page.getByRole('button', { name: '暫停一下', exact: true }).click();
  const pausedDistances = await page.locator('.race-player-distance strong').allTextContents();
  const pausedTime = await page.locator('.ride-metrics strong').nth(1).textContent();
  await page.waitForTimeout(1000);
  assert.deepEqual(await page.locator('.race-player-distance strong').allTextContents(), pausedDistances, 'pause freezes both riders');
  assert.equal(await page.locator('.ride-metrics strong').nth(1).textContent(), pausedTime);
  await seated.click();
  await page.getByRole('button', { name: '雙人競賽', exact: true }).click();
  await page.getByRole('combobox', { name: '競賽距離', exact: true }).selectOption('50');
  assert.deepEqual(await page.locator('.race-player-distance strong').allTextContents(), pausedDistances, 'choosing the currently selected exercise, player count, and distance keeps a paused race intact');
  assert.equal(await page.locator('.ride-metrics strong').nth(1).textContent(), pausedTime, 'same-setting clicks retain elapsed time');
  assert.equal(await page.evaluate(() => JSON.parse(localStorage.getItem('forest-pedal-rides') || '[]').length), 0, 'same-setting clicks do not save or restart the paused race');
  await page.screenshot({ path: join(artifacts, 'dual-race-paused.png'), fullPage: true });
  await page.getByRole('button', { name: '繼續騎行', exact: true }).click();
  await page.getByRole('dialog').waitFor({ timeout: 20000 });
  assert.match(await page.locator('.race-result-inline strong').textContent(), /玩家 1 獲勝/);
  let records = await page.evaluate(() => JSON.parse(localStorage.getItem('forest-pedal-rides') || '[]'));
  assert.equal(records.length, 1);
  assert.equal(records[0].winner, 1);
  assert.equal(records[0].playerCount, 2);
  assert.equal(records[0].exerciseMode, 'seated');
  assert.ok(Math.abs(records[0].distance - 0.05) < 0.0001);
  assert.ok(Math.abs(records[0].secondDistance - 0.05 / 3) < 0.0005, 'losing rider distance is recorded at the same finish instant');

  await page.getByRole('button', { name: '關閉視窗', exact: true }).click();
  await page.getByRole('button', { name: '結束旅程', exact: true }).click();
  assert.equal(await page.evaluate(() => JSON.parse(localStorage.getItem('forest-pedal-rides') || '[]').length), 1, 'reopening race results never duplicates saved records');
  await page.getByRole('button', { name: '開始一段新旅程', exact: true }).click();
  await standing.click();
  await speed1.fill('0');
  await speed2.fill('90');
  await page.getByRole('button', { name: '開始競賽', exact: true }).click();
  await page.getByRole('button', { name: '暫停一下', exact: true }).waitFor({ timeout: 10000 });
  await page.waitForFunction(() => Number(document.querySelector('.race-player-2 .race-player-distance strong')?.textContent) > 0);
  assert.equal(await page.locator('.race-player-1 .race-player-distance strong').textContent(), '0', 'a stationary player does not inherit the other player cadence');
  await page.getByRole('dialog').waitFor({ timeout: 20000 });
  assert.match(await page.locator('.race-result-inline strong').textContent(), /玩家 2 獲勝/);
  records = await page.evaluate(() => JSON.parse(localStorage.getItem('forest-pedal-rides') || '[]'));
  assert.equal(records.length, 2);
  assert.equal(records[0].winner, 2);
  assert.equal(records[0].exerciseMode, 'standing');
  assert.equal(records[0].distance, 0);
  assert.ok(Math.abs(records[0].secondDistance - 0.05) < 0.0001);
  await page.getByRole('button', { name: '關閉視窗', exact: true }).click();

  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(250);
  const mobile = await page.evaluate(() => ({ width: innerWidth, content: document.documentElement.scrollWidth }));
  assert.ok(mobile.content <= mobile.width, `dual-player mobile layout has no horizontal overflow (${mobile.content} > ${mobile.width})`);
  await page.screenshot({ path: join(artifacts, 'dual-race-mobile.png'), fullPage: true });
  await page.setViewportSize({ width: 1440, height: 1080 });
  await page.getByRole('button', { name: '使用攝影機', exact: true }).click();
  await page.getByRole('alert').waitFor();
  assert.match(await page.getByRole('alert').textContent(), /權限|允許/);
  assert.equal(await page.getByRole('button', { name: '開始競賽', exact: true }).isDisabled(), true, 'camera races require both people to be recognized');
  assert.deepEqual(errors, [], 'no uncaught browser errors');
  assert.deepEqual(badResponses, [], 'all app and scene assets are available');
  console.log('Multiplayer smoke passed: modes, fullscreen pose preview, countdown/cancel, independent speeds/distances, pause, both winners, record persistence, mobile layout, and camera gating.');
  console.log(`Multiplayer screenshots: ${artifacts}`);
} finally {
  await context.close();
  await browser.close();
}
