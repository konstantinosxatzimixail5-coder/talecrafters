import manifest from '@/image-manifest.json';
import { urlFor } from '@/sanity/client';

interface Entry {
  key: string;
  width: number;
  height: number;
  aspect: number;
  avif: { w: number; src: string }[];
  webp: { w: number; src: string }[];
  fallback: string;
}

const images = manifest as unknown as Record<string, Entry>;

export const hasFrame = (key: string) => key in images;
export const frameSrc = (key: string) => images[key]?.fallback;
export const frameRatio = (key: string) => images[key]?.aspect;

/** A picture uploaded in the Studio, as the dataset stores it. */
export interface Upload {
  asset?: { _ref?: string; url?: string };
}

const WIDTHS = [480, 960, 1600];

/**
 * A picture.
 *
 * Two sources, in a fixed order. An upload from the Studio wins, so a photo can
 * be replaced without a deploy. With no upload the picture comes from the
 * manifest, which carries every derivative that was built for it, so the srcset
 * is generated rather than typed. A key that matches neither renders nothing
 * rather than a broken image icon.
 */
export function Frame({
  src,
  upload,
  alt,
  sizes = '100vw',
  className,
  style,
  focus,
  priority = false,
}: {
  src: string;
  upload?: Upload | null;
  alt: string;
  sizes?: string;
  className?: string;
  style?: React.CSSProperties;
  focus?: string;
  priority?: boolean;
}) {
  if (upload?.asset) {
    // Sanity resizes on its own CDN, so the ladder is requested rather than
    // built. Format is left to `auto`, which serves AVIF where it is accepted.
    let b: any;
    try {
      b = urlFor(upload);
    } catch {
      b = null;
    }
    if (b) {
      const at = (w: number) => `${b.width(w).auto('format').fit('max').url()} ${w}w`;
      return (
        <img
          src={b.width(1600).auto('format').fit('max').url()}
          srcSet={WIDTHS.map(at).join(', ')}
          sizes={sizes}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          className={className}
          style={{ objectPosition: focus, ...style }}
        />
      );
    }
  }

  const img = images[src];
  if (!img) return null;

  const set = (list: { w: number; src: string }[]) =>
    list.map((v) => `${v.src} ${v.w}w`).join(', ');

  return (
    <picture>
      <source type="image/avif" srcSet={set(img.avif)} sizes={sizes} />
      <source type="image/webp" srcSet={set(img.webp)} sizes={sizes} />
      <img
        src={img.fallback}
        alt={alt}
        width={img.width}
        height={img.height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        className={className}
        style={{ objectPosition: focus, ...style }}
      />
    </picture>
  );
}
