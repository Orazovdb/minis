import { create } from "zustand";

interface Store {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

export const useBurgerStore = create<Store>()((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set((state) => ({ isOpen: (state.isOpen = isOpen) })),
}));
