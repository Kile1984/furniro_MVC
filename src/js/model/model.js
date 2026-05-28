import { cartActions } from "../state/actions/cartActions.js";
import { state } from "../state/state.js";
import { getPrice } from "../utils/getPrice.js";
import { formatPrice } from "../utils/format.js";

export const addToCartItem = function (id) {
  const product = state.products.find((p) => p.id === id);
  cartActions.addToCart(product);
};

export const removeFromCart = function (id) {
  cartActions.removeFromCart(id);
};

export const incrementCartItem = function (id) {
  cartActions.incrementQuantity(id);
};

export const decrementCartItem = function (id) {
  cartActions.decrementQuantity(id);
};

const SHIPPING_COST = 100;
const FREE_SHIPPING_THRESHOLD = 1500;
const TAX_RATE = 0.2;

export const getCartProductSubtotal = function (id) {
  const product = state.cart.find((p) => p.id === id);
  if (!product) return 0;

  const price = getPrice(product.price);

  return price.finalPrice * product.quantity;
};

export const getCartSubtotal = function () {
  return state.cart.reduce((acc, item) => {
    return acc + getPrice(item.price).finalPrice * item.quantity;
  }, 0);
};

export const getCarTax = function () {
  return getCartSubtotal() * TAX_RATE;
};

export const getShippingCost = function () {
  const subtotal = getCartSubtotal();

  return subtotal > FREE_SHIPPING_THRESHOLD || subtotal === 0
    ? 0
    : SHIPPING_COST;
};

export const getCartTotal = function () {
  return getCartSubtotal() + getCarTax() + getShippingCost();
};

export const getSummary = function () {
  const subtotal = formatPrice(getCartSubtotal());
  const tax = formatPrice(getCarTax());
  const shipping = formatPrice(getShippingCost());
  const total = formatPrice(getCartTotal());

  return {
    subtotal,
    tax,
    shipping,
    total,
  };
};
