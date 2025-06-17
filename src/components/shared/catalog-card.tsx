import clsx from "clsx";
import type { FC } from "react";

interface Props {
  className?: string;
  title: string;
  imgUrl?: string;
  imgPos?: string;
  num?: string;
}

export const CatalogCard: FC<Props> = ({
  className,
  title,
  imgUrl,
  imgPos,
  num,
}) => {
  return (
    <article
      className={clsx(
        "bg-[#F2D5C0] overflow-hidden w-[80vw] md:w-[22vw] md:h-[14vw] h-[50vw] outline-[0.3vw] outline-[#FAEADE] rounded-[1.5vw]",
        className
      )}
    >
      <h4 className="absolute top-[1vw] left-[1vw] text-[#C3A591] proxima font-light">
        {num}
      </h4>
      {imgUrl && (
        <img
          src={imgUrl}
          alt={title}
          className={clsx("absolute right-10 top-10 object-contain", imgPos)}
        />
      )}
      <h3
        dangerouslySetInnerHTML={{ __html: title }}
        className="md:text-[2.2vw] text-[7vw] uppercase absolute text-left leading-[100%] -tracking-[0.1vw] md:left-[1.5vw] left-[3vw] bottom-[3vw] md:bottom-[1.5vw]  text-[#523122]"
      ></h3>
    </article>
  );
};
