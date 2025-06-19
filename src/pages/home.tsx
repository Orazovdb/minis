import { useEffect } from "react";
import {
  Catalog,
  Hero,
  More,
  Products,
  Slogan,
  Words,
} from "../components/home";
import { useLoaderStore } from "../store/use-loader";
import { useLenis } from "lenis/react";

export default function Home() {
  const setLoading = useLoaderStore((state) => state.setLoading);
  const lenis = useLenis();

  lenis?.scrollTo("#hero", {
    lerp: 0,
    duration: 0,
  });

  useEffect(() => {
    setLoading(true);

    return () => setLoading(false);
  }, []);

  return (
    <div>
      <Hero />
      <Words />
      <Products />
      <More />
      <Slogan />
      <Catalog />
    </div>
  );
}
