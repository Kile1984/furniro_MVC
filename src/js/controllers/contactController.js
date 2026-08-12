import { validateContactForm } from "../services/contactValidationService.js";
import { contactView } from "../views/contact/contactView.js";

export const controlValidation = function ({ target }) {
  const formData = new FormData(target);

  const data = Object.fromEntries(formData.entries());

  const result = validateContactForm(data);

  contactView.updateValidation(result);
};
