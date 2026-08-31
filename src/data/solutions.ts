// Search-intent pages.
//
// The Arsenal keeps the names we actually use. These pages exist for the words
// buyers type, and they are full documents rather than doorways: each one has
// its own argument, its own answers, and links into the pipelines, cases and
// definitions that support it. Four pages, not thirty.

export interface SolutionFaq {
  q: string;
  a: string;
}

export interface Solution {
  slug: string;
  /** Feral half of the headline. */
  title: string;
  /** Coloured half. */
  accentWord: string;
  /** The plain name of the thing, used in the eyebrow, schema and breadcrumb. */
  plainName: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  color: string;
  lede: string;
  meta: { label: string; value: string }[];
  /** The body argument. Two to four paragraphs. */
  body: string[];
  deliverables: { name: string; detail: string }[];
  /** Pipelines that carry this work, by slug. */
  pipelines: string[];
  /** Case studies that prove it, by slug. */
  cases: string[];
  /** Glossary terms worth defining alongside it, by slug. */
  terms: string[];
  faqs: SolutionFaq[];
  cta: { title: string; body: string };
}

export const solutions: Solution[] = [
  {
    slug: 'generative-video-production',
    title: 'GENERATIVE VIDEO',
    accentWord: 'PRODUCTION',
    plainName: 'Generative video production',
    metaTitle: 'Generative Video Production — Films, Ads and Social, Built on Named Pipelines',
    metaDescription:
      'Generative video production for brands: commercials, brand films, product cinematics and short-form, built on hybrid generative and post-production workflows with named control gates. Two days for a still set, four days from casting brief to nine finished variants.',
    keywords: [
      'generative video production',
      'generative video production company',
      'AI video production',
      'AI commercial production',
      'generative advertising',
      'AI brand film',
      'generative film production agency',
    ],
    color: 'var(--brand-magenta)',
    lede:
      'Commercials, brand films, product cinematics and short-form, produced without a crew, a location or a reshoot. Generation is one stage in the middle. Everything either side of it is what makes the work usable.',
    meta: [
      { label: 'Formats', value: 'Commercials, brand films, product cinematics, short-form' },
      { label: 'Turnaround', value: '2 days to 3 weeks' },
      { label: 'Method', value: 'Hybrid generative and post-production' },
      { label: 'You keep', value: 'Plates, identities, set specifications' },
    ],
    body: [
      'Most generative video fails in the same place. A model produces a beautiful eight-second clip, the brand looks at it, and nobody can say what happens when they need forty more that match. The frame was never the hard part. The hard part is a set of frames that hold the same product, the same face and the same light across a campaign, on a deadline, inside a budget somebody agreed in advance.',
      'So we lock things before we generate. A product becomes a master plate: one clean frame, correct shape, correct label, referenced by every later angle. A presenter becomes a trained identity built from a sheet of stills, reused across sessions without re-uploading a reference. A set becomes a written specification with one key direction and one stated colour temperature. Only then does anything move.',
      'After generation, four tests. Read every printed word at full resolution. Overlay each render on its plate at forty per cent opacity and check the outline. Hold one light direction across the whole set. Let no invented certification, award or ingredient claim survive. A frame that fails goes back to its source file, never into a retouching pass, because patching produces a shot that passes and a set that still drifts.',
      'What a client actually buys is the second half of that paragraph. The generation is cheap. The discipline around it is the job.',
    ],
    deliverables: [
      { name: 'Brand films', detail: 'Hero pieces, 30 to 90 seconds, with a named pipeline behind each one' },
      { name: 'Commercials and product cinematics', detail: 'Plate-locked, label-checked, cut for the placements you actually run' },
      { name: 'Short-form', detail: '9:16 and 4:5 cutdowns, built as part of the shoot rather than cropped after it' },
      { name: 'Creator-style pieces', detail: 'Presenter to camera, trained identity, room lighting' },
      { name: 'Product stills', detail: 'Thirty frames for selection, then ninety frames and six clips' },
      { name: 'The reusable files', detail: 'Master plates, trained identities and set specifications, handed over' },
    ],
    pipelines: ['phantom-set', 'identity-lock'],
    cases: ['ib-nl', 'bike-barn', 'amino-alliance'],
    terms: ['image-to-video', 'temporal-coherence', 'master-plate', 'character-consistency', 'cost-per-accepted-asset'],
    faqs: [
      {
        q: 'How much does generative video production cost?',
        a: 'We quote per engagement rather than per second, because a hero film and a run of forty variants from one trained identity are different jobs. The unit that matters is cost per accepted asset: total spend divided by what actually ships. A pipeline that renders sixty frames to ship four has a real unit cost fifteen times the sticker price, and we agree a credit ceiling per asset before a batch starts.',
      },
      {
        q: 'How long does a generative video take to produce?',
        a: 'A product still set is two working days from an approved plate. A creator campaign with a trained presenter is four days from casting brief to nine finished variants. A brand film depends on how many altitude bands, registers or characters it needs. We give a date with the quote.',
      },
      {
        q: 'Is generative video actually cheaper than a shoot?',
        a: 'For the right brief, substantially: no crew, no location, no reshoot. For a brief that needs a real face, a real place and a real product on the same day, often not. We say which one you have before quoting.',
      },
      {
        q: 'How do you stop the product changing between shots?',
        a: 'A master plate, locked before the set exists, that every later frame is generated from. Then a silhouette overlay on each output at forty per cent opacity. Any shift in outline kills the frame and it returns to the plate.',
      },
      {
        q: 'Do you disclose that the work is generative?',
        a: 'Always, to the stricter of platform policy and client legal, and on the asset rather than only in metadata. A metadata flag protects you with the platform; an on-asset label protects you with the audience.',
      },
    ],
    cta: {
      title: 'Bring the launch and the deadline.',
      body: 'You will get a shape, a stack and a number back, plus an honest answer about whether this should be generative at all.',
    },
  },
  {
    slug: 'synthetic-media-studio',
    title: 'A SYNTHETIC MEDIA',
    accentWord: 'STUDIO',
    plainName: 'Synthetic media studio',
    metaTitle: 'Synthetic Media Studio — What One Is and How to Pick One',
    metaDescription:
      'TaleCrafters is a synthetic media studio: films, campaigns, product photography, synthetic UGC and the systems that produce them. What a synthetic media studio does, what to ask one, and where the work goes wrong.',
    keywords: [
      'synthetic media studio',
      'synthetic media agency',
      'synthetic media production',
      'AI creative studio',
      'synthetic media company Europe',
      'what is a synthetic media studio',
    ],
    color: 'var(--brand-cyan)',
    lede:
      'Synthetic media is any image, video, audio or text produced or materially altered by a generative model. A studio that works in it well is not one that generates the most. It is one that knows which half of a piece should be synthetic and which absolutely should not.',
    meta: [
      { label: 'Category', value: 'Synthetic media production' },
      { label: 'Registered', value: 'London, United Kingdom' },
      { label: 'Working', value: 'UK, Europe, United States' },
      { label: 'Founded', value: '2024' },
    ],
    body: [
      'The term is broader and more useful than "AI content", because it covers the middle ground where most professional work actually sits: a real shoot with a generated environment, a real product with a generated set, a real voice with a generated read. That middle ground is where a studio earns its fee, and it is also where the disclosure question gets interesting.',
      'Almost anyone can produce a striking single frame now. What separates a studio from a subscription is everything the frame does not show you: whether the packaging type survives a full-resolution zoom, whether the presenter has the same jawline in advert nine as in advert one, whether the light comes from the same direction across the set, and whether a person with authority signed off before it went live.',
      'Ask any studio you are considering four things. What is locked before you generate anything? What is the test that a frame has to pass, and what happens when it fails? Who owns the reusable files afterwards? And what is your cost per accepted asset, not per generation? A studio that cannot answer those is selling you the cheapest part of the job.',
      'Our answers are on this site rather than in a deck. Three of our seven production pipelines are published in full, with their stages, their timings and the four gates each one fails on. Six delivered engagements carry the problem, the idea, what we made and the artefacts the client kept. Forty-seven terms are defined the way a producer needs them.',
    ],
    deliverables: [
      { name: 'Films and campaigns', detail: 'Commercials, brand films, social runs, product cinematics' },
      { name: 'Synthetic photography', detail: 'Product, food, packaging and lifestyle, plate-locked' },
      { name: 'Synthetic UGC', detail: 'Trained presenters for paid social, under a consent gate' },
      { name: 'Creative systems', detail: 'The machinery that produces and distributes the above' },
      { name: 'Digital experiences', detail: 'Sites, interactive pieces and prototypes' },
      { name: 'Original IP', detail: 'Our own films, games and stories' },
    ],
    pipelines: ['phantom-set', 'identity-lock', 'operator-stack'],
    cases: ['mariposa', 'big-blue-data-academy', 'cocoon'],
    terms: ['synthetic-media', 'ai-slop', 'disclosure', 'gate', 'drift', 'human-in-the-loop'],
    faqs: [
      {
        q: 'What is a synthetic media studio?',
        a: 'A production company whose output is made or materially altered by generative models, and whose value is in the process around that: what gets locked before generation, what gets tested afterwards, and who signs it off. The good ones sell production. The rest sell generations.',
      },
      {
        q: 'What is the difference between synthetic media and AI-generated content?',
        a: 'Synthetic media is the more precise term, because it includes hybrid work where only part of the asset is generated: a real photograph with a generated background, or a real recording with a cloned voice.',
      },
      {
        q: 'Is synthetic media legal to use in advertising?',
        a: 'Yes, with the usual conditions. Model licences have to clear for commercial use under your terms, any identifiable real person needs a signed release for likeness and voice, factual claims still fall under advertising codes, and platform disclosure policy applies. We check all four before rendering rather than after.',
      },
      {
        q: 'How do I know the work will not look like AI slop?',
        a: 'Slop is what you get when the tool is the whole process: technically clean, perfectly smooth, and containing no decision anyone could argue with. The fix is a register chosen before production, a person holding a veto, and a brief that states what the piece is allowed to be bad at.',
      },
      {
        q: 'Do you work outside the UK?',
        a: 'Yes. We are registered in London and work across the UK, Europe and the United States. Everything we build is remote-native by construction, which is a polite way of saying we have never lost a day to a delivery address.',
      },
    ],
    cta: {
      title: 'Ask us the four questions.',
      body: 'What gets locked, what gets tested, who owns the files and what it costs per accepted asset. You will get four straight answers.',
    },
  },
  {
    slug: 'creative-automation',
    title: 'CREATIVE',
    accentWord: 'AUTOMATION',
    plainName: 'Creative automation',
    metaTitle: 'Creative Automation — Agentic Workflows and Content Infrastructure',
    metaDescription:
      'We build the machinery that produces, repurposes and distributes creative work: content production systems, agentic workflows, marketing automations, repurposing engines, internal tools and prototypes. Handed over running inside your own accounts.',
    keywords: [
      'creative automation',
      'creative automation agency',
      'agentic workflows',
      'AI workflow consultancy',
      'content automation',
      'marketing automation build',
      'content production system',
      'MCP integration agency',
    ],
    color: 'var(--brand-violet-text)',
    lede:
      'Your team is not slow. Your process is. Creative automation is the machinery that produces, repurposes and distributes the work, and it keeps running after the campaign is over.',
    meta: [
      { label: 'Engagement', value: 'Map, build, hand over' },
      { label: 'Typical length', value: '2 to 3 weeks' },
      { label: 'Where it runs', value: 'Your accounts, not ours' },
      { label: 'You get', value: 'A process, the machinery, a cost ledger' },
    ],
    body: [
      'A prompt gets you one answer. An agentic workflow gets you a sequence: the model reads the brief, calls the tools it needs, checks its own output against a rule, and stops at the points where a person has to decide. The difference that matters commercially is not intelligence, it is scope. One is a reply. The other is a job that runs.',
      'The engineering is unglamorous and it is where the value sits. A directory of skills the model can load. Connectors into the software the team already runs. A naming convention so the outputs are findable next quarter. A ledger recording cost per accepted asset. Teams that skip that part get a demo that works once, in front of an audience, and never again.',
      'The engagement is three steps. Half a day mapping how the work runs today, with an owner written against every step: what a person decides, what a model drafts, what a script handles alone at four in the morning. One to two weeks building the skills, the code, the connectors and an interface a non-technical person can operate. Then a live walkthrough, and we leave.',
      'Four rules hold across everything we build. A person signs off the brief and the final cut, at any volume. Model licences clear for commercial use before rendering, never after. No keys, client data or unreleased assets go inside a prompt. A credit ceiling per asset is agreed before a batch starts, and the job halts and asks for a decision rather than quietly spending past it.',
    ],
    deliverables: [
      { name: 'Content production systems', detail: 'Brief in, brand-correct assets out, with naming and versioning attached' },
      { name: 'Agentic workflows', detail: 'Skills, tools and connectors wired into the software you already run' },
      { name: 'Repurposing engines', detail: 'One article into nine assets: cutdowns, carousels, infographic frames, a podcast read' },
      { name: 'Research and lead-gen workflows', detail: 'Find it, qualify it, put it in front of a person in a format they can act on' },
      { name: 'Internal tools and prototypes', detail: 'Lightweight applications that run, not mockups' },
      { name: 'The cost ledger', detail: 'Run log and cost per accepted asset, which is what makes this explainable to finance' },
    ],
    pipelines: ['operator-stack'],
    cases: ['big-blue-data-academy'],
    terms: ['agentic-workflow', 'mcp', 'cost-per-accepted-asset', 'human-in-the-loop', 'rag', 'token'],
    faqs: [
      {
        q: 'What is creative automation?',
        a: 'Building the systems that produce, repurpose and distribute creative work, rather than producing each piece by hand. In practice: content production systems, agentic workflows, marketing automations, repurposing engines, internal tools and the ledger that shows what each accepted asset cost.',
      },
      {
        q: 'What is the difference between an agentic workflow and normal automation?',
        a: 'Classic automation follows a fixed path someone drew in advance. An agentic workflow decides its own path within stated boundaries, which makes it useful for work that varies (briefs, research, drafting) and dangerous for work that must never vary, like billing.',
      },
      {
        q: 'Can creative production be fully automated?',
        a: 'The production can. The judgement cannot, and should not be. We automate drafting, variants, format matrices, renaming, render queueing, repurposing and reporting, and keep a person on the brief and the final approval at any volume.',
      },
      {
        q: 'Do we need engineers to run what you build?',
        a: 'No. The interface layer exists so a marketer can operate the pipeline, and it is built on React and Tailwind underneath so a prototype can graduate into a real product if you later want one.',
      },
      {
        q: 'Where does the system live afterwards?',
        a: 'Inside your own accounts. A system you cannot operate without us is a dependency, not an asset.',
      },
    ],
    cta: {
      title: 'Tell us where the week actually goes.',
      body: 'We will map it, build the half a machine can do, and leave you operating it with a ledger attached.',
    },
  },
  {
    slug: 'ai-video-production-london',
    title: 'AI VIDEO PRODUCTION',
    accentWord: 'IN LONDON',
    plainName: 'AI video production in London',
    metaTitle: 'AI Video Production, London — Generative Film and Campaign Studio',
    metaDescription:
      'A London-registered synthetic media studio producing AI video, generative brand films, commercials and social campaigns for UK, European and US brands. Named pipelines, control gates, and a date with the quote.',
    keywords: [
      'AI video production London',
      'AI video production agency London',
      'generative video agency London',
      'AI creative agency London',
      'synthetic media studio London',
      'AI film production UK',
    ],
    color: 'var(--brand-gold)',
    lede:
      'Registered in London, working across the UK, Europe and the United States. The production is remote-native by construction, which means the useful question is not where we sit but what we lock before we generate anything.',
    meta: [
      { label: 'Registered office', value: '71–75 Shelton Street, Covent Garden, London' },
      { label: 'Working', value: 'UK, Europe, United States' },
      { label: 'Languages', value: 'English, Greek' },
      { label: 'Delivered', value: 'Hospitality, energy, education, retail, consulting' },
    ],
    body: [
      'London has no shortage of production companies and a growing number of studios with AI in the deck. The difference worth checking is whether the studio can tell you what happens on the fortieth asset rather than the first, because that is where generative production either pays for itself or quietly stops working.',
      'Our engagements have run from a restaurant on Rhodes that had never been photographed, to a Dutch consultancy that needed to say "global" without a word of voiceover, to a Horizon Europe consortium whose subject could not be filmed at all. Different sectors, one method: lock the thing that must not change, write the set once, generate from the lock, then test every frame against it.',
      'Being London-registered matters for the parts clients care about commercially: UK contracting, UK invoicing, and a legal entity you can look up at Companies House. It matters much less for the work itself, which happens in the same pipelines whether the brief comes from Shoreditch, Athens or Austin.',
      'If you are in London and want to sit in a room, we can. If you would rather never have that meeting, that also works, and it is how most of the work below was made.',
    ],
    deliverables: [
      { name: 'Brand films', detail: 'Hero pieces for UK and European brands' },
      { name: 'Social campaigns', detail: 'Runs built in multiple registers so the fifth piece still gets watched' },
      { name: 'Product and food photography', detail: 'Plate-locked, label-checked stills' },
      { name: 'Paid social creative', detail: 'Trained presenters across many openings and asks' },
      { name: 'Websites and digital experiences', detail: 'Designed and shipped, not mocked up' },
      { name: 'White-label production', detail: 'For agencies and studios, under NDA, without credit' },
    ],
    pipelines: ['phantom-set', 'identity-lock', 'operator-stack'],
    cases: ['mariposa', 'ib-nl', 'cocoon', 'big-blue-data-academy'],
    terms: ['synthetic-media', 'disclosure', 'register', 'cost-per-accepted-asset'],
    faqs: [
      {
        q: 'Are you actually based in London?',
        a: 'TaleCrafters Ltd is registered at 71–75 Shelton Street, Covent Garden, London. The production is remote-native and the team works across the UK and Europe, so treat London as the contracting and invoicing answer rather than a claim about where every frame is made.',
      },
      {
        q: 'Do you work with London agencies?',
        a: 'Yes, under NDA and without credit. The Shadow Protocol package exists for exactly this: production capacity for agencies and studios that need the work and not the headcount.',
      },
      {
        q: 'Can we meet in person?',
        a: 'If you are in London, yes. Most of the work on this site was made without a single meeting in a room, so treat it as optional rather than a step.',
      },
      {
        q: 'Which sectors have you delivered in?',
        a: 'Hospitality, energy and critical infrastructure, education, retail and motorcycles, supplements, and professional consulting. Six delivered engagements are written up in full, with the problem, the idea, what we made and the artefacts.',
      },
    ],
    cta: {
      title: 'London hours, remote everything else.',
      body: 'Send the brief and the deadline. You will get a date with the quote, and the date is the one we work to.',
    },
  },
];

export const getSolution = (slug: string) => solutions.find((s) => s.slug === slug);
