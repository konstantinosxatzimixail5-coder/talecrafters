import type { Post } from './types';

export const post: Post = {
  slug: 'the-creative-operations-ledger',
  title: 'The Creative Operations Ledger: Six Numbers Worth Tracking',
  metaTitle: 'Creative Operations Metrics: The Six Numbers Worth Tracking',
  metaDescription:
    'Most creative teams measure output volume, which tells you nothing about whether the operation is improving. Six numbers that do, how to instrument them without a new tool, and the two that predict everything else.',
  excerpt:
    'Volume is not a measure of a creative operation. It is a measure of how much you spent.',
  published: '2026-05-29',
  author: 'Konstantinos Chatzimichail',
  section: 'Systems',
  tags: ['Systems', 'Strategy', 'Production'],
  keywords: [
    'creative operations metrics',
    'content team KPIs',
    'measuring creative output',
    'creative ops dashboard',
    'cost per accepted asset',
    'creative throughput measurement',
  ],
  image: 'creative-operations-ledger',
  imageAlt: 'A six-row ledger of operational numbers, with two of them circled.',
  standfirst:
    'Six numbers describe a creative operation: cost per accepted asset, acceptance rate, cycle time, rework rate, reuse rate, and time-to-first-draft. Two of them — acceptance rate and rework rate — predict the other four, and almost nobody tracks either.',
  body: [
    {
      t: 'p',
      text: 'Ask a content team how it is doing and you get a volume number: assets produced, posts published, videos shipped. Volume is an input. It tells you how much was spent and nothing about whether the operation is getting better at spending it, which is the only question an operations metric should answer.',
    },
    { t: 'h2', text: 'The six' },
    {
      t: 'table',
      caption: 'What each number tells you, and what it costs to collect',
      head: ['Metric', 'Definition', 'What it reveals', 'Collection cost'],
      rows: [
        [
          'Cost per accepted asset',
          'Total spend divided by assets that shipped',
          'The real unit economics, including everything rejected',
          'Low, if the run log exists',
        ],
        [
          'Acceptance rate',
          'Shipped divided by produced, per asset type',
          'Whether the process is aimed correctly. The leading indicator.',
          'Low',
        ],
        [
          'Cycle time',
          'Brief received to asset live',
          'Where the queue is. Usually not where anyone thinks.',
          'Low, from two timestamps',
        ],
        [
          'Rework rate',
          'Proportion of assets returned after being marked done',
          'Whether the brief or the gate is failing. The other leading indicator.',
          'Medium: needs a status people actually set',
        ],
        [
          'Reuse rate',
          'Proportion of output derived from existing assets',
          'Whether the library is an asset or a graveyard',
          'Medium',
        ],
        [
          'Time to first draft',
          'Brief received to something reviewable',
          'How long the team spends before anyone can react',
          'Low',
        ],
      ],
    },
    { t: 'h2', text: 'Why acceptance rate and rework rate lead' },
    {
      t: 'p',
      text: 'Acceptance rate answers whether the work is aimed at the right thing. A low rate means the brief, the reference or the gate is wrong, and every downstream number inherits that. Fixing it improves cost per accepted asset, cycle time and time-to-first-draft simultaneously, because all three are partly measures of wasted attempts.',
    },
    {
      t: 'p',
      text: 'Rework rate answers whether "done" means anything. A team with fifteen per cent rework has a definition problem: either the brief was ambiguous or the review happened at the wrong point. Rework is the most expensive kind of work because it is paid for twice and morale is charged for it as well.',
    },
    {
      t: 'note',
      title: 'Segment or the numbers lie',
      text: 'An acceptance rate averaged across easy and hard asset types describes neither. Track it per type — a packshot with legible type and an environment plate differ by a factor of three or four — or you get a number that is true overall and useless everywhere.',
    },
    { t: 'h2', text: 'Instrumenting without buying anything' },
    {
      t: 'p',
      text: 'Every one of the six can be derived from two things most teams already generate: a run log and a status field. The failure is not tooling, it is that neither is filled in consistently.',
    },
    {
      t: 'ol',
      items: [
        'Make the log automatic. Anything a person has to remember to write down will be written down for three weeks.',
        'Use four statuses, not eleven: briefed, in production, in review, live. Add one for returned-after-done and you have rework for free.',
        'Encode the asset type in the filename. Segmentation becomes a text filter rather than a project.',
        'Timestamp two events only: brief received and asset live. Everything else about cycle time can be derived later.',
        'Review the six monthly, in one page, with a note against anything that moved. Data nobody looks at is a cost with no benefit.',
      ],
    },
    { t: 'h2', text: 'The numbers not to track' },
    {
      t: 'ul',
      items: [
        'Assets produced. An input dressed as an outcome.',
        'Utilisation. A team at a hundred per cent utilisation has no capacity to react, which is a fragility rather than an achievement.',
        'Average anything, unsegmented. Averages across asset types are the single commonest way an operational dashboard misleads.',
        'Cost per generation. Excludes the rejected work, which is where the cost is.',
        'Anything nobody has agreed an action for. If a number moving would not change what anybody does, it is decoration.',
      ],
    },
    { t: 'h2', text: 'What to do when a number moves' },
    {
      t: 'p',
      text: 'Agree the response in advance, once, and write it down. Acceptance rate falls: audit the last ten briefs against the ten before. Rework rises: move the review earlier, before production rather than after. Cycle time rises with steady volume: find the queue, which is usually approval rather than production. Reuse falls: the library has a findability problem, not a content problem.',
    },
    {
      t: 'p',
      text: 'Agreeing the response before the number moves is what stops a monthly review becoming a meeting where everybody explains why the number is not their fault.',
    },
    {
      t: 'cta',
      href: '/glossary/cost-per-accepted-asset',
      label: 'Cost per accepted asset, defined',
      text: 'The number that converts a per-generation price into something you can plan with.',
    },
  ],
  faqs: [
    {
      q: 'What metrics should a creative operations team track?',
      a: 'Six: cost per accepted asset, acceptance rate, cycle time, rework rate, reuse rate and time to first draft. Acceptance rate and rework rate are the leading indicators — improving either moves most of the others.',
    },
    {
      q: 'Why is volume a bad creative metric?',
      a: 'Because it is an input. It says how much was spent, not whether the operation is getting better at spending it, which is the only question an operational metric should answer.',
    },
    {
      q: 'Why must acceptance rate be segmented?',
      a: 'Because it varies by a factor of three or four between asset types — a packshot with legible type against an environment plate, for instance. An average across both describes neither and misleads on both.',
    },
    {
      q: 'How do you instrument these without buying a new tool?',
      a: 'All six derive from a run log and a status field. Make the log automatic, use four statuses plus one for returned-after-done, encode asset type in the filename, and timestamp only brief-received and asset-live.',
    },
    {
      q: 'What should you do when rework rate rises?',
      a: 'Move the review earlier — before production rather than after. Rising rework means "done" is not well defined, which is a brief or gate problem rather than a production one, and it is the most expensive kind of work because it is paid for twice.',
    },
  ],
  terms: ['cost-per-accepted-asset', 'acceptance-rate', 'run-log', 'gate', 'naming-convention', 'eval'],
  related: [
    'cost-per-accepted-asset-measuring-generative-production',
    'what-to-automate-first-in-a-content-team',
    'what-creative-automation-actually-removes-from-a-marketing-week',
  ],
  resources: ['ai-video-cost-calculator', 'creative-automation-workflow-canvas'],
};
