import { actions } from "../controllers/actions.js";

export const initEventManager = function () {
  const appEl = document.querySelector("#app");

  appEl.addEventListener("click", handleClick);

  function handleClick(e) {
    const target = e.target.closest("[data-action]");

    if (!target) return;

    const action = target.dataset.action;

    actions[action]?.({ target, dataset: target.dataset });
  }
};
