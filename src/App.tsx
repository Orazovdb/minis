import { Outlet } from "react-router-dom";
import { Footer, Header, Loader } from "./components/layout";
import ReactLenis from "lenis/react";

function App() {
  return (
    <ReactLenis root>
      <Loader />
      <Header />

      <main className="flex-auto overflow-hidden">
        <Outlet />
      </main>

      <Footer />
    </ReactLenis>
  );
}

export default App;
