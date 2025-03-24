import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { MotionConfig } from 'motion/react';
import Gradientdiv from './components/GradientBG.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<MotionConfig transition={{ duration: 0.4, ease: [0, 0.71, 0.2, 1.01] }}>
			<Gradientdiv>
				<App />
			</Gradientdiv>
		</MotionConfig>
	</StrictMode>
);
