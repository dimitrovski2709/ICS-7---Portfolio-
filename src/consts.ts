export const SITE = {
	title: "Angel Angelov's Portfolio",
	description: '',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		Portfolio: [
			{ text: 'Introduction', link: 'en/introduction' },
			{ text: 'LO1 The security specialist', link: 'en/security-specialist' },
			{
				text: 'LO2 The researcher and developer',
				link: 'en/researcher-developer',
			},
			{
				text: 'LO3 The security professional',
				link: 'en/security-professional',
			},
		],
		Specialization: [
			{ text: 'Orientation', link: 'en/specialization/orientation' },
		],
		'Group Project': [{ text: 'Introduction', link: 'en/group/introduction' }],
		'Personal Project': [{ text: 'Ideas', link: 'en/personal/ideas' }],
	},
};
