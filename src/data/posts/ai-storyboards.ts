import type { Post } from './types';

export const post: Post = {
  slug: 'ai-storyboards-and-animatics-what-they-are-good-for',
  title: 'AI Storyboards and Animatics: What They Are Genuinely Good For',
  metaTitle: 'AI Storyboards and Animatics: Where They Help and Where They Mislead',
  metaDescription:
    'Generated boards are fast enough to change how previsualisation works, and seductive enough to sell a shot nobody can produce. Where they earn their place, and the four ways they mislead a client.',
  excerpt:
    'A board used to be a drawing everyone knew was a drawing. Now it is a photograph of a film that does not exist.',
  published: '2026-07-10',
  author: 'Konstantinos Chatzimichail',
  section: 'Method',
  tags: ['Method', 'Production', 'Story'],
  keywords: [
    'AI storyboard',
    'AI animatic',
    'previsualisation AI',
    'generated storyboards',
    'AI previz',
    'storyboard generator',
  ],
  image: 'ai-storyboards',
  imageAlt: 'A storyboard row where three frames are sketches and three are photoreal, side by side.',
  standfirst:
    'Generated boards are worth it for blocking, coverage and pacing decisions, where speed beats fidelity. They are dangerous for client approval, because a photoreal board sells a frame the production may not be able to deliver, and the gap becomes an argument later.',
  body: [
    {
      t: 'p',
      text: 'A storyboard has always been a communication device with a deliberate amount of abstraction in it. The abstraction was the point: everyone looking at a sketch understood they were agreeing to a composition, not to a photograph. Generated boards removed the abstraction without removing the uncertainty, and that combination is where the trouble is.',
    },
    { t: 'h2', text: 'What they are genuinely good at' },
    {
      t: 'ul',
      items: [
        'Blocking. Where people stand and who faces where, resolved in minutes rather than in a day of sketching.',
        'Coverage decisions. Generating the same beat as a wide, a medium and a close and looking at all three before committing.',
        'Pacing. Assembling boards into an animatic with the real intended durations exposes a slow middle earlier than any read-through.',
        'Alternatives. Six versions of a difficult beat is now an affordable question rather than an expensive one.',
        'Internal alignment. A director and a producer arguing about a shot can now argue about an image instead of about a description, which shortens it considerably.',
      ],
    },
    {
      t: 'p',
      text: 'What connects all five is that they are decisions about structure and geometry, where being roughly right quickly beats being exactly right slowly.',
    },
    { t: 'h2', text: 'The four ways they mislead' },
    {
      t: 'table',
      caption: 'What a photoreal board implies that it should not',
      head: ['The board shows', 'What it implies', 'The reality'],
      rows: [
        ['A perfect face', 'That face, in that light, in the film', 'It is a different person in every frame unless identity is conditioned.'],
        ['Legible packaging', 'The type will read', 'Type is the least reliable thing to reconstruct, and the board did not have to hold it for 96 frames.'],
        ['A complex camera move', 'The move is available', 'A still cannot fail at motion. The shot can.'],
        ['A crowd', 'That density is deliverable', 'Every background figure is a chance to see a wrong hand.'],
      ],
    },
    {
      t: 'p',
      text: 'All four are the same underlying error: a still image does not have to survive time, and everything expensive about generative video is a function of time.',
    },
    {
      t: 'note',
      title: 'The rule we work to',
      text: 'A board is only shown to a client at a fidelity the production can definitely deliver. If the final shots will be stylised, the boards are stylised. If we are unsure whether a shot is achievable, the board for it is deliberately rough — because the roughness is the honest signal, and a beautiful board for an unachievable shot is a promise somebody will hold us to.',
    },
    { t: 'h2', text: 'The animatic is the more valuable artefact' },
    {
      t: 'p',
      text: 'A board is a set of compositions. An animatic is a structure with durations, and durations are where films fail. Cutting boards to the intended timings, with scratch voice and temp music, tells you within one viewing whether the piece has a slow middle, whether the hook works, and whether the ending lands.',
    },
    {
      t: 'p',
      text: 'It is also the cheapest possible place to discover that a beat does not work. A dead beat costs a still to fix at this stage; the same discovery after rendering costs the shots.',
    },
    { t: 'h2', text: 'A workable process' },
    {
      t: 'ol',
      items: [
        'Beats first, in text. Boards generated from an untested structure are expensive-looking versions of the same problem.',
        'Generate boards deliberately rough for anything you are not certain of. Fidelity is a claim.',
        'Cut the animatic to real durations immediately, before refining any frame. The timing question is the one that matters.',
        'Fix structure at animatic stage. This is the whole point of the exercise and the step most often skipped in the excitement.',
        'Only then raise fidelity, and only on the frames a client needs to approve.',
        'Carry the approved boards forward as reference frames into production, so the board and the shot share conditioning rather than merely resembling each other.',
      ],
    },
    { t: 'h2', text: 'The thing boards cannot previsualise' },
    {
      t: 'p',
      text: 'Performance. A still can show a pose and cannot show a delivery, and the difference between a shot that works and one that does not is very often two seconds of a face doing something small before a line.',
    },
    {
      t: 'p',
      text: 'This is why an animatic with scratch voice outperforms a beautiful board set by a distance. The voice supplies the thing the pictures cannot, and half the notes on a first animatic turn out to be about timing that only exists once somebody is speaking.',
    },
    {
      t: 'cta',
      href: '/glossary/previsualisation',
      label: 'Previsualisation, defined',
      text: 'What previz is for, what it is not, and where the generative version changes the economics.',
    },
  ],
  faqs: [
    {
      q: 'Are AI storyboards worth using?',
      a: 'For blocking, coverage decisions, pacing and generating alternatives, yes — those are structural questions where being roughly right quickly beats being exactly right slowly. For client approval they carry a risk, because a photoreal board sells a frame the production may not be able to deliver.',
    },
    {
      q: 'Why can a photoreal storyboard be misleading?',
      a: 'Because a still does not have to survive time, and everything expensive in generative video is a function of time. A board can show a perfect face, legible packaging, a complex camera move and a crowd — none of which it had to hold for ninety-six frames.',
    },
    {
      q: 'What fidelity should a storyboard be?',
      a: 'The fidelity the production can definitely deliver. If the final shots will be stylised, board in that style. If a shot is uncertain, board it deliberately rough — the roughness is the honest signal, and a beautiful board for an unachievable shot is a promise somebody will hold you to.',
    },
    {
      q: 'Is an animatic more useful than a storyboard?',
      a: 'Usually. A board is a set of compositions; an animatic is a structure with durations, and durations are where films fail. Cut to real timings with scratch voice, it tells you in one viewing whether the middle sags and whether the ending lands.',
    },
    {
      q: 'What can storyboards not previsualise?',
      a: 'Performance. A still shows a pose and cannot show a delivery, and the difference between a shot that works and one that does not is often two seconds of a face doing something small before a line. This is why scratch voice on an animatic outperforms a beautiful board set.',
    },
  ],
  terms: ['previsualisation', 'shot-list', 'beat-sheet', 'reference-image', 'hero-frame'],
  related: [
    'the-beat-sheet-comes-before-the-shot-list',
    'how-to-brief-an-ai-video-production-studio',
    'why-your-ai-video-has-no-story',
  ],
};
