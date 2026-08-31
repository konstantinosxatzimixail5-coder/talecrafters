import { HeroSection } from '@/components/HeroSection';
import { StudioSection } from '@/components/StudioSection';
import { UniverseSection } from '@/components/UniverseSection';
import { PhilosophySection } from '@/components/PhilosophySection';
import { ServicesSection } from '@/components/ServicesSection';
import { SelectedDamageSection } from '@/components/SelectedDamageSection';
import { FilmsSection } from '@/components/FilmsSection';
import { ProcessSection } from '@/components/ProcessSection';
import { PricingSection } from '@/components/PricingSection';
import { BlogSection } from '@/components/BlogSection';
import { CTASection } from '@/components/CTASection';
import { ContactSection } from '@/components/ContactSection';
import { ImpCursor } from '@/components/ImpCursor';
import { ClientsSection } from '@/components/ClientsSection';
import { JsonLd } from '@/components/JsonLd';
import { serviceSchema, caseStudySchema } from '@/lib/seo';
import { categories } from '@/data/arsenal';
import { featuredWork } from '@/data/work';
import { posts, readingMinutes } from '@/data/posts';
import { heroExists, heroSrc } from '@/lib/blog-images';

// The teaser takes the six newest published posts. It used to carry six
// invented ones with stock photography, each linking to a slug that did not
// exist, so the front page shipped six 404s. Reading the real list means the
// section cannot describe a post that is not there.
const TEASER_COLORS = [
  'var(--brand-cyan)',
  'var(--brand-magenta)',
  'var(--brand-gold)',
  'var(--brand-violet-text)',
];

const teaserPosts = posts.slice(0, 6).map((p, i) => ({
  title: p.title,
  subtitle: p.excerpt,
  slug: p.slug,
  category: p.section.toUpperCase(),
  readTime: `${readingMinutes(p)} min`,
  date: new Date(p.published).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }),
  color: TEASER_COLORS[i % TEASER_COLORS.length],
  ...(heroExists(p.image) ? { image: heroSrc(p.image, 960) } : {}),
}));

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

      <ImpCursor />

      <HeroSection />
      <StudioSection />
      {/* The three arms, right after the studio intro: what the company is,
          before what it sells. */}
      <UniverseSection />
      <PhilosophySection />
      <ServicesSection />
      {/* The receipts, immediately after the claims. */}
      <SelectedDamageSection />
      {/* The originals, where the whole method is published rather than
          described: client work proves we deliver, the films prove how. */}
      <FilmsSection />
      <ProcessSection />
      <PricingSection />
      <BlogSection posts={teaserPosts} />
      <CTASection />
      <ClientsSection />
      <ContactSection />
    </div>
  );
}
