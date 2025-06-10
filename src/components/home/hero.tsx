import { useGSAP } from "@gsap/react";
import { useRef, type FC } from "react";
import gsap from "gsap";
import { useLoaderStore } from "../../store/use-loader";

export const Hero: FC = () => {
  const containerRef = useRef(null);
  const parallaxItems = useRef<HTMLImageElement[]>([]);

  const addToParallax = (el: HTMLImageElement | null) => {
    if (el) parallaxItems.current.push(el);
  };

  const loading = useLoaderStore((state) => state.loading);

  useGSAP(
    () => {
      // Если загрузка еще идет - не запускаем анимации
      if (loading) return;

      const tl = gsap.timeline();
      tl.from(".dragee", {
        width: 0,
        autoAlpha: 0,
        willChange: "width opacity",
        duration: 0.8,
        ease: "power2.out",
      });

      tl.from(
        ".dark-text",
        {
          autoAlpha: 0,
          duration: 0.5,
          willChange: "width",
          width: 0,
          ease: "power2.out",
        },
        "-=0.3"
      );

      const productsTl = gsap.timeline();

      productsTl.from(
        ".left-product",
        {
          y: "100%",
          autoAlpha: 0,
          duration: 0.5,
          ease: "circ.out",
          x: "-100%",
        },
        "+=0.2"
      );

      productsTl.from(
        ".center-product",
        {
          y: "100%",
          duration: 0.5,
          ease: "circ.out",
          autoAlpha: 0,
        },
        "-=0.3"
      );

      productsTl.from(
        ".right-product",
        {
          y: "100%",
          x: "100%",
          ease: "circ.out",
          duration: 0.5,
          autoAlpha: 0,
        },
        "-=0.3"
      );

      const parallaxEffect = (e: MouseEvent) => {
        const sensitivity = 0.03;
        const maxOffset = 50;

        const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        const mouseY = (e.clientY / window.innerHeight) * 2 - 1;

        parallaxItems.current.forEach((item) => {
          const offsetX = mouseX * maxOffset * sensitivity;
          const offsetY = mouseY * maxOffset * sensitivity;

          gsap.to(item, {
            x: offsetX,
            y: offsetY,
            duration: 0.8,
            ease: "power3.out",
            overwrite: "auto",
          });
        });
      };

      window.addEventListener("mousemove", parallaxEffect);

      return () => {
        window.removeEventListener("mousemove", parallaxEffect);
      };
    },
    { scope: containerRef, dependencies: [loading] }
  );

  return (
    <section ref={containerRef} className="h-screen relative">
      <div>
        <div className="pos-x top-[13vw]">
          <div className="rotate-[5deg] dragee inline-block overflow-hidden origin-center">
            <h1 className="text-light-brown-block inline-block light-text z-10 ">
              Mini’s dragee
            </h1>
          </div>
        </div>

        <div className="pos-x top-[23vw]">
          <div className="rotate-[2deg] inline-block origin-center">
            <h1 className="text-dark-brown-block inline-block dark-text overflow-hidden">
              Unrepeatable taste
            </h1>
          </div>
        </div>
      </div>

      {/* Декоры с параллакс-эффектом */}
      <div className="absolute left-0 top-[6vw] object-contain h-[15vw]">
        <img
          ref={addToParallax}
          src="/hero/decor.png"
          className="size-full object-contain"
        />
      </div>

      <img
        ref={addToParallax}
        src="/hero/decor-2.png"
        className="absolute top-[7vw] left-[33vw] z-50 object-contain size-[4vw]"
      />

      <img
        ref={addToParallax}
        src="/hero/decor-3.png"
        className="absolute -top-[1vw] right-[18vw] -rotate-[25deg] z-50 object-contain size-[20vw]"
      />

      <img
        ref={addToParallax}
        src="/hero/decor-4.png"
        className="absolute top-[19vw] right-[22vw] -rotate-[25deg] z-50 object-contain size-[3.9vw]"
      />

      <img
        ref={addToParallax}
        src="/hero/decor-5.png"
        className="absolute top-[10vw] right-0 rotate-3 z-50 object-contain size-[18vw]"
      />

      <img
        ref={addToParallax}
        src="/hero/decor-6.png"
        className="absolute bottom-[6vw] left-[30vw] rotate-3 z-50 object-contain size-[18vw]"
      />

      <img
        src="/hero/product.png"
        className="left-product -bottom-[10vw] absolute left-0 w-[26vw] h-auto object-contain"
      />
      <img
        src="/hero/brown-product.png"
        className="center-product -bottom-[10vw] absolute left-[30vw] w-[26vw] h-auto object-contain"
      />
      <img
        src="/hero/blue-product.png"
        className="right-product -bottom-[10vw] absolute right-0 w-[26vw] h-auto object-contain"
      />
    </section>
  );
};
