"use client";

/**
 * TALECRAFTERS set as live text rather than an image: three stacked copies of
 * the same word, magenta behind and cyan in front, offset a couple of pixels
 * each way. It is the misregistered-print look, and doing it in type means it
 * stays sharp on any screen and can be read by a crawler as the company name.
 *
 * `offset` scales the misregistration with the type size. At 14px a 3px shift
 * is a smear; at 120px it is invisible. Keeping it proportional fixes both.
 */
export function Wordmark({
  size = 28,
  /** Misregistration in px. Derived from `size` when that is a number; pass it
   *  explicitly when `size` is a CSS length the component cannot measure. */
  offset,
  className,
  as: Tag = 'span',
  text = 'TALECRAFTERS',
}: {
  size?: number | string;
  offset?: number;
  className?: string;
  as?: 'span' | 'h1' | 'div';
  text?: string;
}) {
  const d = offset ?? (typeof size === 'number' ? Math.max(1.5, size * 0.05) : 1.5);

  const base: React.CSSProperties = {
    fontFamily: '"Anton", "Sackers Gothic", "Space Grotesk", sans-serif',
    fontSize: size,
    lineHeight: 0.86,
    letterSpacing: '-0.005em',
    display: 'block',
    whiteSpace: 'nowrap',
  };

  const ghost: React.CSSProperties = {
    ...base,
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    userSelect: 'none',
  };

  return (
    <Tag
      className={className}
      style={{ position: 'relative', display: 'inline-block', lineHeight: 0.86 }}
    >
      <span aria-hidden style={{ ...ghost, color: 'var(--brand-magenta)', transform: `translate(${-d}px, ${d * 0.7}px)` }}>
        {text}
      </span>
      <span aria-hidden style={{ ...ghost, color: 'var(--brand-cyan)', transform: `translate(${d}px, ${-d * 0.7}px)` }}>
        {text}
      </span>
      <span style={{ ...base, position: 'relative', color: 'var(--brand-white)' }}>{text}</span>
    </Tag>
  );
}
