// The questions people actually ask, answered without the sales voice. This
// file feeds the FAQ page and its FAQPage schema, and individual entries get
// reused on the pages they belong to.

export interface FaqGroup {
  title: string;
  color: string;
  items: { q: string; a: string }[];
}

export const faqGroups: FaqGroup[] = [
  {
    title: 'WORKING WITH US',
    color: 'var(--brand-cyan)',
    items: [
      {
        q: 'What does TaleCrafters actually do?',
        a: 'Three things. We make campaigns, films and visual worlds. We build the systems that produce, distribute and scale creative work — agentic workflows, content engines, internal tools, sites and prototypes. And we develop our own original IP: films, games and stories. Most clients arrive for the first and stay for the second.',
      },
      {
        q: 'How fast can you deliver?',
        a: 'A product still set is two working days from an approved plate. A creator campaign with a trained presenter is four days from casting brief to nine finished variants. A brand film depends on how many altitude bands, registers or characters it needs — we give a date with the quote, and the date is the one we work to.',
      },
      {
        q: 'What does a project cost?',
        a: 'We quote per engagement rather than publishing a rate card, because a run of forty variants from one trained identity and a single hero film are not the same job with a different number on it. Packages exist for ongoing work, project work and white-label production.',
      },
      {
        q: 'Do you work with agencies?',
        a: 'Yes, under NDA and without credit. The Shadow Protocol package exists for exactly this: production capacity for agencies and studios who need the work and not the headcount.',
      },
      {
        q: 'Where are you based?',
        a: 'Registered in London, working across the UK, Europe and the US. Everything we build is remote-native by construction, which is a polite way of saying we have never lost a day to a delivery address.',
      },
    ],
  },
  {
    title: 'THE WORK ITSELF',
    color: 'var(--brand-magenta)',
    items: [
      {
        q: 'Is this just AI-generated content?',
        a: 'Generation is one stage in the middle of a pipeline. Before it sits a brief, a register decision and a locked reference; after it sits four gates and a person with a veto. A studio selling you generations is selling you the cheapest part of the job.',
      },
      {
        q: 'How do you keep a character or product consistent?',
        a: 'By locking it before the set exists. A face is trained once from a sheet of twenty-plus stills and every scene is generated from that identity. A product is locked as a master plate and every angle references that file. Then each output is checked against the lock, never against the previous frame.',
      },
      {
        q: 'Can you match our existing brand guidelines?',
        a: 'Yes, and the mark itself is composited rather than generated. A model asked to draw a logo gets it nearly right, and nearly right on a logo is worse than absent.',
      },
      {
        q: 'What happens when the output is wrong?',
        a: 'It fails a named gate and returns to its source: a likeness failure regenerates from the identity sheet, a label failure returns to the master plate. Nothing gets patched in post, because patching produces a frame that passes and a set that still drifts.',
      },
      {
        q: 'Do you do live-action too?',
        a: 'We work hybrid where a brief needs it — real footage with generated environments, a real product with a generated set, a real voice with a generated read. Knowing which half should be synthetic is most of the skill.',
      },
    ],
  },
  {
    title: 'RIGHTS, ETHICS AND THE BORING PART',
    color: 'var(--brand-violet)',
    items: [
      {
        q: 'Who owns the output?',
        a: 'You do, on delivery, along with the reusable assets underneath it: the master plate, the trained identity, the set specification. A system you cannot operate without us is a dependency, not an asset.',
      },
      {
        q: 'Do you disclose AI-generated content?',
        a: 'Always, to the stricter of platform policy and client legal, and on the asset rather than only in metadata. A metadata flag protects you with the platform; an on-asset label protects you with the audience.',
      },
      {
        q: 'Do you use real people’s likenesses?',
        a: 'Only with a signed release for the likeness and, where a voice is involved, for the voice. Nothing renders until both sit in the folder. That applies to satire as firmly as it applies to advertising.',
      },
      {
        q: 'Is the work licensed for commercial use?',
        a: 'Model licences are checked for commercial use under your terms before rendering, never after. If a model’s licence does not clear, we swap the model rather than the paperwork.',
      },
      {
        q: 'What about our data?',
        a: 'No keys, client data or unreleased assets go inside a prompt. Systems we build run inside your own accounts, so your material stays where your policies already cover it.',
      },
    ],
  },
  {
    title: 'CREATIVE SYSTEMS',
    color: 'var(--brand-gold)',
    items: [
      {
        q: 'What is a Creative System engagement?',
        a: 'Half a day mapping how your creative work runs today with an owner per step, one to two weeks building the skills, scripts, connectors and interface, then a live walkthrough. You get a mapped process, the machinery that runs it, and a ledger showing cost per accepted asset.',
      },
      {
        q: 'Can you automate our content production?',
        a: 'The production, yes. The judgement, no. We automate drafting, variants, formats, renaming, queueing and reporting, and keep a person on the brief and the final approval at any volume.',
      },
      {
        q: 'Do we need a technical team to run what you build?',
        a: 'No. The interface layer exists so that a marketer can operate the pipeline, and it is built on React and Tailwind underneath so that a prototype can graduate into a real product if you later want one.',
      },
    ],
  },
];

export const allFaqs = faqGroups.flatMap((g) => g.items);
