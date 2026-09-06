import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Download } from 'lucide-react';
import { getResource, downloadableResources } from '@/data/resources';
import { getTool, type ToolBlock } from '@/data/downloads';
import { getTools } from '@/content/collections';
import { postsForResource } from '@/data/posts';
import { PageHeader, Eyebrow, CtaBar } from '@/components/kit';
import { Reveal } from '@/components/Reveal';
import { JsonLd } from '@/components/JsonLd';
import { pageMeta, breadcrumbSchema, howToSchema } from '@/lib/seo';
import { abs, SITE_URL, site } from '@/lib/site';

/**
 * The downloadable Supply Drop tools.
 *
 * Only resources carrying a `pdf` render here. The two original guides
 * (camera-movements, animation-prompting) have bespoke static routes, which
 * take precedence over this dynamic segment, and are excluded from the params
 * so nothing is generated twice.
 */
export function generateStaticParams() {
  return downloadableResources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = getResource(slug);
  if (!r?.pdf) return {};
  return pageMeta({
    title: r.metaTitle ?? r.title,
    description: r.metaDescription ?? r.blurb,
    path: `/supply-drop/${r.slug}`,
    keywords: r.keywords,
  });
}

function Blocks({ blocks, color }: { blocks: ToolBlock[]; color: string }) {
  return (
    <>
      {blocks.map((b, i) => {
        const key = `${b.t}-${i}`;
        switch (b.t) {
          case 'para':
            return (
              <p key={key} className="mb-4 text-base leading-relaxed" style={{ color: 'rgba(245,245,240,0.78)' }}>
                {b.text}
              </p>
            );
          case 'note':
            return (
              <p
                key={key}
                className="my-5 p-4 text-sm leading-relaxed"
                style={{ border: `1px solid ${color}44`, backgroundColor: 'rgba(255,255,255,0.02)', color: 'rgba(245,245,240,0.85)' }}
              >
                {b.text}
              </p>
            );
          case 'check':
            return (
              <div key={key} className="my-5">
                {b.title && (
                  <p className="text-[10px] tracking-[0.26em] mb-3" style={{ fontFamily: 'var(--font-mono)', color }}>
                    {b.title.toUpperCase()}
                  </p>
                )}
                <ul className="space-y-2.5">
                  {b.items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'rgba(245,245,240,0.8)' }}>
                      <span
                        aria-hidden
                        className="flex-shrink-0 mt-[3px]"
                        style={{ width: 13, height: 13, border: `1px solid ${color}`, display: 'inline-block' }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          case 'fields':
            return (
              <div key={key} className="my-5 space-y-4">
                {b.title && (
                  <p className="text-[10px] tracking-[0.26em]" style={{ fontFamily: 'var(--font-mono)', color }}>
                    {b.title.toUpperCase()}
                  </p>
                )}
                {b.fields.map((f, j) => (
                  <div key={j}>
                    <p className="text-sm mb-1" style={{ color: 'var(--brand-white)' }}>
                      {f.label}
                      {f.hint && (
                        <span style={{ color: 'var(--brand-concrete-light)' }}> &middot; {f.hint}</span>
                      )}
                    </p>
                    <div
                      style={{
                        borderBottom: '1px solid rgba(255,255,255,0.14)',
                        height: `${(f.lines ?? 1) * 22}px`,
                      }}
                    />
                  </div>
                ))}
              </div>
            );
          case 'table':
            return (
              <div key={key} className="my-6 overflow-x-auto" style={{ border: '1px solid var(--brand-concrete)' }}>
                <table className="w-full border-collapse" style={{ minWidth: '560px' }}>
                  <thead>
                    <tr>
                      {b.head.map((h) => (
                        <th
                          key={h}
                          scope="col"
                          className="text-left px-3 py-2.5 text-[10px] tracking-[0.14em] align-bottom"
                          style={{
                            fontFamily: 'var(--font-mono)',
                            color,
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
                            className="px-3 py-2.5 align-top"
                            style={{
                              color: k === 0 ? 'var(--brand-white)' : 'rgba(245,245,240,0.72)',
                              fontSize: '0.85rem',
                              lineHeight: 1.5,
                              minHeight: '2rem',
                              borderTop: j === 0 ? 'none' : '1px solid rgba(255,255,255,0.06)',
                            }}
                          >
                            {cell || ' '}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case 'scale':
            return (
              <div key={key} className="my-5">
                {b.title && (
                  <p className="text-[10px] tracking-[0.26em] mb-3" style={{ fontFamily: 'var(--font-mono)', color }}>
                    {b.title.toUpperCase()}
                  </p>
                )}
                <ul className="space-y-3">
                  {b.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start justify-between gap-4 pb-3"
                      style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      <span>
                        <span className="block text-sm" style={{ color: 'var(--brand-white)' }}>
                          {item.label}
                        </span>
                        <span className="block text-xs mt-0.5" style={{ color: 'var(--brand-concrete-light)' }}>
                          {item.detail}
                        </span>
                      </span>
                      <span
                        aria-hidden
                        className="flex gap-1 flex-shrink-0 pt-1"
                        style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--brand-concrete-light)' }}
                      >
                        {[0, 1, 2, 3, 4, 5].map((n) => (
                          <span
                            key={n}
                            style={{
                              width: 16,
                              height: 16,
                              border: '1px solid rgba(255,255,255,0.18)',
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            {n}
                          </span>
                        ))}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
        }
      })}
    </>
  );
}

export default async function SupplyDropToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = getResource(slug);
  const tool = (await getTools()).find((t) => t.slug === slug) ?? getTool(slug);
  if (!r?.pdf || !tool) notFound();

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'The Supply Drop', path: '/supply-drop' },
    { name: r.title, path: `/supply-drop/${r.slug}` },
  ];

  const relatedPosts = postsForResource(r.slug);

  return (
    <>
      <JsonLd
        graph={[
          breadcrumbSchema(crumbs),
          howToSchema({
            name: r.title,
            description: r.metaDescription ?? r.blurb,
            path: `/supply-drop/${r.slug}`,
            steps: tool.howToUse.map((s, i) => ({ name: `Step ${i + 1}`, text: s })),
          }),
          // The download itself, described so it can be found and cited on its
          // own rather than only as an attachment to this page.
          {
            '@type': 'CreativeWork',
            '@id': `${abs(`/supply-drop/${r.slug}`)}#resource`,
            name: r.title,
            headline: r.title,
            description: r.metaDescription ?? r.blurb,
            url: abs(`/supply-drop/${r.slug}`),
            about: r.kicker,
            audience: { '@type': 'Audience', audienceType: r.forWhom },
            learningResourceType: r.format,
            isAccessibleForFree: true,
            inLanguage: 'en-GB',
            creator: { '@id': `${SITE_URL}/#organization` },
            publisher: { '@id': `${SITE_URL}/#organization` },
            license: abs('/terms'),
            copyrightHolder: { '@id': `${SITE_URL}/#organization` },
            encoding: {
              '@type': 'MediaObject',
              contentUrl: abs(r.pdf),
              encodingFormat: 'application/pdf',
              name: `${r.title} (PDF)`,
            },
            ...(relatedPosts.length
              ? { subjectOf: relatedPosts.map((p) => ({ '@id': abs(`/blog/${p.slug}/#article`) })) }
              : {}),
          },
        ]}
      />

      <PageHeader
        eyebrow="THE SUPPLY DROP"
        title={r.title.toUpperCase()}
        color={r.color}
        crumbs={crumbs}
        lede={r.kicker}
        meta={[
          { label: 'Format', value: r.format },
          { label: 'Length', value: r.count },
          { label: 'Gate', value: 'None' },
          { label: 'Licence', value: 'Use it, commercially' },
        ]}
      />

      <section className="px-5 md:px-10 lg:px-14 pb-10">
        <div className="max-w-[880px] mx-auto">
          <Reveal>
            <div className="mb-10">
              {tool.intro.map((p) => (
                <p
                  key={p.slice(0, 40)}
                  className="mb-4 text-lg leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {p}
                </p>
              ))}

              <a
                href={r.pdf}
                download
                className="inline-flex items-center gap-2 mt-4 px-5 py-3 text-[11px] tracking-[0.18em]"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--brand-black)',
                  backgroundColor: r.color,
                  textDecoration: 'none',
                }}
              >
                <Download size={15} /> DOWNLOAD THE PDF
              </a>
              <p className="mt-3 text-xs" style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}>
                No email, no form. The whole thing is on this page too.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="mb-12 p-6" style={{ border: `1px solid ${r.color}30` }}>
              <Eyebrow color={r.color}>HOW TO USE IT</Eyebrow>
              <ol className="mt-4 space-y-2.5">
                {tool.howToUse.map((s, i) => (
                  <li key={s.slice(0, 30)} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'rgba(245,245,240,0.8)' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', color: r.color, minWidth: '1.5rem' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          {tool.sections.map((section, i) => (
            <Reveal key={section.title} delay={Math.min(i, 4) * 0.04}>
              <section className="mb-12">
                <h2
                  className="text-2xl md:text-3xl tracking-tighter mb-1"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-white)' }}
                >
                  {section.title}
                </h2>
                {section.kicker && (
                  <p className="text-sm mb-5" style={{ fontFamily: 'var(--font-mono)', color: r.color }}>
                    {section.kicker}
                  </p>
                )}
                <Blocks blocks={section.blocks} color={r.color} />
              </section>
            </Reveal>
          ))}

          {tool.bands && (
            <Reveal>
              <section className="mb-12">
                <h2
                  className="text-2xl md:text-3xl tracking-tighter mb-5"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-white)' }}
                >
                  Reading the score
                </h2>
                <div className="overflow-x-auto" style={{ border: '1px solid var(--brand-concrete)' }}>
                  <table className="w-full border-collapse" style={{ minWidth: '520px' }}>
                    <thead>
                      <tr>
                        {['Score', 'Verdict', 'What to do'].map((h) => (
                          <th
                            key={h}
                            scope="col"
                            className="text-left px-3 py-2.5 text-[10px] tracking-[0.14em]"
                            style={{
                              fontFamily: 'var(--font-mono)',
                              color: r.color,
                              borderBottom: '1px solid var(--brand-concrete)',
                            }}
                          >
                            {h.toUpperCase()}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {tool.bands.map((b, j) => (
                        <tr key={b.range}>
                          <td
                            className="px-3 py-3 align-top"
                            style={{
                              fontFamily: 'var(--font-mono)',
                              color: 'var(--brand-white)',
                              fontSize: '0.85rem',
                              borderTop: j === 0 ? 'none' : '1px solid rgba(255,255,255,0.06)',
                            }}
                          >
                            {b.range}
                          </td>
                          <td
                            className="px-3 py-3 align-top"
                            style={{
                              color: r.color,
                              fontSize: '0.9rem',
                              borderTop: j === 0 ? 'none' : '1px solid rgba(255,255,255,0.06)',
                            }}
                          >
                            {b.verdict}
                          </td>
                          <td
                            className="px-3 py-3 align-top"
                            style={{
                              color: 'rgba(245,245,240,0.72)',
                              fontSize: '0.85rem',
                              lineHeight: 1.5,
                              borderTop: j === 0 ? 'none' : '1px solid rgba(255,255,255,0.06)',
                            }}
                          >
                            {b.action}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </Reveal>
          )}

          <div className="pt-8 mb-12" style={{ borderTop: '1px solid var(--brand-concrete)' }}>
            <Eyebrow color="var(--brand-concrete-light)">LICENCE</Eyebrow>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--brand-concrete-light)' }}>
              {tool.licence}
            </p>
          </div>

          {relatedPosts.length > 0 && (
            <section className="pt-8 mb-12" style={{ borderTop: '1px solid var(--brand-concrete)' }}>
              <Eyebrow color="var(--brand-magenta)">THE WRITING BEHIND IT</Eyebrow>
              <ul className="mt-5 space-y-4">
                {relatedPosts.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`} style={{ textDecoration: 'none' }}>
                      <span
                        className="block text-lg leading-snug mb-1"
                        style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-white)' }}
                      >
                        {p.title}
                      </span>
                      <span className="block text-sm" style={{ color: 'var(--brand-concrete-light)' }}>
                        {p.excerpt}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <Link
            href="/supply-drop"
            className="text-sm inline-flex items-center min-h-[24px]"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-cyan)', textDecoration: 'none' }}
          >
            &larr; Everything in the Supply Drop
          </Link>
        </div>
      </section>

      <CtaBar
        title="Using this on a live job?"
        body={`If the checklist turns up something you would rather not run yourself, ${site.name} does this for a living. Bring the brief and the deadline.`}
      />
    </>
  );
}
