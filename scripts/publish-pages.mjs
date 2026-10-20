import { execFileSync } from "node:child_process";
import { mkdtemp, readdir, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const temporary = await mkdtemp(join(tmpdir(), "forest-pedal-pages-publish-"));
const website = "https://zxc9253011-lgtm.github.io/bike-game/";

function git(args, { index, input } = {}) {
  return execFileSync("git", args, {
    cwd: root,
    env: { ...process.env, ...(index ? { GIT_INDEX_FILE: index } : {}) },
    encoding: "utf8",
    input,
    maxBuffer: 16 * 1024 * 1024,
    stdio: ["pipe", "pipe", "pipe"],
  }).trim();
}

async function filesUnder(directory) {
  const output = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isSymbolicLink())
      throw new Error(`Refusing to publish symlink: ${path}`);
    if (entry.isDirectory()) output.push(...(await filesUnder(path)));
    else if (entry.isFile()) output.push(path);
  }
  return output;
}

function remoteHead(branch) {
  const result = git([
    "ls-remote",
    "--heads",
    "origin",
    `refs/heads/${branch}`,
  ]);
  return result ? result.split(/\s/)[0] : null;
}

async function publish(branch, files, base, message) {
  const parent = remoteHead(branch);
  if (parent) git(["fetch", "--quiet", "origin", `refs/heads/${branch}`]);
  const index = join(temporary, `${branch}.index`);
  git(["read-tree", "--empty"], { index });
  for (const file of files) {
    const blob = git(["hash-object", "-w", file]);
    const name = relative(base, file).replaceAll("\\", "/");
    git(["update-index", "--add", "--cacheinfo", `100644,${blob},${name}`], {
      index,
    });
  }
  const tree = git(["write-tree"], { index });
  if (parent && git(["rev-parse", `${parent}^{tree}`]) === tree) {
    console.log(`${branch}: already matches the prepared files (${parent}).`);
    return parent;
  }
  const commit = git(["commit-tree", tree, ...(parent ? ["-p", parent] : [])], {
    input: `${message}\n`,
  });
  // No force push; concurrent remote work is protected by fast-forward checks.
  console.log(git(["push", "origin", `${commit}:refs/heads/${branch}`]));
  if (remoteHead(branch) !== commit)
    throw new Error(`Could not confirm ${branch} publication.`);
  console.log(`${branch}: published ${commit} (${files.length} files).`);
  return commit;
}

try {
  const builtHTML = await readFile(
    join(root, "dist-pages", "index.html"),
    "utf8",
  );
  if (!builtHTML.includes("/bike-game/assets/"))
    throw new Error("Build the Pages version with npm run build:pages first.");
  await readFile(join(root, "dist-pages", ".nojekyll"));
  const sourceFiles = [
    ".gitignore",
    "README.md",
    "index.html",
    "package.json",
    "package-lock.json",
    "tsconfig.json",
    "vite.config.ts",
  ].map((name) => join(root, name));
  for (const folder of ["src", "public", "scripts", "tests"])
    sourceFiles.push(...(await filesUnder(join(root, folder))));
  await publish(
    "main",
    sourceFiles,
    root,
    "Add Forest Pedal browser game and GitHub Pages publishing",
  );
  await publish(
    "gh-pages",
    await filesUnder(join(root, "dist-pages")),
    join(root, "dist-pages"),
    "Publish Forest Pedal static website",
  );
  console.log(
    `Website files uploaded. GitHub Pages publishing must be enabled for gh-pages / (root).\nExpected website: ${website}`,
  );
  console.log(
    "The active working branch and application files were preserved.",
  );
} finally {
  await rm(temporary, { recursive: true, force: true });
}
