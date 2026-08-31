import manifest from '@/image-manifest.json';

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

/**
 * A picture from the studio archive. The manifest carries every derivative that
 * was built for it, so the srcset is generated rather than typed, and a key
 * that does not exist renders nothing instead of a broken image icon.
 */
export function Frame({
  src,
  alt,
  sizes = '100vw',
  className,
  style,
  focus,
  priority = false,
}: {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  style?: React.CSSProperties;
  focus?: string;
  priority?: boolean;
}) {
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
