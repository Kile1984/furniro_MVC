import { state } from "../state/state.js";
import { controlCloseSearch } from "../controllers/searchController.js";
import { controlCloseFilterDrawer } from "../controllers/shopController.js";
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
  shopEventActions,
  filterInputActions,
} from "./eventHandlers.js";
import { controlCloseMenu } from "../controllers/headerController.js";
import { navigationManager } from "../navigation/navigationManager.js";

export const initEventManager = function () {
  const appEl = document.querySelector("#app");
  const searchInput = document.querySelector(".header__search-input");
  const compareTrayEl = document.querySelector(".compare-tray");
  const headerEl = document.querySelector(".header");
  const footerEl = document.querySelector(".footer");

  appEl.addEventListener("click", handleClick);
  appEl.addEventListener("input", handleInput);
  searchInput.addEventListener("input", handleInput);
  compareTrayEl.addEventListener("click", handleClick);
  headerEl.addEventListener("click", handleClick);
  footerEl.addEventListener("click", handleClick);
  document.addEventListener("click", handleOutsideClick);

  function handleOutsideClick(e) {
    //search
    if (!e.target.closest(".header__search-wrapper")) {
      controlCloseSearch();
    }

    // filter drawer
    if (e.target.closest(".filter-overlay")) {
      controlCloseFilterDrawer();
    }

    // menu
    if (
      state.isMobileMenuOpen &&
      !e.target.closest(".header__nav") &&
      !e.target.closest("[data-action='open-menu']")
    ) {
      controlCloseMenu();
    }
  }

  const eventMap = {
    home: productEventActions,
    shop: shopEventActions,
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
    shop: filterInputActions,
  };

  function handleClick(e) {
    const link = e.target.closest("[data-route]");

    if (link) {
      e.preventDefault();

      const route = link.getAttribute("href");
      navigationManager.navigate(route);

      return;
    }

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
