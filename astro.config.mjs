// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// NOTE: keep `site` in sync with SITE_URL in src/config/site.ts.
// https://astro.build/config
export default defineConfig({
  site: 'https://www.carolinafinefoods.com',
  integrations: [react(), sitemap()],
});
