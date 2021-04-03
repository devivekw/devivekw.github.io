<template>
	<div class="grid place-items-center">
		<img :src="$store.state.darkMode ? mewhite : meblack" class="w-96 h-96" alt="Animated Picture" />
		<div class="flex flex-col items-center space-y-2 text-2xl">
			<span class="font-mono">Hey, I'm</span>
			<span class="text-3xl font-medium">Vivek Wadhwani</span>
		</div>
	</div>
</template>

<script>
import meblack from '../assets/content/meblack.png';
import mewhite from '../assets/content/mewhite.png';

export default {
	data() {
		return {
			meblack,
			mewhite,
		};
	},
};
</script>
