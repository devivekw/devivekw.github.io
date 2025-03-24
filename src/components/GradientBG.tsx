import { motion, RepeatType, Transition } from 'motion/react';
import React, { ReactNode, useEffect, useState } from 'react';

interface GradientdivProps {
	children: ReactNode;
}

const AbstractShape = () => {
	const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
		x: 0,
		y: 0,
	});

	useEffect(() => {
		const updateMousePosition = (ev: MouseEvent) => {
			setMousePosition({ x: ev.pageX, y: ev.pageY });
		};
		window.addEventListener('mousemove', updateMousePosition);
		return () => {
			window.removeEventListener('mousemove', updateMousePosition);
		};
	}, []);

	const pxSize = 320;

	const initial = {
		scale: 1,
		rotate: 0,
		x: 0,
		y: 0,
		opacity: 0.2,
	};
	const animate = {
		scale: 1.3,
		rotate: 360,
		x: 20,
		y: 20,
		opacity: 0.7,
	};
	const getTransition = (delay: number): Transition => ({
		type: 'tween',
		duration: 3,
		repeat: Infinity,
		repeatType: 'reverse' as RepeatType,
		delay,
	});

	return (
		<div className="-z-10">
			<motion.div
				className="absolute hidden sm:block"
				initial={{
					scale: 4,
				}} // Starting state: circle with gray color
				animate={{
					x: Math.round(mousePosition.x - pxSize / 2), // Cen'ter the shape at the mouse position
					y: Math.round(mousePosition.y),
					scale: 1,
				}}
				transition={{
					type: 'spring',
					mass: 1,
					stiffness: 100,
					damping: 10,
				}}
			>
				<motion.div
					className={`absolute top-0 -left-20 h-72 w-72 rounded-full bg-teal-400 opacity-70 mix-blend-multiply`}
					initial={initial}
					animate={animate}
					transition={getTransition(0)}
				/>
				<motion.div
					className={`absolute -top-20 left-20 h-72 w-72 rounded-full bg-cyan-500 opacity-70 mix-blend-multiply`}
					initial={initial}
					animate={animate}
					transition={getTransition(1)}
				/>
				<motion.div
					className={`absolute top-0 left-20 h-72 w-72 rounded-full bg-indigo-500 opacity-70 mix-blend-multiply`}
					initial={initial}
					animate={animate}
					transition={getTransition(2)}
				/>
			</motion.div>
		</div>
	);
};

const Gradientdiv: React.FC<GradientdivProps> = ({ children }) => {
	return (
		<>
			<AbstractShape />
			<div className="fixed inset-0 z-0 min-h-full min-w-full bg-zinc-950/30 backdrop-blur-2xl" />
			{/* <MenuBar /> */}
			<div className="z-10 w-full">{children}</div>
		</>
	);
};

export default Gradientdiv;
