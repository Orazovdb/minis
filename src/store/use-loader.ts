// store/use-loader.ts
import { create } from "zustand";

interface LoaderState {
  isLoading: boolean;
  initialLoadComplete: boolean;
  setLoading: (isLoading: boolean) => void;
  completeInitialLoad: () => void;
}

export const useLoaderStore = create<LoaderState>()((set) => ({
  isLoading: true,
  initialLoadComplete: false,
  setLoading: (isLoading) =>
    set((state) => ({ isLoading: (state.isLoading = isLoading) })),
  completeInitialLoad: () => set({ initialLoadComplete: true }),
}));
