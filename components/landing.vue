<template>
	<div class="grid place-items-center">
		<nuxt-img v-if="!$store.state.darkMode" src="/meblack.png" class="w-48 h-48 sm:w-96 sm:h-96" />
		<nuxt-img v-else src="/mewhite.png" class="w-48 h-48 sm:w-96 sm:h-96" />
		<div class="flex flex-col items-center text-base sm:text-2xl">
			<span class="font-mono">Hey, I'm</span>
			<span class="mt-4 text-xl font-medium sm:text-3xl">Saakshi is a hoe</span>
			<span class="flex items-center mt-6 font-mono text-sm sm:text-lg">
				<span class="mr-3"></span>
				<div ref="typeme" id="typeme" class="typeme"></div>
			</span>

			<!-- Icons -->
			<span class="flex items-center mt-10 dark:text-gray-100">
				<Button>
					<a href="https://github.com/devivekw" @click.stop="SAEvent('github')">
						<svg class="w-8 h-8 fill-current sm:w-10 sm:h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path
								d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"
							/>
						</svg>
					</a>
				</Button>
				<Button class="ml-6">
					<a href="https://www.linkedin.com/in/devivek/" @click.stop="SAEvent('linkedin')">
						<svg
							class="w-6 h-6 fill-current sm:w-8 sm:h-8"
							role="img"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>LinkedIn icon</title>
							<path
								d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
							/>
						</svg>
					</a>
				</Button>
				<Button class="ml-5 tracking-wide uppercase">
					<a class="text-base sm:text-lg" @click.stop="SAEvent('resume')" href="/resume.pdf">resume</a>
				</Button>
			</span>
			<!-- Resume -->
		</div>
	</div>
</template>

<script>
import Typed from 'typed.js';
import Button from '../components/text-button';

export default {
	components: { Button },

	data() {
		return {};
	},

	mounted() {
		new Typed(this.$refs.typeme, {
			strings: [
				'I had a typing speed of <b class="p-1 bg-gray-100 rounded-md dark:bg-gray-800">68wpm</b>',
				'I have a typing speed of <b class="p-1 bg-gray-100 rounded-md dark:bg-gray-800">89wpm</b>',
				'I want a typing speed of <b class="p-1 bg-gray-100 rounded-md dark:bg-gray-800">121wpm</b>',
			],
			typeSpeed: 40,
			loopCount: Infinity,
			cursorChar: '&#9647;',
			loop: true,
		});
	},

	methods: {
		SAEvent(type) {
			// console.log(type);
			this.saEvent(type);
		},
	},
};
</script>
