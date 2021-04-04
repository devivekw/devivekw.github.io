<template>
	<div class="flex flex-col items-center justify-center">
		<div class="bg-gray-100 rounded-md dark:bg-gray-800">
			<span class="p-2 font-mono text-3xl">projects</span>
		</div>
		<div class="grid grid-cols-1 mt-8 gap-x-4 gap-y-2 sm:gap-x-8 sm:gap-y-4 sm:grid-cols-2 ">
			<div
				v-for="(project, i) in projects"
				:key="i"
				class="flex mx-4 my-6 overflow-hidden transition-transform transform bg-white rounded-lg shadow-lg cursor-default dark:bg-gray-800"
			>
				<div class="px-4 py-2 mt-2 w-96">
					<div class="flex items-baseline space-x-2 text-xs font-semibold tracking-wide uppercase">
						<div v-for="tag in project.tags" :key="tag">
							<TechTag :type="tag"> {{ tag }} </TechTag>
						</div>
					</div>
					<div class="mt-2">
						<h2 class="text-lg font-bold">{{ project.name }}</h2>
						<p class="mt-1 text-sm leading-snug text-gray-500 dark:text-gray-200">
							{{ project.desc }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import TechTag from './tech-tag';

export default {
	components: {
		TechTag: TechTag,
	},

	data() {
		return {
			projects: [
				{
					tags: ['vue', 'firebase'],
					name: 'Aawaaz Portal',
					desc: 'Built a robust learning managment system for a private tutoring company based in India.',
				},
				{
					tags: ['flutter', 'firebase'],
					name: 'Review Lassonde',
					desc:
						'Full-stack cross platform mobile application that enables students to leave reviews about courses they have taken previously.',
				},
				{
					tags: ['mongodb', 'graphql'],
					name: 'Dr Car API',
					desc:
						'Working mainly on the backend I helped architure an extensive GraphQL based API connected with Mongoose.',
				},
				{
					tags: ['next.js', 'graphql'],
					name: 'AllTeach Web App',
					desc:
						'Working with a colleague to build a platform that lets teachers and students connect easily and meet right on the platform.',
				},
				{
					tags: ['tailwind', 'nuxt'],
					name: 'devivek.me',
					desc: 'As an avid user of tailwindcss, to practice I built the entire website using just the framework.',
				},
			],
		};
	},
};
</script>
