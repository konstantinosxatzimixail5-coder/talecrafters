import type { Post } from './types';

export const post: Post = {
  slug: 'what-an-ai-ugc-ad-actually-costs',
  title: 'What an AI UGC Ad Actually Costs (And Where the Money Goes)',
  metaTitle: 'AI UGC Ad Cost in 2026: The Real Numbers Behind Synthetic Creator Ads',
  metaDescription:
    'What it costs to produce a synthetic UGC ad in 2026, broken down by script, avatar, voice, variants and review — plus the consent and disclosure line items nobody quotes and everybody eventually pays.',
  excerpt:
    'The generation is the cheap part. The script, the consent and the review are the invoice.',
  published: '2026-08-28',
  author: 'Konstantinos Chatzimichail',
  section: 'Production',
  tags: ['Production', 'Performance', 'Buying'],
  keywords: [
    'AI UGC ad cost',
    'synthetic UGC pricing',
    'AI avatar ad cost',
    'AI creator ads price',
    'UGC ad production cost 2026',
    'AI ad variants cost',
  ],
  image: 'ai-ugc-ad-cost',
  imageAlt:
    'A grid of vertical ad variants of the same script, each labelled with its cost line rather than its performance.',
  standfirst:
    'Generating a synthetic UGC ad costs almost nothing. Producing one costs what the script, the consent file, the voice, the variant matrix and the review cost — typically eighty to ninety per cent of the total. Any quote where generation is the biggest line is describing a demo.',
  body: [
    {
      t: 'p',
      text: 'The number people arrive with is the per-clip generation price, because it is the number that is published. It is also, in a working pipeline, close to a rounding error. Here is where the money in a synthetic UGC campaign actually goes.',
    },
    { t: 'h2', text: 'The line items' },
    {
      t: 'table',
      caption: 'Where the budget sits on a typical batch of synthetic creator ads',
      head: ['Line', 'Share of total', 'Why'],
      rows: [
        ['Script and hook development', '25–35%', 'Twenty hooks written properly is a day of somebody good. It is also the line with the largest effect on performance.'],
        ['Generation', '5–10%', 'The published number. Real, and the smallest thing on the list.'],
        ['Voice', '5–15%', 'Cloned or cast. Cloned is cheaper per unit and carries a consent file that is not.'],
        ['Consent, rights and disclosure', '10–20%', 'Likeness release, derivative-training clause, platform labelling, market-by-market review.'],
        ['Variant production', '10–15%', 'The matrix: hooks × avatars × CTAs × ratios. Cheap per unit, large in aggregate.'],
        ['Review and gating', '15–20%', 'Somebody watches all of it. This is the single most under-budgeted line in the category.'],
        ['Measurement and iteration', '5–10%', 'Reading the retention curves and deciding what to make next.'],
      ],
    },
    {
      t: 'p',
      text: 'The shape is the point. In traditional UGC the shoot dominates; in synthetic UGC there is no shoot, so what remains is writing, rights and judgement — three things that do not get cheaper with volume, which is why the per-asset cost stops falling much past a certain batch size.',
    },
    { t: 'h2', text: 'The variant maths that catches people out' },
    {
      t: 'p',
      text: 'A typical test matrix is five hooks, three presenters, two calls to action and three aspect ratios. That is ninety assets, which sounds like a scale win until you cost the review: ninety assets at, say, forty seconds each is an hour of watching, and that assumes nobody has to watch anything twice.',
    },
    {
      t: 'p',
      text: 'The fix is to gate mechanically before a person sees anything. Reject automatically on lip-sync drift, on a caption that has run past the safe area, on a frame where the product label is not legible. A gate that removes a fifth of the batch pays for itself on the first campaign.',
    },
    {
      t: 'note',
      title: 'The number to quote from',
      text: 'Cost per accepted asset, not cost per generation. A batch that produces ninety and ships twelve has a real unit cost of the ninety, and the twelve is what your competitor is quoting you.',
    },
    { t: 'h2', text: 'The rights line, which is not optional' },
    {
      t: 'p',
      text: 'Two separate obligations are usually collapsed into one and should not be.',
    },
    {
      t: 'p',
      text: 'The first is consent, and it applies whenever the presenter is derived from a real person. A photography-era model release almost never contains a clause granting the right to train on the supplied material, and without one the asset is exposed regardless of how good it looks. Scope, term, territory, withdrawal and end-of-term disposal all belong in it.',
    },
    {
      t: 'p',
      text: 'The second is disclosure, which is about the audience rather than the performer. Since 2 August 2026, EU transparency obligations under Article 50 apply to synthetic image, audio and video content that qualifies as a deepfake, which captures a great deal of AI-generated advertising. Platform policies are frequently stricter than the law, and advertising codes apply on top of both. The practical rule is to work to the strictest of the three and to decide it at brief stage rather than at delivery.',
    },
    {
      t: 'cta',
      href: '/supply-drop/ai-advertising-disclosure-checklist',
      label: 'The disclosure checklist',
      text: 'The UK, EU and platform positions on one page, as a decision path you run once per campaign.',
    },
    { t: 'h2', text: 'When synthetic UGC is cheaper, and when it is not' },
    {
      t: 'ul',
      items: [
        'Cheaper: high variant counts, many markets, frequent creative refresh, products that cannot easily be shipped to creators, and anything where the same script has to be tested twenty ways.',
        'Cheaper: iterating a winner. Once a hook works, producing thirty variations of it is close to free compared with re-booking anybody.',
        'Not cheaper: a single hero asset. One film with one creator is still a shoot, and a synthetic version of it costs about the same once you have written it properly.',
        'Not cheaper: categories where the claim depends on demonstrated use. If the audience has to believe a real person really did the thing, you are paying for belief and synthetic material starts at a deficit.',
        'Not cheaper: regulated categories, where the disclosure and substantiation overhead can exceed the production saving.',
      ],
    },
    { t: 'h2', text: 'A realistic budget shape' },
    {
      t: 'p',
      text: 'For a first batch, expect to spend roughly a third on writing, a third on the rights and review scaffolding you will reuse forever, and a third on everything else including the generation. The second batch is dramatically cheaper because two of those thirds are already built.',
    },
    {
      t: 'p',
      text: 'That front-loading is the honest sales pitch and the honest warning. Anyone quoting a low first batch is either not doing the consent work or is planning to charge you for it later under a different name.',
    },
    {
      t: 'cta',
      href: '/supply-drop/ai-video-cost-calculator',
      label: 'The cost calculator',
      text: 'Work it out for your own brief, with published acceptance rates per shot type to budget against.',
    },
  ],
  faqs: [
    {
      q: 'How much does an AI UGC ad cost?',
      a: 'The generation is typically five to ten per cent of the total. The rest is script and hook development, voice, consent and disclosure, variant production, review and measurement. Any quote where generation is the largest line is describing a demo rather than a campaign.',
    },
    {
      q: 'Is synthetic UGC cheaper than hiring creators?',
      a: 'For high variant counts, many markets and frequent creative refresh, substantially. For a single hero asset, barely — one well-written film costs about the same either way. For categories where the audience has to believe a real person really used the product, synthetic material starts at a credibility deficit that no cost saving covers.',
    },
    {
      q: 'What is the most under-budgeted line in synthetic UGC?',
      a: 'Review. Ninety assets at forty seconds each is an hour of somebody watching, before anything is watched twice. Mechanical gates that reject on lip-sync drift, caption overflow or illegible product type pay for themselves on the first campaign.',
    },
    {
      q: 'Do you need consent to use an AI avatar based on a real person?',
      a: 'Yes, and a photography-era model release is usually not sufficient because it does not grant the right to train on the supplied material. The release needs scope, term, territory, an explicit derivative-training clause, a withdrawal mechanism and end-of-term disposal.',
    },
    {
      q: 'Do AI UGC ads have to be labelled?',
      a: 'Frequently. Since 2 August 2026 EU transparency obligations under Article 50 apply to synthetic image, audio and video that qualifies as a deepfake, which captures much AI-generated advertising. Platform policies are often stricter, and advertising codes apply regardless. Work to the strictest of the three and decide it at brief stage.',
    },
    {
      q: 'Why does the cost per asset stop falling at scale?',
      a: 'Because what remains after the shoot is removed is writing, rights and judgement, and none of those get much cheaper with volume. Generation scales; the three things around it do not.',
    },
  ],
  terms: ['synthetic-ugc', 'cost-per-accepted-asset', 'consent-file', 'disclosure', 'derivative-training'],
  related: [
    'synthetic-ugc-consent-likeness-and-disclosure-checklist',
    'what-does-generative-video-production-cost-2026',
    'cost-per-accepted-asset-measuring-generative-production',
  ],
  resources: ['ai-video-cost-calculator', 'synthetic-ugc-consent-template', 'ai-advertising-disclosure-checklist'],
  legalNotice: true,
};
