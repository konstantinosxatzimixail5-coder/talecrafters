import Link from 'next/link';
import { notFound } from 'next/navigation';
import { people, getPerson } from '@/lib/site';
import { PageHeader, Eyebrow, CtaBar } from '@/components/kit';
import { Reveal } from '@/components/Reveal';
import { JsonLd } from '@/components/JsonLd';
import { pageMeta, breadcrumbSchema, personSchema, profilePageSchema } from '@/lib/seo';

/**
 * Author pages.
 *
 * `people` is empty until there is a real name to publish, so this route
 * currently generates nothing and the /authors index 404s. That is deliberate:
 * a byline page for an invented person is a worse entity signal than no byline
 * page at all. Adding one object to `people` in site.ts lights up this page,
 * the Person node, the founder edge on the Organization, and `author.url` on
 * every article that names them, with no further code changes.
 */
export function generateStaticParams() {
  return people.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPerson(slug);
  if (!p) return {};
  return pageMeta({
    title: `${p.name} — ${p.jobTitle}`,
    description: p.bio,
    path: `/authors/${p.slug}`,
    ...(p.image ? { image: p.image } : {}),
    keywords: [p.name, p.jobTitle, 'TaleCrafters', ...(p.knowsAbout ?? [])],
  });
}

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPerson(slug);
  if (!p) notFound();

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Authors', path: '/authors' },
    { name: p.name, path: `/authors/${p.slug}` },
  ];

  return (
    <>
      <JsonLd
        graph={[
          breadcrumbSchema(crumbs),
          profilePageSchema({ slug: p.slug, name: p.name }),
          personSchema({
            slug: p.slug,
            name: p.name,
            jobTitle: p.jobTitle,
            bio: p.bio,
            image: p.image,
            sameAs: p.sameAs,
            knowsAbout: p.knowsAbout,
            founder: p.founder,
          }),
        ]}
      />

      <PageHeader
        eyebrow={p.jobTitle.toUpperCase()}
        title={p.name.toUpperCase()}
        color="var(--brand-cyan)"
        lede={p.bio}
        crumbs={crumbs}
      />

      {p.body?.length ? (
        <section className="px-5 md:px-10 lg:px-14 py-10 md:py-16">
          <div className="max-w-[1400px] mx-auto">
            <Reveal>
              <div className="max-w-3xl">
                <Eyebrow color="var(--brand-cyan)">BACKGROUND</Eyebrow>
                <div className="mt-6 space-y-5">
                  {p.body.map((para) => (
                    <p key={para.slice(0, 40)} className="text-lg leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      {p.sameAs?.length ? (
        <section className="px-5 md:px-10 lg:px-14 pb-10">
          <div className="max-w-[1400px] mx-auto">
            <Eyebrow color="var(--brand-magenta)">ELSEWHERE</Eyebrow>
            <ul className="mt-4 flex flex-wrap gap-4">
              {p.sameAs.map((href) => (
                <li key={href}>
                  <a
                    href={href}
                    rel="me noopener"
                    className="text-sm"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-cyan)' }}
                  >
                    {href.replace(/^https?:\/\/(www\.)?/, '')}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="px-5 md:px-10 lg:px-14 pb-10">
        <div className="max-w-[1400px] mx-auto">
          <Link href="/blog" style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-cyan)', textDecoration: 'none' }}>
            ← Everything from the blog
          </Link>
        </div>
      </section>

      <CtaBar
        title="Bring the brief."
        body="You will get a shape, a stack and a number back."
        href="/contact"
        cta="START A CONVERSATION"
      />
    </>
  );
}
