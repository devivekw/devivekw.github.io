import {
	SiAmazonwebservices,
	SiDbt,
	SiKubernetes,
	SiMongodb,
	SiPrometheus,
	SiPython,
	SiReact,
	SiSnowflake,
	SiTerraform,
	SiTypescript,
} from '@icons-pack/react-simple-icons';
import React from 'react';
import BlurInView from './BlurInView';

type IconElement = React.ReactElement<{ size?: number; className?: string }>;

const experienceData = [
	{
		title: 'Data Platform Engineer',
		company: 'ODAIA',
		date: 'Feb 2023 - Present',
		description:
			'Contributed to a migration from MySQL to Snowflake, improving scalability and efficiency, while developing a Snowflake-native app for streamlined data processing and introduced a BI tool to enhance reporting and collaboration.',
		skills: [<SiSnowflake />, <SiDbt />, <SiAmazonwebservices />],
	},
	{
		title: 'Machine Learning Engineer',
		company: 'ODAIA',
		date: 'May 2022 - Jan 2023',
		description:
			'Optimized data pipelines by replacing outdated technologies with efficient solutions, re-architected high-availability datasets on AWS for faster processing, and built internal tooling to streamline workflows and enhance operational efficiency.',
		skills: [<SiPython />, <SiTerraform />, <SiAmazonwebservices />],
	},
	{
		title: 'Software Engineering Intern',
		company: 'RBC Amplify',
		date: 'May 2022 - Aug 2022',
		description:
			'Awarded the Best Business Value Award at RBC for leading a transformative project that connected Direct Investing with Online Banking, enabling personalized investment opportunities for an exclusive summer innovation program.',
		skills: [<SiReact />, <SiTypescript />, <SiMongodb />],
	},
	{
		title: 'ML Engineering Intern',
		company: 'Borealis AI',
		date: 'Sep 2022 - Dec 2022',
		description:
			'Helped integrate Prometheus into the internal Kubernetes (Openshift) platform for enhanced data management, streamlined communication via Slack notifications within the Jenkins pipeline, and contributed to a successful transition of the Infrastructure team to a cloud-based research service, optimizing costs and boosting developer productivity.',
		skills: [<SiPrometheus />, <SiKubernetes />, <SiDbt />],
	},
];

export const ExperienceCard = ({ cardContent }: { cardContent: (typeof experienceData)[number] }) => {
	return (
		<BlurInView className="size-full">
			<div className="h-full w-full overflow-hidden rounded-xl bg-black/10 duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-zinc-950">
				<div className="size-full bg-[url(/grid-ellipsis.svg)] bg-[length:30px_30px] bg-repeat">
					<div className="via-zinc-950/ size-full bg-gradient-to-br from-zinc-950 via-zinc-950/30 to-zinc-950">
						<div className={'flex h-full flex-col justify-between p-4 text-start md:p-8'}>
							<div className="flex flex-row items-center justify-between gap-2">
								<h3 className="font-space text-xl font-bold text-white md:text-3xl">{cardContent.title}</h3>
								<p className="text-lg font-medium text-wrap text-zinc-400 md:text-2xl">{cardContent.company}</p>
							</div>
							<p className="font-space pt-2 text-base font-light text-wrap text-zinc-500 italic md:text-xl">
								{cardContent.date}
							</p>
							<p className="pt-4 text-base text-wrap text-zinc-500 md:text-xl">{cardContent.description}</p>
							<div className="flex flex-none shrink-0 flex-row items-center justify-start gap-6 pt-8">
								{cardContent.skills.map((skill, index) => (
									<div key={index} className="text-zinc-400 transition-colors hover:text-white hover:shadow-2xl">
										{React.cloneElement(skill as IconElement, {
											className: 'size-8 md:size-10 lg:size-12',
										})}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</BlurInView>
	);
};

export default function Experience() {
	return (
		<div>
			<BlurInView>
				<h2 className="font-space ml-2 text-3xl font-black text-gray-400 italic underline decoration-gray-400/30 underline-offset-4 lg:ml-6 lg:text-4xl">
					experience
				</h2>
			</BlurInView>
			<div className="mt-10 grid grid-cols-1 gap-6 xl:grid-cols-15">
				<div className="lg:col-span-8">
					<ExperienceCard cardContent={experienceData[0]} />
				</div>
				<div className="lg:col-span-7">
					<ExperienceCard cardContent={experienceData[1]} />
				</div>
				<div className="lg:col-span-7">
					<ExperienceCard cardContent={experienceData[2]} />
				</div>
				<div className="lg:col-span-8">
					<ExperienceCard cardContent={experienceData[3]} />
				</div>
			</div>
		</div>
	);
}
