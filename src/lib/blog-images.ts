import { existsSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Whether a post's hero image is actually present on disk.
 *
 * The heroes are generated separately (see scripts/blog-images/) and this
 * session could not download them: the Higgsfield CDN they land on is outside
 * this project's egress policy, and routing around an egress policy is not a
 * thing to do quietly. So the posts ship without them and the templates render
 * a brand-coloured plate instead of a broken image icon.
 *
 * Server-only, evaluated at build time, so it costs nothing at request time.
 * Running scripts/blog-images/fetch.sh and rebuilding turns the images on with
 * no further code changes.
 */
export function heroExists(image: string): boolean {
  return existsSync(join(process.cwd(), 'public', 'img', 'blog', `${image}-960.webp`));
}

export const heroSrc = (image: string, w: 480 | 960 | 1600) => `/img/blog/${image}-${w}.webp`;

export const heroSrcSet = (image: string) =>
  `${heroSrc(image, 480)} 480w, ${heroSrc(image, 960)} 960w, ${heroSrc(image, 1600)} 1600w`;
