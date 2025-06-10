import { create } from "zustand";

interface Store {
  loading: boolean;
  setLoading: (val: boolean) => void;
}

export const useLoaderStore = create<Store>()((set) => ({
  loading: true,
  setLoading: (val: boolean) =>
    set((state) => ({ loading: (state.loading = val) })),
}));
