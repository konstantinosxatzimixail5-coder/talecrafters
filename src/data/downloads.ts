// The seven downloadable tools in the Supply Drop.
//
// One definition per tool, used twice: the /supply-drop/<slug> page renders it as
// a fully usable web document, and scripts/pdf/build.mjs renders the same data
// into a branded PDF. Neither can drift from the other, and the page is the
// canonical thing: the PDF is a copy of a document that already ranks, rather
// than a gate in front of one.

export type ToolBlock =
  | { t: 'para'; text: string }
  /** A checklist. Boxes render on the PDF and as list markers on the page. */
  | { t: 'check'; title?: string; items: string[] }
  /** Fill-in fields. `lines` sizes the writing space on the printed version. */
  | { t: 'fields'; title?: string; fields: { label: string; hint?: string; lines?: number }[] }
  | { t: 'table'; head: string[]; rows: string[][] }
  | { t: 'note'; text: string }
  /** Scored rows. Each is rated 0 to 5 on the printed version. */
  | { t: 'scale'; title?: string; items: { label: string; detail: string }[] };

export interface ToolSection {
  title: string;
  kicker?: string;
  blocks: ToolBlock[];
}

export interface Tool {
  slug: string;
  /** The scoring band table, for scorecards. Rendered after the sections. */
  bands?: { range: string; verdict: string; action: string }[];
  intro: string[];
  howToUse: string[];
  sections: ToolSection[];
  /** Printed in the PDF footer and on the page. */
  licence: string;
}

const LICENCE =
  'Free to use, copy, adapt and put your own name on. No attribution required, though a link back is appreciated. Published by TaleCrafters, talecrafters.studio.';

export const tools: Tool[] = [
  {
    slug: 'synthetic-media-production-brief-template',
    intro: [
      'A generative production brief is a conventional brief plus six things. Miss them and the studio produces something reasonable that is wrong in a way nobody can articulate until shot thirty.',
      'Fill this in before you approach anybody. It is also the fastest way to find out whether the studio you are talking to knows what it is doing: if they do not ask about sections three and four unprompted, they have not priced the hard part.',
    ],
    howToUse: [
      'Fill sections 1 and 2 yourself. They are the commercial brief and you already know them.',
      'Sections 3 to 6 are the generative-specific parts. Answer them even where the answer is "none", because "none" is a cheaper brief and the studio needs to know.',
      'Send the whole thing. A studio that quotes from this will give you a date rather than a range.',
    ],
    sections: [
      {
        title: '1. The commercial brief',
        blocks: [
          {
            t: 'fields',
            fields: [
              { label: 'What is this for', hint: 'The campaign, the launch, the moment', lines: 2 },
              { label: 'Objective, as a number if one exists', hint: 'Not "awareness"', lines: 2 },
              { label: 'Audience, in one sentence a stranger could act on', lines: 2 },
              { label: 'Deadline', hint: 'Is this a launch date or a preference?', lines: 1 },
              { label: 'Budget range, or the number above which this stops being worth doing', lines: 1 },
            ],
          },
        ],
      },
      {
        title: '2. Deliverables',
        blocks: [
          {
            t: 'table',
            head: ['Asset', 'Placement', 'Ratio', 'Duration', 'Quantity'],
            rows: [
              ['', '', '', '', ''],
              ['', '', '', '', ''],
              ['', '', '', '', ''],
              ['', '', '', '', ''],
              ['', '', '', '', ''],
            ],
          },
          {
            t: 'note',
            text: 'Cutdowns are cheaper when they are planned as part of the shoot than when they are cropped afterwards. List them here even if they feel like a detail.',
          },
        ],
      },
      {
        title: '3. What must not change',
        kicker: 'The most valuable section in this document',
        blocks: [
          {
            t: 'para',
            text: 'Everything named here becomes a lock the studio builds before generating anything, and a test every frame is measured against. Anything not named here, the studio has to guess at, and it will guess conservatively, which costs you money.',
          },
          {
            t: 'fields',
            fields: [
              { label: 'Products that must be exactly correct', hint: 'Silhouette, label, proportion, colour', lines: 2 },
              { label: 'People who must be recognisable', hint: 'Named, and whether they are real', lines: 2 },
              { label: 'Brand elements that are fixed', hint: 'Colour values, logo lockup, typeface', lines: 2 },
              { label: 'Exact wording that must appear', lines: 2 },
            ],
          },
          {
            t: 'check',
            title: 'Reference material you can supply',
            items: [
              'Packaging dieline or label artwork at print resolution',
              'Photographs of the actual product, any quality, from three angles',
              'Existing brand photography that got approved',
              'Existing work that was rejected internally, and why',
              'Brand guidelines, fonts, colour values',
            ],
          },
          {
            t: 'note',
            text: 'The rejected work is the most useful item on that list. It tells a studio where your organisation’s real threshold is, which no moodboard does.',
          },
        ],
      },
      {
        title: '4. The cost drivers',
        kicker: 'Answer honestly. These are what move the quote.',
        blocks: [
          {
            t: 'check',
            title: 'Tick everything that applies',
            items: [
              'A shot requires readable printed text in frame (packaging, signage, a screen, a certification mark)',
              'One face or product has to recur across more than nine assets',
              'The work spans more than one lighting environment',
              'A real person’s likeness or voice is involved',
              'A claim in the asset requires substantiation (health, finance, environmental, comparative)',
              'The assets will run in the EU',
              'We want the master plates and trained identities handed over at the end',
            ],
          },
          {
            t: 'fields',
            fields: [
              { label: 'If readable text is required, which shots and what does it say', lines: 2 },
              { label: 'If a face recurs, across how many assets and over what period', lines: 2 },
            ],
          },
        ],
      },
      {
        title: '5. Compliance and disclosure',
        blocks: [
          {
            t: 'fields',
            fields: [
              { label: 'Territories the work will run in', lines: 1 },
              { label: 'Platforms and their AI-content policies', lines: 2 },
              { label: 'Claims that need legal sign-off, and who signs them', lines: 2 },
              { label: 'Disclosure position agreed', hint: 'On-asset label, metadata, both', lines: 2 },
            ],
          },
          {
            t: 'note',
            text: 'Decide this here, not at delivery. A disclosure discovered late means re-exporting every asset, and sometimes recomposing the frame to make room for a label.',
          },
        ],
      },
      {
        title: '6. Approval',
        blocks: [
          {
            t: 'fields',
            fields: [
              { label: 'Who signs off the brief', hint: 'A person, not a department', lines: 1 },
              { label: 'Who signs off the final output', hint: 'A person, with authority to say no', lines: 1 },
              { label: 'Any other stakeholder who can stop this, and at what stage', lines: 2 },
            ],
          },
          {
            t: 'note',
            text: 'A generative pipeline can produce a hundred assets faster than a committee can review three. Two named moments with one named person is the structure that works.',
          },
        ],
      },
      {
        title: '7. What you should get back',
        kicker: 'Check the proposal against this before signing',
        blocks: [
          {
            t: 'check',
            items: [
              'A date, not a range',
              'The named pipeline the work runs through',
              'The control gates, and what each one tests',
              'The expected acceptance rate on the hardest shot in the brief',
              'A credit ceiling per asset, and what happens when a batch reaches it',
              'The disclosure position, per placement',
              'A list of what you keep at the end, including plates and trained identities',
            ],
          },
        ],
      },
    ],
    licence: LICENCE,
  },
  {
    slug: 'generative-film-shot-consistency-checklist',
    intro: [
      'Nine ways a generative sequence gives itself away, arranged by the stage at which each one has to be caught. Applied before the render, all of them are free. Applied after, most of them are a regeneration.',
      'Nothing on it is model-specific, and none of it stops being true when the models improve. Run it as written or cut it down to the gates your shot types actually need.',
    ],
    howToUse: [
      'Run section 1 before generating anything. It is a set of decisions, and it takes twenty minutes.',
      'Run section 2 on every frame or clip as it arrives. Pass or fail, not a discussion.',
      'Run section 3 on the assembled set. It catches the failure no per-frame test can.',
    ],
    sections: [
      {
        title: '1. Before you generate',
        kicker: 'Decisions, written down. Every one of these is free now and expensive later.',
        blocks: [
          {
            t: 'check',
            items: [
              'Key light direction fixed and written as a clock position, not as "soft natural light"',
              'Colour temperature stated in kelvin',
              'One surface and one background material named',
              'Lens language chosen: focal length range, and shallow or deep depth of field, held across the set',
              'A prop rule written: what is allowed in frame, and what is never',
              'Shot-size pattern decided before the render, not discovered in the edit',
              'Master plate built and frozen for every product that must not change',
              'Trained identity built for any face appearing in more than nine assets',
              'Credit ceiling per asset agreed, and encoded so the run halts rather than warns',
            ],
          },
        ],
      },
      {
        title: '2. Per frame or clip',
        kicker: 'Pass or fail. A failure returns to the source file, never to a retoucher.',
        blocks: [
          {
            t: 'table',
            head: ['Gate', 'The test', 'Fail means'],
            rows: [
              ['Type', 'Every printed word read at 100% against the artwork', 'Regenerate. Never retouch a label.'],
              ['Silhouette', 'Overlay on the master plate at 40% opacity, inspect the outline', 'Regenerate from the plate with tighter conditioning'],
              ['Identity', 'Compare against the identity sheet: jaw, eye spacing, apparent age', 'Dead shot. Regenerate.'],
              ['Light', 'One key direction and one temperature, matched to the specification', 'Regenerate the outlier, not the set'],
              ['Claims', 'No invented certification, award, ingredient or percentage', 'Kill the frame. No appeal.'],
              ['Extremities', 'Count fingers. Check contact points and occlusion', 'Regenerate, or cut earlier'],
              ['Physics', 'Gravity, contact, cloth settle, hair settle', 'Cut before the drift, or regenerate'],
              ['Text in frame', 'Any readable word the model rendered', 'Recompose out of frame, or composite in post'],
              ['Duration', 'Ends before extremity drift, not when the model stops', 'Trim to the stable opening segment'],
            ],
          },
        ],
      },
      {
        title: '3. On the assembled set',
        kicker: 'The failure no per-frame test catches',
        blocks: [
          {
            t: 'check',
            items: [
              'Contact sheet at thumbnail scale: anything that jumps out gets regenerated even if it passed every gate',
              'First frame and last frame of every clip, side by side at full size, checked for drift',
              'Every clip scrubbed backwards at speed, which reveals drift the forward motion hides',
              'Grade applied to the sequence from one reference frame, after picture lock, not per clip',
              'Room tone under everything, foley on the two or three actions the eye lands on',
              'No cross-dissolve between two generated clips anywhere in the edit',
              'At least one deliberately quiet beat in the sequence',
              'Disclosure applied on the asset, and provenance metadata on export',
            ],
          },
          {
            t: 'note',
            text: 'If you only ever apply three things from this document: fix the key light direction, hold the face, and cut before the motion tell. Those three account for most of the perceived quality gap.',
          },
        ],
      },
    ],
    licence: LICENCE,
  },
  {
    slug: 'ai-advertising-disclosure-checklist',
    intro: [
      'A one-page decision path for whether a generative asset has to be labelled, covering the UK position, the EU transparency obligations that took effect on 2 August 2026, and the platform policies that are usually stricter than either.',
      'A working summary written by a production studio, not legal advice. The regulation is moving. Check the primary sources and take advice before relying on this commercially.',
    ],
    howToUse: [
      'Run this at brief stage, once per campaign, not per asset and not at delivery.',
      'Answer section 1 to classify the asset. Section 2 gives you the obligation. Section 3 is the implementation.',
      'Keep the completed sheet. The obligation is provable or it is not satisfied.',
    ],
    sections: [
      {
        title: '1. Classify the asset',
        blocks: [
          {
            t: 'check',
            title: 'Tick every statement that is true',
            items: [
              'A person appears who does not exist',
              'A real person’s likeness or voice has been generated or manipulated',
              'The format implies a real customer, user or independent creator',
              'The product is shown doing something, or looking a way, that differs from reality',
              'The asset carries a claim requiring substantiation',
              'The asset will be served to audiences in the EU',
              'The asset will run on a platform with an AI-content policy',
            ],
          },
          {
            t: 'note',
            text: 'Any tick in the first four rows means you are in the deepfake or synthetic-persona category and disclosure is not a judgement call. The last two determine which rulebook is the strictest one applying to you.',
          },
        ],
      },
      {
        title: '2. The obligation, by jurisdiction',
        blocks: [
          {
            t: 'table',
            head: ['Where', 'The rule as it stands', 'Practical effect'],
            rows: [
              [
                'United Kingdom',
                'No AI-specific rule in the Advertising Codes. CAP applies the existing prohibition on misleading by inaccuracy, ambiguity, exaggeration or omission.',
                'Disclose where an audience would otherwise be misled. A disclosure that contradicts the ad’s message means the message is the problem.',
              ],
              [
                'European Union',
                'AI Act Article 50, enforceable from 2 August 2026. Deployers producing deepfakes must disclose that content is artificially generated, clearly and at first exposure.',
                'Applies wherever the output reaches EU audiences, regardless of where you are established. Penalties to €15m or 3% of worldwide turnover, whichever is higher; for SMEs the calculation inverts to the lower of the two.',
              ],
              [
                'Platforms',
                'Self-declaration plus automated detection. The platform may apply a label you did not choose.',
                'Contractual rather than legal, enforced by reach suppression and demonetisation. Usually the most immediate constraint.',
              ],
            ],
          },
          {
            t: 'note',
            text: 'Where more than one applies, the operative standard is the strictest, decided per placement. For most paid social running in Europe, that is Article 50.',
          },
        ],
      },
      {
        title: '3. Implementation',
        blocks: [
          {
            t: 'check',
            items: [
              'Disclosure decision written into the brief, not the delivery note',
              'On-asset label, in the same visual field as the claim it qualifies',
              'Wording kept plain: "AI-generated" or "Created with AI". No hedging.',
              'Provenance metadata configured on export as well as the visible label',
              'Composition leaves room for the label rather than the label being added over a busy frame',
              'Model licence confirmed cleared for commercial use, for the specific model and version',
              'Signed release in the folder before rendering for any real likeness or voice',
              'No invented certification, award, ingredient or percentage anywhere in the asset',
              'Record kept: which model, which version, who signed off, what was disclosed, on which placement',
            ],
          },
        ],
      },
      {
        title: '4. The two carve-outs, and why they usually do not help',
        blocks: [
          {
            t: 'para',
            text: 'Article 50 reduces the obligation for evidently artistic, creative, satirical or fictional work, where disclosure need only reveal the existence of generated content without hampering enjoyment of the work. A stylised, obviously-constructed brand film may reach this. A creator-format testimonial does not, because the persuasive effect depends on it not reading as fiction.',
          },
          {
            t: 'para',
            text: 'There is a second carve-out for AI-generated text on matters of public interest that has been through human editorial review with a named person holding editorial responsibility. It is a publishing provision. It does not cover video and it does not cover advertising copy.',
          },
        ],
      },
    ],
    licence: LICENCE,
  },
  {
    slug: 'synthetic-ugc-consent-template',
    intro: [
      'A likeness and voice release drafted for generative production rather than for photography. The clause that matters is the one granting derivative training, which almost no pre-2024 release contains.',
      'A starting point to take to a lawyer, not a substitute for one. Jurisdictions differ, performer union agreements differ, and the law on synthetic voice is the least settled part of this.',
    ],
    howToUse: [
      'Complete the schedule first. It is the part both sides actually negotiate.',
      'Have it reviewed. This is a template, not advice, and the scope clauses are where the money and the risk both sit.',
      'Signed and in the folder before the first render, not before the first delivery.',
    ],
    sections: [
      {
        title: 'Schedule: the terms both sides negotiate',
        blocks: [
          {
            t: 'fields',
            fields: [
              { label: 'Contributor name', lines: 1 },
              { label: 'Producer / commissioning party', lines: 1 },
              { label: 'Date of agreement', lines: 1 },
              { label: 'Material supplied', hint: 'Stills, footage, voice recordings. Quantity and date.', lines: 2 },
              { label: 'Permitted use', hint: 'What the generated likeness may be used to say and sell', lines: 3 },
              { label: 'Excluded categories', hint: 'Political, adult, health, financial, legal, competitor endorsement', lines: 2 },
              { label: 'Territory', lines: 1 },
              { label: 'Term', hint: 'A stated end date. Perpetuity is a negotiation risk for both sides.', lines: 1 },
              { label: 'Fee and any usage uplift', lines: 2 },
              { label: 'Disposal at end of term', hint: 'Trained model deleted, escrowed or retained. Say which.', lines: 2 },
            ],
          },
        ],
      },
      {
        title: 'Clause 1: Grant of likeness',
        blocks: [
          {
            t: 'para',
            text: 'The Contributor grants the Producer the right to use the Contributor’s name, image, likeness, voice and performance as captured in the Material, for the Permitted Use, in the Territory, for the Term.',
          },
        ],
      },
      {
        title: 'Clause 2: Derivative training',
        kicker: 'The clause that pre-2024 releases do not contain',
        blocks: [
          {
            t: 'para',
            text: 'The Contributor expressly grants the Producer the right to use the Material to train, fine-tune or otherwise condition a machine-learning model or models for the purpose of generating new likenesses, performances or vocal output resembling the Contributor ("the Trained Identity"), and to generate, reproduce and publish output from that Trained Identity within the Permitted Use.',
          },
          {
            t: 'para',
            text: 'The Producer shall not use the Trained Identity outside the Permitted Use, shall not licence or transfer the Trained Identity to any third party without the Contributor’s prior written consent, and shall not use the Trained Identity in any Excluded Category.',
          },
          {
            t: 'note',
            text: 'A grant to "use the images" does not imply this. If the words "train", "fine-tune" or an equivalent do not appear, the permission has not been given.',
          },
        ],
      },
      {
        title: 'Clause 3: Voice',
        blocks: [
          {
            t: 'para',
            text: 'Where the Material includes vocal recordings, the grant in Clause 2 extends to the synthesis of the Contributor’s voice. The Producer shall not use the synthesised voice to speak words that the Contributor has notified the Producer in writing that they object to, and shall not use it to imply an endorsement outside the Permitted Use.',
          },
        ],
      },
      {
        title: 'Clause 4: Disclosure',
        blocks: [
          {
            t: 'para',
            text: 'The Producer shall disclose that output generated from the Trained Identity is artificially generated, in accordance with applicable law and platform policy, applying whichever standard is the stricter. Disclosure shall appear on the asset and not solely in metadata.',
          },
        ],
      },
      {
        title: 'Clause 5: Withdrawal',
        blocks: [
          {
            t: 'para',
            text: 'The Contributor may withdraw consent on written notice. On withdrawal the Producer shall cease generating new output from the Trained Identity within a stated number of days, and shall dispose of the Trained Identity in accordance with the Schedule. The parties acknowledge that withdrawal cannot recall material already published or distributed, and the Producer shall use reasonable endeavours to remove such material from channels under its control.',
          },
          {
            t: 'note',
            text: 'Be honest in this clause. A withdrawal right that promises more than is technically possible is worse for both sides than one that states the limit plainly.',
          },
        ],
      },
      {
        title: 'Clause 6: End of term',
        blocks: [
          {
            t: 'para',
            text: 'On expiry of the Term the Producer shall cease generating new output from the Trained Identity and shall dispose of it as set out in the Schedule. Output lawfully published during the Term may remain published unless the Schedule provides otherwise.',
          },
        ],
      },
      {
        title: 'Signature',
        blocks: [
          {
            t: 'fields',
            fields: [
              { label: 'Contributor signature and date', lines: 2 },
              { label: 'Producer signature and date', lines: 2 },
              { label: 'Witness, where required', lines: 2 },
            ],
          },
        ],
      },
    ],
    licence: LICENCE,
  },
  {
    slug: 'creative-automation-workflow-canvas',
    intro: [
      'A one-page canvas for mapping a creative process before automating any of it. Every step gets an owner and a verdict: a person decides it, a model drafts it, or a script handles it alone at four in the morning.',
      'The value is not the canvas. It is that filling it in forces you to notice that roughly half the week is coordination, and that the coordination half is the automatable half.',
    ],
    howToUse: [
      'Do this with the people who actually do the work, not with their managers. Half a day, once.',
      'Map the process as it is, including the parts that embarrass you. A canvas of the intended process automates nothing.',
      'Then build the top two candidates. Two, shipped and adopted, beats a roadmap of eight.',
    ],
    sections: [
      {
        title: '1. The process, step by step',
        kicker: 'One row per step. Add rows.',
        blocks: [
          {
            t: 'table',
            head: ['#', 'Step', 'Who does it now', 'Time per week', 'Decides / Drafts / Handles', 'Blocked by'],
            rows: [
              ['01', '', '', '', '', ''],
              ['02', '', '', '', '', ''],
              ['03', '', '', '', '', ''],
              ['04', '', '', '', '', ''],
              ['05', '', '', '', '', ''],
              ['06', '', '', '', '', ''],
              ['07', '', '', '', '', ''],
              ['08', '', '', '', '', ''],
            ],
          },
          {
            t: 'note',
            text: 'Decides means judgement a person owns. Drafts means a model produces a first version a person edits. Handles means a script does it alone and nobody looks unless it fails.',
          },
        ],
      },
      {
        title: '2. The variance test',
        kicker: 'Which mechanism each step needs',
        blocks: [
          {
            t: 'table',
            head: ['How many shapes does the input arrive in?', 'Build', 'Not'],
            rows: [
              ['One, always', 'A script', 'An agent, which is a costlier script that occasionally invents a step'],
              ['A handful you can list', 'Branches', 'An agent. You already know the paths, so encode them.'],
              ['Too many to enumerate, and new ones keep appearing', 'An agentic workflow', 'A rules engine, which will be permanently three cases behind'],
              ['Unbounded, and a wrong answer is expensive', 'A person, model-assisted', 'A workflow'],
            ],
          },
          {
            t: 'note',
            text: 'If you can draw the flowchart, build the flowchart. An agent is what you use when the flowchart would need a new branch every week.',
          },
        ],
      },
      {
        title: '3. The four no-go areas',
        blocks: [
          {
            t: 'check',
            title: 'Confirm none of your automation candidates fall here',
            items: [
              'Anything that moves money: billing, refunds, budget allocation, bid changes above a threshold',
              'Anything that grants access: permissions, credentials, sharing, publication rights',
              'Anything ending in a regulatory filing',
              'Final approval on anything the public will see',
            ],
          },
        ],
      },
      {
        title: '4. The scaffolding, without which none of it survives',
        blocks: [
          {
            t: 'check',
            items: [
              'A naming convention, so August’s output is findable in November',
              'Automatic versioning, so nobody spends time finding the final version',
              'Connectors into software the team already runs, so adoption is not a change-management project',
              'Skills as loadable directories rather than one instruction nobody can edit safely',
              'A run log with cost attached',
              'A stated stopping condition and a credit ceiling, so a confused run halts rather than spends',
              'A named human gate at each point where a wrong decision is expensive',
            ],
          },
        ],
      },
      {
        title: '5. Decide what to build',
        blocks: [
          {
            t: 'fields',
            fields: [
              { label: 'Candidate 1: which step, and what it costs today', lines: 2 },
              { label: 'What has to be true for a script or model to own it', lines: 2 },
              { label: 'Candidate 2: which step, and what it costs today', lines: 2 },
              { label: 'What has to be true for a script or model to own it', lines: 2 },
              { label: 'How we will know it worked', hint: 'A number, logged automatically', lines: 2 },
            ],
          },
        ],
      },
    ],
    licence: LICENCE,
  },
  {
    slug: 'ai-video-cost-calculator',
    intro: [
      'The arithmetic we use to quote, published in full including the acceptance-rate assumptions it starts from. Work through it and you will have a cost per accepted asset, which is the only generative production number that survives contact with a finance team.',
      'Cost per generation is the number studios quote. Cost per accepted asset is the number that appears on the invoice.',
    ],
    howToUse: [
      'Do this once per shot type, not once per campaign. Averaging across easy and hard work hides exactly the variance the calculation exists to expose.',
      'Use the acceptance-rate table for a first estimate, then replace it with your own logged numbers as soon as you have them.',
      'Compare the result against what a photographer or crew would have charged. Sometimes the honest answer is to book them.',
    ],
    sections: [
      {
        title: '1. The formula',
        blocks: [
          {
            t: 'note',
            text: 'Cost per accepted asset = (model spend + operator hours + review hours + licensing) ÷ assets that shipped. Rejected renders sit in the numerator. That is the whole point.',
          },
        ],
      },
      {
        title: '2. Acceptance rates to plan against',
        kicker:
          'Starting assumptions, not benchmarks. Replace every row with your own as soon as you have logged two batches.',
        blocks: [
          {
            t: 'table',
            head: ['Shot type', 'Typical acceptance', 'Renders per accepted asset'],
            rows: [
              ['Packaging with legible printed type', '15 to 30%', '3.3 to 6.7'],
              ['Product, no readable text, plate-locked', '55 to 75%', '1.3 to 1.8'],
              ['Recurring face, reference conditioning, multi-week', '20 to 30%', '3.3 to 5.0'],
              ['Recurring face, trained identity', '55 to 70%', '1.4 to 1.8'],
              ['Environment or abstract, no product, no face', '70 to 90%', '1.1 to 1.4'],
              ['Motion clip with hands in frame', '25 to 40%', '2.5 to 4.0'],
              ['Motion clip, locked camera, static subject', '60 to 80%', '1.3 to 1.7'],
            ],
          },
        ],
      },
      {
        title: '3. Work it out',
        kicker: 'One column per shot type',
        blocks: [
          {
            t: 'table',
            head: ['Line', 'Shot type A', 'Shot type B', 'Shot type C'],
            rows: [
              ['Assets required', '', '', ''],
              ['Acceptance rate (from section 2)', '', '', ''],
              ['Renders needed = assets ÷ acceptance', '', '', ''],
              ['Cost per render', '', '', ''],
              ['Model spend = renders × cost per render', '', '', ''],
              ['Operator hours × rate', '', '', ''],
              ['Review hours × rate', '', '', ''],
              ['Setup: plate build or trained identity', '', '', ''],
              ['Licensing and clearances', '', '', ''],
              ['TOTAL', '', '', ''],
              ['COST PER ACCEPTED ASSET = total ÷ assets', '', '', ''],
            ],
          },
        ],
      },
      {
        title: '4. The sanity checks',
        blocks: [
          {
            t: 'check',
            items: [
              'Operator hours included even where the operator is salaried. Salaried time is capacity.',
              'Any asset that shipped only after significant retouching logged as a failure plus a rescue cost, not as an acceptance',
              'Setup amortised across the assets it actually serves, not across the whole campaign',
              'A credit ceiling per asset set, encoded, and set to halt rather than warn',
              'Result compared against a conventional shoot for the same brief',
            ],
          },
          {
            t: 'note',
            text: 'If a trained identity moves your presenter acceptance from 25% to 65%, it pays for a day of setup within roughly one batch. That comparison is the single most useful thing this calculation produces.',
          },
        ],
      },
      {
        title: '5. When the answer is "do not do this generatively"',
        blocks: [
          {
            t: 'para',
            text: 'When cost per accepted asset approaches what a photographer or a small crew would have charged for the same brief, book them. That happens most often on single hero pieces, on briefs requiring a real face in a real place on a real day, and on work where legible printed type is unavoidable and central to the frame.',
          },
        ],
      },
    ],
    licence: LICENCE,
  },
  {
    slug: 'production-readiness-scorecard',
    intro: [
      'Twenty-five questions across five areas, scored zero to five, that tell you whether a team or a studio is actually ready to run generative production at volume, or is running demos and hoping.',
      'Use it on a supplier you are evaluating, or on yourself before you commit to a campaign you cannot deliver.',
    ],
    howToUse: [
      'Score each row 0 to 5. Zero means it does not exist. Five means it is written down, in use, and somebody owns it.',
      'A row nobody can answer scores zero. "We sort of do that" scores one.',
      'Total out of 125 and read the band table at the end.',
    ],
    sections: [
      {
        title: 'A. Locks and references',
        blocks: [
          {
            t: 'scale',
            items: [
              { label: 'Master plates exist', detail: 'A frozen, versioned reference frame per product that must not change' },
              { label: 'Plates verified against a source of truth', detail: 'Print artwork or the physical object, not the client’s website' },
              { label: 'Trained identities rather than re-uploaded references', detail: 'For any face appearing across more than a handful of assets' },
              { label: 'Set specification written before generation', detail: 'Key direction, temperature, surface, lens language, prop rule' },
              { label: 'Version tags and dates on every reference artefact', detail: 'So a packaging change cuts a new plate rather than editing the old one' },
            ],
          },
        ],
      },
      {
        title: 'B. Control gates',
        blocks: [
          {
            t: 'scale',
            items: [
              { label: 'Type gate', detail: 'Every printed word read at full resolution against the artwork' },
              { label: 'Silhouette gate', detail: 'Overlay on the plate at 40% opacity, with a stated pass criterion' },
              { label: 'Light gate', detail: 'One key direction and temperature held across the set' },
              { label: 'Claims gate', detail: 'No invented certification, award, ingredient or percentage survives' },
              { label: 'Failures return to source', detail: 'A failed frame is regenerated, never retouched into passing' },
            ],
          },
        ],
      },
      {
        title: 'C. Measurement',
        blocks: [
          {
            t: 'scale',
            items: [
              { label: 'Cost per accepted asset is measured', detail: 'Not cost per generation, and not per campaign average' },
              { label: 'The ledger is written automatically', detail: 'By the pipeline, not by a person at eleven at night' },
              { label: 'Acceptance rates known per shot type', detail: 'A fraction, not a reassurance' },
              { label: 'Credit ceiling per asset encoded', detail: 'And it halts the run rather than logging a warning' },
              { label: 'Operator and review time counted', detail: 'Including salaried time, which is capacity' },
            ],
          },
        ],
      },
      {
        title: 'D. Compliance',
        blocks: [
          {
            t: 'scale',
            items: [
              { label: 'Model licences cleared before rendering', detail: 'For the specific model and version, not in general' },
              { label: 'Consent files complete before the first render', detail: 'Including derivative training, scope, territory and term' },
              { label: 'Disclosure decided at brief stage', detail: 'Set to the stricter of platform policy, UK position and EU Article 50' },
              { label: 'On-asset labelling plus provenance metadata', detail: 'Not metadata alone' },
              { label: 'Record kept per asset', detail: 'Model, version, sign-off, disclosure, placement' },
            ],
          },
        ],
      },
      {
        title: 'E. Handover and continuity',
        blocks: [
          {
            t: 'scale',
            items: [
              { label: 'Client owns the plates and trained identities', detail: 'So the second campaign starts from a lock' },
              { label: 'Naming convention in force', detail: 'August’s output is findable in November' },
              { label: 'The pipeline is documented, not remembered', detail: 'It survives the operator leaving' },
              { label: 'Systems run in the client’s accounts', detail: 'A system you cannot operate without the supplier is a dependency' },
              { label: 'A named person can stop a run', detail: 'With the authority to reject, at a defined point' },
            ],
          },
        ],
      },
    ],
    bands: [
      { range: '105 to 125', verdict: 'Production-ready', action: 'Commit to volume. Spot-check the measurement rows quarterly.' },
      { range: '80 to 104', verdict: 'Works, with known gaps', action: 'Run the campaign. Fix the lowest-scoring area before the next one.' },
      { range: '50 to 79', verdict: 'Demo-grade', action: 'One campaign is survivable. Volume is not. Build locks and gates first.' },
      { range: 'Below 50', verdict: 'Not ready', action: 'Do not commit to a campaign that depends on consistency. Start with section A.' },
    ],
    licence: LICENCE,
  },
];

export const getTool = (slug: string) => tools.find((t) => t.slug === slug);
