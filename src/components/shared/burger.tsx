import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";

export const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(
    () => {
      const tl = gsap.timeline({ paused: true, reversed: true });

      tl.to("#menu", {
        duration: 0.5,
        height: "100%",
        ease: "circ",
      });

      if (isOpen) tl.play();
      else tl.reverse();
    },
    { dependencies: [isOpen] }
  );
  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="md:h-[2.08vw] h-[6.24vw] relative md:w-[3.64vw] z-[100] w-[10.92vw] flex flex-col justify-center items-center gap-[0.4vw] cursor-pointer px-4 overflow-hidden"
      >
        <span className="md:w-[3.02vw] w-[7vw] md:h-[0.1vw] h-[0.4vw] bg-amber-950"></span>
        <span className="md:w-[3.02vw] w-[7vw] md:h-[0.1vw] h-[0.4vw] bg-amber-950"></span>
      </div>

      {/* <div id="menu" className="h-0 w-full absolute bg-white"></div> */}
    </>
  );
};
