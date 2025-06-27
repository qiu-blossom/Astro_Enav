// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://nav.blueke.top/',
    integrations: [sitemap({
      filter: (page) => page !== 'https://nav.blueke.top/',
    }),
],
    adapter: vercel(),
});
