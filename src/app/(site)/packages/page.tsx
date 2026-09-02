import { PricingSection } from '@/components/PricingSection';
import { PageHeader, Eyebrow, CtaBar } from '@/components/kit';
import { JsonLd } from '@/components/JsonLd';
import { pageMeta, breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/seo';
import { faqGroups as repoFaqGroups } from '@/data/faq';
import { pageCopy } from '@/content/copy';
import { getFaqGroups } from '@/content/collections';

export const metadata = pageMeta({
  title: 'Packages — Four Ways to Work With Us',
  description:
    'The Alliance for ongoing creative partnership, The Forge for predictable monthly output, The Mission for a single project, The Shadow Protocol for white-label production. Escalation levels for Content-as-Service.',
  path: '/packages',
  keywords: [
    'creative retainer',
    'content as a service',
    'white label creative production',
    'monthly content subscription',
    'creative agency packages',
  ],
});

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Packages', path: '/packages' },
];

/** The fallback, used when the dataset has no FAQ sections. */
const repoQa = repoFaqGroups.find((g) => g.title === 'WORKING WITH US')!.items;

export default async function PackagesPage() {
  const qa =
    (await getFaqGroups()).find((g) => g.title === 'WORKING WITH US')?.items ?? repoQa;
  const home = await pageCopy('home');
  const copy = await pageCopy('packages');
  return (
    <>
      <JsonLd
        graph={[
          breadcrumbSchema(crumbs),
          // A packages page is a commercial page, so it gets a Service node
          // with the four shapes as an offer catalogue. No `price` on any of
          // them: nothing here is a rate card, and a Offer carrying a number we
          // do not actually publish would be a false claim in the markup even
          // though the visible page is honest about it.
          serviceSchema({
            name: 'Content-as-Service engagements',
            description:
              'Four ways to engage TaleCrafters: an ongoing creative partnership, a fixed monthly output subscription, a single project, and white-label production for agencies and studios.',
            path: '/packages',
            serviceType: 'Creative production engagement',
            offers: [
              { name: 'The Alliance', detail: 'Ongoing creative partnership with dedicated monthly capacity' },
              { name: 'The Forge', detail: 'Predictable fixed monthly output, delivered to a schedule' },
              { name: 'The Mission', detail: 'A single project with one deliverable and maximum focus' },
              { name: 'The Shadow Protocol', detail: 'White-label production for agencies, studios and consultancies' },
            ],
          }),
          faqSchema(qa),
        ]}
      />
      <PageHeader
        eyebrow={copy.header.eyebrow}
        title={copy.header.title}
        accentWord={copy.header.accentWord}
        color="var(--brand-magenta)"
        crumbs={crumbs}
        lede={copy.header.lede}
        meta={copy.header.meta}
      />
      <PricingSection copy={home.pricing} hideHeading />
      <section className="px-5 md:px-10 lg:px-14 py-12">
        <div className="max-w-[1400px] mx-auto">
          <Eyebrow color="var(--brand-magenta)">BEFORE YOU ASK</Eyebrow>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
            {qa.map((item) => (
              <div key={item.q} className="p-6" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                <h2 className="text-lg mb-3 leading-snug" style={{ fontFamily: 'var(--font-display)' }}>
                  {item.q}
                </h2>
                <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBar
        title="None of these fit?"
        body="Then it is a conversation rather than a package. Tell us the shape of the problem and we will tell you honestly whether we are the right studio for it."
      />
    </>
  );
}
