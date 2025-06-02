import { useRef, type FC } from "react";
import clsx from "clsx";

interface Props {
  title: string;
  className?: string;
  variant?: number;
  textClassName?: string;
  decorClassName?: string;
}

export const AnimatedTitle: FC<Props> = ({
  title,
  className,
  variant = 1,
  textClassName,
  decorClassName,
}) => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // useGSAP(() => {
  //   gsap.set(containerRef.current, { width: 0 });
  //   // анимация до auto (fit-content)
  //   gsap.to(containerRef.current, {
  //     width: "auto",
  //     duration: 0.6,
  //     ease: "power2.out",
  //     transformOrigin: "right",
  //   });
  // }, []);

  return (
    <div
      ref={containerRef}
      className={clsx(
        "overflow-hidden inline-block relative",
        className,
        variant === 1 ? "bg-light-brown" : "bg-dark-brown relative z-10"
      )}
    >
      {variant === 2 && (
        <div
          className={clsx(
            "h-[0.5vw] w-full bg-light-bg absolute bottom-0 right-0 -rotate-[1.5deg]",
            decorClassName
          )}
        />
      )}
      <h1
        ref={textRef}
        className={clsx(
          "text-[8.95vw]  uppercase leading-[105%] text-white-text pl-[1vw] pr-[1.3vw] pb-[1.5vw] font-bold",
          textClassName
        )}
      >
        {title}
      </h1>
    </div>
  );
};
