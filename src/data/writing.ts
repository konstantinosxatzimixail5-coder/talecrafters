// Writing and narrative development. The screenplays are not named here on
// purpose: an unproduced title tells a marketing client nothing, and the
// credibility comes from the shape of the body of work, not from a list.

export interface WritingItem {
  slug: string;
  title: string;
  kind: string;
  color: string;
  summary: string;
  detail: string;
  form: string;
  language?: string;
}

export const writing: WritingItem[] = [
  {
    slug: 'direct-response',
    title: 'Direct-response video scripts',
    kind: 'Commercial writing',
    color: 'var(--brand-magenta)',
    summary:
      'Long-form VSLs, ninety-second cutdowns and hook batteries built to be tested against each other rather than admired.',
    detail:
      'A VSL is not a film with a price at the end. It is an argument with a defined failure point, and the writing job is knowing where the audience stops believing you and putting the proof there. We write the full script, then the hook battery: a dozen openings for the same body, because the opening is the variable that moves the number and the body is the one that does not.',
    form: 'VSL scripts, 90-second cutdowns, hook batteries, three-script tests on one product',
  },
  {
    slug: 'brand-and-script',
    title: 'Brand films and spokesperson scripts',
    kind: 'Commercial writing',
    color: 'var(--brand-cyan)',
    summary:
      'The words under a film, written so they survive being read aloud by someone who is not an actor.',
    detail:
      'Most corporate scripts fail on the page in a way nobody notices until the record day. Sentences that scan fine silently collapse when a founder has to breathe in the middle of them. We write to be spoken: shorter clauses, one idea per sentence, and no phrase that requires a run-up.',
    form: 'Brand films, spokesperson scripts, manifestos, event films',
  },
  {
    slug: 'ghostwriting',
    title: 'Ghostwriting and thought leadership',
    kind: 'Voice work',
    color: 'var(--brand-violet-text)',
    summary:
      'Executive posts and articles written in somebody else’s voice, close enough that their own team cannot tell.',
    detail:
      'The work starts with a voice file: the words this person uses, the words they never use, the structures they favour, the two opinions they will not soften. Everything after that is drafting against a specification rather than guessing. It is the same discipline as a brand voice guide, applied to one person.',
    form: 'LinkedIn ghostwriting, long-form articles, speeches, opinion pieces',
  },
  {
    slug: 'editorial',
    title: 'Editorial and investigative features',
    kind: 'Long form',
    color: 'var(--brand-gold)',
    summary:
      'Reported features on subjects that need a structure before they need a style, including one on money laundering through video games.',
    detail:
      'Long-form reporting is where the story-first claim gets stress-tested, because there is no visual to carry a weak argument. The transferable skill is compression: taking a subject that resists a summary and finding the one sequence of facts that makes it obvious.',
    form: 'Features, explainers, research-led articles',
  },
  {
    slug: 'treatments',
    title: 'Treatments and production breakdowns',
    kind: 'Production craft',
    color: 'var(--brand-cyan)',
    summary:
      'The documents between an idea and a schedule: treatments, and the scene-by-scene breakdowns a production runs on.',
    detail:
      'A breakdown is where romance meets arithmetic. Cast per scene, locations, day or night, props, the shots that have to be stolen. Writing them is how you learn which ideas are expensive, which is the single most useful thing a writer can know before pitching anything.',
    form: 'Treatments, script breakdowns, schedules',
    language: 'Written in Greek and English',
  },
  {
    slug: 'original-ip',
    title: 'Original IP and narrative development',
    kind: 'Originals',
    color: 'var(--brand-magenta)',
    summary:
      'Seven completed feature screenplays, plus games, animated concepts and long-form fiction in development. None of it is for sale here.',
    detail:
      'This is the part with nobody paying us to be right. Seven feature-length screenplays are finished, across thriller, psychological drama and satire; alongside them sit game concepts, animated series development and long-form fiction. The titles stay unlisted, because an unproduced screenplay is a private document until it is not. The body of work is the reason the story-first claim on this site is a description rather than a slogan.',
    form: 'Feature screenplays, series development, game narrative, long-form fiction',
  },
];
