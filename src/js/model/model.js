import { cartActions } from "../state/actions/cartActions.js";
import { state } from "../state/state.js";

export const addToCartItem = function (id) {
  const product = state.products.find((p) => p.id === id);
  cartActions.addToCart(product);
};

export const incrementCartItem = function (id) {
  cartActions.incrementQuantity(id);
};

export const decrementCartItem = function (id) {
  cartActions.decrementQuantity(id);
};
