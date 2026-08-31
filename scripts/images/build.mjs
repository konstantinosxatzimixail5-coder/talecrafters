// Builds the AVIF and WebP ladder for the pictures this repository owns, and
// rewrites src/image-manifest.json so <Frame> can generate a srcset instead of
// having one typed by hand.
//
// Masters live under source-assets/<group>/... and are keyed by their path
// below that root, so source-assets/spec/feral/product-01.jpeg becomes the key
// spec/feral/product-01 and lands at public/img/spec/feral/product-01-<w>.<fmt>.
//
// Widths are never upscaled. A 622px master produces one 480 derivative and
// stops, which is why some entries carry a single width: that is the master's
// fault and not something a resize can fix.
//
//   node scripts/images/build.mjs            rebuild everything
//   node scripts/images/build.mjs spec       rebuild one group
//
// Needs sharp. It is a devDependency; the site does not import it at runtime.

import { readdir, mkdir, writeFile, readFile } from 'node:fs/promises';
import { join, extname, relative, dirname } from 'node:path';
import sharp from 'sharp';

const SRC = 'source-assets';
const OUT = 'public/img';
const MANIFEST = 'src/image-manifest.json';
const WIDTHS = [480, 960, 1600];
const INPUT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.tif', '.tiff']);

const only = process.argv[2];

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true }).catch(() => [])) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (INPUT.has(extname(e.name).toLowerCase())) out.push(p);
  }
  return out;
}

const files = (await walk(SRC)).filter((f) => !only || relative(SRC, f).startsWith(only + '/'));
if (!files.length) {
  console.error(`No masters found under ${SRC}/${only ?? ''}`);
  process.exit(1);
}

const manifest = JSON.parse(await readFile(MANIFEST, 'utf8').catch(() => '{}'));
let built = 0;

for (const file of files) {
  const rel = relative(SRC, file);
  const key = rel.slice(0, rel.length - extname(rel).length);
  const image = sharp(file, { failOn: 'none' });
  const meta = await image.metadata();
  if (!meta.width || !meta.height) {
    console.warn(`skip (no dimensions): ${file}`);
    continue;
  }

  // Never upscale: a width above the master only costs bytes. But a 928px
  // master that only gets a 480 derivative is throwing away half of what it
  // has, so the master's own width is added as a final step whenever it sits
  // meaningfully above the largest ladder rung that fits. Several of these
  // masters land between rungs, which is why the shelf looked soft.
  const widths = WIDTHS.filter((w) => w <= meta.width);
  const top = widths[widths.length - 1] ?? 0;
  if (meta.width > top * 1.15 && top < WIDTHS[WIDTHS.length - 1]) widths.push(meta.width);
  if (!widths.length) widths.push(meta.width);

  await mkdir(join(OUT, dirname(key)), { recursive: true });

  const avif = [];
  const webp = [];
  for (const w of widths) {
    const resized = sharp(file, { failOn: 'none' }).resize({ width: w, withoutEnlargement: true });
    const a = `${OUT}/${key}-${w}.avif`;
    const b = `${OUT}/${key}-${w}.webp`;
    await resized.clone().avif({ quality: 55, effort: 5 }).toFile(a);
    await resized.clone().webp({ quality: 80 }).toFile(b);
    avif.push({ w, src: `/img/${key}-${w}.avif` });
    webp.push({ w, src: `/img/${key}-${w}.webp` });
    built += 2;
  }

  const largest = widths[widths.length - 1];
  manifest[key] = {
    key,
    width: largest,
    height: Math.round((meta.height / meta.width) * largest),
    aspect: Number((meta.width / meta.height).toFixed(4)),
    avif,
    webp,
    fallback: `/img/${key}-${largest}.webp`,
  };
  console.log(`  ${key.padEnd(34)} ${meta.width}x${meta.height} -> ${widths.join(', ')}`);
}

const sorted = Object.fromEntries(Object.keys(manifest).sort().map((k) => [k, manifest[k]]));
await writeFile(MANIFEST, JSON.stringify(sorted, null, 2) + '\n');
console.log(`\n${built} files written, ${Object.keys(sorted).length} manifest entries.`);
