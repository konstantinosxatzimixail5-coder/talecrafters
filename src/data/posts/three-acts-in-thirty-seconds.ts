import type { Post } from './types';

export const post: Post = {
  slug: 'three-act-structure-in-thirty-seconds',
  title: 'Three-Act Structure in Thirty Seconds',
  metaTitle: 'Three-Act Structure in a 30-Second Ad: How It Compresses',
  metaDescription:
    'How classical structure survives at advertising length: what each act gets, which beat is always the one missing, and the four shapes that work when three acts genuinely will not fit.',
  excerpt:
    'The shape does not change at thirty seconds. The tolerance does: one beat per act, and the complication is the one everybody deletes.',
  published: '2026-07-24',
  author: 'Konstantinos Chatzimichail',
  section: 'Story',
  tags: ['Story', 'Craft'],
  keywords: [
    'three act structure 30 second ad',
    'story structure short film',
    'advert story structure',
    'narrative structure commercial',
    'short form story structure',
    'kishotenketsu advertising',
  ],
  image: 'three-acts-in-thirty-seconds',
  imageAlt: 'A thirty-second timeline divided into three unequal parts with one beat marked in each.',
  standfirst:
    'At thirty seconds, three-act structure gets one beat per act: a situation, a complication, a resolution. The complication is the beat that gets cut in almost every commercial draft, which is why so many finished adverts are a description of a product with music on it.',
  body: [
    {
      t: 'p',
      text: 'People assume short lengths need a different structure. They mostly do not. What changes is the tolerance: at ninety minutes you can spend four scenes establishing a want, and at thirty seconds you get one shot. The shape survives; the margin for anything that is not doing work disappears entirely.',
    },
    { t: 'h2', text: 'The allocation' },
    {
      t: 'table',
      caption: 'Three acts at three lengths',
      head: ['Act', '30 seconds', '90 seconds', 'What it must contain'],
      rows: [
        ['One: situation', '5–8 seconds', '15–25 seconds', 'Someone, wanting something, in a world with a rule in it'],
        ['Two: complication', '12–18 seconds', '40–55 seconds', 'The want obstructed, and one attempt that fails'],
        ['Three: resolution', '5–10 seconds', '15–25 seconds', 'The answer, and the changed state'],
      ],
    },
    {
      t: 'p',
      text: 'The failed attempt in act two is the piece most often missing. Without it there is no complication, only a delay — and an audience reads a delay as padding rather than as tension, however well shot it is.',
    },
    { t: 'h2', text: 'The beat that always gets cut' },
    {
      t: 'p',
      text: 'In a commercial edit, the first thing to go when the piece runs long is the failure. It feels expendable because it is the part where the product does not work yet, and because somebody in the approval chain is uncomfortable with a shot in which things are going badly.',
    },
    {
      t: 'p',
      text: 'Cutting it is what produces the advert where a person has a mild inconvenience and then does not have it. That is a description of a purchase, not a story about one, and it converts accordingly.',
    },
    {
      t: 'note',
      title: 'The protection',
      text: 'Put the failure in the timing plan at brief stage with seconds attached. A beat with a duration written next to it survives an approval round; a beat described in prose does not.',
    },
    { t: 'h2', text: 'Compression techniques that actually work' },
    {
      t: 'ol',
      items: [
        'Start after the setup. Open on the situation already in progress and let the audience infer the ordinary world from what is being disrupted.',
        'Let one object carry act one. A specific prop can establish a person, a job and a stake in two seconds where dialogue needs eight.',
        'Overlap acts. The complication can begin in the same shot the situation ends, which buys two or three seconds and reads as pace.',
        'Cut the establishing shot. It is almost always the least informative six seconds in the piece.',
        'Give the resolution one image and no explanation. The changed state, shown once, beats any line stating it.',
      ],
    },
    { t: 'h2', text: 'When three acts genuinely will not fit' },
    {
      t: 'p',
      text: 'At six or ten seconds it will not, and forcing it produces a piece that gestures at three things and lands none. Four alternatives, each of which is a complete shape rather than a truncation.',
    },
    {
      t: 'p',
      text: 'Kishōtenketsu. Four parts with a turn instead of a conflict: setup, development, an unexpected juxtaposition, and the beat where it lands. It is the native structure of the four-panel comic and of a large share of what performs in short-form video, and it works where no antagonist is available, which is most brand contexts.',
    },
    {
      t: 'p',
      text: 'Setup and payoff, alone. Two beats. Plant something in the first half and return to it in the second with a changed meaning. This is a complete structure and not a fragment of one.',
    },
    {
      t: 'p',
      text: 'The single reversal. One state, inverted once. Nothing else. Its whole strength is that the audience has time to register both states.',
    },
    {
      t: 'p',
      text: 'The list with a break. Three parallel things and a fourth that breaks the pattern. Structurally a joke, and it works for the same reason jokes do.',
    },
    { t: 'h2', text: 'Testing a short before it is made' },
    {
      t: 'ul',
      items: [
        'Write it as a question beginning with "will". If you cannot, you have a description.',
        'Write the three beats with seconds against each. If they total more than the runtime, you have found the problem before it cost anything.',
        'Point at the failure. If there is no shot in which the want is obstructed and an attempt does not work, add one or accept that this is a demonstration film.',
        'Check the resolution is shown rather than stated. A line that announces the outcome is a beat that was not earned.',
        'Read the whole thing aloud with a timer. Almost every draft is fifteen per cent longer than its slot and the fifteen per cent is always in act one.',
      ],
    },
    {
      t: 'cta',
      href: '/glossary/kishotenketsu',
      label: 'Kishōtenketsu, defined',
      text: 'The four-part structure that turns on juxtaposition rather than conflict, and why it suits brand work with no available antagonist.',
    },
  ],
  faqs: [
    {
      q: 'Does three-act structure work in a 30-second advert?',
      a: 'Yes, with one beat per act: roughly five to eight seconds of situation, twelve to eighteen of complication, and five to ten of resolution. The shape survives at any length; what disappears is the margin for anything not doing work.',
    },
    {
      q: 'What beat is usually missing from a commercial?',
      a: 'The failed attempt in act two. It feels expendable in an edit because it is the part where things are going badly, and cutting it produces an advert where somebody has a mild inconvenience and then does not — a description of a purchase rather than a story about one.',
    },
    {
      q: 'What structure works for a 10-second video?',
      a: 'Not three acts. Use kishōtenketsu (setup, development, turn, landing), a setup-and-payoff pair, a single reversal, or a list of three with a fourth that breaks the pattern. Each is a complete shape rather than a truncated one.',
    },
    {
      q: 'How do you compress a story into a shorter runtime?',
      a: 'Start after the setup, let one specific object carry act one, overlap the end of the situation with the start of the complication, cut the establishing shot, and give the resolution one image rather than a line explaining it.',
    },
    {
      q: 'How do you protect a structural beat through client approvals?',
      a: 'Put it in the timing plan at brief stage with seconds written against it. A beat with a duration attached survives an approval round; a beat described in prose is the first thing cut when the piece runs long.',
    },
  ],
  terms: ['three-act-structure', 'kishotenketsu', 'setup-and-payoff', 'reversal', 'story-beat', 'pacing'],
  related: [
    'why-your-ai-video-has-no-story',
    'the-beat-sheet-comes-before-the-shot-list',
    'how-to-write-a-hook-for-short-form-video',
  ],
};
