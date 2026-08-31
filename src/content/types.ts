// The shape of an editable box.
//
// Every string on this site that an editor should be able to change is
// declared once, in `registry.ts`, as one of these. That single declaration
// produces three things that used to be written by hand and drift apart: the
// field in the Sanity Studio, the TypeScript type the page reads, and the
// value the page renders when the dataset has nothing to say.
//
// The fallback is not a placeholder. It is the copy that is live right now, so
// a dataset that is empty, unreachable or half-filled renders exactly what the
// repo renders. Sanity overrides per field, never per page: an editor who
// fills in one heading does not blank out the eleven fields underneath it.

/** A label/value row, as used by the meta strip under a page headline. */
export interface Pair {
  label: string;
  value: string;
}

interface FieldBase {
  /** The label shown in the Studio. */
  title: string;
  /** Guidance shown under the input. Say what the field does to the page. */
  description?: string;
}

export interface StringField extends FieldBase {
  type: 'string';
  fallback: string;
}

export interface TextField extends FieldBase {
  type: 'text';
  rows?: number;
  fallback: string;
}

export interface PairsField extends FieldBase {
  type: 'pairs';
  fallback: readonly Pair[];
}

export type FieldDef = StringField | TextField | PairsField;

export interface SectionDef {
  /** The tab this section gets in the Studio. */
  title: string;
  description?: string;
  fields: Record<string, FieldDef>;
}

export interface PageDef {
  /** The name of the document in the Studio. */
  title: string;
  /** The route this copy drives, shown in the Studio so an editor can go look. */
  path: string;
  /** Ordering in the Studio sidebar. Lower sorts first. */
  order?: number;
  sections: Record<string, SectionDef>;
}

export type Registry = Record<string, PageDef>;

/** What a field resolves to once the dataset and the fallback are merged. */
export type Resolved<F> = F extends PairsField ? Pair[] : string;

/** The typed object a page receives: `copy.hero.lede`, checked at compile time. */
export type PageCopy<P extends PageDef> = {
  [S in keyof P['sections']]: {
    [F in keyof P['sections'][S]['fields']]: Resolved<P['sections'][S]['fields'][F]>;
  };
};
