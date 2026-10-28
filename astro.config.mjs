// @ts-check
import { defineConfig, envField } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

// El sitio es estático; los endpoints de formularios se marcan con `prerender = false`.
// `site` y el sitemap se activan cuando exista el dominio definitivo.
export default defineConfig({
  integrations: [react()],
  adapter: vercel(),
  // Credenciales de Google Sheets: solo servidor, nunca llegan al navegador.
  // Son opcionales para poder compilar sin ellas; el endpoint avisa si faltan.
  env: {
    schema: {
      GOOGLE_SERVICE_ACCOUNT_EMAIL: envField.string({
        context: 'server',
        access: 'secret',
        optional: true,
      }),
      GOOGLE_PRIVATE_KEY: envField.string({
        context: 'server',
        access: 'secret',
        optional: true,
      }),
      GOOGLE_SHEET_ID: envField.string({
        context: 'server',
        access: 'secret',
        optional: true,
      }),
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
