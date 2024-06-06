import { create } from "zustand";

type VisibilityStore = {
  isVisible: boolean;
  toggleVisibility: () => void;
};

export const useVisibilityStore = create<VisibilityStore>((set) => ({
  isVisible: true,
  toggleVisibility: () => set((state) => ({ isVisible: !state.isVisible })),
}));
