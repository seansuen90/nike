import { create } from "zustand";

type ProductSelectionState = {
  selectedProductId: string | null;
  setSelectedProductId: (id: string | null) => void;
};

export const useProductSelection = create<ProductSelectionState>((set) => ({
  selectedProductId: null,
  setSelectedProductId: (id) => set({ selectedProductId: id })
}));
