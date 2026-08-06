import { subscribe } from "../services/subscribeService.js";
import { subscribeView } from "../views/subscribeView.js";

export const controlSubscribe = async function ({ target }) {
  const input = target.querySelector(".footer__mail");

  if (!input.checkValidity()) {
    input.reportValidity();
    return;
  }

  const email = input.value.trim();

  const result = await subscribe(email);

  if (result.succes) {
    target.reset();
    subscribeView.showSuccess();
  }
};
