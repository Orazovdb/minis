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
      <div className="bg-[url('/background.png')] bg-no-repeat bg-cover h-[150vh] w-full">
        <div className=""></div>
      </div>
      <Slogan />
      <Catalog />
    </div>
  );
}
