import type { Post } from './types';

export const post: Post = {
  slug: 'voice-cloning-for-brand-narration',
  title: 'Voice Cloning for Brand Narration: What It Costs, What It Owes',
  metaTitle: 'Voice Cloning for Brand Narration: Quality, Consent and Cost',
  metaDescription:
    'Where synthetic narration is now indistinguishable and where it still gives itself away, the consent structure a cloned voice requires, and the six directorial controls that decide whether it sounds human.',
  excerpt:
    'The technology stopped being the constraint about a year ago. The direction and the paperwork did not.',
  published: '2026-06-23',
  author: 'Konstantinos Chatzimichail',
  section: 'Production',
  tags: ['Production', 'Ethics', 'Craft'],
  keywords: [
    'voice cloning brand',
    'AI voiceover quality',
    'synthetic narration',
    'AI voice consent',
    'text to speech advertising',
    'AI voice actor rights',
  ],
  image: 'voice-cloning',
  imageAlt: 'A waveform of a synthetic read, marked where the breaths were inserted.',
  standfirst:
    'Synthetic narration is now indistinguishable from a human read on neutral, informational copy. It still fails on emphasis that carries meaning, on humour, and on anything requiring a decision mid-sentence. Where it succeeds, the constraint is no longer quality — it is consent, disclosure and direction.',
  body: [
    {
      t: 'p',
      text: 'Voice is the modality that arrived first and got least attention, probably because nobody makes a showreel out of a voiceover. It is also the one where the quality argument is effectively over for a large category of work, which moves the interesting questions elsewhere.',
    },
    { t: 'h2', text: 'Where it passes and where it does not' },
    {
      t: 'table',
      caption: 'Synthetic narration by copy type',
      head: ['Copy type', 'Passes?', 'Why'],
      rows: [
        ['Neutral informational VO', 'Yes', 'Even pace, no stress decisions, no subtext to carry'],
        ['Corporate narration', 'Yes', 'The register is already flat, which is a low bar to clear'],
        ['E-learning and instruction', 'Yes', 'Clarity is the whole requirement'],
        ['Emotional read', 'Rarely', 'Emotion is produced by decisions mid-sentence, which is exactly the gap'],
        ['Comedy', 'No', 'Timing is the mechanism, and it does not survive synthesis'],
        ['Character performance', 'No', 'Listening, hesitation and self-interruption are the craft'],
        ['Anything with a name on it', 'Depends entirely on consent', 'A rights question before a quality one'],
      ],
    },
    { t: 'h2', text: 'The six controls that make it sound human' },
    {
      t: 'p',
      text: 'Most bad synthetic reads are undirected rather than incapable. The controls that matter, in order of effect:',
    },
    {
      t: 'ol',
      items: [
        'Breath placement. Insert breaths where a person would take them, which is before a clause they are about to emphasise, not at the ends of sentences. This single change does more than any other.',
        'Pace variation. A human read speeds up through the familiar and slows through the important. A uniform pace is the loudest tell there is.',
        'Emphasis by rewriting, not by markup. Move the word you want stressed to the end of the clause. Prosody follows structure more reliably than it follows tags.',
        'Sentence length variation in the script. Synthetic reads expose monotonous sentence rhythm far more than human ones, because a human unconsciously varies against it.',
        'One imperfection. A slightly early breath, a very small stumble, one word taken at a different pace. One, not three.',
        'Room. A completely clean voice in a completely silent mix is not a recording of anything. Put it in a space.',
      ],
    },
    {
      t: 'note',
      title: 'The script is where the read is won',
      text: 'Copy written for the eye synthesises badly. Read it aloud yourself first, mark where you naturally breathe and slow down, and rewrite so those points fall on clause boundaries. Most of the perceived quality difference between a good and a bad synthetic read is in the writing.',
    },
    { t: 'h2', text: 'The consent structure' },
    {
      t: 'p',
      text: 'A cloned voice needs a release that a standard performance contract does not contain, because the standard contract licenses a recording and this licenses a capability.',
    },
    {
      t: 'ul',
      items: [
        'Explicit grant to create a model from the supplied recordings, named as such.',
        'Scope: which brands, which product categories, which media. A voice licensed for internal training that appears in an advert is a breach nobody documented.',
        'Term, with an end date rather than "in perpetuity", and a defined disposal obligation for the model at the end of it.',
        'Territory, which matters because personality and likeness rights differ substantially between jurisdictions.',
        'Exclusions: categories the performer will not be used for. Political, gambling, alcohol, health claims — whatever they choose.',
        'Withdrawal: a mechanism, a notice period, and what happens to assets already in market.',
        'Rate structure for use, not only for the session. A session fee for something that runs forever is the arrangement performers are right to resist.',
      ],
    },
    { t: 'h2', text: 'Disclosure' },
    {
      t: 'p',
      text: 'A wholly synthetic voice that is not presented as a specific person is, in most markets, not a disclosure issue in itself, though platform policies vary and are frequently stricter than law.',
    },
    {
      t: 'p',
      text: 'A cloned voice of an identifiable person is a different matter. Since August 2026, EU transparency obligations under Article 50 apply to synthetic audio that qualifies as a deepfake, and an identifiable person’s cloned voice sits squarely in that. The working position is to disclose, to hold the consent in writing, and to decide both at brief stage.',
    },
    { t: 'h2', text: 'What we will not do' },
    {
      t: 'p',
      text: 'Clone a voice without a signed release from the person, including for a test, including internally, including when the recordings are publicly available. The availability of material has never been the same thing as permission, and the fact that it is now technically trivial is an argument for the rule rather than against it.',
    },
    {
      t: 'cta',
      href: '/glossary/voice-cloning',
      label: 'Voice cloning, defined',
      text: 'The definition, the consent structure it requires, and the related terms.',
    },
  ],
  faqs: [
    {
      q: 'Is AI voiceover good enough for brand work?',
      a: 'For neutral informational narration, corporate voice and e-learning, yes — the quality argument is effectively over. It still fails on emotional reads, comedy and character performance, because all three depend on decisions made mid-sentence.',
    },
    {
      q: 'How do you make a synthetic voice sound human?',
      a: 'Place breaths before clauses about to be emphasised rather than at sentence ends, vary the pace, create emphasis by moving the stressed word to the end of a clause rather than by markup, vary sentence length in the script, add exactly one imperfection, and put the voice in a room rather than in silence.',
    },
    {
      q: 'What consent does voice cloning require?',
      a: 'An explicit grant to build a model from the recordings — not just to use them — plus scope by brand and media, a term with an end date and disposal obligation, territory, category exclusions, a withdrawal mechanism, and a rate structure for use rather than only for the session.',
    },
    {
      q: 'Does a cloned voice have to be disclosed?',
      a: 'A cloned voice of an identifiable person generally yes: since August 2026 EU transparency obligations under Article 50 apply to synthetic audio qualifying as a deepfake. A wholly synthetic voice not presented as a specific person is usually a platform-policy question rather than a legal one, and platform policy is often stricter.',
    },
    {
      q: 'Why do synthetic reads sound flat even when the voice is good?',
      a: 'Usually because the copy was written for the eye. A uniform pace is the loudest tell there is, and synthetic reads expose monotonous sentence rhythm far more than human ones. Read the script aloud, mark where you naturally breathe and slow, and rewrite so those fall on clause boundaries.',
    },
  ],
  terms: ['voice-cloning', 'consent-file', 'likeness-rights', 'disclosure', 'deepfake', 'derivative-training'],
  related: [
    'ai-dubbing-and-lip-sync-for-multi-market-campaigns',
    'synthetic-ugc-consent-likeness-and-disclosure-checklist',
    'keeping-a-synthetic-presenter-consistent',
  ],
  resources: ['synthetic-ugc-consent-template', 'ai-advertising-disclosure-checklist'],
  legalNotice: true,
};
