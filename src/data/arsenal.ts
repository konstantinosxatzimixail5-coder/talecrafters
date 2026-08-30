// The arsenal. Category names stay feral because they are the brand. The line
// underneath each one is deliberately boring, because a procurement lead
// forwarding this page to a CFO needs a phrase that survives the forward.

export interface Service {
  name: string;
  desc: string;
  icon: string;
}

export interface Category {
  slug: string;
  title: string;
  /** The boring, searchable version. Sits directly under the title. */
  descriptor: string;
  arm: 'create' | 'systems' | 'originals';
  color: string;
  intro: string;
  services: Service[];
}

export const categories: Category[] = [
  {
    slug: 'visual-warfare',
    title: 'VISUAL WARFARE',
    descriptor: 'Generative Film, Advertising & Motion',
    arm: 'create',
    color: 'var(--brand-magenta)',
    intro:
      'Commercials, brand films, product cinematics and short-form built on a hybrid generative and post-production workflow. Delivery in days rather than quarters, with a named pipeline behind every piece.',
    services: [
      { name: 'Product Cinematics', desc: 'Ads that make people want things they didn’t know existed. We turn your product into the main character of a story people can’t look away from.', icon: 'Clapperboard' },
      { name: 'Short-Form Detonations', desc: 'Engineered for attention spans shorter than a goldfish’s existential crisis (that’s everyone). Content that hits hard and fast.', icon: 'MonitorPlay' },
      { name: 'Motion Alchemy', desc: 'Visuals that move like they’ve had three espressos. Dynamic, fluid, caffeinated motion design that makes static look dead.', icon: 'Flame' },
      { name: 'Synthetic Cinematography', desc: 'Fluid visual storytelling that redefines what’s possible without a 50-person film crew and a nervous breakdown.', icon: 'Wand2' },
      { name: 'Comic Panel Narratives', desc: 'Sequential art meets brand storytelling. Illustrated panel sequences that hit harder than a full-page ad and stick longer than a viral clip.', icon: 'LayoutPanelLeft' },
    ],
  },
  {
    slug: 'narrative-engineering',
    title: 'NARRATIVE ENGINEERING',
    descriptor: 'Creative Strategy, Storytelling & IP',
    arm: 'create',
    color: 'var(--brand-cyan)',
    intro:
      'The part that happens before a frame exists. Positioning, story architecture, scripts and the narrative spine a campaign hangs on.',
    services: [
      { name: 'Brand Mythology', desc: 'Forget taglines. We create belief systems. The kind of narrative foundation that turns customers into cultists (the good kind).', icon: 'Eye' },
      { name: 'Strategic Storytelling', desc: 'Story frameworks that position your brand as the only logical choice. We map the narrative architecture before we touch a single frame.', icon: 'BookMarked' },
      { name: 'Script Architecture', desc: 'Words that sell without selling out. Spokesperson scripts, video narratives, brand manifestos that sound like humans wrote them. Because humans did.', icon: 'Mic2' },
      { name: 'Blog-to-Video Transmutation', desc: 'Your text content, resurrected as video. Because reading is so 2019, and your insights deserve to move.', icon: 'Aperture' },
      { name: 'Scriptwriting', desc: 'From commercial scripts to documentary narratives, we write the words that make directors cry (in a good way) and audiences lean in.', icon: 'PenLine' },
      { name: 'Ghostwriting', desc: 'Your voice, weaponised by professionals. Thought leadership, articles, speeches, all written in your voice, just better. Nobody has to know.', icon: 'Ghost' },
    ],
  },
  {
    slug: 'creative-systems',
    title: 'CREATIVE SYSTEMS',
    descriptor: 'Agentic Workflows, Automation & Content Infrastructure',
    arm: 'systems',
    color: 'var(--brand-violet)',
    intro:
      'The technology lab half, sold as technology rather than described as a tool we happen to use. We build the machinery that produces, repurposes and distributes creative work, and hand it over running inside your own accounts.',
    services: [
      { name: 'Content Production Systems', desc: 'The assembly line behind the output. Brief in, brand-correct assets out, with the naming, versioning and cost ledger already attached.', icon: 'Boxes' },
      { name: 'Agentic Workflows', desc: 'Skills, tools and connectors wired into the software you already run. The model drafts, a person decides, and the boring 80% stops eating your week.', icon: 'BrainCircuit' },
      { name: 'Marketing Automation', desc: 'Campaign plumbing that does not fall over. Triggers, handoffs and reporting that survive the month your team is short two people.', icon: 'Workflow' },
      { name: 'Content Repurposing Engines', desc: 'One article becomes nine assets: cutdowns, carousels, infographic frames, a podcast read. Same argument, nine feeds, one pass.', icon: 'Repeat' },
      { name: 'Research & Lead-Gen Workflows', desc: 'Systems that go and find the thing, qualify it, and put it in front of a person in a format they can act on before lunch.', icon: 'Radar' },
      { name: 'Internal Tools & Prototypes', desc: 'Lightweight applications and working prototypes built through agentic development environments. Not a mockup. A thing that runs.', icon: 'CodeXml' },
    ],
  },
  {
    slug: 'design-weaponry',
    title: 'DESIGN WEAPONRY',
    descriptor: 'Websites, Digital Experiences & Brand Design',
    arm: 'create',
    color: 'var(--brand-gold)',
    intro:
      'Everything a brand looks like once it stops moving. Sites, identity systems, print, sound, and the interactive pieces that sit between them.',
    services: [
      { name: 'Website Design & Build', desc: 'Digital real estate that doesn’t look like a template crime scene. We design and ship web experiences that convert visitors into believers.', icon: 'Globe2' },
      { name: 'Visual Systems', desc: 'Brand imagery that makes your competitors jealous. Cohesive visual language built for your brand’s specific DNA.', icon: 'PaintBucket' },
      { name: '3D & Social Content', desc: 'Corporate content that looks like it escaped the metaverse and landed in your LinkedIn feed. Stand out or get buried.', icon: 'Box' },
      { name: 'Print Artillery', desc: 'Brochures and flyers with designs that physically refuse to be ignored. Yes, print is alive. We made it dangerous.', icon: 'Newspaper' },
      { name: 'Algorithmic Soundscapes', desc: 'Custom music and audio tailored to your brand’s frequency. Because stock music is a war crime against creativity.', icon: 'AudioLines' },
      { name: 'Interactive Experiences', desc: 'Configurators, playable pieces, narrative micro-sites. The formats where the audience does something instead of watching something.', icon: 'MousePointerClick' },
    ],
  },
  {
    slug: 'strategy-reputation',
    title: 'STRATEGY & REPUTATION',
    descriptor: 'Positioning, PR & Thought Leadership',
    arm: 'create',
    color: 'var(--brand-cyan)',
    intro:
      'What you should be saying, why anyone should care, and who says it. Including the version you need on the week it goes wrong.',
    services: [
      { name: 'Brand Strategy', desc: 'Before we make anything, we figure out what you should be saying and why anyone should care. Positioning, messaging, the story beneath the story.', icon: 'Crosshair' },
      { name: 'Reputation Architecture', desc: 'PR and reputation management for the synthetic media age. We help you control the narrative before someone else does.', icon: 'ShieldCheck' },
      { name: 'Crisis Storytelling', desc: 'When things go sideways, the story you tell matters more than ever. We help you navigate reputation storms without sounding like a corporate hostage reading a statement.', icon: 'Megaphone' },
      { name: 'Thought Leadership Systems', desc: 'Position your founders and executives as the voices worth following. Content strategies that build authority, not just visibility.', icon: 'UserCircle' },
    ],
  },
  {
    slug: 'synthetic-beings',
    title: 'SYNTHETIC BEINGS',
    descriptor: 'Digital Presenters, Voice & Autonomous Agents',
    arm: 'systems',
    color: 'var(--brand-magenta)',
    intro:
      'Trained faces and trained voices, built under a consent gate and a disclosure gate, plus the agents that operate without one.',
    services: [
      { name: 'Digital Avatars', desc: 'Spokespeople that represent your brand better than your CEO on a bad day. Always on-brand, always available, never hungover.', icon: 'ScanFace' },
      { name: 'Synthetic Voices', desc: 'Podcasts and audio content that somehow sound more human than most corporate communications.', icon: 'Podcast' },
      { name: 'Autonomous Agents', desc: 'Digital operatives that work while you sleep. Custom-built agents that handle workflows, engage audiences, and execute strategy on autopilot.', icon: 'Bot' },
    ],
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);

// --- The three arms ---------------------------------------------------------

export interface Arm {
  slug: 'create' | 'systems' | 'originals';
  num: string;
  name: string;
  line: string;
  color: string;
  href: string;
  blurb: string;
  covers: string[];
}

export const arms: Arm[] = [
  {
    slug: 'create',
    num: '01',
    name: 'TALECRAFTERS / CREATE',
    line: 'We make campaigns, films and visual worlds.',
    color: 'var(--brand-magenta)',
    href: '/create',
    blurb:
      'The client-facing production arm. Generative video, commercials, brand films, social campaigns, creative and art direction, synthetic photography, animation, music videos, campaign concepts and visual identities. We sell production, not generations.',
    covers: [
      'Generative video production',
      'Commercials and brand films',
      'Social campaigns',
      'Creative and art direction',
      'Synthetic photography',
      'Animation and music videos',
      'Narrative content',
      'Campaign concepts',
      'Visual identities',
    ],
  },
  {
    slug: 'systems',
    num: '02',
    name: 'TALECRAFTERS / SYSTEMS',
    line: 'We build the systems that produce, distribute and scale creative work.',
    color: 'var(--brand-violet)',
    href: '/systems',
    blurb:
      'Where the unusual advantage lives. Content production systems, agentic workflows, marketing automations, research systems, lead-generation workflows, repurposing engines, creative pipelines, internal tools, lightweight applications, AI-powered websites, interactive experiences and prototypes: built through agentic development environments and modern development infrastructure, and handed over as functional digital products.',
    covers: [
      'Content production systems',
      'Agentic workflows',
      'Marketing automations',
      'Research systems',
      'Lead-generation workflows',
      'Content repurposing engines',
      'Creative pipelines',
      'Internal tools and lightweight applications',
      'AI-powered websites and interactive experiences',
      'Prototypes',
    ],
  },
  {
    slug: 'originals',
    num: '03',
    name: 'TALECRAFTERS / ORIGINALS',
    line: 'We create our own films, games and stories.',
    color: 'var(--brand-gold)',
    href: '/originals',
    blurb:
      'Not hobbies bolted onto an agency. The original IP is where the story-first claim gets tested with nobody paying us to be right: films, short films, animated series, games, graphic narratives, novels and experimental interactive storytelling.',
    covers: [
      'Films and short films',
      'Animated series',
      'Games',
      'Graphic narratives',
      'Novels',
      'Original IP',
      'Experimental interactive storytelling',
    ],
  },
];

export const getArm = (slug: string) => arms.find((a) => a.slug === slug);
