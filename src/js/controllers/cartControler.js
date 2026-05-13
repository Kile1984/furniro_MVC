import { actions } from "../state/actions.js";
import { state } from "../state/state.js";

export const controlAddToCart = function (id) {
  const product = state.products.find((p) => p.id === id);

  actions.addToCart(product);
};
