import { useRef, type FC } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Words: FC = () => {
  const containerRef = useRef(null);
  const minisTextRef = useRef(null);

  console.log(window.innerHeight / 1);

  useGSAP(
    () => {
      document.fonts.ready.then(() => {
        const { chars, revert } = new SplitText(".words", {
          type: "chars, lines, words",
          linesClass: "line++",
        });

        gsap.from(chars, {
          scrollTrigger: {
            trigger: chars,
            markers: false,
            scrub: true,
            start: `top ${window.innerHeight / 2.5}px`,
            end: "bottom 10%",
          },
          autoAlpha: 0.5,
          stagger: 0.5,
          onComplete: () => {
            revert();
          },
        });

        gsap.fromTo(
          minisTextRef.current,
          {
            width: 0,
            x: 100,
            autoAlpha: 0,
            placeSelf: "center left",
          },
          {
            width: "100%",
            autoAlpha: 1,
            x: 0,
            duration: 1.5,
            ease: "circ",
            scrollTrigger: {
              trigger: minisTextRef.current,
              start: "top 90%",
              end: "bottom 50%",
              scrub: true,
              invalidateOnRefresh: true,
            },
            willChange: "transform, opacity",
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="bg-dark-brown relative section py-[8vw]"
    >
      <h2 className="text-white words md:text-[10vw] text-[20vw] uppercase leading-[105%] track text-center">
        Shu yere gowja
        <br />
        Moshny gowja soz
        <br />
        Yazmaly tipo slogan yaly
        <br />
        birzat bolmaly tapyndaa
      </h2>

      <div className="pos-x md:top-[25vw] top-[90vw]">
        <div
          ref={minisTextRef}
          className="minis-text z-50 rotate-[4deg] origin-center overflow-hidden"
        >
          <div className="text-light-brown-block md:!text-[9vw] !text-[20vw] !text-dark-brown border-dark-brown border-[2vw] md:border-[1vw] px-[4vw] py-[1vw] inline-block">
            Mini's
          </div>
        </div>
      </div>
    </section>
  );
};
