import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './src/sanity/schemaTypes'

export default defineConfig({
    name: 'default',
    title: 'Agency Website',

    projectId: import.meta.env.SANITY_PROJECT_ID || 'kvdn3782',
    dataset: import.meta.env.SANITY_DATASET || 'production',

    plugins: [structureTool(), visionTool()],

    schema: {
        types: schema.types,
    },
})
