<template>
	<div class="grid place-items-center">
		<img :src="$store.state.darkMode ? mewhite : meblack" class="w-96 h-96" alt="Animated Picture" />
		<div class="flex flex-col items-center text-2xl">
			<span class="font-mono">Hey, I'm</span>
			<span class="mt-4 text-3xl font-medium">Vivek Wadhwani</span>
			<span class="flex items-center mt-6 font-mono text-lg">
				<span class="mr-3">></span>
				<div ref="typeme" id="typeme" class="typeme"></div
			></span>
		</div>
	</div>
</template>

<script>
import Typed from 'typed.js';

import meblack from '../assets/content/meblack.png';
import mewhite from '../assets/content/mewhite.png';

export default {
	data() {
		return {
			meblack,
			mewhite,
		};
	},

	mounted() {
		new Typed(this.$refs.typeme, {
			strings: [
				'I had a typing speed of <b class="p-1 bg-gray-100 rounded-md dark:bg-gray-800">78wpm</b>',
				'I have a typing speed of <b class="p-1 bg-gray-100 rounded-md dark:bg-gray-800">89wpm</b>',
				'I want a typing speed of <b class="p-1 bg-gray-100 rounded-md dark:bg-gray-800">121wpm</b>',
			],
			typeSpeed: 40,
			loopCount: Infinity,
		});
	},
};
</script>
