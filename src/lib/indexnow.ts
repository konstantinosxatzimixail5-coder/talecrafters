// IndexNow. One POST tells Bing, Yandex, Seznam and Naver that a URL changed,
// instead of waiting for a crawler to come back and notice. The endpoints
// share their submissions, so submitting once is submitting to all of them.
//
// https://www.bing.com/indexnow/getstarted#implementation
//
// The key is public by design: the crawler fetches
// https://talecrafters.studio/<key>.txt and expects to read the key back. That
// file is `public/c3d3ee3d382e4d01a85dc12e106cc6d7.txt`, and it must stay
// exactly the key, UTF-8, nothing else. Rotating the key means renaming that
// file and changing the constant below in the same commit, or every submission
// after the deploy is rejected as unverified.

import { SITE_URL } from '@/lib/site';

export const INDEXNOW_KEY = 'c3d3ee3d382e4d01a85dc12e106cc6d7';

export const INDEXNOW_KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY}.txt`;

/** api.indexnow.org fans the submission out to every participating engine. */
const ENDPOINT = 'https://api.indexnow.org/indexnow';

/** The protocol's own ceiling for one POST. */
const MAX_URLS = 10_000;

const HOST = new URL(SITE_URL).host;

export interface SubmitResult {
  ok: boolean;
  /** How many URLs were actually sent, after filtering and de-duplicating. */
  submitted: number;
  status: number;
  /** What the endpoint said, for the cases where the status alone is not enough. */
  detail: string;
  skipped: string[];
}

/**
 * Absolute, same-host, de-duplicated, in the order given.
 *
 * IndexNow rejects the whole batch if one URL is on another host, so a single
 * bad entry must not cost the rest of the submission.
 */
export function normalise(urls: readonly string[]): { urls: string[]; skipped: string[] } {
  const seen = new Set<string>();
  const out: string[] = [];
  const skipped: string[] = [];
  for (const raw of urls) {
    const trimmed = String(raw ?? '').trim();
    if (!trimmed) continue;
    let url: URL;
    try {
      url = new URL(trimmed, SITE_URL);
    } catch {
      skipped.push(trimmed);
      continue;
    }
    if (url.host !== HOST) {
      skipped.push(trimmed);
      continue;
    }
    const href = url.toString();
    if (seen.has(href)) continue;
    seen.add(href);
    out.push(href);
  }
  return { urls: out.slice(0, MAX_URLS), skipped };
}

/**
 * Submit a batch. Never throws: a search-engine ping is not worth failing a
 * publish over, so a network error comes back as `ok: false` and the caller
 * decides whether anyone needs to hear about it.
 */
export async function submitUrls(urls: readonly string[]): Promise<SubmitResult> {
  const { urls: urlList, skipped } = normalise(urls);
  if (!urlList.length) {
    return { ok: false, submitted: 0, status: 0, detail: 'Nothing to submit.', skipped };
  }

  const body = JSON.stringify({
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList,
  });

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body,
      // Nothing downstream should cache a submission.
      cache: 'no-store',
    });
    // 200 accepted, 202 accepted but the key is still being checked. Both are
    // success; anything else is worth reading.
    const ok = res.status === 200 || res.status === 202;
    const detail = ok ? (res.status === 202 ? 'Accepted, key pending validation.' : 'Accepted.')
      : (await res.text().catch(() => '')).slice(0, 500) || res.statusText;
    return { ok, submitted: urlList.length, status: res.status, detail, skipped };
  } catch (err) {
    return {
      ok: false,
      submitted: 0,
      status: 0,
      detail: err instanceof Error ? err.message : 'Request failed.',
      skipped,
    };
  }
}

/** Submit one page, given a site path (`/blog/whatever`) or a full URL. */
export const submitUrl = (path: string) => submitUrls([path]);
