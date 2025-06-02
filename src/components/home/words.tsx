import type { FC } from "react";
import { AnimatedTitle } from "../shared";

export const Words: FC = () => {
  return (
    <section className="bg-dark-brown words relative py-[8.333vw] uppercase text-center text-[10vw] -tracking-[0.4vw] text-light-bronw-text">
      <h1>Shu yere gowja</h1>
      <h1 className="mb-[5vw]">Moshny gowja soz</h1>

      <AnimatedTitle
        title="Mini’s"
        textClassName="!text-dark-brown"
        className="!bg-[#E8A460] border-[1vw] border-dark-brown rotate-6 px-[3vw] left-[36vw] !margin-0 top-[25vw] !absolute"
      />

      <h1>Yazmaly tipo slogan yaly</h1>
      <h1>birzat bolmaly tapyndaa</h1>
    </section>
  );
};
