// Puts back pictures a seed run dropped.
//
// The seed writes documents with createOrReplace. A `shot` it cannot supply an
// asset for is written with no asset at all, so a picture that only ever
// existed as a Studio upload gets its reference cleared. That is what happened
// to fifteen blog heroes on 3 September 2026: the files were uploaded in the
// Studio, the seed had no copy of them on disk, and the replace wrote an empty
// image over the top.
//
// This reads each document as it stood at a moment in the past, using Sanity's
// document history, and patches any asset reference that has since gone
// missing back onto the current document. It never touches anything else: one
// patch per lost picture, set at exactly the path the picture sits on.
//
//   npm run restore:sanity                          what it would do
//   npm run restore:sanity -- --commit              do it
//   npm run restore:sanity -- --before=2026-09-03T12:00:00Z --commit
//
// The default `before` is just before the 3 September seed. History is kept
// for a limited window, so this stops working eventually.
//
// Needs SANITY_WRITE_TOKEN in .env.local, same as the seed.

import { createClient } from '@sanity/client';
import { readFileSync, existsSync } from 'node:fs';

for (const file of ['.env.local', '.env']) {
  if (!existsSync(file)) continue;
  for (const line of readFileSync(file, 'utf8').split('\n')) {
    const m = /^\s*([A-Z0-9_]+)\s*=\s*(.*)$/.exec(line);
    if (!m) continue;
    const value = m[2].trim().replace(/^["']|["']$/g, '');
    if (!(m[1] in process.env)) process.env[m[1]] = value;
  }
}

const args = process.argv.slice(2);
const COMMIT = args.includes('--commit');
const BEFORE = args.find((a) => a.startsWith('--before='))?.slice(9) ?? '2026-09-03T12:00:00Z';

const projectId = 'xxfr3yxy';
const dataset = 'production';
const token = process.env.SANITY_WRITE_TOKEN;

if (COMMIT && !token) {
  console.error('SANITY_WRITE_TOKEN is not set. See .env.local.example.');
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion: '2024-01-01', token, useCdn: false });

/** Every asset reference in a document, keyed by the path it sits on. */
function assetPaths(node: unknown, path: string[] = [], out = new Map<string, string>()) {
  if (Array.isArray(node)) {
    for (const item of node) {
      // Array members are addressed by _key, so a reordered array still
      // resolves to the same member.
      const k = (item as any)?._key;
      assetPaths(item, [...path, k ? `[_key=="${k}"]` : `[${node.indexOf(item)}]`], out);
    }
    return out;
  }
  if (node && typeof node === 'object') {
    const o = node as Record<string, unknown>;
    const ref = (o.asset as any)?._ref;
    if (typeof ref === 'string' && path.length) out.set(path.join('.'), ref);
    for (const [k, v] of Object.entries(o)) {
      if (k.startsWith('_')) continue;
      assetPaths(v, [...path, k], out);
    }
  }
  return out;
}

/** Join a path built by assetPaths back into a GROQ/patch path. */
const toPatchPath = (p: string) => p.replace(/\.\[/g, '[');

async function main() {
  const ids: string[] = await client.fetch(`*[_type in $types]._id`, {
    types: ['post', 'caseStudy', 'conceptBrand', 'film', 'capture', 'writingSample', 'resource'],
  });

  console.log(`${ids.length} documents to check, against ${BEFORE}\n`);

  const patches: { id: string; path: string; ref: string }[] = [];

  for (const id of ids) {
    const current = await client.getDocument(id);
    if (!current) continue;

    const url = `https://${projectId}.api.sanity.io/v2021-06-07/data/history/${dataset}/documents/${encodeURIComponent(id)}?time=${encodeURIComponent(BEFORE)}`;
    const res = await fetch(url, token ? { headers: { Authorization: `Bearer ${token}` } } : undefined);
    if (!res.ok) continue;
    const past = (await res.json() as any).documents?.[0];
    if (!past) continue;

    const before = assetPaths(past);
    const after = assetPaths(current);

    for (const [path, ref] of before) {
      if (after.has(path)) continue; // still there, nothing to do
      patches.push({ id, path: toPatchPath(path), ref });
    }
  }

  if (!patches.length) {
    console.log('Nothing is missing. No pictures to restore.');
    return;
  }

  const byDoc = new Map<string, typeof patches>();
  for (const p of patches) byDoc.set(p.id, [...(byDoc.get(p.id) ?? []), p]);

  console.log(`${patches.length} lost picture(s) across ${byDoc.size} document(s):\n`);
  for (const [id, list] of byDoc) {
    console.log(`  ${id}`);
    for (const p of list) console.log(`      ${p.path}  ->  ${p.ref}`);
  }

  if (!COMMIT) {
    console.log('\nDry run. Nothing was written. Add --commit to put these back.');
    return;
  }

  let tx = client.transaction();
  for (const [id, list] of byDoc) {
    const set: Record<string, unknown> = {};
    for (const p of list) set[p.path] = { _type: 'image', asset: { _type: 'reference', _ref: p.ref } };
    tx = tx.patch(id, (patch) => patch.set(set));
  }
  await tx.commit({ visibility: 'async' });
  console.log(`\nRestored ${patches.length} picture(s).`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
