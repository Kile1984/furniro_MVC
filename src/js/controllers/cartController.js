import { state } from "../state/state.js";
import { getPrice } from "../utils/getPrice.js";
import * as model from "../model/model.js";
import { cartView } from "../views/cart/cartView.js";

export const preparedCartProducts = function () {
  return state.cart.map((product) => {
    const price = getPrice(product.price);

    return {
      id: product.id,
      title: product.title,
      image: product.images.main,
      quantity: product.quantity,
      finalPrice: price.finalPrice,
      subtotal: price.finalPrice * product.quantity,
    };
  });
};

export const controlIncrement = function ({ dataset }) {
  model.incrementCartItem(dataset.id);

  const product = state.cart.find((p) => p.id === dataset.id);

  cartView.updateQuantityValue({ id: dataset.id, quantity: product.quantity });
};

export const controlDecrement = function ({ dataset }) {
  model.decrementCartItem(dataset.id);

  const product = state.cart.find((p) => p.id === dataset.id);
  if (!product) {
    cartView.removeCartItem(dataset.id);
    return;
  }

  cartView.updateQuantityValue({ id: dataset.id, quantity: product.quantity });
};

export const controlRemoveFromCart = function ({ dataset }) {
  cartView.removeCartItem(dataset.id);
};
