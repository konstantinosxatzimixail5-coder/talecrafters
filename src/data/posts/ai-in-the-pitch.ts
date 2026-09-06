import type { Post } from './types';

export const post: Post = {
  slug: 'what-to-tell-a-client-about-ai-in-the-pitch',
  title: 'What to Tell a Client About AI in the Pitch',
  metaTitle: 'Disclosing AI Use to Clients: What to Say in the Pitch',
  metaDescription:
    'Almost every production now uses generative tools somewhere. What to disclose to a client and when, how to answer the four questions procurement will ask, and why hiding it costs more than saying it.',
  excerpt:
    'The question is no longer whether you use it. It is who benefits from the efficiency, and clients have started asking it directly.',
  published: '2026-05-15',
  author: 'Konstantinos Chatzimichail',
  section: 'Method',
  tags: ['Method', 'Buying', 'Ethics'],
  keywords: [
    'disclosing AI to clients',
    'AI in agency pitch',
    'client AI policy',
    'agency AI transparency',
    'AI use in production disclosure',
    'procurement AI questions',
  ],
  image: 'ai-in-the-pitch',
  imageAlt: 'A pitch document open at a page headed "How this was made".',
  standfirst:
    'Disclose which stages used generative tools, what the client owns, who is accountable for the output, and how the saving is shared. Clients are asking all four. A studio that answers them unprompted is easier to buy from than one that waits to be asked.',
  body: [
    {
      t: 'p',
      text: 'A few years ago the awkward question was whether you used generative tools at all. It stopped being awkward because almost everybody does, somewhere — previsualisation, versioning, asset preparation, clean-up, localisation. The question that replaced it is sharper and better: who is capturing the efficiency, and what am I actually buying.',
    },
    { t: 'h2', text: 'The four questions procurement asks now' },
    {
      t: 'table',
      caption: 'What they ask, what they mean, and what a good answer contains',
      head: ['The question', 'What it means', 'A good answer'],
      rows: [
        [
          '"Where in this process is AI used?"',
          'Am I paying craft rates for automated steps?',
          'A stage-by-stage list. Not a policy statement — a list.',
        ],
        [
          '"What do we own at the end?"',
          'Can we continue this without you?',
          'Assets, project files, lock file, consent files, input schedule.',
        ],
        [
          '"Who is accountable if it is wrong?"',
          'Is there a human signature on this?',
          'A named person, at named checkpoints, at any volume.',
        ],
        [
          '"Are we getting the saving?"',
          'Has the price moved with the cost?',
          'An honest account of where the cost went, because it moved rather than vanished.',
        ],
      ],
    },
    {
      t: 'p',
      text: 'The fourth is the one studios fear and the one worth meeting head-on, because the true answer is more interesting than the evasion. The cost did not disappear; it moved from shooting to writing, rights, review and systems. A client who understands that is buying the right thing. A client who is told nothing assumes the saving was pocketed, and they are sometimes correct.',
    },
    { t: 'h2', text: 'What to put in the pitch, unprompted' },
    {
      t: 'ol',
      items: [
        'A stage map with the method against each stage: filmed, generated, hybrid, automated, or human-only. One page.',
        'What is human at every volume: the brief, the structure, the creative decisions, the final sign-off.',
        'The deliverable specification, including what makes the work continuable without you.',
        'The disclosure position for the finished work, decided now rather than at delivery, to the strictest of platform policy, advertising code and applicable law.',
        'The consent position for anybody appearing in it.',
        'Where the budget actually goes, as a proportion. This single slide changes more pitch conversations than any showreel.',
      ],
    },
    {
      t: 'note',
      title: 'The reframe that works',
      text: 'Generative tools compressed the expensive invisible parts — previz, versioning, asset preparation, clean-up. They did not compress writing, structure, judgement or accountability, which is what a client is actually paying for and always was. Saying so plainly is both true and the strongest available pitch.',
    },
    { t: 'h2', text: 'What not to do' },
    {
      t: 'ul',
      items: [
        'Do not present a generated frame as filmed. It will be found out, and the cost is the relationship rather than the frame.',
        'Do not board at a fidelity you cannot deliver. A photoreal board for an uncertain shot is a promise somebody will hold you to.',
        'Do not quote a traditional rate for an automated stage and hope nobody asks. They now ask.',
        'Do not treat disclosure as the client’s problem. Legal responsibility usually sits with the advertiser, and a studio that will not advise on it has not read the rules.',
        'Do not claim the work is entirely human when it is not. This is the one that ends relationships, and it is entirely avoidable.',
      ],
    },
    { t: 'h2', text: 'When the client does not want AI used' },
    {
      t: 'p',
      text: 'Some do not, for reasons ranging from brand positioning to talent agreements to their own client’s policy. That is a legitimate constraint and it should be taken at face value rather than argued with.',
    },
    {
      t: 'p',
      text: 'What it needs is precision, because "no AI" means different things to different people. Does it exclude generative imagery in the final asset? Generative previz that nobody sees? Automated versioning? Machine transcription? Upscaling? Most people mean the first and are surprised to learn how much of the last four is already standard in every post house they have ever used.',
    },
    {
      t: 'p',
      text: 'Write the boundary down, in the brief, in specific terms, and price against it. A constraint that everybody understands is workable. A constraint nobody defined is a dispute waiting for a delivery date.',
    },
    {
      t: 'cta',
      href: '/supply-drop/synthetic-media-production-brief-template',
      label: 'The brief template',
      text: 'Where the method, the locks, the disclosure position and the deliverable specification sit, before any of this becomes a conversation about trust.',
    },
  ],
  faqs: [
    {
      q: 'Should you tell clients you used AI?',
      a: 'Yes, unprompted, as a stage-by-stage list rather than a policy statement. Almost every production uses generative tools somewhere now, so the question is not whether but where — and a studio that answers before being asked is easier to buy from.',
    },
    {
      q: 'What do clients actually want to know about AI use?',
      a: 'Four things: which stages used it, what they own at the end, who is accountable if something is wrong, and whether the price moved with the cost. The fourth is the one studios avoid and the one worth meeting directly.',
    },
    {
      q: 'Did generative tools make production cheaper?',
      a: 'They compressed the expensive invisible parts — previsualisation, versioning, asset preparation, clean-up. They did not compress writing, structure, rights, review or accountability, which is what a client is actually paying for. The cost moved rather than vanished.',
    },
    {
      q: 'What should you never do when pitching generative work?',
      a: 'Present a generated frame as filmed, board at a fidelity you cannot deliver, quote traditional rates for automated stages, treat disclosure as purely the client’s problem, or claim the work is entirely human when it is not. The last ends relationships and is entirely avoidable.',
    },
    {
      q: 'What if a client says they do not want AI used at all?',
      a: 'Take it at face value and then make it precise, because "no AI" means different things to different people — generative imagery in the final asset, previz nobody sees, automated versioning, machine transcription and upscaling are very different things. Write the boundary into the brief in specific terms and price against it.',
    },
  ],
  terms: ['disclosure', 'human-in-the-loop', 'deliverable-specification', 'provenance', 'synthetic-media'],
  related: [
    'how-to-choose-an-ai-video-production-agency',
    'who-owns-ai-generated-content',
    'how-to-brief-an-ai-video-production-studio',
  ],
  resources: ['synthetic-media-production-brief-template', 'ai-advertising-disclosure-checklist'],
};
