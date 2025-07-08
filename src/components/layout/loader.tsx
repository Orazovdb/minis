import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useLoaderStore } from "../../store/use-loader";
import { useLenis } from "lenis/react";
import clsx from "clsx";

export const Loader = () => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressValue = useRef(0);
  const progressTextRef = useRef<HTMLDivElement>(null);
  const isVisible = useRef(true);
  const lenis = useLenis();
  const setLoading = useLoaderStore((state) => state.setLoading);

  useGSAP(
    () => {
      const master = gsap.timeline();

      const updateProgress = () => {
        progressValue.current += 1;
        const percent = Math.min(progressValue.current, 100);
        if (progressBarRef.current) {
          gsap.to(progressBarRef.current, {
            width: `${percent}%`,
            duration: 0.2,
            ease: "none",
          });
        }

        if (progressTextRef.current) {
          progressTextRef.current.textContent = `${percent}%`;
        }

        if (percent >= 100) {
          clearInterval(interval);
        }
      };

      const interval = setInterval(updateProgress, 20);

      const hideTimeout = setTimeout(() => {
        master.to(loaderRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => {
            gsap.to(loaderRef.current, {
              y: "-100%",
              duration: 0.5,
              ease: "power2.in",
              onComplete: () => {
                isVisible.current = false;
                setLoading(false);
                if (lenis?.isStopped) lenis.start();
              },
            });
          },
        });
      }, 2000);

      return () => {
        clearInterval(interval);
        clearTimeout(hideTimeout);
      };
    },
    { scope: loaderRef }
  );

  if (!isVisible.current) return null;

  return (
    <div
      ref={loaderRef}
      className={clsx(
        "loader fixed  flex flex-col items-center justify-center h-screen z-[100] transition-all bg-dark-brown w-full top-0 left-0 right-0 bottom-0"
      )}
    >
      <img
        src="/logo.svg"
        alt="Logo"
        className="mb-8 md:size-[15vw] size-[30vw]"
      />

      <div className="md:w-[15vw] w-[40vw] md:h-[0.5vw] h-[1.5vw] rounded-full overflow-hidden">
        <div
          ref={progressBarRef}
          className="h-full bg-light-brown-text rounded-full"
          style={{ width: "0%" }}
        />
      </div>

      <div
        ref={progressTextRef}
        className="mt-4 text-light-brown-text text-[5vw] md:text-[2vw]"
      >
        0%
      </div>
    </div>
  );
};
