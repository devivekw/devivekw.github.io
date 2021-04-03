const colors = require('tailwindcss/colors');

module.exports = {
	purge: [
		'./components/**/*.{vue,js}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors,
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
