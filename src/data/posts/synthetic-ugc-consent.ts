import type { Post } from './types';

export const post: Post = {
  slug: 'synthetic-ugc-consent-likeness-and-disclosure-checklist',
  title: 'Synthetic UGC: Consent, Likeness and Disclosure Checklist',
  metaTitle: 'Synthetic UGC: Consent, Likeness and Disclosure Checklist',
  metaDescription:
    'Synthetic user-generated content borrows the credibility of a real person. The consent, likeness and disclosure work that has to happen before a single frame renders, as a working checklist.',
  excerpt:
    'A creator-style ad with a face that does not exist is a different legal object from one with a face that does. Both need paperwork, and they need different paperwork.',
  published: '2026-08-20',
  author: 'Konstantinos Chatzimichail',
  section: 'Compliance',
  tags: ['Compliance', 'Synthetic UGC', 'Consent'],
  keywords: [
    'synthetic UGC',
    'AI UGC consent',
    'AI generated testimonial rules',
    'synthetic media likeness rights',
    'AI creator content disclosure',
    'digital likeness consent',
    'AI avatar advertising rules',
  ],
  image: 'synthetic-ugc',
  imageAlt:
    'A phone held at arm’s length showing a creator-style piece to camera, with a consent form visible in the reflection behind it.',
  standfirst:
    'Synthetic UGC works because the format signals authenticity. That is exactly why it carries obligations a polished brand film does not. Three questions decide what paperwork you need: is the face real, is the person real, and does the viewer believe both.',
  legalNotice: true,
  body: [
    {
      t: 'p',
      text: 'Creator-style advertising works on a borrowed assumption. The shaky frame, the room lighting, the unpolished delivery all say: this is a person, not a campaign. Generative production can reproduce every one of those signals perfectly, and the moment it does, the assumption becomes something you are responsible for.',
    },
    {
      t: 'p',
      text: 'The obligations are not one set. They fork depending on what kind of face is on screen.',
    },
    { t: 'h2', text: 'The three cases, and how they differ' },
    {
      t: 'table',
      caption: 'What each kind of synthetic presenter requires',
      head: ['Case', 'What it is', 'Consent needed', 'Disclosure needed'],
      rows: [
        [
          'Wholly synthetic person',
          'A face with no real-world referent',
          'Model licence cleared for commercial use; no personal consent to obtain',
          'Yes, wherever the format implies a real customer or user',
        ],
        [
          'Trained identity of a real person',
          'A model built from a real performer’s stills or footage',
          'Signed release covering likeness, voice, scope, duration, territory and derivative training',
          'Yes, plus performer credit where their contract requires it',
        ],
        [
          'Real person, synthetic words',
          'Real footage or voice, generated script or lip-sync',
          'Explicit release for synthetic dialogue, separate from the original shoot release',
          'Yes, and this is the highest-risk case of the three',
        ],
      ],
    },
    {
      t: 'note',
      title: 'The one that catches people',
      text: 'A release signed for a photoshoot in 2023 does not cover training a model on those images in 2026. Derivative training is a distinct permission and old paperwork almost never mentions it.',
    },
    { t: 'h2', text: 'Consent: what a usable release actually covers' },
    {
      t: 'p',
      text: 'Most likeness releases in circulation were drafted for photography and film. They grant use of captured material. They do not grant the right to build a model that can generate new material the person never performed, which is the entire point of a trained identity.',
    },
    {
      t: 'p',
      text: 'A release that works for synthetic production names, at minimum:',
    },
    {
      t: 'ul',
      items: [
        'The specific permission to train a model on the supplied material, stated in those words rather than implied by a broad grant.',
        'Scope of output: what the generated likeness may be used to say and sell, and what it may not. A blanket grant is a liability for both sides.',
        'Territory and duration, with a stated end date rather than "in perpetuity", which is increasingly unenforceable and always a negotiation risk.',
        'What happens to the trained model at the end of the term. Deleted, escrowed, or retained. Say which.',
        'A withdrawal mechanism, and an honest statement of what withdrawal can and cannot undo for material already published.',
        'Categories the likeness will never be used for. Political content, adult content, and claims about health, finance or legal matters are the usual carve-outs and performers ask for them.',
      ],
    },
    { t: 'h2', text: 'Likeness: the cases that are not obvious' },
    {
      t: 'p',
      text: 'Two failure modes recur, and neither involves anyone deliberately impersonating anybody.',
    },
    {
      t: 'p',
      text: 'The first is accidental resemblance. A wholly synthetic face generated from a prompt describing a demographic will sometimes land close to a real, identifiable person, particularly in a small market. There is no malice and the exposure is the same. The mitigation is dull and effective: reverse image search on the final identity before it enters production, and a written record that you did.',
    },
    {
      t: 'p',
      text: 'The second is voice. A synthetic voice trained on a real person is a likeness, whatever the contract calls it, and a voice that merely sounds like a recognisable performer is where the newest and least settled law sits. Treat voice with the same paperwork as face. A signed release for the voice goes in the folder before anything renders, and that applies to a founder’s own voice as much as to a hired performer’s.',
    },
    { t: 'h2', text: 'Disclosure: what synthetic UGC specifically requires' },
    {
      t: 'p',
      text: 'The general disclosure position is covered elsewhere, but synthetic UGC has a particular problem: the format itself is the claim. A polished brand film that happens to be generative is not asserting that a person exists. A piece to camera in a kitchen is.',
    },
    {
      t: 'p',
      text: 'So the standard is higher. Where a viewer would reasonably read the format as a real customer, user or independent creator, disclose regardless of whether the underlying claims are substantiated. And put it on the asset. A caption disclosure disappears the moment the video is reposted, and creator-format content gets reposted.',
    },
    {
      t: 'p',
      text: 'Since 2 August 2026, Article 50 of the EU AI Act has required deployers of deepfake-producing systems to disclose that content is artificially generated, clearly and at first interaction, wherever the content reaches people in the EU. Synthetic UGC sits squarely inside that. In the UK, CAP applies the existing misleadingness rules, which for this format reach the same conclusion by a different route.',
    },
    { t: 'h2', text: 'The pre-render checklist' },
    {
      t: 'p',
      text: 'Nothing on this list happens after generation. All of it happens before, because every item is cheaper to satisfy than to remediate.',
    },
    {
      t: 'ol',
      items: [
        'Model licence confirmed as cleared for commercial use, for the specific model and version being run.',
        'Signed release in the folder covering likeness, voice, derivative training, scope, territory, duration and end-of-term disposal.',
        'Reverse image search on any wholly synthetic identity, with the result recorded.',
        'Disclosure decision made and written into the brief, set to the stricter of platform policy, UK position and EU Article 50.',
        'Claim substantiation held for anything the presenter says about the product. A synthetic presenter cannot make a claim the brand could not make itself.',
        'A named person with authority to stop the run, and a defined point at which they see the output before it ships.',
        'Provenance metadata configured on export, plus the on-asset label.',
      ],
    },
    {
      t: 'quote',
      text: 'Consent is not a formality. A signed release sits in the folder before anything renders, and that applies to a founder’s own voice as much as to anyone else’s.',
    },
    {
      t: 'cta',
      href: '/armoury/synthetic-ugc-consent-template',
      label: 'Download the consent template',
      text: 'A synthetic likeness and voice release covering derivative training, scope, territory, withdrawal and end-of-term disposal. Free, no email gate.',
    },
  ],
  faqs: [
    {
      q: 'Do you need consent to create synthetic UGC?',
      a: 'It depends on whose face it is. A wholly synthetic person needs no personal consent but does need a model licence cleared for commercial use. A trained identity built from a real performer needs a signed release covering likeness, voice, derivative training, scope, territory and duration.',
    },
    {
      q: 'Does an old photoshoot release cover training an AI model?',
      a: 'Almost never. Releases drafted for photography grant use of captured material. Training a model that generates new material the person never performed is a distinct permission, and it has to be named explicitly rather than inferred from a broad grant.',
    },
    {
      q: 'Does synthetic UGC have to be labelled?',
      a: 'In practice yes. The format itself signals that a real person is speaking, so a viewer is being asked to believe something the content cannot support. Since August 2026 Article 50 of the EU AI Act requires clear disclosure wherever the content reaches EU audiences, and the UK misleadingness test reaches the same answer for this format.',
    },
    {
      q: 'Is a synthetic voice treated the same as a synthetic face?',
      a: 'Treat it the same. A voice trained on a real person is a likeness whatever the contract calls it, and voice cloning is where the least settled law currently sits. Get a signed release for the voice before rendering.',
    },
    {
      q: 'What if a synthetic face accidentally resembles a real person?',
      a: 'The exposure is the same as if it were deliberate. Run a reverse image search on the final identity before it enters production and keep a written record that you did.',
    },
  ],
  terms: ['synthetic-ugc', 'disclosure', 'character-consistency', 'human-in-the-loop'],
  related: [
    'ai-video-disclosure-rules-for-uk-advertising',
    'eu-ai-act-article-50-what-advertisers-must-label',
    'how-to-brief-an-ai-video-production-studio',
  ],
  resources: ['synthetic-ugc-consent-template', 'ai-advertising-disclosure-checklist'],
  sources: [
    {
      label: 'Transparency obligations under Article 50 of the AI Act',
      href: 'https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act',
      publisher: 'European Commission',
    },
    {
      label: 'Code of Practice on Transparency of AI-generated Content',
      href: 'https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content',
      publisher: 'European Commission',
    },
  ],
};
