// The endpoint that pings IndexNow.
//
// Three ways to call it, all POST:
//
//   { }                                    every URL in the sitemap
//   { "urls": ["/blog/a", "/work/b"] }     those pages
//   a Sanity webhook body                  the page that document renders
//
// The last one is the point of the thing: add a webhook in the Sanity project
// (API → Webhooks) pointing at https://talecrafters.studio/api/indexnow, and
// publishing a post tells Bing about that post within seconds instead of
// whenever a crawler next wanders past.

import { NextRequest, NextResponse } from 'next/server';
import { submitUrls, INDEXNOW_KEY, INDEXNOW_KEY_LOCATION } from '@/lib/indexnow';
import sitemap from '@/app/sitemap';
import { SITE_URL } from '@/lib/site';

export const dynamic = 'force-dynamic';

/** Where a published document of each type is read on the site. */
const ROUTES: Record<string, (slug: string) => string[]> = {
  post: (s) => [`/blog/${s}`, '/blog'],
  caseStudy: (s) => [`/work/${s}`, '/work'],
  film: (s) => [`/films/${s}`, '/films'],
  pipeline: (s) => [`/pipelines/${s}`, '/pipelines'],
  resource: (s) => [`/armoury/${s}`, '/armoury'],
  glossaryTerm: (s) => [`/glossary/${s}`, '/glossary'],
  solution: (s) => [`/${s}`],
  writingSample: () => ['/writing'],
  conceptBrand: () => ['/concept-projects'],
  capture: () => ['/captures'],
  faqGroup: () => ['/faq'],
  arsenalCategory: () => ['/arsenal'],
  cameraMove: () => ['/armoury/camera-movements'],
  animationStyle: () => ['/armoury/animation-prompting'],
  tool: () => ['/armoury'],
};

/**
 * Every URL the sitemap emits, run through the same normaliser the submission
 * uses. Without that the two sides disagree over a trailing slash — the
 * sitemap says `https://talecrafters.studio`, `new URL()` says
 * `https://talecrafters.studio/` — and the home page gets rejected as "not in
 * the sitemap" by the check that exists to let it through.
 */
const canonical = (u: string) => new URL(u, SITE_URL).toString();

const sitemapUrls = async () => (await sitemap()).map((e) => canonical(String(e.url)));

/**
 * A shared secret is optional. Without one the endpoint still refuses to be a
 * relay: it will only submit URLs that are in our own sitemap, so the worst a
 * stranger can do is ask Bing to re-read pages it is welcome to read anyway.
 * Set INDEXNOW_SECRET in Vercel to lock it down properly.
 */
function authorised(req: NextRequest) {
  const secret = process.env.INDEXNOW_SECRET;
  if (!secret) return false;
  const given = req.headers.get('x-indexnow-secret') ?? req.nextUrl.searchParams.get('secret');
  return given === secret;
}

/** Sanity sends the document; older projection styles send just a slug string. */
function pathsFromWebhook(body: any): string[] {
  const type = body?._type ?? body?.type;
  if (!type || !ROUTES[type]) return [];
  const slug = body?.slug?.current ?? body?.slug ?? '';
  return ROUTES[type](String(slug));
}

export async function POST(req: NextRequest) {
  let body: any = {};
  try {
    body = await req.json();
  } catch {
    body = {};
  }

  const trusted = authorised(req);
  let wanted: string[];

  if (Array.isArray(body?.urls) && body.urls.length) {
    wanted = body.urls.map(String);
  } else {
    const fromDoc = pathsFromWebhook(body);
    // Nothing recognisable in the body means "the lot" — which is what a
    // deploy hook or a manual poke wants.
    wanted = fromDoc.length ? fromDoc : await sitemapUrls();
  }

  if (!trusted) {
    const allowed = new Set(await sitemapUrls());
    const before = wanted.length;
    wanted = wanted.filter((u) => {
      try {
        return allowed.has(canonical(u));
      } catch {
        return false;
      }
    });
    if (!wanted.length) {
      return NextResponse.json(
        { ok: false, error: 'Not in the sitemap. Send INDEXNOW_SECRET to submit anything else.', rejected: before },
        { status: 403 }
      );
    }
  }

  const result = await submitUrls(wanted);
  return NextResponse.json(result, { status: result.ok ? 200 : 502 });
}

/** A readable answer for anyone checking the wiring by hand. */
export async function GET() {
  return NextResponse.json({
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    sitemapUrls: (await sitemapUrls()).length,
    usage: 'POST {} to submit the sitemap, {"urls":[…]} for specific pages, or point a Sanity webhook here.',
  });
}
