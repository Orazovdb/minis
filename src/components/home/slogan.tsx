import { AnimatedTitle } from "../shared";

export const Slogan = () => {
  return (
    <section className="bg-black-bg py-[8.85vw] !text-[5.83vw] flex flex-col items-center -tracking-[0.4vw]">
      <AnimatedTitle
        title="Shu yere"
        textClassName="!text-[5.83vw] !pb-[1vw]"
        className="px-[4vw] rotate-6 "
      />
      <AnimatedTitle
        title="bize degishli gowja"
        textClassName="!text-[5.83vw] !pb-[1vw]  !text-[#2E2D2F] leading-1"
        className="bg-white-text px-[0.7vw]"
        decorClassName="!bg-black-bg !rotate-[1.75deg] !h-[0.3vw] mb-[0.2vw]"
        variant={2}
      />
      <AnimatedTitle
        title="slogan yaljak soz"
        textClassName="!text-[5.83vw]"
        className="!bg-[#7F3B2D] px-[5vw] rotate-2 z-30"
        decorClassName="!bg-black-bg"
        variant={2}
      />
      <AnimatedTitle
        title="gerek bolar"
        textClassName="!text-[5.83vw] !text-[#2E2D2F]"
        className="!bg-[#FED775] -rotate-[5deg] mt-[0.5vw] !px-[1.5vw]"
      />
    </section>
  );
};
