import clsx from "clsx";
import type { FC } from "react";

interface Props {
  className?: string;
}

export const ProductCard: FC<Props> = ({ className }) => {
  return <article className={clsx("", className)}></article>;
};
