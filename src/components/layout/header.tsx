import clsx from "clsx";
import { useCallback, type FC } from "react";
import { useBurgerStore } from "../../store/use-burger";
import { Link, useNavigate } from "react-router-dom";
import { useLangStore } from "../../store/use-lang";

interface Props {
  className?: string;
}

const langs = [
  {
    lang: "en",
  },
  {
    lang: "tr",
  },
];

export const Header: FC<Props> = ({ className }) => {
  const navigate = useNavigate();

  const { isOpen, setIsOpen } = useBurgerStore((state) => state);
  const activeLang = useLangStore((state) => state.lang);
  const setLang = useLangStore((state) => state.setLang);

  const onLang = useCallback(
    (lang: string) => {
      setLang(lang);
      navigate(0);
    },
    [activeLang]
  );

  return (
    <header
      id="header"
      className={clsx(
        "fixed top-0 flex z-[70] items-center justify-between px-[2vw] py-[1vw] w-full",
        className
      )}
    >
      <Link onClick={() => setIsOpen(false)} to="/">
        <img
          src="/logo.svg"
          alt="logo"
          className="md:size-[5vw] size-[20vw] cursor-pointer"
        />
      </Link>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "md:h-[2.08vw] h-[6.24vw] -mr-[1.3vw] relative transition-all md:w-[3.64vw] z-[100] w-[10.92vw] flex flex-col justify-center items-center gap-[0.4vw] cursor-pointer px-4 overflow-hidden",
          isOpen && "md:bg-white rounded-full !size-[3.5vw]"
        )}
      >
        <span
          className={clsx(
            "md:w-[3.02vw] w-[7vw] md:h-[0.1vw] h-[0.4vw] bg-amber-950 transition-all duration-300 ease-initial",
            isOpen && "rotate-45 translate-y-[0.25vw] md:!w-[1.5vw]"
          )}
        />
        <span
          className={clsx(
            "md:w-[3.02vw] w-[7vw] md:h-[0.1vw] h-[0.4vw] bg-amber-950 transition-all duration-300 ease-initial",
            isOpen && "-rotate-45 -translate-y-[0.25vw] md:!w-[1.5vw]"
          )}
        />
      </div>

      <div className="flex items-center uppercase md:gap-[1vw] gap-[2vw]">
        {langs.map(({ lang }) => (
          <button
            key={lang}
            onClick={() => onLang(lang)}
            className={clsx(
              "text-[#523122] uppercase transition-colors rounded-full md:p-[0.5vw] p-[1vw] md:text-[1.5vw] text-[6vw] cursor-pointer",
              lang === activeLang && "bg-[#E3A458]"
            )}
          >
            {lang}
          </button>
        ))}
      </div>
    </header>
  );
};
