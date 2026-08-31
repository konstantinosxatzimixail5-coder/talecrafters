import type { Post } from './types';

export const post: Post = {
  slug: 'ai-video-disclosure-rules-for-uk-advertising',
  title: 'AI Video Disclosure Rules for UK Advertising',
  metaTitle: 'AI Video Disclosure Rules for UK Advertising: What Actually Applies',
  metaDescription:
    'There is no blanket UK rule requiring every AI-assisted ad to be labelled. There is a misleadingness test, a set of platform policies that are stricter than the law, and an EU regulation that now applies to a lot of UK advertisers anyway.',
  excerpt:
    'What the CAP Code actually requires, where the platforms go further, and the practical rule we apply on every asset we ship.',
  published: '2026-08-27',
  author: 'TaleCrafters',
  section: 'Compliance',
  tags: ['Compliance', 'Disclosure', 'UK'],
  keywords: [
    'AI advertising disclosure UK',
    'ASA AI rules',
    'CAP Code AI generated content',
    'do you have to disclose AI in ads',
    'AI advertising regulation UK',
    'AI video labelling requirements',
    'synthetic media disclosure advertising',
  ],
  image: 'uk-disclosure',
  imageAlt:
    'A broadcast frame with a disclosure label burned into its lower third, shown against a wall of regulatory paperwork.',
  standfirst:
    'The UK Advertising Codes contain no rule that says "label AI". What they contain is a rule against misleading, and the test is whether an audience would be misled if you stayed quiet. That is a lower bar than a labelling mandate and a much higher bar than most advertisers assume.',
  legalNotice: true,
  body: [
    {
      t: 'p',
      text: 'The question we get asked most often, usually two days before a campaign goes live, is whether an AI-produced ad has to say so. The answer is not the one either camp wants. There is no blanket requirement in the UK Advertising Codes to disclose every AI-assisted asset. There is also no safe harbour for staying silent.',
    },
    { t: 'h2', text: 'What the CAP Code actually says' },
    {
      t: 'p',
      text: 'As of the second half of 2026, the UK Advertising Codes still contain no AI-specific rule. The Committee of Advertising Practice has been consistent that the existing rules apply regardless of how the content was made, which means the operative provision is the general prohibition on misleading by inaccuracy, ambiguity, exaggeration or omission.',
    },
    {
      t: 'p',
      text: 'CAP frames the practical test as two questions. Would the audience be misled if the use of AI were not disclosed? And, where there is a risk of misleading, would a disclosure clarify the ad or contradict its overall message? That second question is the one people miss. A disclosure that undermines the claim the ad is making is not a fix; it is evidence the claim was the problem.',
    },
    {
      t: 'note',
      title: 'The working test',
      text: 'Not "did we use AI" but "does the audience believe something about this ad that is not true, and is the generative production the reason". If yes, disclose or change the ad.',
    },
    { t: 'h2', text: 'Where silence stops being defensible' },
    {
      t: 'p',
      text: 'Four categories, in our experience, where an undisclosed generative asset moves from a judgement call to a problem.',
    },
    {
      t: 'ul',
      items: [
        'A synthetic person presented as a real customer, user or member of the public. This is the highest-risk category by a distance, because the entire persuasive weight of the format rests on the viewer believing a person exists.',
        'A product depiction that shows the product doing something it does not do, or looking materially better than it does. Generative production makes exaggerated depiction trivially easy, which is exactly why it attracts scrutiny.',
        'Any synthetic endorsement, testimonial or likeness of an identifiable person. Consent is a separate and non-negotiable issue here, before disclosure is even reached.',
        'Anything in a regulated sector where the underlying claim needs substantiation. Health, finance, supplements, environmental claims. The generative question stacks on top of a substantiation question that already existed.',
      ],
    },
    { t: 'h2', text: 'The platforms are stricter than the regulator' },
    {
      t: 'p',
      text: 'This is the part that catches teams out. The ASA sets a misleadingness standard. The platforms set labelling policies, and those policies are contractual rather than legal, which means they are enforced by demonetisation and reach suppression rather than by a ruling six months later.',
    },
    {
      t: 'p',
      text: 'Meta and TikTok both operate AI-content labelling regimes with a self-declaration requirement plus automated detection, and both reserve the right to apply a label you did not choose. Getting labelled by the platform after the fact is worse than labelling yourself: it looks like a correction rather than a disclosure, and it happens after the ad has already been served.',
    },
    {
      t: 'p',
      text: 'So the operative compliance surface is the stricter of the two, per placement, checked at brief stage rather than at delivery.',
    },
    { t: 'h2', text: 'The EU AI Act now applies to a lot of UK advertisers' },
    {
      t: 'p',
      text: 'Article 50 of the EU AI Act became enforceable on 2 August 2026. It imposes transparency duties on deployers of systems producing deepfakes and synthetic media, requiring disclosure that content has been artificially generated or manipulated, presented clearly and at the point of first interaction.',
    },
    {
      t: 'p',
      text: 'A UK advertiser is inside this the moment the campaign is served to people in the EU, which for most paid social is the default rather than the exception. There is a narrow carve-out for evidently artistic, creative, satirical or fictional work disclosed appropriately, and one for AI-generated text that has been through human editorial review with a named person holding editorial responsibility. Neither carve-out helps a product ad. Penalties run to fifteen million euro or three per cent of worldwide annual turnover.',
    },
    {
      t: 'p',
      text: 'Read that alongside the UK position and the practical conclusion is straightforward: for anything running across both markets, the EU standard is the one that determines your process, because it is the specific one.',
    },
    { t: 'h2', text: 'What we actually do' },
    {
      t: 'p',
      text: 'Our rule predates the regulation and has not needed changing.',
    },
    {
      t: 'ol',
      items: [
        'Disclose to the stricter of platform policy and client legal, decided at brief stage and written into the brief rather than discovered at delivery.',
        'Put the disclosure on the asset, not only in the metadata. A metadata flag protects you with the platform. An on-asset label protects you with the audience, and the audience is the one who can decide you were dishonest.',
        'Attach provenance metadata as well, because it costs nothing and it is what a platform’s detection reads.',
        'Never let an invented certification, award, ingredient or percentage survive a gate. This one is not a disclosure question. A frame containing a fabricated claim is killed, and no disclosure rescues it.',
        'Keep the consent file before rendering, not after, for any likeness of a real person. Signed release in the folder or the render does not start.',
      ],
    },
    {
      t: 'quote',
      text: 'A metadata flag protects you with the platform. An on-asset label protects you with the audience. You need both, and only one of them is visible when somebody screenshots the ad.',
    },
    { t: 'h2', text: 'The disclosure wording itself' },
    {
      t: 'p',
      text: 'Short, plain, and in the same visual field as the claim it qualifies. "AI-generated" or "Created with AI" is sufficient and is what platform policies are written around. Avoid constructions that hedge ("partly enhanced with AI tools") because a hedge invites a reader to work out what was and was not real, which is a worse conversation than the one you were avoiding.',
    },
    {
      t: 'cta',
      href: '/armoury/ai-advertising-disclosure-checklist',
      label: 'Download the disclosure checklist',
      text: 'The decision tree above as a one-page checklist covering UK, EU and platform requirements per asset type. Free, no email gate.',
    },
  ],
  faqs: [
    {
      q: 'Do you legally have to disclose AI-generated content in UK ads?',
      a: 'There is no blanket UK requirement to label every AI-assisted advert. The UK Advertising Codes contain no AI-specific rule, and CAP applies the existing prohibition on misleading by inaccuracy, ambiguity, exaggeration or omission. The test is whether the audience would be misled by not saying so.',
    },
    {
      q: 'What does the ASA say about AI in advertising?',
      a: 'That existing rules apply regardless of how content is produced. CAP advises asking whether the audience would be misled if AI use were not disclosed, and whether a disclosure would clarify the advert or contradict its overall message.',
    },
    {
      q: 'Does the EU AI Act apply to UK advertisers?',
      a: 'It applies when the content reaches people in the EU, which for most paid social campaigns is the default. Article 50 became enforceable on 2 August 2026 and requires clear disclosure that content is artificially generated, with penalties up to fifteen million euro or three per cent of worldwide turnover.',
    },
    {
      q: 'Are platform AI labelling rules stricter than the law?',
      a: 'Generally yes. Meta and TikTok operate self-declaration plus automated detection and will apply a label you did not choose. That is enforced through reach suppression and demonetisation rather than a ruling months later, which makes it the more immediate constraint.',
    },
    {
      q: 'Where should an AI disclosure appear on a video ad?',
      a: 'On the asset, in the same visual field as the claim it qualifies, as well as in provenance metadata. A metadata-only flag satisfies the platform and does nothing for a viewer who screenshots the ad.',
    },
    {
      q: 'Does disclosing AI use fix a misleading product depiction?',
      a: 'No. If a depiction shows the product doing something it does not do, the problem is the depiction. CAP’s own framing asks whether a disclosure would clarify or contradict the advert’s message, and a label that contradicts the claim is evidence the claim was the issue.',
    },
  ],
  terms: ['disclosure', 'synthetic-media', 'c2pa', 'synthetic-ugc'],
  related: [
    'synthetic-ugc-consent-likeness-and-disclosure-checklist',
    'eu-ai-act-article-50-what-advertisers-must-label',
    'how-to-brief-an-ai-video-production-studio',
  ],
  resources: ['ai-advertising-disclosure-checklist', 'synthetic-ugc-consent-template'],
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
      label: 'AI in advertising: a regulatory lookahead',
      href: 'https://www.charlesrussellspeechlys.com/en/insights/expert-insights/commercial/2026/ai-in-advertising-a-regulatory-lookahead-for-2026/',
      publisher: 'Charles Russell Speechlys',
    },
    {
      label: 'Advertising and marketing: what businesses might expect in the UK and EU',
      href: 'https://marketinglaw.osborneclarke.com/advertising-regulation/advertising-and-marketing-in-2026-what-businesses-might-expect-in-the-uk-and-eu/',
      publisher: 'Osborne Clarke',
    },
  ],
};
