<template>
	<div class="mx-2 space-y-8 sm:space-y-12 md:space-y-32">
		<div id="landing" class="grid min-h-screen pb-40 place-items-center">
			<Landing />
		</div>
		<div id="about" class="grid min-h-screen place-items-center"><About /></div>
		<div id="experience" class="flex flex-col items-center justify-center min-h-screen"><Experience /></div>
		<div id="projects" class="grid min-h-screen place-items-center"><Projects /></div>
		<div><Footer></Footer></div>
	</div>
</template>

<script>
import Landing from '../components/landing';
import About from '../components/about';
import Experience from '../components/experience';
import Projects from '../components/projects';
import Footer from '../components/footer';

export default {
	components: { Landing, About, Experience, Projects, Footer },
};
</script>
