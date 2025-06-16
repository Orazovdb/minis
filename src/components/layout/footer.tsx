import clsx from "clsx";
import type { FC } from "react";
import { socials } from "../../lib/constantas";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
}

export const Footer: FC<Props> = ({ className }) => {
  return (
    <footer className={clsx("bg-[#222123] pb-[1.56vw] w-full", className)}>
      <div className="w-full z-10 flex items-start justify-start">
        <img
          src="/shapes/footer-shape.svg"
          className="size-full object-cover"
        />
      </div>

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
        <div className="flex justify-between items-end mb-[8.33vw] text-[#FAEADE]">
          <div className="flex flex-col md:flex-row gap-[3.33vw] md:flex-[0_0_26vw] flex-[0_0_40vw] justify-end">
            <img
              src="/logo.svg"
              alt="logo"
              className="md:h-[2vw] h-[10vw] object-left w-auto object-contain"
            />
            <p className="text-16 proxima">
              We'd love to hear from you. Get in touch with us, and our friendly
              team will be here to assist you. Your thoughts matter, and we're
              here to ensure your experience with us is as delightful as our
              snacks. Contact us today!
            </p>
          </div>

          <div className="md:flex-[0_0_20vw] flex-[0_0_30vw]">
            <address className="text-16 proxima mb-[2.24vw]">
              Address: Jaý 8, k.Telekeçi, etrap Ak bugdaý, Anew, Türkmenistan
            </address>
            <input
              type="text"
              placeholder="Enter your email"
              className="border-b md:text-[1.56vw] md:placeholder:text-[1.56vw] placeholder:text-[3vw] text-[3vw] focus:outline-0 md:h-[3.4vw] h-[8vw] w-full"
            />
          </div>
        </div>

        <div className="w-full flex items-center justify-between proxima text-[#FAEADE]/50 text-16">
          <h4>Copyright © 2025 Mini’s - All Rights Reserved</h4>

          <div className="flex items-center gap-[1.25vw]">
            <a href="" className="hover:opacity-60 transition-opacity">
              Privacy Policy
            </a>
            <a href="" className="hover:opacity-60 transition-opacity">
              Terms of Sеrvice
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
