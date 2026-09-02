/**
 * Submit the whole site to IndexNow from the command line.
 *
 *   npm run indexnow            # dry run: shows what would be sent
 *   npm run indexnow -- --commit
 *   npm run indexnow -- --commit /blog/some-post /work/bike-barn
 *
 * It reads the live sitemap rather than building one locally, so what gets
 * submitted is what is actually deployed. Day to day you should not need this:
 * the Sanity webhook on /api/indexnow does it on publish. This is for a bulk
 * re-submission after a big change, or for checking the key is accepted.
 */

import { submitUrls, INDEXNOW_KEY, INDEXNOW_KEY_LOCATION } from '../src/lib/indexnow';
import { SITE_URL } from '../src/lib/site';

const args = process.argv.slice(2);
const COMMIT = args.includes('--commit');
const explicit = args.filter((a) => !a.startsWith('--'));

async function sitemapUrls(): Promise<string[]> {
  const res = await fetch(`${SITE_URL}/sitemap.xml`, { cache: 'no-store' } as RequestInit);
  if (!res.ok) throw new Error(`sitemap.xml returned ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

const urls = explicit.length ? explicit : await sitemapUrls();

console.log(`key          ${INDEXNOW_KEY}`);
console.log(`keyLocation  ${INDEXNOW_KEY_LOCATION}`);
console.log(`urls         ${urls.length}\n`);

// The key file has to be readable before a submission counts for anything.
const keyRes = await fetch(INDEXNOW_KEY_LOCATION, { cache: 'no-store' } as RequestInit);
const keyBody = keyRes.ok ? (await keyRes.text()).trim() : '';
if (keyBody === INDEXNOW_KEY) {
  console.log('key file    ok\n');
} else {
  console.log(`key file    NOT READABLE (${keyRes.status}). Submissions will be ignored until it is.\n`);
}

if (!COMMIT) {
  for (const u of urls.slice(0, 20)) console.log(`  ${u}`);
  if (urls.length > 20) console.log(`  … and ${urls.length - 20} more`);
  console.log('\nDry run. Add --commit to submit.');
  process.exit(0);
}

const result = await submitUrls(urls);
console.log(result);
process.exit(result.ok ? 0 : 1);
