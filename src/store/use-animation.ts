import { create } from "zustand";

interface Store {
  isLoading: boolean;
  setIsLoading: (val: boolean) => void;
}

export const useAnimateStore = create<Store>()((set) => ({
  isLoading: false,
  setIsLoading: (val) =>
    set((state) => ({ isLoading: (state.isLoading = val) })),
}));
