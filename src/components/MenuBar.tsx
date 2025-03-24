import { LinkIcon } from '@heroicons/react/24/solid';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { useRef, useState } from 'react';
import myImage from '../assets/signature.png';

export default function MenuBar() {
	const [hidden, setHidden] = useState(false);
	const { scrollY } = useScroll();
	const lastYRef = useRef(0);

	useMotionValueEvent(scrollY, 'change', (y) => {
		const difference = y - lastYRef.current;
		if (Math.abs(difference) > 50) {
			setHidden(difference > 0);
			lastYRef.current = y;
		}
	});

	return (
		<motion.div
			animate={hidden ? 'hidden' : 'visible'}
			initial="visible"
			variants={{
				visible: { y: '0%' },
				hidden: { y: '-120%' },
			}}
			transition={{ duration: 0.2 }}
			className="sticky top-0 left-0 z-10 hidden w-full justify-center pt-6 md:flex"
		>
			<motion.div
				// whileHover={{
				// 	backgroundColor: 'rgba(255, 255, 255, 0.2)',
				// 	mixBlendMode: 'difference',
				// 	transition: { duration: 2, type: 'linear' },
				// }}
				className="z-20 flex h-15 w-full flex-row items-center justify-between rounded-full border-2 border-white/10 bg-white/5 px-2 shadow-md backdrop-blur-2xl duration-1000 hover:border-white/20 hover:bg-white/20 hover:shadow-2xl lg:h-20 lg:px-4"
			>
				<motion.img
					src={myImage}
					alt="me"
					className="h-10 rounded-full lg:h-16"
					whileHover={{ scale: 1.1, rotate: 360 }}
				/>
				<motion.a
					href="https://www.linkedin.com/in/devivek/"
					className="py-auto z-30 flex flex-row items-center justify-center rounded-full bg-white px-5 py-3 shadow-md lg:px-6 lg:py-4"
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
				>
					<div className="font-space font-medium text-black">Connect with Me</div>
					<LinkIcon className="ml-2 size-5 font-semibold text-black" />
				</motion.a>
			</motion.div>
		</motion.div>
	);
}
