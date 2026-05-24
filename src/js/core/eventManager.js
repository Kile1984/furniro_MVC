import { homeEventActions } from "../controllers/eventControllers.js";
import { cartEventActions } from "../controllers/eventControllers.js";
import { state } from "../state/state.js";

export const initEventManager = function () {
  const appEl = document.querySelector("#app");

  appEl.addEventListener("click", handleClick);

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
};
