// Selected Damage. Six delivered engagements, written the sober way on purpose:
// the headlines upstairs are feral, so everything down here is specific or it
// is nothing. Every claim in this file is one a client could check.

export interface Artefact {
  label: string;
  detail: string;
}

export interface StackStep {
  stage: string;
  tool: string;
}

export interface Shot {
  src: string;
  alt: string;
  label: string;
  focus?: string;
}

/**
 * A film that actually exists somewhere a crawler can reach.
 *
 * Populate this only when there is a real file or player page. A VideoObject
 * describing a video nobody can fetch is a claim that gets discounted, and it
 * drags the credibility of the rest of the graph down with it. Several of the
 * cases below shipped films that currently live on a client's own domain
 * rather than ours; those get an entry the day we host or embed them.
 */
export interface CaseVideo {
  name: string;
  description: string;
  /** ISO 8601, e.g. PT1M30S for ninety seconds. */
  duration?: string;
  /** Direct file on our domain, or absolute. */
  contentUrl?: string;
  /** Player page: YouTube, Vimeo. */
  embedUrl?: string;
  /** Poster frame. Defaults to the case hero. */
  thumbnail?: string;
  /** YYYY-MM-DD. */
  uploadDate: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  kind: 'Client work' | 'Concept project';
  discipline: string;
  year: string;
  place?: string;
  featured: boolean;
  accent: string;
  /** One line for the index card. */
  summary: string;
  problem: string;
  idea: string;
  made: string[];
  result: string;
  resultKind: 'Delivered' | 'Intended';
  artefacts: Artefact[];
  method: string;
  gates: { name: string; test: string }[];
  hero: Shot;
  gallery: Shot[];
  stack: StackStep[];
  links: { label: string; href: string }[];
  /** Genre for the CreativeWork node, e.g. "Brand film". */
  genre?: string;
  /** Films delivered on this engagement that are publicly reachable. */
  videos?: CaseVideo[];
}

export const work: CaseStudy[] = [
  {
    slug: 'mariposa',
    title: 'A restaurant that had never been photographed',
    client: 'Mariposa',
    kind: 'Client work',
    discipline: 'Website · Brand film · Synthetic photography',
    year: '2026',
    place: 'Rhodes, Greece',
    featured: true,
    accent: 'var(--brand-gold)',
    summary:
      'Website, ninety-second film and a full set of plate stills for a restaurant whose menu had never been shot.',
    problem:
      'A restaurant on Rhodes needed a website, a film and pictures of dishes nobody had ever photographed. Its own photography covered part of the menu, shot honestly on the terrace under real light, and stopped there.',
    idea:
      'Do not fake the plates. A generated dish that looks better than the kitchen is a lie a diner catches the moment the plate arrives, so the still work was locked to the restaurant’s own reference frames and the film went the other way entirely: openly illustrated, a garden and a fire and a long day by the water, in the warm palette the room already has. An illustrated film cannot be caught pretending to be the room. A photoreal one is caught every second it runs.',
    made: [
      'A WordPress site, designed and shipped.',
      'A ninety-second VSL script.',
      'An illustrated brand film, plus short vertical cuts for social.',
      'Generated plate stills covering the dishes the camera never reached.',
    ],
    result:
      'Live at mariposa.restaurant, site and film together. Every generated plate was signed off by someone from the kitchen before it shipped.',
    resultKind: 'Delivered',
    artefacts: [
      { label: 'Website', detail: 'WordPress build, live' },
      { label: 'Film', detail: '90 seconds, illustrated, plus vertical cutdowns' },
      { label: 'Script', detail: '90-second VSL' },
      { label: 'Stills', detail: 'Plate set, master-plate locked per dish' },
    ],
    method:
      'Phantom Set, which is the pipeline for any subject a person can hold up against the picture. One master plate per dish, locked first: crockery, garnish, light, angle. Every later frame is generated from that plate rather than from a fresh prompt, so the plating cannot wander between shots.',
    gates: [
      { name: 'Label gate', test: 'Zoom to full resolution and read every printed word in frame. A fail returns to the master plate, never to a retouching tool.' },
      { name: 'Silhouette gate', test: 'Lay the render over the master plate at 40% opacity. Any shift in the outline of the plate kills the frame.' },
      { name: 'Kitchen gate', test: 'Somebody who cooks the dish looks at it and says whether it is theirs.' },
    ],
    hero: {
      src: 'mariposa/dinner-mariposa',
      alt: 'The terrace at Mariposa after dark, wooden decking, cane shades, planting overhead and a lit table in the middle distance.',
      label: 'the room, as shot',
    },
    gallery: [
      { src: 'mariposa/film-02', alt: 'A frame from the film: a drawn octopus over glowing orange coals in the dark, titled Grilled Octopus.', label: 'from the film', focus: '45% 50%' },
      { src: 'mariposa/film-03', alt: 'A frame from the film: a drawn white plate of saffron risotto crowned with a single scampi on a deep yellow ground, headed Carnaroli and Saffron.', label: 'from the film', focus: '72% 50%' },
      { src: 'mariposa/film-01', alt: 'A frame from the film: a drawn kitchen garden in flat warm colour, young vegetables in dark soil, one tall plant in white flower and a yellow butterfly beside it.', label: 'from the film' },
      { src: 'mariposa/film-04', alt: 'The end card: the word Mariposa in cream serif with two butterfly wings above it and the line the hidden gem above the Aegean underneath.', label: 'end card' },
      { src: 'mariposa/food-02', alt: 'Grilled octopus curled over yellow fava purée in a stone bowl, topped with pickled onion and dill, shot at the table at night.', label: 'reference plate: what the drawn octopus was measured against' },
      { src: 'mariposa/shrimp-mariposa', alt: 'Shrimp on saffron risotto in a dark bowl, topped with basil and cracked pepper, shot from above.', label: 'reference plate, shot on site' },
      { src: 'mariposa/mariposa-mousaka', alt: 'A slice of moussaka on a white plate, photographed on the restaurant terrace in daylight with a wine glass behind it.', label: 'reference plate, shot on site' },
      { src: 'mariposa/beef-stifado', alt: 'Beef stifado in a dark sauce in a metal bowl under a nest of shoestring fries and a sprig of rosemary.', label: 'reference plate, shot on site' },
    ],
    stack: [
      { stage: 'Master plate', tool: 'Nano Banana Pro' },
      { stage: 'Variations', tool: 'Image-to-image from the plate' },
      { stage: 'Motion', tool: 'Higgsfield Cinema Studio' },
      { stage: 'Cut', tool: 'CapCut' },
      { stage: 'Site', tool: 'WordPress, Figma, Claude Code' },
    ],
    links: [{ label: 'mariposa.restaurant', href: 'https://mariposa.restaurant/' }],
    genre: 'Brand film and synthetic photography',
  },
  {
    slug: 'ib-nl',
    title: 'One move, tulip field to orbit',
    client: 'IB-NL',
    kind: 'Client work',
    discipline: 'Brand film · Generative production',
    year: '2026',
    place: 'The Netherlands',
    featured: true,
    accent: 'var(--brand-cyan)',
    summary:
      'A consultancy needed to say “Dutch expertise, global business” without a word of voiceover. One unbroken camera move said it instead.',
    problem:
      'IB-NL places Dutch expertise with businesses outside the Netherlands. The line under the mark is where Dutch expertise meets global business, and the film had to land that line as a picture before anyone read it. A corporate consultancy has three stock options (a handshake, a map with arcs on it, or a presenter) and all three have been used so often they carry no information.',
    idea:
      'Put the argument in the camera move instead of the script. Open on a polder at sunrise, tulip rows and working windmills along a canal, and never cut. Keep rising through Amsterdam at dusk, past the canal ring, until the coastline flattens and the Netherlands is a lit smudge on the night side of Europe seen from orbit. Nobody has to say the word global, because the camera has already done it.',
    made: [
      'A continuous rising film from field level to orbit, with no cut.',
      'A descent on the far side: tower window, boardroom, a skyline that is plainly not Dutch.',
      'An end frame: a dark world map with one country lit.',
    ],
    result:
      'Delivered as the client’s brand film. Four altitude bands, one continuous move, no voiceover.',
    resultKind: 'Delivered',
    artefacts: [
      { label: 'Film', detail: 'Brand film, continuous pull, four altitude bands' },
      { label: 'Set specification', detail: 'Sun position and light direction fixed per altitude' },
      { label: 'Plates', detail: 'One master plate per band, handed over' },
    ],
    method:
      'Phantom Set, run as one continuous set instead of one product. The specification was written before anything rendered and fixed the things a viewer notices when they break: sun position, time of day, direction of light at every altitude. A pull that starts at sunrise and arrives at night has to travel through the terminator, so the light change is the story rather than a mistake. Each band got its own plate, and frames were generated from the plate above and the plate below, so every seam is a match on the horizon line and the colour of the sky.',
    gates: [
      { name: 'Geography gate', test: 'Every land mass checked against reference before it enters the cut. The orbital frames get checked twice, because that is where a model is most confident and most wrong.' },
      { name: 'Seam gate', test: 'Horizon line and sky colour must match across the join between two altitude bands.' },
      { name: 'Light gate', test: 'One sun position per band, and the change between bands has to read as time passing.' },
    ],
    hero: {
      src: 'ib-nl/tulips',
      alt: 'A polder at sunrise from the air, rows of red, orange and pink tulips beside a canal, windmills receding along the bank and mist over the fields.',
      label: 'field band, frame one',
    },
    gallery: [
      { src: 'ib-nl/amsterdam', alt: 'Amsterdam from high above at dusk, the canal ring lit warm orange against blue water, river and coast at the top of frame.', label: 'city band' },
      { src: 'ib-nl/orbit', alt: 'Europe at night from orbit, city lights across the continent, the curve of the Earth against black space.', label: 'orbital band: the seam that had to match' },
      { src: 'ib-nl/boardroom', alt: 'An empty boardroom high in a tower, long dark table set with glasses, floor-to-ceiling windows onto a high-rise skyline.', label: 'the descent, somewhere else' },
      { src: 'ib-nl/map', alt: 'A dark world map in thin gold outline with the Netherlands lit in warm yellow, everything else unlit.', label: 'end frame' },
    ],
    stack: [
      { stage: 'Set specification', tool: 'Written once, sun position fixed per altitude' },
      { stage: 'Plates', tool: 'Nano Banana Pro, one per altitude band' },
      { stage: 'Motion', tool: 'Higgsfield Cinema Studio' },
      { stage: 'Cut', tool: 'CapCut' },
    ],
    links: [],
    genre: 'Brand film',
  },
  {
    slug: 'big-blue-data-academy',
    title: 'Seven pieces, seven registers, one school',
    client: 'Big Blue Data Academy',
    kind: 'Client work',
    discipline: 'Content system · Social campaign · Creative direction',
    year: '2026',
    place: 'Greece',
    featured: true,
    accent: 'var(--brand-magenta)',
    summary:
      'A run of social pieces where no two look like they came from the same production company, and all seven are unmistakably one school.',
    problem:
      'Big Blue Data Academy teaches data science to career changers. The audience is on a phone, mid-scroll, and has already learned to skip anything shaped like a course advert. The ask was volume: not one film with a long approval cycle, but a run of short pieces that could go out week after week and keep working.',
    idea:
      'Invert the house style. Volume and sameness normally arrive together: a house style makes the second piece cheap and the fifth piece invisible, because by then the audience has learned the shape of it. So the constraint was set the other way: every piece had to look like it came from a different production company, and the brand had to survive all of them.',
    made: [
      'A photoreal punk figure in a dark office, head made of a pie chart, mohawk made of bars.',
      'A 3D cartoon detective in a paper-flooded room, magnifier over a stack of reports.',
      'A storybook snake in reading glasses, taking notes while a patient lies on a couch.',
      'A country singer in a blue Stetson under a saloon sign, playing a song about data.',
      'Three more registers in the same fortnight, cut 9:16 for feed and 16:9 for wide.',
    ],
    result:
      'Delivered as a run of social pieces for the school. Seven registers, one brand, one fortnight.',
    resultKind: 'Delivered',
    artefacts: [
      { label: 'Films', detail: '7 pieces, 9:16 and 16:9 cuts' },
      { label: 'Register list', detail: 'Fixed before any frame, seven entries' },
      { label: 'Plate sets', detail: 'One per register, nothing reused between them' },
    ],
    method:
      'Operator Stack: the pipeline for work where the value is in the run rather than in any single film. The registers were chosen first and written down as a list before a frame was made, so that no two briefs could drift into the same look under deadline. A register is a decision about lighting model, edge quality and how much the world is allowed to be wrong. Each got its own plate set and prompt vocabulary, and nothing was reused between them, because reuse is exactly what produces the sameness the job was built to avoid.',
    gates: [
      { name: 'Brand gate', test: 'The mark, the blue and the lockup survive a register change without being redrawn. The mark is composited, never generated: a model asked to draw a logo gets it nearly right, and nearly right on a logo is worse than absent.' },
      { name: 'Anatomy gate', test: 'Every frame with a held object gets checked before it enters a cut. Cartoon registers fail here first: a magnifier, a guitar neck, a clipboard held by something with no thumbs.' },
    ],
    hero: {
      src: 'bbda/datapunk',
      alt: 'A photoreal punk figure in a dark office, head a segmented pie chart with orange eyes, mohawk of coloured bar-chart columns, leather jacket stencilled DATA PUNK.',
      label: 'register one, photoreal',
    },
    gallery: [
      { src: 'bbda/detective', alt: 'A 3D cartoon detective in a brown hat and green coat holding a magnifying glass over his eye, the lens filled with spreadsheets, office knee-deep in loose paper.', label: 'register two, 3D cartoon' },
      { src: 'bbda/python', alt: 'A storybook illustration of a blue snake in black reading glasses holding a clipboard, taking notes from a young man on a therapy couch.', label: 'register three, storybook' },
      { src: 'bbda/western', alt: 'A man in a blue cowboy hat and denim shirt playing guitar in a wooden saloon under a painted Big Blue Data Academy sign, pie charts floating around him.', label: 'register four: the one frame where the mark sits inside the world', focus: '50% 22%' },
    ],
    stack: [
      { stage: 'Register list', tool: 'Fixed before any frame, seven entries' },
      { stage: 'Plates', tool: 'Nano Banana Pro, separate set per register' },
      { stage: 'Motion', tool: 'Higgsfield Cinema Studio' },
      { stage: 'Mark', tool: 'Composited in the cut, never generated' },
      { stage: 'Cut', tool: 'CapCut' },
    ],
    links: [],
    genre: 'Content system and social campaign',
  },
  {
    slug: 'cocoon',
    title: 'A grid cyberattack, explained to people who do not work on grids',
    client: 'SEleNe CC',
    kind: 'Client work',
    discipline: 'Explainer · Narrative engineering · Public-sector comms',
    year: '2025',
    place: 'Horizon Europe, grant 101120221',
    featured: true,
    accent: 'var(--brand-violet)',
    summary:
      'Four films for a Horizon Europe consortium, built entirely from a grant document, because nothing in them could be filmed.',
    problem:
      'COCOON is a Horizon Europe project on cooperative cyber protection for modern power grids, run across a consortium. The audience is mixed: engineers on one side, policy people, reviewers and the public on the other, who need the same story without the vocabulary.',
    idea:
      'Treat it as a writing job, not a generation job. Nothing could be shot: live substations and pilot sites are not places a camera crew walks into, and the attack being described has never happened to the equipment on screen. So the grant text and technical diagrams were read down into a single chain of events (entry point, lateral move, control layer, physical effect) and one diagram vocabulary was agreed early and held across all four pieces. Colour carries state and nothing else, so a consortium partner can point at a frame and say which stage is wrong.',
    made: [
      'A project promo.',
      'Two pilot films.',
      'A vector attack explainer that walks an intrusion through a grid, one hop at a time.',
    ],
    result:
      'Delivered to SEleNe CC for the COCOON consortium. The project is publicly documented under Horizon Europe grant agreement 101120221.',
    resultKind: 'Delivered',
    artefacts: [
      { label: 'Films', detail: 'Promo, two pilot films, one explainer' },
      { label: 'Storyboard', detail: 'One event chain, written then boarded by hand' },
      { label: 'Diagram system', detail: 'One vocabulary across four pieces, colour as state' },
    ],
    method:
      'This one ran on the writing. Generation covered environments, establishing shots and the abstracted grid. Every technical claim went back to the consortium before it went into a render.',
    gates: [
      { name: 'Claim gate', test: 'Nothing appears on screen that the grant text does not support.' },
      { name: 'Vocabulary gate', test: 'One diagram system across all four pieces. A new shape means a new meaning, or it does not get drawn.' },
    ],
    hero: {
      src: 'selene-cc/explainer-title',
      alt: 'The title card of the vector attack explainer, reading Attack Vector Deployment in cyan display type over a dark network mesh, with the COCOON mark above it.',
      label: 'explainer, title card',
    },
    gallery: [
      { src: 'selene-cc/explainer-spoof', alt: 'An explainer frame headed DNS Spoofing, with two paragraphs setting out how an attacker redirects an operator to a fraudulent site.', label: 'the scenario, stated before it is drawn' },
      { src: 'selene-cc/explainer-chain', alt: 'The full attack diagram: a hacker icon above a DNS server, a dashed line from an operator into the server, a red path branching to a fake website and a green path to the real one.', label: 'one vocabulary, colour carries state' },
      { src: 'selene-cc/logo-dark', alt: 'The COCOON project mark, a stylised power pylon and solar panel inside a green cocoon, with the line Cooperative Cyber Protection for Modern Power Grids around it.', label: 'consortium mark, supplied' },
    ],
    stack: [
      { stage: 'Source', tool: 'Grant text and consortium diagrams' },
      { stage: 'Storyboard', tool: 'Written, then boarded by hand' },
      { stage: 'Frames', tool: 'Nano Banana Pro' },
      { stage: 'Motion and assembly', tool: 'Higgsfield, CapCut' },
    ],
    links: [{ label: 'cyber-cocoon.eu', href: 'https://cyber-cocoon.eu/' }],
    genre: 'Explainer film',
  },
  {
    slug: 'bike-barn',
    title: 'Indian Elite',
    client: 'Bike Barn',
    kind: 'Client work',
    discipline: 'Hero film · Product cinematics',
    year: '2026',
    place: 'Greece',
    featured: false,
    accent: 'var(--brand-magenta)',
    summary:
      'A wet cobbled street at night, with no location, no rain machine, no night permit and no rider.',
    problem:
      'A dealership wanted a hero film for one motorcycle, cut for vertical feed. The bike is the product; everything else in frame is set dressing, and set dressing is the part a dealership never has budget for.',
    idea:
      'Build the set once and never rebuild it. A motorcycle is the worst possible subject for a generated frame: badge, tank graphic, headlamp cluster that riders know by heart, and spokes, which fall apart the moment a model starts inventing detail. So the machine was locked into a master plate before any environment existed, and the street, canal houses, wet cobbles and reflected lamplight were written once as a set specification and reused across every frame.',
    made: [
      'A hero film for the Indian Elite, cut vertical.',
      'A locked master plate of the machine, handed over as a reusable file.',
    ],
    result:
      'Delivered as the hero cut for the model, with the plate handed over so the next film starts from a correct bike rather than a fresh prompt.',
    resultKind: 'Delivered',
    artefacts: [
      { label: 'Film', detail: 'Hero cut, 9:16' },
      { label: 'Master plate', detail: 'The machine alone, correct badge, fairing and wheel count' },
      { label: 'Set specification', detail: 'Street, weather and lamplight, written once' },
    ],
    method:
      'Phantom Set with the gates turned up. Plate first: the bike alone, correct badge, correct fairing, correct wheel count, nothing else in the picture.',
    gates: [
      { name: 'Silhouette gate', test: 'Overlay the render on the plate at 40% opacity. Any change in the outline of the tank or fairing kills the frame.' },
      { name: 'Spoke rule', test: 'If the spoke count changes between frames, the shot returns to the plate rather than going into a retouching pass.' },
      { name: 'Rights gate', test: 'Two earlier pieces for this client leaned on licensed characters. Those are not on this site, for that reason.' },
    ],
    hero: {
      src: 'bike-barn/frame-01',
      alt: 'A rider on an Indian motorcycle on wet cobbles at night, canal houses and street lamps behind, sparks trailing from the road surface.',
      label: 'hero frame',
    },
    gallery: [
      { src: 'bike-barn/ad-01', alt: 'A close view of the machine on a canal street at night, rider low over the bars, the Indian script badge legible on the orange tank.', label: 'badge and tank graphic, held' },
      { src: 'bike-barn/ad-02', alt: 'The same machine from a lower angle on wet cobbles, front wheel spokes in full view, a tram and canal houses blurred behind.', label: 'spoke count, held between frames' },
      { src: 'bike-barn/ad-03', alt: 'The rider head-on down a flooded canal street at night, one headlamp burning, the Bike-Barn wordmark beside him.', label: 'end frame from the cut', focus: '90% 50%' },
    ],
    stack: [
      { stage: 'Master plate', tool: 'Nano Banana Pro' },
      { stage: 'Set specification', tool: 'Written once, reused per frame' },
      { stage: 'Motion', tool: 'Kling, image to video' },
      { stage: 'Cut', tool: 'CapCut' },
    ],
    links: [],
    genre: 'Hero film and product cinematics',
  },
  {
    slug: 'amino-alliance',
    title: 'A presenter who can film the pitch as often as it is rewritten',
    client: 'Amino Alliance',
    kind: 'Client work',
    discipline: 'Synthetic UGC · Paid social · Product stills',
    year: '2026',
    featured: false,
    accent: 'var(--brand-gold)',
    summary:
      'Two trained presenters and one product plate, reused across a paid-social test that changes its offer every month.',
    problem:
      'Amino Alliance sells a supplement in a printed pouch and needed creator-style pieces for paid social. The requirement underneath that is volume: a paid test needs the same person delivering several openings and several asks, then needs them again next month when the offer changes.',
    idea:
      'Cast once, then treat the cast as an asset. Two presenters trained from a stills sheet, reused across the whole set, so variant forty costs what variant ten did. The pouch runs the other line: a real printed object with a real mark, a product name and a block of small type down the front, none of which can be approximated at arm’s length in daylight.',
    made: [
      'Creator pieces for paid social, presenter to camera, product in hand.',
      'Product frames for the still placements.',
      'Two trained presenter identities and one product plate, handed over.',
    ],
    result:
      'Delivered as creator pieces for paid social, with the trained presenters and the product plate handed over as reusable files.',
    resultKind: 'Delivered',
    artefacts: [
      { label: 'Films', detail: 'Creator pieces, multiple openings and asks' },
      { label: 'Stills', detail: 'Product frames for still placements' },
      { label: 'Identities', detail: 'Two trained presenters, reusable across sessions' },
      { label: 'Product plate', detail: 'Master plate of the pouch, label-locked' },
    ],
    method:
      'Identity Lock for the presenters, Phantom Set for the pouch, and the two lines meet at the frame where a hand touches packaging. Casting brief first, then twenty-plus stills of one face at varied angles under even light, then a trained identity that carries across sessions without re-uploading a reference.',
    gates: [
      { name: 'Label gate', test: 'Zoom to full resolution and read every word on the front of the pouch. A fail returns to the plate, never to a retouching pass.' },
      { name: 'Hand gate', test: 'Every frame where fingers touch the pouch gets frozen and checked. A bad one gets rerolled or cropped above the wrist.' },
      { name: 'Consent gate', test: 'Signed release for the voice and the likeness reference. Nothing renders until both sit in the folder.' },
    ],
    hero: {
      src: 'amino-alliance/product-02',
      alt: 'An Amino Alliance pouch on a laboratory bench with a glowing atom symbol beside it, lit from behind.',
      label: 'product plate',
    },
    gallery: [
      { src: 'amino-alliance/product-01', alt: 'A man in a black jumper holding an Amino Alliance pouch to camera with a thumbs up, green foliage behind him.', label: 'presenter one', focus: '50% 20%' },
      { src: 'amino-alliance/ugc-01', alt: 'A woman in a pale blazer holding an Amino Alliance pouch to camera outside an office building, with a caption reading I am a management consultant.', label: 'presenter two, opening variant', focus: '50% 20%' },
    ],
    stack: [
      { stage: 'Presenter identity', tool: 'Higgsfield Soul ID' },
      { stage: 'Identity sheet', tool: 'Nano Banana Pro, GPT Image 2' },
      { stage: 'Product plate', tool: 'GPT Image 2' },
      { stage: 'Scene plates', tool: 'Popcorn' },
      { stage: 'Motion', tool: 'Veo 3.1, Kling' },
      { stage: 'Voice', tool: 'ElevenLabs' },
    ],
    links: [],
    genre: 'Synthetic UGC and paid social',
  },
];

export const featuredWork = work.filter((w) => w.featured);
export const getCase = (slug: string) => work.find((w) => w.slug === slug);
