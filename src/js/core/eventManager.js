import { state } from "../state/state.js";
import { productEventActions } from "../controllers/eventControllers.js";
import { cartEventActions } from "../controllers/eventControllers.js";
import { wishlistEventActions } from "../controllers/eventControllers.js";
import { controlUpdateInputField } from "../controllers/cartController.js";
import { constrolSearchInput } from "../controllers/searchController.js";

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
  };

  const inputMap = {
    quantity: controlUpdateInputField,

    search: constrolSearchInput,
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

    const inputType = target.dataset.input;

    inputMap[inputType]?.({
      target,
      value: target.value,
      id: target.dataset.id,
    });
  }
};
