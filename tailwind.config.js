const colors = require('tailwindcss/colors');

module.exports = {
	purge: [
		'./components/**/*.{vue,js}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
	],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors,
			spacing: {
				192: '48rem',
			},
			ringColor: colors,
		},
	},
	variants: {
		extend: {
			boxShadow: ['dark'],
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
