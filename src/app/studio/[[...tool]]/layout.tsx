import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'TaleCrafters Studio',
  description: 'Content management for talecrafters.studio',
  // An editing tool has no business in an index.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  // The Studio ships its own light and dark themes and reads the OS setting.
  // The public site is dark-only, which is why this is set here rather than
  // inherited from the root.
  colorScheme: 'light dark',
};

/**
 * The Studio's page.
 *
 * It sits outside the (site) route group on purpose, so none of the marketing
 * chrome renders around it: no header, no footer, no consent banner, no
 * Organization graph. All it inherits from the root layout is <html>, <body>
 * and the fonts.
 *
 * The reset matters. The body carries the site's black background, off-white
 * text and body font as inline styles, and the Studio is a full application
 * with its own type scale and its own themes; inheriting those made it look
 * like a broken page rather than a tool. Height is fixed to the viewport
 * because the Studio scrolls its own panes.
 */
export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        height: '100dvh',
        overflow: 'auto',
        background: 'inherit',
        color: 'initial',
        font: 'initial',
      }}
    >
      {children}
    </div>
  );
}
