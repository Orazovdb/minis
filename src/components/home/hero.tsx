import type { FC } from "react";
import { AnimatedTitle } from "../shared";

export const Hero: FC = () => {
  return (
    <section className="h-screen overflow-hidden relative">
      <div className="">
        <AnimatedTitle
          title="Mini’s dragee"
          className="-tracking-[0.4vw] rotate-[5deg] z-30 top-[13vw] left-1/2 -translate-x-1/2"
        />
        <AnimatedTitle
          title="Unrepeatable taste"
          variant={2}
          className="-tracking-[0.4vw] rotate-[2.22deg] !px-[3vw] top-[11.5vw] left-1/2 -translate-x-1/2"
        />
      </div>

      <img
        src="/hero/decor.png"
        className="absolute left-0 top-[6vw] object-contain h-[15vw]"
      />

      <img
        src="/hero/decor-2.png"
        className="absolute top-[7vw] left-[33vw] z-50 object-contain size-[4vw] ]"
      />

      <img
        src="/hero/decor-3.png"
        className="absolute -top-[1vw] right-[18vw] -rotate-[25deg] z-50 object-contain size-[20vw]"
      />

      <img
        src="/hero/decor-4.png"
        className="absolute top-[19vw] right-[22vw] -rotate-[25deg] z-50 object-contain size-[3.9vw]"
      />

      <img
        src="/hero/decor-5.png"
        className="absolute top-[10vw] right-0 rotate-3 z-50 object-contain size-[18vw]"
      />

      <img
        src="/hero/decor-6.png"
        className="absolute bottom-[6vw] left-[30vw] rotate-3 z-50 object-contain size-[18vw]"
      />

      {/* PRODUCTS */}
      <img
        src="/hero/product.png"
        className="-bottom-[10vw] absolute left-0 w-[26vw] h-auto object-contain"
      />
      <img
        src="/hero/brown-product.png"
        className="-bottom-[10vw] absolute left-[30vw] w-[26vw] h-auto object-contain"
      />
      <img
        src="/hero/blue-product.png"
        className="-bottom-[10vw] absolute right-0 w-[26vw] h-auto object-contain"
      />
    </section>
  );
};
