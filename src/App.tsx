import { Outlet } from "react-router-dom";
import { Footer, Header, Loader } from "./components/layout";
import ReactLenis, { useLenis } from "lenis/react";
import { useEffect } from "react";

function App() {
  const lenis = useLenis();

  useEffect(() => {
    lenis?.scrollTo(0);
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
        <Loader />
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
