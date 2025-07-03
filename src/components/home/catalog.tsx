import { useGSAP } from "@gsap/react";
import { CatalogCard } from "../shared/catalog-card";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

const cards = [
  {
    title: "mini's <br /> umbrella",
    imgUrl: "/catalog/1.png",
    className: "md:absolute left-0 !rotate-0 md:!-rotate-[4deg] top-[10vw]",
    imgPos:
      "absolute md:!top-[0.5vw] !-top-[2vw] right-[3vw] md:h-[15vw] h-[55vw]",
  },
  {
    title: "mini's dragee",
    imgUrl: "/catalog/2.png",
    className: "md:absolute md:pos-x !rotate-0 bottom-[2vw] md:!rotate-[4deg]",
    imgPos: "pos-x md:top-[1vw] top-[4vw] md:h-[10vw] h-[35vw]",
  },
  {
    title: "mini's <br /> cornetto",
    imgUrl: "/catalog/3.png",
    className: "md:absolute right-0 !rotate-0 top-[8vw]",
    imgPos:
      "absolute md:top-[1.5vw] top-[5vw] md:right-[1vw] md:h-[10vw] h-[35vw]",
  },
];

gsap.registerPlugin(SplitText);

export const Catalog = () => {
  useGSAP(() => {
    const { chars } = new SplitText("#catalog-title", {
      type: "chars, lines",
      mask: "lines",
    });

    gsap.from(chars, {
      y: 200,
      duration: 0.3,
      scrollTrigger: {
        trigger: chars,
        start: "top 100%",
        end: "bottom 20%",
      },
      stagger: 0.05,
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

      scrub: 1,
      y: "100%",
      duration: 1,
      stagger: {
        each: 0.1,
      },
    });
  }, {});

  return (
    <section
      id="catalog"
      className="w-full flex flex-col items-center py-[6vw] md:justify-center text-center"
    >
      <h3
        id="catalog-title"
        className="text-[#865720] font-bold text-[10vw] md:text-[5vw] md:mb-[1.25vw] mb-[5vw]"
      >
        Our Story Begins
      </h3>
      <p
        id="catalog-text"
        className="text-[#523122] proxima will-change-transform md:w-[46vw] md:mb-0 mb-[10vw] w-[80vw] md:text-[1vw] text-[3vw] md:leading-[100%] leading-[125%]"
      >
        Minis was born from a simple yet powerful idea: to create miniature
        delights that bring joy. Founded by a team of food enthusiasts, we've
        dedicated ourselves to crafting bite-sized treats that not only satisfy
        your taste buds but also brighten your day. Our journey began with the
        vision of redefining snacking.
      </p>

      <div className="relative flex flex-col md:flex-row items-center justify-center w-[58vw] gap-[10vw] md:h-[20vw] h-full">
        {cards.map((item, i) => (
          <CatalogCard
            {...item}
            key={i}
            className={`catalog-card will-change-transform ${item.className}`}
          />
        ))}
      </div>

      <button className="btn mt-[7vw]">Download Catalog</button>
    </section>
  );
};
