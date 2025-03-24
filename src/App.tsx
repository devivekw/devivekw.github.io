import About from './components/About';
import Experience from './components/Experience';
import Landing from './components/Landing';
import MenuBar from './components/MenuBar';
const ScreenContainer = ({ children }: { children: React.ReactNode }) => {
	return <div className="grid min-h-screen w-full place-items-center px-4">{children}</div>;
};

function App() {
	return (
		<div className="xl:max-w-8xl mx-3 grid place-items-center md:mx-10 lg:mx-20 xl:mx-auto">
			<MenuBar />
			<ScreenContainer>
				<Landing />
			</ScreenContainer>
			<ScreenContainer>
				<Experience />
			</ScreenContainer>
			<ScreenContainer>
				<About />
			</ScreenContainer>
		</div>
	);
}

export default App;
