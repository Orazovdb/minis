import ReactLenis, { useLenis } from "lenis/react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header, Loader } from "./components/layout";
import { Burger } from "./components/shared";
import { useBurgerStore } from "./store/use-burger";
import { useLoaderStore } from "./store/use-loader";

function App() {
	const loading = useLoaderStore(state => state.isLoading);
	const isOpen = useBurgerStore(state => state.isOpen);
	const lenis = useLenis();

	useEffect(() => {
		if (isOpen || loading) lenis?.stop();
		else lenis?.start();
	}, [isOpen, loading]);

	useEffect(() => {
		lenis?.scrollTo(0, { duration: 0, lerp: 0 });
	}, []);

	return (
		<ReactLenis
			root
			options={{
				smoothWheel: true,
				lerp: 0.08
			}}
		>
			<div>
				<Loader />
				<Burger />
				<Header />
				<main className="flex-auto overflow-hidden">
					<Outlet />
				</main>
				<Footer />
			</div>
		</ReactLenis>
	);
}

export default App;
