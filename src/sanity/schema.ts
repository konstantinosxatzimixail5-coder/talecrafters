import { copyTypes } from './pageTypes';
import { objectTypes } from './objects';
import { collectionTypes } from './collections';

// Three groups, none of them written twice:
//   - the collections, which are the body of the site (posts, case studies,
//     glossary terms, brands, captures, questions, resources, writing)
//   - the small shapes they share (a picture, a stack step, a control gate)
//   - the page copy documents, generated from src/content/registry.ts
export const schemaTypes = [...collectionTypes, ...objectTypes, ...copyTypes];
