import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export const Slogan = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".mask", {
        width: 0, //Конечное состояние - нормальная ширина
        autoAlpha: 0,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 50%",
          scrub: 1,
        },
        willChange: "transform opacity",
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="slogan-section relative md:h-screen h-[50vh] bg-black-bg uppercase md:text-[6vw] text-[12vw] flex flex-col items-center -tracking-[0.4vw]"
    >
      {/* Заголовок 1 */}
      <div className="absolute top-[25vw] md:top-[10vw] rotate-6 z-10">
        <div className="mask inline-block overflow-hidden origin-center">
          <h2 className="bg-light-brown px-[1vw]">Shu yere</h2>
        </div>
      </div>

      {/* Заголовок 2 */}
      <div className="absolute top-[40vw] md:top-[18vw]">
        <div className="mask inline-block overflow-hidden origin-center">
          <h2 className="bg-white-text !text-[#2E2D2F] !px-[2vw]">
            bize degishli gowja
          </h2>
        </div>
      </div>

      {/* Заголовок 3 */}
      <div className="absolute bottom-[33vw] md:bottom-[14vw] rotate-2 z-30">
        <div className="mask inline-block overflow-hidden origin-center">
          <h2 className="!bg-[#7F3B2D] !px-[7vw]">slogan yaljak soz</h2>
        </div>
      </div>

      {/* Заголовок 4 */}
      <div className="absolute bottom-[18vw] md:bottom-[5.5vw] -rotate-[5deg] mt-[0.5vw]">
        <div className="mask inline-block overflow-hidden origin-center">
          <h2 className="!bg-[#FED775] !text-[#2E2D2F] !px-[2vw]">
            gerek bolar
          </h2>
        </div>
      </div>
    </section>
  );
};
