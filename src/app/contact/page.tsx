import { ContactSection } from '@/components/ContactSection';
import { PageHeader } from '@/components/kit';
import { JsonLd } from '@/components/JsonLd';
import { pageMeta, breadcrumbSchema } from '@/lib/seo';
import { site, abs, SITE_URL } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Contact — Start a Conspiracy',
  description:
    'Tell us what is coming, when it has to be live and what you think makes it impossible. You will get a shape, a stack and a number, not a discovery workshop.',
  path: '/contact',
  keywords: ['contact creative agency', 'brief a studio', 'synthetic media studio contact'],
});

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Contact', path: '/contact' },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        graph={[
          breadcrumbSchema(crumbs),
          {
            '@type': 'ContactPage',
            url: abs('/contact'),
            name: 'Contact TaleCrafters',
            mainEntity: { '@id': `${SITE_URL}/#organization` },
          },
          {
            '@type': 'ContactPoint',
            contactType: 'Sales',
            email: site.email,
            areaServed: ['GB', 'EU', 'US'],
            availableLanguage: ['English', 'Greek'],
          },
        ]}
      />
      <PageHeader
        eyebrow="007 / START A CONSPIRACY"
        title="TELL US WHAT"
        accentWord="YOU'RE PLOTTING"
        color="var(--brand-gold)"
        crumbs={crumbs}
        lede="Bring the launch, the deadline and the constraint you think kills it. You will get a shape, a stack and a number back, not a discovery workshop and a deck about our values."
        meta={[
          { label: 'Email', value: site.email },
          { label: 'Registered', value: 'London, United Kingdom' },
          { label: 'Working', value: 'UK, Europe, US' },
          { label: 'Languages', value: 'English, Greek' },
        ]}
      />
      <ContactSection hideHeading />
    </>
  );
}
