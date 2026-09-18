import { validatePlaceOrderForm } from "../services/placeOrderValidationService.js";
import { placeOrderView } from "../views/placeOrderView.js";
import { clearCart } from "../model/model.js";
import { syncHeaderCounts } from "./headerController.js";
import { getPrice } from "../utils/getPrice.js";
import { state } from "../state/state.js";
import { formatPrice } from "../utils/format.js";
import * as model from "../model/model.js";

export const prepareOrderProducts = function () {
  const cartProducts = state.cart.map((product) => {
    const price = getPrice(product.price);

    return {
      id: product.id,
      title: product.title,
      image: product.images.main,
      quantity: product.quantity,
      finalPrice: formatPrice(price.finalPrice),
      subtotal: price.finalPrice * product.quantity,
      summary: model.getSummary(),
    };
  });

  return cartProducts;
};

export const controlPlaceOrder = function ({ target }) {
  const formData = new FormData(target);

  const data = Object.fromEntries(formData.entries());

  const result = validatePlaceOrderForm(data);

  placeOrderView.updateValidation(result);

  if (result.isValid) {
    setTimeout(() => {
      window.location.href = "/#/order-success";
      clearCart();
      syncHeaderCounts();
    }, 1000);
  }
};
