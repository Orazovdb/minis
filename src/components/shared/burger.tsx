import { useGSAP } from "@gsap/react";
import { useBurgerStore } from "../../store/use-burger";
import gsap from "gsap";
import { scrollStop } from "../../hooks/use-scroll-lock";
import { Link } from "react-router-dom";
import { useState } from "react";
import clsx from "clsx";
import { useRedirectStore } from "../../store/use-redirect";
import { useLenis } from "lenis/react";

const navData = [
  {
    name: "about",
    link: "/about",
    id: "",
  },
  {
    name: "products",
    link: "/",
    id: "#products",
    home: true,
  },
  {
    name: "contacts",
    id: "#footer",
  },
];

export const Burger = () => {
  const { isOpen, setIsOpen } = useBurgerStore((state) => state);
  const [isHover, setIsHover] = useState(0);
  const [isEnter, setIsEnter] = useState(false);

  const setRedirect = useRedirectStore((state) => state.setRedirect);

  scrollStop();

  useGSAP(
    () => {
      const tl = gsap.timeline();

      if (isOpen) {
        tl.to("#menu", {
          height: "100%",
          ease: "circ",
          duration: 1,
          pointerEvents: "auto",
        });
        gsap.to("#navigation, #burger-img", {
          opacity: 1,
          y: 0,
          height: "100%",
          width: "100%",
        });
      } else {
        gsap.to("#navigation, #burger-img", {
          opacity: 0,
          y: "-100%",
          height: 0,
        });
        tl.to("#menu", {
          height: 0,
          duration: 1,
          pointerEvents: "none",
        });
      }
    },

    { dependencies: [isOpen] }
  );

  const lenis = useLenis();

  const onLink = (str?: string) => {
    setIsOpen(false);

    if (str === "#products") setRedirect(str ?? "");
    else lenis?.scrollTo(str ?? "");
  };

  return (
    <div
      id="menu"
      className="fixed top-0 bg-[#fadcc8] left-0 w-full h-0 z-[60] overflow-hidden"
    >
      <div className="relative h-full grid md:grid-cols-2 grid-cols-1">
        <div className="flex flex-col md:flex-row items-center justify-center w-screen text-[#553124]">
          <div
            id="navigation"
            className="flex flex-[0_0_50%] items-center flex-col justify-center h-full -translate-y-[100%]"
          >
            {navData.map(({ name, link, id }, i) => (
              <Link
                onClick={() => onLink(id)}
                onMouseEnter={() => {
                  setIsEnter(true);
                  setIsHover(i + 1);
                }}
                onMouseLeave={() => {
                  setIsEnter(false);
                  setIsHover(0);
                }}
                key={name}
                to={link ?? id}
                className={clsx(
                  "uppercase md:text-[7vw] text-[17vw] duration-300 sleading-[110%] ease-in-out transition-all",
                  isEnter && isHover !== i + 1 && "opacity-50"
                )}
              >
                {name}
              </Link>
            ))}
          </div>

          <div id="burger-img" className="flex-auto size-0">
            <img src="/about.png" alt="" className="size-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};
