import type { Post } from './types';

export const post: Post = {
  slug: 'keeping-a-synthetic-presenter-consistent',
  title: 'Keeping a Synthetic Presenter Consistent Across a Campaign',
  metaTitle: 'Synthetic Presenter Consistency: Keeping One Face Across a Campaign',
  metaDescription:
    'How to hold a synthetic presenter’s identity across dozens of assets and several months: the character brief, the reference set, the drift checks, and the point at which training beats conditioning.',
  excerpt:
    'A face that changes between assets is not a presenter, it is a series of strangers reading the same script.',
  published: '2026-07-03',
  author: 'Konstantinos Chatzimichail',
  section: 'Production',
  tags: ['Production', 'Control', 'Craft'],
  keywords: [
    'synthetic presenter consistency',
    'AI avatar consistency',
    'consistent AI character',
    'AI spokesperson brand',
    'character consistency AI video',
    'AI presenter campaign',
  ],
  image: 'synthetic-presenter',
  imageAlt: 'A contact sheet of one synthetic presenter across twelve shots, with two flagged as drifted.',
  standfirst:
    'Presenter identity is held by three things in order: a character brief that specifies structure rather than personality, a fixed reference set used for identity only, and a drift check run against the first approved frame rather than against the previous one. Description alone stops working at around the third asset.',
  body: [
    {
      t: 'p',
      text: 'A recurring presenter is the hardest thing a brand can ask a generative pipeline for, because it is the case where the audience has the strongest prior. People are extraordinarily good at faces. A product that is five per cent different between shots is unnoticed; a face that is five per cent different is a different person.',
    },
    { t: 'h2', text: 'The character brief' },
    {
      t: 'p',
      text: 'Everything starts with a paragraph you will paste unchanged for months. It has to specify things that do not change with mood or lighting.',
    },
    {
      t: 'ul',
      items: [
        'Structure: face shape, bone, proportion, the asymmetry. Measurable things.',
        'Two or three fixed marks: a scar, a mole, a gap, a crooked tooth. These carry more identity than any amount of description.',
        'Hair: length, texture, parting, and how it behaves when disturbed.',
        'Wardrobe: exact, including fastenings and wear. A missing button is an identity anchor.',
        'What is deliberately unspecified: expression and pose, which have to vary.',
      ],
    },
    {
      t: 'p',
      text: 'What must not be in it: personality adjectives. "Warm, approachable, confident" describes nobody, which is why every generation from it returns a different person who happens to be warm, approachable and confident.',
    },
    { t: 'h2', text: 'The reference set' },
    {
      t: 'p',
      text: 'One frame is not enough, and twenty is worse than five. What you want is a small fixed set covering the angles the campaign actually needs — front, three-quarter, profile, and one at the shot size you will use most — approved once and never quietly extended.',
    },
    {
      t: 'p',
      text: 'The discipline that matters is that the reference is used for identity only. If it is also carrying the pose, the light and the grade, every output will be a near-copy of the reference frame, and you will have one shot rendered fifty times.',
    },
    {
      t: 'note',
      title: 'Never re-reference from the last output',
      text: 'Conditioning shot twelve on shot eleven, and eleven on ten, is a chain, and chains drift. Every shot conditions on the original approved reference. This single rule prevents most of the slow identity slide people discover at the end of a campaign.',
    },
    { t: 'h2', text: 'The drift check' },
    {
      t: 'p',
      text: 'Two checks, both quick, both non-negotiable at volume.',
    },
    {
      t: 'p',
      text: 'The first is the overlay: take the new frame and the original approved reference, align them on the eyes, and flick between the two at full size. Structural differences that are invisible side by side are obvious in a flick, because the eye is comparing positions rather than impressions.',
    },
    {
      t: 'p',
      text: 'The second is the strip: every approved frame of that presenter, in a row, at thumbnail size. Drift is a gradient and gradients are only visible over distance. A face that has moved two per cent per asset over thirty assets is a different person at the end, and nobody spots it one asset at a time.',
    },
    { t: 'h2', text: 'When to train instead' },
    {
      t: 'table',
      caption: 'Conditioning versus a trained identity',
      head: ['', 'Reference conditioning', 'Trained identity'],
      rows: [
        ['Setup cost', 'Almost none', 'Significant: material, time, iteration'],
        ['Consistency ceiling', 'Good, degrades with unusual angles', 'High, holds across poses'],
        ['Flexibility', 'Full', 'Constrained to what it was trained on'],
        ['Portability', 'Survives a model change', 'Does not'],
        ['Worth it above', '—', 'Roughly twenty to thirty assets, or a presenter recurring for over a quarter'],
        ['Rights burden', 'Consent for the source material', 'Consent plus an explicit derivative-training clause'],
      ],
    },
    {
      t: 'p',
      text: 'The threshold is not a rule, it is a break-even. Below it, training costs more than it saves. Above it, the consistency is worth the setup, and the additional benefit is that a trained identity can hold a pose that references struggle with.',
    },
    { t: 'h2', text: 'The rights half, which is not optional' },
    {
      t: 'p',
      text: 'If the presenter derives from a real person, the release has to grant the right to train on the supplied material explicitly. Photography-era releases almost never do, because the concept did not exist when they were drafted. Scope, term, territory, withdrawal and end-of-term disposal all belong in it.',
    },
    {
      t: 'p',
      text: 'If the presenter is wholly synthetic, the consent question falls away and the disclosure question does not. A synthetic person presented as a real one engages transparency obligations regardless of whether anybody’s likeness was used.',
    },
    {
      t: 'cta',
      href: '/supply-drop/synthetic-ugc-consent-template',
      label: 'The consent template',
      text: 'A likeness and voice release drafted for generative production, including the derivative-training clause photography releases do not contain.',
    },
  ],
  faqs: [
    {
      q: 'How do you keep an AI presenter consistent across a campaign?',
      a: 'A character brief specifying structure rather than personality, a small fixed reference set used for identity only, and every shot conditioned on the original approved reference rather than on the previous output. Description alone stops working at around the third asset.',
    },
    {
      q: 'Why should you never condition a shot on the previous shot?',
      a: 'Because it forms a chain, and chains drift. Two per cent of change per asset across thirty assets produces a different person, and nobody notices it one asset at a time. Always condition on the original approved reference.',
    },
    {
      q: 'How do you check for identity drift?',
      a: 'Two checks. Overlay the new frame and the original reference aligned on the eyes and flick between them at full size — structural differences invisible side by side are obvious in a flick. Then lay every approved frame in a strip at thumbnail size, because drift is a gradient and only visible over distance.',
    },
    {
      q: 'When is it worth training a character model instead of using references?',
      a: 'Roughly above twenty to thirty assets, or when the presenter recurs for more than a quarter. Below that, training costs more than it saves. Note that a trained identity does not survive a model change, whereas a reference set does.',
    },
    {
      q: 'What should a synthetic presenter character brief contain?',
      a: 'Face structure and proportion, two or three fixed marks such as a scar or an asymmetry, hair behaviour, exact wardrobe including wear and fastenings, and an explicit statement that expression and pose vary. It must not contain personality adjectives, which describe nobody.',
    },
    {
      q: 'Do you need consent for a synthetic presenter?',
      a: 'If it derives from a real person, yes, and the release must explicitly grant the right to train on the supplied material — photography-era releases almost never do. If the presenter is wholly synthetic there is no consent question, but the disclosure question remains.',
    },
  ],
  terms: ['character-consistency', 'identity-lock', 'reference-image', 'trained-identity', 'drift', 'consent-file'],
  related: [
    'trained-identity-vs-lora-vs-reference-image',
    'how-we-keep-a-product-consistent-across-100-ai-generated-shots',
    'synthetic-ugc-consent-likeness-and-disclosure-checklist',
  ],
  resources: ['synthetic-ugc-consent-template', 'generative-film-shot-consistency-checklist'],
};
