import Link from 'next/link';
import { notFound } from 'next/navigation';
import { people, abs } from '@/lib/site';
import { PageHeader } from '@/components/kit';
import { JsonLd } from '@/components/JsonLd';
import { pageMeta, breadcrumbSchema, personSchema } from '@/lib/seo';
import { pageCopy } from '@/content/copy';

/**
 * The author index. Returns a 404 while `people` is empty rather than
 * publishing an empty listing page, because a thin index that exists only to
 * be crawled is a liability, and a 404 is honest until there is somebody on it.
 */
export const metadata = pageMeta({
  title: 'Authors',
  description: 'The people who write the work published on talecrafters.studio.',
  path: '/authors',
});

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Authors', path: '/authors' },
];

export default async function AuthorsIndex() {
  const copy = await pageCopy('authors');
  if (!people.length) notFound();

  return (
    <>
      <JsonLd
        graph={[
          breadcrumbSchema(crumbs),
          {
            '@type': 'CollectionPage',
            name: 'Authors',
            url: abs('/authors'),
            description: 'The people who write the work published on talecrafters.studio.',
            hasPart: people.map((p) => ({ '@id': abs(`/authors/${p.slug}/#person`) })),
          },
          ...people.map((p) =>
            personSchema({
              slug: p.slug,
              name: p.name,
              jobTitle: p.jobTitle,
              bio: p.bio,
              image: p.image,
              sameAs: p.sameAs,
              knowsAbout: p.knowsAbout,
              founder: p.founder,
            })
          ),
        ]}
      />

      <PageHeader
        eyebrow={copy.header.eyebrow}
        title={copy.header.title}
        color="var(--brand-cyan)"
        lede={copy.header.lede}
        crumbs={crumbs}
      />

      <section className="px-5 md:px-10 lg:px-14 pb-20">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {people.map((p) => (
            <Link
              key={p.slug}
              href={`/authors/${p.slug}`}
              className="block p-6 transition-colors"
              style={{ border: '1px solid var(--brand-concrete)', textDecoration: 'none' }}
            >
              <span
                className="block text-[10px] tracking-[0.3em] mb-2"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-cyan)' }}
              >
                {p.jobTitle.toUpperCase()}
              </span>
              <span
                className="block text-2xl tracking-tight mb-2"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-white)' }}
              >
                {p.name}
              </span>
              <span className="block text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}>
                {p.bio}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
