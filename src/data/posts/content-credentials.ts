import type { Post } from './types';

export const post: Post = {
  slug: 'content-credentials-c2pa-for-brands',
  title: 'Content Credentials for Brands: What C2PA Does and What It Cannot',
  metaTitle: 'C2PA Content Credentials for Brands: What They Do and Do Not Prove',
  metaDescription:
    'How C2PA content credentials work, what a manifest can and cannot prove, why they survive some workflows and not others, and how to decide whether to attach them before production rather than after.',
  excerpt:
    'Provenance is becoming a procurement question rather than an ethics one. It cannot be retrofitted onto a finished cut.',
  published: '2026-05-22',
  author: 'Konstantinos Chatzimichail',
  section: 'Compliance',
  tags: ['Compliance', 'Ethics', 'Systems'],
  keywords: [
    'C2PA content credentials',
    'content provenance brands',
    'what is C2PA',
    'AI content provenance',
    'content credentials advertising',
    'media provenance standard',
  ],
  image: 'content-credentials',
  imageAlt: 'An asset inspector showing a signed manifest of edits attached to an image.',
  standfirst:
    'C2PA writes a signed, tamper-evident record of how a file was made and edited, travelling with the file. It proves what a chain of tools asserted, not that an image is true. Decide whether to carry credentials at brief stage, because they cannot be added to a finished asset after the fact.',
  body: [
    {
      t: 'p',
      text: 'Provenance used to be an ethics conversation held after the work. It is becoming a procurement one held before it: platforms, broadcasters and an increasing number of client legal teams now ask what an asset carries, and answering "nothing" is a slower answer than it used to be.',
    },
    { t: 'h2', text: 'What a manifest contains' },
    {
      t: 'p',
      text: 'A C2PA manifest is a cryptographically signed record embedded in the asset. It states which tool created it, what actions were performed, by which software, and — where the signer chooses — by whom. Each step is signed, so altering the file without re-signing makes the mismatch detectable.',
    },
    {
      t: 'p',
      text: 'The important property is tamper-evidence rather than tamper-proofing. Anybody can strip a manifest. What they cannot do is change the asset and keep a valid one, which means the absence of credentials is itself a signal in a world where their presence is common.',
    },
    { t: 'h2', text: 'What it proves and what it does not' },
    {
      t: 'table',
      caption: 'The limits, stated plainly',
      head: ['C2PA can show', 'C2PA cannot show'],
      rows: [
        ['Which tools touched the file, in order', 'That the content is true or accurate'],
        ['That the file has not changed since signing', 'That an unsigned file is fake'],
        ['That a generative step was declared', 'That an undeclared generative step did not happen elsewhere'],
        ['Who signed, where an identity was attached', 'That the signer is honest'],
        ['That an edit history is internally consistent', 'What was in the frame before it was photographed'],
      ],
    },
    {
      t: 'p',
      text: 'The right-hand column matters because credentials are frequently oversold. A manifest is a chain of custody. Chains of custody are extremely useful and they have never established that the thing in the evidence bag is what somebody claims it is.',
    },
    { t: 'h2', text: 'Where it survives and where it does not' },
    {
      t: 'ul',
      items: [
        'Survives: editing in tools that implement the standard, export in supporting formats, delivery through platforms that preserve metadata.',
        'Does not survive: a screenshot, a re-encode by a tool that does not implement it, most social platform re-compressions, and anything that passes through a person’s phone.',
        'Partially survives: some platforms preserve the credential and surface it in an inspector; others preserve it in the file and display nothing.',
      ],
    },
    {
      t: 'p',
      text: 'The practical consequence is that credentials work well for asset delivery and business-to-business trust, and poorly as a consumer-facing signal in a feed. Anyone planning a campaign around consumers checking credentials is planning around a behaviour that does not exist.',
    },
    {
      t: 'note',
      title: 'It cannot be retrofitted',
      text: 'A manifest describes a history. You cannot attach a credible one to a finished asset produced without it, because there is no history to sign. If a client needs credentials, that decision belongs in the brief alongside the deliverable specification.',
    },
    { t: 'h2', text: 'Credentials, watermarking and disclosure are three things' },
    {
      t: 'p',
      text: 'They get collapsed constantly and they solve different problems.',
    },
    {
      t: 'p',
      text: 'Credentials sign the file’s history and are readable by software. Watermarking marks the pixels or the audio and survives some transformations that destroy metadata, at the cost of being either visible or statistically detectable rather than certain. Disclosure is a statement to the audience, in language, and is the one with legal weight attached.',
    },
    {
      t: 'p',
      text: 'A serious workflow uses all three for different reasons: credentials for the chain of custody, watermarking for what survives a screenshot, and disclosure because since August 2026 EU transparency obligations under Article 50 require it for synthetic content qualifying as a deepfake, and platform policy and advertising codes frequently require more.',
    },
    { t: 'h2', text: 'Deciding at brief stage' },
    {
      t: 'ol',
      items: [
        'Ask whether the client, the platform or the broadcaster requires provenance. If any of the three does, it is a deliverable and it changes the toolchain.',
        'Check the toolchain end to end. One tool in the middle that strips metadata breaks the chain, and finding that out at delivery is expensive.',
        'Decide what identity is attached to the signature. A studio signature and a brand signature carry different implications and both are choices.',
        'Write the disclosure position at the same time, because they are decided together and only one of them is legally load-bearing.',
        'Record all of it in the deliverable specification, so nobody discovers the requirement during the final week.',
      ],
    },
    {
      t: 'cta',
      href: '/supply-drop/ai-advertising-disclosure-checklist',
      label: 'The disclosure checklist',
      text: 'Where provenance sits alongside the UK, EU and platform labelling positions, as one decision path per campaign.',
    },
  ],
  faqs: [
    {
      q: 'What is C2PA?',
      a: 'An open standard that embeds a cryptographically signed, tamper-evident record of how a piece of media was made and edited, travelling with the file. Each step is signed, so altering the asset without re-signing makes the mismatch detectable.',
    },
    {
      q: 'Does C2PA prove an image is real?',
      a: 'No. It shows which tools touched a file and that it has not changed since signing. It cannot show that the content is accurate, that the signer is honest, or what was in front of the camera. It is a chain of custody, not a guarantee of truth.',
    },
    {
      q: 'Do content credentials survive social media?',
      a: 'Inconsistently. They survive editing in tools that implement the standard and delivery through platforms that preserve metadata. They do not survive a screenshot, a re-encode by a non-implementing tool, or most platform re-compressions — so they work for asset delivery and B2B trust, poorly as a consumer-facing signal.',
    },
    {
      q: 'Can you add content credentials to a finished asset?',
      a: 'Not credibly. A manifest describes a history, and an asset produced without one has no history to sign. If credentials are required, the decision belongs in the brief because it changes the toolchain.',
    },
    {
      q: 'What is the difference between C2PA, watermarking and disclosure?',
      a: 'Credentials sign the file’s history and are read by software. Watermarking marks the pixels or audio and survives transformations that destroy metadata, at the cost of certainty. Disclosure is a statement to the audience in language, and it is the one with legal weight — since August 2026 EU transparency obligations under Article 50 apply to synthetic content qualifying as a deepfake.',
    },
  ],
  terms: ['c2pa', 'provenance', 'watermarking', 'disclosure', 'deliverable-specification', 'ai-act-article-50'],
  related: [
    'eu-ai-act-article-50-what-advertisers-must-label',
    'ai-video-disclosure-rules-for-uk-advertising',
    'who-owns-ai-generated-content',
  ],
  resources: ['ai-advertising-disclosure-checklist', 'synthetic-media-production-brief-template'],
  legalNotice: true,
};
