import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Store {
  lang: string;
  setLang: (lang: string) => void;
}

export const useLangStore = create<Store>()(
  persist(
    (set) => ({
      lang: "en",
      setLang: (lang) => set((state) => ({ lang: (state.lang = lang) })),
    }),
    { name: "lang" }
  )
);
