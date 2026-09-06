// Repo-native blog posts.
//
// The blog reads from Sanity. That is the right home for anything the studio
// wants to edit without a deploy, and the wrong home for a body of reference
// writing that has to survive, stay versioned and be reviewable in a diff. So
// posts live here as data and the routes read both: Sanity first, these
// second, one merged index, one sitemap.
//
// The body is a small block union rather than Markdown or HTML. Markdown means
// shipping a parser and hoping nobody writes a raw <script> into a post;
// HTML-in-a-string means dangerouslySetInnerHTML on every article. A closed set
// of blocks renders as ordinary React, cannot inject anything, and makes the
// shapes a post is allowed to take an explicit decision rather than whatever
// the author typed.

export type Block =
  | { t: 'p'; text: string }
  | { t: 'h2'; text: string }
  | { t: 'h3'; text: string }
  | { t: 'ul'; items: string[] }
  | { t: 'ol'; items: string[] }
  | { t: 'quote'; text: string }
  | { t: 'table'; caption?: string; head: string[]; rows: string[][] }
  /** A boxed aside. Used for the one number or rule a reader should leave with. */
  | { t: 'note'; title: string; text: string }
  /** An internal link out to a resource, glossary term or case study. */
  | { t: 'cta'; href: string; label: string; text: string };

export interface PostFaq {
  q: string;
  a: string;
}

/**
 * External references, rendered at the foot of the post and emitted as
 * `citation` on the Article node. A piece that makes regulatory claims and
 * does not show where they came from is asking to be believed, which is a
 * worse position than being checkable.
 */
export interface PostSource {
  label: string;
  href: string;
  /** Publisher or issuing body, e.g. "European Commission". */
  publisher?: string;
}

export interface Post {
  slug: string;
  title: string;
  /** Overrides `title` in the <title> tag when the SEO title differs. */
  metaTitle?: string;
  metaDescription: string;
  /** One or two sentences for the index card and the article abstract. */
  excerpt: string;
  /** YYYY-MM-DD. */
  published: string;
  modified?: string;
  author: string;
  /** Editorial section. Feeds `articleSection`. */
  section: string;
  tags: string[];
  keywords: string[];
  /** Path under /img/blog, without extension or size suffix. */
  image: string;
  /** A hero uploaded in the Studio. Wins over `image` when set. */
  heroUpload?: unknown;
  imageAlt: string;
  /**
   * The lede paragraph, shown above the body in a heavier weight. Answer-engine
   * bait in the honest sense: it states the answer in the first fifty words so
   * a model quoting the page quotes something true and complete.
   */
  standfirst: string;
  body: Block[];
  /** Rendered as an FAQ block and as FAQPage schema. */
  faqs: PostFaq[];
  /** Glossary slugs this post is about. Emitted as `mentions`. */
  terms?: string[];
  /** Other post slugs worth reading next. */
  related?: string[];
  /** Supply Drop resource slugs this post links to. */
  resources?: string[];
  sources?: PostSource[];
  /**
   * Set on anything touching law or regulation. Renders a standing notice and
   * keeps the piece honest about what it is: a working summary written by a
   * production studio, not advice from a lawyer.
   */
  legalNotice?: boolean;
}

/** Rough reading time from the body text, so nobody maintains a second number. */
export function readingMinutes(post: Post): number {
  const words = post.body.reduce((n, b) => {
    if ('text' in b) return n + b.text.split(/\s+/).length;
    if ('items' in b) return n + b.items.join(' ').split(/\s+/).length;
    if (b.t === 'table') return n + [...b.head, ...b.rows.flat()].join(' ').split(/\s+/).length;
    return n;
  }, 0);
  return Math.max(1, Math.round(words / 230));
}

export function wordCount(post: Post): number {
  return post.body.reduce((n, b) => {
    if ('text' in b) return n + b.text.split(/\s+/).length;
    if ('items' in b) return n + b.items.join(' ').split(/\s+/).length;
    if (b.t === 'table') return n + [...b.head, ...b.rows.flat()].join(' ').split(/\s+/).length;
    return n;
  }, 0);
}
