import { state } from "../state/state.js";
import { getPrice } from "../utils/getPrice.js";
import { formatPrice } from "../utils/format.js";
import * as model from "../model/model.js";
import { cartView } from "../views/cart/cartView.js";
import { cartActions } from "../state/actions/cartActions.js";

const updateCartSummary = function () {
  const summary = model.getSummary();

  cartView.updateTotals(summary);
};

export const preparedCartProducts = function () {
  const products = state.cart.map((product) => {
    const price = getPrice(product.price);

    return {
      id: product.id,
      title: product.title,
      image: product.images.main,
      quantity: product.quantity,
      finalPrice: price.finalPrice,
      subtotal: price.finalPrice * product.quantity,
      stock: product.properties.stock,
    };
  });

  const summary = model.getSummary();

  return { products, summary };
};

export const controlIncrement = function ({ dataset }) {
  model.incrementCartItem(dataset.id);

  const product = state.cart.find((p) => p.id === dataset.id);
  if (!product) return;

  cartView.updateQuantityValue({ id: dataset.id, quantity: product.quantity });
  cartView.updateCartSubtotal(
    dataset.id,
    formatPrice(model.getCartProductSubtotal(dataset.id)),
  );

  updateCartSummary();
};

export const controlDecrement = function ({ dataset }) {
  model.decrementCartItem(dataset.id);

  const product = state.cart.find((p) => p.id === dataset.id);

  if (!product) {
    cartView.removeCartItem(dataset.id);
    updateCartSummary();
    return;
  }

  cartView.updateQuantityValue({ id: dataset.id, quantity: product.quantity });
  cartView.updateCartSubtotal(
    dataset.id,
    formatPrice(model.getCartProductSubtotal(dataset.id)),
  );

  updateCartSummary();
};

export const controlRemoveFromCart = function ({ dataset }) {
  model.removeFromCart(dataset.id);

  cartView.removeCartItem(dataset.id);
  cartView.updateCartSubtotal(
    dataset.id,
    formatPrice(model.getCartProductSubtotal(dataset.id)),
  );

  updateCartSummary();
};

export const controlUpdateInputField = function (id, value) {
  if (value === "") return;

  // permits number
  const isValidTyping = /^\d+$/.test(value);
  if (!isValidTyping) return;

  // converting to number
  const quantity = Number(value);

  // safty validation
  if (Number.isNaN(quantity)) return;

  // business validation
  if (quantity < 1 || quantity > 5) {
    const currentQuantity = cartActions.getQuantity(id);
    cartView.updateQuantityValue({ id, quantity: currentQuantity });
    return;
  }

  // integer
  if (!Number.isInteger(quantity)) return;

  // optional max limit
  if (quantity > 5) return;

  cartActions.changeQuantity(id, quantity);

  cartView.updateInputValue(id, quantity);

  updateCartSummary();
};
