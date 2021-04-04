<template>
	<div :class="{ dark: $store.state.darkMode }">
		<div class="w-full min-h-screen text-sm text-gray-900 sm:text-base bg-gray-50 dark:bg-gray-900 dark:text-gray-50">
			<div class="relative bg-gray-50 dark:bg-gray-900">
				<nav
					class="sticky top-0 z-50 flex items-center justify-between px-12 pb-2 text-xl bg-gray-50 dark:bg-gray-900 lg:px-36 xl:px-72"
					:class="[showShadow ? 'shadow dark:shadow pt-2' : 'pt-12']"
				>
					<nuxt-link to="/" class="bg-gray-100 rounded-md dark:bg-gray-800">
						<span class="p-2 font-mono hover:underline">devivek.me</span>
					</nuxt-link>
					<div class="flex items-center space-x-4">
						<Dark />
						<Button class="hidden sm:block"><a href="#about">about</a></Button>
						<Button class="hidden sm:block"><a href="#experience">experience</a></Button>
						<Button class="hidden sm:block"><a href="#projects">projects</a></Button>
					</div>
				</nav>
				<div class="px-12 lg:px-36 xl:px-48">
					<Nuxt />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Dark from '../components/dark';
import Button from '../components/text-button';

export default {
	components: { Dark, Button },
	data() {
		return {
			showShadow: false,
		};
	},
	methods: {
		handleScroll: function(event) {
			if (window) {
				if (window.scrollY > window.innerHeight * 0.75) {
					this.showShadow = true;
				} else {
					this.showShadow = false;
				}
			}
		},
	},

	mounted: function() {
		if (window) {
			window.addEventListener('scroll', this.handleScroll);
		}
	},
};
</script>
