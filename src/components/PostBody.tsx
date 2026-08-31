import Link from 'next/link';
import type { Block } from '@/data/posts';

/**
 * Renders the block union from a repo-native post.
 *
 * Deliberately not a Markdown or HTML renderer. Every block type is a case in
 * this switch, which means the set of shapes a post can take is a decision
 * somebody made rather than whatever an author happened to type, and nothing
 * reaches the DOM as raw markup.
 */
export function PostBody({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        const key = `${b.t}-${i}`;
        switch (b.t) {
          case 'h2':
            return (
              <h2
                key={key}
                className="text-3xl md:text-4xl tracking-tighter mt-14 mb-4"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-gold)', lineHeight: 1.05 }}
              >
                {b.text}
              </h2>
            );
          case 'h3':
            return (
              <h3
                key={key}
                className="text-xl md:text-2xl tracking-tight mt-9 mb-3"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-cyan)' }}
              >
                {b.text}
              </h3>
            );
          case 'p':
            return (
              <p key={key} className="mb-5" style={{ color: '#D9D9D9', fontSize: '1.08rem', lineHeight: 1.8 }}>
                {b.text}
              </p>
            );
          case 'ul':
            return (
              <ul key={key} className="mb-6 space-y-3 pl-0">
                {b.items.map((item, j) => (
                  <li key={j} className="flex gap-3" style={{ color: '#D9D9D9', fontSize: '1.05rem', lineHeight: 1.75 }}>
                    <span aria-hidden style={{ color: 'var(--brand-magenta)', flexShrink: 0 }}>
                      —
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case 'ol':
            return (
              <ol key={key} className="mb-6 space-y-3 pl-0" style={{ counterReset: 'step' }}>
                {b.items.map((item, j) => (
                  <li key={j} className="flex gap-3" style={{ color: '#D9D9D9', fontSize: '1.05rem', lineHeight: 1.75 }}>
                    <span
                      aria-hidden
                      className="flex-shrink-0 text-sm"
                      style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-cyan)', minWidth: '1.6rem' }}
                    >
                      {String(j + 1).padStart(2, '0')}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            );
          case 'quote':
            return (
              <blockquote
                key={key}
                className="my-9 pl-6 py-3"
                style={{
                  borderLeft: '4px solid var(--brand-magenta)',
                  color: '#E8E8E4',
                  fontStyle: 'italic',
                  fontSize: '1.2rem',
                  lineHeight: 1.7,
                }}
              >
                {b.text}
              </blockquote>
            );
          case 'note':
            return (
              <aside
                key={key}
                className="my-9 p-6"
                style={{ border: '1px solid rgba(0,229,204,0.28)', backgroundColor: 'rgba(0,229,204,0.05)' }}
              >
                <p
                  className="text-[10px] tracking-[0.28em] mb-3"
                  style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-cyan)' }}
                >
                  {b.title.toUpperCase()}
                </p>
                <p style={{ color: '#E8E8E4', fontSize: '1.05rem', lineHeight: 1.7, margin: 0 }}>{b.text}</p>
              </aside>
            );
          case 'table':
            return (
              // The wrapper scrolls rather than the page. A wide table inside a
              // 750px column otherwise pushes the whole document sideways on a
              // phone, which breaks every other paragraph to save this one.
              <figure key={key} className="my-9 -mx-2">
                <div className="overflow-x-auto" style={{ border: '1px solid var(--brand-concrete)' }}>
                  <table className="w-full border-collapse" style={{ minWidth: '520px' }}>
                    <thead>
                      <tr>
                        {b.head.map((h) => (
                          <th
                            key={h}
                            scope="col"
                            className="text-left px-4 py-3 text-[11px] tracking-[0.14em] align-bottom"
                            style={{
                              fontFamily: 'var(--font-mono)',
                              color: 'var(--brand-cyan)',
                              borderBottom: '1px solid var(--brand-concrete)',
                              backgroundColor: 'rgba(255,255,255,0.02)',
                            }}
                          >
                            {h.toUpperCase()}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {b.rows.map((row, j) => (
                        <tr key={j}>
                          {row.map((cell, k) => (
                            <td
                              key={k}
                              className="px-4 py-3 align-top"
                              style={{
                                color: k === 0 ? 'var(--brand-white)' : '#C8C8C4',
                                fontSize: '0.92rem',
                                lineHeight: 1.55,
                                borderTop: j === 0 ? 'none' : '1px solid rgba(255,255,255,0.06)',
                              }}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {b.caption && (
                  <figcaption
                    className="text-xs mt-2"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
                  >
                    {b.caption}
                  </figcaption>
                )}
              </figure>
            );
          case 'cta':
            return (
              <div
                key={key}
                className="my-10 p-6"
                style={{ border: '1px solid rgba(255,45,111,0.3)', backgroundColor: 'rgba(255,45,111,0.04)' }}
              >
                <p style={{ color: '#E8E8E4', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '1rem' }}>{b.text}</p>
                <Link
                  href={b.href}
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] px-4 py-2"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--brand-white)',
                    border: '1px solid var(--brand-magenta)',
                    textDecoration: 'none',
                  }}
                >
                  {b.label.toUpperCase()} →
                </Link>
              </div>
            );
        }
      })}
    </>
  );
}
