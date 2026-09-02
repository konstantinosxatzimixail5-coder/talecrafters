// Search-intent pages.
//
// The Arsenal keeps the names we actually use. These pages exist for the words
// buyers type, and they are full documents rather than doorways: each one has
// its own argument, its own answers, and links into the pipelines, cases and
// definitions that support it. A dozen pages, not three hundred.

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
  /** The body argument. Four to six paragraphs on the newer pages. */
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
  /**
   * ISO country code when the page targets one market specifically. It narrows
   * the Service node's `areaServed` to that country and adds a Place node, so a
   * market page claims its market instead of repeating the global list every
   * other page already carries.
   */
  market?: string;
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
      { label: 'Founded', value: '2023' },
    ],
    body: [
      'The term is broader and more useful than "AI content", because it covers the middle ground where most professional work actually sits: a real shoot with a generated environment, a real product with a generated set, a real voice with a generated read. That middle ground is where a studio earns its fee, and it is also where the disclosure question gets interesting.',
      'Almost anyone can produce a striking single frame now. What separates a studio from a subscription is everything the frame does not show you: whether the packaging type survives a full-resolution zoom, whether the presenter has the same jawline in advert nine as in advert one, whether the light comes from the same direction across the set, and whether a person with authority signed off before it went live.',
      'Ask any studio you are considering four things. What is locked before you generate anything? What is the test that a frame has to pass, and what happens when it fails? Who owns the reusable files afterwards? And what is your cost per accepted asset, not per generation? A studio that cannot answer those is selling you the cheapest part of the job.',
      'Our answers are on this site rather than in a deck. Three of our seven production pipelines are published in full, with their stages, their timings and the four gates each one fails on. Every delivered engagement carries the problem, the idea, what we made and the artefacts the client kept. Over a hundred terms are defined the way a producer needs them.',
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
    title: 'CREATIVE AUTOMATION &',
    accentWord: 'AI CONTENT SYSTEMS',
    plainName: 'Creative automation and AI content systems',
    metaTitle: 'Creative Workflow Automation & Agentic Content Systems',
    metaDescription:
      'Creative automation for content and marketing teams: content production systems, agentic workflows, marketing automations, repurposing engines, internal tools and prototypes. Mapped, built and handed over running inside your own accounts with a cost ledger attached.',
    keywords: [
      'creative workflow automation',
      'agentic content systems',
      'creative automation for content teams',
      'creative automation for marketing teams',
      'content operations automation',
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
      'Creative automation for content and marketing teams. Your team is not slow, your process is: creative workflow automation is the machinery that produces, repurposes and distributes the work, and agentic content systems are the part of it that keeps deciding after the campaign is over.',
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
        a: 'Hospitality, energy and critical infrastructure, education, motorcycles, supplements, property and professional consulting. Every delivered engagement is written up in full, with the problem, the idea, what we made and the artefacts.',
      },
    ],
    cta: {
      title: 'London hours, remote everything else.',
      body: 'Send the brief and the deadline. You will get a date with the quote, and the date is the one we work to.',
    },
    market: 'GB',
  },
  {
    slug: 'ai-video-production-greece',
    title: 'AI VIDEO PRODUCTION',
    accentWord: 'IN GREECE',
    plainName: 'AI video production in Greece',
    metaTitle: 'AI Video Production in Greece — Generative Film and Campaign Studio',
    metaDescription:
      'Generative video, brand films, synthetic food and product photography and creative automation for Greek brands, hotels, restaurants and agencies. Three delivered engagements in Greece, UK contracting, work and reporting in English.',
    keywords: [
      'AI video production Greece',
      'AI video production Athens',
      'generative video agency Greece',
      'synthetic media studio Greece',
      'AI video production company Greece',
      'AI content production Athens',
      'AI food photography Greece',
      'hotel video production Greece',
      'AI advertising Greece',
      'creative automation Greece',
    ],
    color: 'var(--brand-cyan)',
    lede:
      'Two of the engagements written up on this site were made for Greek clients: a restaurant on Rhodes and a data school in Athens. The studio contracts from London and works in English. Greece is not a new market for us, it is where a lot of the method was built.',
    meta: [
      { label: 'Delivered in Greece', value: 'Rhodes, Athens, motorcycle retail' },
      { label: 'Contracting', value: 'UK entity, EU invoicing' },
      { label: 'Working language', value: 'English' },
      { label: 'Travel', value: 'Not required for any of it' },
    ],
    body: [
      'Greek brands hit the same wall as everybody else, only sooner, because the budgets are tighter and a two-day shoot with a crew, a stylist and a food photographer is often simply not happening. A restaurant on Rhodes came to us with a menu that had never been photographed and no realistic way to photograph it in season. What it got was a set of plate-locked stills, a ninety-second film and a website, produced without a camera ever arriving.',
      'That is the honest case for generative production in this market. Not that it is more impressive than a shoot, but that it exists at a price and a timescale where the shoot does not. A hotel that needs forty rooms shot before June, a dealership with a bike that has not landed yet, a school that needs seven pieces in seven registers before an intake closes: those are the briefs where the arithmetic changes.',
      'The method does not change by country. A product becomes a master plate before anything is generated. A presenter becomes a trained identity built from a sheet of stills. A set becomes a written specification with one key direction and one stated colour temperature. Then every frame is tested against the lock: read the printed words at full resolution, overlay the render on its plate at forty per cent, hold one light direction across the set, and let no invented claim survive.',
      'Everything is delivered, briefed and reported in English. Treatments and breakdowns have been written in Greek before and can be again, but the working language of the engagement, the documentation and this site is English, and we would rather say that plainly than imply a bilingual service we do not run.',
      'Contracting is through the UK entity. For a Greek client that means a UK invoice and, for VAT-registered businesses in Greece, the usual EU reverse-charge treatment, which your accountant will find unremarkable. Nothing about the production requires anybody to be in the same country, which is how all three of the engagements below were made.',
    ],
    deliverables: [
      { name: 'Food and hospitality stills', detail: 'Plate-locked sets for restaurants and hotels that were never photographed' },
      { name: 'Brand films', detail: 'Hero pieces, 30 to 90 seconds, for Greek and EU brands' },
      { name: 'Product cinematics', detail: 'Retail and dealership work from a locked master plate' },
      { name: 'Social campaign systems', detail: 'Runs built in several registers so the fifth piece still gets watched' },
      { name: 'Websites and digital experiences', detail: 'Designed and shipped in English, ready for a Greek-language pass by your team' },
      { name: 'Creative workflow automation', detail: 'The content machinery, handed over running inside your own accounts' },
    ],
    pipelines: ['phantom-set', 'identity-lock', 'operator-stack'],
    cases: ['mariposa', 'big-blue-data-academy', 'bike-barn'],
    terms: ['master-plate', 'synthetic-media', 'disclosure', 'cost-per-accepted-asset'],
    faqs: [
      {
        q: 'Do you work with Greek clients?',
        a: 'Two of the engagements written up on this site were delivered for clients in Greece: Mariposa on Rhodes and Big Blue Data Academy in Athens. Each one is published in full with the problem, what we made, the result and the artefacts.',
      },
      {
        q: 'Do you have an office in Athens?',
        a: 'No. TaleCrafters Ltd is registered in London and the production is remote-native. We are saying that plainly rather than listing a serviced address in Athens, because none of the Greek work needed anyone to be in the country and pretending otherwise would be the only dishonest thing on this page.',
      },
      {
        q: 'Do you work in Greek?',
        a: 'The engagement, the documentation and this site are in English. Treatments and production breakdowns have been written in Greek on past work, and scripts can be delivered for a Greek-language voice or subtitle pass, but we do not run a bilingual service and will not sell one.',
      },
      {
        q: 'How does invoicing work from Greece?',
        a: 'Through the UK entity, in GBP or EUR. For a VAT-registered business in Greece that is standard EU reverse-charge treatment on a UK invoice. Your accountant has seen it before.',
      },
      {
        q: 'Is generative production actually cheaper for a Greek brand?',
        a: 'Usually, and for a specific reason: it removes the crew, the location, the stylist and the reshoot, which are the line items that make a conventional shoot unaffordable at this budget level rather than merely expensive. For a brief that needs a real face in a real place on a real day, it is not, and we say so before quoting.',
      },
      {
        q: 'Can you shoot a hotel or restaurant that has never been photographed?',
        a: 'That is the exact brief Mariposa arrived with. A menu with no photography, out of season, no realistic shoot window. The answer was a master plate per dish, a written set specification, and a full still set plus a ninety-second film produced without a camera.',
      },
    ],
    cta: {
      title: 'Greek brief, English engagement.',
      body: 'Send the brief and the deadline. You will get a shape, a stack and a number back, and an honest answer about whether this should be generative at all.',
    },
    market: 'GR',
  },
  {
    slug: 'content-and-communications-strategy',
    title: 'CONTENT & COMMUNICATIONS',
    accentWord: 'STRATEGY',
    plainName: 'Content and communications strategy',
    metaTitle: 'Content & Communications Strategy — Positioning, Messaging and the Plan Under It',
    metaDescription:
      'Content and communications strategy for brands that already produce plenty and are not landing: positioning, message architecture, the register map, the channel plan and the measurement that tells you which part is working.',
    keywords: [
      'content strategy',
      'communications strategy',
      'content strategy agency',
      'brand messaging framework',
      'message architecture',
      'content strategy consultant',
      'B2B content strategy',
      'editorial strategy',
      'positioning and messaging',
    ],
    color: 'var(--brand-gold)',
    lede:
      'Most brands producing content do not have a volume problem. They have a decision problem: nobody wrote down what the company claims, who it is arguing with, or which of the nine things it says is the one that matters. Strategy is that document, and then the plan that spends against it.',
    meta: [
      { label: 'Engagement', value: 'Two to four weeks' },
      { label: 'You get', value: 'Positioning, message architecture, channel plan' },
      { label: 'Runs on', value: 'Your team, with or without us' },
      { label: 'Measured by', value: 'What moves, not what publishes' },
    ],
    body: [
      'The symptom is always the same. A team is publishing steadily, the calendar is full, and nothing compounds. Ask five people in that company what the brand claims and you get five answers, all reasonable, none the same. That is not an execution problem and more execution will not fix it.',
      'So the first artefact is a claim. One sentence a stranger could act on, that the company can actually support, and that is not true of its three closest competitors. Most of the work is the last clause: a claim everyone in the category could make is a description, not a position.',
      'Under it goes the message architecture: the two or three arguments that carry the claim, the evidence each one rests on, and the objection each one exists to answer. This is what turns a brand voice document from a list of adjectives into something a writer can use at four in the afternoon.',
      'Then the register map. The same argument sounds different on a landing page, in a founder post, in a paid script and in an answer-engine snippet, and a team without a register map flattens all four into the same middle voice. We write the registers down and give each one a rule about what it may and may not do.',
      'Last is the plan, and the plan is mostly subtraction. Which channels to stop, which formats to stop, and what the remaining capacity buys. A strategy that adds work to a team already at capacity is a strategy nobody will follow past week three.',
    ],
    deliverables: [
      { name: 'Positioning', detail: 'The claim, in one sentence, with the reason it is defensible written underneath' },
      { name: 'Message architecture', detail: 'Two or three arguments, the evidence under each, the objection each answers' },
      { name: 'Register map', detail: 'How the argument sounds per surface, with a rule per register' },
      { name: 'Channel and format plan', detail: 'What to run, what to stop, and what stopping buys back' },
      { name: 'Editorial calendar', detail: 'Twelve weeks, mapped to the arguments rather than to the months' },
      { name: 'Measurement frame', detail: 'The two or three numbers that would actually change a decision' },
    ],
    pipelines: ['operator-stack'],
    cases: ['big-blue-data-academy', 'cocoon'],
    terms: ['register', 'content-atomisation', 'topical-authority', 'answer-engine-optimisation', 'entity-graph'],
    faqs: [
      {
        q: 'What is content and communications strategy?',
        a: 'The document that decides what a company claims, which arguments carry that claim, what evidence each one rests on and how it should sound per surface, plus the plan that spends against it. Without it, a content team is producing volume and hoping.',
      },
      {
        q: 'How is this different from a content calendar?',
        a: 'A calendar says what publishes and when. A strategy says why any of it should exist. A calendar built without one is a schedule of unrelated posts that happens to be full.',
      },
      {
        q: 'We already produce a lot of content and it is not working. Is this the fix?',
        a: 'Usually, and the reason is uncomfortable: more output rarely fixes an unclear claim, it just distributes the confusion more widely. The first question is whether five people in your company would describe the brand the same way.',
      },
      {
        q: 'How long does a strategy engagement take?',
        a: 'Two to four weeks depending on how much internal disagreement there is about the claim, which is the real variable. The research and the writing are predictable; the alignment is not.',
      },
      {
        q: 'Do you execute it as well?',
        a: 'We can, and the strategy is written to be executable by your team without us. A plan that only works with its author in the room is a retainer disguised as a document.',
      },
      {
        q: 'How does this connect to the automation work?',
        a: 'Directly. A content system built before the strategy automates the production of things nobody decided to say. Strategy first, then the machinery that produces it at volume.',
      },
    ],
    cta: {
      title: 'Publishing plenty, landing little?',
      body: 'Tell us what the company claims. If two people give us two answers, we have found the problem and you already know the shape of the work.',
    },
  },
  {
    slug: 'video-ad-production',
    title: 'VIDEO AD',
    accentWord: 'PRODUCTION',
    plainName: 'Video ad production',
    metaTitle: 'Video Ad Production',
    metaDescription:
      'Video ad production for paid social, pre-roll and connected TV. One hero cut and every variant around it, built in the same pass and priced per flight.',
    keywords: [
      'video ad production',
      'video ad production company',
      'paid social video ads',
      'performance video creative',
      'ad variant production',
      'connected TV advertising production',
      'video ads for brands',
    ],
    color: 'var(--brand-magenta)',
    lede:
      'Advertising built to run, not to screen once. The hero cut and every variant around it come out of a single pass, sized for the placements your media plan actually buys.',
    meta: [
      { label: 'Formats', value: 'Paid social, pre-roll, connected TV, display' },
      { label: 'Turnaround', value: '5 to 15 working days' },
      { label: 'Volume', value: 'One hero, up to 24 cutdowns' },
      { label: 'You keep', value: 'Plates, identities, the variant grid' },
    ],
    body: [
      'Most video ad production stalls on a question nobody asks early enough: what happens when the media plan wants forty executions by Friday? A single beautiful cut is a portfolio piece. Paid channels need hooks tested against offers, each sized for placements that crop differently, delivered before the buying window shuts. A studio priced per film cannot answer without repricing the job, and by then the flight has started.',
      'Agencies respond by quoting a second project, which lands after the results that would have justified it. In-house teams shoot everything up front instead, committing to messaging before a single figure returns. Both routes trade away what performance advertising exists for, namely learning which argument persuades while budget remains to act on the lesson.',
      'So the grid comes before the camera moves. A brief turns into labelled coordinates: three openings, two propositions, four aspect ratios, each combination named so a buyer reading the report knows which one earned its spend. The hero piece sits inside that structure and is shot to carry everything else around it. Remaining executions are produced in the same pass rather than trimmed out afterwards, which is why our nine-by-sixteen never resembles a landscape frame with the sides amputated.',
      'Generation sits in the middle of a disciplined process, never at the front of it. A product becomes a master plate: one clean capture, true silhouette, legible label, referenced by every angle that follows. A presenter starts life as a trained identity built from a sheet of stills, reused across sessions with nothing re-uploaded. Environments are written down as specifications carrying a stated key direction and colour temperature, agreed before anything renders.',
      'Four tests run before a buyer sees anything. Printed copy is read at full resolution, including the small type everyone assumes nobody inspects. Each render lies over its plate at forty per cent opacity, so a drifting outline appears as a measurable offset instead of a hunch. Lighting holds one direction throughout the campaign. No invented certification, award or ingredient claim survives, since a legal team catching that after launch costs more than the shoot did.',
      'Delivery is a folder, not a link to a preview. Masters at the size and codec each platform demands, captions burned and supplied separately, thumbnails lifted from finished frames rather than generated later, plus a naming convention that survives contact with an advertising account. Beneath those sit the reusable sources: plates, identities, environment documents. Hire us twice and a second campaign begins from assets you already hold, which is the only honest route to a falling price.',
      'Cost per accepted asset is the number we report against, not the price of a render. A method yielding ninety frames cheaply where three prove legally usable is worse value than a slower one clearing eighty per cent of what it produces. Every attempt is logged with its spend and its verdict, and the ledger transfers with the files. Finance reads it unaided, which tends to be what releases a further budget.',
      'Scale is where this either compounds or collapses. A range covering nine products and four markets means thirty-six variations of every execution, and a conventional supplier bills each as a separate deliverable. Because our environments and identities persist, the last one costs a fraction of the opening. Localisation follows the same economics: swapping a caption, a currency or a spoken language means re-rendering affected shots against documents that already exist, rather than commissioning a fresh crew in another country.',
      'None of this makes creative judgement optional. Somebody still has to decide what the advertisement argues, which objection it meets, and whether the opening two seconds deserve the attention they are asking for. Machinery removes the excuses that once concealed a weak proposition: the schedule, the location, the reshoot bill. What remains is the idea itself, tested properly, which is an uncomfortable place to stand and a far better one to sell from.',
    ],
    deliverables: [
      { name: 'The hero cut', detail: '15 to 60 seconds, shot to carry the whole variant grid rather than stand alone' },
      { name: 'Variant matrix', detail: 'Hooks against offers across every ratio, each cell named for reporting' },
      { name: 'Platform masters', detail: 'Size, codec and caption treatment per placement, delivered ready to upload' },
      { name: 'Thumbnails and stills', detail: 'Pulled from real frames, so the still and the film agree' },
      { name: 'The cost ledger', detail: 'Every attempt logged with what it spent and whether it cleared review' },
      { name: 'Reusable source files', detail: 'Master plates, trained identities and set specifications, handed over' },
    ],
    pipelines: ['phantom-set', 'identity-lock'],
    cases: ['amino-alliance'],
    terms: ['cutdown', 'aspect-ratio-matrix', 'master-plate', 'cost-per-accepted-asset', 'acceptance-rate'],
    faqs: [
      {
        q: 'How many variants can you produce from one shoot?',
        a: 'Twenty-four cutdowns off a single hero is normal, and more is possible when the hooks share a set. The limit is rarely rendering. It is how many distinct propositions the brand can actually stand behind.',
      },
      {
        q: 'Do the ads look generated?',
        a: 'Not if the discipline holds. Drift, warped hands and unreadable packaging are what people recognise, and each of those has a named test that catches it before delivery. Where a piece cannot pass, we reshoot the source rather than retouch the symptom.',
      },
      {
        q: 'Can you work from our existing brand assets?',
        a: 'Yes, and it is cheaper when you can. A clean product photograph becomes the master plate directly. Brand guidelines become the written specification. Both shorten the front half of the schedule considerably.',
      },
      {
        q: 'Who owns what you deliver?',
        a: 'You do, including the plates, identities and specifications underneath. A supplier who keeps the source files is selling you a subscription rather than a campaign.',
      },
      {
        q: 'How is this priced?',
        a: 'Per flight, not per second. You agree a credit ceiling before a batch begins, and the job stops and asks rather than quietly spending past it.',
      },
    ],
    cta: {
      title: 'Bring the media plan, not the script.',
      body: 'Show us the placements and the buying window. We will come back with the grid, the ceiling and a date.',
    },
  },
  {
    slug: 'ugc-ad-creative',
    title: 'UGC AD CREATIVE',
    accentWord: 'FOR BRANDS',
    plainName: 'UGC ad creative',
    metaTitle: 'UGC Ad Creative for Brands',
    metaDescription:
      'UGC ad creative without the casting calendar. Trained presenters, room lighting and honest delivery, produced as a testable batch and disclosed properly.',
    keywords: [
      'UGC ad creative',
      'synthetic UGC',
      'UGC ads for brands',
      'AI UGC production',
      'creator-style ad production',
      'testimonial ad production',
      'user generated content advertising',
    ],
    color: 'var(--brand-gold)',
    lede:
      'Creator-style pieces to camera, produced without a casting calendar. A trained presenter, a room that reads as real, and a script you can rewrite on Tuesday without booking anybody again.',
    meta: [
      { label: 'Style', value: 'Presenter to camera, handheld, room lighting' },
      { label: 'Turnaround', value: '4 days from brief to nine variants' },
      { label: 'Languages', value: 'English, with cloned voice where consented' },
      { label: 'Disclosure', value: 'Labelled, C2PA where the platform reads it' },
    ],
    body: [
      'UGC ad creative works because it does not look bought. That is also why it breaks so easily: the moment a face repeats across nine executions with subtly different bone structure, or a kitchen changes shape behind the same speaker, the format loses the one quality it had. Volume is the point of this channel, and remaining consistent at scale is exactly what most production methods cannot manage.',
      'Booking genuine creators fixes believability and introduces a scheduling problem instead. A script changes on Tuesday, the talent is unavailable until the following month, and a test that should have taken four days consumes five weeks. Brands react by filming everything at once, which commits them to messaging before any of it has been measured. The economics quietly push you towards guessing.',
      'We build the presenter once and reuse them. A sheet of stills becomes a trained identity with fixed proportions, held steady through every later session without re-uploading a reference each time. The environment is written down before anything is generated: one window, a single practical lamp, a stated colour temperature, surfaces named. A rewrite then costs a render rather than a booking, and that difference is what makes honest testing affordable. Nothing about the room needs negotiating twice.',
      'Performance is directed, not left to the model. Delivery gets timed against the cut so a claim lands where the edit expects it. Eye contact breaks the way people genuinely do, on a thought instead of a metronome. Hands do something, because a speaker whose arms hang motionless reads as a hostage video however good the skin looks. Where a voice is cloned we hold signed permission for it, and nothing runs without that file.',
      'Disclosure is designed in rather than bolted on afterwards. Synthetic presenters are labelled, provenance travels with the asset wherever a platform reads it, and no execution implies a customer said something nobody ever said. That constraint costs nothing in performance and removes the single version of this work capable of generating a genuine crisis.',
      'You receive nine finished variants from a four-day cycle: the same person, the same room, nine separate arguments. Alongside them come the stills, the consent paperwork, the trained identity itself and the environment specification. Test the batch, find the two that pay, then commission twelve more of that shape the following week without restarting from an empty page. Everything in that handover is yours, including the files which produced it.',
      'The economics change once the identity exists. A first batch carries the setup: building the presenter, writing the room, agreeing the register. Everything afterwards inherits all three, so the second cycle yields roughly twice the output for equivalent money, and by the sixth it is considerably more. Brands running always-on paid social feel this quickly, because the fixed portion of their creative bill stops recurring.',
      'There are limits, and stating them plainly matters. Anything requiring a named public figure, a genuine customer testimonial, or a demonstration where the item behaves in some physically specific way belongs in front of a lens. We will say so rather than accept the brief. Everything else, meaning the enormous middle ground of a person explaining a proposition to camera in a believable space, is precisely what this method handles best. Being honest about the boundary is what makes a recommendation inside it worth trusting.',
      'The output is judged on spend behaviour, not on whether it fooled anybody. Hook rate, hold-through, cost per acquisition, and how a variant performs in week three once novelty has worn off. Those numbers decide what gets rebuilt and what gets retired, and they explain why the work ships as a batch rather than as one expensive execution nobody can iterate on.',
    ],
    deliverables: [
      { name: 'Presenter pieces', detail: '20 to 45 seconds to camera, handheld feel, room lighting rather than studio' },
      { name: 'Trained identity', detail: 'Built from a sheet of stills and reusable in every later session' },
      { name: 'Nine-variant batches', detail: 'One person, one environment, nine separate arguments, produced in four days' },
      { name: 'Voice work', detail: 'Cloned where a signed consent file exists, cast where it does not' },
      { name: 'Disclosure package', detail: 'Labelling and provenance metadata attached before anything ships' },
      { name: 'Room specification', detail: 'The written environment, so a later batch matches the opening one exactly' },
    ],
    pipelines: ['identity-lock'],
    cases: ['jarfis-property-group'],
    terms: ['synthetic-ugc', 'trained-identity', 'lip-sync', 'voice-cloning', 'consent-file', 'disclosure'],
    faqs: [
      {
        q: 'Is synthetic UGC legal to run as advertising?',
        a: 'Yes, with disclosure and honest claims. Article 50 of the EU AI Act requires that synthetic media be labelled. Advertising standards separately require that anything presented as a customer experience genuinely happened. We hold both lines rather than choosing one.',
      },
      {
        q: 'Can you clone a real person from our team?',
        a: 'With their signed permission, kept on file, and a stated scope covering where it may appear and for how long. Without that paperwork we build an original presenter instead, which is usually the better commercial answer anyway.',
      },
      {
        q: 'Will viewers notice it is not filmed?',
        a: 'Some will, and the disclosure tells the rest. Neither outcome hurts the numbers when the argument is good. What damages a brand is a piece that hides its nature and gets caught.',
      },
      {
        q: 'How many scripts do you need from us?',
        a: 'One strong proposition and the objections you hear on sales calls. We write the nine angles from that, because the variants exist to test framing rather than to say nine unrelated things.',
      },
      {
        q: 'What if the presenter needs to change later?',
        a: 'The identity is a file you keep. A new campaign reuses it, or we build a second one, and both stay available. Nothing forces a fresh start.',
      },
    ],
    cta: {
      title: 'Bring the objections, we will bring the face.',
      body: 'Tell us what people say before they buy. Four days later you will have nine ways of answering them.',
    },
  },
  {
    slug: 'brand-film-production',
    title: 'BRAND FILM',
    accentWord: 'PRODUCTION',
    plainName: 'Brand film production',
    metaTitle: 'Brand Film Production',
    metaDescription:
      'Brand film production for companies whose story will not fit a location budget. Impossible moves, coherent worlds, delivered in weeks rather than quarters.',
    keywords: [
      'brand film production',
      'brand film company',
      'corporate film production',
      'brand storytelling film',
      'manifesto film production',
      'generative brand film',
      'brand documentary production',
    ],
    color: 'var(--brand-violet-text)',
    lede:
      'The piece that says who you are, made without a location scout or a weather contingency. Impossible camera moves, coherent worlds, and a schedule measured in weeks.',
    meta: [
      { label: 'Length', value: '60 to 180 seconds' },
      { label: 'Turnaround', value: '3 to 6 weeks' },
      { label: 'Method', value: 'Hybrid generative and post-production' },
      { label: 'You keep', value: 'Plates, worlds, the graded master' },
    ],
    body: [
      'Brand film production has always been rationed by geography. The idea wants a tulip field at dawn and an orbital view of the same coastline eight seconds later, and the budget answers with one afternoon in a rented warehouse. Ambition gets negotiated downwards in a meeting nobody enjoys, and the finished piece describes a smaller company than the client who commissioned it.',
      'Generative methods remove that negotiation, which turns out to be the dangerous half. When anything is available, most output becomes a showreel: nine unrelated gorgeous shots with no argument running between them. Capability is not a story. A picture that can travel anywhere still needs a reason to move, and that motive has to come from what the business genuinely claims about itself.',
      'So we write before rendering. The narrative is built around a single spine, usually one transformation stated in a sentence a chief executive would repeat unprompted. Shots earn their place by advancing that line. Anything merely spectacular is cut at the treatment stage, where losing it costs a conversation instead of a fortnight.',
      'Then the world gets specified. Locations become written documents: architecture, era, palette, one key direction, a stated colour temperature. Continuity survives because paperwork enforces it, not because an editor happened to notice. A hero object becomes a master plate referenced by every angle. Where a face recurs it is a trained identity rather than a hopeful prompt, so whoever appears at ninety seconds is recognisably the same individual at twelve.',
      'The grade decides whether a generated sequence becomes cinema or stays a collection of clips. Everything travels through a single look: matched contrast, a shared black point, grain applied over the whole timeline rather than per shot. Sound follows identical logic, scored as one arc instead of assembled from stings. Most of what separates our work from an impressive demonstration happens in these two stages, after the interesting part has finished.',
      'You receive the graded master at delivery specification, the cutdowns your channels need, a stills set pulled from real frames, and the sources underneath: plates, world documents, identities, project files. Your next picture starts from that library. Companies commissioning one a year find the second costs meaningfully less than the first, which is the entire argument for keeping materials instead of renting them.',
      'Approval is where these projects actually run late. So the treatment carries frames, not adjectives, and the previsualisation exists before anybody expensive is committed. A stakeholder sees roughly what will arrive while changing it is still cheap, and the awkward conversation about whether the opening truly works happens in the first week rather than the fifth. Nothing about generative tooling fixes a decision-making culture, but showing pictures earlier helps more than any other single intervention.',
      'Rights are settled up front and written into the contract. Model licences cleared for commercial exhibition before rendering rather than afterwards, music either scored originally or properly licensed, any recognisable likeness consented in scope and duration. Broadcasters and large advertisers increasingly ask for that paperwork, and assembling it retrospectively is unpleasant. Producing it alongside the work costs almost nothing.',
      'What we will not do is pretend the method suits every brief. A documentary resting on genuine testimony should be filmed with a camera and a person. So should anything where the value lies in proving something unrepeatable happened. Where the subject is aspiration, scale, transformation or a place that cannot exist yet, this approach is not a compromise on the conventional route. It is simply better at the job. Saying so out loud matters, because a supplier who never declines anything is selling rather than advising.',
    ],
    deliverables: [
      { name: 'The hero film', detail: '60 to 180 seconds, one spine, graded and scored as a single piece' },
      { name: 'Channel cutdowns', detail: 'Shorter edits and vertical versions, planned into the treatment rather than cropped later' },
      { name: 'Stills set', detail: 'Frames lifted from the finished timeline for press, decks and social' },
      { name: 'World documents', detail: 'Written locations, so a sequel matches without archaeology' },
      { name: 'Master plates and identities', detail: 'The reusable core of every recurring object and face' },
      { name: 'Project files', detail: 'Timeline, grade and audio sessions, handed over at the end' },
    ],
    pipelines: ['phantom-set'],
    cases: ['ib-nl'],
    terms: ['temporal-coherence', 'set-specification', 'hero-frame', 'colour-management', 'previsualisation'],
    faqs: [
      {
        q: 'How long does a brand film take?',
        a: 'Three to six weeks, and the variance sits almost entirely in approvals rather than rendering. A client who can decide inside two days finishes at the shorter end.',
      },
      {
        q: 'Can you match footage we already have?',
        a: 'Usually. Existing material sets the palette and the grain that everything generated is then graded towards. Mixed sequences work well when the decision is made early, and badly when it arrives in the final week.',
      },
      {
        q: 'What about music and voice?',
        a: 'Scored or licensed, your choice, and the score is written to the cut rather than laid underneath it. Narration is cast or cloned with consent, and we hold the paperwork either way.',
      },
      {
        q: 'Do we need a script before speaking to you?',
        a: 'No. A proposition is enough, and often better, because a script written against camera limits tends to have removed the ideas worth keeping.',
      },
      {
        q: 'Can the film be updated next year?',
        a: 'Yes, and cheaply, provided you kept the sources. Swapping a product, a claim or a market means re-rendering the affected shots against the same documents rather than remaking the whole thing.',
      },
    ],
    cta: {
      title: 'What is the sentence you want repeated?',
      body: 'Send us that, and the constraint you assumed would kill it. We will treat both as the starting point.',
    },
  },
  {
    slug: 'ai-product-photography',
    title: 'AI PRODUCT',
    accentWord: 'PHOTOGRAPHY',
    plainName: 'AI product photography',
    metaTitle: 'AI Product Photography & Product Shoots',
    metaDescription:
      'AI product photography with the label still legible. Master plates, silhouette checks and thirty frames for selection, delivered inside a fortnight.',
    keywords: [
      'AI product photography',
      'AI product shoots',
      'generative product photography',
      'ecommerce product imagery',
      'product cinematics',
      'packshot production',
      'catalogue photography production',
    ],
    color: 'var(--brand-cyan)',
    lede:
      'Catalogue and campaign imagery without a studio day. The label stays legible, the silhouette holds true, and thirty frames arrive for selection rather than three.',
    meta: [
      { label: 'Output', value: '30 frames for selection, then 90 and six clips' },
      { label: 'Turnaround', value: '2 days for a still set' },
      { label: 'Accuracy', value: 'Silhouette overlay at 40 per cent opacity' },
      { label: 'You keep', value: 'Master plates and set specifications' },
    ],
    body: [
      'AI product photography fails on packaging, and it does so quietly. The composition is gorgeous, the light is expensive, and the ingredients panel says something that is not a word. Nobody spots it during review because everyone is looking at the whole frame, and then it reaches a retailer whose compliance officer reads that text first. The picture was never the risk. What was written on the object was.',
      'The second weakness is shape. A bottle narrowing a little too sharply, a cap sitting a millimetre proud, a seam in the wrong place. Individually these pass. Across a catalogue they produce a range that looks subtly counterfeit, and customers register the wrongness without being able to name it. Returns climb, support tickets multiply, and nobody connects any of it to the imagery.',
      'Both problems share a cause: generating from a description instead of from the object. So we begin with a master plate. One clean capture, correct geometry, sharp label, colour measured rather than eyeballed. Every later angle references it. The model is not being asked to imagine your packaging, only to relight something already fixed, which is a far smaller job with far fewer ways to go wrong. Everything downstream inherits that accuracy automatically.',
      'Verification runs on every frame before you see any of them. Printed copy is read at full resolution, including the fine type people assume nobody checks. Each render lies over its source at forty per cent opacity, so a drifting edge appears as a visible offset instead of a hunch. Colour is compared against measured values, never against memory.',
      'Where an image fails, it returns to the plate. Nothing is patched during retouching, because that yields one picture which passes and a catalogue still drifting. This sounds inefficient and is the opposite: fixing a cause once beats correcting its symptom ninety times, and the difference compounds across a range you intend to reuse for several seasons.',
      'A set specification does the same work for environments. Surface, era, key direction, colour temperature, all written before rendering. That is why an autumn campaign matches the spring one instead of approximating it, and why a product introduced in June sits inside a scene built in February without anybody rebuilding either. Consistency stops being a matter of memory.',
      'Delivery opens with thirty frames for selection, roughly what a studio day yields, arriving in two. Approved directions expand to ninety stills and six short clips, cut for the placements you run. Beneath those sit the plates and specifications, yours to keep. Your next launch begins with the environment already standing, and the only fresh work is the object itself. Turnaround assumes you can approve inside twenty-four hours; where sign-off travels through three departments, the schedule stretches by however long that takes and nothing we do shortens it.',
      'Cost behaves differently from a conventional shoot, and it is worth understanding how. A single hero image lands somewhere near studio rates, because building the plate takes real effort. Everything after that is close to free. Photographing the eleventh variant in an existing scene is a render, not a booking, so ranges and seasonal refreshes are where this stops being comparable and starts being uncompetitive to match.',
      'Some categories still want a camera. Anything sold on texture at extreme magnification, anything whose appeal depends on documented provenance, and anything a regulator expects to have been photographed rather than depicted. We will tell you when yours falls into that group. For the ordinary bulk of commercial imagery, meaning packshots, lifestyle scenes, seasonal campaigns and the endless variations a marketplace listing demands, the arithmetic is no longer close.',
    ],
    deliverables: [
      { name: 'Selection set', detail: 'Thirty frames across angles and treatments, delivered in two days' },
      { name: 'Full still delivery', detail: 'Ninety images from the approved directions, sized per channel' },
      { name: 'Product cinematics', detail: 'Six short clips built from the same plates as the photography' },
      { name: 'Master plate', detail: 'The measured capture every later angle references' },
      { name: 'Set specifications', detail: 'Written environments, so next season matches this one' },
      { name: 'Verification report', detail: 'Label reads, overlay checks and colour comparisons, per frame' },
    ],
    pipelines: ['phantom-set'],
    cases: ['bike-barn'],
    terms: ['master-plate', 'silhouette-overlay', 'product-cinematic', 'colour-management', 'reference-image'],
    faqs: [
      {
        q: 'Do you need our physical product?',
        a: 'One clean photograph of it usually suffices, shot on a plain background with the packaging square to camera. Where the item is unreleased, a rendering from the industrial design file works equally well.',
      },
      {
        q: 'Will the packaging text be accurate?',
        a: 'It is checked at full resolution on every delivered frame, including regulatory panels. Anything unreadable goes back to the plate rather than into a retouching pass.',
      },
      {
        q: 'How does this compare to a studio day on cost?',
        a: 'Comparable for a single hero shot and dramatically cheaper across a range, because the second product in an existing scene costs almost nothing to add.',
      },
      {
        q: 'Can you match our existing catalogue?',
        a: 'Yes. Supply a few current images and they become the reference the new material is graded and composed towards, so old and new sit together on a page without a visible join.',
      },
      {
        q: 'What about food and drink?',
        a: 'Handled, with an extra rule: no invented ingredient, certification or health claim survives review. Appetite appeal is fine. Fabricated substantiation is not.',
      },
    ],
    cta: {
      title: 'Send one clean photograph.',
      body: 'That is enough to build the plate. Two days later you will be choosing from thirty frames.',
    },
  },
  {
    slug: 'seo-aio-content',
    title: 'SEO AND AIO',
    accentWord: 'CONTENT',
    plainName: 'SEO and AIO content production',
    metaTitle: 'SEO & AIO Content Production',
    metaDescription:
      'SEO and AIO content built to be cited, not just ranked. Entity-first structure, answerable pages and a publishing system your team can run without us.',
    keywords: [
      'SEO content',
      'AIO content',
      'answer engine optimisation',
      'generative engine optimisation',
      'SEO content production',
      'AI search visibility',
      'topical authority content',
    ],
    color: 'var(--brand-gold)',
    lede:
      'Pages written to be quoted by an assistant and ranked by a search engine, which are no longer quite the same brief. Built as a system, handed over running.',
    meta: [
      { label: 'Scope', value: 'Strategy, production, publishing system' },
      { label: 'Cadence', value: '4 to 12 pieces a month' },
      { label: 'Measured on', value: 'Citations, impressions, assisted pipeline' },
      { label: 'You get', value: 'The pages and the machine that makes them' },
    ],
    body: [
      'SEO and AIO content have quietly separated. A search engine ranks your page and dispatches a visitor to read it. An assistant consumes the article itself, synthesises a reply, and may never forward anybody at all. Writing for the first behaviour while ignoring the second means winning a position on a results screen fewer people scroll each quarter.',
      'What models cite is not what keyword density used to reach. Assistants favour material stating a claim plainly, attributing it, and offering passages that survive being lifted out of context. Long preambles, buried conclusions and vague hedging are invisible to that process. So is anything whose central assertion only becomes clear in paragraph nine.',
      'We begin with entities rather than phrases. What is this business, what does it make, which concepts does it legitimately own, and how do those connect to questions people actually type or speak aloud? That map becomes a publishing plan: definitional pages establishing vocabulary, comparison articles capturing evaluation intent, and long essays earning the right to be quoted on a subject where being wrong would embarrass you.',
      'Structure follows. Every article opens with its answer, then argues for it. Headings are phrased as questions wherever one is genuinely being asked. Claims carry a source or a figure. Schema describes what the page is instead of decorating it. None of this constitutes a trick, and that matters, because the tactical version of this work stopped functioning around the point models grew competent at recognising filler.',
      'Production is a system rather than a retainer you cannot escape. Briefs generate from the entity map. Composition runs through an agentic workflow assembling research and structure, then a person edits, because an unedited draft always reads like one. Distribution, internal linking and index submission happen automatically, so a piece is discoverable within minutes of approval instead of whenever a crawler wanders past.',
      'Reporting covers both halves. Traditional positions and impressions, alongside citation tracking across the assistants your buyers genuinely use, plus the assisted pipeline your library touched. At handover the machinery runs inside your own accounts, with briefs, prompts and workflows documented. You can continue without us, which is the only real test of whether anything was built. A dependency you cannot exit was never a system, it was a subscription.',
      'Volume is deliberately modest. Four to twelve pieces a month, because a hundred thin articles now actively damage a domain that publishes them, and because the compounding comes from depth on a narrow subject rather than breadth across everything adjacent. A site owning six topics completely outranks and outcites one gesturing at sixty. Restraint here is a strategy, not a shortage of ambition.',
      'Older archives usually hold more value than anybody expects. Before writing anything new we audit what a domain already carries, and a meaningful share typically needs restructuring rather than replacement: an answer moved to the top, a claim sourced, a heading rewritten as the question it was secretly answering. That work is cheap, lands fast, and often produces the first movement anybody observes, weeks ahead of the new material. Repairing a page that earns impressions beats publishing beside it.',
      'Nobody can guarantee a citation, and anyone who does is selling something. Assistants change their retrieval behaviour without notice, and a position held in March may evaporate in May. What can be promised is a body of material that deserves quoting, structured so a machine can quote it accurately, published on infrastructure that tells the index within minutes. Those three conditions are the controllable part. We concentrate entirely on them. Anything beyond that is weather, and we will report it honestly rather than take credit for it.',
    ],
    deliverables: [
      { name: 'Entity and topic map', detail: 'What you legitimately own, and where the questions cluster around it' },
      { name: 'Publishing plan', detail: 'Definitional, comparison and depth pieces, sequenced by what compounds first' },
      { name: 'The writing itself', detail: 'Four to twelve pieces a month, answer first, sourced, edited by a person' },
      { name: 'Structured data', detail: 'Schema that describes each page accurately rather than decoratively' },
      { name: 'Publishing automation', detail: 'Briefing, drafting, linking and index submission, running in your accounts' },
      { name: 'Dual reporting', detail: 'Rankings and impressions alongside assistant citations and assisted pipeline' },
    ],
    pipelines: ['operator-stack'],
    cases: ['big-blue-data-academy'],
    terms: ['answer-engine-optimisation', 'generative-engine-optimisation', 'entity-graph', 'topical-authority', 'content-atomisation'],
    faqs: [
      {
        q: 'What is AIO content?',
        a: 'Material written so that an assistant can quote it accurately. In practice that means stating the answer early, attributing claims, and making each passage stand alone, because a model lifting a paragraph does not bring your introduction with it.',
      },
      {
        q: 'Is this just AI-written articles?',
        a: 'No. Drafting is assisted, editing is human, and every claim gets checked against something real. Unedited generated text ranks poorly and gets cited even less, which makes the cheap version a false economy.',
      },
      {
        q: 'How long before it works?',
        a: 'Citations often move within weeks, since assistants re-read rather than waiting on a crawl schedule. Traditional positions behave as they always have, which is three to six months for anything competitive.',
      },
      {
        q: 'Do you write in our voice?',
        a: 'We build a register document first, from material you already published and approved, then edit against it. A publication that sounds like everybody else gets summarised rather than quoted.',
      },
      {
        q: 'What happens if we stop?',
        a: 'You keep the map, the briefs, the workflows and the archive, all inside your own accounts. The system was built to be operated by your team from the first month, not the twelfth.',
      },
    ],
    cta: {
      title: 'Ask an assistant about your category.',
      body: 'If it names a competitor and not you, that gap is the brief. Send us what it said.',
    },
  },
  {
    slug: 'web-design',
    title: 'WEB DESIGN',
    accentWord: 'AND BUILD',
    plainName: 'SEO-ready web design and build',
    metaTitle: 'SEO-Ready Web Design & Build',
    metaDescription:
      'Web design and build for companies that need to be found. Fast, structured, editable by your own team, and shipped with the search groundwork already done.',
    keywords: [
      'web design',
      'SEO web design',
      'website design and build',
      'Next.js website development',
      'headless CMS website',
      'fast website build',
      'website redesign agency',
    ],
    color: 'var(--brand-cyan)',
    lede:
      'Sites that load quickly, read clearly to a crawler, and stay editable by the people who own them. Design and engineering as one job, because splitting them is where quality leaks.',
    meta: [
      { label: 'Stack', value: 'Next.js, headless CMS, deployed on the edge' },
      { label: 'Timeline', value: '4 to 8 weeks' },
      { label: 'Editable by', value: 'Your team, without a developer' },
      { label: 'Includes', value: 'Schema, sitemap, instant indexing' },
    ],
    body: [
      'Most web design goes wrong at the handover between two suppliers. A studio delivers beautiful flat artwork, a development shop interprets it, and the outcome is heavier, slower and less coherent than either party intended. Nobody is at fault and everybody ends up mildly disappointed. Six months later the marketing team wants a fresh page and discovers that adding one requires a ticket, a sprint and a quotation.',
      'The other common failure is architectural. A site launches looking excellent and ranking for nothing, because structure was treated as a task for afterwards. Headings describe visual hierarchy instead of meaning. Every route renders identically to a crawler. There is no sitemap worth reading and no structured data whatsoever. Retrofitting all that costs more than building it correctly would have. Discoverability is decided while the thing is assembled, long before anybody writes a word about it.',
      'We handle design and engineering as a single engagement, in code from an early stage. Layout decisions get made against production typography, the actual copy and measured load times, so the thing being approved is the thing that ships. Motion is specified where it clarifies and refused where it merely performs. Accessibility is checked as building proceeds rather than audited at the end, when repairs mean unpicking components.',
      'Underneath sits a headless content system, modelled around your material instead of around a page builder. Each section becomes a named field a marketer can edit safely, and none of them can break the layout. Fresh routes are entries, not deployments. That single decision keeps a site alive after the agency relationship ends, and its absence explains why so many rebuilds happen every three years.',
      'The search groundwork ships with the opening release. Semantic markup, schema describing the organisation and its offering, a generated sitemap reflecting what genuinely exists, and instant index submission so a published change is known about within minutes. Core Web Vitals are budgeted during construction, not measured afterwards and apologised for. Redirects from an old structure are mapped before launch rather than discovered through a spike in errors.',
      'Handover includes the repository, the content system, the documentation and a walkthrough. You own all of it. We remain available afterwards for the work that genuinely needs us, and pointedly unnecessary for the work that does not, meaning publishing a page, changing a headline or launching a campaign section. That independence is the deliverable, and the visual design is what makes people notice it.',
      'Pictures are usually the bottleneck nobody plans for. A site design assumes imagery that does not exist yet, and launch slips by a month waiting for a shoot. Because we produce it synthetically in the same building, that dependency collapses: the hero frame, the section headers and the case study images are made against the layout while it is still being built, sized correctly, in one consistent light.',
      'Measurement is installed before launch, not bolted on when somebody asks how the site is performing. Events that correspond to commercial reality, a search console properly verified, and dashboards a marketing lead can read without a translator. It is unglamorous and it is the difference between a website you can argue about with evidence and one everybody has an opinion about. Numbers settle arguments faster than seniority.',
      'We are not the right studio for everything. A large transactional platform, a complex product application, or anything demanding a bespoke checkout wants specialists who do that daily. Where a company needs a fast, well-structured, editable presence that earns attention and can grow one page at a time without a rebuild, this is the whole of what we do, and the constraint is deliberate.',
    ],
    deliverables: [
      { name: 'Design and build', detail: 'One engagement, decided in code against real content and real load times' },
      { name: 'Headless content model', detail: 'Named fields your marketers can edit without touching layout' },
      { name: 'Technical search groundwork', detail: 'Semantic markup, schema, sitemap and instant index submission' },
      { name: 'Performance budget', detail: 'Core Web Vitals agreed during the build and held at launch' },
      { name: 'Migration and redirects', detail: 'Old routes mapped to new ones before anything goes live' },
      { name: 'The repository', detail: 'Code, documentation and a walkthrough, transferred to you' },
    ],
    pipelines: ['operator-stack'],
    cases: ['mariposa'],
    terms: ['entity-graph', 'answer-engine-optimisation', 'naming-convention', 'topical-authority', 'connector'],
    faqs: [
      {
        q: 'What do you build sites with?',
        a: 'Next.js against a headless content system, deployed to an edge network. It is a boring, well-supported combination, which is the point: your next developer will already know it.',
      },
      {
        q: 'Can our team edit the site afterwards?',
        a: 'That is the design goal. Sections are named fields with guidance written beside them, and publishing a page needs no deployment and no developer.',
      },
      {
        q: 'Will we lose rankings when we migrate?',
        a: 'Not if redirects are mapped before launch and the content keeps its meaning. We audit the existing structure first and carry across what already earns traffic.',
      },
      {
        q: 'Do you write the copy as well?',
        a: 'We can, and the two jobs work better together. Where you have a writer, we give them the structure and the character limits their sections expect.',
      },
      {
        q: 'How long does a site take?',
        a: 'Four to eight weeks for a marketing site, depending on how many templates it genuinely needs. The variable is rarely engineering, it is how quickly content decisions get made.',
      },
    ],
    cta: {
      title: 'Show us the page you cannot edit.',
      body: 'Every rebuild starts with one of those. We will tell you whether you need a site or a section.',
    },
  },
];

export const getSolution = (slug: string) => solutions.find((s) => s.slug === slug);
