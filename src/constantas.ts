interface AnimatedItem {
  src: string;
  className: string;
  direction: AnimationDirection;
  distance: number;
  delay: number;
  parallax?: boolean;
}

export type AnimationDirection = "top" | "bottom" | "left" | "right";

export const animatedItems: AnimatedItem[] = [
  // Декорации
  {
    src: "/hero/decor.png",
    className: "absolute left-0 top-[6vw] h-[15vw] object-contain",
    direction: "left",
    distance: 300,
    delay: 0.2,
    parallax: true,
  },
  {
    src: "/hero/decor-2.png",
    className: "absolute top-[7vw] left-[33vw] z-50 size-[4vw] object-contain",
    direction: "top",
    distance: 200,
    delay: 0.3,
    parallax: true,
  },
  {
    src: "/hero/decor-3.png",
    className:
      "absolute -top-[1vw] right-[18vw] z-50 size-[20vw] -rotate-[25deg] object-contain",
    direction: "right",
    distance: 400,
    delay: 0.4,
    parallax: true,
  },
  {
    src: "/hero/decor-4.png",
    className:
      "absolute top-[19vw] right-[22vw] z-50 size-[3.9vw] -rotate-[25deg] object-contain",
    direction: "right",
    distance: 250,
    delay: 0.5,
    parallax: true,
  },
  {
    src: "/hero/decor-5.png",
    className:
      "absolute top-[10vw] right-0 z-50 size-[18vw] rotate-3 object-contain",
    direction: "right",
    distance: 500,
    delay: 0.6,
    parallax: true,
  },
  {
    src: "/hero/decor-6.png",
    className:
      "absolute bottom-[6vw] left-[30vw] z-50 size-[18vw] rotate-3 object-contain",
    direction: "bottom",
    distance: 350,
    delay: 0.7,
    parallax: true,
  },

  // Продукты
  {
    src: "/hero/product.png",
    className:
      "left-product md:-bottom-[4vw] md:!rotate-[20deg] -rotate-[50deg] -bottom-[5vw] absolute md:-left-[5vw] -left-[15vw] md:!w-[26vw] !w-[60vw] h-auto object-contain",
    direction: "bottom",
    distance: 400,
    delay: 1.0,
    parallax: false,
  },
  {
    src: "/hero/brown-product.png",
    className:
      "center-product md:-bottom-[5vw] bottom-[45vw] md:!-rotate-[15deg] rotate-0 absolute md:left-[30vw] left-[17vw] md:!w-[26vw] !w-[60vw] h-auto object-contain",
    direction: "bottom",
    distance: 400,
    delay: 1.2,
    parallax: false,
  },
  {
    src: "/hero/blue-product.png",
    className:
      "right-product md:-bottom-[3vw] -bottom-[5vw] absolute md:-right-[5vw] !rotate-[30deg]  md:!-rotate-[10deg] -right-[10vw] md:!w-[26vw] !w-[60vw] h-auto object-contain",
    direction: "bottom",
    distance: 400,
    delay: 1.4,
    parallax: false,
  },
];
