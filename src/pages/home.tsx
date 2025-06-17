import { useEffect } from "react";
import {
  Catalog,
  Hero,
  More,
  Products,
  Slogan,
  Words,
} from "../components/home";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <Hero />
      <Words />
      <Products />
      <More />
      <Slogan />
      <Catalog />
    </div>
  );
}
