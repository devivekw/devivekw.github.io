<template>
	<div class="mx-2">
		<div id="landing" class="grid min-h-screen pb-40 place-items-center">
			<Landing />
		</div>
		<div id="about" class="grid min-h-screen place-items-center"><About /></div>
		<div id="projects" class="min-h-screen bg-green-50">projects</div>
		<div id="experience" class="min-h-screen bg-yellow-50">experience</div>
	</div>
</template>

<script>
import Landing from '../components/landing';
import About from '../components/about';

export default {
	components: { Landing, About },
};
</script>
