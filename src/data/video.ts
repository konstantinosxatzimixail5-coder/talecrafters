// The films that are actually watchable, wherever they appear on the site.
//
// One type for client cases, concept projects and the originals, because a
// video on a case study and a video on a spec shelf are the same object with
// the same duties: a poster the page can paint before anything loads, a
// duration a crawler can read, and an id nobody has to paste a full URL for.
//
// The player is a facade. Nothing from YouTube loads until somebody clicks,
// which is both a performance decision and a consent one: an embed that runs
// on page load sets cookies for a visitor who never asked to watch anything.

export interface ProjectVideo {
  /** The eleven-character YouTube id, not a URL. */
  youtubeId: string;
  /** What the film is, in the studio's words. Used as the VideoObject name. */
  title: string;
  /** One or two sentences under the player. Also the VideoObject description. */
  note: string;
  /** ISO 8601, e.g. PT1M48S. */
  duration: string;
  /** YYYY-MM-DD. */
  uploadDate: string;
  /** How the film was cut. Sets the shape of the player. */
  ratio?: '16:9' | '9:16';
  /** A manifest key for the poster frame. Falls back to YouTube's own still. */
  poster?: string;
  posterAlt?: string;
}

/** The player page, for schema and for the fallback link. */
export const watchUrl = (id: string) => `https://www.youtube.com/watch?v=${id}`;

/** The privacy-mode embed, requested only after a click. */
export const embedUrl = (id: string) => `https://www.youtube-nocookie.com/embed/${id}`;

/** YouTube's own still, used when a project has no poster frame of its own. */
export const remoteThumb = (id: string) => `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
