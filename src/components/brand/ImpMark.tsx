"use client";

import { useId } from 'react';

/**
 * The TaleCrafters mark: two angular eyes over a grinning strip of film, lit
 * from underneath in cyan.
 *
 * Drawn rather than shipped as a bitmap so it stays sharp at 24px in a browser
 * tab and at 600px on a title card. The grin is the band between two quadratic
 * arcs sharing their end points, which lets the perforations be walked along
 * the curve at even arc-length spacing — holes spaced evenly in x bunch
 * visibly toward the corners.
 */

const L: readonly [number, number] = [120, 248];
const R: readonly [number, number] = [392, 248];
const TOP_C: readonly [number, number] = [256, 350]; // control point, upper edge
const BOT_C: readonly [number, number] = [256, 496]; // control point, lower edge

/** A curve parallel to the band edges, `f` of the way down from the top. */
const rowControl = (f: number): readonly [number, number] => [
  256,
  TOP_C[1] + f * (BOT_C[1] - TOP_C[1]),
];

const TOP_ROW = rowControl(0.25);
const BOT_ROW = rowControl(0.75);

const at = (c: readonly [number, number], t: number): [number, number] => {
  const u = 1 - t;
  return [
    u * u * L[0] + 2 * u * t * c[0] + t * t * R[0],
    u * u * L[1] + 2 * u * t * c[1] + t * t * R[1],
  ];
};

const angleAt = (c: readonly [number, number], t: number) => {
  const dx = 2 * (1 - t) * (c[0] - L[0]) + 2 * t * (R[0] - c[0]);
  const dy = 2 * (1 - t) * (c[1] - L[1]) + 2 * t * (R[1] - c[1]);
  return (Math.atan2(dy, dx) * 180) / Math.PI;
};

const HOLE = 13;

/** Divides a stretch of the curve into steps of equal arc length. */
function evenlySpaced(c: readonly [number, number], count: number, from: number, to: number) {
  const SAMPLES = 400;
  const cum = [0];
  let prev = at(c, from);
  for (let i = 1; i <= SAMPLES; i++) {
    const p = at(c, from + ((to - from) * i) / SAMPLES);
    cum.push(cum[i - 1] + Math.hypot(p[0] - prev[0], p[1] - prev[1]));
    prev = p;
  }
  return Array.from({ length: count }, (_, n) => {
    const target = (cum[SAMPLES] * (n + 0.5)) / count;
    const i = Math.max(1, cum.findIndex((v) => v >= target));
    return from + ((to - from) * i) / SAMPLES;
  });
}

/** The band tapers to a point at each corner, so a hole that would break the
 *  edge is dropped rather than clipped in half. */
const fits = (t: number) => {
  const thickness = at(BOT_C, t)[1] - at(TOP_C, t)[1];
  return thickness * 0.25 > HOLE / 2 + 2.5;
};

// Two rows, half a period out of step with each other, the way a real film
// strip runs its perforations.
const ROWS = [
  { c: TOP_ROW, ts: evenlySpaced(TOP_ROW, 15, 0.06, 0.94) },
  { c: BOT_ROW, ts: evenlySpaced(BOT_ROW, 12, 0.12, 0.88) },
].map(({ c, ts }, row) =>
  ts.filter(fits).map((t, i) => {
    const [x, y] = at(c, t);
    return { key: `${row}-${i}`, x, y, rot: angleAt(c, t) };
  })
);

const GRIN = `M${L[0]} ${L[1]} Q${TOP_C[0]} ${TOP_C[1]} ${R[0]} ${R[1]} Q${BOT_C[0]} ${BOT_C[1]} ${L[0]} ${L[1]} Z`;

// One eye, drawn left; the right is the same path mirrored, so the pair cannot
// drift apart. The beak-point at the outer top and the tapered inner tip are
// what make the face read as amused rather than friendly.
const EYE = [
  'M122 170', // the beak, a sharp point aimed up and outward
  'C139 190, 148 195, 161 194',
  'C193 191, 217 215, 241 247', // top edge sweeping down to the inner point
  'C241 250, 239 251, 235 250', // the inner tip, barely rounded
  'C203 251, 170 250, 152 247', // bottom edge, close to level, running back
  'C136 243, 125 230, 124 207', // outer side, curving up to meet the beak
  'C123 190, 121 176, 122 170 Z',
].join(' ');

export function ImpMark({
  size = 44,
  glow = true,
  className,
  title = 'TaleCrafters',
}: {
  size?: number;
  glow?: boolean;
  className?: string;
  title?: string;
}) {
  const uid = useId().replace(/:/g, '');

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      className={className}
      role="img"
      aria-label={title}
    >
      <defs>
        <filter id={`${uid}-b`} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
        <clipPath id={`${uid}-c`}>
          <path d={GRIN} />
        </clipPath>
      </defs>

      {/* Cyan under-light: the same grin, dropped and blurred, so the colour
          escapes only along the bottom edge where the white does not cover it. */}
      {glow && (
        <>
          <path d={GRIN} fill="#00E5CC" transform="translate(0 17)" filter={`url(#${uid}-b)`} opacity="0.8" />
          <path d={GRIN} fill="#0FE3CE" transform="translate(0 9)" />
        </>
      )}

      <path d={EYE} fill="#F2F2F7" />
      <path d={EYE} fill="#F2F2F7" transform="translate(512 0) scale(-1 1)" />

      <path d={GRIN} fill="#F7F7FA" />
      <g clipPath={`url(#${uid}-c)`} fill="#12121A">
        {ROWS.flat().map((h) => (
          <rect
            key={h.key}
            x={h.x - HOLE / 2}
            y={h.y - HOLE / 2}
            width={HOLE}
            height={HOLE}
            rx={3}
            transform={`rotate(${h.rot} ${h.x} ${h.y})`}
          />
        ))}
      </g>
    </svg>
  );
}
