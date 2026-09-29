import { readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ssrDir = path.join(root, "dist-ssr");
const { files, render } = await import(path.join(ssrDir, "prerender.js"));
const rootElement = /<div id="root"([^>]*)><\/div>/;

for (const file of files) {
  const target = path.join(root, "dist", file);
  const html = await readFile(target, "utf8");
  if (!rootElement.test(html)) {
    throw new Error(`No empty #root in ${file}`);
  }
  const markup = render(file);
  await writeFile(target, html.replace(rootElement, (_tag, attributes) => `<div id="root"${attributes}>${markup}</div>`));
  console.log(`prerendered ${file} (${(markup.length / 1024).toFixed(1)} kB)`);
}

await rm(ssrDir, { recursive: true, force: true });
