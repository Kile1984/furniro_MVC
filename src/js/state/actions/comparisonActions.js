import { state } from "../state.js";
import { productsActions } from "./productsActions.js";
import { persistActions } from "./persistActions.js";

export const comparisonActions = {
  MAX_COMPARE_ITEMS: 3,

  isProductInCompare(id) {
    return state.compare.some((p) => p.id === id);
  },

  addToCampare(product) {
    if (!product || this.isProductInCompare(product.id)) return;

    if (state.compare.length >= this.MAX_COMPARE_ITEMS) return;

    state.compare.push(product);

    persistActions.save("compare", state.compare);
  },

  removeFromCompare(id) {
    state.compare = state.compare.filter((p) => p.id !== id);

    persistActions.save("compare", state.compare);
  },

  isInComparison(id) {
    return state.compare.some((p) => p.id === id);
  },

  clearCompare() {
    state.compare = [];

    persistActions.save("compare", state.compare);
  },
};
