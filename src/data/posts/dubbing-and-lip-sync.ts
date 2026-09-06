import type { Post } from './types';

export const post: Post = {
  slug: 'ai-dubbing-and-lip-sync-for-multi-market-campaigns',
  title: 'AI Dubbing and Lip Sync for Multi-Market Campaigns',
  metaTitle: 'AI Dubbing and Lip Sync: What Works Across Markets in 2026',
  metaDescription:
    'What automated dubbing and visual lip sync can and cannot do across languages, where the failures cluster, what has to be re-recorded rather than converted, and the disclosure position in each market.',
  excerpt:
    'Translating the words is the easy tenth. The performance, the timing and the mouth are the rest.',
  published: '2026-06-26',
  author: 'Konstantinos Chatzimichail',
  section: 'Production',
  tags: ['Production', 'Post', 'Compliance'],
  keywords: [
    'AI dubbing',
    'AI lip sync video',
    'multi language video localisation',
    'automated dubbing quality',
    'AI voice translation',
    'localised video ads AI',
  ],
  image: 'dubbing-and-lip-sync',
  imageAlt: 'One frame of a speaking face repeated in five languages, with mouth shapes compared.',
  standfirst:
    'Automated dubbing handles the words reliably and the performance poorly. Visual lip sync works well on close, front-on, well-lit faces and degrades quickly outside that. Plan the shot for localisation before you shoot or generate it, because almost nothing about this is fixable afterwards.',
  body: [
    {
      t: 'p',
      text: 'A campaign in eleven markets used to mean eleven voice sessions, eleven timing passes and a lot of scheduling. It now means one process that produces eleven tracks in an afternoon and a much harder question about which of them are good enough to run.',
    },
    { t: 'h2', text: 'The four separable problems' },
    {
      t: 'table',
      caption: 'What localisation actually consists of, and how well each part automates',
      head: ['Problem', 'How well it automates', 'Where it breaks'],
      rows: [
        ['Translation of meaning', 'Well', 'Idiom, humour, claims that are regulated differently by market'],
        ['Timing to picture', 'Moderately', 'Languages expand and contract by up to a third; the cut does not'],
        ['Voice and performance', 'Poorly', 'Emphasis lands in the wrong place, and emotion reads as flat or as pantomime'],
        ['Mouth shapes', 'Well within a narrow envelope', 'Angle, distance, motion, facial hair, low light'],
      ],
    },
    {
      t: 'p',
      text: 'Treating these as one problem is the standard mistake. They automate at completely different rates, and a workflow that outputs all four together gives you no way to accept two and redo two.',
    },
    { t: 'h2', text: 'Where visual lip sync works' },
    {
      t: 'p',
      text: 'The envelope is narrower than the demos suggest. It works when the face is close to camera, roughly front-on, evenly lit, not moving much, and unobstructed. Outside that, in rough order of how quickly it degrades: profile angles, distance from camera, head movement, beards and moustaches, hard side light, and anything crossing the mouth.',
    },
    {
      t: 'p',
      text: 'The practical consequence is that lip sync is a shot design decision. If a campaign is going to be localised, the speaking shots should be composed for it — closer, flatter, steadier — and that decision has to be taken before anything is produced.',
    },
    {
      t: 'note',
      title: 'The timing constraint nobody plans for',
      text: 'The same sentence can be a third longer in one language than another. If a cut lands on the end of a line, that cut will be wrong in at least one market. Either leave handles on every speaking shot or accept a different edit per market — and decide which at the edit stage, not at delivery.',
    },
    { t: 'h2', text: 'What has to be re-recorded' },
    {
      t: 'ul',
      items: [
        'Anything where the emphasis carries the meaning. Converted performance places stress by rule and the rule is wrong often enough to matter.',
        'Humour. Timing is the entire mechanism and it does not survive conversion.',
        'Regulated claims, where the exact wording is legally load-bearing and a translation is a new claim requiring its own substantiation.',
        'Anything with a named person’s voice, which is a consent question before it is a quality one.',
        'The market that matters most. If eighty per cent of spend is in one country, that version is worth a human.',
      ],
    },
    { t: 'h2', text: 'A workable review process' },
    {
      t: 'p',
      text: 'Automated output needs a review pass by somebody who speaks the language, and the useful version of that pass is structured rather than "does this sound alright".',
    },
    {
      t: 'ol',
      items: [
        'Read the translated script alone, without audio. Catch meaning errors before performance distracts from them.',
        'Listen without picture. Catch emphasis and pace problems on their own.',
        'Watch with picture at full speed. Catch sync.',
        'Watch the mouth at 50 per cent speed. Catch the sync errors that full speed hides.',
        'Check every claim against the local regulator’s position, because a translation is a new claim.',
      ],
    },
    { t: 'h2', text: 'The disclosure position' },
    {
      t: 'p',
      text: 'Two things are happening and they are treated differently. Translating and re-voicing a real performer’s words is, in most markets, ordinary post-production. Synthesising a performer’s own voice in a language they do not speak is a synthetic performance, and it engages both consent and transparency obligations.',
    },
    {
      t: 'p',
      text: 'Since August 2026, EU transparency obligations under Article 50 apply to synthetic audio and video content that qualifies as a deepfake, which captures a voice clone of an identifiable person. Platform policies frequently reach further. The safe operating position is to treat a cloned voice as disclosable and to get the consent explicitly, per language, in writing.',
    },
    {
      t: 'cta',
      href: '/supply-drop/ai-advertising-disclosure-checklist',
      label: 'The disclosure checklist',
      text: 'The UK, EU and platform positions on one page, decided once per campaign rather than argued about at delivery.',
    },
  ],
  faqs: [
    {
      q: 'How good is AI dubbing in 2026?',
      a: 'Reliable for translating meaning, moderate for timing, and poor for performance. Emphasis lands by rule rather than by intention, which is wrong often enough to matter in anything where the stress carries the meaning.',
    },
    {
      q: 'When does AI lip sync work well?',
      a: 'On faces that are close to camera, roughly front-on, evenly lit, not moving much and unobstructed. It degrades with profile angles, distance, head movement, facial hair, hard side light and anything crossing the mouth — so it is a shot design decision, made before production.',
    },
    {
      q: 'What has to be re-recorded rather than converted?',
      a: 'Anything where emphasis carries meaning, humour, regulated claims where the wording is legally load-bearing, anything using a named person’s voice, and the single market carrying most of the spend.',
    },
    {
      q: 'Why does language length break a localised edit?',
      a: 'Because the same sentence can be up to a third longer in another language while the cut stays where it is. Leave handles on every speaking shot or plan for a different edit per market, and decide which at the edit stage rather than at delivery.',
    },
    {
      q: 'Does AI dubbing have to be disclosed?',
      a: 'Re-voicing a performer with another actor is ordinary post. Synthesising a performer’s own voice in a language they do not speak is a synthetic performance, which engages consent and, since August 2026, EU transparency obligations under Article 50 where it qualifies as a deepfake. Treat a cloned voice as disclosable and get consent per language in writing.',
    },
  ],
  terms: ['lip-sync', 'voice-cloning', 'disclosure', 'ai-act-article-50', 'consent-file', 'cutdown'],
  related: [
    'voice-cloning-for-brand-narration',
    'eu-ai-act-article-50-what-advertisers-must-label',
    'synthetic-ugc-consent-likeness-and-disclosure-checklist',
  ],
  resources: ['ai-advertising-disclosure-checklist', 'synthetic-ugc-consent-template'],
  legalNotice: true,
};
