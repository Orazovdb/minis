import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";
import { useLoaderStore } from "../../store/use-loader";
import { useLenis } from "lenis/react";

export const Loader = () => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const setLoading = useLoaderStore((state) => state.setLoading);
  const lenis = useLenis();

  // Блокировка скролла при монтировании
  useEffect(() => {
    if (!lenis) return;

    // Блокируем скролл
    lenis.stop();

    // Автоматическая разблокировка через 2 секунды на случай ошибок
    const safetyTimeout = setTimeout(() => {
      if (lenis.isStopped) {
        lenis.start();
      }
    }, 3000);

    return () => {
      clearTimeout(safetyTimeout);
      // Разблокируем при размонтировании
      if (lenis.isStopped) {
        lenis.start();
      }
    };
  }, [lenis]);

  useGSAP(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 1;
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return newProgress;
      });
    }, 20);

    const hideTimeout = setTimeout(() => {
      gsap.to(loaderRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(loaderRef.current, {
            y: "-100%",
            duration: 0.5,
            ease: "power2.in",
            onComplete: () => {
              setIsVisible(false);
              setLoading(false);

              // Гарантированная разблокировка через 100мс
              setTimeout(() => {
                if (lenis?.isStopped) {
                  lenis.start();
                }
              }, 100);
            },
          });
        },
      });
    }, 2000); // Увеличил время до 2000мс для надежности

    return () => {
      clearInterval(progressInterval);
      clearTimeout(hideTimeout);
    };
  }, []);

  useEffect(() => {
    if (progressBarRef.current) {
      gsap.to(progressBarRef.current, {
        width: `${progress}%`,
        duration: 0.2,
        ease: "none",
      });
    }
  }, [progress]);

  if (!isVisible) return null;

  return (
    <div
      ref={loaderRef}
      className={clsx(
        "loader fixed margin-0 overflow-hidden duration-500 flex flex-col items-center justify-center h-screen z-[100] transition-all bg-dark-brown w-full top-0 left-0 right-0 bottom-0"
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

      <div className="mt-4 text-ligbg-light-brown-text text-[5vw] md:text-[2vw]">
        {progress}%
      </div>
    </div>
  );
};
