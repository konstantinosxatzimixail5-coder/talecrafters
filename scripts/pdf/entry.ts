// Bundle entry for the PDF builder. esbuild pulls these two modules out of the
// app so the generator and the website read exactly the same content.
export { resources } from '../../src/data/resources';
export { tools } from '../../src/data/downloads';
