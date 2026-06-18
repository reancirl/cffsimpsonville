import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.cffsimpsonville.com',
  trailingSlash: 'never',
  integrations: [
    react(),
    // Blog pages are noindex (placeholder content), so keep them out of the
    // sitemap too — a sitemap entry would contradict the noindex signal.
    sitemap({ filter: (page) => !/\/blog(\/|$)/.test(page) }),
  ],
});
