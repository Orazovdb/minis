import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef, type FC } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Products: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      document.fonts.ready.then(() => {
        if (!textRef.current) return;

        const { chars } = new SplitText(textRef.current, {
          type: "chars, lines",
          charsClass: "char++",
          linesClass: "product-line++",
          mask: "lines",
        });

        gsap.from(chars, {
          y: 100,
          stagger: 0.1,
          duration: 0.4,
          scrollTrigger: {
            trigger: horizontalRef.current,
            start: "top 90%",
            end: "bottom 60%",
            scrub: 1,
            markers: false,
          },
        });
      });

      gsap.from(".minis-text", {
        width: 0,
        x: 100,
        autoAlpha: 0,
        willChange: "opacity visibility width",
        scrollTrigger: {
          trigger: ".minis-text",
          start: "top 85%",
          end: "bottom 70%",
          scrub: 1,
          markers: false,
        },
      });

      // Горизонтальная анимация с плавными границами
      if (horizontalRef.current && containerRef.current) {
        const sectionWidth =
          horizontalRef.current.scrollWidth - window.innerWidth;

        gsap.to(horizontalRef.current, {
          x: -sectionWidth,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: `+=${sectionWidth * 1.5}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            snap: {
              snapTo: [0, 1],
              duration: { min: 0.2, max: 0.5 },
              delay: 0.1,
              ease: "power1.inOut",
            },
            onEnter: () => gsap.set(horizontalRef.current, { x: 0 }),
            onLeaveBack: () => gsap.set(horizontalRef.current, { x: 0 }),
          },
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="relative h-[110vh] overflow-hidden ">
      <div
        ref={horizontalRef}
        className="horizontal flex gap-[10vw] items-center w-[200vw]  will-change-transform"
      >
        <h2
          ref={textRef}
          className="whitespace-nowrap text-center text-[7vw] uppercase text-[#553124] track"
        >
          Bizde 6
          <br />
          GORNUSH BAR
        </h2>

        <div className="minis-text inline-block text-light-brown-block overflow-hidden leading-none !pb-[1vw] border-[0.4vw] z-50 text-light-brown-block -rotate-[6deg] !px-[3vw] !text-[6vw] absolute top-[17vw] left-[12vw]">
          Mini’s
        </div>

        {[...Array(3)].map((_, i) => (
          <img
            key={i}
            src={`/products/product-${1}.png`}
            alt=""
            className="w-auto h-[40vw] object-cover flex-shrink-0"
          />
        ))}
      </div>

      <div className="flex justify-center px-[5vw]">
        <button className="bottom-[5vw] left-1/2 transform -translate-x-1/2 btn">
          See All
        </button>
      </div>
    </section>
  );
};
