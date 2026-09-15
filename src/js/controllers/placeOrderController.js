import { validatePlaceOrderForm } from "../services/placeOrderValidationService.js";

export const controlPlaceOrder = function ({ target }) {
  const formData = new FormData(target);

  const data = Object.fromEntries(formData.entries());

  const result = validatePlaceOrderForm(data);

  console.log(result);
};
