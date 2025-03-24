import { DocumentIcon, LinkIcon } from '@heroicons/react/24/solid';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { motion, RepeatType, Transition } from 'motion/react';
import myImage from '../assets/meblack.png';
import BlurInView from './BlurInView';

export default function About() {
	const initial = {
		scale: 1,
		rotate: 0,
		x: 0,
		y: 0,
		opacity: 0.5,
	};
	const animate = {
		scale: 1.1,
		rotate: 360,
		x: -10,
		y: -20,
		opacity: 0.9,
	};
	const getTransition = (delay: number): Transition => ({
		type: 'tween',
		duration: 3,
		repeat: Infinity,
		repeatType: 'reverse' as RepeatType,
		delay,
	});

	return (
		<div className="relative z-10 mt-60 min-w-full pb-20 sm:mt-0">
			<BlurInView>
				<h2 className="font-space ml-6 text-3xl font-black text-gray-400 italic underline decoration-gray-400/30 underline-offset-4 lg:text-4xl">
					about
				</h2>
			</BlurInView>
			<div className="flex flex-row items-center justify-between pt-4">
				<div className="ml-5 flex flex-1 flex-col pt-4 pr-5 lg:pr-40">
					<BlurInView className="text-xl/normal font-medium text-zinc-400 lg:text-2xl/normal">
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
					{/* buttons */}
					<BlurInView className="flex flex-col gap-8 pt-8 text-lg sm:flex-row">
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
				<BlurInView className="relative hidden size-80 flex-none rounded-full lg:block">
					<img src={myImage} alt="me" className="relative z-10 size-full rounded-full" />
					<div className="">
						<motion.div
							className={`absolute top-0 -left-10 h-72 w-72 rounded-full bg-zinc-400 opacity-70 mix-blend-multiply blur-xl`}
							initial={initial}
							animate={animate}
							transition={getTransition(0)}
						/>
						<motion.div
							className={`absolute top-10 left-0 h-72 w-72 rounded-full bg-gray-300 opacity-70 mix-blend-multiply blur-xl`}
							initial={initial}
							animate={animate}
							transition={getTransition(1)}
						/>
						<motion.div
							className={`absolute top-0 left-10 h-72 w-72 rounded-full bg-white/50 opacity-70 mix-blend-multiply blur-xl`}
							initial={initial}
							animate={animate}
							transition={getTransition(2)}
						/>
					</div>
				</BlurInView>
			</div>

			<div className="absolute -bottom-2/4 left-0 grid w-full place-items-center">
				<a
					href="https://github.com/devivekw/devivekw.github.io"
					className="group flex flex-row items-center rounded-full px-4 py-2 text-zinc-500 duration-500 hover:bg-zinc-500/30 hover:text-zinc-300"
				>
					<div className="font-mono decoration-zinc-400/50 group-hover:underline">devivekw.github.io</div>
					<SiGithub className="ml-2 size-4" />
				</a>
			</div>
		</div>
	);
}
