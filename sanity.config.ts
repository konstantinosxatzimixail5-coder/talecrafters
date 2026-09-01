import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from '@/sanity/schema';
import { pageCopyDocs } from '@/sanity/pageTypes';

// Page copy is one document per page, at a fixed id. Listing them explicitly
// keeps them singletons: an editor opens "Home", not a folder that invites a
// second one.
//
// Only the global "create new" menu is filtered, never the templates. The
// template is what carries every field's initial value, which is the live
// sentence from the repo, so removing it is how you end up opening "Home" and
// being shown an Untitled document with empty boxes instead of the copy you
// came to edit.
const copyTypeNames = new Set(pageCopyDocs.map((d) => d.schemaType));

export default defineConfig({
  name: 'talecrafters-studio',
  title: 'TaleCrafters',
  projectId: 'xxfr3yxy',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Page copy')
              .child(
                S.list()
                  .title('Page copy')
                  .items(
                    pageCopyDocs.map((d) =>
                      S.listItem()
                        .id(d.id)
                        .title(d.title)
                        .child(
                          S.document()
                            .documentId(d.id)
                            .schemaType(d.schemaType)
                            .title(d.title)
                            // Named explicitly rather than left to resolution.
                            // This is the template that carries the live copy
                            // into the fields the first time the document is
                            // opened; the default id is the schema type name.
                            .initialValueTemplate(d.schemaType)
                        )
                    )
                  )
              ),
            S.divider(),
            S.documentTypeListItem('post').title('Blog posts'),
            S.documentTypeListItem('caseStudy').title('Case studies'),
            S.documentTypeListItem('conceptBrand').title('Concept brands'),
            S.documentTypeListItem('capture').title('Photoreal captures'),
            S.documentTypeListItem('writingSample').title('Writing samples'),
            S.divider(),
            S.documentTypeListItem('glossaryTerm').title('Glossary terms'),
            S.documentTypeListItem('resource').title('Armoury resources'),
            S.documentTypeListItem('faqGroup').title('FAQ sections'),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
  document: {
    // Same reason: no "create new Home" in the global new-document menu.
    newDocumentOptions: (prev) => prev.filter((o) => !copyTypeNames.has(o.templateId)),
  },
  // Releases is a beta feature that adds a perspective switcher to the toolbar
  // and, while that switcher is on Published, refuses to create a document
  // without first being told which release to put it in. On a site edited by
  // one person that is a banner in the way of every new page, so the plain
  // draft-then-publish flow is restored. Delete these three lines to have it
  // back.
  releases: {
    enabled: false,
  },
  basePath: '/studio',
});
