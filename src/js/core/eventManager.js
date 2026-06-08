import { state } from "../state/state.js";
import {
  productEventActions,
  cartEventActions,
  wishlistEventActions,
  singleProductEventActions,
  cartInputActions,
  singleProductInputActions,
  searchInputActions,
} from "../controllers/eventControllers.js";

export const initEventManager = function () {
  const appEl = document.querySelector("#app");
  const searchInput = document.querySelector(".header__search-input");

  appEl.addEventListener("click", handleClick);
  appEl.addEventListener("input", handleInput);
  searchInput.addEventListener("input", handleInput);

  const eventMap = {
    home: productEventActions,
    shop: productEventActions,
    cart: cartEventActions,
    wishlist: wishlistEventActions,
    product: singleProductEventActions,
  };

  const inputMap = {
    cart: cartInputActions,
    product: singleProductInputActions,
  };

  function handleClick(e) {
    const target = e.target.closest("[data-action]");

    if (!target) return;

    const action = target.dataset.action;
    const source = state.currentRoute;

    eventMap[source]?.[action]?.({
      target: target,
      dataset: target.dataset,
      source,
    });
  }

  function handleInput(e) {
    const target = e.target;

    if (!target) return;

    const action = target.dataset.input;
    const source = state.currentRoute;

    inputMap[source]?.[action]?.({
      target,
      value: target.value,
      id: target.dataset.id,
    });
  }
};
