import { useGSAP } from "@gsap/react";
import { useBurgerStore } from "../../store/use-burger";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { useRedirectStore } from "../../store/use-redirect";
import { useLenis } from "lenis/react";

const navData = [
  { name: "about", link: "/about", id: "" },
  { name: "products", link: "/", id: "#products", products: true },
  { name: "contacts", link: "", id: "#footer" },
];

export const Burger = () => {
  const { isOpen, setIsOpen } = useBurgerStore((state) => state);
  const [hovered, setHovered] = useState<number | null>(null);
  const navigate = useNavigate();
  const lenis = useLenis();
  const setSectionScroll = useRedirectStore((state) => state.setSectionScroll);

  const setRedirect = useRedirectStore((state) => state.setRedirect);

  useEffect(() => {
    if (!lenis) return;
    if (isOpen) lenis.stop();
    else lenis.start();
  }, [isOpen, lenis]);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      if (isOpen) {
        tl.to("#menu", {
          height: "100%",
          duration: 1,
          ease: "circ.out",
          pointerEvents: "auto",
        }).to("#navigation", { opacity: 1, duration: 0.5 }, "<");
      } else {
        tl.to(
          "#menu",
          { height: 0, duration: 1, pointerEvents: "none" },
          "<"
        ).to("#navigation", { opacity: 1, duration: 0.5 }, "<");
      }
    },
    { dependencies: [isOpen] }
  );

  const onLinkClick = (
    link: string,
    sectionId?: string,
    products?: boolean
  ) => {
    if (sectionId) {
      setRedirect(sectionId);
    } else if (link) {
      navigate(link);
      products && setSectionScroll(products);
    }
    setIsOpen(false);
  };

  return (
    <div
      id="menu"
      className="fixed top-0 bg-[#fadcc8] left-0 w-full h-0 z-[60] overflow-hidden"
    >
      <div className="relative h-full grid md:grid-cols-2 grid-cols-1">
        <div className="flex flex-col h-full md:flex-row items-center justify-center w-screen text-[#553124]">
          <div
            id="navigation"
            className="flex flex-[0_0_50%] items-center flex-col justify-center h-full"
          >
            {navData.map(({ name, link, id }, i) => (
              <button
                key={name}
                onClick={() => onLinkClick(link, id)}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={clsx(
                  "uppercase text-[#553124] transition-opacity cursor-pointer duration-200",
                  hovered !== null && hovered !== i && "opacity-50",
                  "md:text-[7vw] text-[17vw]"
                )}
              >
                {name}
              </button>
            ))}

            <div className="flex absolute bottom-[8vw] items-center md:text-[1.2vw] text-[5vw] font-thin md:translate-y-[6vw] gap-[4vw] font-sans">
              <a
                href="https://www.instagram.com/minis_tm/"
                target="_blank"
                className="transition-all hover:opacity-60"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@minis_tm"
                target="_blank"
                className="transition-all hover:opacity-60"
              >
                TikTok
              </a>
            </div>
          </div>

          <div id="burger-img" className="flex-auto md:block hidden size-full">
            <img src="/about.png" alt="" className="size-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};
