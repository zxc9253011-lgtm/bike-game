import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { mkdtemp, mkdir, cp, readFile, writeFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { resolve, join } from "node:path";
import { fileURLToPath } from "node:url";

// Pin and verify the official Google MediaPipe package before extracting assets.
// This keeps camera inference local and avoids runtime requests to a CDN.
const root = fileURLToPath(new URL("..", import.meta.url));
const version = "0.5.1675469404";
const source = `https://registry.npmjs.org/@mediapipe/pose/-/pose-${version}.tgz`;
const integrity =
  "sha512-DFZsNWTsSphRIZppnUCuunzBiHP2FdJXR9ehc7mMi4KG+oPaOH0Em3d6kr7Py+TSyTXC1doH88KcF28k2sBxsQ==";
const assets = [
  "pose.js",
  "pose_landmark_lite.tflite",
  "pose_solution_packed_assets.data",
  "pose_solution_packed_assets_loader.js",
  "pose_solution_simd_wasm_bin.data",
  "pose_solution_simd_wasm_bin.js",
  "pose_solution_simd_wasm_bin.wasm",
  "pose_solution_wasm_bin.js",
  "pose_solution_wasm_bin.wasm",
  "pose_web.binarypb",
];
const output = resolve(root, "public/pose");
const temp = await mkdtemp(join(tmpdir(), "forest-pedal-model-"));

try {
  const archivePath = join(temp, "pose.tgz");
  // curl respects the cloud environment's HTTPS proxy and verifies TLS normally.
  execFileSync("curl", [
    "--fail",
    "--silent",
    "--show-error",
    "--location",
    "--retry",
    "2",
    "--output",
    archivePath,
    source,
  ]);
  const archive = await readFile(archivePath);
  const actual = `sha512-${createHash("sha512").update(archive).digest("base64")}`;
  if (actual !== integrity)
    throw new Error("MediaPipe package integrity verification failed");
  execFileSync("tar", [
    "-xzf",
    archivePath,
    "-C",
    temp,
    ...assets.map((name) => `package/${name}`),
  ]);
  await mkdir(output, { recursive: true });
  const hashes = {};
  for (const name of assets) {
    const file = join(temp, "package", name);
    const contents = await readFile(file);
    hashes[name] = createHash("sha256").update(contents).digest("hex");
    await cp(file, join(output, name));
  }
  await writeFile(
    join(output, "provenance.json"),
    `${JSON.stringify(
      {
        package: "@mediapipe/pose",
        version,
        source,
        integrity,
        license: "Apache-2.0",
        homepage: "https://github.com/google-ai-edge/mediapipe",
        files: hashes,
      },
      null,
      2,
    )}\n`,
  );
  console.log(
    `Verified official MediaPipe Pose ${version}; prepared ${assets.length} local camera assets.`,
  );
} finally {
  await rm(temp, { recursive: true, force: true });
}
