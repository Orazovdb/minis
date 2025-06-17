import clsx from "clsx";
import type { FC } from "react";
import { useBurgerStore } from "../../store/use-burger";

interface Props {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  const { isOpen, setIsOpen } = useBurgerStore((state) => state);

  return (
    <header
      id="header"
      className={clsx(
        "fixed top-0 flex z-[70] items-center justify-between px-[2vw] py-[1vw] w-full",
        className
      )}
    >
      <a href="/">
        <img
          src="/logo.svg"
          alt="logo"
          className="md:size-[5vw] size-[20vw] cursor-pointer"
        />
      </a>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "md:h-[2.08vw] h-[6.24vw] -ml-[4.5vw] relative transition-all md:w-[3.64vw] z-[100] w-[10.92vw] flex flex-col justify-center items-center gap-[0.4vw] cursor-pointer px-4 overflow-hidden",
          isOpen && "bg-white rounded-full !size-[4vw]"
        )}
      >
        <span
          className={clsx(
            "md:w-[3.02vw] w-[7vw] md:h-[0.1vw] h-[0.4vw] bg-amber-950 transition-all duration-300 ease-initial",
            isOpen && "rotate-45 translate-y-[0.2vw]"
          )}
        />
        <span
          className={clsx(
            "md:w-[3.02vw] w-[7vw] md:h-[0.1vw] h-[0.4vw] bg-amber-950 transition-all duration-300 ease-initial",
            isOpen && "-rotate-45 -translate-y-[0.2vw]"
          )}
        />
      </div>

      <div className="md:block hidden" />
    </header>
  );
};
