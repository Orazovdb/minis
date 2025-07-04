import clsx from "clsx";
import { useRef, type FC } from "react";
import { socials } from "../../lib/constantas";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslate } from "../../lib/utils";

interface Props {
  className?: string;
}

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Footer: FC<Props> = ({ className }) => {
  const footerRef = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      const { chars } = new SplitText("#hashtag", {
        type: "chars, lines",
        mask: "lines",
      });

      gsap.from(chars, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 70%",
          end: "bottom 30%",
        },
        y: 300,
        stagger: 0.05,
      });
    },
    { scope: footerRef }
  );

  const title = useTranslate("CONTACTS", "ILETIŞIM");
  const address = useTranslate(
    "Address: 8 house, Telekechiler street, Anev city, Ak bugday district, Ahal region, Turkmenistan.",
    "Adres: Türkmenistan, Ahal ili, Ak bugday ilçesi, Anev şehri, Telekeçiler caddesi 8-inci ev."
  );

  return (
    <footer
      ref={footerRef}
      id="footer"
      className={clsx("bg-[#222123] pb-[1.56vw] w-full", className)}
    >
      <div className="w-full z-10 flex items-start justify-start">
        <img
          src="/shapes/footer-shape.svg"
          className="size-full object-cover"
        />
      </div>

      <h2
        id="hashtag"
        className="text-center text-[#FAEADE] hidden md:block md:text-[10vw] text-[12vw] uppercase"
      >
        #minisdragee
      </h2>

      <h2 className="text-center text-[#FAEADE] md:hidden text-[12vw] uppercase">
        #minisdragee
      </h2>

      <div className="flex items-center md:gap-[0.72vw] gap-[2vw] justify-center mt-[3.333vw]">
        {socials.map((item, i) => (
          <Link
            key={i}
            to={item.link}
            target="_blank"
            className="md:size-[3.75vw] size-[9vw] hover:bg-white/10 transition-all rounded-full p-[2vw] md:p-[1.09vw] border border-[#FAEADE]/20"
          >
            <img
              src={item.icon}
              alt={item.alt}
              className="size-full object-contain"
            />
          </Link>
        ))}
      </div>

      <div className="px-[3.333vw] mt-[3.333vw]">
        <div className="flex justify-between md:items-start items-center mb-[8.33vw] text-[#FAEADE]">
          <div className="flex flex-col md:flex-row gap-[3.33vw] md:flex-[0_0_26vw] flex-[0_0_40vw] justify-end">
            <img
              src="/logo.svg"
              alt="logo"
              className="md:h-[2vw] h-[10vw] object-left w-auto object-contain"
            />
            <div>
              <h4 className="text-[5vw] md:text-[1vw] mb-[1.5vw]">{title}</h4>

              <span className="flex items-center gap-[1vw] text-[3.5vw] md:text-[1vw] mb-[0.5vw] proxima">
                <img src="/phone.svg" alt="" />
                +993 12 59 61 59
              </span>
              <span className="flex items-center gap-[1vw] text-[3.5vw] md:text-[1vw] mb-[1.5vw] proxima">
                <img src="/phone.svg" alt="" />
                +993 65 80 59 80
              </span>

              <address className="text-[3vw] md:text-[0.9vw] proxima mb-[2.24vw]">
                {address}
              </address>
            </div>
          </div>

          <div className="md:flex-[0_0_20vw] flex-[0_0_30vw] relative">
            <input
              type="text"
              placeholder="Enter your email"
              className="border-b md:text-[1.56vw] mb-[1vw] md:placeholder:text-[1.56vw] placeholder:text-[3vw] text-[3vw] focus:outline-0 md:h-[3.4vw] h-[8vw] w-full"
            />
            <input
              type="text"
              placeholder="Your message"
              className="border-b bg-[url('/arrow.svg')] bg-size-[3vw] md:bg-size-[1.3vw] bg-no-repeat bg-right md:text-[1.56vw] md:placeholder:text-[1.56vw] placeholder:text-[3vw] text-[3vw] focus:outline-0 md:h-[3.4vw] h-[8vw] w-full"
            />

            {/* <img
              src="/arrow.svg"
              alt=""
              className="absolute bottom-[6.5vw] right-[0.3vw] size-[1vw]"
            /> */}
          </div>
        </div>

        <div className="w-full flex items-center justify-between proxima text-[#FAEADE]/50 text-16">
          <h4>Copyright © 2025 Mini’s - All Rights Reserved</h4>

          <div className="flex items-center gap-[1.25vw]">
            <Link to="" className="hover:opacity-60 transition-opacity">
              Privacy Policy
            </Link>
            <Link to="" className="hover:opacity-60 transition-opacity">
              Terms of Sеrvice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
