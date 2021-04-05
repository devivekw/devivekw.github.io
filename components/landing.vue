<template>
	<div class="grid place-items-center">
		<nuxt-img v-if="!$store.state.darkMode" src="/meblack.png" class="w-48 h-48 sm:w-96 sm:h-96" />
		<nuxt-img v-else src="/mewhite.png" class="w-48 h-48 sm:w-96 sm:h-96" />
		<div class="flex flex-col items-center text-base sm:text-2xl">
			<span class="font-mono">Hey, I'm</span>
			<span class="mt-4 text-xl font-medium sm:text-3xl">Vivek Wadhwani</span>
			<span class="flex items-center mt-6 font-mono text-sm sm:text-lg">
				<span class="mr-3">></span>
				<div ref="typeme" id="typeme" class="typeme"></div
			></span>
		</div>
	</div>
</template>

<script>
import Typed from 'typed.js';

export default {
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
};
</script>
