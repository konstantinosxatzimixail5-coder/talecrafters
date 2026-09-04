// Moves the repository's content into Sanity, once.
//
// Everything on this site is written as typed data in src/data/. That is a good
// home for it: reviewable in a diff, versioned, impossible to half-delete. It
// is a bad home for anything somebody wants to change without a deploy, which
// is why the site now reads the dataset first and this data second. Until the
// dataset actually holds the content, though, the Studio is a set of empty
// lists, and "editable" is a promise rather than a fact.
//
// This script closes that gap. It reads the same modules the site reads, turns
// each entry into a document with the same field names, uploads the pictures it
// references, and writes the lot.
//
//   npm run seed:sanity              what it would do, and nothing else
//   npm run seed:sanity -- --commit  do it
//   npm run seed:sanity -- --commit --only=post,caseStudy
//
// It needs a token with write access, as SANITY_WRITE_TOKEN. Create one at
// sanity.io/manage → API → Tokens with the Editor role, then put it in
// .env.local at the root of this repository:
//
//   SANITY_WRITE_TOKEN=sk...
//
// .env.local is already ignored by git. The token belongs there and nowhere
// else: the site never reads it, so it does not go into Vercel, and a token
// with write access in a deployed environment is a way to have the dataset
// edited by someone who was only ever meant to read it.
//
// Writes are createOrReplace against a deterministic id, so running it twice
// changes nothing the second time, and running it after an edit in the Studio
// OVERWRITES that edit. That is the one dangerous property here, and the
// reason it prints what it is about to do and refuses to do it without
// --commit.

import { createClient } from '@sanity/client';
import { readFile } from 'node:fs/promises';
import { readFileSync, existsSync } from 'node:fs';
import { basename } from 'node:path';

/** Reads .env.local, so the token lives in a gitignored file rather than in a
 *  shell history. Deliberately tiny: it sets only what is not already set, so
 *  an environment variable passed on the command line still wins. */
for (const file of ['.env.local', '.env']) {
  if (!existsSync(file)) continue;
  for (const line of readFileSync(file, 'utf8').split('\n')) {
    const m = /^\s*([A-Z0-9_]+)\s*=\s*(.*)$/.exec(line);
    if (!m) continue;
    const value = m[2].trim().replace(/^["']|["']$/g, '');
    if (!(m[1] in process.env)) process.env[m[1]] = value;
  }
}

import { posts } from '../../src/data/posts';
import { work } from '../../src/data/work';
import { terms } from '../../src/data/glossary';
import { conceptBrands } from '../../src/data/concept';
import { captures } from '../../src/data/captures';
import { faqGroups } from '../../src/data/faq';
import { resources } from '../../src/data/resources';
import { writing } from '../../src/data/writing';
import { films } from '../../src/data/films';
import { pipelines } from '../../src/data/pipelines';
import { categories } from '../../src/data/arsenal';
import { solutions } from '../../src/data/solutions';
import { cameraMoves } from '../../src/data/camera-moves';
import { animationStyles } from '../../src/data/animation-styles';
import { tools } from '../../src/data/downloads';
import { primaryNav, navGroups } from '../../src/lib/nav';
import manifest from '../../src/image-manifest.json';

const args = process.argv.slice(2);
const COMMIT = args.includes('--commit');
const WITH_IMAGES = !args.includes('--no-images');
const only = args.find((a) => a.startsWith('--only='))?.slice(7).split(',').filter(Boolean);

const projectId = 'xxfr3yxy';
const dataset = 'production';
const token = process.env.SANITY_WRITE_TOKEN;

if (COMMIT && !token) {
  console.error(
    'SANITY_WRITE_TOKEN is not set.\n\n' +
      '  1. sanity.io/manage → your project → API → Tokens → Add API token\n' +
      '  2. Name it anything, give it the Editor role, copy it\n' +
      '  3. Put it in .env.local at the root of this repo:\n\n' +
      '       SANITY_WRITE_TOKEN=sk...\n\n' +
      '  .env.local is gitignored. Do not add this token to Vercel: the site\n' +
      '  never reads it, and a write token in a deployment is a way to have the\n' +
      '  dataset edited by something that was only meant to read it.'
  );
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion: '2024-01-01', token, useCdn: false });

/** Stable ids, so a second run updates rather than duplicates.
 *
 *  Joined with a hyphen and stripped of dots. A dot in a document id makes it a
 *  private path in Sanity, which is how `drafts.` works, and a private document
 *  is invisible to an unauthenticated reader. The site reads without a token,
 *  so a dotted id seeds a dataset the site cannot see. */
const id = (type: string, key: string) => `${type}-${key.replace(/[^A-Za-z0-9_-]/g, '-')}`;
const key = (i: number, p = 'k') => `${p}${i}`;
const keyed = <T extends object>(rows: readonly T[] | undefined, p = 'k') =>
  (rows ?? []).map((r, i) => ({ _key: key(i, p), ...r }));

/* ------------------------------------------------------------- pictures -- */

const images = manifest as unknown as Record<string, { fallback: string }>;
const uploaded = new Map<string, string>();
let uploadCount = 0;

/** Caps how many asset uploads are in flight at once. The manifest is walked
 *  with Promise.all at every level (documents, shots, videos), so without a
 *  cap here every picture in the run fires at the same time and Sanity's API
 *  answers a chunk of them with 429s. */
function createLimiter(concurrency: number) {
  let active = 0;
  const queue: (() => void)[] = [];
  const next = () => {
    if (active >= concurrency || queue.length === 0) return;
    active++;
    queue.shift()!();
  };
  return <T,>(fn: () => Promise<T>): Promise<T> =>
    new Promise((resolve, reject) => {
      queue.push(() => {
        fn().then(resolve, reject).finally(() => { active--; next(); });
      });
      next();
    });
}

const limitUpload = createLimiter(4);
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** Retries a rate-limited upload with backoff; anything else fails fast. */
async function uploadWithRetry(buf: Buffer, filename: string, attempts = 5) {
  for (let i = 0; ; i++) {
    try {
      return await limitUpload(() => client.assets.upload('image', buf, { filename }));
    } catch (e) {
      const rateLimited = /Too Many Requests|rate limit/i.test((e as Error).message);
      if (!rateLimited || i === attempts - 1) throw e;
      await sleep(500 * 2 ** i);
    }
  }
}

/**
 * Assets already on the documents we are about to replace, keyed by the `src`
 * of the shot they sit on.
 *
 * This exists because of a real accident. A shot whose `src` is not a manifest
 * key has no file on disk to upload, so `assetFor` returns nothing, and
 * createOrReplace then writes an empty image over whatever was there. On 3
 * September 2026 that cleared fifteen blog heroes that had only ever been
 * uploaded in the Studio. The pictures survived as orphaned assets; the
 * references did not.
 *
 * So: anything the repository cannot supply, the dataset keeps.
 */
const existingAssets = new Map<string, string>();
let carriedOver = 0;

/** Walk a document and record every `src` that has an asset next to it. */
function collectAssets(node: unknown) {
  if (Array.isArray(node)) return node.forEach(collectAssets);
  if (!node || typeof node !== 'object') return;
  const o = node as Record<string, any>;
  const ref = o.image?.asset?._ref;
  if (typeof o.src === 'string' && o.src && typeof ref === 'string') existingAssets.set(o.src, ref);
  for (const [k, v] of Object.entries(o)) if (!k.startsWith('_')) collectAssets(v);
}

/**
 * Uploads the widest committed derivative of a manifest key and returns an
 * asset reference. The built ladder stays in the repository and stays the
 * default; this is what puts a copy in the dataset so the picture can be
 * swapped in the Studio without a deploy.
 */
async function assetFor(src?: string): Promise<any | undefined> {
  if (!WITH_IMAGES || !src) return undefined;
  if (uploaded.has(src)) return { _type: 'image', asset: { _type: 'reference', _ref: uploaded.get(src) } };
  const entry = images[src];
  if (!entry?.fallback) {
    // Nothing on disk under this key. If the dataset already has a picture
    // here, carry it across rather than blanking it.
    const kept = existingAssets.get(src);
    if (kept) {
      carriedOver++;
      return { _type: 'image', asset: { _type: 'reference', _ref: kept } };
    }
    return undefined;
  }
  const path = `public${entry.fallback}`;
  if (!COMMIT) { uploadCount++; return undefined; }
  try {
    const buf = await readFile(path);
    const asset = await uploadWithRetry(buf, basename(path));
    uploaded.set(src, asset._id);
    uploadCount++;
    return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } };
  } catch (e) {
    console.warn(`  ! could not upload ${path}: ${(e as Error).message}`);
    return undefined;
  }
}

const shot = async (s: any, i = 0) =>
  s && {
    _key: key(i, 's'),
    _type: 'shot',
    src: s.src,
    alt: s.alt ?? '',
    label: s.label,
    focus: s.focus,
    image: await assetFor(s.src),
  };

const shots = async (list: readonly any[] | undefined) =>
  Promise.all((list ?? []).map((s, i) => shot(s, i)));

/** The films that play on a case or a spec shelf. The poster is uploaded like
 *  any other picture, so a video keeps its own frame after the Studio takes
 *  over rather than falling back to YouTube's. */
const videos = async (list: readonly any[] | undefined) =>
  Promise.all((list ?? []).map(async (v, i) => ({
    _key: key(i, 'v'),
    _type: 'projectVideo',
    youtubeId: v.youtubeId,
    title: v.title,
    note: v.note,
    duration: v.duration,
    uploadDate: v.uploadDate,
    ratio: v.ratio ?? '16:9',
    poster: v.poster
      ? { _type: 'shot', src: v.poster, alt: v.posterAlt ?? v.title, image: await assetFor(v.poster) }
      : undefined,
  })));

/* -------------------------------------------------------------- mappers -- */

/** Table rows go in one row per entry, cells separated by a vertical bar. */
const rowsOut = (rows: string[][]) => rows.map((r) => r.join(' | '));

const bodyOut = (body: readonly any[]) =>
  body.map((b, i) => {
    const base = { _key: key(i, 'b'), _type: `block_${b.t}` };
    if (b.t === 'ul' || b.t === 'ol') return { ...base, items: b.items };
    if (b.t === 'table') return { ...base, caption: b.caption, head: b.head, rows: rowsOut(b.rows) };
    if (b.t === 'note') return { ...base, title: b.title, text: b.text };
    if (b.t === 'cta') return { ...base, href: b.href, label: b.label, text: b.text };
    return { ...base, text: b.text };
  });

async function buildDocs() {
  const out: Record<string, any[]> = {};

  out.post = await Promise.all(posts.map(async (p) => ({
    _id: id('post', p.slug), _type: 'post',
    title: p.title, slug: { _type: 'slug', current: p.slug },
    excerpt: p.excerpt, standfirst: p.standfirst,
    published: p.published, modified: p.modified,
    author: p.author, section: p.section,
    tags: p.tags, keywords: p.keywords,
    image: await shot({ src: p.image, alt: p.imageAlt }),
    body: bodyOut(p.body),
    faqs: keyed(p.faqs, 'q').map((f: any) => ({ ...f, _type: 'qa' })),
    sources: keyed(p.sources, 'r').map((s: any) => ({ ...s, _type: 'namedLink' })),
    terms: p.terms, related: p.related, resources: p.resources,
    legalNotice: p.legalNotice ?? false,
    metaTitle: p.metaTitle, metaDescription: p.metaDescription,
  })));

  out.caseStudy = await Promise.all(work.map(async (w, i) => ({
    _id: id('caseStudy', w.slug), _type: 'caseStudy', order: i + 1,
    title: w.title, slug: { _type: 'slug', current: w.slug },
    client: w.client, kind: w.kind, discipline: w.discipline,
    year: w.year, place: w.place, featured: w.featured, accent: w.accent, genre: w.genre,
    summary: w.summary, problem: w.problem, idea: w.idea, made: w.made,
    result: w.result, resultKind: w.resultKind, method: w.method,
    artefacts: keyed(w.artefacts, 'a').map((a: any) => ({ ...a, _type: 'artefact' })),
    gates: keyed(w.gates, 'g').map((g: any) => ({ ...g, _type: 'gate' })),
    stack: keyed(w.stack, 't').map((t: any) => ({ ...t, _type: 'stackStep' })),
    links: keyed(w.links, 'l').map((l: any) => ({ ...l, _type: 'namedLink' })),
    hero: await shot(w.hero),
    gallery: await shots(w.gallery),
    videos: await videos(w.videos),
  })));

  out.glossaryTerm = terms.map((t) => ({
    _id: id('glossaryTerm', t.slug), _type: 'glossaryTerm',
    term: t.term, slug: { _type: 'slug', current: t.slug },
    aka: t.aka, short: t.short, tags: t.tags, body: t.body,
    qa: keyed(t.qa, 'q').map((q: any) => ({ ...q, _type: 'qa' })),
    related: t.related,
  }));

  out.conceptBrand = await Promise.all(conceptBrands.map(async (b, i) => ({
    _id: id('conceptBrand', b.slug), _type: 'conceptBrand', order: i + 1,
    name: b.name, slug: { _type: 'slug', current: b.slug },
    num: b.num, product: b.product, proves: b.proves, accent: b.accent, note: b.note,
    pipelines: keyed(b.pipelines, 'p').map((p: any) => ({ ...p, _type: 'namedLink' })),
    shots: await shots(b.shots),
    videos: await videos(b.videos),
  })));

  out.capture = await Promise.all(captures.map(async (c, i) => ({
    _id: id('capture', c.key), _type: 'capture', order: i + 1,
    title: c.title, proves: c.proves, register: c.register,
    shot: await shot({ src: c.key, alt: c.alt, focus: c.focus }),
  })));

  out.faqGroup = faqGroups.map((g, i) => ({
    _id: id('faqGroup', g.title), _type: 'faqGroup', order: i + 1,
    title: g.title, color: g.color,
    items: keyed(g.items, 'q').map((q: any) => ({ ...q, _type: 'qa' })),
  }));

  out.resource = resources.map((r, i) => ({
    _id: id('resource', r.slug), _type: 'resource', order: i + 1,
    title: r.title, slug: { _type: 'slug', current: r.slug },
    kicker: r.kicker, color: r.color, count: r.count, format: r.format,
    blurb: r.blurb, forWhom: r.forWhom, pdf: r.pdf,
    metaTitle: r.metaTitle, metaDescription: r.metaDescription, keywords: r.keywords,
  }));

  out.writingSample = writing.map((w, i) => ({
    _id: id('writingSample', w.slug), _type: 'writingSample', order: i + 1,
    title: w.title, slug: { _type: 'slug', current: w.slug },
    kind: w.kind, color: w.color, summary: w.summary,
    detail: w.detail, form: w.form, language: w.language,
  }));

  out.film = await Promise.all(films.map(async (f, i) => ({
    _id: id('film', f.slug), _type: 'film', order: i + 1,
    title: f.title, slug: { _type: 'slug', current: f.slug },
    runtime: f.runtime, strapline: f.strapline, standfirst: f.standfirst, logline: f.logline,
    poster: await shot({ src: f.poster, alt: f.posterAlt }),
    hero: await shot({ src: f.hero, alt: f.heroAlt }),
    strip: await shot({ src: f.strip, alt: f.stripAlt }),
    closing: await shot({ src: f.closing, alt: f.closingAlt }),
    spec: keyed(f.spec, 'v').map((r: any) => ({ ...r, _type: 'keyValue' })),
    delivery: keyed(f.delivery, 'd').map((r: any) => ({ ...r, _type: 'keyValue' })),
    spine: keyed(f.spine, 'n').map((r: any) => ({ ...r, _type: 'keyValue' })),
    spineNote: f.spineNote,
    beats: await Promise.all(f.beats.map(async (b, j) => ({
      _key: key(j, 'b'), _type: 'beat',
      letter: b.letter, time: b.time, span: b.span, name: b.name, note: b.note, prompt: b.prompt,
      shot: await shot({ src: b.image, alt: b.alt }, j),
    }))),
    castIntro: f.castIntro, castNote: f.castNote,
    cast: await Promise.all(f.cast.map(async (c, j) => ({
      _key: key(j, 'c'), _type: 'designSheet',
      tag: c.tag, name: c.name, note: c.note,
      shot: c.image ? await shot({ src: c.image, alt: c.alt ?? '' }, j) : undefined,
    }))),
    pipeline: keyed(f.pipeline, 'p').map((r: any) => ({ ...r, _type: 'filmStep' })),
    pipelineNote: f.pipelineNote,
    tools: keyed(f.tools, 't').map((r: any) => ({ ...r, _type: 'namedRole' })),
    skills: keyed(f.skills, 'k').map((r: any) => ({ ...r, _type: 'namedRole' })),
    stackNote: f.stackNote,
    look: keyed(f.look, 'o').map((r: any) => ({ ...r, _type: 'lookGroup' })),
    lookNote: f.lookNote,
    locks: keyed(f.locks, 'x').map((r: any) => ({ ...r, _type: 'lock' })),
    routeShot: f.route ? await shot({ src: f.route.image, alt: f.route.alt }) : undefined,
    routeCaption: f.route?.caption,
    routeWhy: f.route?.why,
    routePositionReference: f.route?.positionReference,
    routeWaypoints: f.route ? keyed(f.route.waypoints, 'w').map((r: any) => ({ ...r, _type: 'waypoint' })) : undefined,
    routeLocks: f.route?.locks,
    routeResult: f.route?.result,
    docPath: f.doc?.path, docTitle: f.doc?.title, docSummary: f.doc?.summary,
    video: (await videos(f.video ? [f.video] : []))[0],
  })));

  out.pipeline = pipelines.map((p, i) => ({
    _id: id('pipeline', p.slug), _type: 'pipeline', order: i + 1,
    name: p.name, slug: { _type: 'slug', current: p.slug },
    num: p.num, title: p.title, mechanism: p.mechanism, accent: p.accent,
    summary: p.summary, loop: p.loop, useWhen: p.useWhen,
    stages: keyed(p.stages, 's').map((r: any) => ({ ...r, _type: 'stage' })),
    gates: keyed(p.gates, 'g').map((r: any) => ({ ...r, _type: 'pipelineGate' })),
  }));

  out.arsenalCategory = categories.map((c, i) => ({
    _id: id('arsenalCategory', c.slug), _type: 'arsenalCategory', order: i + 1,
    title: c.title, slug: { _type: 'slug', current: c.slug },
    descriptor: c.descriptor, arm: c.arm, color: c.color, intro: c.intro,
    services: keyed(c.services, 'v').map((r: any) => ({ ...r, _type: 'service' })),
  }));

  out.solution = solutions.map((x, i) => ({
    _id: id('solution', x.slug), _type: 'solution', order: i + 1,
    plainName: x.plainName, slug: { _type: 'slug', current: x.slug },
    title: x.title, accentWord: x.accentWord, color: x.color, lede: x.lede,
    meta: keyed(x.meta, 'm').map((r: any) => ({ ...r, _type: 'copyPair' })),
    body: x.body,
    deliverables: keyed(x.deliverables, 'd').map((r: any) => ({ ...r, _type: 'deliverable' })),
    faqs: keyed(x.faqs, 'q').map((r: any) => ({ ...r, _type: 'qa' })),
    ctaTitle: x.cta.title, ctaBody: x.cta.body,
    pipelines: x.pipelines, cases: x.cases, terms: x.terms,
    market: x.market,
    metaTitle: x.metaTitle, metaDescription: x.metaDescription, keywords: x.keywords,
  }));

  out.cameraMove = cameraMoves.map((m, i) => ({
    _id: id('cameraMove', m.slug), _type: 'cameraMove', order: i + 1,
    name: m.name, slug: { _type: 'slug', current: m.slug },
    num: m.num, family: m.family, camera: m.camera, prompt: m.prompt, useFor: m.useFor,
  }));

  out.animationStyle = animationStyles.map((a, i) => ({
    _id: id('animationStyle', a.slug), _type: 'animationStyle', order: i + 1,
    name: a.name, slug: { _type: 'slug', current: a.slug },
    num: a.num, aka: a.aka, color: a.color, what: a.what,
    scaffold: a.scaffold, works: a.works, breaks: a.breaks, example: a.example,
  }));

  out.tool = tools.map((t, i) => ({
    _id: id('tool', t.slug), _type: 'tool', order: i + 1,
    slug: { _type: 'slug', current: t.slug },
    intro: t.intro, howToUse: t.howToUse, licence: t.licence,
    bands: t.bands ? keyed(t.bands, 'n').map((r: any) => ({ ...r, _type: 'band' })) : undefined,
    sections: t.sections.map((sec, j) => ({
      _key: key(j, 'sec'), _type: 'toolSection',
      title: sec.title, kicker: sec.kicker,
      blocks: sec.blocks.map((b: any, k: number) => {
        const base = { _key: key(k, 'tb'), _type: `tool_${b.t}` };
        if (b.t === 'check') return { ...base, title: b.title, items: b.items };
        if (b.t === 'fields') return { ...base, title: b.title, fields: keyed(b.fields, 'f').map((f: any) => ({ ...f, _type: 'toolField' })) };
        if (b.t === 'table') return { ...base, head: b.head, rows: rowsOut(b.rows) };
        if (b.t === 'scale') return { ...base, title: b.title, items: keyed(b.items, 'i').map((x: any) => ({ ...x, _type: 'scaleItem' })) };
        return { ...base, text: b.text };
      }),
    })),
  }));

  // Both menus, in one type. `menu` tells them apart; `label` is the heading
  // you hover (DIVISIONS, ARMOURY, INTEL) or the overlay column title, and the
  // note under each item is the line that drops down with it.
  const leaf = (l: any, i: number) => ({
    _key: key(i, 'n'), _type: 'navLeaf', label: l.label, href: l.href, note: l.note,
  });

  out.navMenu = [
    ...primaryNav.map((e, i) => ({
      _id: id('navMenu', `primary-${e.label}`), _type: 'navMenu', order: i + 1,
      menu: 'primary', label: e.label, color: e.color, href: e.href,
      items: e.items?.map(leaf),
    })),
    ...navGroups.map((g, i) => ({
      _id: id('navMenu', `overlay-${g.title}`), _type: 'navMenu', order: i + 1,
      menu: 'overlay', label: g.title, color: g.color,
      items: g.items.map(leaf),
    })),
  ];

  return out;
}

/* ----------------------------------------------------------------- run -- */

// Read what is already there before building anything, so a picture the
// repository cannot supply is carried across rather than cleared. Reading is
// free and does not need the write token.
try {
  const current = await client.fetch(
    `*[_type in ["post","caseStudy","conceptBrand","film","capture","writingSample","resource"]]`
  );
  collectAssets(current);
  console.log(`${existingAssets.size} picture(s) already in the dataset will be kept where the repo has no file.\n`);
} catch {
  console.warn('Could not read the dataset. Studio uploads cannot be preserved on this run.\n');
}

const docs = await buildDocs();
const types = Object.keys(docs).filter((t) => !only || only.includes(t));

console.log(COMMIT ? 'Writing to Sanity.' : 'Dry run. Nothing is written. Add --commit to do it.');
if (carriedOver) console.log(`${carriedOver} Studio upload(s) carried over rather than cleared.`);
console.log(`project ${projectId} / dataset ${dataset}\n`);

let total = 0;
for (const t of types) {
  console.log(`  ${String(docs[t].length).padStart(4)}  ${t}`);
  total += docs[t].length;
}
console.log(`  ${String(uploadCount).padStart(4)}  pictures ${COMMIT ? 'uploaded' : 'to upload'}`);
console.log(`\n  ${total} documents\n`);

if (!COMMIT) {
  const sample = docs[types[0]]?.[0];
  console.log('First document, as it would be written:');
  console.log(JSON.stringify(sample, null, 2).slice(0, 1200) + '\n…');
  process.exit(0);
}

for (const t of types) {
  let tx = client.transaction();
  let n = 0;
  for (const doc of docs[t]) {
    tx = tx.createOrReplace(doc);
    n++;
    // Transactions have a size limit, and a failed batch of 400 tells you
    // nothing about which document broke it.
    if (n % 25 === 0) { await tx.commit({ visibility: 'async' }); tx = client.transaction(); }
  }
  await tx.commit({ visibility: 'async' });
  console.log(`  wrote ${docs[t].length} ${t}`);
}
console.log('\nDone. Open the Studio and the lists will have content in them.');
