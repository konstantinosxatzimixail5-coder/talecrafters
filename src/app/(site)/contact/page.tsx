import { ContactSection } from '@/components/ContactSection';
import { PageHeader } from '@/components/kit';
import { JsonLd } from '@/components/JsonLd';
import { pageMeta, breadcrumbSchema } from '@/lib/seo';
import { site, abs, SITE_URL } from '@/lib/site';
import { pageCopy } from '@/content/copy';

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

export default async function ContactPage() {
  const home = await pageCopy('home');
  const copy = await pageCopy('contact');
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
        eyebrow={copy.header.eyebrow}
        title={copy.header.title}
        accentWord={copy.header.accentWord}
        color="var(--brand-gold)"
        crumbs={crumbs}
        lede={copy.header.lede}
        meta={copy.header.meta}
      />
      <ContactSection copy={home.contact} hideHeading />
    </>
  );
}
