import Link from 'next/link';
import { notFound } from 'next/navigation';
import { GLOSSARY_TAGS, termsByTag, terms } from '@/data/glossary';
import { PageHeader, CtaBar } from '@/components/kit';
import { JsonLd } from '@/components/JsonLd';
import { pageMeta, breadcrumbSchema, definedTermSchema } from '@/lib/seo';
import { abs } from '@/lib/site';

export function generateStaticParams() {
  return GLOSSARY_TAGS.map((tag) => ({ tag }));
}

const meta: Record<string, { title: string; lede: string; color: string }> = {
  production: {
    title: 'PRODUCTION',
    lede: 'The terms that decide whether a set of frames becomes a campaign or a demo: plates, drift, consistency, registers and the gates that catch them.',
    color: 'var(--brand-magenta)',
  },
  models: {
    title: 'MODELS',
    lede: 'What the machinery is actually doing (diffusion, latent space, steps, seeds, adapters) explained in the amount of detail a producer needs and no more.',
    color: 'var(--brand-cyan)',
  },
  control: {
    title: 'CONTROL',
    lede: 'Every lever between a prompt and a predictable frame: conditioning, references, guidance, negatives and the trained identity.',
    color: 'var(--brand-violet-text)',
  },
  ethics: {
    title: 'ETHICS & RIGHTS',
    lede: 'Disclosure, consent, provenance, watermarking and the difference between a synthetic presenter and a deepfake. The part that decides whether the work can run.',
    color: 'var(--brand-gold)',
  },
  systems: {
    title: 'SYSTEMS',
    lede: 'Agentic workflows, protocols, retrieval and the ledger. The machinery around the generation, which is the half that survives a model change.',
    color: 'var(--brand-cyan)',
  },
  post: {
    title: 'POST',
    lede: 'What happens after the render: inpainting, outpainting, upscaling, style, and the rules about which of those is allowed to touch a face.',
    color: 'var(--brand-magenta)',
  },
  strategy: {
    title: 'STRATEGY',
    lede: 'The commercial terms: what synthetic media is, what slop costs you, how registers keep volume from turning into wallpaper, and how to budget any of it.',
    color: 'var(--brand-violet-text)',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const m = meta[tag];
  if (!m) return {};
  const list = termsByTag(tag);
  return pageMeta({
    title: `${m.title}: Glossary Terms`,
    description: `${list.length} terms on ${tag} from the TaleCrafters glossary of generative and synthetic media: ${list
      .slice(0, 6)
      .map((t) => t.term)
      .join(', ')}.`,
    path: `/glossary/tag/${tag}`,
    keywords: [`${tag} glossary`, 'synthetic media terms', ...list.slice(0, 8).map((t) => t.term)],
  });
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const m = meta[tag];
  if (!m) notFound();
  const list = termsByTag(tag);

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Glossary', path: '/glossary' },
    { name: m.title, path: `/glossary/tag/${tag}` },
  ];

  return (
    <>
      <JsonLd
        graph={[
          breadcrumbSchema(crumbs),
          {
            '@type': 'CollectionPage',
            name: `${m.title}: glossary terms`,
            url: abs(`/glossary/tag/${tag}`),
            description: m.lede,
            hasPart: list.map((t) =>
              definedTermSchema({ term: t.term, slug: t.slug, short: t.short, tags: t.tags })
            ),
          },
        ]}
      />

      <PageHeader
        eyebrow={`GLOSSARY · ${list.length} TERMS`}
        title={m.title}
        color={m.color}
        crumbs={crumbs}
        lede={m.lede}
      />

      <section className="px-5 md:px-10 lg:px-14 pb-16">
        <div className="max-w-[1400px] mx-auto space-y-px" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}>
          {list.map((t) => (
            <Link
              key={t.slug}
              href={`/glossary/${t.slug}`}
              className="block p-6 group"
              style={{ backgroundColor: 'var(--brand-black)', textDecoration: 'none' }}
            >
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                <h2
                  className="text-2xl md:text-3xl tracking-tighter md:w-72 md:flex-shrink-0"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-white)' }}
                >
                  {t.term}
                </h2>
                <p className="text-base leading-relaxed flex-1" style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}>
                  {t.short}
                </p>
                <span className="text-lg hidden md:block" style={{ fontFamily: 'var(--font-display)', color: m.color }}>
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="max-w-[1400px] mx-auto mt-8 flex flex-wrap gap-2">
          {GLOSSARY_TAGS.filter((x) => x !== tag).map((x) => (
            <Link
              key={x}
              href={`/glossary/tag/${x}`}
              className="px-4 py-2 text-[11px] tracking-[0.16em]"
              style={{ fontFamily: 'var(--font-mono)', border: '1px solid rgba(255,255,255,0.14)', color: 'var(--brand-concrete-light)', textDecoration: 'none' }}
            >
              {x.toUpperCase()} · {termsByTag(x).length}
            </Link>
          ))}
          <Link
            href="/glossary"
            className="px-4 py-2 text-[11px] tracking-[0.16em]"
            style={{ fontFamily: 'var(--font-mono)', border: `1px solid ${m.color}55`, color: m.color, textDecoration: 'none' }}
          >
            ALL {terms.length} TERMS →
          </Link>
        </div>
      </section>

      <CtaBar color={m.color} title="Enough theory." body="Bring us the launch and we will show you which of these terms is about to cost you a week." />
    </>
  );
}
