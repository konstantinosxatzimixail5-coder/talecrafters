import Link from 'next/link';
import { getArm } from '@/data/arsenal';
import { featuredWork } from '@/data/work';
import { Frame } from '@/components/Frame';
import { ArmPage } from '@/components/ArmPage';
import { Eyebrow } from '@/components/kit';
import { Reveal } from '@/components/Reveal';
import { JsonLd } from '@/components/JsonLd';
import { pageMeta, breadcrumbSchema, serviceSchema } from '@/lib/seo';
import { pageCopy } from '@/content/copy';

export const metadata = pageMeta({
  title: 'Create — Films, Campaigns & Visual Worlds',
  description:
    'The client-facing production arm: generative video, commercials, brand films, social campaigns, creative direction, synthetic photography, animation and visual identities. We sell production, not generations.',
  path: '/create',
  keywords: [
    'generative video production',
    'brand film production',
    'AI commercial production',
    'creative direction studio',
    'synthetic photography',
    'social campaign production',
  ],
});

export default async function CreatePage() {
  const copy = await pageCopy('create');
  const arm = getArm('create')!;
  return (
    <>
      <JsonLd
        graph={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Create', path: '/create' },
          ]),
          serviceSchema({
            name: 'Creative production',
            description: arm.blurb,
            path: '/create',
            serviceType: 'Generative film, advertising and motion production',
          }),
        ]}
      />
      <ArmPage
        arm={arm}
        eyebrow={copy.header.eyebrow}
        title={copy.header.title}
        accentWord={copy.header.accentWord}
        meta={copy.header.meta}
        cta={{
          title: 'Come with the impossible.',
          body: 'Leave with a delivery date. Bring the launch, the deadline and the constraint you think kills it.',
        }}
      >
        <section className="px-5 md:px-10 lg:px-14 py-10 md:py-16">
          <div className="max-w-[1400px] mx-auto">
            <Eyebrow color="var(--brand-magenta)">WHAT IT LOOKS LIKE DELIVERED</Eyebrow>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
              {featuredWork.map((w, i) => (
                <Reveal key={w.slug} delay={(i % 2) * 0.06}>
                  <Link
                    href={`/work/${w.slug}`}
                    className="block relative overflow-hidden group h-full"
                    style={{ border: '1px solid rgba(255,255,255,0.08)', textDecoration: 'none' }}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Frame
                        src={w.hero.src}
                        alt={w.hero.alt}
                        focus={w.hero.focus}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-[10px] tracking-[0.28em] mb-2" style={{ fontFamily: 'var(--font-mono)', color: w.accent }}>
                        {w.client} · {w.discipline}
                      </div>
                      <h3 className="text-2xl md:text-3xl leading-tight tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>
                        {w.title}
                      </h3>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </ArmPage>
    </>
  );
}
