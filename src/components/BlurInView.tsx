import { motion, useInView } from 'motion/react';
import { ReactNode, useRef } from 'react';

interface BlurInViewProps {
	children: ReactNode;
	duration?: number;
	className?: string;
}

const BlurInView: React.FC<BlurInViewProps> = ({ children, duration = 0.4, className, ...props }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<motion.div
			ref={ref}
			initial={{ filter: 'blur(20px)', opacity: 0 }}
			animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
			transition={{ duration }}
			className={className}
			style={{ willChange: 'filter, opacity' }}
			{...props}
		>
			{children}
		</motion.div>
	);
};

export default BlurInView;
