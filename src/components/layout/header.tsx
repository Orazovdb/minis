import clsx from "clsx";
import type { FC } from "react";
import { Burger } from "../shared";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  useGSAP(() => {
    gsap.set("#header", {
      y: "-100%",
      opacity: 0,
    });
    gsap.to("#header", {
      y: 0,
      opacity: 1,
      ease: "circ",
      delay: 2.2,
    });
  }, {});

  return (
    <header
      id="header"
      className={clsx(
        "fixed top-0 flex z-50 items-center justify-between px-[2vw] py-[1vw] w-full",
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

      <Burger />

      <a href="/about" className="uppercase text-[1vw] !text-black-bg">
        about
      </a>

      {/* <div className="md:block hidden" /> */}
    </header>
  );
};
