// Selected Damage. The delivered client engagements, written the sober way on purpose:
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
  /** Set when the picture was replaced in the Studio. Wins over `src`. */
  upload?: unknown;
  alt: string;
  label: string;
  focus?: string;
}

export type { ProjectVideo } from './video';
import type { ProjectVideo } from './video';

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
  /**
   * Films from this engagement that a reader can watch here.
   *
   * Only films we can actually play. A VideoObject describing a video nobody
   * can fetch is a claim that gets discounted, and it drags the rest of the
   * graph down with it. Several of these engagements shipped work that lives
   * on a client's own domain; those get an entry the day it is watchable.
   */
  videos?: ProjectVideo[];
}

// The running order is the portfolio's. These are one body of client work
// published on two sites, so the sequence, the frames and the facts are held
// the same in both places; only the page furniture around them differs.
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
      'A site built for search and answer engines, a film, dish stills from angles the camera never reached, and synthetic social content.',
    problem:
      'A restaurant on Rhodes needed a fully SEO- and AIO-optimised site, a film, realistic dish photos from several angles, and synthetic social content. Its own photography covered part of the menu, shot honestly on the terrace under real light, and stopped there. The realism standard was high: everything had to survive a customer sitting down and being handed the actual plate.',
    idea:
      'Do not fake the plates. A generated dish that looks better than the kitchen is a lie a diner catches the moment the plate arrives, so the still work was locked to the restaurant’s own reference frames and the film went the other way entirely: openly illustrated, a garden and a fire and a long day by the water, in the warm palette the room already has. An illustrated film cannot be caught pretending to be the room. A photoreal one is caught every second it runs.',
    made: [
      'A Next.js site, designed and shipped.',
      'A ninety-second VSL script.',
      'An illustrated brand film, plus short vertical cuts for social.',
      'Generated plate stills covering the dishes the camera never reached.',
    ],
    result:
      'Live at mariposa.restaurant, site and film together. Every generated plate was signed off by someone from the kitchen before it shipped.',
    resultKind: 'Delivered',
    artefacts: [
      { label: 'Website', detail: 'Next.js build, live' },
      { label: 'Film', detail: 'Illustrated, plus vertical cutdowns' },
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
      { src: 'mariposa/film-01', alt: 'A frame from the film: a drawn kitchen garden in flat warm colour, young vegetables in dark soil, one tall plant in white flower and a yellow butterfly beside it.', label: 'from the film' },
      { src: 'mariposa/film-02', alt: 'A frame from the film: a drawn octopus over glowing orange coals in the dark, titled Grilled Octopus.', label: 'from the film', focus: '45% 50%' },
      { src: 'mariposa/film-03', alt: 'A frame from the film: a drawn white plate of saffron risotto crowned with a single scampi on a deep yellow ground, headed Carnaroli and Saffron.', label: 'from the film', focus: '72% 50%' },
      { src: 'mariposa/film-04', alt: 'The end card: the word Mariposa in cream serif with two butterfly wings above it and the line the hidden gem above the Aegean underneath.', label: 'from the film, end card' },
      { src: 'mariposa/logo-photoreal', alt: 'A photorealistic green and cream butterfly with spiral markings on its wings, resting on pale stone: the Mariposa mark rendered as a real specimen.', label: 'logo, photorealistic' },
      { src: 'mariposa/mariposa-mousaka', alt: 'A slice of moussaka on a white plate, photographed on the restaurant terrace in daylight with a wine glass behind it.', label: 'reference plate, shot on site' },
      { src: 'mariposa/shrimp-mariposa', alt: 'Shrimp on saffron risotto in a dark bowl, topped with basil and cracked pepper, shot from above.', label: 'reference plate, shot on site' },
      { src: 'mariposa/beef-stifado', alt: 'Beef stifado in a dark sauce in a metal bowl under a nest of shoestring fries and a sprig of rosemary, a long slice of grilled bread beside it.', label: 'reference plate, shot on site' },
      { src: 'mariposa/food-01', alt: 'Grilled cheese over rocket, tomato and pomegranate on a wide white plate, photographed at the table.', label: 'reference plate, shot on site' },
      { src: 'mariposa/food-02', alt: 'Grilled octopus curled over yellow fava purée in a stone bowl, topped with pickled onion and dill, shot at the table at night with a glass of white wine behind it.', label: 'reference plate, and the dish the drawn octopus was measured against' },
    ],
    stack: [
      { stage: 'Master plate', tool: 'Nano Banana Pro' },
      { stage: 'Variations', tool: 'Nano Banana 2, image to image from the plate, ChatGPT Image 2' },
      { stage: 'Motion', tool: 'Higgsfield Cinema Studio' },
      { stage: 'Cut', tool: 'CapCut' },
      { stage: 'Site', tool: 'Vercel, Figma, Claude Code, Sanity' },
    ],
    links: [{ label: 'mariposa.restaurant', href: 'https://mariposa.restaurant/' }],
    genre: 'Brand film and synthetic photography',
    videos: [
      {
        youtubeId: 'wr1CA07EN_o',
        title: '360 plate, built from one photograph',
        note: 'Grilled octopus over fava, shot once on the terrace at night. The camera in this clip never existed: the orbit is generated from that single still, which is the test the master plate has to pass before any of the menu work starts.',
        duration: 'PT0M5S',
        uploadDate: '2026-01-14',
        ratio: '9:16',
        poster: 'mariposa/plate-360',
        posterAlt:
          'A frame from the 360 plate move: grilled octopus curled over yellow fava in a stone bowl on the terrace at night, a glass of white wine and lit planting behind it.',
      },
      {
        youtubeId: 'Ql-5EMhXTZQ',
        title: 'Restaurant showcase, from the room as it stands',
        note: 'The terrace at dusk, built out of the restaurant’s own photography and its Google Maps imagery rather than a set. Tables, decking and the olive tree in the middle are where they actually are, so a diner who has eaten there recognises the room.',
        duration: 'PT0M15S',
        uploadDate: '2026-01-20',
        ratio: '9:16',
        poster: 'mariposa/showcase',
        posterAlt:
          'A frame from the showcase: the Mariposa terrace from above at dusk, laid tables on dark decking around a mature olive tree.',
      },
    ],
  },
  {
    slug: 'ib-nl',
    title: 'One move, tulip field to orbit',
    client: 'IB-NL',
    kind: 'Client work',
    discipline: 'Brand film · Generative production',
    year: '2026',
    place: 'The Netherlands',
    featured: false,
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
    slug: 'bike-barn',
    title: 'Indian Elite Models',
    client: 'Bike Barn',
    kind: 'Client work',
    discipline: 'Hero film · Product cinematics',
    year: '2026',
    place: 'The Netherlands',
    featured: false,
    accent: 'var(--brand-magenta)',
    summary:
      'A wet cobbled street at night, with no location, no rain machine, no night permit and no rider.',
    problem:
      'A dealership wanted two hero films for their motorcycles, without getting out of the showroom. The bikes are the product; everything else in frame is set dressing, and set dressing is the part a dealership never has budget for.',
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
      { src: 'bike-barn/pov', alt: 'A rider-eye view over the handlebars and instrument pod of the Indian Elite, down a wet canal street at night with lit windows down both sides.', label: 'POV shot' },
      { src: 'bike-barn/closeup', alt: 'A close, low three-quarter view of the Indian Elite on wet cobbles at night, chrome and lamplight running along the tank and the fairing.', label: 'close up shot' },
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
    videos: [
      {
        youtubeId: 'ijdaD3ktY8E',
        title: 'Indian Elite showcase, studio cut',
        note: 'One of several films made for the dealership: a slow orbit of the Elite on a black studio floor. No studio was hired and no bike was moved. The badge, the gold pinstripe, the pannier lettering and the spoke count are the plate, held frame to frame while the light travels around it.',
        duration: 'PT0M10S',
        uploadDate: '2026-02-04',
        ratio: '16:9',
        poster: 'bike-barn/showcase-poster',
        posterAlt:
          'The green and black Indian Elite on a dark reflective studio floor, three-quarter rear view, gold pinstriping and the ELITE lettering on the pannier catching a single overhead light.',
      },
    ],
  },
  {
    slug: 'big-blue-data-academy',
    title: 'The Unconventional Social Strategy That Became Mainstream',
    client: 'Big Blue Data Academy',
    kind: 'Client work',
    discipline: 'Content system · Social campaign · Creative direction',
    year: '2026',
    place: 'Greece',
    featured: true,
    accent: 'var(--brand-magenta)',
    summary:
      'A dynamic, if unconventional, content calendar that blended pop culture with data education, and lifted the brand image with it.',
    problem:
      'Big Blue Data Academy teaches data science to career changers. The audience is on a phone, mid-scroll, and has already learned to skip anything shaped like a course advert. The ask was volume: not one film with a long approval cycle, but a run of short pieces that could go out week after week and keep working. We ran the social strategy and the paid media campaigns, from the brainstorm to the final cut.',
    idea:
      'Invert the house style. Volume and sameness normally arrive together: a house style makes the second piece cheap and the fifth piece invisible, because by then the audience has learned the shape of it. So the constraint was set the other way: every piece had to look like it came from a different production company, and the brand had to survive all of them.',
    made: [
      'Promo ads, LinkedIn and Meta posts, and ad creatives.',
      'A photoreal punk figure in a dark office, head made of a pie chart, mohawk made of bars.',
      'A 3D cartoon detective in a paper-flooded room, magnifier over a stack of reports.',
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
      { src: 'bbda/bootcamp-ad', alt: 'A frame from the AI Engineering Bootcamp advert, set in a wide cinematic register.', label: 'AI Engineering Bootcamp ad frame' },
      { src: 'bbda/info-session', alt: 'A frame from the info session promo, drawn in the flat cut-paper style of South Park.', label: 'info session promo, South Park register' },
      { src: 'bbda/carousel-simpsons', alt: 'A carousel card for LinkedIn drawn in a yellow-skinned cartoon register borrowed from The Simpsons.', label: 'carousel post, Simpsons register' },
      { src: 'bbda/post-superheroes', alt: 'A square LinkedIn post built on a superhero conceit, data roles cast as comic-book characters.', label: 'LinkedIn post, superheroes' },
      { src: 'bbda/post-viral', alt: 'The LinkedIn post that ran furthest, a sitcom-still joke card about learning data.', label: 'the post that travelled' },
      { src: 'bbda/western', alt: 'A man in a blue cowboy hat and denim shirt playing guitar in a wooden saloon under a painted Big Blue Data Academy sign, pie charts floating around him.', label: 'register four: the one frame where the mark sits inside the world', focus: '50% 22%' },
    ],
    stack: [
      { stage: 'Register list', tool: 'Fixed before any frame' },
      { stage: 'Plates', tool: 'Nano Banana Pro, separate set per register' },
      { stage: 'Motion', tool: 'Higgsfield Cinema Studio' },
      { stage: 'Mark', tool: 'Composited in the cut, never generated' },
      { stage: 'Cut', tool: 'CapCut' },
      { stage: 'Implementation', tool: 'Google Veo 3' },
      { stage: 'Creative ideation', tool: 'Canva' },
    ],
    links: [],
    genre: 'Content system and social campaign',
  },
  {
    slug: 'amino-alliance',
    title: 'Three creators who never have to be rebooked',
    client: 'Amino Alliance',
    kind: 'Client work',
    discipline: 'Synthetic UGC · Paid social · Product stills',
    year: '2025',
    featured: true,
    accent: 'var(--brand-gold)',
    summary:
      'Three creator-style video ads for paid social, each a different person in a different place, all cut from trained identities that come back next month when the offer changes.',
    problem:
      'Amino Alliance sells a supplement in a printed pouch and needed creator-style video ads for paid social. The requirement underneath that is volume and range at once. A paid test burns through creative: it wants the consultant and the runner and the man on a canal in Amsterdam saying different things to different audiences, then wants all three again next month when the offer moves. Booking three creators for that is a shoot, a schedule and a reshoot fee.',
    idea:
      'Cast once, then treat the cast as an asset. Three presenters trained from stills sheets and reused across the run, so the fifth ad costs what the first one did and the tenth is a rewrite rather than a booking. Each one is cast for a different audience and kept in a place that suits them: a consultant in her own office, a man in his fifties on a canal in the middle of Amsterdam, a runner on a park path in bare winter light. The pouch runs the other line entirely. It is a real printed object with a real mark, a product name and a block of small type down the front, and none of that can be approximated in a presenter’s hand at arm’s length in daylight.',
    made: [
      'Three creator video ads for paid social, presenter to camera, product in hand.',
      'Product frames for the still placements.',
      'Three trained presenter identities and one product plate, handed over.',
    ],
    result:
      'Delivered as creator video ads for paid social, with the trained presenters and the product plate handed over as reusable files. A new offer is a new script against the same three faces.',
    resultKind: 'Delivered',
    artefacts: [
      { label: 'Video ads', detail: 'Three creator pieces, 9:16, presenter to camera' },
      { label: 'Stills', detail: 'Product frames for still placements' },
      { label: 'Identities', detail: 'Three trained presenters, reusable across sessions' },
      { label: 'Product plate', detail: 'Master plate of the pouch, label-locked' },
    ],
    method:
      'Identity Lock for the presenters, Phantom Set for the pouch, and the two lines meet at the frame where a hand touches packaging. Casting brief first, then twenty-plus stills of one face at varied angles under even light, then a trained identity that carries across sessions without re-uploading a reference. Voice is cloned per presenter and timed to the performance, because three people who share one read are three people nobody believes.',
    gates: [
      { name: 'Label gate', test: 'Zoom to full resolution and read every word on the front of the pouch. A fail returns to the plate, never to a retouching pass.' },
      { name: 'Hand gate', test: 'Every frame where fingers touch the pouch gets frozen and checked. A bad one gets rerolled or cropped above the wrist.' },
      { name: 'Consent gate', test: 'Signed release for the voice and the likeness reference. Nothing renders until both sit in the folder.' },
      { name: 'Disclosure gate', test: 'These presenters are synthetic and the ads carry that. A creator ad that hides what it is fails here before it fails anywhere else.' },
    ],
    hero: {
      src: 'amino-alliance/presenter-01',
      alt: 'A woman in a tan blazer over a white top holding an Amino Alliance pouch up to camera in a bright office, a laptop at the edge of frame and framed artwork behind her.',
      label: 'presenter one, from the video ad',
      focus: '50% 25%',
    },
    gallery: [
      { src: 'amino-alliance/presenter-02', alt: 'A man in his fifties with grey hair and a grey beard, in a navy overcoat and a pale scarf, holding an Amino Alliance pouch to camera on an Amsterdam canal with a bridge and canal houses behind him.', label: 'presenter two, from the video ad', focus: '50% 30%' },
      { src: 'amino-alliance/presenter-03', alt: 'A man in a charcoal quarter-zip running top holding an Amino Alliance shaker, on a park path beside water under bare winter trees.', label: 'presenter three, from the video ad', focus: '50% 25%' },
      { src: 'amino-alliance/product-02', alt: 'An Amino Alliance pouch on a laboratory bench with a glowing atom symbol beside it, lit from behind.', label: 'product plate, label-locked' },
    ],
    stack: [
      { stage: 'Presenter identity', tool: 'Higgsfield Soul ID' },
      { stage: 'Identity sheet', tool: 'Nano Banana Pro, GPT Image 2' },
      { stage: 'Product plate', tool: 'GPT Image 2' },
      { stage: 'Scene plates', tool: 'Popcorn' },
      { stage: 'Motion', tool: 'Veo 3.1, Kling' },
      { stage: 'Voice', tool: 'ElevenLabs' },
      { stage: 'Cut', tool: 'CapCut' },
    ],
    links: [],
    genre: 'Synthetic UGC and paid social',
    videos: [
      {
        youtubeId: 'WJ3o7--M7f8',
        title: 'Consultant, testimonial cut',
        note: 'The office opening: a working professional, her own room, the pouch held where the label reads. Cut for the audience that wants the product explained by somebody who sounds like their colleague.',
        duration: 'PT0M15S',
        uploadDate: '2025-11-18',
        ratio: '9:16',
        poster: 'amino-alliance/presenter-01',
        posterAlt:
          'A woman in a tan blazer holding an Amino Alliance pouch to camera in a bright office.',
      },
      {
        youtubeId: '7DNBe1uYHkY',
        title: 'Amsterdam, street cut',
        note: 'The same product, a different decade and a different city. Shot to camera on a canal, handheld, so the ad reads as a person who happens to be outside rather than a set that happens to be a canal.',
        duration: 'PT0M14S',
        uploadDate: '2025-11-18',
        ratio: '9:16',
        poster: 'amino-alliance/presenter-02',
        posterAlt:
          'A man in a navy overcoat and grey scarf holding an Amino Alliance pouch to camera on an Amsterdam canal.',
      },
      {
        youtubeId: 'IDGUGwGrUCo',
        title: 'Athlete, park cut',
        note: 'The performance angle, mid-session, shaker in hand on a winter path. Same trained identity discipline, a different audience and a different ask at the end.',
        duration: 'PT0M13S',
        uploadDate: '2025-11-18',
        ratio: '9:16',
        poster: 'amino-alliance/presenter-03',
        posterAlt:
          'A man in a charcoal running top holding an Amino Alliance shaker on a park path in winter.',
      },
    ],
  },
  {
    slug: 'cocoon',
    title: 'A live grid pilot and the cyberattack against it, both made watchable',
    client: 'SEleNe CC',
    kind: 'Client work',
    discipline: 'Pilot film · Explainer · Narrative engineering · Public-sector comms',
    year: '2025',
    place: 'Horizon Europe, grant 101120221',
    featured: true,
    accent: 'var(--brand-violet)',
    summary:
      'Four films for a Horizon Europe consortium: a pilot film shot on a Greek solar park, and an attack explainer for the part of the story no camera can reach.',
    problem:
      'COCOON is a Horizon Europe project on cooperative cyber protection for modern power grids, run across a consortium. It has two halves that pull in opposite directions. One half is real and physical: a photovoltaic park in Halkidiki, a control cabin, an operator on a laptop, and the first time the Greek distribution operator supervised and controlled PV parks in real time. The other half has never happened and cannot be filmed, because it is an attack on equipment that is still running. The audience is mixed in the same way: engineers on one side, reviewers, policy people and the public on the other, all needing the same story without the vocabulary.',
    idea:
      'Film what exists and write what does not, then hold both to one visual system. The pilot film goes to the site and stays there. Objectives and milestones are set as typed cards over the array, then the film hands over to a phone, vertical, framed inside a solar cell so the shift in format reads as deliberate: the van, the drive, the gate, the contractor’s sign, the control cabin, the inverter and the logging kit, captioned a line at a time, ending on the HEDNO researcher standing in front of the rows he has just been describing. The explainer does the opposite job. Nothing in it could be shot, so the grant text and the consortium’s technical diagrams were read down into a single chain of events (entry point, lateral move, control layer, physical effect) and one diagram vocabulary was agreed before anything was drawn. Colour carries state and nothing else, so a partner can point at a frame and say which stage is wrong.',
    made: [
      'A pilot film for the Secure Energy Communities demonstrator, shot at the photovoltaic park in Halkidiki with the pilot leader.',
      'A second pilot film and a project promo.',
      'A vector attack explainer that walks an intrusion through a grid, one hop at a time. It holds one visual system from the first frame to the last, so a viewer who does not know what a substation is can still follow which box just went dark and why.',
    ],
    result:
      'Delivered to SEleNe CC for the COCOON consortium. The pilot film carries the two milestones the project needed on record: real-time supervision and control of PV parks by HEDNO for the first time, and the first execution of Ancillary Services in a real-world environment in Greece. The project is publicly documented under Horizon Europe grant agreement 101120221.',
    resultKind: 'Delivered',
    artefacts: [
      { label: 'Films', detail: 'Promo, two pilot films, one explainer' },
      { label: 'Site cut', detail: 'Vertical park tour, captioned, framed in a solar cell' },
      { label: 'Storyboard', detail: 'One event chain, written then boarded by hand' },
      { label: 'Diagram system', detail: 'One vocabulary across four pieces, colour as state' },
    ],
    method:
      'This one ran on the writing. On the pilot film the constraint is the opposite of the usual one: the footage is real and the words have to survive review by the people who ran the trial, so every objective and milestone card is the consortium’s own language, set on screen a clause at a time rather than paraphrased. On the explainer, generation covered environments, establishing shots and the abstracted grid, and every technical claim went back to the consortium before it went into a render.',
    gates: [
      { name: 'Claim gate', test: 'Nothing appears on screen that the grant text does not support. On the pilot film that extends to the milestones: a first is only called a first if the consortium will sign the sentence.' },
      { name: 'Vocabulary gate', test: 'One diagram system across all four pieces. A new shape means a new meaning, or it does not get drawn.' },
      { name: 'Site gate', test: 'Nothing at the park is re-staged for the camera. What the phone sees is what the engineers were doing.' },
    ],
    hero: {
      src: 'selene-cc/pilot-poster',
      alt: 'A frame from the pilot film: a technician in a hard hat and hi-vis vest working along a row of photovoltaic panels at the Halkidiki site, with the Pilot Objectives card typed over the lower half of the picture.',
      label: 'pilot film, objectives card',
      // The card is set left, so a centred crop cuts the words off it.
      focus: '25% 50%',
    },
    gallery: [
      { src: 'selene-cc/explainer-spoof', alt: 'An explainer frame headed DNS Spoofing, with two paragraphs setting out how an attacker redirects an operator to a fraudulent site.', label: 'the scenario, stated before it is drawn' },
      { src: 'selene-cc/explainer-chain', alt: 'The full attack diagram: a hacker icon above a DNS server, a dashed line from an operator into the server, a red path branching to a fake website and a green path to the real one.', label: 'one vocabulary, colour carries state' },
      { src: 'selene-cc/explainer-title', alt: 'The title card of the vector attack explainer, reading Attack Vector Deployment in cyan display type over a dark network mesh, with the COCOON mark above it.', label: 'explainer, title card' },
    ],
    stack: [
      { stage: 'Source', tool: 'Grant text, consortium diagrams, site footage' },
      { stage: 'Storyboard', tool: 'Written, then boarded by hand' },
      { stage: 'Frames', tool: 'Nano Banana Pro' },
      { stage: 'Motion and assembly', tool: 'Higgsfield, CapCut' },
    ],
    links: [{ label: 'cyber-cocoon.eu', href: 'https://cyber-cocoon.eu/' }],
    genre: 'Pilot film and explainer',
    videos: [
      {
        youtubeId: 'xPn8yF-_3KY',
        title: 'Secure Energy Communities — pilot film',
        note: 'The objectives and the two milestones, set as cards over the array, then a vertical site tour framed inside a solar cell: the van, the drive to Halkidiki, the gate, the control cabin, the inverter and the logging kit, closing on the HEDNO researcher in front of the rows. The one film on this engagement built from footage rather than from the grant document.',
        duration: 'PT1M48S',
        uploadDate: '2025-09-03',
        ratio: '16:9',
        poster: 'selene-cc/pilot-poster',
        posterAlt:
          'A technician in hi-vis working along a row of photovoltaic panels, with the Pilot Objectives card typed over the picture.',
      },
    ],
  },

  {
    slug: 'jarfis-property-group',
    title: 'A spokesperson who sounds like the person on the call',
    client: 'Jarfis Property Group',
    kind: 'Client work',
    discipline: 'Synthetic UGC · Voice cloning · Property film',
    year: '2026',
    place: 'Bali and the Netherlands',
    featured: false,
    accent: 'var(--brand-cyan)',
    summary:
      'A cloned-voice spokesperson for Instagram and a generative tour of two real listings, both reconstructed from the stills already on the client\u2019s site.',
    problem:
      'Jarfis Property Group sells Bali real estate to Dutch and international investors. They wanted social-first UGC for Instagram, plus a longer narrative piece that could sit on the homepage and carry the pitch on its own.',
    idea:
      'Rebuild the villas from the pictures that already exist, and keep the presenter the same person off screen as on. The villas are in Bali, the company is in the Netherlands, and there was no budget to put a camera in either, so every frame had to be reconstructed from the stills already sitting on their site. The voice matters for the same reason: an investor who watches a clip today speaks to that same person on a call next week, so a stock read would break the moment the phone rang.',
    made: [
      'Vertical UGC spots with a presenter talking straight to the viewer.',
      'One short generative film cut around two real listed properties.',
      'A cloned voice, trained on the presenter\u2019s own recordings and used across all of it.',
    ],
    result:
      'Used across their international client base and as ad creative, with the spots carrying the offer on paid placements.',
    resultKind: 'Delivered',
    artefacts: [
      { label: 'Films', detail: 'Vertical UGC spots, presenter to camera' },
      { label: 'Property film', detail: 'One narrative cut across two listings' },
      { label: 'Voice', detail: 'Cloned from the presenter\u2019s own audio' },
    ],
    method:
      'Everything starts from the source images. They are cleaned and upscaled first, then image-to-video is driven with camera moves that respect the geometry of each room, so the walls stay where they are and the viewer reads one continuous space rather than a series of guesses. The voice model is trained on the presenter\u2019s own audio, timed to the performance and lip-synced. The final grade is matched to the light in the original photography, because a room that is graded away from its own stills stops being that room.',
    gates: [
      { name: 'Geometry gate', test: 'Walls, openings and floor lines must hold across a move. A room that changes shape between two seconds of footage goes back to the source still.' },
      { name: 'Voice gate', test: 'The delivery on screen has to match the person who picks up the phone. Trained on their own recordings, never on a stock read.' },
      { name: 'Grade gate', test: 'The final grade matches the light in the original photography, so the film and the listing pictures read as the same property.' },
    ],
    hero: {
      src: 'jarfis/spokesperson',
      alt: 'The open-plan living space of a Bali villa: polished floor, a low sofa under a ceiling fan, pendant lights over a kitchen counter and a green rug down the middle.',
      label: 'frame from the generated tour',
    },
    gallery: [
      { src: 'jarfis/tour-frame', alt: 'The presenter standing in front of a villa and its pool in soft daylight, a phone on a tripod set up facing them.', label: 'the spokesperson, on location', focus: '50% 25%' },
    ],
    stack: [
      { stage: 'Voice and motion', tool: 'ElevenLabs, Higgsfield Cinema Studio, Seedance 2' },
      { stage: 'Cut', tool: 'CapCut, Canva' },
    ],
    links: [],
    genre: 'Synthetic UGC and property film',
    videos: [
      {
        youtubeId: 'xDGt2MejwJA',
        title: 'Spokesperson ad, vertical cut',
        note: 'The presenter to camera at a listed villa, phone on a tripod in shot, cloned voice on the read. The villa behind him is reconstructed from the stills already on the client’s own site, which is why the grade matches the listing photography rather than sitting a stop off it.',
        duration: 'PT0M10S',
        uploadDate: '2026-01-09',
        ratio: '9:16',
        poster: 'jarfis/ugc-poster',
        posterAlt:
          'The presenter in a cream linen shirt speaking to camera beside a villa pool, a phone on a tripod set up facing him and planting up the wall behind.',
      },
    ],
  },

  {
    slug: 'feral',
    title: 'A can that walks off the billboard',
    client: 'FERAL',
    kind: 'Concept project',
    discipline: 'Anamorphic billboard · Product shoot · Synthetic UGC',
    year: '2026',
    featured: true,
    accent: 'var(--brand-magenta)',
    summary:
      'An invented energy drink, given the product shoot and the out-of-home spot a real launch would buy. Nobody commissioned it, which is the point: the label had nowhere to hide.',
    problem:
      'Product photography is where generative work gets caught. Not on the lighting, which models are good at, but on the four square centimetres of printed label a buyer holds up to their face. The FERAL can is the hard version of that: a halftone build with a magenta offset behind green type, the wordmark repeated down the body, and a small black box under it reading YUZU STATIC. Getting that right once is luck. Getting it right across five sets, a night city, a creator’s hand and an animated billboard is a pipeline.',
    idea:
      'Build the can once and never rebuild it. One master plate carries the label, the finish and the proportions, and every later frame is generated from that file rather than from a fresh prompt, so the type cannot drift when the light and the surface change underneath it. Then take the hardest possible delivery for it: an anamorphic billboard where the can breaks the frame of the board it is printed on, over a wet night city, with liquid and cut fruit crossing the edge. A 3D break-out ad is a format that punishes any wobble in the object, because the viewer is being asked to read the same can as flat artwork and as a solid thing in the same second.',
    made: [
      'A master plate of the can, label-locked, handed over as a reusable file.',
      'Five product sets from that plate: water, smoke, school lockers, an ice tray and a square crop.',
      'An anamorphic billboard spot for out-of-home and social.',
      'Creator frames with one trained face across a corner shop, a car park, a night tram and a bathroom mirror.',
    ],
    result:
      'Built as spec. Nobody paid for it and the brand does not exist. It sits here because it states its own test: read every printed word on the can at full resolution, in each of five sets and in a billboard that is pretending to be a physical object.',
    resultKind: 'Intended',
    artefacts: [
      { label: 'Film', detail: 'Anamorphic billboard spot' },
      { label: 'Master plate', detail: 'The can alone, label-locked' },
      { label: 'Product set', detail: 'Five sets from one plate' },
      { label: 'Creator set', detail: 'One trained face across four rooms' },
    ],
    method:
      'Phantom Set for the can and Identity Lock for the creator, run as two separate lines that meet only where a hand touches the product. The plate is made first and nothing is generated from a text description of the can after that. The billboard is built the other way round: the board is set as a flat surface in a night street, the can is composited as the object breaking out of it, and the lighting on the street has to agree with the lighting on the can or the illusion dies in the first second.',
    gates: [
      { name: 'Label gate', test: 'Zoom to full resolution and read every printed word: the wordmark, the halftone offset behind it and the YUZU STATIC box. A fail returns to the plate, never to a retouching tool.' },
      { name: 'Break-out gate', test: 'The part of the can that leaves the board has to cast and receive light from the street, not from the artwork. If it reads as a sticker, the frame is dead.' },
      { name: 'Drift gate', test: 'Stack the five sets and flick through them. Proportions, finish and type position have to sit still while everything around them changes.' },
    ],
    hero: {
      src: 'spec/feral/billboard',
      alt: 'A night-city billboard for FERAL Yuzu Static: the can breaking out of the board in front of the artwork, lime slices and green liquid crossing the frame, graffiti reading STAY WILD on the hoarding below and lit towers behind.',
      label: 'the billboard spot, key frame',
    },
    gallery: [
      { src: 'spec/feral/product-05', alt: 'A FERAL Yuzu Static can standing in shallow water, beaded with condensation, magenta and green vapour behind it and a splash around the base.', label: 'hero, water set' },
      { src: 'spec/feral/product-01', alt: 'The same FERAL can on a dark reflective surface with green smoke behind it and a ripple around the base.', label: 'same plate, smoke set' },
      { src: 'spec/feral/product-02', alt: 'The same FERAL can on cracked black floor tiles in a corridor of school lockers, lit hard from one side, a cigarette and a bottle cap on the floor beside it.', label: 'same plate, lockers' },
      { src: 'spec/feral/product-03', alt: 'The same FERAL can angled in a metal tray of crushed ice with dried lemon slices around it.', label: 'same plate, ice tray' },
      { src: 'spec/feral/ugc-01', alt: 'A man with bleached green hair in a black tracksuit reading the side of a FERAL can in front of a lit shop fridge, carrier bags in his other hand.', label: 'creator, corner shop' },
      { src: 'spec/feral/ugc-04', alt: 'The same man holding a FERAL can up in a bathroom mirror selfie, flash on, pink strip light above the cracked mirror.', label: 'creator, mirror' },
    ],
    stack: [
      { stage: 'Master plate', tool: 'Nano Banana Pro' },
      { stage: 'Sets', tool: 'Nano Banana 2, image to image from the plate' },
      { stage: 'Creator identity', tool: 'Higgsfield Soul ID' },
      { stage: 'Motion', tool: 'Higgsfield Cinema Studio' },
      { stage: 'Cut', tool: 'CapCut' },
    ],
    links: [{ label: 'The full FERAL shelf', href: '/concept-projects#feral' }],
    genre: 'Product film and out-of-home',
    videos: [
      {
        youtubeId: '5VgtoylYaFw',
        title: 'FERAL — anamorphic billboard',
        note: 'The can leaving the board over a wet night street, liquid and cut fruit crossing the frame. Built from the same locked plate as the five product sets, which is the only reason the wordmark survives being read as artwork and as a solid object in the same shot.',
        duration: 'PT0M8S',
        uploadDate: '2026-02-11',
        ratio: '16:9',
        poster: 'spec/feral/billboard',
        posterAlt:
          'The FERAL Yuzu Static can breaking out of a lit billboard over a wet night street.',
      },
    ],
  },

  {
    slug: 'mars-drop',
    title: 'Two men on Mars, working out that they are a demo',
    client: 'TaleCrafters',
    kind: 'Concept project',
    discipline: 'Animated short · Showrunner pipeline · Voice and performance',
    year: '2026',
    featured: true,
    accent: 'var(--brand-gold)',
    summary:
      'A spec animated two-hander built to test whether an episodic AI pipeline can carry a scene on dialogue alone, with no action to hide behind.',
    problem:
      'Generative video is judged on spectacle because spectacle is what it does easily. A dragon, a chase, a city from orbit: all of that hides the thing that actually breaks, which is two people standing still and talking. Timing, listening, the beat before a line lands. So the brief was written to remove every escape route. Two characters, one location, no action, one hundred and seven seconds, and a joke that only works if the performances are alive.',
    idea:
      'Write a scene about the pipeline, then make the pipeline perform it. Two stranded figures on a Mars colony, both convinced somebody teleported them there by mistake, slowly working out that they are inside a demonstration and that the person running it is watching. The comedy comes from them addressing the operator directly and asking for a better set, snappier dialogue and an actual plot, which is the honest note to end a spec piece on. Because the joke is at the pipeline’s expense, every weakness in the pipeline reads as the bit rather than as a fault, and that freed the work to be judged on the only thing left: whether the two of them are actually listening to each other.',
    made: [
      'A one hundred and seven second animated two-hander, written, cast and cut.',
      'A four-beat structure sheet, published with the film.',
      'Two held character designs across a wide, two singles and a return to the wide.',
    ],
    result:
      'Built as spec. Nobody commissioned it and no brand is attached. It is published as the third of our filmmaking workflows, with the beats and the stack written up beside it.',
    resultKind: 'Intended',
    artefacts: [
      { label: 'Film', detail: 'Animated short, 1:47, 16:9' },
      { label: 'Structure sheet', detail: 'Four beats, published' },
      { label: 'Character designs', detail: 'Two, held across every shot size' },
      { label: 'Voice', detail: 'Two performances, timed to the cut' },
    ],
    method:
      'Showrunner carries the episodic scene and the character continuity; the set frames and the establishing wides come out of Nano Banana 2 and ChatGPT Image 2; Higgsfield handles the motion passes; ElevenLabs carries both voices. The scene was written first, in full, before a frame existed, and the beat sheet was fixed before anything rendered, because a dialogue two-hander assembled from whatever the model produced is a montage with subtitles rather than a scene.',
    gates: [
      { name: 'Listening gate', test: 'Watch the character who is not speaking. If they are idling rather than reacting, the beat goes back regardless of how the line reads.' },
      { name: 'Design gate', test: 'Both figures have to survive the cut from a wide two-shot to a single without their proportions changing. The jaw is where a fail shows first.' },
      { name: 'Parody gate', test: 'The two figures are caricatures of public figures and the piece is spec comedy about our own tooling. No brand, product or endorsement is implied, and nothing either of them says is presented as something a real person said.' },
    ],
    hero: {
      src: 'films/mars-drop/md-poster',
      alt: 'A wide animated frame of a Mars colony: two figures in front of a landed rocket and a domed habitat, orange rock formations behind them and a blue sky above.',
      label: 'the wide the film opens and closes on',
    },
    gallery: [
      { src: 'films/mars-drop/md-hero', alt: 'An animated frame of the astronaut in a blue flight suit beside the booster, arms out, mid-line.', label: 'single, the realisation' },
      { src: 'films/mars-drop/md-b-natural', alt: 'An animated frame of the chef in a black suit and tie in front of a water tower on the colony, one hand raised.', label: 'single, act natural' },
      { src: 'films/mars-drop/md-d-address', alt: 'An animated frame of the chef, hands on hips, delivering the line to camera with the subtitle reading Creativity on pause, clearly.', label: 'the note to the operator' },
      { src: 'films/mars-drop/md-strip', alt: 'A four frame contact strip from the film: the wide two-shot, the chef mid-line, the astronaut at the booster and the chef addressing camera.', label: 'contact strip' },
    ],
    stack: [
      { stage: 'Scene', tool: 'Written first, in full' },
      { stage: 'Episodic engine', tool: 'Showrunner' },
      { stage: 'Set frames', tool: 'Nano Banana 2, ChatGPT Image 2' },
      { stage: 'Motion', tool: 'Higgsfield' },
      { stage: 'Voice', tool: 'ElevenLabs' },
      { stage: 'Cut', tool: 'CapCut' },
    ],
    links: [{ label: 'The full process sheet', href: '/films/mars-drop' }],
    genre: 'Animated short',
    videos: [
      {
        youtubeId: 'SjxaPMoyBSo',
        title: 'Mars Drop — the film',
        note: 'One hundred and seven seconds, two characters, one location, no action. Watch the one who is not talking.',
        duration: 'PT1M47S',
        uploadDate: '2026-02-26',
        ratio: '16:9',
        poster: 'films/mars-drop/md-poster',
        posterAlt:
          'The wide Mars colony frame: two figures in front of a landed rocket and a domed habitat.',
      },
    ],
  },
];

export const featuredWork = work.filter((w) => w.featured);
export const getCase = (slug: string) => work.find((w) => w.slug === slug);
