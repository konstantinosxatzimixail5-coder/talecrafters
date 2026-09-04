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
import { sanityRead } from '@/sanity/read';

/** A Studio field name. Namespaced by section so two sections can both have a
 *  `heading` without colliding inside the one document. */
export const fieldNameFor = (section: string, field: string) => `${section}__${field}`;

type RawDoc = Record<string, unknown> & { _id: string };

/**
 * The page-copy documents, read once and cached under the `sanity` tag.
 *
 * This kept its own thirty-second map in module scope, for the same reason the
 * collections reader did and with the same flaw: nothing outside the process
 * could tell it to let go, so a publish had to wait it out. Now a publish drops
 * the tag and the next render reads again. See src/sanity/read.ts.
 */
async function allCopy(): Promise<Map<string, RawDoc>> {
  const ids = Object.keys(copyRegistry).map(docIdFor);
  const docs = await sanityRead<RawDoc[]>('page copy', '*[_id in $ids]', { ids }, []);
  return new Map(docs.map((d) => [d._id, d]));
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
