import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { cp, mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

// Official Node.js LTS selected from https://nodejs.org/dist/index.json.
// Packaging tools require curl and Python 3; the Windows game needs neither.
const version = "v24.22.0";
const archiveName = `node-${version}-win-x64.zip`;
const releaseURL = `https://nodejs.org/dist/${version}`;
const archiveSha256 =
  "f9683a19877e12a9b167305c8db71040d812876359de21f0d2e97c3f321f80c3";
const exeSha256 =
  "ba93f9a70bd86fce3ebbb39ec758501458453467aa92a34a0a3602d1e3fc2b9c";
const licenseSha256 =
  "ed34dd8e3f0a78dbaf00d0444ce8e285b015b765379c2e17880455f70370f8e9";
const root = fileURLToPath(new URL("..", import.meta.url));
const output = join(root, "exports", "runtime");
const sha256 = (bytes) => createHash("sha256").update(bytes).digest("hex");

function verify(bytes, expected, label) {
  if (sha256(bytes) !== expected)
    throw new Error(`${label} failed SHA256 verification`);
}

function verifyOfficialChecksums(text) {
  const checksums = new Map(
    text
      .trim()
      .split(/\r?\n/)
      .map((line) => {
        const [hash, name] = line.trim().split(/\s+/);
        return [name, hash];
      }),
  );
  if (
    checksums.get(archiveName) !== archiveSha256 ||
    checksums.get("win-x64/node.exe") !== exeSha256
  ) {
    throw new Error(
      "Official Node.js release checksums differ from the pinned release",
    );
  }
}

async function recordProvenance(exeBytes) {
  await writeFile(
    join(output, "provenance.json"),
    `${JSON.stringify(
      {
        name: "Node.js",
        version,
        lts: "Krypton",
        platform: "Windows x64",
        releaseDate: "2026-10-14",
        indexSource: "https://nodejs.org/dist/index.json",
        source: `${releaseURL}/win-x64/node.exe`,
        archiveSource: `${releaseURL}/${archiveName}`,
        checksumsSource: `${releaseURL}/SHASUMS256.txt`,
        exeSha256,
        archiveSha256,
        licenseSha256,
        exeBytes,
        verification:
          "TLS verified HTTPS; archive and executable match pinned official SHA256 checksums",
        license:
          "LICENSE extracted unmodified from the verified official archive",
      },
      null,
      2,
    )}\n`,
  );
}

// Reuse verified outputs without downloading the 37 MB archive again.
let cached;
try {
  const [exe, license, checksums] = await Promise.all([
    readFile(join(output, "node.exe")),
    readFile(join(output, "LICENSE")),
    readFile(join(output, "SHASUMS256.txt"), "utf8"),
  ]);
  verify(exe, exeSha256, "Cached Windows executable");
  verify(license, licenseSha256, "Cached Node.js license");
  verifyOfficialChecksums(checksums);
  cached = exe;
} catch {
  // Missing or stale generated files are replaced only after full verification.
}

if (cached) {
  await recordProvenance(cached.length);
  console.log(
    `Verified cached Node.js ${version} Windows x64 runtime (${cached.length.toLocaleString()} bytes).`,
  );
} else {
  const temporary = await mkdtemp(
    join(tmpdir(), "forest-pedal-windows-runtime-"),
  );
  try {
    const archivePath = join(temporary, archiveName);
    const checksumsPath = join(temporary, "SHASUMS256.txt");
    for (const [url, path] of [
      [`${releaseURL}/SHASUMS256.txt`, checksumsPath],
      [`${releaseURL}/${archiveName}`, archivePath],
    ]) {
      execFileSync("curl", [
        "--fail",
        "--silent",
        "--show-error",
        "--location",
        "--retry",
        "2",
        "--proto",
        "=https",
        "--proto-redir",
        "=https",
        "--output",
        path,
        url,
      ]);
    }
    verifyOfficialChecksums(await readFile(checksumsPath, "utf8"));
    verify(
      await readFile(archivePath),
      archiveSha256,
      "Official Windows archive",
    );
    // Select only the two required files; do not extract npm or other tools.
    execFileSync(process.env.PYTHON_BIN || "python3", [
      "-c",
      `
from pathlib import Path
from zipfile import ZipFile
import sys
archive, output, prefix = Path(sys.argv[1]), Path(sys.argv[2]), sys.argv[3]
with ZipFile(archive) as bundle:
    for name in ('node.exe', 'LICENSE'):
        (output / name).write_bytes(bundle.read(prefix + '/' + name))
`,
      archivePath,
      temporary,
      `node-${version}-win-x64`,
    ]);
    const exe = await readFile(join(temporary, "node.exe"));
    const license = await readFile(join(temporary, "LICENSE"));
    verify(exe, exeSha256, "Extracted Windows executable");
    verify(license, licenseSha256, "Extracted Node.js license");
    await mkdir(output, { recursive: true });
    for (const name of ["node.exe", "LICENSE", "SHASUMS256.txt"]) {
      await cp(join(temporary, name), join(output, name));
    }
    await recordProvenance(exe.length);
    console.log(
      `Prepared verified Node.js ${version} Windows x64 runtime (${exe.length.toLocaleString()} bytes).`,
    );
  } finally {
    await rm(temporary, { recursive: true, force: true });
  }
}
