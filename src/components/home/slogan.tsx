import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import gsap from "gsap";
import { useLangStore } from "../../store/use-lang";

gsap.registerPlugin(ScrollTrigger);

export const Slogan = () => {
  const containerRef = useRef(null);
  const lang = useLangStore((state) => state.lang);

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

  const text = lang === "en" ? "Not a chocolate" : "Bir çikolata değil,";
  const text2 = lang === "en" ? "but a colorful game," : "rengarenk bir oyun,";
  const text3 =
    lang === "en" ? "big happiness in a" : "küçük bir kutuda kocaman";
  const text4 = lang === "en" ? "small box!" : "mutluluk!";

  return (
    <section
      ref={containerRef}
      className="slogan-section relative md:h-[50vw] h-[105vw] bg-black-bg uppercase md:text-[6vw] text-[10vw] flex flex-col items-center -tracking-[0.4vw]"
    >
      {/* Заголовок 1 */}
      <div className="absolute top-[29vw] md:top-[10vw] rotate-4 z-10">
        <div className="mask inline-block overflow-hidden !py-[0vw] origin-center">
          <h2 className="bg-light-brown !py-[0.5vw] px-[1vw]">{text}</h2>
        </div>
      </div>

      {/* Заголовок 2 */}
      <div className="absolute top-[42vw] md:top-[18vw] -rotate-1">
        <div className="mask inline-block overflow-hidden origin-center">
          <h2 className="bg-white-text !py-[0.5vw] !text-[#2E2D2F] !px-[2vw]">
            {text2}
          </h2>
        </div>
      </div>

      {/* Заголовок 3 */}
      <div className="absolute bottom-[34vw] md:bottom-[14vw] rotate-2 z-30">
        <div className="mask inline-block overflow-hidden origin-center">
          <h2 className="!bg-[#7F3B2D] !py-[0.5vw] !px-[3vw]">{text3}</h2>
        </div>
      </div>

      {/* Заголовок 4 */}
      <div className="absolute bottom-[20vw] md:bottom-[5.5vw] -rotate-[5deg] mt-[0.5vw]">
        <div className="mask inline-block overflow-hidden origin-center">
          <h2 className="!bg-[#FED775] !py-[0.5vw] !text-[#2E2D2F] !px-[2vw]">
            {text4}
          </h2>
        </div>
      </div>
    </section>
  );
};
