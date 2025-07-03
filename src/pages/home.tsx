import { useEffect } from "react";
import {
  Catalog,
  Hero,
  More,
  Products,
  Slogan,
  Words,
} from "../components/home";
import { useLenis } from "lenis/react";
import { useRedirectStore } from "../store/use-redirect";

export default function Home() {
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 0, lerp: 0 });
    }
  }, [lenis]);

  const { redirectSection, setRedirect } = useRedirectStore((state) => state);
  useEffect(() => {
    if (redirectSection && lenis) {
      lenis.scrollTo(redirectSection, {
        lerp: 0.5,
        duration: 1,
      });
      setRedirect("");
    }
  }, [redirectSection, lenis]);

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
