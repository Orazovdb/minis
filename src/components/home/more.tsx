import type { FC } from "react";

export const More: FC = () => {
  return (
    <div className="bg-[url('/background.svg')] relative pt-[20vw] bg-no-repeat bg-cover h-[150vh] w-full">
      <div className="px-[10vw] flex flex-col justify-between">
        <div className="h-[40vw] w-full bg-transparent"></div>
        <div className="text-center rounded-[5vw] p-[1vw] bg-[#FDEBD2] outline-[0.5vw] outline-[#E8DDCA]">
          <h3
            id=""
            className="text-[#865720] font-bold text-[10vw] md:text-[2vw] md:mb-[0.7vw] mb-[5vw]"
          >
            Our Story Begins
          </h3>
          <p
            id=""
            className="text-[#523122] mx-auto proxima will-change-transform md:w-[46vw] md:mb-0 mb-[10vw] w-[80vw] md:text-[0.93vw] text-[3vw] md:leading-[100%] leading-[125%]"
          >
            Minis was born from a simple yet powerful idea: to create miniature
            delights that bring joy. Founded by a team of food enthusiasts,
            we've dedicated ourselves to crafting bite-sized treats that not
            only satisfy your taste buds but also brighten your day. Our journey
            began with the vision of redefining snacking.
          </p>
        </div>
      </div>
    </div>
  );
};
