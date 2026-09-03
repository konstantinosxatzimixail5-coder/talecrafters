"use client";

import { useState } from 'react';
import { Frame } from './Frame';
import { embedUrl, remoteThumb, watchUrl, type ProjectVideo } from '@/data/video';

/**
 * A film, played where it sits.
 *
 * Nothing from YouTube loads until somebody presses play. Before that this is
 * a poster frame, a button and a caption, which costs one image instead of the
 * megabyte of script and the cookies an iframe brings with it. A case study
 * carrying four films used to mean four players warming up for a reader who
 * came for the pictures.
 *
 * The poster is one of ours when the project has a frame in the manifest, and
 * YouTube's own still when it does not, so a video added without a master
 * still renders something rather than a grey box.
 */
export function VideoPlayer({
  video,
  accent = 'var(--brand-magenta)',
  priority = false,
}: {
  video: ProjectVideo;
  accent?: string;
  priority?: boolean;
}) {
  const [playing, setPlaying] = useState(false);
  const vertical = video.ratio === '9:16';

  return (
    <figure className="m-0">
      <div
        className={vertical ? 'relative mx-auto w-full max-w-[380px]' : 'relative w-full'}
        style={{
          aspectRatio: vertical ? '9 / 16' : '16 / 9',
          border: '1px solid rgba(255,255,255,0.08)',
          backgroundColor: '#0B0B0F',
          overflow: 'hidden',
        }}
      >
        {playing ? (
          <iframe
            src={`${embedUrl(video.youtubeId)}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${video.title}`}
            className="group absolute inset-0 w-full h-full cursor-pointer"
            style={{ padding: 0, border: 0, background: 'transparent' }}
          >
            {video.poster ? (
              <Frame
                src={video.poster}
                alt={video.posterAlt ?? video.title}
                priority={priority}
                sizes={vertical ? '(max-width: 640px) 100vw, 380px' : '(max-width: 1024px) 100vw, 60vw'}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <img
                src={remoteThumb(video.youtubeId)}
                alt={video.posterAlt ?? video.title}
                loading={priority ? 'eager' : 'lazy'}
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}

            {/* A frame can be a night street or a solar array at noon, and the
                same overlay has to keep the caption legible on both. */}
            <span
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(8,8,10,0.88), rgba(8,8,10,0.12) 62%)' }}
            />

            {/* The play target. A triangle in a box, in the site's own
                furniture rather than YouTube's red pill. */}
            <span
              className="absolute left-1/2 top-1/2 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
              style={{
                width: 76,
                height: 54,
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'rgba(8,8,10,0.82)',
                border: `1px solid ${accent}`,
              }}
            >
              {/* White, not the accent. Two of the case accents are dark
                  enough that a triangle in them disappears into the box. */}
              <svg width="18" height="20" viewBox="0 0 18 20" aria-hidden focusable="false">
                <path d="M0 0 L18 10 L0 20 Z" fill="var(--brand-white)" />
              </svg>
            </span>

            <span
              className="absolute bottom-3 left-3 px-2.5 py-1.5 text-[10px] tracking-[0.22em]"
              style={{
                fontFamily: 'var(--font-mono)',
                color: 'var(--brand-white)',
                backgroundColor: 'rgba(8,8,10,0.88)',
                borderLeft: `2px solid ${accent}`,
              }}
            >
              WATCH · {readable(video.duration)}
            </span>
          </button>
        )}
      </div>

      <figcaption className="mt-3">
        <div
          className="text-[11px] tracking-[0.2em] mb-1.5"
          style={{ fontFamily: 'var(--font-mono)', color: accent }}
        >
          {video.title.toUpperCase()}
        </div>
        <p
          className="text-sm leading-relaxed"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}
        >
          {video.note}{' '}
          <a
            href={watchUrl(video.youtubeId)}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: accent, textDecoration: 'none', whiteSpace: 'nowrap' }}
          >
            Watch on YouTube ↗
          </a>
        </p>
      </figcaption>
    </figure>
  );
}

/** PT1M48S reads as 1:48. Written once here rather than typed twice per film. */
function readable(iso: string): string {
  const m = /^PT(?:(\d+)M)?(?:(\d+)S)?$/.exec(iso);
  if (!m) return iso;
  const mins = Number(m[1] ?? 0);
  const secs = Number(m[2] ?? 0);
  return `${mins}:${String(secs).padStart(2, '0')}`;
}
