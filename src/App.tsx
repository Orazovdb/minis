import { Outlet } from "react-router-dom";
import { Footer, Header, Loader } from "./components/layout";
import ReactLenis, { useLenis } from "lenis/react";
import { Burger } from "./components/shared";
import { useLoaderStore } from "./store/use-loader";
import { useEffect } from "react";
import { useBurgerStore } from "./store/use-burger";

function App() {
  const { setLoading, isLoading } = useLoaderStore((state) => state);
  const isOpen = useBurgerStore((state) => state.isOpen);
  const lenis = useLenis();

  useEffect(() => {
    if (isOpen || isLoading) lenis?.stop();
    else lenis?.start();
  }, [isOpen, isLoading]);

  useEffect(() => {
    setLoading(true);

    return () => setLoading(false);
  }, []);

  return (
    <ReactLenis
      root
      options={{
        smoothWheel: true,
        lerp: 0.08,
      }}
    >
      <div>
        {isLoading && <Loader />}
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
