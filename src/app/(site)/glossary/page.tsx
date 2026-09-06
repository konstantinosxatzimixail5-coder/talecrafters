import Link from 'next/link';
import { terms as repoTerms, byLetter, alphabet, GLOSSARY_TAGS, termsByTag } from '@/data/glossary';
import { getTerms } from '@/content/collections';
import { PageHeader, Eyebrow, CtaBar } from '@/components/kit';
import { Reveal } from '@/components/Reveal';
import { GlossarySearch } from '@/components/GlossarySearch';
import { JsonLd } from '@/components/JsonLd';
import { pageMeta, breadcrumbSchema, definedTermSchema } from '@/lib/seo';
import { abs, SITE_URL } from '@/lib/site';
import { pageCopy } from '@/content/copy';

export const metadata = pageMeta({
  title: `Synthetic Media & Storytelling Glossary — ${repoTerms.length} Terms`,
  description:
    `${repoTerms.length} terms from synthetic media production and story craft, defined the way a maker needs them: agentic workflows, drift, master plates, temporal coherence and disclosure, alongside three-act structure, the inciting incident, hooks, open loops, value shifts and the beat sheet.`,
  path: '/glossary',
  keywords: [
    'generative AI glossary',
    'synthetic media glossary',
    'storytelling glossary',
    'narrative structure terms',
    'story structure glossary',
    'video hook definition',
    'AI video terms',
    'AI marketing glossary',
    'screenwriting terms explained',
    'AI production terminology',
  ],
});

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Glossary', path: '/glossary' },
];

const tagColor: Record<string, string> = {
  production: 'var(--brand-magenta)',
  models: 'var(--brand-cyan)',
  control: 'var(--brand-violet)',
  ethics: 'var(--brand-gold)',
  systems: 'var(--brand-cyan)',
  post: 'var(--brand-magenta)',
  strategy: 'var(--brand-violet)',
  story: 'var(--brand-gold)',
  audience: 'var(--brand-cyan)',
};

export default async function GlossaryIndex() {
  const copy = await pageCopy('glossary');
  const terms = await getTerms();
  const grouped = byLetter();
  const live = alphabet.filter((l) => grouped.has(l));

  return (
    <>
      <JsonLd
        graph={[
          breadcrumbSchema(crumbs),
          {
            '@type': 'DefinedTermSet',
            '@id': `${SITE_URL}/glossary/#set`,
            name: 'The TaleCrafters Glossary of Synthetic Media & Storytelling',
            url: abs('/glossary'),
            description:
              `${terms.length} terms from synthetic media production and story craft, defined for people who have to ship the work.`,
            publisher: { '@id': `${SITE_URL}/#organization` },
            hasDefinedTerm: terms.map((t) =>
              definedTermSchema({ term: t.term, slug: t.slug, short: t.short, tags: t.tags })
            ),
          },
        ]}
      />

      <PageHeader
        eyebrow={copy.header.eyebrow}
        title={copy.header.title}
        accentWord={copy.header.accentWord}
        color="var(--brand-gold)"
        crumbs={crumbs}
        lede={copy.header.lede}
        meta={copy.header.meta}
      >
        <Reveal delay={0.18}>
          <div className="mt-10">
            <GlossarySearch terms={terms} />
          </div>
        </Reveal>
      </PageHeader>

      {/* Alphabet index */}
      <nav className="px-5 md:px-10 lg:px-14 pb-8" aria-label="Alphabet index">
        <div className="max-w-[1400px] mx-auto flex flex-wrap gap-1.5">
          {alphabet.map((l) => {
            const has = grouped.has(l);
            return has ? (
              <a
                key={l}
                href={`#letter-${l}`}
                className="w-9 h-9 flex items-center justify-center text-sm transition-colors"
                style={{
                  fontFamily: 'var(--font-display)',
                  border: '1px solid rgba(201,168,76,0.4)',
                  color: 'var(--brand-gold)',
                  textDecoration: 'none',
                }}
              >
                {l}
              </a>
            ) : (
              <span
                key={l}
                aria-hidden
                className="w-9 h-9 flex items-center justify-center text-sm"
                style={{ fontFamily: 'var(--font-display)', border: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.16)' }}
              >
                {l}
              </span>
            );
          })}
        </div>
      </nav>

      {/* Topic tags */}
      <section className="px-5 md:px-10 lg:px-14 pb-12">
        <div className="max-w-[1400px] mx-auto">
          <Eyebrow color="var(--brand-cyan)">BY TOPIC</Eyebrow>
          <div className="mt-5 flex flex-wrap gap-2">
            {GLOSSARY_TAGS.map((tag) => (
              <Link
                key={tag}
                href={`/glossary/tag/${tag}`}
                className="px-4 py-2 text-[11px] tracking-[0.16em] transition-colors"
                style={{
                  fontFamily: 'var(--font-mono)',
                  border: `1px solid ${tagColor[tag]}44`,
                  color: tagColor[tag],
                  textDecoration: 'none',
                }}
              >
                {tag.toUpperCase()} · {termsByTag(tag).length}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* A–Z sections */}
      {live.map((letter) => (
        <section key={letter} id={`letter-${letter}`} className="px-5 md:px-10 lg:px-14 py-6 scroll-mt-24">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
            <div className="lg:col-span-2">
              <div
                className="text-6xl md:text-8xl leading-none tracking-tighter sticky top-24"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-gold)', opacity: 0.3 }}
              >
                {letter}
              </div>
            </div>
            <div className="lg:col-span-10 space-y-px" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}>
              {grouped.get(letter)!.map((t) => (
                <Link
                  key={t.slug}
                  href={`/glossary/${t.slug}`}
                  className="block p-5 md:p-6 group"
                  style={{ backgroundColor: 'var(--brand-black)', textDecoration: 'none' }}
                >
                  <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                    <h2
                      className="text-xl md:text-2xl tracking-tighter md:w-64 md:flex-shrink-0"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-white)' }}
                    >
                      {t.term}
                    </h2>
                    <p
                      className="text-sm md:text-base leading-relaxed flex-1"
                      style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}
                    >
                      {t.short}
                    </p>
                    <span
                      className="text-sm hidden md:block"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-gold)' }}
                    >
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <div className="pt-10" />

      <CtaBar
        color="var(--brand-gold)"
        eyebrow="MISSING SOMETHING?"
        title="A term we should have defined and didn't?"
        body="Send it over. If it belongs in the working vocabulary of anyone shipping synthetic media, it belongs on this page."
      />
    </>
  );
}
