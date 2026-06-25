import { state } from "../state/state.js";
import { controlCloseSearch } from "../controllers/searchController.js";
import {
  productEventActions,
  cartEventActions,
  wishlistEventActions,
  singleProductEventActions,
  cartInputActions,
  singleProductInputActions,
  searchInputActions,
  compareTrayActions,
  headerEventActions,
} from "./eventHandlers.js";

export const initEventManager = function () {
  const appEl = document.querySelector("#app");
  const searchInput = document.querySelector(".header__search-input");
  const compareTrayEl = document.querySelector(".compare-tray");
  const headerEl = document.querySelector(".header");

  appEl.addEventListener("click", handleClick);
  appEl.addEventListener("input", handleInput);
  searchInput.addEventListener("input", handleInput);
  compareTrayEl.addEventListener("click", handleClick);
  headerEl.addEventListener("click", handleClick);
  document.addEventListener("click", handleOutsideSearchClick);

  function handleOutsideSearchClick(e) {
    if (e.target.closest(".header__search-wrapper")) return;
    controlCloseSearch();
  }

  const eventMap = {
    home: productEventActions,
    shop: productEventActions,
    cart: cartEventActions,
    wishlist: wishlistEventActions,
    product: singleProductEventActions,
    category: productEventActions,
    compareTray: compareTrayActions,
    header: headerEventActions,
  };

  const inputMap = {
    cart: cartInputActions,
    product: singleProductInputActions,
    header: searchInputActions,
  };

  function handleClick(e) {
    const target = e.target.closest("[data-action]");

    if (!target) return;

    const action = target.dataset.action;
    const source = target.closest(".compare-tray")
      ? "compareTray"
      : target.closest(".header")
        ? "header"
        : state.currentRoute;

    console.log("ACTION: " + action, "SOURCE: " + source);

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
    const source = target.closest(".header") ? "header" : state.currentRoute;

    console.log("ACTION: " + action, "SOURCE: " + source);

    inputMap[source]?.[action]?.({
      target,
      value: target.value,
      id: target.dataset.id,
    });
  }
};
