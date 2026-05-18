import { storeActions } from "../state/storeActions.js";
import { state } from "../state/state.js";

export const controlAddToCart = function ({ dataset }) {
  const product = state.products.find((p) => p.id === dataset.id);

  storeActions.addToCart(product);
};
