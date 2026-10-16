import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile, readFile, unlink, rmdir, access } from "node:fs/promises";
import path from "node:path";
import { tmpdir } from "node:os";
import { test } from "node:test";
import copyStandards from "../build-plugins/copy-standards.mjs";

test("copies exactly the three standard files and skips output after a build error", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "milsymbol-copy-test-"));
  const entries = [["mil-std-2525", "milstd2525.js"], ["stanag-app6", "stanagapp6.js"], ["milstandard-e", "milstandard.js"]];
  const destinationDirectory = path.join(root, "docs");
  try {
    for (const [name, file] of entries) {
      await mkdir(path.join(root, name));
      await writeFile(path.join(root, name, file), `// ${name}\n`);
    }
    const plugin = copyStandards({ sourceDirectory: root, destinationDirectory });
    const watched = [];
    const context = { addWatchFile: (file) => watched.push(file) };
    await plugin.buildEnd.call(context, new Error("build failed"));
    await assert.rejects(access(destinationDirectory));
    await plugin.buildEnd.call(context);
    assert.equal(watched.length, 3);
    for (const [name, file] of entries) assert.equal(await readFile(path.join(destinationDirectory, file), "utf8"), `// ${name}\n`);
  } finally {
    for (const [name, file] of entries) {
      await unlink(path.join(root, name, file));
      await rmdir(path.join(root, name));
      try { await unlink(path.join(destinationDirectory, file)); } catch (error) { if (error.code !== "ENOENT") throw error; }
    }
    try { await rmdir(destinationDirectory); } catch (error) { if (error.code !== "ENOENT") throw error; }
    await rmdir(root);
  }
});
