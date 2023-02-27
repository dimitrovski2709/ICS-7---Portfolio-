import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
	integrations: [
		// Enable Preact to support Preact JSX components.
		preact(),
	],
	outDir: 'public',
	publicDir: 'static',
	site: `https://angelovdev.gitlab.io`,
	base: '/portfolio-cs7',
});
