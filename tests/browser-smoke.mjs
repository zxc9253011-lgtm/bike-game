import assert from "node:assert/strict";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const baseURL = process.env.BASE_URL || "http://127.0.0.1:5173";
const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || "/usr/bin/chromium",
  headless: true,
  args: [
    "--no-sandbox",
    "--enable-webgl",
    "--use-gl=angle",
    "--use-angle=swiftshader",
    "--enable-unsafe-swiftshader",
    "--disable-dev-shm-usage",
  ],
});
const context = await browser.newContext({
  viewport: { width: 1440, height: 1080 },
});
const errors = [];

try {
  // Permission failure is deterministic and must remain useful without a camera.
  await context.addInitScript(() => {
    Object.defineProperty(navigator.mediaDevices, "getUserMedia", {
      configurable: true,
      value: async () => {
        throw new DOMException(
          "Camera permission denied by test",
          "NotAllowedError",
        );
      },
    });
  });
  const page = await context.newPage();
  page.on("pageerror", (error) => errors.push(error.message));
  const response = await page.goto(baseURL, { waitUntil: "networkidle" });
  assert.equal(response?.ok(), true, "the application loads successfully");
  await page.getByRole("heading", { name: "坐著動，也能去遠方。" }).waitFor();
  await page.locator(".ride-card canvas").first().waitFor();
  assert.equal(
    await page.locator(".speed-reading strong").textContent(),
    "0.0",
  );

  await page.getByRole("button", { name: "開始騎行", exact: true }).click();
  await page.waitForFunction(
    () =>
      Number(document.querySelector(".speed-reading strong")?.textContent) > 0,
  );
  await page.waitForFunction(
    () => {
      const metrics = document.querySelectorAll(".ride-metrics strong");
      return (
        Number.parseFloat(metrics[0]?.textContent || "0") > 0 &&
        metrics[1]?.textContent !== "00:00"
      );
    },
    undefined,
    { timeout: 12000 },
  );

  const speedBefore = Number(
    await page.locator(".speed-reading strong").textContent(),
  );
  await page.getByRole("slider", { name: "示範踩踏速度" }).fill("80");
  await page.waitForFunction(
    () =>
      document.querySelector(".speed-reading strong")?.textContent === "22.4",
  );
  assert.ok(
    Number(await page.locator(".speed-reading strong").textContent()) >
      speedBefore,
    "faster cadence makes the rider faster",
  );
  assert.match(
    await page.locator(".cadence-reading strong").textContent(),
    /^80/,
  );

  await page.getByRole("button", { name: "暫停一下", exact: true }).click();
  const distanceAtPause = await page
    .locator(".ride-metrics strong")
    .first()
    .textContent();
  const timeAtPause = await page
    .locator(".ride-metrics strong")
    .nth(1)
    .textContent();
  await page.waitForTimeout(1200);
  assert.equal(
    await page.locator(".ride-metrics strong").first().textContent(),
    distanceAtPause,
    "pause freezes accumulated distance",
  );
  assert.equal(
    await page.locator(".ride-metrics strong").nth(1).textContent(),
    timeAtPause,
    "pause freezes ride time",
  );
  assert.equal(
    await page.locator(".speed-reading strong").textContent(),
    "0.0",
  );

  const coastRoute = page.getByRole("button", { name: /蔚藍海岸 沿著海岸線/ });
  await coastRoute.click();
  await page
    .getByRole("heading", { name: "蔚藍海岸", level: 2, exact: true })
    .waitFor();
  assert.equal(await coastRoute.getAttribute("aria-pressed"), "true");
  assert.equal(
    await page.locator(".ride-card.route-coast").count(),
    1,
    "selected route reaches the 3D scene container",
  );
  await page.getByRole("button", { name: "結束旅程", exact: true }).click();
  await page
    .getByRole("dialog")
    .getByText("旅程已儲存", { exact: true })
    .waitFor();
  const saved = await page.evaluate(() =>
    JSON.parse(localStorage.getItem("forest-pedal-rides") || "[]"),
  );
  assert.equal(saved.length, 1);
  assert.equal(saved[0].route, "蔚藍海岸");
  assert.ok(saved[0].seconds > 0 && saved[0].distance > 0);
  await page.getByRole("button", { name: "關閉視窗", exact: true }).click();
  await page.getByRole("button", { name: "我的紀錄", exact: true }).click();
  await page.locator(".record-row").waitFor();
  assert.match(await page.locator(".record-row").textContent(), /蔚藍海岸/);
  await page.getByRole("button", { name: "關閉視窗", exact: true }).click();

  await page.getByRole("button", { name: "結束旅程", exact: true }).click();
  await page.getByRole("dialog").waitFor();
  assert.equal(await page.evaluate(() => JSON.parse(localStorage.getItem("forest-pedal-rides") || "[]").length), 1, "reopening a finished ride does not save duplicate records");
  await page.getByRole("button", { name: "關閉視窗", exact: true }).click();

  await page.getByRole("button", { name: "使用攝影機", exact: true }).click();
  await page.getByRole("alert").waitFor();
  assert.match(await page.getByRole("alert").textContent(), /權限|允許/);
  await page.getByRole("button", { name: "重新連線", exact: true }).waitFor();
  await page.getByRole("button", { name: "先試玩看看", exact: true }).click();
  await page.getByRole("slider", { name: "示範踩踏速度" }).waitFor();

  await page.getByRole("button", { name: "騎行設定", exact: true }).first().click();
  await page.getByRole("switch", { name: "友善大字模式", exact: true }).click();
  await page.getByRole("combobox", { name: "設定騎行目標", exact: true }).selectOption("10");
  await page.getByRole("button", { name: "設定完成", exact: true }).click();
  assert.equal(await page.locator(".app-shell.large-text").count(), 1, "large text setting changes the interface");
  assert.equal(await page.getByRole("combobox", { name: "騎行時間目標", exact: true }).inputValue(), "10");

  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(300);
  const layout = await page.evaluate(() => ({
    width: window.innerWidth,
    content: document.documentElement.scrollWidth,
  }));
  assert.ok(
    layout.content <= layout.width,
    `mobile layout must not overflow horizontally (${layout.content} > ${layout.width})`,
  );
  assert.deepEqual(
    errors,
    [],
    `no uncaught browser errors: ${errors.join(", ")}`,
  );
  console.log(
    "Browser smoke passed: ride, cadence, pause, routes, records, camera permission, and mobile layout.",
  );
} finally {
  await context.close();
  await browser.close();
}
