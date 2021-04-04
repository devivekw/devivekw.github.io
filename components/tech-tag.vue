<template>
	<span
		class="flex items-center justify-center px-2 leading-snug rounded-full ring-1"
		:class="{
			'ring-teal-300 text-teal-800 bg-teal-100': type == 'vue',
			'ring-emerald-300 text-emerald-800 bg-emerald-100': type == 'nuxt',
			'ring-amber-300 text-amber-800 bg-amber-100': type == 'firebase',
			'ring-cyan-300 text-cyan-800 bg-cyan-100': type == 'tailwind',
			'ring-green-300 text-green-800 bg-green-100': type == 'mongodb',
			'ring-fuchsia-300 text-fuchsia-800 bg-fuchsia-100': type == 'graphql',
			'ring-blue-300 text-blue-800 bg-blue-100': type == 'flutter',
			'ring-trueGray-300 text-trueGray-800 bg-trueGray-100': type == 'next.js',
		}"
	>
		<slot> </slot>
	</span>
</template>

<script>
export default {
	name: 'TechTag',
	props: {
		type: String,
	},
};
</script>
