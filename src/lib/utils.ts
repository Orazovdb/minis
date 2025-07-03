import { useLangStore } from "../store/use-lang";

export const useTranslate = (en: string, tr: string) => {
  const lang = useLangStore((state) => state.lang);

  if (lang === "en") return en;
  else return tr;
};
