import { useEffect } from "react";
import { Catalog, Hero, Products, Slogan, Words } from "../components/home";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <Hero />
      <Words />
      <Products />
      <Slogan />
      <Catalog />
    </div>
  );
}
