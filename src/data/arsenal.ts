// The arsenal. Category names stay feral because they are the brand. The line
// underneath each one is written flat and plain, because a procurement lead
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
      'Commercials, brand films, product cinematics and short-form built on a hybrid generative and post-production workflow. Delivery measured in days, with a named pipeline behind every piece.',
    services: [
      { name: 'Product Cinematics', desc: 'Your product as the main character, shot off a locked plate so the label still reads at full resolution after the camera move. The kind of ad somebody forwards without being asked to.', icon: 'Clapperboard' },
      { name: 'Short-Form Detonations', desc: 'Nine-by-sixteen built as nine-by-sixteen, with the hook inside the first eighteen frames. Cut for the feed it lands in, at the size it will be watched.', icon: 'MonitorPlay' },
      { name: 'Motion Alchemy', desc: 'Motion design with three espressos in it. Type that lands with weight, transitions that carry the argument, and nothing moving purely because it can.', icon: 'Flame' },
      { name: 'Synthetic Cinematography', desc: 'Camera language, lighting and coverage out of a generative pipeline. No fifty-person crew, no location fee, no nervous breakdown on day two of a three-day shoot.', icon: 'Wand2' },
      { name: 'Comic Panel Narratives', desc: 'Sequential art with a brand inside it. Illustrated panel sequences that survive a screenshot and outlive the campaign that paid for them.', icon: 'LayoutPanelLeft' },
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
      { name: 'Brand Mythology', desc: 'Belief systems. The narrative foundation that turns a customer into somebody who defends you in a comment section nobody tagged them in.', icon: 'Eye' },
      { name: 'Strategic Storytelling', desc: 'Story frameworks that leave your brand as the only sane option in the category. The architecture is mapped and signed before a single frame exists.', icon: 'BookMarked' },
      { name: 'Script Architecture', desc: 'Spokesperson scripts, video narratives and brand manifestos that sound like humans wrote them. Because a human did, on a Tuesday, with the beat sheet already signed off.', icon: 'Mic2' },
      { name: 'Blog-to-Video Transmutation', desc: 'Your archive, back from the dead as video. The argument survives the trip. The eighteen hundred words do not.', icon: 'Aperture' },
      { name: 'Scriptwriting', desc: 'Commercial scripts through to documentary narrative. Words that make a director cry in the good way and make an audience lean towards the screen.', icon: 'PenLine' },
      { name: 'Ghostwriting', desc: 'Your voice, weaponised by professionals. Articles, speeches and posts that read like you on your sharpest day. Nobody has to know.', icon: 'Ghost' },
    ],
  },
  {
    slug: 'creative-systems',
    title: 'CREATIVE SYSTEMS',
    descriptor: 'Agentic Workflows, Automation & Content Infrastructure',
    arm: 'systems',
    color: 'var(--brand-violet-text)',
    intro:
      'The technology lab half, sold as technology in its own right. We build the machinery that produces, repurposes and distributes creative work, and hand it over running inside your own accounts.',
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
      { name: 'Website Design & Build', desc: 'Sites that do not look like a template crime scene. Designed, built and shipped, with the copy written to convert and the page weight kept honest.', icon: 'Globe2' },
      { name: 'Visual Systems', desc: 'A visual language built for one brand and no other. Colour, type, grid, and the written rules that stop the whole thing drifting the week somebody else opens the file.', icon: 'PaintBucket' },
      { name: '3D & Social Content', desc: 'Corporate content that looks like it escaped the metaverse and landed in a LinkedIn feed. Stand out or get buried.', icon: 'Box' },
      { name: 'Print Artillery', desc: 'Brochures and flyers designed to physically refuse being ignored. Print is alive. We made it dangerous.', icon: 'Newspaper' },
      { name: 'Algorithmic Soundscapes', desc: 'Custom music and audio cut to your brand’s frequency. Stock music is a war crime against creativity and we decline to participate.', icon: 'AudioLines' },
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
      { name: 'Reputation Architecture', desc: 'PR and reputation for the synthetic media age, including the morning somebody claims your advert was faked. The answer is written before you need it.', icon: 'ShieldCheck' },
      { name: 'Crisis Storytelling', desc: 'When things go sideways, the story you tell is the only asset you have left. We get you through a reputation storm without sounding like a corporate hostage reading a statement.', icon: 'Megaphone' },
      { name: 'Thought Leadership Systems', desc: 'Your founders on the record saying something a competitor could not say back. Authority takes a publishing cadence and a point of view, and we build you both.', icon: 'UserCircle' },
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
      { name: 'Digital Avatars', desc: 'Spokespeople who turn up on brand every morning, including the ones your CEO does not. Written consent gate on the front, disclosure on the back, and no hangovers.', icon: 'ScanFace' },
      { name: 'Synthetic Voices', desc: 'Podcast reads, narration and audio that sounds like a person who slept last night. Cloned under a signed consent gate and disclosed wherever the law asks.', icon: 'Podcast' },
      { name: 'Autonomous Agents', desc: 'Digital operatives working the hours you refuse to. Custom agents that run a workflow end to end and escalate to a human at the exact point where being wrong gets expensive.', icon: 'Bot' },
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
      'The client-facing production arm. Generative video, commercials, brand films, social campaigns, creative and art direction, synthetic photography, animation, music videos, campaign concepts and visual identities. What you buy is finished production. Generations are just what happens on the way there.',
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
    color: 'var(--brand-violet-text)',
    href: '/systems',
    blurb:
      'The machinery, sold as machinery, and handed over running inside your own accounts. Content production systems, agentic workflows, marketing automations, research systems, lead-generation workflows, repurposing engines, creative pipelines, internal tools, lightweight applications, AI-powered websites, interactive experiences and prototypes: built through agentic development environments and modern development infrastructure, and handed over as functional digital products.',
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
    line: 'We create our own films and games, and the stories under both.',
    color: 'var(--brand-gold)',
    href: '/originals',
    blurb:
      'The slate we fund ourselves, which is where the story-first claim gets tested with nobody paying us to be right: films, short films, animated series, games, graphic narratives, novels and experimental interactive storytelling. Seven feature screenplays are finished. None of them were briefed.',
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
