import { DocumentIcon, LinkIcon } from '@heroicons/react/24/solid';
import { motion } from 'motion/react';
import myImage from '../assets/meblack.png';
import BlurInView from './BlurInView';

export default function About() {
	return (
		<div className="z-10 min-w-full pb-20">
			<BlurInView>
				<h2 className="font-space ml-6 text-2xl font-black text-gray-400 italic underline decoration-gray-400/30 underline-offset-4 lg:text-4xl">
					about
				</h2>
			</BlurInView>
			<div className="flex flex-row items-center justify-between pt-4">
				<div className="ml-5 flex flex-1 flex-col pt-4 pr-40">
					<BlurInView className="text-2xl/normal font-medium text-zinc-400">
						I'm a <span className="font-semibold text-zinc-100">Software Engineer</span> with a strong background in
						full-stack development, cloud computing, and data engineering.
						<br /> <br />
						Beyond that, I have a deep passion for{' '}
						<span className="font-semibold text-zinc-100">exploring the world</span>, having traveled to 30 countries
						and counting. I also find my self experimenting with cutting-edge AI tools like{' '}
						<a href="https://claude.ai/" className="text-zinc-300 underline decoration-orange-300/50">
							Claude
						</a>
						,{' '}
						<a href="https://www.cursor.com/" className="text-zinc-300 underline decoration-purple-400/50">
							Cursor
						</a>{' '}
						and{' '}
						<a href="https://www.perplexity.ai/" className="text-zinc-300 underline decoration-blue-400/50">
							Perplexity
						</a>
						, staying at the forefront of emerging technology to build smarter, more intuitive solutions.
					</BlurInView>
					<BlurInView className="flex flex-row gap-8 pt-8 text-lg">
						<motion.a
							href="https://www.linkedin.com/in/devivek/"
							className="z-30 flex flex-row items-center justify-center rounded-full bg-white/90 px-6 py-4 shadow-md"
							whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 1)' }}
							whileTap={{ scale: 0.9 }}
						>
							<div className="font-space font-medium text-black">Connect with me</div>
							<LinkIcon className="ml-2 size-5 font-semibold text-black" />
						</motion.a>
						<motion.a
							href="/resume.pdf"
							className="z-30 flex flex-row items-center justify-center rounded-full border-2 border-zinc-50/70 px-6 py-4 text-white shadow-md"
							whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
							whileTap={{ scale: 0.9 }}
						>
							<div className="font-space font-medium">View my resume</div>
							<DocumentIcon className="ml-2 size-5 font-semibold" />
						</motion.a>
					</BlurInView>
				</div>
				<BlurInView className="relative size-80 flex-none rounded-full">
					<img src={myImage} alt="me" className="relative z-10 size-full rounded-full" />
					<motion.div
						className="absolute -inset-1 rounded-full bg-conic from-zinc-50/80 via-zinc-50/55 to-zinc-50/75 blur-lg"
						initial={{
							opacity: 0.9,
							scale: 0.95,
							rotate: 0,
						}}
						animate={{
							opacity: 0.8,
							scale: 1,
							rotate: 360,
						}}
						transition={{
							duration: 10,
							ease: 'easeInOut',
							repeat: Infinity,
							repeatType: 'reverse',
						}}
					/>
				</BlurInView>
			</div>
		</div>
	);
}
