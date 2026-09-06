import type { Post } from './types';

export const post: Post = {
  slug: 'how-to-write-a-hook-for-short-form-video',
  title: 'How to Write a Hook: Six Mechanisms, Twenty Variants, One Rule',
  metaTitle: 'How to Write a Hook for Short-Form Video (6 Mechanisms)',
  metaDescription:
    'A hook is a mechanism, not a tone. The six that reliably work, how to generate twenty real variants instead of twenty rewrites of one sentence, and why hook quality should be measured on the next video rather than this one.',
  excerpt:
    'Asking for twenty punchy openings gets you one sentence twenty ways. Asking for six mechanisms gets you six openings that are actually different.',
  published: '2026-07-28',
  author: 'Konstantinos Chatzimichail',
  section: 'Story',
  tags: ['Story', 'Performance', 'Craft'],
  keywords: [
    'how to write a hook',
    'video hook examples',
    'short form video hook',
    'hooks for reels',
    'first three seconds video',
    'ad hook formula',
    'scroll stopper hook',
  ],
  image: 'writing-hooks',
  imageAlt: 'Twenty opening lines for the same video, sorted by the mechanism each uses.',
  standfirst:
    'A hook is a mechanism for making continuing more attractive than leaving. Six work reliably: contradict a belief, name a cost, state a specific number, withhold the subject, admit a failure, or start mid-action. Everything else is a variation of one of them, and "make it punchy" is not a mechanism.',
  body: [
    {
      t: 'p',
      text: 'If most of an audience leaves in the first two seconds, no improvement to the rest of the piece can recover them. That makes the opening the highest-leverage sentence you will write, which is unpleasant and true, and it is why hooks deserve the same craft attention as an ending.',
    },
    {
      t: 'p',
      text: 'The reason most hook writing is bad is that people ask for a quality rather than a mechanism. Ask for twenty punchy openings and you get one sentence in twenty costumes. Ask for four openings that contradict a belief, four that name a cost and four that withhold the subject, and you get twelve genuinely different things.',
    },
    { t: 'h2', text: 'The six mechanisms' },
    {
      t: 'table',
      caption: 'Each mechanism, what it does to the viewer, and an example shape',
      head: ['Mechanism', 'What it does', 'Shape'],
      rows: [
        [
          'Contradiction',
          'Creates a gap between what they believe and what you said',
          '"Shortening the clip raised completion more than the edit did."',
        ],
        [
          'Cost',
          'Makes the stakes concrete before the subject arrives',
          '"That one setting cost us four days of renders."',
        ],
        [
          'Specific number',
          'Signals that a real thing was measured',
          '"We ran ninety versions. Twelve shipped."',
        ],
        [
          'Withheld subject',
          'Opens a narrow curiosity gap',
          '"Nobody warned us about the second one."',
        ],
        [
          'Admitted failure',
          'Buys credibility, which is a scarce currency in a feed',
          '"We got this wrong for about six months."',
        ],
        [
          'Mid-action start',
          'Orients by consequence rather than by setup',
          'Opening on the argument, not on who is arguing.',
        ],
      ],
    },
    {
      t: 'p',
      text: 'Two of them can be combined and three cannot. Contradiction plus a number is strong. Withheld subject plus admitted failure is strong. Three mechanisms in one sentence produces a sentence nobody can parse in the second available.',
    },
    { t: 'h2', text: 'The rule' },
    {
      t: 'p',
      text: 'The hook has to be about the piece. A hook disconnected from what follows works exactly once and then trains the audience that your openings are unreliable, at which point every subsequent piece pays the tax.',
    },
    {
      t: 'p',
      text: 'This is why hook quality should be measured on the next video rather than on this one. A hook that wins today’s retention curve and loses tomorrow’s first two seconds has cost you money and shown you a graph that says otherwise.',
    },
    {
      t: 'note',
      title: 'The honest test',
      text: 'Could the hook be true and the piece still be worthless? If yes, you have built a curiosity gap on an absence rather than on a finding, which is the technical definition of clickbait.',
    },
    { t: 'h2', text: 'How to generate twenty that are actually different' },
    {
      t: 'ol',
      items: [
        'Write the claim first. One sentence, the single true and specific thing the piece proves. If you cannot write it, the hook is not the problem.',
        'Write what the audience currently believes. One sentence. The gap between these two is the raw material.',
        'Take each of the six mechanisms in turn and write three or four openings using only that mechanism. Do not mix at this stage.',
        'Cap the length. Nine words for video, twelve for a headline. The cap does more for quality than any amount of rewriting.',
        'Ban the three defaults: the rhetorical question, "in this video", and the word "secret". All three are recognised by audiences as the shape of nothing.',
        'Read all twenty aloud. The ones that are hard to say are hard to hear, and in a feed the audio arrives before the meaning.',
      ],
    },
    { t: 'h2', text: 'The hook and the scroll stopper are different jobs' },
    {
      t: 'p',
      text: 'The scroll stopper is visual and works before comprehension: contrast, a face at unusual scale, unexpected motion, an incongruous object, genuinely large legible text. It buys you the fraction of a second in which the hook can be heard.',
    },
    {
      t: 'p',
      text: 'A piece can win one and lose the other. If retention shows a cliff at half a second, the visual failed. If it shows a cliff at two to three seconds, the sentence failed. The graph tells you which one to rewrite, and it is worth checking before rewriting either.',
    },
    { t: 'h2', text: 'Where hooks live outside short-form' },
    {
      t: 'ul',
      items: [
        'The subject line, which is a hook with no visual support at all and therefore the hardest one.',
        'The first line of a case study, where the usual failure is opening on the client’s name rather than on the problem.',
        'The cold open of a longer film, which is a hook with a whole scene to do it in.',
        'The opening sentence of an article, where the same six mechanisms apply and the specific number is the strongest of them.',
        'The first slide of a pitch, where admitted failure outperforms everything else and almost nobody uses it.',
      ],
    },
    {
      t: 'cta',
      href: '/supply-drop/prompting-library',
      label: 'The hook prompt',
      text: 'The prompt we use to generate twenty variants by mechanism rather than twenty rewrites of one, in the Prompting Library.',
    },
  ],
  faqs: [
    {
      q: 'What makes a good video hook?',
      a: 'A mechanism rather than a tone. Six work reliably: contradict what the audience believes, name a cost, state a specific number, withhold the subject, admit a failure, or start mid-action. "Make it punchy" is not a mechanism and produces one sentence in twenty costumes.',
    },
    {
      q: 'How long is a hook?',
      a: 'In short-form video, the first one to three seconds. Cap the line at about nine words for video and twelve for a headline — the cap improves quality more reliably than rewriting does.',
    },
    {
      q: 'How do you write twenty different hooks?',
      a: 'Write the claim and the audience’s current belief first, then take each of the six mechanisms in turn and write three or four openings using only that mechanism. Variety comes from the constraint list, never from asking for variety.',
    },
    {
      q: 'What is the difference between a hook and a scroll stopper?',
      a: 'The scroll stopper is visual and works before comprehension — contrast, an unusual scale, unexpected motion. It buys the fraction of a second in which the hook can be heard. A retention cliff at half a second means the visual failed; a cliff at two to three seconds means the sentence did.',
    },
    {
      q: 'Why do hooks stop working over time?',
      a: 'Because a hook disconnected from the piece is a promise not kept, and audiences learn a channel’s reliability quickly. This is why hook quality should be measured on the next video’s first two seconds, not on this video’s retention curve.',
    },
    {
      q: 'What words should you avoid in a hook?',
      a: 'Rhetorical questions, "in this video", and "secret". All three are immediately recognised as the shape of a piece with nothing specific in it, and they consume the only seconds you have.',
    },
  ],
  terms: ['hook', 'curiosity-gap', 'scroll-stopper', 'open-loop', 'retention-curve', 'in-medias-res'],
  related: [
    'reading-a-retention-curve-as-an-edit-note',
    'open-loops-and-why-explainer-videos-lose-people',
    'why-your-ai-video-has-no-story',
  ],
};
