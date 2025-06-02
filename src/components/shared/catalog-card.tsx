import clsx from "clsx";
import type { FC } from "react";

interface Props {
  className?: string;
  title: string;
  imgUrl: string;
}

export const CatalogCard: FC<Props> = ({ className, title, imgUrl }) => {
  return (
    <article className={clsx("bg-[#F2D5C0] rounded-[30px]", className)}>
      <img src={imgUrl} alt={title} />
      <h3>{title}</h3>
    </article>
  );
};
