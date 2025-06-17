import { useGSAP } from "@gsap/react";
import { useBurgerStore } from "../../store/use-burger";
import gsap from "gsap";

const navData = [
  {
    name: "about",
  },
];

export const Burger = () => {
  const isOpen = useBurgerStore((state) => state.isOpen);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      if (isOpen) {
        tl.to("#menu", {
          height: "100vh",
          ease: "circ",
          duration: 1,
        });
        gsap.to("#navigation, #burger-img", {
          opacity: 1,
          y: 0,
        });
      } else {
        gsap.to("#navigation, #burger-img", {
          opacity: 0,
          y: "-100%",
        });
        tl.to("#menu", {
          height: 0,
        });
      }
    },

    { dependencies: [isOpen] }
  );

  return (
    <div id="menu" className="fixed top-0 bg-[#fadcc8] left-0 w-full h z-[60]">
      <div className="relative h-full grid grid-cols-2">
        <div className="flex items-center justify-center w-screen text-[#553124]">
          <div
            id="navigation"
            className="flex flex-[0_0_50%] items-center flex-col justify-center h-full -translate-y-[100%]"
          >
            {navData.map(({ name }) => (
              <a key={name} href={`/${name}`} className="uppercase text-[10vw]">
                {name}
              </a>
            ))}
          </div>

          <div id="burger-img" className="flex-auto">
            <img src="/about.png" alt="" className="size-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};
