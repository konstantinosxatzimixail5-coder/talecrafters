import { HeroSection } from '@/components/HeroSection';
import { StudioSection } from '@/components/StudioSection';
import { UniverseSection } from '@/components/UniverseSection';
import { PhilosophySection } from '@/components/PhilosophySection';
import { ServicesSection } from '@/components/ServicesSection';
import { SelectedDamageSection } from '@/components/SelectedDamageSection';
import { ProcessSection } from '@/components/ProcessSection';
import { PricingSection } from '@/components/PricingSection';
import { BlogSection } from '@/components/BlogSection';
import { CTASection } from '@/components/CTASection';
import { ContactSection } from '@/components/ContactSection';
import { ClientsSection } from '@/components/ClientsSection';
import { JsonLd } from '@/components/JsonLd';
import { serviceSchema, caseStudySchema } from '@/lib/seo';
import { categories } from '@/data/arsenal';
import { featuredWork } from '@/data/work';

export default function HomePage() {
  return (
    <div
      className="relative"
      style={{
        position: 'relative',
        backgroundColor: 'var(--brand-black)',
        color: 'var(--brand-white)',
        fontFamily: 'var(--font-body)',
      }}
    >
      <JsonLd
        graph={[
          ...categories.map((c) =>
            serviceSchema({
              name: `${c.title}: ${c.descriptor}`,
              description: c.intro,
              path: `/arsenal#${c.slug}`,
              serviceType: c.descriptor,
            })
          ),
          ...featuredWork.map((w) =>
            caseStudySchema({
              title: w.title,
              client: w.client,
              year: w.year,
              slug: w.slug,
              summary: w.summary,
              image: `/img/${w.hero.src}-960.webp`,
            })
          ),
        ]}
      />

      <HeroSection />
      <StudioSection />
      {/* The three arms, right after the studio intro: what the company is,
          before what it sells. */}
      <UniverseSection />
      <PhilosophySection />
      <ServicesSection />
      {/* The receipts, immediately after the claims. */}
      <SelectedDamageSection />
      <ProcessSection />
      <PricingSection />
      <BlogSection />
      <CTASection />
      <ClientsSection />
      <ContactSection />
    </div>
  );
}
