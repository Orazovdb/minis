import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";
import { useLoaderStore } from "../../store/use-loader";

export const Loader = () => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const setLoading = useLoaderStore((state) => state.setLoading);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, []);

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
              setLoading(false); // Устанавливаем состояние загрузки в false
            },
          });
        },
      });
    }, 2000);
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
        "loader overflow-hidden duration-500 flex flex-col items-center justify-center h-screen z-[100] transition-all bg-dark-brown w-full fixed top-0 left-0 right-0 bottom-0"
      )}
    >
      <img src="/logo.svg" alt="Logo" className="mb-8 size-[20vw] md:w-64" />

      {/* Прогресс-бар */}
      <div className="w-[30vw] h-[1vw] rounded-full overflow-hidden">
        <div
          ref={progressBarRef}
          className="h-full bg-light-brown-text rounded-full"
          style={{ width: "0%" }}
        />
      </div>

      {/* Индикатор процентов */}
      <div className="mt-4 text-ligbg-light-brown-text text-[5vw]">
        {progress}%
      </div>
    </div>
  );
};
