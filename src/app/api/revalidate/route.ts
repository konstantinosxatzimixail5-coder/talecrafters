import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag, revalidatePath } from 'next/cache';
import { timingSafeEqual } from 'node:crypto';
import { SANITY_TAG } from '@/sanity/read';

/**
 * What Sanity calls when something is published.
 *
 * Every read of the dataset is cached under one tag (see src/sanity/read.ts).
 * This drops that tag, so the next request for any page reads the dataset
 * again instead of serving whatever was cached. The path purge underneath it
 * clears the rendered pages themselves, which is the difference between the
 * new copy being available and the new copy being on screen.
 *
 * Set it up once, in sanity.io/manage → API → Webhooks:
 *
 *   URL      https://talecrafters.studio/api/revalidate
 *   Dataset  production
 *   Trigger  Create, Update, Delete
 *   Filter   (leave empty: everything in the dataset feeds some page)
 *   Method   POST
 *   Header   x-revalidate-secret: <the same value as SANITY_REVALIDATE_SECRET>
 *
 * and put SANITY_REVALIDATE_SECRET in Vercel's environment variables. This is
 * not the write token and must not be: it authorises one thing, which is
 * throwing away a cache.
 *
 * With no secret configured the route refuses everything. An open purge
 * endpoint is a free way for anyone to make the site rebuild itself on every
 * request.
 */
export const dynamic = 'force-dynamic';

/** Compared without leaking how much of the value matched. */
function matches(given: string, expected: string): boolean {
  const a = Buffer.from(given);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export async function POST(request: NextRequest) {
  const expected = process.env.SANITY_REVALIDATE_SECRET;

  if (!expected) {
    console.warn('[revalidate] SANITY_REVALIDATE_SECRET is not set; refusing.');
    return NextResponse.json(
      { revalidated: false, reason: 'not configured' },
      { status: 503 }
    );
  }

  const given =
    request.headers.get('x-revalidate-secret') ??
    request.nextUrl.searchParams.get('secret') ??
    '';

  if (!matches(given, expected)) {
    return NextResponse.json({ revalidated: false, reason: 'bad secret' }, { status: 401 });
  }

  // What changed, when Sanity says. Only ever used for the log line: the tag
  // covers every read, so there is nothing to decide here.
  let changed = 'unknown';
  try {
    const body = await request.json();
    changed = body?._type ? `${body._type} ${body?.slug?.current ?? body?._id ?? ''}`.trim() : 'unknown';
  } catch {
    // Sanity can be configured to send nothing at all. Still a valid trigger.
  }

  // `expire: 0` means every entry under the tag is past its life, which is
  // the on-demand purge rather than a nudge towards the next window.
  revalidateTag(SANITY_TAG, { expire: 0 });
  // The tag clears the data. This clears the pages built from it, across the
  // whole site, because a change to the menus or the footer copy shows up on
  // every route rather than on one.
  revalidatePath('/', 'layout');

  console.log(`[revalidate] ${changed} -> purged`);

  return NextResponse.json({
    revalidated: true,
    changed,
    at: new Date().toISOString(),
  });
}

/** A GET is how you check the route is deployed and wired up. It purges
 *  nothing and says nothing about whether the secret is right. */
export async function GET() {
  return NextResponse.json({
    ok: true,
    configured: Boolean(process.env.SANITY_REVALIDATE_SECRET),
    hint: 'POST here from a Sanity webhook with the x-revalidate-secret header.',
  });
}
