import type { Post } from './types';

export const post: Post = {
  slug: 'what-creative-automation-actually-removes-from-a-marketing-week',
  title: 'What Creative Automation Actually Removes From a Marketing Week',
  metaTitle: 'What Creative Automation Removes From a Marketing Week',
  metaDescription:
    'An audit of where a four-person content team’s week actually goes, which hours creative workflow automation removes, which it does not, and why the savings are almost never in the drafting.',
  excerpt:
    'The hours automation removes are not the ones anybody expects. They are also not the ones any vendor demo shows you.',
  published: '2026-07-23',
  author: 'Konstantinos Chatzimichail',
  section: 'Systems',
  tags: ['Systems', 'Content operations', 'Automation'],
  keywords: [
    'creative automation for marketing teams',
    'creative workflow automation',
    'content operations efficiency',
    'marketing team automation',
    'content production time savings',
    'creative ops automation',
    'agentic content systems',
  ],
  image: 'marketing-week',
  imageAlt:
    'A week laid out as a stacked timeline, with the coordination blocks lit and the creative blocks left dark.',
  standfirst:
    'Ask a content team where the week goes and they will say making things. Time it, and roughly half is coordination: renaming, reformatting, chasing, rebuilding. That half is what creative workflow automation removes, and it is not the half anyone demos.',
  body: [
    {
      t: 'p',
      text: 'Every automation pitch leads with drafting, because drafting is visible and demos well. A model writes a post in eight seconds and the room makes a noise. Then the team goes back to work and the week is exactly as full as it was.',
    },
    {
      t: 'p',
      text: 'That is not because the tool failed. It is because drafting was never where the week went.',
    },
    { t: 'h2', text: 'Where a content week actually goes' },
    {
      t: 'p',
      text: 'This is the shape we find on almost every mapping engagement, across teams of three to eight people. The proportions shift; the ordering rarely does.',
    },
    {
      t: 'table',
      caption: 'A four-person content team, one week, mapped',
      head: ['Activity', 'Share of week', 'Automatable?'],
      rows: [
        ['Coordination: chasing approvals, status, handoffs', '~18%', 'Mostly. Routing and reminders are deterministic.'],
        ['Reformatting: same asset, other placements', '~15%', 'Almost entirely.'],
        ['File admin: naming, filing, versioning, finding', '~12%', 'Entirely, and it should never have been human work.'],
        ['Drafting first versions', '~14%', 'Partly. Drafts yes, final copy no.'],
        ['Editing and judgement', '~13%', 'No, and it should not be.'],
        ['Research and qualification', '~10%', 'Largely, with a human gate on what is used.'],
        ['Reporting and deck rebuilding', '~9%', 'Almost entirely.'],
        ['Meetings about the above', '~9%', 'Indirectly: fewer handoffs, fewer meetings.'],
      ],
    },
    {
      t: 'p',
      text: 'Add the rows marked mostly or entirely and you get somewhere near half the week. None of that half is creative work. All of it is the tax you pay for creative work existing inside an organisation.',
    },
    {
      t: 'note',
      title: 'The reframe that changes the business case',
      text: 'Automation does not make your team faster at making things. It stops them spending half their capacity on not-making-things. Those sound similar and price completely differently.',
    },
    { t: 'h2', text: 'The four hours nobody counts' },
    {
      t: 'p',
      text: 'Four specific losses come up in every audit, and none of them appear on anybody’s timesheet as a task.',
    },
    {
      t: 'ul',
      items: [
        'Finding the final version. Not making it. Finding it. A naming convention plus automatic versioning removes this permanently and it is the single highest-return thing you can build.',
        'Rebuilding a deck that already exists. The numbers changed, so somebody rebuilt forty slides to change six of them.',
        'Reformatting for the fifth placement. The asset is done. It is now being cropped, retitled and re-exported by a person who is capable of much more interesting work.',
        'Re-explaining the brief. Three people now hold slightly different versions of it, and the difference surfaces at review.',
      ],
    },
    { t: 'h2', text: 'What stays human, and should' },
    {
      t: 'p',
      text: 'Two things, and they are not negotiable at any volume.',
    },
    {
      t: 'ol',
      items: [
        'The brief. What are we making, for whom, and what would make it good. A machine can draft one. A person decides it.',
        'Final approval. Somebody with authority sees the output before it ships and can stop it. Not somebody watching. Somebody with a decision to make and the standing to say no.',
      ],
    },
    {
      t: 'p',
      text: 'Everything between those two points is a candidate. Nothing outside them is.',
    },
    { t: 'h2', text: 'How to run the audit yourself' },
    {
      t: 'p',
      text: 'You do not need a consultant for this, and it takes half a day.',
    },
    {
      t: 'ol',
      items: [
        'For one week, everybody logs what they did in thirty-minute blocks. Categories, not descriptions. Nobody is being assessed; say so, loudly, or the data is fiction.',
        'Sort every block into: decides, drafts, formats, moves, finds, reports, meets.',
        'Total the last five. That is your addressable surface.',
        'For each, write down who owns it today and what would have to be true for a script to own it instead. Usually the answer is a naming convention and a connector.',
        'Build the top two. Not eight. Two, shipped and adopted, beats a roadmap.',
      ],
    },
    { t: 'h2', text: 'What to expect afterwards' },
    {
      t: 'p',
      text: 'The realistic outcome is not a headcount reduction. It is that the same team ships more of the work it is good at, and the calendar stops being the constraint. In practice: fewer status meetings because status is visible, fewer versions because versioning is automatic, and a genuinely different answer to "can we also do a version for the Greek market by Thursday".',
    },
    {
      t: 'p',
      text: 'The other outcome, which matters more over a year, is that the system is auditable. A run log with cost attached turns "this saves time" into a figure a finance director can check, which is the difference between a tool the team likes and a system the company keeps funding.',
    },
    {
      t: 'cta',
      href: '/supply-drop/creative-automation-workflow-canvas',
      label: 'Download the workflow canvas',
      text: 'The audit above as a one-page canvas: every step, its owner, and whether a person decides, a model drafts or a script handles it. Free, no email gate.',
    },
  ],
  faqs: [
    {
      q: 'What does creative automation actually save time on?',
      a: 'Coordination, reformatting, file administration, reporting and research, which together account for roughly half a content team’s week. Drafting is a smaller share than most people expect, and editorial judgement should not be automated at all.',
    },
    {
      q: 'Does creative automation reduce headcount?',
      a: 'Usually not. It changes what the existing team spends its capacity on. The realistic outcome is more shipped work from the same people, and a calendar that stops being the constraint on what can be attempted.',
    },
    {
      q: 'What should never be automated in a content team?',
      a: 'The brief and the final approval. A machine can draft a brief but a person decides it, and somebody with authority to say no must see the output before it ships, at any volume.',
    },
    {
      q: 'How do I audit where my content team’s week goes?',
      a: 'Log one week in thirty-minute blocks by category, then sort every block into decides, drafts, formats, moves, finds, reports or meets. Everything except decides is addressable. Build the top two candidates rather than a roadmap of eight.',
    },
    {
      q: 'What is the highest-return thing to automate first?',
      a: 'File naming and versioning. Time spent finding the final version of something is pure loss, it appears on nobody’s timesheet, and a naming convention with automatic versioning removes it permanently.',
    },
  ],
  terms: ['agentic-workflow', 'human-in-the-loop', 'cost-per-accepted-asset'],
  related: [
    'agentic-workflow-vs-automation-where-each-actually-works',
    'building-a-content-repurposing-engine',
    'cost-per-accepted-asset-measuring-generative-production',
  ],
  resources: ['creative-automation-workflow-canvas', 'production-readiness-scorecard'],
};
