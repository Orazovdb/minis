import type { FC } from "react";
import { useTranslate } from "../../lib/utils";

export const More: FC = () => {
  const title = useTranslate("Our Story Begins", "Bizim Hikayemiz");
  const text = useTranslate(
    "Mini’s began with a simple idea: to turn small treats into big moments of joy. Inspired by the magic of childhood and the power of colorful imagination, we set out to create sweets that do more than just taste good — they make you smile.",
    "Mini's basit bir fikirle başladı: küçük ikramları büyük neşe anlarına dönüştürmek. Çocukluğun büyüsünden ve renkli hayal gücünün gücünden ilham alarak, tadı güzel olmanın ötesinde sizi gülümseten tatlılar yaratmak için yola çıktık."
  );

  return (
    <div className="bg-[url('/background.svg')] relative pt-[20vw] bg-no-repeat bg-cover h-[150vh] w-full">
      <div className="px-[10vw] flex flex-col justify-between">
        <div className="h-[40vw] w-full bg-transparent"></div>
        <div className="text-center rounded-[5vw] p-[1vw] bg-[#FDEBD2] outline-[0.5vw] outline-[#E8DDCA]">
          <h3
            id=""
            className="text-[#865720] font-bold text-[10vw] md:text-[4vw] md:mb-[0.7vw] mb-[5vw]"
          >
            {title}
          </h3>
          <p
            id=""
            className="text-[#523122] mx-auto proxima will-change-transform md:w-[55vw] md:mb-0 mb-[10vw] w-[80vw] md:text-[1.2vw] text-[3vw] md:leading-[100%] leading-[125%]"
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};
