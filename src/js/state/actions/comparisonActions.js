import { state } from "../state.js";
import { productsActions } from "./productsActions.js";
import { persistActions } from "./persistActions.js";

export const comparisonActions = {
  isProductInCompare(id) {
    return state.compare.some((p) => p.id === id);
  },

  addToCampare(id) {
    const product = productsActions.getProductById(id);

    if (!product || this.isProductInCompare(id)) return;

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
};
