export default {
	buildModules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
	head: {
		title: 'devivek',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'description', content: "devivek's website" },
		],
		link: [{ hid: 'icon', rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},
	target: 'static',
};
