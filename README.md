# 森森騎旅

坐著踩空中腳踏車，也能騎進 3D 風景。以 React、TypeScript、Three.js 與本機 MediaPipe Pose 製作，介面為繁體中文。

## 直接在瀏覽器玩

網頁版網址為 **https://zxc9253011-lgtm.github.io/bike-game/**。程式庫首次需在 [Settings → Pages](https://github.com/zxc9253011-lgtm/bike-game/settings/pages) 選擇 **Deploy from a branch → gh-pages → / (root) → Save**，待 GitHub 發布完成後即可直接遊玩，無須下載或安裝。使用攝影機時，請允許瀏覽器權限。

`main` 保存原始碼，`gh-pages` 保存編譯後的靜態網站，`downloads` 保存先前的 Windows 下載版。更新網頁版可執行 `npm run publish:pages`；此指令會建置並推送網站至 GitHub，請只在已取得發布授權時執行。

GitHub Pages 建置使用 `/bike-game/` 子路徑，圖片與本機姿態辨識資產會一起依此路徑載入；一般開發與 Windows 版仍使用根路徑。

## Windows 下載版

開發者執行 `npm run package:desktop` 可產生 `exports/forest-pedal.zip`。完整解壓縮後，使用者點兩下 `ForestPedal/start-windows.cmd` 即可自動開啟遊戲。Windows 10/11 64 位元版已包含經官方 SHA256 校驗的 Node.js 執行程式，不需自行安裝 Node.js 或輸入指令。黑色啟動視窗需保持開啟，結束遊戲時再關閉。請勿直接開啟 `app/index.html`。

打包需要 Node.js、Python 3 與 curl。首次打包會由官方 nodejs.org 下載固定版本的 Windows 執行程式；來源、校驗及授權保存在壓縮檔的 `runtime/` 內。若要重建 Windows 執行程式快取，執行 `npm run assets:windows`。Mac/Linux 的附贈啟動檔仍需要電腦先安裝 Node.js。

## 開始使用

需要 Node.js 22.18 以上及支援 WebGL 的現代瀏覽器。

```sh
npm ci --cache /tmp/bike-game-npm-cache
npm run dev
```

1. 選擇森林、海岸或暖陽山丘。
2. 可以先用「先試玩看看」，按「開始騎行」後拖動速度滑桿。
3. 真正運動時，選「使用攝影機」並允許權限。鏡頭需完整拍到肩部、髖部、膝蓋及腳踝。
4. 坐穩後交替抬腿，持續踩踏數圈；角色會依推估的完整踩踏頻率前進。停止或失去辨識時速度會歸零。
5. 按「結束旅程」儲存虛擬里程與騎行時間。紀錄僅存在目前瀏覽器的 localStorage。設定內可開啟友善大字模式與輕柔環境音。

攝影機需要 **HTTPS 或 localhost**。遠端測試請使用 HTTPS；單純以區網 HTTP 開啟，瀏覽器通常不會提供攝影機權限。請在有足夠活動空間、穩固且有靠背的椅子上使用，並以個人舒適程度為準。

## 建置與驗證

```sh
npm run build
npm test
# 先在另一個終端執行 npm run dev
npm run test:browser
```

瀏覽器測試預設使用 `/usr/bin/chromium`；其他位置可設定 `CHROMIUM_PATH`，測試目標可設定 `BASE_URL`。測試涵蓋開始、速度變化、暫停、路線切換、儲存紀錄、攝影機拒絕權限與手機版面。8 項單元測試涵蓋 30／60／90 rpm、靜止雜訊、停止與重設。

```sh
# 選用：實際本機模型與攝影機流程整合測試
# 需要 Git、ffmpeg、Chromium，並會下載官方測試圖片至 /tmp。
npm run test:pose
```

## 動作分析與隱私

- 模型使用官方 `@mediapipe/pose@0.5.1675469404` 的 Lite 模式，資產隨專案保存在 `public/pose/`，不依賴執行時 CDN。
- 攝影機只有在使用者選取攝影機模式後才啟動；切回示範模式即停止影像串流並釋放模型。
- 即時影像與關節座標只在瀏覽器處理，不錄影、不上傳、不存入運動紀錄。
- 依腿部與軀幹的相對位置估計左右交替運動，用遲滯、平滑與週期中位數計算完整踩踏 rpm。靜止雜訊、關節不在畫面內或低辨識信心時不會推動角色。
- 里程為遊戲模擬值，速度對應為 `rpm × 0.28 km/h`，並非實際車速或醫療量測。攝影機角度、衣著、照明與遮擋會影響辨識，實際長者使用仍需在裝置上試踩並調整位置。

資產來源、版本與 SHA 校驗記錄於 `public/pose/provenance.json`，授權見 `public/pose/LICENSE`。需要重建模型資產時：

```sh
npm run assets:pose
```

此指令從官方 npm 來源取得固定版本，驗證完整 SHA512 後再解壓縮，保留正常 TLS 驗證。3D 世界、騎行角色與路線縮圖皆由專案程式與 SVG 產生。

## 專案結構

- `src/App.tsx`：遊戲狀態、速度、計時、目標與本機紀錄。
- `src/components/RideScene.tsx`：3D 世界、角色動畫與不同路線。
- `src/components/PoseCamera.tsx`：攝影機、標點疊圖、模型生命週期與示範動畫。
- `src/lib/cadence.ts`：可獨立測試的踩踏頻率計算。

雲端任務請直接使用既有 `/workspace/bike-game` 檢出目錄，無需建立額外 Git worktree。
