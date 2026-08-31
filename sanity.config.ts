import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from '@/sanity/schema';
import { pageCopyDocs } from '@/sanity/pageTypes';

// Page copy is one document per page, at a fixed id. Listing them explicitly
// keeps them singletons: an editor opens "Home", not a folder that invites a
// second one. The generated types are hidden from the top level for the same
// reason, so the only route to them is the list below.
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
                        )
                    )
                  )
              ),
            S.divider(),
            S.documentTypeListItem('post').title('Blog posts'),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
    // Page copy is reached through the singleton list, never created ad hoc.
    templates: (prev) => prev.filter((t) => !copyTypeNames.has(t.schemaType)),
  },
  document: {
    // Same reason: no "create new Home" in the global new-document menu.
    newDocumentOptions: (prev) => prev.filter((o) => !copyTypeNames.has(o.templateId)),
  },
  basePath: '/studio',
});
