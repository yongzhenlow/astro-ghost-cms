import { defineConfig } from 'astro/config';

import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  site: 'http://yourwebsite.com', // your production url
  integrations: [image()],
});
