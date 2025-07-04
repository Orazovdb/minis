import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useLenis } from "lenis/react";
import { useRef, type FC } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";
import { useTranslate } from "../../lib/utils";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Products: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  const md = useMediaQuery("(min-width: 768px)");
  const lenis = useLenis();

  useGSAP(
    () => {
      document.fonts.ready.then(() => {
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
          willChange: "transform",
          scrollTrigger: {
            trigger: md ? horizontalRef.current : textRef.current,
            start: "top 90%",
            end: "bottom 80%",
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

      if (horizontalRef.current && containerRef.current) {
        const sectionWidth =
          horizontalRef.current.scrollWidth - window.innerWidth;

        gsap.to(horizontalRef.current, {
          x: -sectionWidth,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: `+=${sectionWidth * 2}`,
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

  const title = useTranslate("Pick your", "Hangisini");
  const blockTitle = useTranslate("favorite", "seçeceksin");

  return (
    <section
      id="products"
      ref={containerRef}
      className="relative overflow-hidden"
    >
      <div
        id=""
        ref={md ? horizontalRef : null}
        className="md:horizontal relative flex flex-col md:flex-row gap-[15vw] items-center px-[5vw] md:w-[300vw] will-change-transform"
      >
        <h2
          ref={textRef}
          className="whitespace-nowrap will-change-transform text-center md:text-[7vw] text-[15vw] md:leading-[180%] uppercase text-[#553124] track"
        >
          {title}
        </h2>

        <div className="minis-text max-w-fit md:left-[3vw] -translate-x-1/2 md:-translate-x-0 left-1/2 !-tracking-[0.3vw] !py-[0.2vw] !bg-[#EFAA5E] inline-block text-light-brown-block md:overflow-hidden leading-none  border-[0.4vw] z-50 text-light-brown-block !-rotate-[2deg] !px-[4vw] md:!text-[6vw] absolute md:top-[21vw] top-[14vw]">
          {blockTitle}
        </div>

        {[...Array(5)].map((_, i) => (
          <Link
            key={i}
            to={`/product/${i + 1}`}
            className={clsx(
              "md:w-[60vw] w-[80vw] h-auto mt-[2vw]",
              i % 2 === 0 ? "md:rotate-[8deg]" : "md:-rotate-[8deg]"
            )}
          >
            <img
              key={i}
              src={`/products/product-${i + 1}.png`}
              alt="product"
              className="size-full object-cover"
            />
          </Link>
        ))}
      </div>

      <div className="flex justify-center w-full mx-auto relative z-20 md:pb-[5vw] md:pt-[6vw] py-[10vw]">
        <button onClick={() => lenis?.scrollTo("#")} className="btn">
          See All
        </button>
      </div>
    </section>
  );
};
