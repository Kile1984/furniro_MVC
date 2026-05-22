import { cartActions } from "../state/actions/cartActions.js";
import { state } from "../state/state.js";
import { productCardsView } from "../views/shared/productCardsView.js";
import { getPrice } from "../utils/getPrice.js";

export const controlAddToCart = function ({ dataset }) {
  const product = state.products.find((p) => p.id === dataset.id);
  cartActions.addToCart(product);
  productCardsView.updateCartButton(state.cart, product.id);
};

export const controlIncrement = function ({ dataset }) {
  cartActions.incrementQuantity(dataset.id);
  productCardsView.updateCartButton(state.cart, dataset.id);
};

export const controlDecrement = function ({ dataset }) {
  cartActions.decrementQuantity(dataset.id);
  productCardsView.updateCartButton(state.cart, dataset.id);
};

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

// Ovo ne ulazi ovde
export const controlRemoveFromCart = function (id) {
  console.log("Removing...");
  const product = state.cart.find((p) => p.id === dataset.id);
  storeActions.removeFromCart(product.id);
};
