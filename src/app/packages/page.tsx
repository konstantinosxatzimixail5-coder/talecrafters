import { PricingSection } from '@/components/PricingSection';
import { PageHeader, CtaBar } from '@/components/kit';
import { JsonLd } from '@/components/JsonLd';
import { pageMeta, breadcrumbSchema, faqSchema } from '@/lib/seo';
import { faqGroups } from '@/data/faq';

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

const qa = faqGroups.find((g) => g.title === 'WORKING WITH US')!.items;

export default function PackagesPage() {
  return (
    <>
      <JsonLd graph={[breadcrumbSchema(crumbs), faqSchema(qa)]} />
      <PageHeader
        eyebrow="007 / PACKAGES"
        title="PICK YOUR"
        accentWord="PLOT"
        color="var(--brand-magenta)"
        crumbs={crumbs}
        lede="Four escalation levels for Content-as-Service. Nothing here is a rate card, because a run of forty variants from one trained identity and a single hero film are not the same job with a different number on it. Pick the shape, and we will quote the work."
        meta={[
          { label: 'Ongoing', value: 'The Alliance' },
          { label: 'Fixed monthly output', value: 'The Forge' },
          { label: 'Single project', value: 'The Mission' },
          { label: 'White label', value: 'The Shadow Protocol' },
        ]}
      />
      <PricingSection hideHeading />
      <CtaBar
        title="None of these fit?"
        body="Then it is a conversation rather than a package. Tell us the shape of the problem and we will tell you honestly whether we are the right studio for it."
      />
    </>
  );
}
