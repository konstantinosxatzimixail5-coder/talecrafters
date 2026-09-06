// Fifty-two terms from story craft.
//
// The rest of this glossary is about how a frame gets made. This half is about
// why anybody watches it, which is the older problem and the one generative
// tools have not touched. A model can produce a shot nobody asked a question
// about; nothing in the stack can make that shot matter.
//
// Same Term shape as the other two files, same pages, same DefinedTerm nodes.
// Two new tags: `story` for structure and craft, `audience` for the terms about
// attention — hooks, loops, retention and the reasons a good piece still gets
// scrolled past.
//
// The test each entry has to pass is the same one the production terms pass:
// would a person with a deadline find this useful. A definition that is correct
// and unusable is worse than no entry, because it makes the page look scraped.

import type { Term } from './glossary';

export const storyTerms: Term[] = [
  // ============================================================= structure ===
  {
    slug: 'three-act-structure',
    term: 'Three-Act Structure',
    aka: ['3-act structure', 'classical structure'],
    short:
      'The most common shape for a dramatic story: a setup that establishes a want, a middle in which pursuing it makes things worse, and an end in which the question is answered.',
    tags: ['story'],
    body: [
      'Act one establishes who wants what and why they cannot simply have it, and ends when they commit to going after it. Act two is the pursuit, and its defining property is that it is not a straight line: the tactics that should work do not, and the cost rises. Act three is the confrontation and the answer. Roughly a quarter, a half, a quarter, though the proportions matter far less than the transitions between them.',
      'The reason it survives is not tradition, it is that it maps onto how attention works. An audience will tolerate a great deal of middle if they know what question the middle is delaying the answer to. Remove the question and act two becomes a sequence of events, which is the most common structural failure in short-form and in corporate video alike.',
      'It scales down. A thirty-second advert has three acts: the situation, the complication, the resolution. What changes at short length is not the shape but the tolerance — you have one beat per act, so each has to do its whole job in a single move.',
    ],
    qa: [
      {
        q: 'What are the three acts in three-act structure?',
        a: 'Setup, confrontation and resolution. Act one establishes a character, a want and an obstacle and ends when they commit. Act two escalates the cost of pursuing it. Act three answers the question the first act asked.',
      },
      {
        q: 'Does three-act structure work for a 30-second ad?',
        a: 'Yes, and the proportions compress rather than the shape changing. Situation, complication, resolution — one beat each. The failure at that length is usually a missing complication, which leaves a description of a product rather than a story about one.',
      },
      {
        q: 'Is three-act structure the only structure?',
        a: 'No. Kishōtenketsu builds on a twist rather than a conflict, Freytag’s pyramid runs five parts, and the story circle runs eight. Three acts is the most common because it is the most forgiving, not because it is the most correct.',
      },
    ],
    related: ['act-break', 'inciting-incident', 'midpoint', 'kishotenketsu'],
  },
  {
    slug: 'freytags-pyramid',
    term: 'Freytag’s Pyramid',
    aka: ['dramatic arc', 'five-act structure'],
    short:
      'A five-part model of dramatic shape — exposition, rising action, climax, falling action, catastrophe or resolution — drawn as a triangle with the climax at the apex.',
    tags: ['story'],
    body: [
      'Gustav Freytag derived it from Greek and Shakespearean tragedy in the 1860s, and the shape is a triangle for a reason: it assumes a story that builds to a single peak and then descends. That descent — the falling action — is the part modern structure mostly deleted, which is why the pyramid reads as lopsided against a contemporary film.',
      'It remains the most useful diagram for one specific job: showing a client where the tension in a piece currently sits. Plot a corporate video against it and the usual finding is a long exposition, a climax in the last eight seconds, and no rising action at all. That is a diagnosis you can act on, which is more than "it feels flat" gives you.',
      'Do not use it as a template. As a description of tragedy it is accurate; as a set of instructions it produces stories that peak once and then explain themselves for a third of their runtime.',
    ],
    qa: [
      {
        q: 'What are the five parts of Freytag’s pyramid?',
        a: 'Exposition, rising action, climax, falling action, and catastrophe or resolution. The climax sits at the apex and the falling action descends from it.',
      },
      {
        q: 'What is the difference between Freytag’s pyramid and three-act structure?',
        a: 'Freytag gives significant weight to the falling action after the climax, which suits tragedy. Three-act structure resolves quickly after its climax, which suits almost everything made now. The rising half of both is nearly identical.',
      },
    ],
    related: ['three-act-structure', 'narrative-arc', 'climax', 'denouement'],
  },
  {
    slug: 'kishotenketsu',
    term: 'Kishōtenketsu',
    aka: ['four-act structure', 'ki-shō-ten-ketsu'],
    short:
      'A four-part story structure from Chinese and Japanese narrative in which the turn comes from an unexpected juxtaposition rather than from conflict.',
    tags: ['story'],
    body: [
      'The four parts are ki (introduction), shō (development), ten (the turn), and ketsu (the reconciliation). The distinguishing feature is ten: something arrives that has not been set up as an opposing force, and the final part is the audience understanding how it relates to what came before. Nobody has to fight anybody.',
      'This matters commercially because a great deal of brand work has no antagonist and no conflict available to it, and forcing one produces the manufactured-problem advert that everybody recognises and nobody believes. Kishōtenketsu gives you a structure that holds attention without inventing an enemy.',
      'It is also the native structure of the four-panel comic and of a large share of what performs well in short-form video: setup, development, unexpected cut, and the beat where it lands. If a piece works and you cannot find its conflict, this is usually the shape it is in.',
    ],
    qa: [
      {
        q: 'What does kishōtenketsu mean?',
        a: 'It names its four parts: introduction, development, turn and reconciliation. The third part introduces something unexpected, and the fourth makes sense of it against the first two.',
      },
      {
        q: 'Can you tell a story without conflict?',
        a: 'Yes. Kishōtenketsu builds on juxtaposition rather than opposition. It is a better fit than three-act structure for brand films with no available antagonist, where inventing one reads as false.',
      },
    ],
    related: ['three-act-structure', 'reversal', 'turning-point', 'story-beat'],
  },
  {
    slug: 'heros-journey',
    term: 'The Hero’s Journey',
    aka: ['monomyth', 'Campbell structure'],
    short:
      'A cyclical story pattern in which a protagonist leaves the ordinary world, is tested in an unfamiliar one, and returns changed and carrying something.',
    tags: ['story'],
    body: [
      'Joseph Campbell described it as a comparative pattern across myth; the screenwriting versions that followed turned it into a stage list — the call, the refusal, the mentor, the threshold, the ordeal, the reward, the return. Used as description it is illuminating. Used as a checklist it is the single most reliable way to produce a story that feels vaguely familiar and specifically dead.',
      'The part worth keeping is the return. The journey structure is the only common model that insists the protagonist comes back to where they started and finds it changed because they are. That is what makes it useful for founder stories and for brand origin films, where the audience already knows how it ends and the interest has to come from the cost.',
      'The part worth dropping is the stage count. A twelve-stage structure inside a ninety-second film gives each stage seven seconds, which is not a stage, it is a caption.',
    ],
    qa: [
      {
        q: 'What are the main stages of the hero’s journey?',
        a: 'A call to adventure, a refusal, meeting a mentor, crossing a threshold, tests and allies, an ordeal, a reward, and a return with it. Different authors count between eight and seventeen; the count is not the useful part.',
      },
      {
        q: 'Is the hero’s journey overused?',
        a: 'As a template, yes, and audiences recognise its beats faster than they used to. As a diagnostic — asking what the ordeal is and what is brought back — it still finds the hole in a story quickly.',
      },
    ],
    related: ['story-circle', 'character-arc', 'narrative-arc', 'three-act-structure'],
  },
  {
    slug: 'story-circle',
    term: 'Story Circle',
    aka: ['eight-point circle', 'Harmon circle'],
    short:
      'An eight-step compression of the journey structure drawn as a circle: a character in comfort wants something, enters an unfamiliar situation, adapts, gets what they wanted, pays for it, and returns changed.',
    tags: ['story'],
    body: [
      'The eight steps run: you, need, go, search, find, take, return, change. Its advantage over longer models is that it fits on one line and can be checked against a short piece in about a minute. Its second advantage is that it forces the sixth step — the price — which is exactly the step corporate storytelling deletes.',
      'The circle is also the fastest way to test a two-minute film. Write the eight words down the side of a page, put the timecode of each next to it, and the gap in the list is the structural problem. Two steps in the first twenty seconds and six crammed into the last ten is a diagnosis, not an opinion.',
      'It is a compression of the monomyth rather than a rival to it, so use whichever gets you to the missing beat faster. Neither is a source of story; both are ways of finding out what is absent.',
    ],
    qa: [
      {
        q: 'What are the eight steps of the story circle?',
        a: 'You (a character in a zone of comfort), need (they want something), go (they enter an unfamiliar situation), search (they adapt), find (they get what they wanted), take (they pay a price), return (they come back), change (they are different for it).',
      },
      {
        q: 'How do you use the story circle on a short film?',
        a: 'List the eight steps, put the timecode where each one lands, and look at the distribution. Crowding at the end or a missing "take" is the usual finding, and both are fixable without a rewrite.',
      },
    ],
    related: ['heros-journey', 'character-arc', 'beat-sheet', 'want-vs-need'],
  },
  {
    slug: 'beat-sheet',
    term: 'Beat Sheet',
    aka: ['beat outline', 'story outline'],
    short:
      'A one-line-per-beat outline of a story, listing what changes at each step rather than what happens, used to test structure before anything is written.',
    tags: ['story', 'production'],
    body: [
      'A beat sheet is not a summary. Each line states the turn: what a character wants going into the beat, what stops them, and what is different coming out. A list of events that does not name what changed is a running order, and a running order cannot be diagnosed because nothing in it can be wrong.',
      'The reason to build one before writing is economic. A beat is a sentence and costs nothing to throw away; a draft costs a day and you will find yourself defending it. Every writer who has argued for keeping a scene they knew was dead was arguing for the hours, not the scene.',
      'In generative production the beat sheet does a second job: it is the document the shot list is derived from, so it decides how many shots exist and therefore what the piece costs. Changing a beat is free. Changing it after four hundred renders is not.',
    ],
    qa: [
      {
        q: 'What is the difference between a beat sheet and a synopsis?',
        a: 'A synopsis says what happens. A beat sheet says what changes at each step — the want, the obstacle, and the state at the end of the beat. Only the second can be tested for structural problems.',
      },
      {
        q: 'How many beats should a short film have?',
        a: 'Fewer than most drafts contain. A ninety-second piece usually supports six to nine real beats; anything more and the beats are events rather than turns, which is what makes a short feel busy and empty at once.',
      },
    ],
    related: ['story-beat', 'shot-list', 'story-circle', 'scene-objective'],
  },
  {
    slug: 'story-beat',
    term: 'Story Beat',
    aka: ['beat', 'dramatic beat'],
    short:
      'The smallest unit of change in a story: one exchange, action or realisation after which something is different from how it was before.',
    tags: ['story'],
    body: [
      'A beat is defined by its turn, not its length. Two lines of dialogue in which somebody concedes something is a beat. Two minutes of beautifully shot walking in which nothing shifts is not a beat, it is footage. The test is whether you could state what changed in a short sentence.',
      'Beats are the resolution at which structure can actually be fixed. Notes at the level of the whole piece ("it drags") are unactionable; notes at the level of a beat ("nothing changes between the sixth and the eighth") point at the two things to cut. Every useful editorial conversation eventually descends to this level.',
      'In performance, the same word means a pause — a held moment before a line. The two senses are related: the pause exists to let the change land.',
    ],
    qa: [
      {
        q: 'What is a beat in a script?',
        a: 'The smallest unit of dramatic change: one action, exchange or realisation after which the situation is measurably different. If you cannot say what changed, it is not a beat.',
      },
      {
        q: 'What is the difference between a beat and a scene?',
        a: 'A scene is a continuous unit of place and time and usually contains several beats. A beat is the individual turn inside it. A scene with only one beat is generally too long for what it does.',
      },
    ],
    related: ['beat-sheet', 'value-shift', 'scene-objective', 'reversal'],
  },
  {
    slug: 'inciting-incident',
    term: 'Inciting Incident',
    aka: ['catalyst', 'the disturbance'],
    short:
      'The event that upsets the balance of a character’s ordinary life and makes the rest of the story necessary.',
    tags: ['story'],
    body: [
      'It has one job: to make going back impossible. A phone call, an offer, a death, a letter — the content matters less than the fact that after it, doing nothing is itself a decision with consequences. If the protagonist could reasonably shrug and continue as before, it is an event and not an inciting incident.',
      'Its position is the most common structural error in commercial work. Placed late, the piece opens with a long establishing section that the audience has no reason to care about, because nothing has told them what they are watching for. In short-form, it usually needs to be in the first few seconds, and often in the first frame.',
      'The related failure is having two. If something disturbs the balance and then a second, larger thing disturbs it again, the first was a preamble and the piece would be better starting at the second.',
    ],
    qa: [
      {
        q: 'What is an inciting incident?',
        a: 'The event that breaks the equilibrium of a character’s life and starts the story. After it, carrying on as before is no longer available to them without cost.',
      },
      {
        q: 'Where should the inciting incident go?',
        a: 'As early as the audience can understand it. In a feature it lands in the first ten to fifteen minutes; in a ninety-second film, in the first ten seconds; in short-form video, often in the first line.',
      },
      {
        q: 'What is the difference between the inciting incident and the hook?',
        a: 'The hook is a device for holding attention in the opening seconds and may be nothing to do with the plot. The inciting incident is a structural event inside the story. A well-built opening often makes them the same moment, which is the ideal.',
      },
    ],
    related: ['act-break', 'three-act-structure', 'hook', 'stakes'],
  },
  {
    slug: 'act-break',
    term: 'Act Break',
    aka: ['plot point', 'act turn'],
    short:
      'The point at which the story’s direction changes decisively enough that what follows operates under different rules from what preceded it.',
    tags: ['story'],
    body: [
      'The first act break is a commitment: the protagonist chooses to engage, and the choice has a cost that makes reversal expensive. The second is usually a collapse: the approach that has driven the middle stops working, and the protagonist has to become someone else or fail. Everything between them is act two, which is why a story with a weak second break has a middle that will not end.',
      'In episodic and broadcast work the break is also literally where the ads go, which is why the beat immediately before it is written to be unresolved. That commercial pressure produced a genuinely useful craft rule: end the unit on a question, not a period.',
      'The test for whether you have a real act break is whether the protagonist could go back. If they could, you have a turning point. If going back would cost them more than going forward, you have an act break.',
    ],
    qa: [
      {
        q: 'What is the difference between an act break and a turning point?',
        a: 'Every act break is a turning point; most turning points are not act breaks. An act break changes the rules the story operates under and makes retreat costly. A turning point only redirects the current pursuit.',
      },
      {
        q: 'How many act breaks does a story have?',
        a: 'Two, in three-act structure: the commitment at the end of act one and the collapse at the end of act two. More than two usually means the middle has been divided rather than structured.',
      },
    ],
    related: ['three-act-structure', 'turning-point', 'midpoint', 'inciting-incident'],
  },
  {
    slug: 'midpoint',
    term: 'Midpoint',
    aka: ['centre turn', 'mid-act reversal'],
    short:
      'The turn at the centre of a story where the protagonist stops reacting and starts acting, usually triggered by information that reframes everything before it.',
    tags: ['story'],
    body: [
      'The midpoint exists to solve a specific problem: the middle of a story is the part most likely to become a sequence of obstacles with no shape. Putting a genuine reversal at the centre splits act two into two halves that behave differently — reactive before, active after — which gives the middle a direction rather than a duration.',
      'It usually takes one of two forms. A false victory, where the protagonist appears to get what they wanted and it turns out to cost more than it is worth. Or a false defeat, where they lose and the loss reveals what the real problem was. Both convert a want into a need, which is why the midpoint is where character work usually happens.',
      'In a short piece the midpoint is often the only turn there is room for, which makes it the most valuable thirty seconds to get right.',
    ],
    qa: [
      {
        q: 'What happens at the midpoint of a story?',
        a: 'The protagonist gains information or experiences a reversal that changes them from reactive to active. Often a false victory or a false defeat that reframes what the real problem is.',
      },
      {
        q: 'Why does the middle of a story sag?',
        a: 'Almost always because there is no midpoint turn, so the second act is a list of obstacles rather than two halves that behave differently. Adding a real reversal at the centre fixes more sagging middles than any amount of cutting.',
      },
    ],
    related: ['act-break', 'reversal', 'want-vs-need', 'three-act-structure'],
  },
  {
    slug: 'climax',
    term: 'Climax',
    aka: ['obligatory scene', 'crisis'],
    short:
      'The scene in which the dramatic question is answered, in which the protagonist makes the decision the whole story has been arranging, and after which nothing further can be argued.',
    tags: ['story'],
    body: [
      'The climax is not the biggest scene, it is the decisive one. Spectacle is frequently placed there and frequently is not it: if the outcome would be the same without the protagonist’s choice, the explosion is a set piece and the actual climax is somewhere else, probably a conversation.',
      'It has to be the obligatory scene — the one the audience has been promised by everything preceding it. Denying it is possible but expensive; the audience will accept a different answer to the question, and will not accept the question being dropped.',
      'The most common commercial failure is a climax that resolves an external problem while the internal one is left untouched, which produces the ending that is technically complete and emotionally weightless.',
    ],
    qa: [
      {
        q: 'What is the climax of a story?',
        a: 'The scene where the dramatic question is answered by a decision the protagonist makes. Not necessarily the largest scene — the decisive one.',
      },
      {
        q: 'How do you know if your climax is in the right place?',
        a: 'Ask whether the outcome would change if the protagonist did nothing. If it would not, the scene is a set piece and the real climax is elsewhere.',
      },
    ],
    related: ['dramatic-question', 'denouement', 'stakes', 'setup-and-payoff'],
  },
  {
    slug: 'denouement',
    term: 'Denouement',
    aka: ['resolution', 'falling action'],
    short:
      'What comes after the climax: the short passage in which the consequences settle and the audience is shown the new normal.',
    tags: ['story'],
    body: [
      'The denouement answers the smaller questions the climax left open and, more importantly, shows the changed state. Without it an audience knows what happened and not what it meant. With too much of it, the piece explains its own ending, which is the fastest way to make a good climax feel smaller in retrospect.',
      'A useful rule of proportion: the denouement should be shorter than the audience expects, and should show rather than state. One image of the changed world beats a paragraph of narration about it, every time.',
      'In commercial work the denouement is where the call to action usually sits, and the same rule applies. An ask that arrives after the piece has finished settling reads as a separate advert stapled on.',
    ],
    qa: [
      {
        q: 'What is a denouement?',
        a: 'The passage after the climax in which consequences settle and the new state of things is shown. It answers what it meant, not what happened.',
      },
      {
        q: 'How long should a denouement be?',
        a: 'Short. Long enough to show the changed state, and no longer. If it is explaining the ending rather than showing its consequences, it is too long.',
      },
    ],
    related: ['climax', 'freytags-pyramid', 'call-to-action', 'character-arc'],
  },
  {
    slug: 'narrative-arc',
    term: 'Narrative Arc',
    aka: ['story arc', 'plot arc'],
    short:
      'The overall shape a story takes across its length: where tension rises, where it releases, and where the audience is asked to feel something.',
    tags: ['story'],
    body: [
      'The arc is the sum of the beats, not a separate thing to design. Plot the tension of each beat on a line and the arc is what you see: a good one rises unevenly, with releases that are genuine and brief, and a final rise that is steeper than any before it. A flat line with a spike at the end is the most common shape in corporate video and the reason so much of it is watched at double speed.',
      'The useful diagnostic is not "does it have an arc" but "where does the line go down and why". Every descent is either a deliberate release, which is fine and necessary, or a beat doing no work, which is a cut. There is no third case.',
      'Arcs also exist at other scales. A sequence has one, a scene has one, and a whole campaign has one. The most common structural problem in a series is that every episode arcs beautifully and the series does not arc at all.',
    ],
    qa: [
      {
        q: 'What is a narrative arc?',
        a: 'The shape of rising and falling tension across a story. It is produced by the beats rather than designed separately, and it is diagnosed by looking at where the tension falls and asking whether each fall is deliberate.',
      },
      {
        q: 'How do you fix a flat narrative arc?',
        a: 'Find the beats where nothing changes and cut them, then add a real reversal at the centre. Adding more incident rarely helps; a flat arc is usually a change problem rather than an event problem.',
      },
    ],
    related: ['character-arc', 'story-beat', 'pacing', 'freytags-pyramid'],
  },
  {
    slug: 'character-arc',
    term: 'Character Arc',
    aka: ['internal arc', 'transformation arc'],
    short:
      'The change a character undergoes across a story — what they believed at the start, what the plot costs them, and what they believe at the end.',
    tags: ['story'],
    body: [
      'A character arc is not a mood chart. It is a belief that is tested, defended, and eventually either abandoned or paid for. The plot exists to apply pressure to that belief; when people say a story feels episodic, they usually mean the events are not touching anything the character holds.',
      'Three shapes cover most of it. The positive arc, where a false belief is given up. The negative arc, where it is kept and the cost is paid. And the flat arc, where the character does not change and the world around them does, which is the shape of most detective fiction and of nearly every effective founder story.',
      'For brand and testimonial work the flat arc is usually the honest one. A customer who fundamentally changed as a person because of a software purchase is a story nobody believes; a customer who was right about something and finally had the means to act on it is one they do.',
    ],
    qa: [
      {
        q: 'What is a character arc?',
        a: 'The change in what a character believes, caused by the pressure the story applies to that belief. Positive arcs give up a false belief, negative arcs keep it and pay, flat arcs hold and change the world instead.',
      },
      {
        q: 'Does every character need an arc?',
        a: 'No. Flat arcs are legitimate and often more truthful in commercial work, where claiming a customer was transformed by a product strains credibility. What every character needs is a belief the story tests.',
      },
    ],
    related: ['want-vs-need', 'narrative-arc', 'protagonist', 'story-circle'],
  },
  {
    slug: 'want-vs-need',
    term: 'Want vs Need',
    aka: ['external goal vs internal need', 'object of desire'],
    short:
      'The distinction between what a character is consciously pursuing and what the story says they actually require, which is usually incompatible with the first.',
    tags: ['story'],
    body: [
      'The want is external, stated, and drives the plot: get the job, win the case, reach the city. The need is internal, usually unadmitted, and drives the meaning: stop lying, ask for help, forgive someone. A story with a want and no need is a competent chase. A story with a need and no want is a mood piece nobody can follow.',
      'The engine is the incompatibility. When getting the want would prevent meeting the need, every scene has two things at stake at once, and the climax becomes a real decision rather than an outcome. Make them compatible and the ending is arithmetic.',
      'The commercial application is direct. A brief that says the audience "wants a faster workflow" has a want. The need underneath it is usually something like not being the person who is always behind, and that is the thing the film should be about, even when the product only addresses the want.',
    ],
    qa: [
      {
        q: 'What is the difference between want and need in a story?',
        a: 'The want is the external, stated goal that drives the plot. The need is the internal, usually unadmitted thing that would actually resolve the character’s situation. The story works when pursuing one obstructs the other.',
      },
      {
        q: 'Why does a story feel hollow when the character gets what they wanted?',
        a: 'Usually because the want and the need were compatible, so the ending was arithmetic rather than a decision. The audience feels the absence of a cost even when they cannot name it.',
      },
    ],
    related: ['character-arc', 'midpoint', 'protagonist', 'stakes'],
  },
  {
    slug: 'protagonist',
    term: 'Protagonist',
    aka: ['main character', 'lead'],
    short:
      'The character whose decisions drive the story and whose question the ending answers — not necessarily the most sympathetic one, or the one with the most screen time.',
    tags: ['story'],
    body: [
      'The identifying test is agency, not attention. Ask whose choices change the outcome; if the answer is somebody other than the person you have been filming, you have a protagonist problem, and it is a common one in brand work where the customer is on screen and the company is making all the decisions.',
      'A protagonist needs three things: a want they will act on, a capacity to fail, and something to lose. Remove the third and there is no tension however good the first two are. This is why aspirational advertising so often features people who appear to risk nothing and reads as glossy and inert.',
      'They do not have to be likeable. They have to be understandable, which is a much lower bar and a far more interesting one.',
    ],
    qa: [
      {
        q: 'Who is the protagonist of a story?',
        a: 'The character whose decisions drive the outcome and whose dramatic question the ending answers. Screen time and sympathy are not the test; agency is.',
      },
      {
        q: 'Can a brand be the protagonist of its own advert?',
        a: 'It can, and it usually should not be. When the brand makes every decision the customer becomes a prop, and audiences read that arrangement instantly even when they cannot articulate it.',
      },
    ],
    related: ['antagonist', 'character-arc', 'want-vs-need', 'point-of-view'],
  },
  {
    slug: 'antagonist',
    term: 'Antagonist',
    aka: ['antagonistic force', 'opposition'],
    short:
      'Whatever stands between the protagonist and what they want — a person, an institution, a condition, or the protagonist themselves.',
    tags: ['story'],
    body: [
      'The antagonist does not need to be a villain and frequently should not be. What it needs is to be as strong as the protagonist, because the strength of a story is set by the strength of its opposition. A weak antagonist produces a protagonist who looks capable and a story nobody worries about.',
      'The most useful reframe for commercial work is antagonistic force. Time, money, a market, a body, an institution and a habit are all sufficient. The bad-competitor advert is a rare case where naming a person as the antagonist is available, and it almost never survives legal.',
      'A good diagnostic: state the antagonist’s goal as though they were the protagonist. If it sounds reasonable, the story will be interesting. If it sounds like being obstructive for its own sake, the opposition is decorative.',
    ],
    qa: [
      {
        q: 'Does a story need a villain?',
        a: 'No. It needs opposition strong enough to make the outcome uncertain. Time, money, a market, an institution or a habit all work, and are more honest in most commercial contexts than inventing a person to blame.',
      },
      {
        q: 'How do you test whether your antagonist is strong enough?',
        a: 'State their goal as if they were the protagonist. If it reads as reasonable, the conflict is real. If it reads as obstruction for its own sake, the opposition is decoration and the tension will not hold.',
      },
    ],
    related: ['protagonist', 'conflict', 'stakes', 'kishotenketsu'],
  },
  {
    slug: 'stakes',
    term: 'Stakes',
    aka: ['what is at risk', 'jeopardy'],
    short:
      'What the protagonist stands to lose, stated specifically enough that the audience can picture the loss.',
    tags: ['story'],
    body: [
      'Stakes fail in one of two ways. They are absent, in which case the piece is pleasant and weightless. Or they are enormous and abstract — the fate of the world, the future of the industry — which is functionally the same as absent, because nobody can picture it. Specific and small beats vast and general in almost every case.',
      'The strongest stakes are things the audience has already been shown the value of. This is why setup matters so much: five seconds establishing that the workshop is the only thing he has left does more for the later scene than any amount of dialogue about how much it means to him.',
      'In commercial work the honest stakes are usually modest and that is fine. Someone will have to explain a missed deadline. Someone will lose the thing they were good at. Those land because they are recognisable, which is a property "transforming the industry" does not have.',
    ],
    qa: [
      {
        q: 'What are stakes in storytelling?',
        a: 'What the protagonist stands to lose if they fail. Effective stakes are specific enough that the audience can picture the loss, which is why small and concrete usually outperforms vast and abstract.',
      },
      {
        q: 'How do you raise the stakes without making them absurd?',
        a: 'Narrow them rather than enlarging them. Show what the thing at risk is worth to this particular person, early and briefly, so the later threat lands without needing to be inflated.',
      },
    ],
    related: ['conflict', 'setup-and-payoff', 'want-vs-need', 'climax'],
  },
  {
    slug: 'conflict',
    term: 'Conflict',
    aka: ['dramatic conflict', 'opposition'],
    short:
      'The friction between what a character is trying to do and what prevents it, present at every scale from a line of dialogue to a whole story.',
    tags: ['story'],
    body: [
      'Conflict is not argument. Two people shouting can be entirely without conflict if neither wants anything from the other; two people politely agreeing can be full of it if each is trying to get something the other will not give. The presence of raised voices is one of the least reliable indicators there is.',
      'It comes in the familiar three registers — against another person, against a circumstance, against oneself — and the useful observation is that a strong scene usually has at least two of them running at once. The character arguing with their sister is also arguing with their own decision.',
      'The reason conflict is non-negotiable is that it is what makes a scene readable as drama rather than as information. Take a scene where somebody explains something to somebody who wants to hear it, add the smallest reluctance on either side, and the same information becomes watchable.',
    ],
    qa: [
      {
        q: 'What are the types of conflict in a story?',
        a: 'Conventionally: against another person, against circumstance or environment, and against oneself. The strongest scenes usually run two of them simultaneously.',
      },
      {
        q: 'Why does my scene feel flat even though the characters are arguing?',
        a: 'Arguing is not conflict. If neither character is trying to get something from the other that the other will not give, there is nothing at stake in the exchange and volume will not supply it.',
      },
    ],
    related: ['antagonist', 'scene-objective', 'stakes', 'subtext'],
  },
  {
    slug: 'dramatic-question',
    term: 'Dramatic Question',
    aka: ['central question', 'story question'],
    short:
      'The single yes-or-no question a story raises early and answers at the climax, which is what holds an audience through the middle.',
    tags: ['story'],
    body: [
      'Will she get the job. Will he tell the truth. Will they get out. The question has to be answerable and it has to be asked early, because attention through a middle section is a function of an unanswered question rather than of how interesting the middle is.',
      'A piece can have exactly one central question. It can have many subordinate ones, and it usually should, but if two questions compete for the central position the audience does not know what they are waiting for and the ending answers something they had stopped tracking.',
      'The commercial test is quick: state your piece’s question in one sentence beginning "will". If you cannot, the piece is a presentation. That is sometimes the right thing to make, but it will be watched the way presentations are watched.',
    ],
    qa: [
      {
        q: 'What is the dramatic question?',
        a: 'The yes-or-no question a story poses early and answers at the climax. It is the mechanism that holds attention through a middle section, which is why a piece without one drags regardless of how good its parts are.',
      },
      {
        q: 'Can a story have more than one dramatic question?',
        a: 'It can have many subordinate questions but only one central one. Two competing central questions leave an audience unsure what they are waiting for, and the ending then resolves something they stopped tracking.',
      },
    ],
    related: ['climax', 'open-loop', 'stakes', 'logline'],
  },
  {
    slug: 'logline',
    term: 'Logline',
    aka: ['one-line pitch', 'story premise line'],
    short:
      'One sentence naming the protagonist, their goal, the opposition and what is at risk — the test of whether a story exists yet.',
    tags: ['story', 'strategy'],
    body: [
      'The standard shape: when [inciting incident], a [flawed protagonist] must [goal] or [stakes]. The value is not in pitching, it is in diagnosis. A logline that cannot be written is almost always a story with no antagonist or no stakes, and finding that out in a sentence is cheaper than finding it out in a draft.',
      'Two failures are common. Writing a premise instead of a logline — "a film about loneliness in cities" is a subject, not a story. And hiding the ending — a logline is not a trailer and coyness in it usually conceals not knowing.',
      'For commercial work the logline is also the alignment document. If the client and the studio can both sign the same sentence, most of the arguments later in the process do not happen.',
    ],
    qa: [
      {
        q: 'What is a logline?',
        a: 'A single sentence naming the protagonist, the goal, the opposition and the stakes. Its main use is diagnostic: if you cannot write one, the story is usually missing an antagonist or a cost.',
      },
      {
        q: 'How long should a logline be?',
        a: 'One sentence, usually under forty words. Length is not the point — the point is that all four elements are present and specific.',
      },
    ],
    related: ['premise', 'dramatic-question', 'stakes', 'controlling-idea'],
  },
  {
    slug: 'premise',
    term: 'Premise',
    aka: ['story premise', 'concept'],
    short:
      'The situation a story starts from, stated as a condition with an inherent problem in it rather than as a subject.',
    tags: ['story'],
    body: [
      'A premise is a machine for generating scenes. "A funeral director who is afraid of the dead" produces scenes on its own; "a film about grief" produces nothing, because it names a topic rather than a pressure. The difference is whether the statement contains a contradiction somebody has to live inside.',
      'The strongest premises put two things in tension that are both true. That tension is what makes the second act possible: every scene can test the contradiction from a different angle without repeating itself.',
      'It is not the theme and not the logline. The premise is the situation, the logline adds the goal and the stakes, and the theme is the argument the finished piece makes about it. Confusing them is why development conversations run in circles.',
    ],
    qa: [
      {
        q: 'What is the difference between a premise and a logline?',
        a: 'The premise is the situation with a contradiction in it. The logline adds the protagonist’s goal, the opposition and the stakes. A good premise generates scenes; a good logline tests whether they form a story.',
      },
      {
        q: 'What makes a strong premise?',
        a: 'An internal contradiction that somebody has to live inside, stated concretely. A subject is not a premise, and neither is a setting.',
      },
    ],
    related: ['logline', 'controlling-idea', 'world-building', 'dramatic-question'],
  },
  {
    slug: 'controlling-idea',
    term: 'Controlling Idea',
    aka: ['theme', 'thematic statement'],
    short:
      'The argument a finished story makes, stated as a claim about how the world works rather than as a topic.',
    tags: ['story'],
    body: [
      'A topic is "trust". A controlling idea is "trust is what you give before you have grounds to". The difference is that the second can be disagreed with, and anything that cannot be disagreed with cannot be the spine of a story, because there is nothing for the events to prove.',
      'It is derived, not decided in advance. Writers who choose a message first and build a story to deliver it produce work that reads as an argument with characters attached, which audiences detect immediately and resent. The reliable order is to write, find the claim your story is actually making, and then strengthen it.',
      'For brand work this is the sharpest available tool for the question "what is this film really saying". A film with two controlling ideas says nothing; a film with one that contradicts the brand’s behaviour says something worse.',
    ],
    qa: [
      {
        q: 'What is a controlling idea?',
        a: 'The claim a story makes about how the world works, stated as something that could be argued with. "Trust" is a topic; "trust is what you give before you have grounds to" is a controlling idea.',
      },
      {
        q: 'Should you decide the theme before writing?',
        a: 'Usually not. Deciding the message first produces work that reads as an argument with characters attached. Write, find the claim the story is actually making, then sharpen it.',
      },
    ],
    related: ['premise', 'subtext', 'logline', 'tone'],
  },
  {
    slug: 'subtext',
    term: 'Subtext',
    aka: ['what is not said', 'the under-scene'],
    short:
      'The meaning running underneath what is literally said or shown, produced by the gap between what a character wants and what they are willing to say.',
    tags: ['story'],
    body: [
      'Subtext is not a technique applied to dialogue. It is a structural consequence: if a character wants something they cannot ask for directly, everything they say is about it and none of it says it. Get the want and the prohibition right and subtext appears on its own. Write the want with no prohibition and no amount of oblique phrasing will produce it.',
      'The most reliable generator in a scene is a rule about what cannot be said — professional, social, or personal. Two colleagues who cannot mention the redundancy list, two friends who cannot mention the money, a couple who cannot mention the appointment. The scene can then be about anything at all and will still be about that.',
      'The audience does not need to decode subtext consciously to feel it. What they register is that the scene is denser than its surface, which is the difference between dialogue that reads as written and dialogue that reads as overheard.',
    ],
    qa: [
      {
        q: 'What is subtext in a script?',
        a: 'The meaning underneath the literal words, created by the distance between what a character wants and what they are permitted to say. It is a structural result of a prohibition, not a style of writing.',
      },
      {
        q: 'How do you write subtext?',
        a: 'Give the character something they want from the other person and a reason they cannot ask for it. Then write the scene about anything else. The prohibition does the work.',
      },
    ],
    related: ['conflict', 'show-dont-tell', 'exposition', 'scene-objective'],
  },
  {
    slug: 'exposition',
    term: 'Exposition',
    aka: ['backstory', 'information delivery'],
    short:
      'The information an audience needs in order to follow a story, and the part of writing where most pieces lose people.',
    tags: ['story'],
    body: [
      'The problem is never that exposition exists, it is that it arrives before the audience wants it. Information given to someone who has no question in mind is noise; the same information given to someone who has been made curious is a reward. Almost every fix for clumsy exposition is a fix of order, not of phrasing.',
      'The reliable techniques all work by giving the audience a reason to want the fact. Put it in an argument, so it is being used as a weapon. Put it in a correction, so somebody is wrong first. Withhold it until a scene stops making sense without it. Or cut it and find out whether anybody missed it, which they usually do not.',
      'The version to avoid is the one where two characters tell each other things they both already know. It is instantly recognisable, and it signals to an audience that the piece does not trust them.',
    ],
    qa: [
      {
        q: 'How do you avoid clumsy exposition?',
        a: 'Reorder rather than rewrite. Give the audience a question before you give them the answer: put the fact inside an argument, a correction, or a moment where the scene stops making sense without it.',
      },
      {
        q: 'How much backstory does an audience need?',
        a: 'Less than writers believe. Cut it and see what is genuinely missed. Most backstory serves the writer’s confidence rather than the audience’s comprehension.',
      },
    ],
    related: ['show-dont-tell', 'subtext', 'in-medias-res', 'pacing'],
  },
  {
    slug: 'show-dont-tell',
    term: 'Show, Don’t Tell',
    aka: ['dramatise, don’t state'],
    short:
      'The instruction to give an audience evidence they can interpret rather than a conclusion they must accept.',
    tags: ['story'],
    body: [
      'The principle is about who does the work. Telling hands over a verdict — he was exhausted — and asks for agreement. Showing supplies the evidence and lets the audience arrive at the verdict themselves, which they trust far more because they reached it. The engagement comes from the small act of inference, not from the detail.',
      'It is over-applied. Some information is genuinely admin — a date, a location, who somebody is — and dramatising it wastes a scene on a caption’s job. The rule is worth following exactly where an audience’s belief matters and worth ignoring where only their comprehension does.',
      'In visual work the failure has a distinctive shape: a voiceover stating what the picture is already showing. Two channels carrying identical information is one of them wasted, and the one you can hear is usually the one to cut.',
    ],
    qa: [
      {
        q: 'What does "show, don’t tell" actually mean?',
        a: 'Give the audience evidence rather than a conclusion, so they perform the inference themselves. A judgement they reach is one they believe; a judgement handed to them is one they assess.',
      },
      {
        q: 'When should you tell instead of showing?',
        a: 'When the information is administrative — a date, a place, a name — and only comprehension is at stake. Dramatising a caption wastes a scene.',
      },
    ],
    related: ['exposition', 'subtext', 'foreshadowing', 'ai-slop'],
  },
  {
    slug: 'foreshadowing',
    term: 'Foreshadowing',
    aka: ['planting', 'seeding'],
    short:
      'Placing information early that will matter later, so that when it does the audience feels the ending was earned rather than arranged.',
    tags: ['story'],
    body: [
      'Foreshadowing solves a specific problem: an ending that arrives with a new element in it reads as a cheat, however satisfying the element is. Planting the element early costs a few seconds and converts a contrivance into an inevitability. It is the cheapest structural repair available.',
      'The craft is in the weight. Planted too heavily, the audience sees the ending coming and spends the middle waiting rather than watching. Planted too lightly, nobody registers it and the payoff lands as a coincidence anyway. The usual solution is to plant it while the audience’s attention is on something else — a fact mentioned during an argument about something more urgent.',
      'The distinction from a red herring is intent rather than form. A red herring is a plant that deliberately points at the wrong conclusion, and it only works if the real plant is also there.',
    ],
    qa: [
      {
        q: 'What is foreshadowing?',
        a: 'Placing an element early so that its later importance feels earned. It converts what would read as a contrivance into something that reads as inevitable.',
      },
      {
        q: 'How obvious should foreshadowing be?',
        a: 'Visible but not the focus. The reliable method is to plant it while the audience’s attention is on something more urgent, so they register it without tracking it.',
      },
    ],
    related: ['chekhovs-gun', 'setup-and-payoff', 'dramatic-irony', 'show-dont-tell'],
  },
  {
    slug: 'chekhovs-gun',
    term: 'Chekhov’s Gun',
    aka: ['the loaded rifle rule'],
    short:
      'The principle that a conspicuous element introduced in a story must be used, and that anything which is not used should be removed.',
    tags: ['story'],
    body: [
      'The original note was about economy rather than about plotting: if a rifle hangs on the wall in act one it must be fired by act three, and if it is never fired it should not be hanging there. The instruction is to cut, not to plant. That reading is the more useful one, because unused conspicuous elements do real damage — an audience allocates attention to them and the attention is never repaid.',
      'It applies more strictly than people expect in short forms. In a ninety-second film every object the camera dwells on is a promise. A held shot of a photograph that turns out to mean nothing costs you the audience’s next held shot too, because they have learned your emphasis is unreliable.',
      'The exception is texture. A world can contain things that are simply there, provided the piece has not pointed at them. The rule is about emphasis, not about inventory.',
    ],
    qa: [
      {
        q: 'What is Chekhov’s gun?',
        a: 'The principle that anything conspicuously introduced must pay off, and that anything which does not pay off should be cut. It is primarily an argument for economy rather than for planting.',
      },
      {
        q: 'Does every detail have to pay off?',
        a: 'No. A world can contain incidental texture. The rule concerns things the piece has emphasised — a held shot, a named object — because emphasis is a promise and an unpaid promise costs you the audience’s attention next time.',
      },
    ],
    related: ['foreshadowing', 'setup-and-payoff', 'macguffin', 'pacing'],
  },
  {
    slug: 'macguffin',
    term: 'MacGuffin',
    aka: ['plot device', 'the object of pursuit'],
    short:
      'An object or goal that motivates the characters and whose actual nature is irrelevant to the audience.',
    tags: ['story'],
    body: [
      'The briefcase, the formula, the list of names. It works because pursuit is what generates the scenes, and the specific contents only matter to the people pursuing it. Hitchcock’s point was that the audience is invested in the chase and indifferent to the prize, which is why films that stop to explain the prize lose momentum.',
      'The failure is treating a MacGuffin as a mystery. If a piece signals that the contents are the point, it has promised a revelation and now has to deliver one, and almost no revelation is as interesting as the anticipation of it. Choose one: an object that motivates, or a secret that pays off. Not both.',
      'The commercial version is a product presented as the object of pursuit. It works when the pursuit is dramatised and fails when the film pauses to describe the product’s features, which is the exact move that converts a MacGuffin into an anticlimax.',
    ],
    qa: [
      {
        q: 'What is a MacGuffin?',
        a: 'An object or goal that drives the characters’ actions and whose specific nature does not matter to the audience. Its function is to generate pursuit.',
      },
      {
        q: 'What is the difference between a MacGuffin and a mystery?',
        a: 'A MacGuffin motivates and is never explained; a mystery promises an explanation and must deliver one. Signalling that the contents matter converts the first into the second and creates a debt most stories cannot repay.',
      },
    ],
    related: ['chekhovs-gun', 'stakes', 'setup-and-payoff', 'dramatic-question'],
  },
  {
    slug: 'dramatic-irony',
    term: 'Dramatic Irony',
    aka: ['audience superiority', 'suspense through knowledge'],
    short:
      'The condition in which the audience knows something a character does not, which converts an ordinary scene into a tense one without changing a word of it.',
    tags: ['story'],
    body: [
      'Hitchcock’s formulation remains the clearest: two people talking at a table is a scene, and the same two people talking with a bomb under the table that only the audience knows about is fifteen minutes of suspense. Nothing in the dialogue changed. The audience’s knowledge did all of it.',
      'It is the most efficient tension device available, because it costs one earlier shot and buys tension across every subsequent scene involving the character who does not know. Its cost is that surprise is spent: you have traded a later reveal for sustained anxiety, and you cannot have both.',
      'The usual mistake is hoarding information in the belief that a twist is more valuable. In most cases it is not. Ten seconds of surprise at the end is worth less than three minutes of dread before it, and dread is what people remember.',
    ],
    qa: [
      {
        q: 'What is dramatic irony?',
        a: 'The audience knowing something a character does not. It converts ordinary scenes into tense ones without altering their content, because tension comes from the gap between what the viewer knows and what the character can act on.',
      },
      {
        q: 'Is it better to surprise the audience or let them know first?',
        a: 'Usually to let them know. Surprise pays once and briefly; dramatic irony pays across every scene until the character catches up. You can have one or the other, not both.',
      },
    ],
    related: ['foreshadowing', 'open-loop', 'cliffhanger', 'point-of-view'],
  },
  {
    slug: 'in-medias-res',
    term: 'In Medias Res',
    aka: ['starting in the middle', 'cold start'],
    short:
      'Beginning a story part-way through the action and supplying the context afterwards, so the audience is oriented by consequence rather than by setup.',
    tags: ['story', 'audience'],
    body: [
      'It works because a question is a stronger opening than an explanation. Dropping an audience into a scene already in motion creates an immediate gap — who, why, what just happened — and the mild disorientation is not a cost, it is the mechanism. People will tolerate not understanding for far longer than they will tolerate not caring.',
      'The technique has a debt attached. You have to pay the context back, and payments that arrive too late feel withheld while payments that arrive too early waste the opening. The usual rhythm is to resolve who and where quickly, and to hold why until it can do structural work.',
      'It is now close to mandatory in short-form video, where the first second decides everything. A piece that opens on a person introducing themselves has spent its most valuable moment on the least interesting information it contains.',
    ],
    qa: [
      {
        q: 'What does in medias res mean?',
        a: 'Beginning in the middle of the action, with context supplied afterwards. The audience is oriented by consequences rather than by setup, which creates an immediate question.',
      },
      {
        q: 'Is starting in the middle always better?',
        a: 'Not always, but it is nearly always better than opening on introductions. The technique creates a debt — the context has to be paid back — so it fails when the answer arrives too late to matter or too early to have earned anything.',
      },
    ],
    related: ['cold-open', 'hook', 'exposition', 'open-loop'],
  },
  {
    slug: 'reversal',
    term: 'Reversal',
    aka: ['peripeteia', 'the turn'],
    short:
      'A moment at which the situation inverts — an advantage becomes a liability, a win becomes a loss, an ally becomes an obstacle.',
    tags: ['story'],
    body: [
      'A reversal is not a surprise. A surprise is new information; a reversal is a change of position using information already in play, which is why good reversals feel inevitable in retrospect and cheap ones feel like the writer changed their mind. The difference is whether the elements were on the table beforehand.',
      'Reversals are the main defence against the flat middle. A sequence of escalating obstacles is monotonous no matter how large the obstacles get; a sequence in which the protagonist’s position inverts twice has a shape. Two well-placed reversals are worth more than five additional complications.',
      'At scene level, the test is whether the person with the power at the start of the scene still has it at the end. If they do, and nothing else changed, the scene is probably doing one job that could be done in a line.',
    ],
    qa: [
      {
        q: 'What is a reversal in a story?',
        a: 'A moment where the situation inverts — the advantage becomes the liability, the victory becomes the cost. It works with elements already established rather than with new information.',
      },
      {
        q: 'What is the difference between a reversal and a twist?',
        a: 'A twist adds information the audience did not have. A reversal re-orders what they already knew. Twists can feel arbitrary; well-built reversals feel inevitable afterwards.',
      },
    ],
    related: ['value-shift', 'midpoint', 'turning-point', 'story-beat'],
  },
  {
    slug: 'value-shift',
    term: 'Value Shift',
    aka: ['charge change', 'scene value'],
    short:
      'The change in what something is worth between the start and the end of a scene, and the most reliable single test of whether a scene is doing anything.',
    tags: ['story'],
    body: [
      'Every scene has a value in play — safety, trust, hope, status, freedom — and a functioning scene moves it, usually from positive to negative or the reverse. Write the value at the top of the scene with a plus or a minus, write it again at the bottom, and if the two are identical the scene is information delivery wearing a scene’s clothes.',
      'It is a better test than "is it interesting" because it is answerable by somebody who did not write the piece. Notes given in these terms are actionable in a way that "it drags" never is: you can point at scene four, show that trust starts negative and ends negative, and the conversation moves to what should have changed.',
      'The shift does not have to be large. A scene where trust moves from slightly negative to badly negative is working. A scene where it starts and ends in exactly the same place, however well shot, is not.',
    ],
    qa: [
      {
        q: 'What is a value shift in a scene?',
        a: 'The change in what a value — trust, safety, hope, status — is worth between the start and the end of the scene. A scene where the value does not move is delivering information rather than dramatising anything.',
      },
      {
        q: 'How do you test a scene for a value shift?',
        a: 'Name the value in play and mark it positive or negative at the top and at the bottom of the scene. Identical marks mean the scene is not working, regardless of how good the dialogue is.',
      },
    ],
    related: ['story-beat', 'scene-objective', 'reversal', 'beat-sheet'],
  },
  {
    slug: 'setup-and-payoff',
    term: 'Setup and Payoff',
    aka: ['plant and payoff', 'the pay-off pair'],
    short:
      'A paired structure in which something established early returns later with new weight, and the primary source of the feeling that an ending was earned.',
    tags: ['story'],
    body: [
      'The mechanism is recognition. A payoff works because the audience remembers the setup, and remembering it is itself a small pleasure that gets attributed to the story rather than to their own memory. This is why payoffs are the cheapest emotional effect available and why over-using them makes a piece feel mechanical.',
      'The ratio matters. Every setup you introduce is a debt, and unpaid debts accumulate as a vague sense that the piece did not add up. It is better to have three setups all paid than nine of which five land. Cutting an unpaid setup is almost always an improvement.',
      'The strongest version reverses the meaning rather than repeating it. A line that was a joke in the first minute and is not a joke in the last minute is doing far more than a line that simply recurs.',
    ],
    qa: [
      {
        q: 'What is setup and payoff?',
        a: 'Establishing something early and returning to it later with new weight. It produces the sense that an ending was earned, because the audience recognises the element and attributes the satisfaction to the story.',
      },
      {
        q: 'How many setups should a short film have?',
        a: 'Few, and all of them paid. Three paid setups beat nine of which five land, because unpaid setups accumulate into a general feeling that the piece did not add up.',
      },
    ],
    related: ['foreshadowing', 'chekhovs-gun', 'payoff', 'climax'],
  },
  {
    slug: 'turning-point',
    term: 'Turning Point',
    aka: ['pivot', 'plot turn'],
    short:
      'Any moment that redirects a story’s trajectory, of which act breaks and the midpoint are the largest examples.',
    tags: ['story'],
    body: [
      'Turning points exist at every scale. A scene has them, a sequence has them, an act has them. What identifies one is that the pursuit after it is different from the pursuit before it — not harder, different. Escalation is not a turn; if the protagonist is doing the same thing against greater resistance, the story is getting louder rather than moving.',
      'The practical use is in mapping. Marking the turns on a timeline shows the distribution immediately, and the two common pathologies are visible at a glance: everything bunched in the last quarter, or a long flat stretch in the second act with no turn in it at all.',
      'A turn needs a decision behind it to feel like character rather than plot. Something happening to the protagonist redirects the story; the protagonist choosing in response is what makes the redirection feel like theirs.',
    ],
    qa: [
      {
        q: 'What is a turning point in a story?',
        a: 'A moment that changes the direction of the pursuit, not just its difficulty. If the protagonist is doing the same thing against more resistance, that is escalation rather than a turn.',
      },
      {
        q: 'How many turning points should a story have?',
        a: 'More than most drafts have, and distributed rather than bunched. Map them on a timeline: a long flat stretch in the second act is the most common finding and the most fixable.',
      },
    ],
    related: ['act-break', 'reversal', 'midpoint', 'narrative-arc'],
  },
  {
    slug: 'scene-objective',
    term: 'Scene Objective',
    aka: ['character objective', 'what the character wants in the scene'],
    short:
      'What a character is actively trying to get from the other people in a scene, stated as something they could succeed or fail at within it.',
    tags: ['story'],
    body: [
      'Objectives have to be specific and interpersonal. "She wants respect" is a condition and cannot be won in a scene. "She wants him to admit he read the email" is an objective: it can be achieved, refused, or deflected, and each of those produces a different next line. Vague objectives are the leading cause of scenes where actors have nothing to play.',
      'The related pieces are the obstacle, which is what stands in the way, and the tactic, which is what the character switches to when the first approach fails. A scene in which the character never changes tactic is a scene with one beat, however long it runs.',
      'The diagnostic is quick and works on any draft: for each character in the scene, write what they want from the other, in a sentence beginning with a verb. If you cannot for one of them, that character is furniture and the scene will feel one-sided even if you cannot say why.',
    ],
    qa: [
      {
        q: 'What is a scene objective?',
        a: 'What a character is trying to get from another character within the scene, specific enough that they could succeed or fail at it before the scene ends.',
      },
      {
        q: 'Why do my scenes feel like nothing is happening?',
        a: 'Usually because one or more characters have no objective, or because nobody changes tactic. Write, for each character, what they want from the other in a sentence starting with a verb. A character you cannot write one for is furniture.',
      },
    ],
    related: ['value-shift', 'conflict', 'subtext', 'story-beat'],
  },
  {
    slug: 'subplot',
    term: 'Subplot',
    aka: ['B story', 'secondary storyline'],
    short:
      'A secondary storyline that runs alongside the main one and exists to say something the main plot cannot say about itself.',
    tags: ['story'],
    body: [
      'A subplot that is merely a second plot is a structural liability: it takes time from the first and pays back nothing. A subplot that works is one where the theme is examined from an angle the protagonist cannot see, usually through a character who is making the opposite mistake or the same one further along.',
      'The clearest test is intersection. If the subplot could be lifted out without changing the main story, it is a parallel piece rather than a subplot. The two lines have to touch — ideally at the midpoint and again near the climax — or the audience is tracking two things for the price of one.',
      'In short forms there is usually no room for one, and inserting a subplot into a two-minute film is the most common way to make it feel rushed. What short work uses instead is a single character who embodies the counter-position.',
    ],
    qa: [
      {
        q: 'What is a subplot for?',
        a: 'To examine the story’s theme from an angle the protagonist cannot occupy, usually through a character making the opposite mistake. A subplot that is just a second plot costs time and returns nothing.',
      },
      {
        q: 'How do you know if a subplot is working?',
        a: 'Try removing it. If the main story is unchanged, it is a parallel piece rather than a subplot. Working subplots intersect the main line at least twice and alter what the ending means.',
      },
    ],
    related: ['controlling-idea', 'narrative-arc', 'character-arc', 'pacing'],
  },
  {
    slug: 'world-building',
    term: 'World-Building',
    aka: ['worldcraft', 'setting design'],
    short:
      'Constructing the rules, texture and history of a story’s setting to the depth the story actually uses, and no further.',
    tags: ['story', 'production'],
    body: [
      'The productive discipline is subtractive. A world needs enough rules that its problems are specific and enough texture that it feels inhabited, and every element beyond that is a cost: to write, to design, to render, and to explain. The most common failure is a beautifully realised world in which nothing is difficult, because the rules were designed for richness rather than for pressure.',
      'The rules that matter are the ones that constrain the protagonist. What is scarce, what is forbidden, what costs something. A world where magic works but exhausts the user generates story; a world where magic simply works generates art direction.',
      'In generative production world-building has acquired a second, literal function: the world bible is the document the locks come from. Palette, light behaviour, materials, architecture and wardrobe rules written once and pasted into every prompt is what stops eleven shots from looking like eleven different worlds.',
    ],
    qa: [
      {
        q: 'How much world-building does a story need?',
        a: 'Enough that the protagonist’s problems are specific and the setting feels inhabited. Beyond that it is cost. The rules worth writing are the ones that constrain somebody.',
      },
      {
        q: 'What does world-building have to do with AI production?',
        a: 'The world bible becomes the lock block: palette, light, materials, architecture and wardrobe rules written once and pasted into every prompt. It is what stops a sequence looking like several unrelated worlds.',
      },
    ],
    related: ['premise', 'master-plate', 'register', 'set-specification'],
  },
  {
    slug: 'point-of-view',
    term: 'Point of View',
    aka: ['POV', 'narrative perspective'],
    short:
      'Whose knowledge and experience the audience is restricted to, which determines what can be withheld and therefore what suspense is available.',
    tags: ['story'],
    body: [
      'Point of view is a rule about information, not a camera position. Restrict the audience to one character’s knowledge and every revelation lands with that character, which makes surprise available and dramatic irony impossible. Give the audience more than any character has and the reverse is true. Both work; drifting between them without a reason is what makes a piece feel unmoored.',
      'The most common error is the accidental switch: a piece that has been rigorously inside one perspective cuts to information that character could not have, and the audience quietly stops trusting the rules. They will not name it, but the tension drops.',
      'In visual work the discipline is enforced by what the camera is allowed to see. Deciding early "we never see anything she does not see" is a constraint that solves dozens of later questions, and it is worth writing at the top of the treatment.',
    ],
    qa: [
      {
        q: 'What is point of view in storytelling?',
        a: 'The rule governing whose knowledge the audience shares. It determines what can be withheld, and therefore whether the piece runs on surprise or on dramatic irony.',
      },
      {
        q: 'Can you change point of view mid-story?',
        a: 'Yes, if the change is structured and consistent. What damages a piece is the accidental switch — a single moment of information the point-of-view character could not have — because it quietly tells the audience the rules are not real.',
      },
    ],
    related: ['dramatic-irony', 'protagonist', 'unreliable-narrator', 'exposition'],
  },
  {
    slug: 'unreliable-narrator',
    term: 'Unreliable Narrator',
    aka: ['untrustworthy narration'],
    short:
      'A narrator whose account the audience is eventually given reason to doubt, making the gap between what is said and what happened part of the story.',
    tags: ['story'],
    body: [
      'Unreliability only works if it is discoverable. The audience has to be able to reconstruct what actually happened from evidence the piece supplied, otherwise the reveal is not a reveal, it is the story admitting it was misleading and expecting credit. The rule is that a second viewing should be more coherent, not less.',
      'The interesting versions are not lying. A narrator who is self-deceived, limited, or defending themselves is more useful than one who is deliberately deceiving, because the gap then characterises them rather than merely tricking the audience.',
      'In commercial work the honest application is the testimonial where somebody is plainly describing their own behaviour more generously than the footage supports. It is charming rather than damning, and it is far more convincing than a perfectly consistent account.',
    ],
    qa: [
      {
        q: 'What is an unreliable narrator?',
        a: 'A narrator whose account the audience comes to doubt. The gap between the telling and the events becomes part of the meaning, usually characterising the narrator rather than merely misleading the viewer.',
      },
      {
        q: 'What makes an unreliable narrator work?',
        a: 'Discoverability. The audience must be able to reconstruct the truth from evidence already given, so a second viewing is more coherent rather than less.',
      },
    ],
    related: ['point-of-view', 'dramatic-irony', 'subtext', 'foreshadowing'],
  },
  {
    slug: 'montage',
    term: 'Montage',
    aka: ['sequence of shots', 'compression sequence'],
    short:
      'A sequence of shots that compresses time or accumulates meaning through juxtaposition rather than through continuous action.',
    tags: ['story', 'post'],
    body: [
      'Two distinct things share the word. The compression montage covers a passage of time — training, building, travelling — and is a convenience. The juxtaposition montage puts two unrelated images together so the audience produces a third meaning neither contains, which is the older and more interesting sense of the term.',
      'The compression version fails when it substitutes for a beat. If the work of a story is done inside a montage, the audience has been shown a summary of the most important part. It is worth asking, of every montage, whether it is covering time or avoiding a scene.',
      'It is disproportionately useful in generative production because it is native to the constraint: a montage is short clips joined by cuts, which is exactly what the tools produce well. That makes it a genuine strength and a trap, because a piece assembled entirely from montage has no scenes in it.',
    ],
    qa: [
      {
        q: 'What is a montage?',
        a: 'A sequence of shots that compresses time or creates meaning through juxtaposition rather than through continuous action. The two uses are different techniques that share a name.',
      },
      {
        q: 'When is a montage the wrong choice?',
        a: 'When it is covering a beat rather than covering time. If the important change happens inside the montage, the audience has been given a summary of the scene that mattered.',
      },
    ],
    related: ['pacing', 'temporal-coherence', 'cutdown', 'narrative-arc'],
  },

  // ============================================================== audience ===
  {
    slug: 'hook',
    term: 'Hook',
    aka: ['opening hook', 'the first three seconds'],
    short:
      'The opening moment of a piece, whose only job is to make continuing more attractive than leaving.',
    tags: ['audience', 'strategy'],
    body: [
      'A hook is not an introduction and not a summary. It is a mechanism that creates a reason to stay, and there are only a handful that reliably work: contradict something the audience believes, state a specific number, name a cost, withhold the subject of a sentence, or admit a failure. Everything else is a variation on one of those.',
      'The reason it dominates short-form is arithmetic rather than fashion. If eighty per cent of an audience leaves in the first two seconds, no improvement to the remainder of the piece can recover them, so the opening has a higher marginal value than the rest of the piece combined. That is unpleasant and it is true.',
      'The failure mode worth naming is the hook that has nothing to do with the piece. It works once, costs the audience’s trust, and trains them to skip the next one — which is why hook quality should be measured by what happens on the following video, not on this one.',
    ],
    qa: [
      {
        q: 'What makes a good hook?',
        a: 'A mechanism rather than a tone. Contradict a belief, state a specific number, name a cost, withhold the subject, or admit a failure. "Make it punchy" is not a mechanism and produces variations of the same sentence.',
      },
      {
        q: 'How long is a hook?',
        a: 'In short-form video, the first one to three seconds. In an article, the first sentence. In an email, the subject line. The length is whatever the audience gets before their decision to leave is made.',
      },
      {
        q: 'Why do hooks stop working?',
        a: 'Because a hook disconnected from the piece is a promise not kept, and audiences learn a channel’s reliability quickly. The honest measure of a hook is retention on the next video, not this one.',
      },
    ],
    related: ['open-loop', 'curiosity-gap', 'scroll-stopper', 'inciting-incident'],
  },
  {
    slug: 'open-loop',
    term: 'Open Loop',
    aka: ['unresolved question', 'narrative loop'],
    short:
      'An unanswered question deliberately left running so the audience carries a reason to keep watching into the next section.',
    tags: ['audience'],
    body: [
      'The mechanism is the Zeigarnik effect: unfinished tasks occupy attention more than finished ones. Ask a question and do not answer it, and the audience is holding something. Answer everything as you go and each moment is complete, which is comfortable and is the reason well-made explanatory content is so easy to stop watching.',
      'Loops stack. Open one in the first seconds, open a second before closing the first, and close them in a different order — this is the entire structural technique behind most long-form video that holds attention past the point where the subject alone would. The discipline is that every loop must close. Loops left open read as a piece that wasted your time.',
      'The commercial version is the reason a testimonial should not begin with the result. Stating the outcome first closes the only loop the piece had.',
    ],
    qa: [
      {
        q: 'What is an open loop in content?',
        a: 'A question raised and deliberately left unanswered so the audience carries it forward. Unfinished questions hold attention in a way completed ones do not.',
      },
      {
        q: 'How many open loops should a video have?',
        a: 'More than one and all of them closed. Opening a second before closing the first, and closing them out of order, is what holds attention across a long piece. An unclosed loop reads as a piece that wasted the viewer’s time.',
      },
    ],
    related: ['curiosity-gap', 'hook', 'cliffhanger', 'dramatic-question'],
  },
  {
    slug: 'curiosity-gap',
    term: 'Curiosity Gap',
    aka: ['information gap', 'knowledge gap'],
    short:
      'The discomfort produced by knowing that there is something specific you do not know, and the mechanism most hooks are built on.',
    tags: ['audience', 'strategy'],
    body: [
      'The gap has to be narrow to work. Vague ignorance is not motivating; knowing precisely what shape the missing piece is, is. "Something about pricing" produces nothing. "There is one line in their pricing page that costs them a third of their signups" produces a click, because the missing item is now specific enough to feel almost within reach.',
      'It is also the mechanism most easily abused, which is why clickbait is a curiosity gap with nothing behind it. The distinction is not in the technique but in whether the gap is closed by something worth the wait. Closing it in the first ten seconds and then delivering more is the version that survives repetition.',
      'The commercial test is simple: could the headline be true and the piece still be worthless? If yes, you have built a gap on an absence rather than on a finding.',
    ],
    qa: [
      {
        q: 'What is the curiosity gap?',
        a: 'The tension created by knowing specifically what you do not know. The narrower and more concrete the missing piece, the stronger the pull.',
      },
      {
        q: 'What is the difference between a curiosity gap and clickbait?',
        a: 'Whether the gap is closed by something worth the wait. The technique is identical; clickbait is the version with nothing behind it, and audiences price that in quickly.',
      },
    ],
    related: ['open-loop', 'hook', 'payoff', 'scroll-stopper'],
  },
  {
    slug: 'pattern-interrupt',
    term: 'Pattern Interrupt',
    aka: ['disrupt', 'break state'],
    short:
      'A deliberate break in rhythm, framing or expectation, placed where attention is predicted to drop.',
    tags: ['audience', 'post'],
    body: [
      'Attention decays on a predictable curve, and it decays fastest where a piece becomes rhythmically regular. An interrupt resets it: a cut to a different shot size, a change of location, a sudden silence, an on-screen graphic, a change of speaker. The specific device matters far less than the fact that something is now different.',
      'Placement should come from data rather than from taste. Retention graphs show where viewers leave, and those points are usually five to fifteen seconds after the last change of anything. Placing interrupts at those timestamps is one of the few edit decisions with a directly measurable effect.',
      'Over-applied, it produces the frantic style where every second contains a zoom, a caption and a sound effect, which is itself a rhythm and decays the same way. The technique depends on the surrounding material being steady enough for a break to register.',
    ],
    qa: [
      {
        q: 'What is a pattern interrupt in video?',
        a: 'A deliberate break in the established rhythm — a shot size change, a location change, a silence, a graphic — placed where attention is predicted to drop.',
      },
      {
        q: 'How often should you use a pattern interrupt?',
        a: 'Where the retention graph says, which is usually five to fifteen seconds after the last change of anything. Applied constantly it becomes the rhythm itself and stops interrupting anything.',
      },
    ],
    related: ['retention-curve', 'pacing', 'hook', 'cutdown'],
  },
  {
    slug: 'retention-curve',
    term: 'Retention Curve',
    aka: ['audience retention graph', 'drop-off curve'],
    short:
      'The graph of how many viewers are still watching at each second, and the only editorial feedback in video that is not an opinion.',
    tags: ['audience', 'strategy'],
    body: [
      'Three features carry almost all the information. The initial cliff, in the first two or three seconds, which measures the hook and nothing else. The slope through the middle, which measures whether the piece keeps giving reasons to stay. And any sharp local drop, which is a specific moment that lost people and can usually be identified to the frame.',
      'The common analytical error is treating average view duration as the metric. It is an average of a shape and hides everything useful: two pieces with identical averages can have completely different curves, one of which is fixable and one of which is not.',
      'Rises matter too, and are under-used. A bump means people scrubbed back, which almost always means something was said too quickly or shown too briefly. That is an instruction to slow down at exactly one timestamp, which is the most actionable note a graph can give you.',
    ],
    qa: [
      {
        q: 'What does a retention curve tell you?',
        a: 'Where viewers left. The first-seconds cliff measures the hook, the middle slope measures whether the piece keeps earning attention, and a sharp local drop identifies a specific moment that failed.',
      },
      {
        q: 'What does a rise in the retention graph mean?',
        a: 'Viewers scrubbed back, which usually means something was said too fast or shown too briefly. It is an instruction to slow down at that exact point.',
      },
    ],
    related: ['pattern-interrupt', 'hook', 'pacing', 'cost-per-accepted-asset'],
  },
  {
    slug: 'cold-open',
    term: 'Cold Open',
    aka: ['teaser', 'pre-titles sequence'],
    short:
      'A scene placed before any titles, branding or setup, whose job is to establish a reason to stay before the piece formally begins.',
    tags: ['audience', 'story'],
    body: [
      'Television invented it for the obvious commercial reason: the audience decides during the titles, so the titles cannot come first. The same logic now applies to almost every format, because every format has an equivalent of titles — the logo sting, the intro music, the "hi, I’m", the agenda slide — and all of them are decision points where people leave.',
      'The strongest cold opens are not summaries or highlights. They are complete small units that raise a question the main piece answers, which is why the trailer-style montage opening is weaker than a single strange moment: a montage promises everything and specifies nothing.',
      'The corporate version is the branded intro animation, and it is worth stating plainly that it costs viewers. If it must exist, it belongs after the cold open, where the audience has a reason to sit through it.',
    ],
    qa: [
      {
        q: 'What is a cold open?',
        a: 'A scene before the titles or branding, designed to give the audience a reason to stay before the piece formally starts.',
      },
      {
        q: 'Should a corporate video have an intro animation?',
        a: 'Not at the front. Every branded sting is a decision point where viewers leave. If it has to exist, it goes after an opening that has already earned the attention.',
      },
    ],
    related: ['hook', 'in-medias-res', 'open-loop', 'retention-curve'],
  },
  {
    slug: 'cliffhanger',
    term: 'Cliffhanger',
    aka: ['unresolved ending', 'hard out'],
    short:
      'Ending a unit at a moment of unresolved tension so that continuing is more attractive than stopping.',
    tags: ['audience', 'story'],
    body: [
      'A cliffhanger works on the same mechanism as an open loop, applied at a structural boundary: the end of an episode, a chapter, a part one. The boundary is the point at which stopping is easiest, which is exactly why it is the point that should be least comfortable.',
      'The distinction between a good and a cheap one is whether the tension is real. Cutting away mid-sentence is a cheap cliffhanger and audiences resent it because the resolution turns out to have been nothing. A real one ends on a decision made and not yet acted on, which is unresolved without being withheld.',
      'It carries an obligation: the opening of the next unit has to pay it, quickly and without a recap that dissolves the tension it depended on.',
    ],
    qa: [
      {
        q: 'What makes a cliffhanger work?',
        a: 'Real unresolved tension rather than a withheld reveal. Ending on a decision made and not yet acted on works; cutting away mid-sentence is resented because the resolution turns out to be nothing.',
      },
      {
        q: 'Should short-form video use cliffhangers?',
        a: 'Only with a genuine part two that is easy to reach. A cliffhanger with no accessible payoff is a broken promise, and the cost lands on every subsequent piece.',
      },
    ],
    related: ['open-loop', 'act-break', 'payoff', 'dramatic-irony'],
  },
  {
    slug: 'payoff',
    term: 'Payoff',
    aka: ['the return', 'resolution of a setup'],
    short:
      'The moment a promise made earlier is kept, and the source of most of the satisfaction an audience attributes to a piece.',
    tags: ['audience', 'story'],
    body: [
      'Every hook, loop, setup and question is a promise, and a piece is largely judged on its ratio of promises made to promises kept. This is why a modest piece that pays everything can outperform an ambitious one that pays most things: the unpaid remainder is not neutral, it registers as a small betrayal.',
      'Timing has a shape. A payoff too soon after its setup reads as obvious; too long after and the audience has stopped holding the setup, so the return costs them the work of remembering. The interval that works is usually longer than instinct suggests and shorter than a first draft delivers.',
      'The strongest payoffs recontextualise rather than repeat. The element returns with a different meaning, so the audience gets the recognition and a second thing on top of it.',
    ],
    qa: [
      {
        q: 'What is a payoff?',
        a: 'The moment an earlier promise — a setup, a loop, a hook, a question — is kept. Audiences judge a piece largely on the ratio of promises made to promises kept.',
      },
      {
        q: 'Why do endings feel unsatisfying even when nothing is wrong?',
        a: 'Usually unpaid setups. Elements the piece emphasised and never returned to do not register as neutral; they accumulate as a sense that it did not add up.',
      },
    ],
    related: ['setup-and-payoff', 'open-loop', 'climax', 'denouement'],
  },
  {
    slug: 'scroll-stopper',
    term: 'Scroll Stopper',
    aka: ['thumb-stopper', 'stop-scroll creative'],
    short:
      'The visual property of a piece that arrests a feed scroll before any of its content has been understood.',
    tags: ['audience', 'strategy'],
    body: [
      'Stopping happens before comprehension. In the fraction of a second a thumb takes to pass, nobody has read a caption or parsed a scene — they have registered contrast, motion, a face, or an incongruity. So a scroll stopper is a compositional property rather than a message, and treating it as a message is why so many well-written pieces are never seen.',
      'What reliably works is narrower than it looks: a face at unusual scale, an object where it should not be, high contrast against the feed’s prevailing tone, motion in an unexpected direction, or legible text that is genuinely large. Most of these are decisions made at the frame level, not in the edit.',
      'It has a relationship to the hook and is not the same thing. The scroll stopper buys the first fraction of a second visually; the hook buys the next three verbally. A piece can win one and lose the other, and the retention graph will tell you which.',
    ],
    qa: [
      {
        q: 'What makes creative stop the scroll?',
        a: 'A compositional property registered before comprehension: contrast, a face at unusual scale, unexpected motion, an incongruous object, or genuinely large legible text. Not the message, which nobody has read yet.',
      },
      {
        q: 'Is a scroll stopper the same as a hook?',
        a: 'No. The scroll stopper buys the first fraction of a second visually; the hook buys the following seconds with a reason to stay. A piece can win one and lose the other.',
      },
    ],
    related: ['hook', 'retention-curve', 'aspect-ratio-matrix', 'register'],
  },
  {
    slug: 'narrative-transportation',
    term: 'Narrative Transportation',
    aka: ['absorption', 'story immersion'],
    short:
      'The state in which an audience is absorbed enough in a story that they stop evaluating its claims, which is why stories persuade where arguments do not.',
    tags: ['audience', 'strategy'],
    body: [
      'Transported audiences counter-argue less. That is the whole commercial case for narrative in marketing, and it is also the reason the technique carries an ethical weight that a bar chart does not: reduced scrutiny is a real effect and using it to carry a claim that would not survive scrutiny is a decision, not an accident.',
      'The conditions are unglamorous. Concrete detail, a coherent world, a character whose situation is legible, and no interruption to the surface — a factual error, a visible seam, an obvious falsity all break it instantly and the audience returns to evaluating. This is a specific reason generative artefacts cost more than they appear to: a wrong hand is not an aesthetic problem, it is a transportation problem.',
      'It also explains why testimonial advertising outperforms feature advertising while being less informative. The information is not what is doing the work.',
    ],
    qa: [
      {
        q: 'Why do stories persuade better than facts?',
        a: 'Because an absorbed audience counter-argues less. Transportation reduces the scrutiny applied to claims, which is why narrative outperforms information and why it carries an ethical obligation not to smuggle claims through it.',
      },
      {
        q: 'What breaks narrative transportation?',
        a: 'Anything that returns attention to the surface: a factual error, a visible edit seam, an implausible detail, a generative artefact. This is why a wrong hand costs more than it looks like it should.',
      },
    ],
    related: ['ai-slop', 'temporal-coherence', 'show-dont-tell', 'substantiation'],
  },
  {
    slug: 'call-to-action',
    term: 'Call to Action',
    aka: ['CTA', 'the ask'],
    short:
      'The single thing you want the audience to do next, stated once, in the place where they are most persuaded rather than at the end by convention.',
    tags: ['audience', 'strategy'],
    body: [
      'One ask. Two asks is a choice, and a choice presented at the end of a piece is reliably answered with neither. This is the most commonly ignored rule in commercial video, usually because two stakeholders each wanted something.',
      'Placement should follow the argument rather than the runtime. If the strongest moment of belief is at sixty per cent, the ask belongs there, and the rest of the piece can continue afterwards. The convention of putting it last exists because it is tidy, not because it converts.',
      'Specificity matters more than urgency. "Reply with the word audit" outperforms "get in touch today" because it names an action small enough to complete without a decision about how. Urgency without specificity is the shape of an ask nobody acts on.',
    ],
    qa: [
      {
        q: 'Where should the call to action go?',
        a: 'At the point of maximum persuasion, which is often not the end. The convention of placing it last is tidy rather than effective.',
      },
      {
        q: 'How many calls to action should a video have?',
        a: 'One. Two asks constitute a choice, and a choice offered at the end of a piece is usually answered with neither.',
      },
    ],
    related: ['denouement', 'payoff', 'retention-curve', 'cutdown'],
  },
  {
    slug: 'pacing',
    term: 'Pacing',
    aka: ['rhythm', 'tempo'],
    short:
      'The rate at which new information, change or tension arrives, which an audience experiences as speed regardless of how fast anything on screen is moving.',
    tags: ['audience', 'story'],
    body: [
      'Pacing is not cutting speed. A piece cut every eight frames can feel slow if nothing changes, and a four-minute static shot can feel fast if the situation shifts continuously. What is being measured is change per unit time, which is why the fix for a slow piece is usually a structural one rather than an edit one.',
      'It also has to vary. Uniform pace of any speed becomes a rhythm and rhythms become inaudible; the sense of acceleration in a well-made third act comes from the contrast with a slower second, not from absolute speed. Removing every slow moment removes the thing that made the fast ones feel fast.',
      'The practical test is to list what changes every ten seconds. A stretch with nothing in it is the slow part, and it will be the slow part whether you cut it faster or not.',
    ],
    qa: [
      {
        q: 'What is pacing in film?',
        a: 'The rate at which change and new information arrive. It is not cutting speed: a fast-cut sequence in which nothing changes feels slow, and a long static shot with a shifting situation feels fast.',
      },
      {
        q: 'How do you fix slow pacing?',
        a: 'List what changes every ten seconds. The stretches with nothing in them are the slow parts, and cutting them faster will not help — they need a change or they need to go.',
      },
    ],
    related: ['narrative-arc', 'retention-curve', 'story-beat', 'montage'],
  },
  {
    slug: 'tone',
    term: 'Tone',
    aka: ['register of a piece', 'attitude'],
    short:
      'The attitude a piece takes towards its own material, which the audience reads within seconds and uses to calibrate everything after.',
    tags: ['audience', 'story', 'strategy'],
    body: [
      'Tone is established almost immediately and is expensive to change later. An audience decides in the first few seconds whether a piece is serious, ironic, warm or cold, and everything subsequent is interpreted through that decision. A joke arriving in minute three of something that established itself as sincere does not read as funny; it reads as a mistake.',
      'The most common commercial failure is tonal inconsistency introduced by committee, where each stakeholder’s note pushes the piece a little further from wherever it started. The result is a piece that is not confusing in any particular moment and is unaccountably difficult to watch.',
      'It is distinct from mood, which varies scene to scene, and from voice, which belongs to a speaker. A piece can move through many moods while holding one tone, and it usually should.',
    ],
    qa: [
      {
        q: 'What is tone in a film or video?',
        a: 'The attitude the piece takes towards its material. It is set within seconds, and everything after it is interpreted through that setting, which is why late tonal shifts read as errors rather than as variety.',
      },
      {
        q: 'What is the difference between tone and mood?',
        a: 'Tone belongs to the whole piece and should be consistent. Mood belongs to a scene and should vary. A piece can move through many moods while holding one tone.',
      },
    ],
    related: ['register', 'controlling-idea', 'narrative-transportation', 'pacing'],
  },
  {
    slug: 'story-spine',
    term: 'Story Spine',
    aka: ['the once-upon-a-time spine', 'eight-sentence spine'],
    short:
      'A fill-in-the-blank sentence sequence — once upon a time, every day, until one day, because of that, until finally — that produces a causally connected story rather than a list of events.',
    tags: ['story', 'audience'],
    body: [
      'The spine’s value is the phrase "because of that", repeated. It forces causality: each event has to be caused by the previous one rather than merely following it. Most weak stories, and nearly all weak corporate ones, are chronologies where "and then" would work as well as "because of that", and the spine exposes that in about two minutes.',
      'It is a diagnostic instrument rather than a template, and it is the fastest one there is. Eight sentences, filled in honestly, will tell you whether a story exists before anybody has written a treatment or booked anything.',
      'Where it breaks down is on structures that do not run on causality — kishōtenketsu in particular, whose turn is deliberately not caused by what precedes it. That is a limit of the tool, not a fault in the story.',
    ],
    qa: [
      {
        q: 'What is the story spine?',
        a: 'A sequence of sentence stems — once upon a time, every day, until one day, because of that, because of that, until finally, and ever since then — that forces each event to be caused by the previous one.',
      },
      {
        q: 'How do you know if your story is just a chronology?',
        a: 'Try replacing every "because of that" with "and then". If nothing is lost, there is no causal chain and you have a sequence of events rather than a story.',
      },
    ],
    related: ['beat-sheet', 'narrative-arc', 'kishotenketsu', 'logline'],
  },
];
