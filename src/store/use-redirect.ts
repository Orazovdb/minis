import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Store {
  redirectSection: string;
  setRedirect: (str: string) => void;
  sectionScroll: boolean;
  setSectionScroll: (val: boolean) => void;
}

export const useRedirectStore = create<Store>()(
  persist(
    (set) => ({
      redirectSection: "",
      setRedirect: (str) =>
        set((state) => ({ redirectSection: (state.redirectSection = str) })),
      sectionScroll: false,
      setSectionScroll: (val) =>
        set((state) => ({ sectionScroll: (state.sectionScroll = val) })),
    }),
    {
      name: "redirect-storage",
    }
  )
);
