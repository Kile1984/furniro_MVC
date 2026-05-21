import { storeActions } from "../state/storeActions.js";
import { state } from "../state/state.js";
import { miniCartView } from "../views/shared/miniCartView.js";
import { getPrice } from "../utils/getPrice.js";

export const controlAddToCart = function ({ dataset }) {
  const product = state.products.find((p) => p.id === dataset.id);
  storeActions.addToCart(product);
  miniCartView.updateCartButton(state.cart, product.id);
};

export const controlIncrement = function ({ dataset }) {
  storeActions.incrementQuantity(dataset.id);
  miniCartView.updateCartButton(state.cart, dataset.id);
};

export const controlDecrement = function ({ dataset }) {
  storeActions.decrementQuantity(dataset.id);
  miniCartView.updateCartButton(state.cart, dataset.id);
};

export const controlCartPage = function () {
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

// Ovo ne ulazi ovde
export const controlRemoveFromCart = function (id) {
  console.log("Removing...");
  const product = state.cart.find((p) => p.id === dataset.id);
  storeActions.removeFromCart(product.id);
};
