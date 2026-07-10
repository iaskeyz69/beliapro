// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');

// Read at config time so Vercel's WEB3FORMS_ACCESS_KEY is baked into the static build.
const web3formsAccessKey =
  env.PUBLIC_WEB3FORMS_ACCESS_KEY ||
  env.WEB3FORMS_ACCESS_KEY ||
  process.env.PUBLIC_WEB3FORMS_ACCESS_KEY ||
  process.env.WEB3FORMS_ACCESS_KEY ||
  '';

// https://astro.build/config
export default defineConfig({
  site: 'https://beliapro.com',
  vite: {
    plugins: [tailwindcss()],
    envPrefix: ['PUBLIC_', 'WEB3FORMS_'],
    define: {
      'import.meta.env.WEB3FORMS_ACCESS_KEY': JSON.stringify(web3formsAccessKey),
    },
  },
  integrations: [sitemap()],
});
