import { create } from "zustand";

interface Store {
  redirectSection: string;
  setRedirect: (str: string) => void;
}

export const useRedirectStore = create<Store>()((set) => ({
  redirectSection: "",
  setRedirect: (str) =>
    set((state) => ({ redirectSection: (state.redirectSection = str) })),
}));
