import { unstable_cache } from 'next/cache';
import { client } from './client';

/**
 * Every read of the dataset, cached under one tag.
 *
 * The site used to reach freshness by waiting: Sanity's CDN held a copy for up
 * to a minute, a module-level map in front of it held another for thirty
 * seconds, and the pages themselves regenerated on a sixty second window. An
 * edit therefore took somewhere between one and three minutes to appear, and
 * nothing could make it appear sooner, because none of those three caches
 * could be told to let go.
 *
 * Now every read goes through Next's own data cache under the tag below, and
 * `/api/revalidate` drops that tag the moment Sanity says something was
 * published. The waiting is gone; publishing is the trigger.
 *
 * The `revalidate` window stays as a backstop. If the webhook is never set up,
 * is removed, or fails, the site still catches up within a minute rather than
 * serving one deploy's content forever.
 */
export const SANITY_TAG = 'sanity';

/** The backstop, in seconds. Only reached when the webhook does not fire. */
const BACKSTOP = 60;

/** A dataset that hangs must cost a build a handful of timeouts, not one per
 *  route, so the timeout lives inside the cached function and its result is
 *  cached like any other. */
const TIMEOUT_MS = 8000;

type Result<T> = { ok: true; data: T } | { ok: false };

/**
 * Run a GROQ query against the dataset.
 *
 * Never throws. A dataset that is unreachable, slow or switched off returns
 * `fallback`, which is how every page on this site can render its committed
 * content when Sanity is not answering.
 *
 * `label` is what the entry is keyed and logged under. Two callers with the
 * same label and the same query share one read, which is the point: a build
 * renders ~190 routes off a handful of round trips.
 */
export async function sanityRead<T>(
  label: string,
  query: string,
  params: Record<string, unknown>,
  fallback: T
): Promise<T> {
  // An explicit opt-out for builds with no business talking to the dataset:
  // CI, a checkout with no credentials, and local work on layout.
  if (process.env.SANITY_FIXTURE === '1') return fallback;

  const run = unstable_cache(
    async (): Promise<Result<T>> => {
      try {
        const data = await Promise.race([
          client.fetch<T>(query, params),
          new Promise<T>((_, reject) =>
            setTimeout(() => reject(new Error(`${label} timed out`)), TIMEOUT_MS)
          ),
        ]);
        return { ok: true, data };
      } catch {
        // Loud in the log, invisible on the page. A deploy that quietly loses
        // every edit is worse than one that says so.
        console.warn(`[sanity] ${label}: dataset unreachable, rendering repo content`);
        return { ok: false };
      }
    },
    ['sanity', label, query, JSON.stringify(params)],
    { tags: [SANITY_TAG], revalidate: BACKSTOP }
  );

  const result = await run();
  return result.ok ? (result.data ?? fallback) : fallback;
}
