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
import { SectionJump } from '@/components/SectionJump';
import { JsonLd } from '@/components/JsonLd';
import { serviceSchema, caseStudySchema } from '@/lib/seo';


import { posts, readingMinutes } from '@/data/posts';
import { postHeroAt } from '@/lib/blog-images';
import { pageCopy } from '@/content/copy';
import { getCategories, getPosts, getWork } from '@/content/collections';

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

/** Built inside the component, because the posts are read at request time:
 *  at module scope this only ever saw the repository's, so a post written in
 *  the Studio never reached the front page. */
const buildTeasers = (list: typeof posts) => list.slice(0, 6).map((p, i) => ({
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
  ...(postHeroAt(p.image, p.heroUpload as never, 960)
    ? { image: postHeroAt(p.image, p.heroUpload as never, 960)! }
    : {}),
}));

export default async function HomePage() {
  const copy = await pageCopy('home');
  const categories = await getCategories();
  const teaserPosts = buildTeasers(await getPosts());
  const work = await getWork();
  const featuredWork = work.filter((w) => w.featured);
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

      <HeroSection copy={copy.hero} />
      {/* Each section is wrapped with the id the jump arrow scrolls to. The ids
          come from HOME_SECTIONS, so the list in the arrow and the anchors on
          the page cannot drift apart. */}
      <div id="studio">
        <StudioSection copy={copy.studio} />
      </div>
      {/* The three arms, right after the studio intro: what the company is,
          before what it sells. */}
      <div id="divisions">
        <UniverseSection copy={copy.universe} />
      </div>
      <div id="philosophy">
        <PhilosophySection copy={copy.philosophy} />
      </div>
      <div id="services">
        <ServicesSection copy={copy.services} categories={categories} />
      </div>
      {/* The receipts, immediately after the claims. */}
      <div id="work">
        <SelectedDamageSection copy={copy.selectedDamage} work={work} />
      </div>
      <div id="process">
        <ProcessSection copy={copy.process} />
      </div>
      <div id="pricing">
        <PricingSection copy={copy.pricing} />
      </div>
      <div id="blog">
        <BlogSection copy={copy.blog} posts={teaserPosts} />
      </div>
      <CTASection copy={copy.cta} />
      <div id="clients">
        <ClientsSection copy={copy.clients} />
      </div>
      <div id="contact">
        <ContactSection copy={copy.contact} />
      </div>

      <SectionJump />
    </div>
  );
}
