import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from '@/sanity/schema';

export default defineConfig({
  name: 'talecrafters-studio',
  title: 'TaleCrafters Blog',
  projectId: 'xxfr3yxy',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  basePath: '/studio',
});
