import clsx from "clsx";
import type { FC } from "react";
import { Burger } from "../shared";

interface Props {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  return (
    <header
      className={clsx(
        "fixed top-0 flex z-50 items-center justify-between px-[2vw] py-[1vw] w-full",
        className
      )}
    >
      <img src="/logo.svg" alt="logo" className="size-[5vw] cursor-pointer" />

      <Burger />

      <div />
    </header>
  );
};
