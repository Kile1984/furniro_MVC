import * as model from "../model/model.js";
import { state } from "../state/state.js";
import { cartActions } from "../state/actions/cartActions.js";
import { syncHeaderCounts } from "./headerController.js";
import { cartView } from "../views/cart/cartView.js";
import { getPrice } from "../utils/getPrice.js";
import { formatPrice } from "../utils/format.js";

const updateCartSummary = function () {
  const summary = model.getSummary();

  cartView.updateTotals(summary);
};

const updateCartItemUI = function (id) {
  const product = cartActions.getCartItemById(id);

  cartView.updateIncrementButtonState({
    id,
    isDisabled: product.quantity >= product.properties.stock,
  });

  cartView.updateQuantityValue({ id, quantity: product.quantity });
  cartView.updateCartSubtotal(
    id,
    formatPrice(model.getCartProductSubtotal(id)),
  );

  syncHeaderCounts();
  updateCartSummary();
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

  updateCartItemUI(dataset.id);
};

export const controlDecrement = function ({ dataset }) {
  model.decrementCartItem(dataset.id);

  const product = cartActions.getCartItemById(dataset.id);

  if (!product) {
    cartView.removeCartItem(dataset.id);
    syncHeaderCounts();
    updateCartSummary();
    return;
  }

  updateCartItemUI(dataset.id);
};

export const controlRemoveFromCart = function ({ dataset }) {
  model.removeFromCart(dataset.id);

  cartView.removeCartItem(dataset.id);
  cartView.updateCartSubtotal(
    dataset.id,
    formatPrice(model.getCartProductSubtotal(dataset.id)),
  );

  syncHeaderCounts();
  updateCartSummary();
};

export const controlUpdateInputField = function (id, value) {
  const product = cartActions.getCartItemById(id);

  if (value === "") return;

  // permits number
  const isValidTyping = /^\d+$/.test(value);
  if (!isValidTyping) return;

  // converting to number
  const quantity = Number(value);

  // safty validation
  if (Number.isNaN(quantity)) return;

  // business validation
  if (quantity < 1 || quantity > product.properties.stock) {
    const currentQuantity = cartActions.getQuantity(id);
    cartView.updateQuantityValue({ id, quantity: currentQuantity });
    return;
  }

  // integer
  if (!Number.isInteger(quantity)) return;

  // optional max limit
  if (quantity > product.properties.stock) return;

  cartActions.changeQuantity(id, quantity);

  cartView.updateInputValue(id, quantity);

  syncHeaderCounts();
  updateCartSummary();
};
