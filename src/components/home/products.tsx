import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef, type FC } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Products: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  const md = useMediaQuery("(min-width: 768px)");

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
          y: 300,
          stagger: 0.1,
          duration: 0.4,
          scrollTrigger: {
            trigger: md ? horizontalRef.current : textRef.current,
            start: "top 90%",
            end: "bottom 50%",
            scrub: 1,
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
            onEnter: () => gsap.set(horizontalRef.current, { x: 0 }),
            onLeaveBack: () => gsap.set(horizontalRef.current, { x: 0 }),
          },
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="relative overflow-hidden">
      <div
        id="mobile-products"
        ref={md ? horizontalRef : null}
        className="md:horizontal flex flex-col md:flex-row gap-[10vw] items-center px-[5vw] md:w-[200vw] will-change-transform"
      >
        <h2
          ref={textRef}
          className="whitespace-nowrap text-center md:text-[7vw] text-[15vw] uppercase text-[#553124] track"
        >
          Bizde 6
          <br />
          GORNUSH BAR
        </h2>

        <div className="minis-text inline-block text-light-brown-block md:overflow-hidden leading-none !pb-[1vw] border-[0.4vw] z-50 text-light-brown-block -rotate-[6deg] !px-[3vw] md:!text-[6vw] absolute top-[17vw] left-[33vw] md:left-[12vw]">
          Mini’s
        </div>

        {[...Array(3)].map((_, i) => (
          <a href={`/product/${i + 1}`}>
            <img
              key={i}
              src={`/products/product-${1}.png`}
              alt=""
              className="w-auto h-[80vw] md:h-[40vw] object-cover flex-shrink-0"
            />
          </a>
        ))}
      </div>

      <div className="flex justify-center w-full mx-auto md:py-[5vw] py-[15vw]">
        <button className="btn">See All</button>
      </div>
    </section>
  );
};
