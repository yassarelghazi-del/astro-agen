// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    sanity({
      projectId: process.env.SANITY_PROJECT_ID || 'kvdn3782', // Placeholder or env
      dataset: process.env.SANITY_DATASET || 'production',
      studioBasePath: '/admin',
      useCdn: true,
      apiVersion: '2024-03-20',
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});