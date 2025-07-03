import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useMediaQuery } from "usehooks-ts";
import { useLenis } from "lenis/react";
import { useLoaderStore } from "../store/use-loader";
import { useNavigate, useParams } from "react-router-dom";
import { useRedirectStore } from "../store/use-redirect";

const data = [
  {
    name: "Ultrafiltered skim milk",
  },
  {
    name: "Vitamin A palmitate",
  },
  {
    name: "calcium",
  },
  {
    name: "Vitamin D3",
  },
  {
    name: "Caffeine",
  },
  {
    name: "potassium",
  },
];

gsap.registerPlugin(SplitText);

export default function Product() {
  const loading = useLoaderStore((state) => state.isLoading);
  const { redirectSection, setRedirect } = useRedirectStore((state) => state);
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const md = useMediaQuery("(min-width: 768px)");
  const lenis = useLenis();
  const { id } = useParams();
  const isLoading = useLoaderStore((state) => state.isLoading);

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 0, lerp: 0 });
    }
  }, [lenis]);

  useEffect(() => {
    if (redirectSection && lenis) {
      lenis.scrollTo(redirectSection);
      if (loading) setTimeout(() => setRedirect(""), 3000);
      else setRedirect("");
    }

    if (redirectSection === "#products") {
      navigate("/");
      setRedirect("#products");
    }
  }, [redirectSection, lenis]);

  useGSAP(
    () => {
      const titleTl = gsap.timeline({ delay: isLoading ? 2.7 : 0 });

      const { chars } = new SplitText("#title", {
        type: "chars, lines",
        mask: "lines",
      });

      titleTl.from(chars, {
        y: "100%",
        stagger: 0.05,
      });

      titleTl.from("#title-card", {
        width: 0,
        opacity: 0,
      });

      gsap.from("#product", {
        right: "-100%",
        delay: isLoading ? 3 : 0,
        duration: 1,
        ease: "back.out(1.6)",
      });

      gsap.from("#duzum", {
        y: md ? "100vw" : 0,
        x: !md ? "-100vw" : 0,
        delay: isLoading ? 3 : 0,
        duration: 1,
        ease: "back.out(1.2)",
      });

      gsap.from("#vitamin", {
        opacity: 0,
        y: 300,
        delay: isLoading ? 3 : 0,
        stagger: 0.1,
      });
    },

    {
      scope: containerRef,
    }
  );

  return (
    <section
      ref={containerRef}
      className="flex flex-col md:flex-row text-black-bg md:mx-[10vw] mx-[5vw] gap-[10vw] md:mt-[8vw] mt-[20vw] pb-[10vw]"
    >
      <div className="md:flex-[0_0_45%] flex flex-col md:items-start items-center">
        <div className="relative md:h-[25vw] h-[50vw]">
          <h2
            id="title"
            className="md:text-[8vw] text-[17vw] track uppercase text-[#553124]"
          >
            Nutrien&
          </h2>
          <div
            id="title-card"
            className="uppercase text-light-brown-block absolute -left-[10vw] md:-left-[4vw] !leading-[95%] !px-[3vw] md:top-[8.5vw] top-[20vw] outline-[0.5vw] -rotate-[3deg] !text-[17vw] md:!text-[8vw] !bg-[#EFAA5E]"
          >
            ingredients
          </div>
        </div>

        <div className="grid grid-cols-3 w-full gap-[2vw] md:-ml-[3vw] place-items-center">
          {data.map(({ name }, i) => (
            <div
              id="vitamin"
              key={i}
              className="md:w-[10vw] w-[25vw] h-auto overflow-hidden "
            >
              <img
                src={`/product/${i + 1}.svg`}
                className="w-full h-auto object-cover mb-[1vw]"
              />
              <h3 className="uppercase text-[1.5vw] text-center leading-[100%] text-[#553124]">
                {name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-auto relative mt-[5vw]">
        <img
          id="duzum"
          src="/product/duzum.svg"
          alt=""
          className="md:w-[26vw] w-[60vw] h-auto"
        />
        <img
          id="product"
          src={`/product/${id}.png`}
          alt="dragee"
          className="absolute -right-[5vw] top-0 md:w-[20vw] w-[50vw] h-auto"
        />
      </div>
    </section>
  );
}
