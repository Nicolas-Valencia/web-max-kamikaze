// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

// El sitio es estático; los endpoints de formularios se marcan con `prerender = false`.
// `site` y el sitemap se activan cuando exista el dominio definitivo.
export default defineConfig({
  integrations: [react()],
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
});
