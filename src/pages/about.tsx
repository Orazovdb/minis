import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { CatalogCard } from "../components/shared/catalog-card";
import { useLenis } from "lenis/react";
import { useRef } from "react";

const cards = [
  {
    title: "Recapture <br /> your youth",
    className: "md:absolute left-0 rotate-0 md:-rotate-[8deg] top-[6vw]",
    num: "01",
  },
  {
    title: "Break some rules",
    className: "md:absolute md:pos-x rotate-0 top-[3vw] md:rotate-[6deg]",
    num: "02",
  },
  {
    title: "Rediscover what <br /> you’re capable of",
    className: "md:absolute right-0 rotate-0 top-[8vw]",
    num: "03",
  },
];

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function About() {
  const lenis = useLenis();
  const containerRef = useRef(null);

  lenis?.scrollTo(0, {
    duration: 0,
    lerp: 0,
  });

  useGSAP(
    () => {
      document.fonts.ready.then(() => {
        const { chars } = new SplitText("#catalog-title", {
          type: "chars, lines",
          mask: "lines",
        });

        gsap.from(chars, {
          scrollTrigger: {
            trigger: "#catalog-title",
            start: "top 80%",
            end: "top 20%",
          },
          y: 100,
          duration: 0.2,
          stagger: 0.05,
        });
      });

      gsap.from(".catalog-card", {
        scrollTrigger: {
          trigger: ".catalog-card",
          start: "top 90%",
          end: "bottom 50%",
        },
        autoAlpha: 0,
        rotate: 0,
        ease: "back.out(1.6)",

        // scrub: 1,
        y: "100%",
        duration: 1,
        stagger: 0.1,
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef}>
      <img
        id="about-img"
        src="/about.png"
        alt="about cover"
        className="w-full md:h-screen h-[50vh] object-cover"
      />

      <div className="text-center flex flex-col items-center mt-[4vw]">
        <h3
          id="catalog-title"
          className="text-[#865720] font-bold text-[10vw] md:text-[2vw] md:mb-[1.25vw] mb-[5vw]"
        >
          Our Story Begins
        </h3>
        <p
          id="catalog-text"
          className="text-[#523122] proxima will-change-transform md:w-[46vw] md:mb-[0.8vw] mb-[10vw] w-[80vw] md:text-[0.93vw] text-[3vw] md:leading-[100%] leading-[125%]"
        >
          Our brand celebrates staying young. If there is anything adventurous,
          unconventional, or excitingly unexpected we’re down. And while
          e-mails, taxes, and mortgages must be sent, let us not forget the most
          important thing to send… “it.” Our brand is a testament to the power
          of laughter, the thrill of adrenaline, and the camaraderie gained
          through shared mayhem and mischief.
        </p>

        <p className="text-[#523122] proxima will-change-transform md:w-[46vw] md:mb-0 mb-[10vw] w-[80vw] md:text-[0.93vw] text-[3vw] md:leading-[100%] leading-[125%]">
          SPYLT is the kid who pushed the limits who got their life together,
          settled down without settling, and never forgot the essence of what
          made them THEM. #MilktheMostOutOfLife
        </p>

        <div className="relative flex flex-col md:flex-row items-center justify-center w-[58vw] gap-[10vw] md:h-[30vw] h-full">
          {cards.map((item, i) => (
            <CatalogCard
              {...item}
              key={i}
              className={`catalog-card will-change-transform ${item.className}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
