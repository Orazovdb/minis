import { useGSAP } from "@gsap/react";
import { useRef, type FC } from "react";
import gsap from "gsap";
import { animatedItems, type AnimationDirection } from "../../constantas";
import { useLoaderStore } from "../../store/use-loader";

export const Hero: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const decorItemsRef = useRef<(HTMLImageElement | null)[]>([]);
  const animatedItemsRef = useRef<(HTMLImageElement | null)[]>([]);
  const loading = useLoaderStore((state) => state.isLoading);

  useGSAP(
    () => {
      const master = gsap.timeline({ delay: loading ? 3 : 0 });

      master.fromTo(
        "#dragee",
        { width: 0, opacity: 0 },
        { width: "auto", opacity: 1, duration: 0.4 }
      );
      master.fromTo(
        "#taste",
        { width: 0, opacity: 0 },
        { width: "auto", opacity: 1, duration: 0.4 }
      );

      animatedItems.forEach((item, index) => {
        const element = animatedItemsRef.current[index];
        if (!element) return;

        const startPositions: Record<AnimationDirection, GSAPTweenVars> = {
          top: { y: -item.distance, opacity: 0 },
          bottom: { y: item.distance, opacity: 0 },
          left: { x: -item.distance, opacity: 0 },
          right: { x: item.distance, opacity: 0 },
        };

        gsap.set(element, startPositions[item.direction]);

        master.to(
          element,
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            overwrite: "auto",
          },
          "<"
        );
      });
      const parallaxEffect = (e: MouseEvent) => {
        const sensitivity = 0.3;
        const maxOffset = 400;

        const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        const mouseY = (e.clientY / window.innerHeight) * 2 - 1;

        decorItemsRef.current.forEach((item) => {
          gsap.to(item, {
            x: mouseX * maxOffset * sensitivity,
            y: mouseY * maxOffset * sensitivity,
            duration: 0.8,
            ease: "power3.out",
            overwrite: "auto",
          });
        });
      };

      window.addEventListener("mousemove", parallaxEffect);

      return () => window.removeEventListener("mousemove", parallaxEffect);
    },
    { scope: containerRef }
  );

  const addToAnimatedItemsRefs = (
    el: HTMLImageElement | null,
    index: number
  ) => {
    animatedItemsRef.current[index] = el;
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative md:h-screen h-[80vh] overflow-hidden"
    >
      {/* Текстовый блок */}
      <div className="relative z-10">
        <div className="absolute left-1/2 md:top-[13vw] top-[32vw] z-10 -translate-x-1/2">
          <div
            id="dragee"
            className="overflow-hidden rotate-[5deg] will-change-transform"
          >
            <h1 className="inline-block ligth-text text-light-brown-block z-20 overflow-hidden">
              Mini's dragee
            </h1>
          </div>
        </div>

        <div className="absolute left-1/2 md:top-[23vw] top-[45vw] -translate-x-1/2">
          <div
            id="taste"
            className="overflow-hidden rotate-[2deg] will-change-transform"
          >
            <h1 className="inline-block dark-text text-dark-brown-block overflow-hidden">
              Unrepeatable taste
            </h1>
          </div>
        </div>
      </div>
      {animatedItems.map((item, index) => (
        <img
          key={`${item.src}-${index}`}
          ref={(el) => addToAnimatedItemsRefs(el, index)}
          src={item.src}
          className={item.className}
          alt={`Animated element ${index + 1}`}
        />
      ))}
    </section>
  );
};
