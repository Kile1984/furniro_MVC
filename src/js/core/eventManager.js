import { state } from "../state/state.js";
import { homeEventActions } from "../controllers/eventControllers.js";
import { cartEventActions } from "../controllers/eventControllers.js";
import { controlUpdateInputField } from "../controllers/cartController.js";

export const initEventManager = function () {
  const appEl = document.querySelector("#app");

  appEl.addEventListener("click", handleClick);
  appEl.addEventListener("input", handleInput);

  function handleClick(e) {
    const target = e.target.closest("[data-action]");

    if (!target) return;

    const action = target.dataset.action;
    const source = state.currentRoute;

    if (source === "home") {
      homeEventActions[action]?.({
        target: target,
        dataset: target.dataset,
        source,
      });
    }

    if (source === "cart") {
      cartEventActions[action]?.({
        target: target,
        dataset: target.dataset,
        source,
      });
    }
  }

  function handleInput(e) {
    const target = e.target;

    if (!target) return;

    const id = target.dataset.id;
    const value = target.value;

    controlUpdateInputField(id, value);
  }
};
