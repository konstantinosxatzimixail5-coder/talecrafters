import type { Post } from './types';

export const post: Post = {
  slug: 'photoreal-or-stylised-choosing-a-register',
  title: 'Photoreal or Stylised: Choosing the Register Before You Generate',
  metaTitle: 'Photoreal or Stylised? Choosing a Visual Register for AI Work',
  metaDescription:
    'Photoreal has the highest production cost and the narrowest tolerance for error. A decision framework for choosing a register, with the four questions that settle it and the costs each answer carries.',
  excerpt:
    'Photoreal is the default and it is almost never the cheapest, the safest or the most distinctive choice available.',
  published: '2026-06-19',
  author: 'Konstantinos Chatzimichail',
  section: 'Craft',
  tags: ['Craft', 'Strategy', 'Production'],
  keywords: [
    'photoreal vs stylised AI',
    'AI video visual style',
    'choosing a visual register',
    'stylised AI animation brand',
    'AI art direction',
    'brand visual register',
  ],
  image: 'choosing-a-register',
  imageAlt: 'The same scene rendered as photoreal, illustrated, and graphic, with costs beneath each.',
  standfirst:
    'Photoreal carries the narrowest error tolerance of any register, because the audience has a lifetime of reference for what it should look like. Stylised registers widen that tolerance enormously, cost less to produce, and are usually more distinctive. Choose deliberately rather than by default.',
  body: [
    {
      t: 'p',
      text: 'Almost every generative brief arrives asking for photoreal, and almost none of them arrive having considered anything else. It is a default rather than a decision, and it is the most expensive default available: photoreal has the highest render count, the tightest gates, the largest post burden and the smallest margin for a wrong hand.',
    },
    { t: 'h2', text: 'Why photoreal is expensive' },
    {
      t: 'p',
      text: 'The audience has spent their whole life looking at photographs. They know, without being able to articulate any of it, how skin behaves in light, how fabric folds, how a hand holds a cup, and what a real lens does at the edge of frame. Every one of those is a way for a frame to fail, and each failure is legible to somebody with no training at all.',
    },
    {
      t: 'p',
      text: 'A stylised register removes most of those tests. Nobody has a lifetime of reference for how a hand should look in a screen-printed illustration, so the frame is judged against the style’s internal consistency rather than against reality. That is a far more forgiving standard, and it is why the acceptance rate on stylised work runs several times higher.',
    },
    { t: 'h2', text: 'The four questions that settle it' },
    {
      t: 'table',
      caption: 'Choosing a register',
      head: ['Question', 'If yes', 'If no'],
      rows: [
        [
          'Does the audience need to believe this happened?',
          'Photoreal, and budget for it',
          'Stylised is available and probably better',
        ],
        [
          'Is there a product whose appearance is the claim?',
          'Photoreal for the product, at minimum',
          'The whole piece is open',
        ],
        [
          'Will this run beside real photography of the same thing?',
          'Photoreal, or the mismatch becomes the message',
          'A distinct register is an asset, not a compromise',
        ],
        [
          'Is the category visually crowded with the same look?',
          'Photoreal is the crowd. Consider leaving it',
          'Photoreal may be the differentiator',
        ],
      ],
    },
    { t: 'h2', text: 'The distinctiveness argument' },
    {
      t: 'p',
      text: 'There is a commercial argument for stylisation that has nothing to do with cost. Generative photoreal has a house style — a certain smoothness, a certain symmetry, a certain quality of light — and a growing share of the audience can now identify it. Being recognisably in that register attaches your brand to everything else in it, including the worst of it.',
    },
    {
      t: 'p',
      text: 'A specific stylised register is defensible in a way photoreal is not. It can be documented, applied consistently, and owned. Nobody owns photoreal.',
    },
    {
      t: 'note',
      title: 'The hybrid that usually wins',
      text: 'Photoreal product, stylised world. The thing the audience has to believe is rendered to the highest standard; everything around it is in a register that is cheaper, more distinctive and more forgiving. Most of the best generative campaign work we have seen is some version of this split.',
    },
    { t: 'h2', text: 'How to specify a register so it survives' },
    {
      t: 'p',
      text: 'A style name is a request. A list of properties is an instruction. Specify five things and the register holds across forty assets and three people:',
    },
    {
      t: 'ol',
      items: [
        'Medium: what it would have been physically made with. Screen print, gouache, cel, clay, pencil.',
        'Surface: what it sits on and how that reads. Uncoated paper, board, film emulsion.',
        'Mark: how the marks were made and how visible they are. Visible brush, hard vector edge, halftone dot.',
        'Palette: three or four named colours and nothing else.',
        'Absence: what this register does not contain. This line does more work than the other four combined.',
      ],
    },
    {
      t: 'p',
      text: 'The absence line is the one people skip and the one that produces consistency. "No gradients, no soft shadows, no photographic texture, no lens blur" is a register somebody can hit repeatedly. "Bold and playful" is not.',
    },
    { t: 'h2', text: 'What stylisation does not solve' },
    {
      t: 'ul',
      items: [
        'Structure. A stylised piece with no story is a stylised piece with no story.',
        'Consistency across a sequence. A register still has to be locked and pasted; it is just more forgiving when it slips.',
        'Legible type, which fails identically in every register.',
        'Credibility for a demonstrated claim. If the audience has to see the product working, illustration cannot carry it.',
        'Disclosure obligations, which attach to synthetic content regardless of how it looks.',
      ],
    },
    {
      t: 'cta',
      href: '/supply-drop/animation-prompting',
      label: 'Prompting by animation style',
      text: 'Twelve registers, each with the order to write the prompt in, the words that move the model, and the specific way that style fails.',
    },
  ],
  faqs: [
    {
      q: 'Should AI video be photoreal or stylised?',
      a: 'Photoreal only when the audience has to believe it happened, when a product’s appearance is the claim, or when it will run beside real photography of the same thing. Otherwise stylised is cheaper, more forgiving, and more distinctive.',
    },
    {
      q: 'Why is photoreal more expensive to generate?',
      a: 'Because the audience has a lifetime of reference for it. Skin in light, fabric folds, how a hand holds a cup — every one is a way to fail, and each failure is legible to somebody with no training. Stylised registers are judged against their own internal consistency instead, which is a far more forgiving standard.',
    },
    {
      q: 'What is the best hybrid approach?',
      a: 'Photoreal product in a stylised world. The thing the audience must believe is rendered to the highest standard; everything around it sits in a register that is cheaper, more distinctive and more forgiving of error.',
    },
    {
      q: 'How do you specify a visual style so it stays consistent?',
      a: 'Five properties rather than a style name: medium, surface, mark, a palette of three or four named colours, and — most importantly — an explicit list of what the register does not contain. The absence line does more for consistency than the other four combined.',
    },
    {
      q: 'Does stylisation remove the need for disclosure?',
      a: 'No. Disclosure obligations attach to synthetic content regardless of whether it looks photographic. A stylised piece that depicts an identifiable person doing something they did not do is still subject to the same transparency rules.',
    },
  ],
  terms: ['register', 'style-transfer', 'acceptance-rate', 'ai-slop', 'tone', 'master-plate'],
  related: [
    'why-your-ai-video-looks-cheap-and-what-fixes-it',
    'legible-text-in-ai-generated-images',
    'the-brand-lock-file',
  ],
  resources: ['animation-prompting', 'prompting-library'],
};
