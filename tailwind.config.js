const colors = require('tailwindcss/colors');
import { extract, fontSize } from 'fluid-tailwind';

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
		fontSize,
		screens,
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
	content: {
		extract,
	},
	plugins: [require('fluid-tailwind')],
};
