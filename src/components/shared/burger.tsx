import { useGSAP } from "@gsap/react";
import { useBurgerStore } from "../../store/use-burger";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { useRedirectStore } from "../../store/use-redirect";
import { useLenis } from "lenis/react";
import { useTranslate } from "../../lib/utils";

const navData = [
  { name: "about", trName: "hakkimizda", link: "/about", id: "" },
  {
    name: "products",
    trName: "ürünlerimiz",
    link: "/",
    id: "#products",
    products: true,
  },
  { name: "contacts", trName: "İletişim", link: "", id: "#footer" },
];

export const Burger = () => {
  const { isOpen, setIsOpen } = useBurgerStore((state) => state);
  const [hovered, setHovered] = useState<number | null>(null);
  const lenis = useLenis();

  const [activePhoto, setActivePhoto] = useState(0);
  const navigate = useNavigate();
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

  const onHover = (id: number) => {
    setHovered(id);
    setActivePhoto(id);
  };

  const onLeavae = (id: number | null) => {
    setHovered(id);
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
            {navData.map(({ name, trName, link, id }, i) => (
              <button
                key={name}
                onClick={() => onLinkClick(link, id)}
                onMouseEnter={() => onHover(i)}
                onMouseLeave={() => onLeavae(null)}
                className={clsx(
                  "uppercase text-[#553124] transition-opacity cursor-pointer duration-500",
                  hovered !== null && hovered !== i && "opacity-20",
                  "md:text-[7vw] text-[17vw]"
                )}
              >
                {useTranslate(name, trName)}
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

          <div
            id="burger-img"
            className="flex-auto relative md:block hidden size-full overflow-hidden"
          >
            {Array.from({ length: 3 }).map((_, i) => (
              <img
                key={i}
                src={`/burger/${i}.png`}
                className={clsx(
                  "size-full object-cover transition-all duration-[.7s] absolute top-0 left-0",
                  activePhoto === i
                    ? "opacity-100 z-20 scale-100"
                    : "opacity-0 z-10 scale-105"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
