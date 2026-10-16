import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const standards = [
  ["mil-std-2525", "milstd2525.js"],
  ["stanag-app6", "stanagapp6.js"],
  ["milstandard-e", "milstandard.js"],
];

/** Copy the three known documentation inputs without a general-purpose glob plugin. */
export default function copyStandards({ sourceDirectory = "node_modules", destinationDirectory = "docs" } = {}) {
  return {
    name: "copy-documentation-standards",
    async buildEnd(error) {
      if (error) return;
      const files = await Promise.all(standards.map(async ([packageName, name]) => {
        const file = path.join(sourceDirectory, packageName, name);
        this.addWatchFile(file);
        return { name, data: await readFile(file) };
      }));
      await mkdir(destinationDirectory, { recursive: true });
      for (const file of files) await writeFile(path.join(destinationDirectory, file.name), file.data);
    },
  };
}
