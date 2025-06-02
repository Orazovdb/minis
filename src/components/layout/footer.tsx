import clsx from "clsx";
import type { FC } from "react";
import { socials } from "../../lib/constantas";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
}

export const Footer: FC<Props> = ({ className }) => {
  return (
    <footer className={clsx("bg-[#222123] pb-[1.56vw]", className)}>
      <div className="w-full h-[33vh] -mt-[0.3vw] z-10 ">
        <img
          src="/shapes/footer-shape.svg"
          className="size-full object-contain"
        />
      </div>

      <div className="flex items-center gap-[0.72vw] justify-center mt-[3.333vw]">
        {socials.map((item) => (
          <Link
            to={item.link}
            target="_blank"
            className="size-[3.75vw] rounded-full p-[1.09vw] border border-[#FAEADE]/20"
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
        <div className="flex justify-between mb-[8.33vw] text-[#FAEADE]">
          <div className="flex gap-[3.33vw] flex-[0_0_26vw] justify-end">
            <img
              src="/logo.svg"
              alt="logo"
              className="h-[2vw] w-auto object-contain"
            />
            <p className="text-16 proxima">
              We'd love to hear from you. Get in touch with us, and our friendly
              team will be here to assist you. Your thoughts matter, and we're
              here to ensure your experience with us is as delightful as our
              snacks. Contact us today!
            </p>
          </div>

          <div className="flex-[0_0_20vw]">
            <address className="text-16 proxima mb-[2.24vw]">
              Address: Jaý 8, k.Telekeçi, etrap Ak bugdaý, Anew, Türkmenistan
            </address>
            <input
              type="text"
              placeholder="Enter your email"
              className="border-b placeholder:text-[1.56vw] h-[3.4vw] w-full"
            />
          </div>
        </div>

        <div className="w-full flex items-center justify-between proxima text-[#FAEADE]/50 text-16">
          <h4>Copyright © 2025 Mini’s - All Rights Reserved</h4>

          <div className="flex items-center gap-[1.25vw]">
            <a href="">Privacy Policy</a>
            <a href="">Terms of Sеrvice</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
