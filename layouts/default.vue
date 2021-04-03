<template>
	<div :class="{ dark: $store.state.darkMode }">
		<div class="w-full min-h-screen text-gray-900 bg-gray-50 dark:bg-gray-900 dark:text-gray-50">
			<div class="px-12 pt-12 lg:px-36 xl:px-48">
				<nav class="flex items-center justify-between text-xl">
					<nuxt-link to="/" class="bg-gray-100 rounded-md dark:bg-gray-800">
						<span class="p-2 font-mono hover:underline">devivek.me</span>
					</nuxt-link>
					<div class="flex items-center space-x-4">
						<Dark />
						<Button><a href="#about">about</a></Button>
						<Button><a href="#projects">projects</a></Button>
						<Button><a href="#experience">experience</a></Button>
					</div>
				</nav>
				<Nuxt />
			</div>
		</div>
	</div>
</template>

<script>
import Dark from '../components/dark';
import Button from '../components/text-button';

export default {
	components: { Dark, Button },
};
</script>
