import { validatePlaceOrderForm } from "../services/placeOrderValidationService.js";
import { placeOrderView } from "../views/placeOrderView.js";
import { clearCart } from "../model/model.js";
import { syncHeaderCounts } from "./headerController.js";

export const controlPlaceOrder = function ({ target }) {
  const formData = new FormData(target);

  const data = Object.fromEntries(formData.entries());

  const result = validatePlaceOrderForm(data);

  placeOrderView.updateValidation(result);

  if (result.isValid) {
    window.location.href = "/#/order-success";
    clearCart();
    syncHeaderCounts();
  }
};
