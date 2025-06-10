import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function About() {
  const container = useRef(null);
  const text = useRef(null);

  useGSAP(
    () => {
      document.fonts.ready.then(() => {
        const { chars } = new SplitText(text.current, {
          type: "chars, lines",
        });

        chars.forEach((char) => {
          gsap.from(chars, {
            scrollTrigger: {
              trigger: char,
              scrub: true,
              start: "top 80%",
              end: "top 20%",
            },
            opacity: 0.2,
            ease: "none",
            stagger: 0.1,
          });
        });
      });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="block text-[10vw] overflow-hidden text-black-bg px-[4vw]"
    >
      <h2 ref={text} className="name uppercase">
        BATYR NAME NAME NAME <br /> batyr NAME NAME NAME ASDSAD BATYR NAME NAME
        NAME <br /> batyr NAME NAME NAME ASDSAD BATYR NAME NAME NAME <br />
        batyr NAME NAME NAME ASDSAD BATYR NAME NAME NAME <br /> batyr NAME NAME
        NAME ASDSAD BATYR NAME NAME NAME <br /> batyr NAME NAME NAME ASDSAD
        BATYR NAME NAME NAME <br /> batyr NAME NAME NAME ASDSAD BATYR NAME NAME
        NAME <br /> batyr NAME NAME NAME ASDSAD BATYR NAME NAME NAME <br />
        batyr NAME NAME NAME ASDSAD BATYR NAME NAME NAME <br /> batyr NAME NAME
        NAME ASDSAD BATYR NAME NAME NAME <br /> batyr NAME NAME NAME ASDSAD
        BATYR NAME NAME NAME <br /> batyr NAME NAME NAME ASDSAD BATYR NAME NAME
        NAME <br /> batyr NAME NAME NAME ASDSAD
      </h2>
    </div>
  );
}
