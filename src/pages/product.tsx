import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

const data = [
  {
    name: "Ultrafiltered skim milk",
  },
  {
    name: "Vitamin A palmitate",
  },
  {
    name: "calcium",
  },
  {
    name: "Vitamin D3",
  },
  {
    name: "Caffeine",
  },
  {
    name: "potassium",
  },
];

gsap.registerPlugin(SplitText);

export default function Product() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {}, {});

  return (
    <div className="flex text-black-bg mx-[10vw] gap-[10vw] mt-[10vw] pb-[10vw]">
      <div className="flex-[0_0_45%] flex flex-col">
        <div className="relative h-[25vw] ">
          <h2 className="name text-[8vw] track uppercase text-[#553124]">
            Nutrien&
          </h2>
          <div className="uppercase text-light-brown-block absolute -left-[4vw] !leading-[95%] !px-[3vw] top-[10vw] outline-[0.5vw] -rotate-[3deg] !text-[8vw] !bg-[#EFAA5E]">
            ingredients
          </div>
        </div>

        <div className="grid grid-cols-3 w-full gap-[2vw] -ml-[3vw]">
          {data.map(({ name }, i) => (
            <div key={i} className="w-[10vw] h-[15vw] overflow-hidden ">
              <img
                src={`/product/${i + 1}.svg`}
                className="w-full h-auto object-cover mb-[1vw]"
              />
              <h3 className="uppercase text-[1.5vw] text-center leading-[100%] text-[#553124]">
                {name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-auto relative mt-[5vw]">
        <img src="/product/duzum.svg" alt="" />
        <img
          src="/product/dragee-brown.png"
          alt="dragee"
          className="absolute -right-[5vw] top-0"
        />
      </div>
    </div>
  );
}
