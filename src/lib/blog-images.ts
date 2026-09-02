import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { urlFor } from '@/sanity/client';

/**
 * A post's hero picture, from whichever of the two places has one.
 *
 * An image uploaded in the Studio wins. That is the whole point of the field:
 * an editor adds a hero, publishes, and it appears. Until this existed the
 * upload was fetched from the dataset and then dropped on the floor, because
 * the templates asked `heroExists`, which only ever looked on disk, so a
 * published hero rendered as the empty plate.
 *
 * Second place is the repository: `public/img/blog/<key>-<w>.webp`, built by
 * scripts/images. Neither present renders the plate, which is a design
 * decision rather than a broken image icon.
 */

/** Whether a post's hero image is present on disk. Server-only, build-time. */
export function heroExists(image: string): boolean {
  return !!image && existsSync(join(process.cwd(), 'public', 'img', 'blog', `${image}-960.webp`));
}

export const heroSrc = (image: string, w: 480 | 960 | 1600) => `/img/blog/${image}-${w}.webp`;

export const heroSrcSet = (image: string) =>
  `${heroSrc(image, 480)} 480w, ${heroSrc(image, 960)} 960w, ${heroSrc(image, 1600)} 1600w`;

/** An upload as the dataset stores it. */
export interface HeroUpload {
  asset?: { _ref?: string; url?: string };
}

const uploadUrl = (upload: HeroUpload | undefined, w: number, h?: number) => {
  if (!upload?.asset) return undefined;
  try {
    const b = urlFor(upload).width(w).auto('format');
    return (h ? b.height(h).fit('crop') : b.fit('max')).url();
  } catch {
    return undefined;
  }
};

export interface Hero {
  src: string;
  srcSet?: string;
}

/**
 * Resolved hero for a post: the Studio upload first, the built ladder second,
 * nothing third. `upload` is whatever the reader put on the post.
 */
export function postHero(image: string, upload?: HeroUpload): Hero | null {
  const uploaded = uploadUrl(upload, 1600);
  if (uploaded) {
    return {
      src: uploadUrl(upload, 960)!,
      srcSet: [480, 960, 1600].map((w) => `${uploadUrl(upload, w)} ${w}w`).join(', '),
    };
  }
  if (heroExists(image)) return { src: heroSrc(image, 960), srcSet: heroSrcSet(image) };
  return null;
}

/** A single absolute-ish URL at a fixed size, for cards and structured data. */
export function postHeroAt(image: string, upload: HeroUpload | undefined, w: number, h?: number) {
  return uploadUrl(upload, w, h) ?? (heroExists(image) ? heroSrc(image, w >= 1200 ? 1600 : 960) : undefined);
}
