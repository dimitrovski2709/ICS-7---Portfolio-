import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
	integrations: [
		// Enable Preact to support Preact JSX components.
		preact(),
	],

	site: `https://dimitrovski2709.gitlab.io`,
	base: '/portfolio-cs7',
});
