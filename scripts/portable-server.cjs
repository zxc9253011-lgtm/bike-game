"use strict";

// Run with `node portable-server.cjs [app-directory]`. A packaged copy serves
// its sibling app/ folder; the optional root also lets maintainers verify dist/.
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const { spawn } = require("node:child_process");

const portText = process.env.PORT ?? "4173";
if (
  !/^\d+$/.test(portText) ||
  Number(portText) < 1 ||
  Number(portText) > 65535
) {
  console.error("PORT 必須是 1 至 65535 之間的整數。");
  process.exit(1);
}

let root;
try {
  root = fs.realpathSync(
    path.resolve(process.argv[2] || path.join(__dirname, "app")),
  );
  if (!fs.statSync(root).isDirectory()) throw new Error("Not a directory");
} catch {
  console.error(
    "找不到遊戲檔案。請將此程式與 app 資料夾放在一起，或指定遊戲資料夾。",
  );
  process.exit(1);
}

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".wasm": "application/wasm",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".json": "application/json; charset=utf-8",
  ".data": "application/octet-stream",
  ".tflite": "application/octet-stream",
  ".binarypb": "application/octet-stream",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function insideRoot(file) {
  const relative = path.relative(root, file);
  return (
    relative !== ".." &&
    !relative.startsWith(`..${path.sep}`) &&
    !path.isAbsolute(relative)
  );
}

function reply(request, response, status, text, headers = {}) {
  const body = Buffer.from(text, "utf8");
  response.writeHead(status, {
    "Content-Type": "text/plain; charset=utf-8",
    "Content-Length": body.length,
    "X-Content-Type-Options": "nosniff",
    ...headers,
  });
  response.end(request.method === "HEAD" ? undefined : body);
}

const server = http.createServer(async (request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    reply(request, response, 405, "僅支援 GET 與 HEAD。", {
      Allow: "GET, HEAD",
    });
    return;
  }

  let pathname;
  try {
    const target = request.url || "/";
    if (!target.startsWith("/")) throw new Error("Invalid request target");
    pathname = decodeURIComponent(target.split("?")[0]);
  } catch {
    reply(request, response, 400, "網址格式錯誤。");
    return;
  }
  // Check before resolving: URL parsers can silently normalize traversal away.
  if (
    pathname.includes("\0") ||
    pathname.includes("\\") ||
    pathname.split("/").includes("..")
  ) {
    reply(request, response, 403, "無法存取此路徑。");
    return;
  }

  let file = path.resolve(root, `.${pathname}`);
  if (!insideRoot(file)) {
    reply(request, response, 403, "無法存取此路徑。");
    return;
  }

  try {
    let details = await fs.promises.stat(file);
    if (details.isDirectory()) {
      file = path.join(file, "index.html");
      details = await fs.promises.stat(file);
    }
    // Real paths also prevent a symlink in app/ from exposing outside files.
    const realFile = await fs.promises.realpath(file);
    if (!insideRoot(realFile)) {
      reply(request, response, 403, "無法存取此路徑。");
      return;
    }
    if (!details.isFile()) {
      reply(request, response, 404, "找不到此檔案。");
      return;
    }
    const headers = {
      "Content-Type":
        types[path.extname(realFile).toLowerCase()] ||
        "application/octet-stream",
      "Content-Length": details.size,
      "X-Content-Type-Options": "nosniff",
      "Cache-Control": "no-cache",
    };
    if (request.method === "HEAD") {
      response.writeHead(200, headers);
      response.end();
      return;
    }
    const stream = fs.createReadStream(realFile);
    stream.once("open", () => {
      response.writeHead(200, headers);
      stream.pipe(response);
    });
    stream.once("error", () => {
      if (response.headersSent) response.destroy();
      else reply(request, response, 500, "無法讀取遊戲檔案。");
    });
    response.once("close", () => stream.destroy());
  } catch (error) {
    const missing = error.code === "ENOENT" || error.code === "ENOTDIR";
    reply(
      request,
      response,
      missing ? 404 : 500,
      missing ? "找不到此檔案。" : "無法讀取遊戲檔案。",
    );
  }
});

let port = Number(portText);
let attempts = 0;
server.on("error", (error) => {
  if (error.code === "EADDRINUSE" && attempts < 10 && port < 65535) {
    attempts += 1;
    port += 1;
    server.listen(port, "127.0.0.1");
    return;
  }
  console.error(
    error.code === "EADDRINUSE"
      ? "附近的連接埠都已被占用。請關閉先前的遊戲視窗，或設定其他 PORT 後再試。"
      : `遊戲伺服器無法啟動（${error.code || "未知錯誤"}）。`,
  );
  process.exitCode = 1;
});

server.on("listening", () => {
  const url = `http://127.0.0.1:${port}`;
  console.log(
    `森森騎旅已準備好了！\n請在瀏覽器開啟：${url}\n請保留此視窗；結束遊戲時按 Ctrl + C。`,
  );
  if (process.env.NO_OPEN === "1") return;

  let command;
  let args;
  if (process.platform === "win32") {
    command = "cmd.exe";
    args = ["/c", "start", "", url];
  } else if (process.platform === "darwin") {
    command = "open";
    args = [url];
  } else {
    command = "xdg-open";
    args = [url];
  }
  try {
    const opener = spawn(command, args, {
      detached: true,
      stdio: "ignore",
      windowsHide: true,
    });
    opener.on("error", () =>
      console.log(`若未自動開啟，請手動將 ${url} 貼到瀏覽器網址列。`),
    );
    opener.unref();
  } catch {
    console.log(`若未自動開啟，請手動將 ${url} 貼到瀏覽器網址列。`);
  }
});

function stop() {
  console.log("\n遊戲伺服器已停止。");
  server.close();
  server.closeAllConnections();
}
process.once("SIGINT", stop);
process.once("SIGTERM", stop);
server.listen(port, "127.0.0.1");
