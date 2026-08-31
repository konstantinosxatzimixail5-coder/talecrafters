import type { Post } from './types';

export const post: Post = {
  slug: 'eu-ai-act-article-50-what-advertisers-must-label',
  title: 'EU AI Act Article 50 Is Now In Force: What Advertisers Must Label',
  metaTitle: 'EU AI Act Article 50: What Advertisers Must Label From August 2026',
  metaDescription:
    'Article 50 of the EU AI Act became enforceable on 2 August 2026. What it obliges advertisers and studios to disclose, which carve-outs exist, what the December 2026 grace period covers, and what it means for UK and non-EU brands.',
  excerpt:
    'The transparency obligations landed on 2 August 2026. Most advertisers running paid social in Europe are inside them and have not changed anything.',
  published: '2026-08-31',
  author: 'TaleCrafters',
  section: 'Compliance',
  tags: ['Compliance', 'Regulation', 'EU'],
  keywords: [
    'EU AI Act Article 50',
    'AI Act transparency obligations',
    'deepfake disclosure EU',
    'AI content labelling law',
    'AI Act advertising compliance',
    'synthetic content disclosure requirements',
    'AI Act August 2026',
  ],
  image: 'ai-act',
  imageAlt:
    'A European regulatory seal rendered as a circuit of twelve stars, half of them lit, over a wall of synthetic video frames.',
  standfirst:
    'Article 50 of the EU AI Act became enforceable on 2 August 2026. If you deploy a system that produces deepfakes or synthetic media and that content reaches people in the EU, you now have a disclosure duty, and it does not depend on your company being in Europe.',
  legalNotice: true,
  body: [
    {
      t: 'p',
      text: 'The AI Act arrived in stages, which is why a lot of teams stopped paying attention after the first one. The stage that matters for anybody making advertising is Article 50, and it started applying on 2 August 2026.',
    },
    {
      t: 'p',
      text: 'It is not a high-risk provision. That is the point people miss. Article 50 applies regardless of whether the underlying system is classified as high-risk, which means a marketing team using an off-the-shelf video model is inside it on the same terms as anybody else.',
    },
    { t: 'h2', text: 'What the obligation actually is' },
    {
      t: 'p',
      text: 'Article 50 imposes transparency duties on providers and deployers across four categories: systems that interact directly with people, systems that generate synthetic content, emotion recognition and biometric categorisation systems, and systems producing deepfakes.',
    },
    {
      t: 'p',
      text: 'For advertising, two of those matter. Providers of generative systems must mark outputs in a machine-readable way so they are detectable as artificially generated. Deployers producing deepfakes must disclose that the content has been artificially generated or manipulated.',
    },
    {
      t: 'note',
      title: 'Provider or deployer?',
      text: 'The provider is whoever puts the model on the market. The deployer is whoever uses it under their own authority, which for a campaign means the brand or the studio running the render, not the model vendor. Deployer duties are the ones that land on you.',
    },
    {
      t: 'p',
      text: 'The manner of disclosure is specified: clear and distinguishable, at the latest at the time of first interaction or exposure, and compliant with accessibility requirements. "At first exposure" rules out a disclosure that appears at the end of a thirty-second spot, and rules out a policy page that nobody visits.',
    },
    { t: 'h2', text: 'The carve-outs, and why they probably do not help you' },
    {
      t: 'p',
      text: 'Two exceptions exist and both are narrower than they look.',
    },
    {
      t: 'ul',
      items: [
        'Evidently artistic, creative, satirical or fictional work, where the disclosure obligation is reduced to revealing the existence of generated content in a manner that does not hamper the display or enjoyment of the work. A stylised brand film may plausibly reach this. A creator-format testimonial does not, because the format’s persuasive power depends on it not being read as fiction.',
        'AI-generated text on matters of public interest that has undergone human editorial review, with a natural or legal person holding editorial responsibility for publication. This is a publishing carve-out. It does not cover video and it does not cover advertising copy.',
      ],
    },
    { t: 'h2', text: 'The December 2026 grace period, precisely' },
    {
      t: 'p',
      text: 'There is a limited transitional arrangement and it is narrower than most summaries suggest. It applies only to AI systems placed on the market before 2 August 2026, and only in respect of the marking and detection obligation in Article 50(2), the machine-readable marking of outputs. Providers of those systems have until 2 December 2026.',
    },
    {
      t: 'p',
      text: 'That is a provider concession about watermarking infrastructure. It is not a deferral of the deployer disclosure duty, and it does not give an advertiser until December to start labelling deepfake content.',
    },
    { t: 'h2', text: 'Territorial reach: why UK and US brands are inside it' },
    {
      t: 'p',
      text: 'The Act follows the output rather than the establishment. Where a system’s output is used in the Union, the obligations attach. For advertising that means a campaign served to audiences in EU member states is in scope irrespective of where the brand, the agency or the studio sits.',
    },
    {
      t: 'p',
      text: 'For most paid social, EU delivery is the default rather than a decision, and geo-excluding the EU to avoid the obligation is usually a worse commercial trade than complying. So the practical planning assumption for a UK or US advertiser running European paid media is that Article 50 applies.',
    },
    { t: 'h2', text: 'Penalties' },
    {
      t: 'p',
      text: 'Non-compliance with the transparency obligations attracts fines up to fifteen million euro or three per cent of worldwide annual turnover, whichever is higher. That is the tier below the prohibited-practices maximum and well above a nuisance.',
    },
    { t: 'h2', text: 'What to change this quarter' },
    {
      t: 'ol',
      items: [
        'Decide disclosure at brief stage, not delivery. Write the labelling decision into the brief alongside the deliverable list, so it is a production constraint rather than a compliance afterthought.',
        'Put the label on the asset and the provenance in the metadata. The metadata satisfies machine detection. The on-asset label satisfies a human at first exposure, which is what the text actually asks for.',
        'Ask your model providers, in writing, what marking they apply to outputs and from what date. Their Article 50(2) position determines whether your exports carry machine-readable provenance at all.',
        'Classify your formats. Wholly synthetic presenters and any manipulated likeness of a real person are deepfake-category and get disclosed without argument. A stylised, obviously-constructed brand film is a judgement call worth documenting.',
        'Keep the file. Which model, which version, which licence, who signed off, what was disclosed, on which placement. The obligation is provable or it is not satisfied.',
      ],
    },
    {
      t: 'p',
      text: 'None of this is expensive. It is a process change made once, at brief stage, that costs nothing per asset afterwards. The expensive version is the one where a campaign is already live.',
    },
    {
      t: 'cta',
      href: '/armoury/ai-advertising-disclosure-checklist',
      label: 'Download the disclosure checklist',
      text: 'UK, EU and platform requirements on one page, arranged by asset type so the decision happens at brief stage. Free, no email gate.',
    },
  ],
  faqs: [
    {
      q: 'When did EU AI Act Article 50 come into force?',
      a: 'It became enforceable on 2 August 2026, imposing transparency duties on providers and deployers of chatbots, synthetic media generators, emotion recognition systems and deepfake tools, regardless of whether the underlying system is classified as high-risk.',
    },
    {
      q: 'Does the EU AI Act apply to UK or US companies?',
      a: 'It follows the output. Where a system’s output is used in the Union the obligations attach, so a campaign served to EU audiences is in scope irrespective of where the brand, agency or studio is established.',
    },
    {
      q: 'What does the December 2026 grace period cover?',
      a: 'Only the machine-readable marking obligation in Article 50(2), and only for AI systems placed on the market before 2 August 2026. Providers of those systems have until 2 December 2026. It is not a deferral of the deployer disclosure duty.',
    },
    {
      q: 'Is there an artistic exemption in Article 50?',
      a: 'There is a reduced obligation for evidently artistic, creative, satirical or fictional work, where disclosure need only reveal the existence of generated content without hampering enjoyment of the work. It does not cover creator-format advertising, where the persuasive effect depends on the content not reading as fiction.',
    },
    {
      q: 'What are the penalties under Article 50?',
      a: 'Up to fifteen million euro or three per cent of worldwide annual turnover, whichever is higher.',
    },
    {
      q: 'Is a metadata watermark enough to comply?',
      a: 'Not on its own for deepfake content. Machine-readable marking addresses detection; the deployer duty requires disclosure that is clear and distinguishable to a person at the latest at first exposure, which means something visible on the asset.',
    },
  ],
  terms: ['disclosure', 'c2pa', 'synthetic-media', 'synthetic-ugc'],
  related: [
    'ai-video-disclosure-rules-for-uk-advertising',
    'synthetic-ugc-consent-likeness-and-disclosure-checklist',
    'how-to-brief-an-ai-video-production-studio',
  ],
  resources: ['ai-advertising-disclosure-checklist'],
  sources: [
    {
      label: 'Transparency obligations under Article 50 of the AI Act',
      href: 'https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act',
      publisher: 'European Commission',
    },
    {
      label: 'Guidelines on transparency obligations for providers and deployers of certain AI systems',
      href: 'https://digital-strategy.ec.europa.eu/en/policies/guidelines-ai-transparency-obligations',
      publisher: 'European Commission',
    },
    {
      label: 'The EU AI Act’s transparency rules: a practical guide to Article 50',
      href: 'https://artificialintelligenceact.eu/transparency-rules-article-50/',
      publisher: 'artificialintelligenceact.eu',
    },
    {
      label: 'The AI Act’s transparency obligations: rules, scope and timeline',
      href: 'https://www.stibbe.com/publications-and-insights/the-ai-acts-transparency-obligations-rules-scope-and-timeline',
      publisher: 'Stibbe',
    },
  ],
};
