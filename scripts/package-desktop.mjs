import {
  cp,
  mkdir,
  mkdtemp,
  readFile,
  rm,
  writeFile,
  chmod,
} from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";

const root = fileURLToPath(new URL("..", import.meta.url));
const staging = await mkdtemp(join(tmpdir(), "forest-pedal-desktop-"));
const folder = join(staging, "ForestPedal");
const output = join(root, "exports", "forest-pedal.zip");

try {
  await readFile(join(root, "dist", "index.html"));
  const runtime = join(root, "exports", "runtime");
  execFileSync(
    process.execPath,
    [join(root, "scripts", "prepare-windows-runtime.mjs")],
    { stdio: "inherit" },
  );
  const executable = await readFile(join(runtime, "node.exe"));
  const executableHash = createHash("sha256").update(executable).digest("hex");
  if (
    executableHash !==
    "ba93f9a70bd86fce3ebbb39ec758501458453467aa92a34a0a3602d1e3fc2b9c"
  ) {
    throw new Error(
      "Windows Node.js executable integrity verification failed. Run npm run assets:windows.",
    );
  }
  await mkdir(folder);
  await cp(join(root, "dist"), join(folder, "app"), { recursive: true });
  await cp(runtime, join(folder, "runtime"), { recursive: true });
  await cp(
    join(root, "scripts", "portable-server.cjs"),
    join(folder, "server.cjs"),
  );
  const windows = `@echo off
chcp 65001 >nul
cd /d "%~dp0"
if exist "%~dp0runtime\\node.exe" (
  "%~dp0runtime\\node.exe" "%~dp0server.cjs"
  goto end
)
where node >nul 2>nul
if errorlevel 1 (
  echo 請先安裝 Node.js LTS，再重新開啟此檔案。
  echo 下載網址：https://nodejs.org/zh-tw/download
  pause
  exit /b 1
)
node "%~dp0server.cjs"
:end
pause
`;
  await writeFile(
    join(folder, "start-windows.cmd"),
    windows.replaceAll("\n", "\r\n"),
  );
  const unix = `#!/bin/sh
cd -- "$(dirname -- "$0")" || exit 1
if ! command -v node >/dev/null 2>&1; then
  echo "請先安裝 Node.js LTS：https://nodejs.org/zh-tw/download"
  printf "安裝完成後，重新開啟啟動檔。按 Enter 關閉。"
  read -r reply
  exit 1
fi
node "./server.cjs"
`;
  for (const name of ["start-macos.command", "start-linux.sh"]) {
    await writeFile(join(folder, name), unix);
    await chmod(join(folder, name), 0o755);
  }
  await writeFile(
    join(folder, "README-開啟遊戲.txt"),
    `森森騎旅 — 電腦版

適用 Windows 10/11 64 位元。已附官方 Node.js 執行程式，
Windows 不需要安裝 Node.js，也不需要輸入指令。
Mac/Linux 仍需先安裝 Node.js LTS：https://nodejs.org/zh-tw/download

一、對 ZIP 按右鍵，選「全部解壓縮」。不要在壓縮檔內直接執行。

二、打開解壓縮後的 ForestPedal 資料夾，點兩下啟動檔：
Windows：start-windows.cmd
Mac：start-macos.command
Linux：在終端機執行 ./start-linux.sh

啟動後會自動開啟瀏覽器。終端機視窗請保持開啟。
如果瀏覽器沒有自動開啟，請複製終端機顯示的網址，
在同一台電腦的 Chrome 或 Edge 開啟。

Mac 若提示無法執行 .command，可在終端機切到本資料夾，
執行 node server.cjs 即可。

三、先點「開始騎行」試玩。要實際踩踏，點「使用攝影機」，
允許攝影機權限，將肩膀、髖部、膝蓋和雙腳完整拍進畫面。
坐穩後交替抬腿，持續踩數圈，遊戲便會依節奏加速。
影像只在你的電腦分析，不錄影、不上傳。

四、結束遊戲時，關閉黑色終端機視窗。

備註：這是本機電腦版，網址只供啟動遊戲的這台電腦使用。
不要直接點 app/index.html，也不要將終端機的網址傳給別人。
不同啟動埠會使用不同的瀏覽器紀錄空間。
模型授權與來源在 app/pose/LICENSE 與 provenance.json。
Windows 執行程式授權與來源在 runtime/ 資料夾。
`,
  );
  await mkdir(join(root, "exports"), { recursive: true });
  execFileSync(
    "python3",
    [
      "-c",
      `
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
import sys
source, target = Path(sys.argv[1]), Path(sys.argv[2])
with ZipFile(target, 'w', compression=ZIP_DEFLATED, compresslevel=6) as archive:
    for item in sorted(source.rglob('*')):
        if item.is_file():
            archive.write(item, item.relative_to(source.parent))
with ZipFile(target) as archive:
    broken = archive.testzip()
    if broken:
        raise RuntimeError(f'ZIP integrity check failed: {broken}')
print(f'Packaged {target.stat().st_size:,} bytes to {target}')
`,
      folder,
      output,
    ],
    { stdio: "inherit" },
  );
} finally {
  await rm(staging, { recursive: true, force: true });
}
