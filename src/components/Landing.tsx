import { motion } from 'motion/react';
import BlurInView from './BlurInView';

export default function Landing() {
	return (
		<div className="flex flex-row items-center pb-20 lg:pb-40">
			<BlurInView className="font-space text-4xl leading-tight font-bold sm:text-5xl lg:text-7xl">
				<motion.div id="landing-title">Experienced Software Engineer Delivering Robust Services</motion.div>

				<motion.div className="pt-5 text-xl font-medium text-gray-500 sm:text-2xl md:pt-10 md:pr-10 lg:text-3xl">
					Vivek Wadhwani — engineer and developer based in Toronto, currently building systems as a{' '}
					<br className="hidden xl:block" />
					<span className="font-extrabold text-white">Data Platform Engineer</span> at{' '}
					<a href="https://odaia.ai" className="underline">
						ODAIA.
					</a>
				</motion.div>
			</BlurInView>
		</div>
	);
}
