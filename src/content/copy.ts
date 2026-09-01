// Reads the editable copy for one page and merges it over the repo defaults.
//
// Three properties this has to hold, in order of how badly each one breaks the
// site when it does not:
//
// 1. An empty, half-filled or unreachable dataset renders the repo copy. The
//    merge is per field, so an editor who fills in one heading does not blank
//    the rest of the page, and a blocked or down API costs us the edits, not
//    the page. This is the same bargain the blog index already makes.
// 2. One network round trip per build, not one per page. Static generation
//    renders ~190 routes and every one of them wants copy, so the fetch is
//    memoised at module scope rather than per render pass.
// 3. What comes back is plain data. Most of the sections on this site are
//    client components, so the resolved object crosses the server/client
//    boundary as a prop and has to survive serialisation.

import { copyRegistry, docIdFor, type PageId } from './registry';
import type { FieldDef, SectionDef, Pair, PageCopy } from './types';
import { client } from '@/sanity/client';

/** A Studio field name. Namespaced by section so two sections can both have a
 *  `heading` without colliding inside the one document. */
export const fieldNameFor = (section: string, field: string) => `${section}__${field}`;

type RawDoc = Record<string, unknown> & { _id: string };

/**
 * How long a build will wait for the dataset before rendering the repo copy.
 * A CMS that is slow should make a deploy slightly slower; it should never be
 * able to hang one.
 */
const TIMEOUT_MS = 8000;

/**
 * How long a resolved read is reused before the dataset is asked again.
 *
 * This is the second half of the freshness story; `export const revalidate` on
 * the site layout is the first. A page re-renders on its own schedule, and
 * when it does it must not be handed a result cached for the life of the
 * server process, or an edit in the Studio would never appear on a running
 * deploy. Thirty seconds is short enough to be invisible to an editor and long
 * enough that a build renders ~190 routes off a handful of reads.
 */
const OK_TTL_MS = 30_000;

/**
 * And how long a failure is remembered. Longer, deliberately: a dataset that
 * is down or blocked should cost a build a few timeouts, not one per route.
 */
const FAIL_TTL_MS = 300_000;

let cached: { until: number; value: Promise<Map<string, RawDoc>> } | null = null;

async function fetchAllCopy(): Promise<Map<string, RawDoc>> {
  const byId = new Map<string, RawDoc>();

  // An explicit opt-out for builds that have no business talking to the
  // dataset: CI, a checkout with no credentials, and local work on layout.
  if (process.env.SANITY_FIXTURE === '1') return byId;

  const ids = Object.keys(copyRegistry).map(docIdFor);

  try {
    const docs = await Promise.race([
      client.fetch<RawDoc[]>('*[_id in $ids]', { ids }),
      new Promise<RawDoc[]>((_, reject) =>
        setTimeout(() => reject(new Error('page copy fetch timed out')), TIMEOUT_MS)
      ),
    ]);
    for (const d of docs ?? []) byId.set(d._id, d);
    if (cached) cached.until = Date.now() + OK_TTL_MS;
  } catch {
    // Deliberately silent in the returned value and loud in the log: a deploy
    // that quietly loses every edit is worse than one that says so.
    console.warn('[copy] dataset unreachable, rendering repo defaults');
    if (cached) cached.until = Date.now() + FAIL_TTL_MS;
  }

  return byId;
}

/** Shared by every route that renders inside the same window. */
function allCopy(): Promise<Map<string, RawDoc>> {
  const now = Date.now();
  if (!cached || now >= cached.until) {
    cached = { until: now + OK_TTL_MS, value: fetchAllCopy() };
  }
  return cached.value;
}

/** Blank, whitespace and empty arrays all mean "the editor has not set this". */
function present(value: unknown, def: FieldDef): boolean {
  if (value === null || value === undefined) return false;
  if (def.type === 'pairs') return Array.isArray(value) && value.length > 0;
  return typeof value === 'string' && value.trim().length > 0;
}

function resolveField(value: unknown, def: FieldDef): string | Pair[] {
  if (!present(value, def)) {
    return def.type === 'pairs' ? (def.fallback as Pair[]).map((p) => ({ ...p })) : def.fallback;
  }
  if (def.type === 'pairs') {
    // Drop Sanity's array keys and any half-written row on the way through.
    return (value as any[])
      .map((r) => ({ label: String(r?.label ?? ''), value: String(r?.value ?? '') }))
      .filter((r) => r.label || r.value);
  }
  return (value as string).trim();
}

/** Merge one document over one page's defaults. Exported for the tests. */
export function mergeCopy<P extends PageId>(pageId: P, doc: RawDoc | undefined): PageCopy<(typeof copyRegistry)[P]> {
  const page = copyRegistry[pageId];
  const out: Record<string, Record<string, unknown>> = {};

  // The registry is precisely typed for the page's benefit; walking it
  // generically here needs the base shapes back, which is what these casts are.
  const sections = page.sections as unknown as Record<string, SectionDef>;

  for (const [sectionKey, section] of Object.entries(sections)) {
    const resolved: Record<string, unknown> = {};
    for (const [fieldKey, def] of Object.entries(section.fields as Record<string, FieldDef>)) {
      resolved[fieldKey] = resolveField(doc?.[fieldNameFor(sectionKey, fieldKey)], def);
    }
    out[sectionKey] = resolved;
  }

  return out as PageCopy<(typeof copyRegistry)[P]>;
}

/**
 * The copy for one page, dataset over defaults.
 *
 * Always resolves. There is no error path and no undefined field: the worst
 * case is that every value is the one committed to the repo.
 */
export async function pageCopy<P extends PageId>(pageId: P): Promise<PageCopy<(typeof copyRegistry)[P]>> {
  const docs = await allCopy();
  return mergeCopy(pageId, docs.get(docIdFor(pageId)));
}

/** The defaults alone, with no dataset read. For sitemaps, feeds and tests. */
export function defaultCopy<P extends PageId>(pageId: P): PageCopy<(typeof copyRegistry)[P]> {
  return mergeCopy(pageId, undefined);
}

/** The front page's copy, for the client sections that receive it as a prop. */
export type HomeCopy = PageCopy<(typeof copyRegistry)['home']>;

/** The footer's copy. The footer is a client component in the root layout. */
export type FooterCopy = PageCopy<(typeof copyRegistry)['footer']>;
