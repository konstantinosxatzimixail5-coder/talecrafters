import Link from 'next/link';
import {
  Clapperboard, MonitorPlay, Flame, Wand2, LayoutPanelLeft, Eye, BookMarked, Mic2, Aperture,
  PenLine, Ghost, Boxes, BrainCircuit, Workflow, Repeat, Radar, CodeXml, Globe2, PaintBucket,
  Box, Newspaper, AudioLines, MousePointerClick, Crosshair, ShieldCheck, Megaphone, UserCircle,
  ScanFace, Podcast, Bot,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { categories, arms } from '@/data/arsenal';
import { PageHeader, Eyebrow, CtaBar } from '@/components/kit';
import { Reveal } from '@/components/Reveal';
import { JsonLd } from '@/components/JsonLd';
import { pageMeta, breadcrumbSchema, serviceSchema } from '@/lib/seo';
import { abs } from '@/lib/site';

export const metadata = pageMeta({
  title: 'The Arsenal — Every Capability, Listed Plainly',
  description:
    'Six capability groups and thirty services: generative film and motion, creative strategy and storytelling, agentic workflows and automation, websites and digital experiences, positioning and PR, digital presenters and agents.',
  path: '/arsenal',
  keywords: [
    'creative agency services',
    'generative video services',
    'AI content services',
    'creative automation services',
    'brand design services',
    'synthetic media services',
  ],
});

const icons: Record<string, LucideIcon> = {
  Clapperboard, MonitorPlay, Flame, Wand2, LayoutPanelLeft, Eye, BookMarked, Mic2, Aperture,
  PenLine, Ghost, Boxes, BrainCircuit, Workflow, Repeat, Radar, CodeXml, Globe2, PaintBucket,
  Box, Newspaper, AudioLines, MousePointerClick, Crosshair, ShieldCheck, Megaphone, UserCircle,
  ScanFace, Podcast, Bot,
};

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Arsenal', path: '/arsenal' },
];

export default function ArsenalPage() {
  const total = categories.reduce((n, c) => n + c.services.length, 0);

  return (
    <>
      <JsonLd
        graph={[
          breadcrumbSchema(crumbs),
          ...categories.map((c) =>
            serviceSchema({
              name: `${c.title}: ${c.descriptor}`,
              description: c.intro,
              path: `/arsenal#${c.slug}`,
              serviceType: c.descriptor,
            })
          ),
          {
            '@type': 'ItemList',
            name: 'TaleCrafters capabilities',
            url: abs('/arsenal'),
            numberOfItems: total,
            itemListElement: categories.flatMap((c, ci) =>
              c.services.map((s, si) => ({
                '@type': 'ListItem',
                position: ci * 10 + si + 1,
                name: s.name,
                description: s.desc,
              }))
            ),
          },
        ]}
      />

      <PageHeader
        eyebrow="004 / WHAT WE WEAPONISE"
        title="OUR"
        accentWord="ARSENAL"
        color="var(--brand-cyan)"
        crumbs={crumbs}
        lede="Six groups, thirty services. The group names are ours and they stay. The line underneath each one is deliberately boring, because the person forwarding this page to a finance director needs a phrase that survives the forward."
        meta={[
          { label: 'Capability groups', value: '6' },
          { label: 'Services', value: `${total}` },
          { label: 'Arms', value: 'Create · Systems · Originals' },
          { label: 'Custom work', value: 'If you can imagine it, we can create it' },
        ]}
      />

      {/* Arm strip: the three-line version of the whole company */}
      <section className="px-5 md:px-10 lg:px-14 pb-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-3">
          {arms.map((a) => (
            <Link
              key={a.slug}
              href={a.href}
              className="p-6 group"
              style={{ border: `1px solid ${a.color}30`, backgroundColor: 'rgba(255,255,255,0.02)', textDecoration: 'none' }}
            >
              <div className="text-[10px] tracking-[0.28em] mb-2" style={{ fontFamily: 'var(--font-mono)', color: a.color }}>
                {a.num} / {a.slug.toUpperCase()}
              </div>
              <p className="text-lg leading-snug" style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-white)' }}>
                {a.line}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {categories.map((c) => (
        <section key={c.slug} id={c.slug} className="px-5 md:px-10 lg:px-14 py-12 md:py-16 scroll-mt-24">
          <div className="max-w-[1400px] mx-auto">
            <Reveal>
              <div className="pb-5 mb-8" style={{ borderBottom: `2px solid ${c.color}` }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3" style={{ backgroundColor: c.color }} />
                  <span className="text-[10px] tracking-[0.3em]" style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}>
                    {c.arm.toUpperCase()} ARM
                  </span>
                </div>
                <h2
                  className="text-4xl md:text-6xl lg:text-[4.6vw] leading-[0.88] tracking-tighter"
                  style={{ fontFamily: 'var(--font-display)', color: c.color }}
                >
                  {c.title}
                </h2>
                {/* The boring line. This is the one a procurement lead searches for. */}
                <p
                  className="mt-3 text-base md:text-xl"
                  style={{ fontFamily: 'var(--font-mono)', color: 'rgba(245,245,240,0.85)' }}
                >
                  {c.descriptor}
                </p>
                <p
                  className="mt-4 max-w-3xl text-base leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}
                >
                  {c.intro}
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {c.services.map((s, i) => {
                const Icon = icons[s.icon] ?? Boxes;
                return (
                  <Reveal key={s.name} delay={(i % 2) * 0.05}>
                    <div
                      className="p-6 md:p-7 h-full flex gap-5 group transition-colors"
                      style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderLeft: `3px solid ${c.color}40` }}
                    >
                      <Icon size={26} style={{ color: c.color, flexShrink: 0, marginTop: 4 }} />
                      <div>
                        <h3 className="text-xl md:text-2xl tracking-tighter mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                          {s.name}
                        </h3>
                        <p className="text-sm md:text-base leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}>
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <section className="px-5 md:px-10 lg:px-14 pb-10">
        <div className="max-w-[1400px] mx-auto">
          <Eyebrow color="var(--brand-gold)">THE WILD CARD</Eyebrow>
          <div
            className="mt-6 p-8 md:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            style={{
              background: 'linear-gradient(135deg, rgba(139,0,255,0.1), rgba(0,229,204,0.05), rgba(255,45,111,0.05))',
              border: '1px solid var(--brand-concrete)',
            }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl tracking-tighter mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                Custom <span style={{ color: 'var(--brand-cyan)' }}>Everything</span>
              </h2>
              <p className="text-lg max-w-2xl" style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}>
                If it moves, speaks, or sparks emotion, we build it. Come with the impossible. Leave
                with a delivery date. Don&apos;t see what you need? If you can imagine it, we can create it.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-8 py-4 text-lg tracking-tight whitespace-nowrap self-start lg:self-auto"
              style={{ fontFamily: 'var(--font-display)', backgroundColor: 'var(--brand-magenta)', color: 'var(--brand-white)', textDecoration: 'none' }}
            >
              LET&apos;S TALK →
            </Link>
          </div>
        </div>
      </section>

      <CtaBar
        color="var(--brand-cyan)"
        eyebrow="PICK YOUR PLOT"
        title="Four ways to buy any of this."
        body="Ongoing partnership, fixed monthly output, a single project, or white-label production nobody knows about."
        href="/packages"
        cta="SEE PACKAGES"
      />
    </>
  );
}
