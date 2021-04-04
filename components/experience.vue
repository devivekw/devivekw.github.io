<template>
	<div class="flex flex-col items-center justify-center">
		<div class="bg-gray-100 rounded-md dark:bg-gray-800">
			<span class="p-2 font-mono text-3xl">experience</span>
		</div>
		<div class="flex flex-col mt-8 ">
			<a
				v-for="(exp, i) in exps"
				:key="i"
				:href="exp.link"
				class="flex flex-col m-4 overflow-hidden transition-transform transform bg-white rounded-lg shadow-lg sm:flex-row dark:bg-gray-800 hover:scale-105"
				:class="{ 'flex-row-reverse': i == 1 }"
			>
				<div>
					<img class="object-cover w-full h-40 sm:w-64 sm:h-full" :src="exp.image" />
				</div>
				<div class="px-4 py-2 mt-2 w-72 m:w-96">
					<div class="flex items-baseline text-xs font-semibold tracking-wide uppercase">
						<span
							class="flex items-center justify-center px-2 leading-snug rounded-full"
							:class="[i == 1 ? 'text-red-800 bg-red-100' : 'text-blue-800 bg-blue-100']"
						>
							{{ exp.tag }}
						</span>
					</div>
					<div class="mt-2">
						<h2 class="text-lg font-bold capitalize">{{ exp.head }}</h2>
						<p class="mt-1 text-sm leading-snug text-gray-500 dark:text-gray-200">
							{{ exp.desc }}
						</p>
					</div>
					<div class="mt-2">
						<span class="font-semibold text-gray-600 dark:text-gray-300">{{ exp.time }}</span>
					</div>
				</div>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			exps: [
				{
					tag: 'current',
					image: 'https://ugc.futurelearn.com/uploads/images/c8/4f/hero_c84f6682-ab7b-42ba-b87c-847de7651292.jpg',
					link: 'https://bmslab.utwente.nl/',
					head: 'Creative Technologist - The BMS Lab',
					desc:
						'Working as a Creative Technologist for the BMS Lab at the University of Twente. Improving the CI/CD workflow as well as setting a benchmark for their frontend projects.',
					time: 'Sep 2020 - Current',
				},
				{
					tag: 'start up',
					image:
						'https://images.unsplash.com/photo-1570071677470-c04398af73ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1212&q=80',
					link: 'https://drcar.ca/',
					head: 'Full Stack Developer - Dr🍁Car',
					desc:
						'Been part of a newly formed team working with the latest of technologies such as React Native for cross-platform apps and GraphQL for a structured API.',
					time: 'July 2020 - Jan 2021',
				},
				{
					tag: 'research',
					image:
						'https://images.adsttc.com/media/images/5670/cb0d/e58e/cee9/c000/02c3/newsletter/ZAS_bergeron-093-Pano-Edit_new.jpg?1450232561',
					link: 'https://lassonde.yorku.ca/',
					head: 'Machine Learning Research Assistant',
					desc:
						'Designing a machine learning model to predict afraudulent credit card transaction based on skewedlarge-scale datasets. Leveraging pandas, scikit-learn, libsvm in Python to build a binary classifier',
					time: 'May 2020 - Aug 2020',
				},
			],
		};
	},
};
</script>
