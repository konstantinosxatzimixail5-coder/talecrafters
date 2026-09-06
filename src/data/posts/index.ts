// The post index.
//
// One import per file rather than a glob, so a post that fails to compile
// fails the build loudly instead of quietly disappearing from the blog. The
// export is sorted newest first, which is the order every consumer wants.

import type { Post } from './types';

import { post as cost2026 } from './generative-video-production-cost-2026';
import { post as aiAct } from './eu-ai-act-article-50';
import { post as ukDisclosure } from './uk-disclosure';
import { post as masterPlate } from './master-plate';
import { post as syntheticUgc } from './synthetic-ugc-consent';
import { post as hundredShots } from './hundred-shots';
import { post as agenticVsAutomation } from './agentic-vs-automation';
import { post as costPerAsset } from './cost-per-accepted-asset';
import { post as howToBrief } from './how-to-brief';
import { post as repurposing } from './repurposing-engine';
import { post as marketingWeek } from './creative-automation-week';
import { post as foodPhotography } from './food-photography';
import { post as looksCheap } from './why-ai-video-looks-cheap';
import { post as trainedIdentity } from './trained-identity';
import { post as temporalCoherence } from './temporal-coherence';

export type { Post, Block, PostFaq, PostSource } from './types';
export { readingMinutes, wordCount } from './types';

export const posts: Post[] = [
  cost2026,
  aiAct,
  ukDisclosure,
  masterPlate,
  syntheticUgc,
  hundredShots,
  agenticVsAutomation,
  costPerAsset,
  howToBrief,
  repurposing,
  marketingWeek,
  foodPhotography,
  looksCheap,
  trainedIdentity,
  temporalCoherence,
].sort((a, b) => b.published.localeCompare(a.published));

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

/** Posts that link to a given Supply Drop resource. Used to cross-link the two. */
export const postsForResource = (slug: string) =>
  posts.filter((p) => p.resources?.includes(slug));

/** Posts that define or lean on a given glossary term. */
export const postsForTerm = (slug: string) => posts.filter((p) => p.terms?.includes(slug));
