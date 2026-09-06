import type { Post } from './types';

export const post: Post = {
  slug: 'why-per-second-pricing-misleads-in-generative-video',
  title: 'Why Per-Second Pricing Misleads in Generative Video',
  metaTitle: 'AI Video Per-Second Pricing Explained (And Why It Misleads)',
  metaDescription:
    'Generative video is sold by the second and produced by the batch. The arithmetic that turns a published per-second rate into a real production cost, and the four multipliers that sit between them.',
  excerpt:
    'The rate card is real. It is also about a tenth of the number you will actually spend, and the gap is arithmetic rather than dishonesty.',
  published: '2026-08-21',
  author: 'Konstantinos Chatzimichail',
  section: 'Production',
  tags: ['Production', 'Buying', 'Systems'],
  keywords: [
    'AI video per second pricing',
    'generative video cost per second',
    'AI video credits explained',
    'AI video budget calculation',
    'how much does AI video cost',
    'AI video pricing model',
  ],
  image: 'per-second-pricing',
  imageAlt: 'A rate card with four multiplication signs pencilled after the published number.',
  standfirst:
    'A published per-second rate describes one successful generation. A production cost is that rate multiplied by attempts, by takes you generate and discard, by the length you generate versus the length you use, and by the shots that get cut in the edit. The four multipliers are usually between eight and fifteen.',
  body: [
    {
      t: 'p',
      text: 'Somebody sends a link to a model’s pricing page and asks why the quote is not that number times the runtime. It is a fair question and the answer is not margin. It is that the pricing page prices a generation and a film is made of decisions.',
    },
    { t: 'h2', text: 'The four multipliers' },
    {
      t: 'table',
      caption: 'From published rate to production cost',
      head: ['Multiplier', 'Typical range', 'What it is'],
      rows: [
        ['Attempts per usable shot', '3× – 15×', 'The inverse of your acceptance rate. Lower for environment plates, brutal for legible packaging type.'],
        ['Overgeneration for length', '2× – 3×', 'You generate eight seconds to use three, because the stable window is at the front of the clip.'],
        ['Coverage', '1.3× – 2×', 'Alternative takes and sizes, generated because an editor needs choice and re-running later costs more.'],
        ['Edit attrition', '1.2× – 1.6×', 'Shots that were fine and got cut. This happens in every production ever made and is not a generative problem.'],
      ],
    },
    {
      t: 'p',
      text: 'Multiply the ranges out and the published rate is somewhere between eight and roughly a hundred and thirty times short of the production cost, with most real jobs landing in the eight-to-twenty band. That is why the honest unit is cost per accepted asset and not cost per second.',
    },
    { t: 'h2', text: 'Why acceptance rate dominates everything' },
    {
      t: 'p',
      text: 'The first multiplier is much larger than the other three and much more variable, which makes it the one worth attacking. Halving your attempts per usable shot halves the production cost of the whole job; shaving the overgeneration ratio saves you a few per cent.',
    },
    {
      t: 'p',
      text: 'And acceptance rate is a function of decisions made before any generation happens. What is locked. Whether legible type is in frame. Whether the shot needs a hand. Whether a face has to be the same face as the last shot. A brief that resolves those before the first render costs a fraction of one that resolves them by regenerating.',
    },
    {
      t: 'note',
      title: 'The most expensive words in a brief',
      text: '"We’ll see what it gives us." Exploration is legitimate and should have its own budget line with its own ceiling. What it must not be is the production method, because it has no stopping condition.',
    },
    { t: 'h2', text: 'The credits problem' },
    {
      t: 'p',
      text: 'Most platforms price in credits rather than currency, and credits are deliberately not comparable across platforms — different resolutions, different durations, different features consuming different amounts. Converting to a common unit is a spreadsheet exercise everybody skips.',
    },
    {
      t: 'p',
      text: 'The unit to convert to is currency per accepted second of finished footage. Not per generated second: per second that made it into the cut. Once every platform is expressed in that unit, the comparisons stop being marketing and start being procurement.',
    },
    { t: 'h2', text: 'What a defensible quote looks like' },
    {
      t: 'ul',
      items: [
        'A shot count, not a runtime. Runtime is an output; shots are what you buy.',
        'A shot-type breakdown, because acceptance rates differ by a factor of three or four between categories.',
        'An attempts assumption stated openly, drawn from the studio’s own logs on comparable work.',
        'A ceiling per shot, with a stated rule for what happens when it is reached.',
        'A separate exploration line, capped, so discovery does not eat the production budget.',
        'What is excluded: licensing, disclosure review, consent files, market variants.',
      ],
    },
    {
      t: 'p',
      text: 'A quote with those six things can be wrong, and if it is, you will be able to see where. A quote that is a runtime times a rate cannot be wrong in any way you can inspect, which is a different and worse property.',
    },
    { t: 'h2', text: 'The case for per-second pricing anyway' },
    {
      t: 'p',
      text: 'None of this makes per-second rates useless. They are the right unit for comparing raw compute cost between models, for sizing an exploration budget, and for knowing whether a change of approach is even in the right order of magnitude.',
    },
    {
      t: 'p',
      text: 'They are the wrong unit for a client quote, for a campaign budget, and for any sentence containing the words "AI video costs". Those all need the accepted-asset number, and the only place that comes from is somebody’s logs.',
    },
    {
      t: 'cta',
      href: '/supply-drop/ai-video-cost-calculator',
      label: 'The cost calculator',
      text: 'The arithmetic above as a worksheet, with our starting acceptance rates per shot type to budget against until you have your own.',
    },
  ],
  faqs: [
    {
      q: 'Why is AI video more expensive than the per-second price suggests?',
      a: 'Because four multipliers sit between them: attempts per usable shot (three to fifteen times), overgeneration for length (two to three), coverage (one and a third to double), and edit attrition. Most real jobs land eight to twenty times above the published rate.',
    },
    {
      q: 'What is the right unit for pricing generative video?',
      a: 'Currency per accepted second of finished footage — per second that made the cut, not per second generated. It is the only unit that survives comparison between platforms and between studios.',
    },
    {
      q: 'Why do credits make platforms hard to compare?',
      a: 'Because credit costs vary by resolution, duration and feature, and no two platforms define them the same way. Converting each to currency per accepted second is a spreadsheet exercise, and it is the one that turns marketing into procurement.',
    },
    {
      q: 'What should a generative video quote contain?',
      a: 'A shot count rather than a runtime, a shot-type breakdown, a stated attempts assumption drawn from the studio’s own logs, a per-shot spend ceiling with a rule for what happens at it, a separate capped exploration line, and an explicit list of exclusions.',
    },
    {
      q: 'How do you reduce the cost of generative production?',
      a: 'Attack the attempts multiplier, because it is the largest and most variable. That means resolving before the first render: what is locked, whether legible type is in frame, whether a hand is needed, and whether a face has to recur. Those decisions cost nothing at brief stage and a great deal at render stage.',
    },
  ],
  terms: ['cost-per-accepted-asset', 'acceptance-rate', 'credit-ceiling', 'batch-rendering', 'run-log'],
  related: [
    'cost-per-accepted-asset-measuring-generative-production',
    'what-does-generative-video-production-cost-2026',
    'how-to-choose-an-ai-video-production-agency',
  ],
  resources: ['ai-video-cost-calculator', 'synthetic-media-production-brief-template'],
};
