// The lists the site is made of, read from the dataset when it has them and
// from the repository when it does not.
//
// The rule for a list is coarser than the one for page copy, on purpose. Copy
// merges field by field, because an editor who fills in one heading should not
// blank the eleven underneath. A list does not merge: if the dataset holds any
// documents of a type then that is the list, in the order it gives. Merging
// here would mean an entry deleted in the Studio quietly reappearing from the
// repo, which is not an editing experience, it is a haunting.
//
// So the repository stays the fallback for an empty, unreachable or
// not-yet-seeded dataset, and `npm run seed:sanity` is what moves it from one
// to the other.

import { client } from '@/sanity/client';
import { posts as repoPosts } from '@/data/posts';
import type { Block } from '@/data/posts/types';
import { work as repoWork } from '@/data/work';
import { terms as repoTerms } from '@/data/glossary';
import { conceptBrands as repoBrands } from '@/data/concept';
import { captures as repoCaptures } from '@/data/captures';
import { faqGroups as repoFaqGroups } from '@/data/faq';
import { resources as repoResources } from '@/data/resources';
import { writing as repoWriting } from '@/data/writing';
import { films as repoFilms } from '@/data/films';
import { pipelines as repoPipelines } from '@/data/pipelines';
import { categories as repoCategories } from '@/data/arsenal';
import { solutions as repoSolutions } from '@/data/solutions';
import { cameraMoves as repoCameraMoves } from '@/data/camera-moves';
import { animationStyles as repoAnimationStyles } from '@/data/animation-styles';
import { tools as repoTools } from '@/data/downloads';
import { primaryNav as repoPrimaryNav, navGroups as repoNavGroups } from '@/lib/nav';

/** A picture as the Studio stores it: a manifest key, an upload, or both. */
export interface StoredShot {
  src?: string;
  image?: { asset?: { _ref?: string; url?: string }; hotspot?: unknown };
  alt: string;
  label?: string;
  focus?: string;
}

const OK_TTL_MS = 30_000;
const FAIL_TTL_MS = 300_000;
const TIMEOUT_MS = 8000;

type Bundle = Record<string, any[]>;
let cached: { until: number; value: Promise<Bundle> } | null = null;

/**
 * One query for every collection. A page that needs case studies and a page
 * that needs glossary terms are rendered in the same pass during a build, and
 * asking twice for two halves of the same dataset is a round trip nobody needs.
 */
const QUERY = `{
  "post": *[_type == "post"] | order(published desc) { ..., "slug": slug.current },
  "caseStudy": *[_type == "caseStudy"] | order(order asc) { ..., "slug": slug.current },
  "glossaryTerm": *[_type == "glossaryTerm"] | order(term asc) { ..., "slug": slug.current },
  "conceptBrand": *[_type == "conceptBrand"] | order(order asc) { ..., "slug": slug.current },
  "capture": *[_type == "capture"] | order(order asc) { ... },
  "faqGroup": *[_type == "faqGroup"] | order(order asc) { ... },
  "resource": *[_type == "resource"] | order(order asc) { ..., "slug": slug.current },
  "writingSample": *[_type == "writingSample"] | order(order asc) { ..., "slug": slug.current },
  "film": *[_type == "film"] | order(order asc) { ..., "slug": slug.current },
  "pipeline": *[_type == "pipeline"] | order(order asc) { ..., "slug": slug.current },
  "arsenalCategory": *[_type == "arsenalCategory"] | order(order asc) { ..., "slug": slug.current },
  "solution": *[_type == "solution"] | order(order asc) { ..., "slug": slug.current },
  "cameraMove": *[_type == "cameraMove"] | order(order asc) { ..., "slug": slug.current },
  "animationStyle": *[_type == "animationStyle"] | order(order asc) { ..., "slug": slug.current },
  "tool": *[_type == "tool"] | order(order asc) { ..., "slug": slug.current },
  "navMenu": *[_type == "navMenu"] | order(order asc) { ... }
}`;

async function fetchAll(): Promise<Bundle> {
  if (process.env.SANITY_FIXTURE === '1') return {};
  try {
    const out = await Promise.race([
      client.fetch<Bundle>(QUERY),
      new Promise<Bundle>((_, reject) =>
        setTimeout(() => reject(new Error('collections fetch timed out')), TIMEOUT_MS)
      ),
    ]);
    if (cached) cached.until = Date.now() + OK_TTL_MS;
    return out ?? {};
  } catch {
    console.warn('[collections] dataset unreachable, rendering repo content');
    if (cached) cached.until = Date.now() + FAIL_TTL_MS;
    return {};
  }
}

function all(): Promise<Bundle> {
  const now = Date.now();
  if (!cached || now >= cached.until) cached = { until: now + OK_TTL_MS, value: fetchAll() };
  return cached.value;
}

/** Dataset if it has any of this type, repository otherwise. */
async function listOf<T>(type: string, fallback: readonly T[], map: (doc: any) => T): Promise<T[]> {
  const bundle = await all();
  const docs = bundle[type];
  if (!Array.isArray(docs) || docs.length === 0) return fallback as T[];
  return docs.map(map);
}

/* ------------------------------------------------------------- mappers -- */

const shot = (s: any) =>
  s && { src: s.src, upload: s.image, alt: s.alt ?? '', label: s.label, focus: s.focus };

const arr = <T>(v: unknown, f: (x: any) => T): T[] => (Array.isArray(v) ? v.map(f) : []);
const strArr = (v: unknown): string[] => (Array.isArray(v) ? v.filter((x) => typeof x === 'string') : []);

/** Table rows are typed a row at a time, cells separated by a vertical bar. */
const tableRows = (rows: unknown): string[][] =>
  strArr(rows).map((r) => r.split('|').map((c) => c.trim()));

/** Portable text, which is what the six posts written in the Studio before
 *  this schema existed are made of. Their style maps onto the union directly
 *  and the spans join back into one string; anything richer than that (marks,
 *  links) flattens to text rather than being dropped. */
const portableText = (b: any): Block => {
  const text = (b?.children ?? []).map((c: any) => c?.text ?? '').join('');
  const style = String(b?.style ?? 'normal');
  if (style === 'h2' || style === 'h3') return { t: style, text };
  if (style === 'blockquote') return { t: 'quote', text };
  return { t: 'p', text };
};

/** A Studio block back into the closed union the article renderer accepts.
 *  Anything unrecognised becomes a paragraph rather than reaching the page as
 *  a shape nothing knows how to draw. */
const postBlock = (b: any): Block => {
  if (b?._type === 'block') return portableText(b);
  const t = String(b?._type ?? '').replace(/^block_/, '');
  switch (t) {
    case 'ul':
    case 'ol':
      return { t, items: strArr(b.items) };
    case 'table':
      return { t: 'table', caption: b.caption, head: strArr(b.head), rows: tableRows(b.rows) };
    case 'note':
      return { t: 'note', title: b.title ?? '', text: b.text ?? '' };
    case 'cta':
      return { t: 'cta', href: b.href ?? '', label: b.label ?? '', text: b.text ?? '' };
    case 'h2':
    case 'h3':
    case 'quote':
      return { t, text: b?.text ?? '' };
    default:
      return { t: 'p', text: b?.text ?? '' };
  }
};

/* --------------------------------------------------------------- reads -- */

export const getPosts = () =>
  listOf('post', repoPosts, (d) => ({
    slug: d.slug,
    title: d.title,
    metaTitle: d.metaTitle,
    metaDescription: d.metaDescription ?? d.excerpt ?? '',
    excerpt: d.excerpt ?? '',
    // `publishedAt` is the old field name, kept so the posts written before
    // this schema existed still carry a date.
    published: d.published ?? (d.publishedAt ? String(d.publishedAt).slice(0, 10) : ''),
    modified: d.modified,
    author: d.author ?? 'TaleCrafters',
    section: d.section ?? '',
    tags: strArr(d.tags),
    keywords: strArr(d.keywords),
    image: d.image?.src ?? '',
    imageAlt: d.image?.alt ?? d.featuredImage?.alt ?? '',
    // Same again: `featuredImage` is what the older posts carry.
    heroUpload: d.image?.image ?? d.featuredImage,
    standfirst: d.standfirst ?? '',
    body: arr(d.body, postBlock),
    faqs: arr(d.faqs, (q) => ({ q: q.q ?? '', a: q.a ?? '' })),
    terms: strArr(d.terms),
    related: strArr(d.related),
    resources: strArr(d.resources),
    sources: arr(d.sources, (s) => ({ label: s.label ?? '', href: s.href ?? '' })),
    legalNotice: !!d.legalNotice,
  })) as Promise<(typeof repoPosts)[number][]>;

export const getWork = () =>
  listOf('caseStudy', repoWork, (d) => ({
    slug: d.slug,
    title: d.title,
    client: d.client,
    kind: d.kind ?? 'Client work',
    discipline: d.discipline ?? '',
    year: d.year ?? '',
    place: d.place,
    featured: !!d.featured,
    accent: d.accent ?? 'var(--brand-cyan)',
    summary: d.summary ?? '',
    problem: d.problem ?? '',
    idea: d.idea ?? '',
    made: strArr(d.made),
    result: d.result ?? '',
    resultKind: d.resultKind ?? 'Delivered',
    artefacts: arr(d.artefacts, (a) => ({ label: a.label ?? '', detail: a.detail ?? '' })),
    method: d.method ?? '',
    gates: arr(d.gates, (g) => ({ name: g.name ?? '', test: g.test ?? '' })),
    hero: shot(d.hero),
    gallery: arr(d.gallery, shot),
    stack: arr(d.stack, (s) => ({ stage: s.stage ?? '', tool: s.tool ?? '' })),
    links: arr(d.links, (l) => ({ label: l.label ?? '', href: l.href ?? '' })),
    genre: d.genre,
  })) as Promise<(typeof repoWork)[number][]>;

export const getTerms = () =>
  listOf('glossaryTerm', repoTerms, (d) => ({
    slug: d.slug,
    term: d.term,
    aka: strArr(d.aka),
    short: d.short ?? '',
    tags: strArr(d.tags),
    body: strArr(d.body),
    qa: arr(d.qa, (q) => ({ q: q.q ?? '', a: q.a ?? '' })),
    related: strArr(d.related),
  })) as Promise<(typeof repoTerms)[number][]>;

export const getConceptBrands = () =>
  listOf('conceptBrand', repoBrands, (d) => ({
    slug: d.slug,
    num: d.num ?? '',
    name: d.name,
    product: d.product ?? '',
    proves: d.proves ?? '',
    accent: d.accent ?? 'var(--brand-cyan)',
    note: d.note ?? '',
    pipelines: arr(d.pipelines, (p) => ({ label: p.label ?? '', href: p.href ?? '' })),
    shots: arr(d.shots, shot),
  })) as Promise<(typeof repoBrands)[number][]>;

export const getCaptures = () =>
  listOf('capture', repoCaptures, (d) => ({
    key: d.shot?.src ?? '',
    title: d.title,
    alt: d.shot?.alt ?? '',
    proves: d.proves ?? '',
    register: d.register ?? '',
    focus: d.shot?.focus,
    upload: d.shot?.image,
  })) as Promise<(typeof repoCaptures)[number][]>;

export const getFaqGroups = () =>
  listOf('faqGroup', repoFaqGroups, (d) => ({
    title: d.title,
    color: d.color ?? 'var(--brand-cyan)',
    items: arr(d.items, (q) => ({ q: q.q ?? '', a: q.a ?? '' })),
  })) as Promise<(typeof repoFaqGroups)[number][]>;

export const getResources = () =>
  listOf('resource', repoResources, (d) => ({
    slug: d.slug,
    title: d.title,
    kicker: d.kicker ?? '',
    color: d.color ?? 'var(--brand-cyan)',
    count: d.count ?? '',
    format: d.format ?? '',
    blurb: d.blurb ?? '',
    forWhom: d.forWhom ?? '',
    pdf: d.pdf,
    metaTitle: d.metaTitle,
    metaDescription: d.metaDescription,
    keywords: strArr(d.keywords),
  })) as Promise<(typeof repoResources)[number][]>;

export const getWriting = () =>
  listOf('writingSample', repoWriting, (d) => ({
    slug: d.slug,
    title: d.title,
    kind: d.kind ?? '',
    color: d.color ?? 'var(--brand-cyan)',
    summary: d.summary ?? '',
    detail: d.detail ?? '',
    form: d.form ?? '',
    language: d.language,
  })) as Promise<(typeof repoWriting)[number][]>;

/** A film's frames are stored as pictures but read back as a key and an alt,
 *  because that is the pair every renderer on the film pages already takes. */
const framePair = (s: any) => ({ image: s?.src ?? '', alt: s?.alt ?? '', upload: s?.image });

export const getFilms = () =>
  listOf('film', repoFilms, (d) => ({
    slug: d.slug,
    title: d.title,
    runtime: d.runtime ?? '',
    strapline: d.strapline ?? '',
    standfirst: d.standfirst ?? '',
    logline: d.logline ?? '',
    hero: d.hero?.src ?? '',
    heroAlt: d.hero?.alt ?? '',
    heroUpload: d.hero?.image,
    poster: d.poster?.src ?? '',
    posterAlt: d.poster?.alt ?? '',
    posterUpload: d.poster?.image,
    strip: d.strip?.src ?? '',
    stripAlt: d.strip?.alt ?? '',
    closing: d.closing?.src ?? '',
    closingAlt: d.closing?.alt ?? '',
    spec: arr(d.spec, (r) => ({ key: r.key ?? '', value: r.value ?? '' })),
    delivery: arr(d.delivery, (r) => ({ key: r.key ?? '', value: r.value ?? '' })),
    spine: arr(d.spine, (r) => ({ key: r.key ?? '', value: r.value ?? '' })),
    spineNote: d.spineNote ?? '',
    beats: arr(d.beats, (b) => ({
      letter: b.letter ?? '', time: b.time ?? '', span: b.span ?? '', name: b.name ?? '',
      note: b.note ?? '', prompt: b.prompt ?? '', ...framePair(b.shot),
    })),
    castIntro: d.castIntro ?? '',
    castNote: d.castNote ?? '',
    cast: arr(d.cast, (c) => ({
      tag: c.tag ?? '', name: c.name ?? '', note: c.note, ...framePair(c.shot),
    })),
    pipeline: arr(d.pipeline, (p) => ({ num: p.num ?? '', name: p.name ?? '', tool: p.tool ?? '', body: p.body ?? '' })),
    pipelineNote: d.pipelineNote ?? '',
    tools: arr(d.tools, (t) => ({ name: t.name ?? '', role: t.role ?? '', body: t.body ?? '' })),
    skills: arr(d.skills, (t) => ({ name: t.name ?? '', role: t.role ?? '', body: t.body ?? '' })),
    stackNote: d.stackNote ?? '',
    look: arr(d.look, (l) => ({ key: l.key ?? '', lines: strArr(l.lines) })),
    lookNote: d.lookNote ?? '',
    locks: arr(d.locks, (l) => ({ name: l.name ?? '', symptom: l.symptom ?? '', lock: l.lock ?? '' })),
    route: d.routeShot
      ? {
          ...framePair(d.routeShot),
          caption: d.routeCaption ?? '',
          why: strArr(d.routeWhy),
          positionReference: d.routePositionReference ?? '',
          waypoints: arr(d.routeWaypoints, (w) => ({ num: w.num ?? '', name: w.name ?? '', cue: w.cue ?? '' })),
          locks: strArr(d.routeLocks),
          result: d.routeResult ?? '',
        }
      : undefined,
    doc: { path: d.docPath ?? '', title: d.docTitle ?? '', summary: d.docSummary ?? '' },
  })) as Promise<(typeof repoFilms)[number][]>;

export const getPipelines = () =>
  listOf('pipeline', repoPipelines, (d) => ({
    slug: d.slug,
    num: d.num ?? '',
    name: d.name,
    title: d.title ?? '',
    mechanism: d.mechanism ?? '',
    accent: d.accent ?? 'var(--brand-cyan)',
    summary: d.summary ?? '',
    loop: d.loop ?? '',
    useWhen: d.useWhen ?? '',
    stages: arr(d.stages, (x) => ({ name: x.name ?? '', tool: x.tool ?? '', fixes: x.fixes ?? '', time: x.time ?? '' })),
    gates: arr(d.gates, (g) => ({ name: g.name ?? '', test: g.test ?? '', fail: g.fail ?? '' })),
  })) as Promise<(typeof repoPipelines)[number][]>;

const toolBlock = (b: any): any => {
  const t = String(b?._type ?? '').replace(/^tool_/, '');
  switch (t) {
    case 'check':
      return { t, title: b.title, items: strArr(b.items) };
    case 'fields':
      return { t, title: b.title, fields: arr(b.fields, (f) => ({ label: f.label ?? '', hint: f.hint, lines: f.lines })) };
    case 'table':
      return { t, head: strArr(b.head), rows: tableRows(b.rows) };
    case 'scale':
      return { t, title: b.title, items: arr(b.items, (i) => ({ label: i.label ?? '', detail: i.detail ?? '' })) };
    case 'note':
      return { t, text: b.text ?? '' };
    default:
      return { t: 'para', text: b?.text ?? '' };
  }
};

export const getCategories = () =>
  listOf('arsenalCategory', repoCategories, (d) => ({
    slug: d.slug,
    title: d.title,
    descriptor: d.descriptor ?? '',
    arm: (d.arm ?? 'create') as 'create' | 'systems' | 'originals',
    color: d.color ?? 'var(--brand-cyan)',
    intro: d.intro ?? '',
    services: arr(d.services, (x) => ({ name: x.name ?? '', desc: x.desc ?? '', icon: x.icon ?? '' })),
  })) as Promise<(typeof repoCategories)[number][]>;

export const getSolutions = () =>
  listOf('solution', repoSolutions, (d) => ({
    slug: d.slug,
    title: d.title ?? '',
    accentWord: d.accentWord ?? '',
    plainName: d.plainName,
    metaTitle: d.metaTitle ?? '',
    metaDescription: d.metaDescription ?? '',
    keywords: strArr(d.keywords),
    color: d.color ?? 'var(--brand-cyan)',
    lede: d.lede ?? '',
    meta: arr(d.meta, (m) => ({ label: m.label ?? '', value: m.value ?? '' })),
    body: strArr(d.body),
    deliverables: arr(d.deliverables, (x) => ({ name: x.name ?? '', detail: x.detail ?? '' })),
    pipelines: strArr(d.pipelines),
    cases: strArr(d.cases),
    terms: strArr(d.terms),
    faqs: arr(d.faqs, (q) => ({ q: q.q ?? '', a: q.a ?? '' })),
    cta: { title: d.ctaTitle ?? '', body: d.ctaBody ?? '' },
    market: d.market,
  })) as Promise<(typeof repoSolutions)[number][]>;

export const getCameraMoves = () =>
  listOf('cameraMove', repoCameraMoves, (d) => ({
    num: d.num ?? '',
    slug: d.slug,
    name: d.name,
    family: d.family,
    camera: d.camera ?? '',
    prompt: d.prompt ?? '',
    useFor: d.useFor ?? '',
  })) as Promise<(typeof repoCameraMoves)[number][]>;

export const getAnimationStyles = () =>
  listOf('animationStyle', repoAnimationStyles, (d) => ({
    slug: d.slug,
    num: d.num ?? '',
    name: d.name,
    aka: d.aka ?? '',
    color: d.color ?? 'var(--brand-cyan)',
    what: d.what ?? '',
    scaffold: strArr(d.scaffold),
    works: strArr(d.works),
    breaks: d.breaks ?? '',
    example: d.example ?? '',
  })) as Promise<(typeof repoAnimationStyles)[number][]>;

export const getTools = () =>
  listOf('tool', repoTools, (d) => ({
    slug: d.slug,
    intro: strArr(d.intro),
    howToUse: strArr(d.howToUse),
    sections: arr(d.sections, (sec) => ({
      title: sec.title ?? '',
      kicker: sec.kicker,
      blocks: arr(sec.blocks, toolBlock),
    })),
    bands: arr(d.bands, (b) => ({ range: b.range ?? '', verdict: b.verdict ?? '', action: b.action ?? '' })),
    licence: d.licence ?? '',
  })) as Promise<(typeof repoTools)[number][]>;

/* ------------------------------------------------------------------ menu -- */

const leaves = (v: unknown) =>
  arr(v, (i) => ({ label: i.label ?? '', href: i.href ?? '', note: i.note ?? undefined }));

/**
 * The two menus.
 *
 * One document type covers both, told apart by `menu`. The bar's drop-down
 * notes and the overlay's are the same shape and were the same hard-coded
 * file, so they stay one thing to edit rather than two that drift.
 */
async function menusOf(which: 'primary' | 'overlay') {
  const bundle = await all();
  const docs = (bundle.navMenu ?? []).filter((d: any) => d.menu === which);
  return docs.length ? docs : null;
}

export const getPrimaryNav = async (): Promise<typeof repoPrimaryNav> => {
  const docs = await menusOf('primary');
  if (!docs) return repoPrimaryNav;
  return docs.map((d: any) => ({
    label: d.label ?? '',
    color: d.color ?? 'var(--brand-cyan)',
    ...(d.href ? { href: d.href } : {}),
    ...(Array.isArray(d.items) && d.items.length ? { items: leaves(d.items) } : {}),
  }));
};

export const getNavGroups = async (): Promise<typeof repoNavGroups> => {
  const docs = await menusOf('overlay');
  if (!docs) return repoNavGroups;
  return docs.map((d: any) => ({
    title: d.label ?? '',
    color: d.color ?? 'var(--brand-cyan)',
    items: leaves(d.items),
  }));
};
