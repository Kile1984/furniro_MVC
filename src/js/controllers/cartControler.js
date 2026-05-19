import { storeActions } from "../state/storeActions.js";
import { state } from "../state/state.js";
import { cartView } from "../views/shared/cartView.js";

export const controlAddToCart = function ({ dataset }) {
  const product = state.products.find((p) => p.id === dataset.id);
  storeActions.addToCart(product);
  cartView.updateCartButton(state.cart, product.id);
};
