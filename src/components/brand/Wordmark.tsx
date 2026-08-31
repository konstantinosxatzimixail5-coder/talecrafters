"use client";

/**
 * TALECRAFTERS with the misregistered-print look: white type with a magenta
 * and a cyan copy offset behind it.
 *
 * Drawn with text-shadow rather than stacked copies of the word. Three stacked
 * spans put the company name into the page three times, which reads as
 * duplicated text to a crawler and breaks the accessible-name check on any link
 * that wraps it. One text node fixes both and renders identically.
 *
 * `offset` scales the misregistration with the type size. At 14px a 3px shift
 * is a smear; at 120px it is invisible. Keeping it proportional fixes both.
 */
export function Wordmark({
  size = 28,
  offset,
  className,
  as: Tag = 'span',
  text = 'TALECRAFTERS',
}: {
  size?: number | string;
  /** Misregistration in px. Derived from `size` when that is a number; pass it
   *  explicitly when `size` is a CSS length the component cannot measure. */
  offset?: number;
  className?: string;
  as?: 'span' | 'h1' | 'div';
  text?: string;
}) {
  const d = offset ?? (typeof size === 'number' ? Math.max(1.5, size * 0.05) : 1.5);

  return (
    <Tag
      className={className}
      style={{
        fontFamily: 'var(--font-wordmark), "Sackers Gothic", var(--font-display), sans-serif',
        fontSize: size,
        lineHeight: 0.86,
        letterSpacing: '-0.005em',
        display: 'inline-block',
        whiteSpace: 'nowrap',
        color: 'var(--brand-white)',
        textShadow: `${-d}px ${d * 0.7}px 0 var(--brand-magenta), ${d}px ${-d * 0.7}px 0 var(--brand-cyan)`,
      }}
    >
      {text}
    </Tag>
  );
}
