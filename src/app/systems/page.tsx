import Link from 'next/link';
import { getArm } from '@/data/arsenal';
import { getPipeline } from '@/data/pipelines';
import { ArmPage } from '@/components/ArmPage';
import { Eyebrow } from '@/components/kit';
import { Reveal } from '@/components/Reveal';
import { JsonLd } from '@/components/JsonLd';
import { pageMeta, breadcrumbSchema, serviceSchema, faqSchema } from '@/lib/seo';

export const metadata = pageMeta({
  // The title carries the two phrases buyers actually search separately:
  // "creative workflow automation" and "agentic content systems". The root
  // layout appends "| TaleCrafters".
  title: 'Creative Workflow Automation & Agentic Content Systems',
  description:
    'Creative automation for content and marketing teams. We map how your creative work runs, build the content production systems, agentic workflows and repurposing engines that carry it, and hand the machinery over running inside your own accounts with a cost ledger attached.',
  path: '/systems',
  keywords: [
    'creative workflow automation',
    'agentic content systems',
    'creative automation for marketing teams',
    'content operations automation',
    'agentic workflows',
    'creative automation agency',
    'content production system',
    'AI workflow consultancy',
    'marketing automation build',
    'content repurposing engine',
    'MCP integration',
    'internal tools build',
  ],
});

const qa = [
  {
    q: 'What is a Creative Systems engagement?',
    a: 'Half a day mapping how your creative work runs today with an owner per step, one to two weeks building the skills, scripts, connectors and interface, then a live walkthrough. You get a mapped process, the machinery that runs it, and a ledger showing cost per accepted asset.',
  },
  {
    q: 'Where does the system live?',
    a: 'Inside your own accounts. A system you cannot operate without us is a dependency, not an asset.',
  },
  {
    q: 'Do we need engineers to run it?',
    a: 'No. The interface layer exists so a marketer can operate the pipeline, built on React and Tailwind underneath so a prototype can graduate into a real product if you later want one.',
  },
  {
    q: 'What can you actually automate?',
    a: 'Drafting, variants, format matrices, renaming, render queueing, repurposing, research, qualification and reporting. Not the brief and not the final approval: those keep a person, at any volume.',
  },
];

const engagement = [
  { n: '01', k: 'Map', t: 'Half a day', v: 'Every step of how the work runs today, written down with an owner: what a person decides, what a model drafts, what a script handles alone at four in the morning.' },
  { n: '02', k: 'Build', t: 'One to two weeks', v: 'Skills as directories the model loads on demand, code for the repetitive end, connectors into the tools you already run, and an interface a non-technical person can operate.' },
  { n: '03', k: 'Hand over', t: 'One live walkthrough', v: 'Inside your accounts, with the naming convention, the version tags, the run log and the cost ledger already in place. Then we leave.' },
];

const built = [
  'Content production systems',
  'Agentic workflows and skills',
  'Marketing automations',
  'Research systems',
  'Lead-generation workflows',
  'Content repurposing engines',
  'Creative pipelines',
  'Internal tools',
  'Lightweight applications',
  'AI-powered websites',
  'Interactive experiences',
  'Working prototypes',
];

export default function SystemsPage() {
  const arm = getArm('systems')!;
  const stack = getPipeline('operator-stack')!;

  return (
    <>
      <JsonLd
        graph={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Systems', path: '/systems' },
          ]),
          serviceSchema({
            name: 'Creative Workflow Automation & Agentic Content Systems',
            description: arm.blurb,
            path: '/systems',
            serviceType: 'Creative workflow automation and agentic content systems',
            offers: built.map((name) => ({ name })),
          }),
          faqSchema(qa),
        ]}
      />
      <ArmPage
        arm={arm}
        eyebrow="02 / CREATIVE WORKFLOW AUTOMATION & AGENTIC CONTENT SYSTEMS"
        title="CREATIVE AUTOMATION FOR"
        accentWord="CONTENT & MARKETING TEAMS"
        meta={[
          { label: 'Engagement', value: 'Map, build, hand over' },
          { label: 'Typical length', value: '2 to 3 weeks' },
          { label: 'Where it runs', value: 'Your accounts, not ours' },
          { label: 'What you get', value: 'A process, the machinery, a cost ledger' },
        ]}
        cta={{
          title: 'Your team is not slow. Your process is.',
          body: 'Tell us where the week actually goes. We will map it, build the half a machine can do, and leave you operating it.',
        }}
      >
        <section className="px-5 md:px-10 lg:px-14 py-10 md:py-16">
          <div className="max-w-[1400px] mx-auto">
            <Reveal>
              <div className="max-w-3xl">
                <Eyebrow color="var(--brand-violet)">WHAT THIS IS</Eyebrow>
                <p className="mt-6 text-xl md:text-2xl leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  Creative workflow automation is the machinery that produces, repurposes and
                  distributes creative work. Agentic content systems are the half of that machinery
                  that decides its own next step instead of following a diagram somebody drew in
                  advance. We build both, and hand them over running inside your accounts.
                </p>
                <p className="mt-5 text-lg leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.7)' }}>
                  Prompting is the easy part. The value sits in the directory of skills, the
                  connectors into software you already run, the naming convention that makes last
                  quarter&rsquo;s output findable, and a ledger showing what every accepted asset
                  cost. Skip that and you get a demo that works once, in front of an audience.
                </p>
                <p className="mt-5 text-lg leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.7)' }}>
                  A person signs off the brief and the final output at any volume. That rule has
                  never been worth an exception.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-5 md:px-10 lg:px-14 py-10 md:py-16">
          <div className="max-w-[1400px] mx-auto">
            <Eyebrow color="var(--brand-violet)">THE ENGAGEMENT</Eyebrow>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3">
              {engagement.map((e, i) => (
                <Reveal key={e.n} delay={i * 0.06}>
                  <div className="p-7 h-full relative" style={{ border: '1px solid rgba(139,0,255,0.28)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                    <div className="h-[3px] absolute top-0 left-0 right-0" style={{ backgroundColor: 'var(--brand-violet)' }} />
                    <div className="flex items-baseline justify-between mb-4">
                      <span className="text-4xl tracking-tighter" style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-violet-text)', opacity: 0.45 }}>
                        {e.n}
                      </span>
                      <span className="text-[11px] tracking-[0.2em]" style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}>
                        {e.t.toUpperCase()}
                      </span>
                    </div>
                    <h3 className="text-3xl tracking-tighter mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                      {e.k}
                    </h3>
                    <p className="text-base leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.72)' }}>
                      {e.v}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 md:px-10 lg:px-14 py-10 md:py-16">
          <div className="max-w-[1400px] mx-auto">
            <Eyebrow color="var(--brand-cyan)">THINGS WE HAVE BUILT OR WILL</Eyebrow>
            <ul className="mt-7 flex flex-wrap gap-2">
              {built.map((b) => (
                <li
                  key={b}
                  className="px-4 py-2.5 text-sm"
                  style={{ fontFamily: 'var(--font-mono)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(245,245,240,0.82)' }}
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-5 md:px-10 lg:px-14 py-10 md:py-16">
          <div className="max-w-[1400px] mx-auto">
            <Eyebrow color="var(--brand-gold)">THE COMMERCIAL GATES</Eyebrow>
            <p className="mt-5 mb-8 max-w-2xl text-lg leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.7)' }}>
              Four rules every system we build runs under. They are the reason a finance team and a
              legal team can both sign the same page.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {stack.gates.map((g, i) => (
                <Reveal key={g.name} delay={i * 0.05}>
                  <div className="p-6 h-full" style={{ border: '1px solid rgba(201,168,76,0.25)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                    <h3 className="text-xl tracking-tighter mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-gold)' }}>
                      {g.name}
                    </h3>
                    <p className="text-sm leading-relaxed mb-3" style={{ fontFamily: 'var(--font-body)', color: 'rgba(245,245,240,0.75)' }}>
                      {g.test}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)', fontSize: 12 }}>
                      ON FAIL: {g.fail}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/pipelines/operator-stack"
                className="inline-block px-6 py-3 text-sm tracking-wider"
                style={{ fontFamily: 'var(--font-mono)', border: '1px solid var(--brand-violet)', color: 'var(--brand-violet-text)', textDecoration: 'none' }}
              >
                READ THE OPERATOR STACK PIPELINE →
              </Link>
            </div>
          </div>
        </section>

        <section className="px-5 md:px-10 lg:px-14 py-10 md:py-16">
          <div className="max-w-[1400px] mx-auto">
            <Eyebrow color="var(--brand-concrete-light)">QUESTIONS</Eyebrow>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
              {qa.map((item) => (
                <div key={item.q} className="p-6" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h3 className="text-lg mb-3 leading-snug" style={{ fontFamily: 'var(--font-display)' }}>
                    {item.q}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}>
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ArmPage>
    </>
  );
}
