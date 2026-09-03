// Every editable box on the site, declared once.
//
// This file is the contract between the Studio and the pages. Each entry
// produces a field an editor can type into, a typed property the page reads,
// and the sentence that renders when nobody has typed anything. Because all
// three come from the same declaration, a field cannot exist in the Studio
// that no page reads, and a page cannot read a field the Studio does not
// offer.
//
// The `fallback` on every field is the copy that is live today, not filler.
// That is what makes this safe to ship against an empty dataset: with nothing
// authored, the site renders byte for byte what it rendered before.
//
// A fallback that is computed (counts, mostly) says so in its description.
// Those numbers track the repo — add a brand and the sentence keeps up — and
// typing over one in the Studio trades that for a number somebody now has to
// remember to update. That is a fair trade to offer, as long as it is stated.

import { resources, getResource } from '@/data/resources';
import { terms } from '@/data/glossary';
import { captures } from '@/data/captures';
import { films } from '@/data/films';
import { conceptBrands } from '@/data/concept';
import { work, featuredWork } from '@/data/work';
import { site } from '@/lib/site';
import type { FieldDef, StringField, TextField, PairsField, Registry, Pair } from './types';

/** Marks a fallback whose value is counted from the repo rather than typed. */
const DERIVED = 'Counted from the site data, so it keeps itself honest. Typing here freezes the number.';

const str = (title: string, fallback: string, description?: string): StringField => ({
  type: 'string',
  title,
  fallback,
  description,
});

const text = (title: string, fallback: string, rows = 4, description?: string): TextField => ({
  type: 'text',
  title,
  rows,
  fallback,
  description,
});

const pairs = (title: string, fallback: readonly Pair[], description?: string): PairsField => ({
  type: 'pairs',
  title,
  fallback,
  description,
});

/** Generic pass-through: the section keeps the exact shape of its fields, which
 *  is what lets a page read `copy.header.meta` as rows and `.lede` as a string. */
const section = <F extends Record<string, FieldDef>>(
  title: string,
  fields: F,
  description?: string
) => ({ title, description, fields });

/**
 * The header block every interior page shares: a mono eyebrow, a two-part
 * headline where the second half takes the accent colour, a lede and the
 * four-cell meta strip underneath.
 *
 * All five boxes exist on every page, including the pages that use only three
 * of them. An empty value renders nothing — the header drops the accent line,
 * the lede and the meta strip when they are blank — so an editor who wants a
 * lede on a page that has never had one can just type it.
 */
function header(o: {
  eyebrow: string;
  title: string;
  accentWord?: string;
  lede?: string;
  ledeNote?: string;
  meta?: readonly Pair[];
  metaNote?: string;
}) {
  return section(
    'Header',
    {
      eyebrow: str('Eyebrow', o.eyebrow, 'The small mono label above the headline.'),
      title: str('Headline', o.title, 'The first line, in white.'),
      accentWord: str(
        'Headline, accented line',
        o.accentWord ?? '',
        'The second line, in the page accent colour. Leave empty for a one-line headline.'
      ),
      lede: text('Lede', o.lede ?? '', 5, o.ledeNote ?? 'The paragraph under the headline. Leave empty to drop it.'),
      meta: pairs(
        'Meta strip',
        o.meta ?? [],
        o.metaNote ?? 'The cells under the lede. Four fit on a row; more will wrap. Leave empty to drop the strip.'
      ),
    },
    'The top of the page.'
  );
}

/** The banded sections of the front page, which share a shape of their own. */
function homeSection(o: {
  title: string;
  flag: string;
  heading: string;
  accentWord: string;
  lede?: string;
  ledeNote?: string;
}) {
  return section(o.title, {
    flag: str('Section number and label', o.flag, 'The mono line in the top corner, e.g. "004 / WHAT WE WEAPONISE".'),
    heading: str('Heading', o.heading, 'The first line of the big heading.'),
    accentWord: str('Heading, accented line', o.accentWord, 'The second line, in the section colour.'),
    lede: text('Lede', o.lede ?? '', 5, o.ledeNote ?? 'The paragraph under the heading. Leave empty to drop it.'),
  });
}

export const copyRegistry = {
  // ---------------------------------------------------------------- home ---
  home: {
    title: 'Home',
    path: '/',
    order: 10,
    sections: {
      // Only the flag. This section's headline is set as three lines with a
      // colour break inside a word ("UN|HOLY"), which is drawn type rather than
      // a sentence: arbitrary text cannot render through it, so offering a box
      // that silently mangles the heading would be worse than offering none.
      hero: section('Hero', {
        eyebrow: str('Eyebrow', 'TaleCrafters Studio', 'The small mono label above the headline.'),
        line1: str('Headline line 1', 'WE MANUFACTURE'),
        line1Accent: str('Line 1, coloured part', 'MANUFACTURE', 'A word or phrase from the line above. It takes the accent colour wherever it falls. Leave empty for a line with no colour.'),
        line2: str('Headline line 2', 'ATTENTION WITH'),
        line2Accent: str('Line 2, coloured part', 'ATTENTION'),
        line3: str('Headline line 3', 'STORIES THAT IMMERSE'),
        line3Accent: str('Line 3, coloured part', 'IMMERSE'),
        line4: str('Headline line 4', 'AND CONTENT'),
        line4Accent: str('Line 4, coloured part', ''),
        line5: str('Headline line 5', 'THAT CONVERTS'),
        line5Accent: str('Line 5, coloured part', 'CONVERTS'),
        strapline: str('Strapline', 'Storytellers Drunk on Synthetic Media.', 'The gold line under the headline.'),
        terminal: str('Terminal line', "// Not your grandma's creative agency.", 'Typed out in the mono box under the strapline.'),
      }, 'The first screen. Five headline lines, each with one coloured part.'),
      studio: section('The Studio', {
        flag: str('Section number and label', '001 / THE STUDIO', 'The mono line in the top corner. The headline below it is drawn type and is set in code.'),
        body1: text('First paragraph', 'We’re the unholy offspring of a film studio and a technology lab. Part strategists, part visual anarchists, fully committed to making your competition wonder what just happened.', 4),
        body2: text('Second paragraph', 'We designed a system that combines human taste with machine velocity. The creative instincts that make stories resonate, accelerated by technology that refuses to sleep.', 4),
      }),
      universe: homeSection({
        title: 'The Divisions',
        flag: '002 / THE DIVISIONS',
        heading: 'THREE ARMS. ONE',
        accentWord: 'STUDIO.',
        lede: 'Most studios describe the technology they used to make a film. We sell the film and the machinery, and we keep a third arm for the work nobody commissions.',
        ledeNote: 'Plain text. The emphasis on "and" is applied by the page, not typed here.',
      }),
      philosophy: homeSection({
        title: 'Philosophy',
        flag: '003 / PHILOSOPHY',
        heading: 'THE NON-',
        accentWord: 'NEGOTIABLES',
      }),
      services: homeSection({
        title: 'What We Weaponise',
        flag: '004 / WHAT WE WEAPONISE',
        heading: 'OUR',
        accentWord: 'ARSENAL',
        lede: 'Six groups, thirty services. The group names are ours and they stay. The line underneath each one is deliberately boring, because the person forwarding this page to a finance director needs a phrase that survives the forward.',
      }),
      selectedDamage: homeSection({
        title: 'Selected Damage',
        flag: '005 / SELECTED DAMAGE',
        heading: 'SELECTED',
        accentWord: 'DAMAGE',
        lede: `${['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six'][featuredWork.length] ?? featuredWork.length} engagements: a restaurant that had never been photographed, a consultancy that needed to say “global” without saying it, a data school that needed seven adverts that share no visual language, and a Horizon Europe consortium whose subject could not be filmed. Each one carries the problem, the idea, what we made, what happened and the files the client kept.`,
        ledeNote: `The opening number counts the cases flagged as featured (currently ${featuredWork.length} of ${work.length}). ${DERIVED}`,
      }),
      process: homeSection({
        title: 'How We Operate',
        flag: '006 / HOW WE OPERATE',
        heading: 'THE ANTI-',
        accentWord: 'PROCESS',
      }),
      pricing: homeSection({
        title: 'Packages',
        flag: '007 / PACKAGES',
        heading: 'PICK YOUR',
        accentWord: 'PLOT',
      }),
      blog: homeSection({
        title: 'The Blog',
        flag: '008 / THE BLOG',
        heading: 'THOUGHTS,',
        accentWord: 'UNFILTERED',
        lede: 'Hot takes on creativity, technology, and why most brands are terrified of being interesting.',
      }),
      contact: homeSection({
        title: 'Start a Conspiracy',
        flag: '009 / START A CONSPIRACY',
        heading: 'LET’S',
        accentWord: 'CONSPIRE',
      }),
      clients: section('Trusted by', {
        eyebrow: str('Eyebrow', 'Trusted By'),
        heading: str('Heading', 'The brands that get it.'),
        headingAccent: str('Heading, coloured part', 'get it', 'Printed in magenta italic wherever it falls in the heading.'),
      }),
      cta: section('Closing call to action', {
        heading: str('Heading', 'YOUR', 'The first line of the closing heading.'),
        accentWord: str('Heading, accented line', 'MOVE.', 'The second line, in magenta.'),
      }),
    },
  },

  // ------------------------------------------------------ shared sections ---
  filmsSection: {
    title: 'AI Filmmaking Workflows (section)',
    path: '/armoury',
    order: 20,
    sections: {
      main: section('Section', {
          eyebrow: str('Eyebrow', 'AI FILMMAKING WORKFLOWS'),
          heading: str('Heading', 'THE ORIGINALS,'),
          accentWord: str('Heading, accented line', 'PUBLISHED WITH THEIR PROCESS'),
          lede: text(
            'Lede',
            'Written, designed, directed and cut inside a generative pipeline. The films are here and so is the working behind each one: every generation block, the prompt as it was written, and the locks that stopped the world drifting between shots.',
            5
          ),
        },
        'The originals, as they appear inside the Armoury page.'
      ),
    },
  },

  footer: {
    title: 'Footer',
    path: '/',
    order: 25,
    sections: {
      main: section('Footer', {
        strapline: str('Strapline', 'STORIES ON STEROIDS', 'The cyan mono line under the wordmark.'),
        description: text(
          'Description',
          'TaleCrafters is a London-based synthetic media and creative systems studio. We produce generative films, campaigns and visual worlds, build the automated creative systems that make and distribute them, and develop our own original IP.',
          6,
          'What the studio is, in the words a search engine and an answer engine classify from. The footer is on every page, so this paragraph is too. The meta description and the Organization node are separate and are not changed by editing this.'
        ),
        descriptionAccent: str(
          'Description, emphasised phrase',
          'synthetic media and creative systems studio',
          'Set in white inside the paragraph above. It has to appear in that paragraph word for word, or nothing is emphasised.'
        ),
        signoff: str('Sign-off', 'The unholy offspring of a film studio and a technology lab.', 'The display line above the copyright.'),
        hiredForLabel: str('Services label', 'WHAT WE ARE HIRED FOR', 'Above the row of service links.'),
        rights: str('Copyright line', 'All rights reserved. We own our chaos.', 'Printed after the year.'),
      }),
    },
  },

  privacy: {
    title: 'Privacy policy',
    path: '/privacy',
    order: 200,
    sections: {
      header: section('Header', {
        title: str('Title', 'Privacy Policy'),
      }),
    },
  },

  terms: {
    title: 'Terms of service',
    path: '/terms',
    order: 210,
    sections: {
      header: section('Header', {
        title: str('Title', 'Terms of Service'),
      }),
    },
  },

  // --------------------------------------------------------------- pages ---
  work: {
    title: 'Selected Damage',
    path: '/work',
    order: 30,
    sections: {
      header: header({
        eyebrow: '005 / SELECTED DAMAGE',
        title: 'SELECTED',
        accentWord: 'DAMAGE',
        lede: `${work.length} engagements, written the sober way. Every one carries the problem it started from, the idea that solved it, what we actually made, what happened, and the files the client kept. If a claim here can be checked, we have written it so it can be.`,
        meta: [
          { label: 'Engagements', value: `${work.length} delivered` },
          { label: 'Sectors', value: 'Hospitality, consulting, motorcycles, education, supplements, energy, property' },
          { label: 'Disciplines', value: 'Film, websites, content systems, synthetic UGC' },
          { label: 'Years', value: '2025 – 2026' },
        ],
        metaNote: `The engagement count is counted from the case studies (currently ${work.length}). ${DERIVED}`,
      }),
      alsoWorthYourTime: section('Also worth your time', { eyebrow: str('Eyebrow', 'ALSO WORTH YOUR TIME') }),
    },
  },

  conceptProjects: {
    title: 'Concept Projects',
    path: '/concept-projects',
    order: 40,
    sections: {
      header: header({
        eyebrow: 'CONCEPT PROJECTS',
        title: 'NOBODY',
        accentWord: 'ASKED FOR THIS',
        lede: `${['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'][conceptBrands.length] ?? conceptBrands.length} brands that do not exist, ${conceptBrands.reduce((n, b) => n + b.shots.length, 0)} frames, none of it commissioned and none of it paid for. Each set was built to prove one thing, and each entry says which thing, because a fake brand only earns a page if it states its test.`,
        ledeNote: `Both numbers are counted from the brands and their frames (currently ${conceptBrands.length} and ${conceptBrands.reduce((n, b) => n + b.shots.length, 0)}). ${DERIVED}`,
        meta: [
          { label: 'Brands', value: `${conceptBrands.length}, all invented` },
          { label: 'Frames', value: `${conceptBrands.reduce((n, b) => n + b.shots.length, 0)}, none commissioned` },
          { label: 'Purpose', value: 'One stated control per set' },
          { label: 'Pipelines', value: 'Phantom Set, Identity Lock' },
        ],
        metaNote: `Brands and frames are counted. ${DERIVED}`,
      }),
      questions: section('The obvious questions', { eyebrow: str('Eyebrow', 'THE OBVIOUS QUESTIONS') }),
    },
  },

  captures: {
    title: 'Photoreal Captures',
    path: '/captures',
    order: 50,
    sections: {
      header: header({
        eyebrow: 'PHOTOREAL CAPTURES',
        title: 'EIGHT FRAMES,',
        accentWord: 'EIGHT HARD PROBLEMS',
        lede: 'A gallery of pretty faces proves nothing, because a pretty face at rest is the easiest thing these models make. Every frame here was kept because it is hard in a specific way, and each one says which way. All of them are generated, and all of them say so.',
        meta: [
          { label: 'Frames', value: `${captures.length} generated` },
          { label: 'Labelled', value: 'Generated, every one' },
          { label: 'Kept for', value: 'The problem each one breaks' },
          { label: 'Registers', value: 'Documentary through to studio' },
        ],
        metaNote: `The frame count is counted from the captures (currently ${captures.length}). ${DERIVED}`,
      }),
    },
  },

  films: {
    title: 'AI Filmmaking Workflows (page)',
    path: '/films',
    order: 60,
    sections: {
      header: header({
        eyebrow: 'AI FILMMAKING WORKFLOWS',
        title: 'THE ORIGINALS,',
        accentWord: 'PUBLISHED IN FULL',
        lede: 'Three original shorts, written, designed, directed and cut inside a generative pipeline. Two are built shot by shot out of a video model; the third is built scene by scene out of an episodic engine, to find out what that trade actually costs. The films are here and so is the working behind each one: every generation block, the prompt as it was written, the design references, and the locks that stopped the world drifting between shots.',
        meta: [
          { label: 'Films', value: `${films.length} originals` },
          { label: 'Published', value: 'Beats, prompts and locks per film' },
          { label: 'Engines', value: 'Seedance 2.0, Showrunner' },
          { label: 'Rights', value: 'Original characters and worlds' },
        ],
        metaNote: `The film count is counted (currently ${films.length}). ${DERIVED}`,
      }),
    },
  },

  armoury: {
    title: 'The Armoury',
    path: '/armoury',
    order: 70,
    sections: {
      header: header({
        eyebrow: 'THE ARMOURY',
        title: 'TAKE IT.',
        accentWord: 'NO EMAIL GATE.',
        lede: 'The templates, checklists and reference sheets we actually use, published in full and downloadable as PDFs. No form, no download wall, no drip sequence waiting on the other side. Use them commercially, change them, put your own name on the version you end up with.',
        meta: [
          { label: 'Resources', value: `${resources.length} and counting` },
          { label: 'Gate', value: 'None' },
          { label: 'Licence', value: 'Use it, commercially' },
          { label: 'Cost', value: 'Nothing' },
        ],
        metaNote: `The resource count is counted (currently ${resources.length}). ${DERIVED}`,
      }),
      alsoFree: section('Also free', { eyebrow: str('Eyebrow', 'ALSO FREE') }),
      questions: section('The obvious questions', { eyebrow: str('Eyebrow', 'THE OBVIOUS QUESTIONS') }),
    },
  },

  cameraMovements: {
    title: 'Armoury · 38 Camera Movements',
    path: '/armoury/camera-movements',
    order: 71,
    sections: {
      header: header({
        eyebrow: 'FREE RESOURCE 01 · THE ARMOURY',
        title: '38 CAMERA',
        accentWord: 'MOVEMENTS',
        lede: getResource('camera-movements')?.blurb ?? '',
        ledeNote: 'Defaults to the blurb written on the resource itself, so the Armoury card and this page say the same thing.',
        meta: [
          { label: 'Moves', value: '38' },
          { label: 'Families', value: '7' },
          { label: 'Each entry', value: 'Direction + working prompt' },
          { label: 'Gate', value: 'None. Take it.' },
        ],
      }),
      howToUseIt: {
        title: 'How to use it',
        fields: {
          label: str('Label', 'HOW TO USE IT'),
          body: text(
            'Body',
            'Models trained on film respond to film language. Put the move first, in camera-department vocabulary, in its own sentence. Then the subject. Then one key light direction. Mood adjectives go last, or not at all: “make it cinematic” is the single most reliable way to lose control of a shot.',
            6
          ),
        },
      },
    },
  },

  animationPrompting: {
    title: 'Armoury · Prompting by Animation Style',
    path: '/armoury/animation-prompting',
    order: 72,
    sections: {
      header: header({
        eyebrow: 'FREE RESOURCE 02 · THE ARMOURY',
        title: 'PROMPTING BY',
        accentWord: 'ANIMATION STYLE',
        lede: getResource('animation-prompting')?.blurb ?? '',
        ledeNote: 'Defaults to the blurb written on the resource itself, so the Armoury card and this page say the same thing.',
        meta: [
          { label: 'Styles', value: '12' },
          { label: 'Each entry', value: 'Scaffold, keywords, failure, example' },
          { label: 'The rule', value: 'Name the absence, not the mood' },
          { label: 'Gate', value: 'None. Take it.' },
        ],
      }),
      theOneRule: {
        title: 'The one rule',
        fields: {
          label: str('Label', 'THE ONE RULE'),
          body: text(
            'Body',
            'A style name is a request. A list of artefacts is an instruction. Every entry below is built the same way (technique, surface, absence, subject) because the thing that produces a style reliably is naming what must not be in the frame.',
            6,
            'Plain text. The emphasis on "not" is applied by the page.'
          ),
        },
      },
    },
  },

  pipelines: {
    title: 'GenAI Workflows',
    path: '/pipelines',
    order: 80,
    sections: {
      header: header({
        eyebrow: 'GENAI WORKFLOWS',
        title: 'THE PART',
        accentWord: 'NOBODY POSTS',
        lede: 'A prompt is not a pipeline. A pipeline is the order the work happens in, the one file everything downstream references, and the four tests a frame has to survive before a client sees it. Three of ours are published in full below. The other four stay in the studio.',
        meta: [
          { label: 'Published', value: '3 of 7' },
          { label: 'Format', value: 'Stages, timings, gates' },
          { label: 'Gates each', value: '4 named tests' },
          { label: 'Use', value: 'Free to copy. Hard to run.' },
        ],
      }),
    },
  },

  arsenal: {
    title: 'The Arsenal',
    path: '/arsenal',
    order: 90,
    sections: {
      header: header({
        eyebrow: '004 / WHAT WE WEAPONISE',
        title: 'OUR',
        accentWord: 'ARSENAL',
        lede: 'Six groups, thirty services. The group names are ours and they stay. The line underneath each one is deliberately boring, because the person forwarding this page to a finance director needs a phrase that survives the forward.',
      }),
    },
  },

  packages: {
    title: 'Packages',
    path: '/packages',
    order: 100,
    sections: {
      header: header({
        eyebrow: '007 / PACKAGES',
        title: 'PICK YOUR',
        accentWord: 'PLOT',
        lede: 'Four escalation levels for Content-as-Service. Nothing here is a rate card, because a run of forty variants from one trained identity and a single hero film are not the same job with a different number on it. Pick the shape, and we will quote the work.',
        meta: [
          { label: 'Ongoing', value: 'The Alliance' },
          { label: 'Fixed monthly output', value: 'The Forge' },
          { label: 'Single project', value: 'The Mission' },
          { label: 'White label', value: 'The Shadow Protocol' },
        ],
      }),
    },
  },

  writing: {
    title: 'Writing & Narrative',
    path: '/writing',
    order: 110,
    sections: {
      header: header({
        eyebrow: 'WRITING & NARRATIVE',
        title: 'STORY IS',
        accentWord: 'THE SIGNAL',
        lede: 'Technology is the amplifier. This is the part it amplifies. Commercial writing that has to move a number, voice work that has to sound like somebody else, and a body of original narrative nobody paid us to finish.',
        meta: [
          { label: 'Commercial', value: 'VSLs, brand films, spokesperson scripts' },
          { label: 'Voice', value: 'Ghostwriting, thought leadership' },
          { label: 'Long form', value: 'Editorial, treatments, breakdowns' },
          { label: 'Originals', value: '7 completed feature screenplays' },
        ],
      }),
    },
  },

  glossary: {
    title: 'The Glossary',
    path: '/glossary',
    order: 120,
    sections: {
      header: header({
        eyebrow: 'THE GLOSSARY',
        title: `${terms.length} TERMS,`,
        accentWord: 'NO FOG',
        lede: 'Every term here is defined the way a producer needs it rather than the way a paper defines it: what it is, what it costs you when it goes wrong, and what to do about that. Each one has its own page with the questions people actually type.',
      }),
    },
  },

  blog: {
    title: 'Blog index',
    path: '/blog',
    order: 130,
    sections: {
      header: {
        title: 'Header',
        fields: {
          eyebrow: str('Eyebrow', 'The Blog'),
          heading: str('Heading', 'THOUGHTS,'),
          accentWord: str('Heading, accented word', 'UNFILTERED'),
          lede: text(
            'Lede',
            'What generative production actually costs, how to keep a product consistent across a hundred shots, what has to be disclosed, and where creative automation saves a week. Working notes rather than thought leadership.',
            5
          ),
        },
      },
    },
  },

  faq: {
    title: 'FAQ',
    path: '/faq',
    order: 140,
    sections: {
      header: header({
        eyebrow: 'FAQ',
        title: 'ASK THE',
        accentWord: 'AWKWARD ONES',
        lede: 'Everything below is the answer we would give on a call, written down so nobody has to book one to get it. Where the honest answer is “it depends”, we have said what it depends on.',
      }),
    },
  },

  contact: {
    title: 'Contact',
    path: '/contact',
    order: 150,
    sections: {
      header: header({
        eyebrow: '009 / START A CONSPIRACY',
        title: 'TELL US WHAT',
        accentWord: 'YOU’RE PLOTTING',
        lede: 'Bring the launch, the deadline and the constraint you think kills it. You will get a shape, a stack and a number back, not a discovery workshop and a deck about our values.',
        meta: [
          { label: 'Email', value: site.email },
          { label: 'Registered', value: 'London, United Kingdom' },
          { label: 'Working', value: 'UK, Europe, US' },
          { label: 'Languages', value: 'English, Greek' },
        ],
      }),
    },
  },

  authors: {
    title: 'Authors',
    path: '/authors',
    order: 160,
    sections: {
      header: header({
        eyebrow: 'BYLINES',
        title: 'AUTHORS',
        lede: 'The people whose names go on the work.',
      }),
    },
  },

  create: {
    title: 'Division · Create',
    path: '/create',
    order: 170,
    sections: {
      header: header({
        eyebrow: '01 / TALECRAFTERS CREATE',
        title: 'WE SELL',
        accentWord: 'PRODUCTION',
        meta: [
          { label: 'Output', value: 'Films, campaigns, stills, identities' },
          { label: 'Method', value: 'Hybrid generative and post-production' },
          { label: 'Typical turnaround', value: '2 days to 3 weeks' },
          { label: 'What you keep', value: 'Plates, identities, specifications' },
        ],
      }),
    },
  },

  systems: {
    title: 'Division · Systems',
    path: '/systems',
    order: 180,
    sections: {
      header: header({
        eyebrow: '02 / CREATIVE WORKFLOW AUTOMATION & AGENTIC CONTENT SYSTEMS',
        title: 'CREATIVE AUTOMATION FOR',
        accentWord: 'CONTENT & MARKETING TEAMS',
        meta: [
          { label: 'Engagement', value: 'Map, build, hand over' },
          { label: 'Typical length', value: '2 to 3 weeks' },
          { label: 'Where it runs', value: 'Your accounts, not ours' },
          { label: 'What you get', value: 'A process, the machinery, a cost ledger' },
        ],
      }),
    },
  },

  originals: {
    title: 'Division · Originals',
    path: '/originals',
    order: 190,
    sections: {
      header: header({
        eyebrow: '03 / TALECRAFTERS ORIGINALS',
        title: 'NOBODY PAID US',
        accentWord: 'TO BE RIGHT',
        meta: [
          { label: 'Screenplays', value: '7 completed features' },
          { label: 'In development', value: 'Games, series, long-form fiction' },
          { label: 'Titles', value: 'Unlisted, on purpose' },
          { label: 'Why it is here', value: 'Story-first needs evidence' },
        ],
      }),
    },
  },
} satisfies Registry;

export type CopyRegistry = typeof copyRegistry;
export type PageId = keyof CopyRegistry;

/** The Studio document name for a page. Must be a valid schema type name. */
export const docTypeFor = (pageId: string) => `pageCopy_${pageId}`;

/** The fixed document id, which is what makes each of these a singleton.
 *
 *  A hyphen, not a dot. Sanity treats a document id containing a dot as a
 *  private path — that is the mechanism behind `drafts.` — and such a document
 *  is invisible to an unauthenticated reader. The deployed site is an
 *  unauthenticated reader, so an id like `pageCopy.home` would have meant every
 *  edit made in the Studio looked saved, looked published, and never appeared. */
export const docIdFor = (pageId: string) => `pageCopy-${pageId}`;

export const pageIds = Object.keys(copyRegistry) as PageId[];
