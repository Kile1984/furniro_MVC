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
  comparisonActions,
  comparisonChangeActions,
  shopChangeActions,
  footerActions,
  contactActions,
} from "./eventHandlers.js";
import { controlCloseMenu } from "../controllers/headerController.js";

export const initEventManager = function () {
  const appEl = document.querySelector("#app");
  const searchInput = document.querySelector(".header__search-input");
  const compareTrayEl = document.querySelector(".compare-tray");
  const headerEl = document.querySelector(".header");
  const footerEl = document.querySelector(".footer");

  appEl.addEventListener("click", handleClick);
  appEl.addEventListener("input", handleInput);
  appEl.addEventListener("change", handleChange);
  searchInput.addEventListener("input", handleInput);
  compareTrayEl.addEventListener("click", handleClick);
  headerEl.addEventListener("click", handleClick);
  footerEl.addEventListener("click", handleClick);
  footerEl.addEventListener("submit", handleSubmit);
  appEl.addEventListener("submit", handleSubmit);
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
    compare: comparisonActions,
  };

  const inputMap = {
    cart: cartInputActions,
    product: singleProductInputActions,
    header: searchInputActions,
    shop: filterInputActions,
  };

  const changeMap = {
    compare: comparisonChangeActions,
    shop: shopChangeActions,
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
    const action = target.dataset.input;

    if (!action) return;

    const source = target.closest(".header") ? "header" : state.currentRoute;

    console.log("ACTION: " + action, "SOURCE: " + source);

    inputMap[source]?.[action]?.({
      target,
      value: target.value,
      id: target.dataset.id,
    });
  }

  function handleChange(e) {
    const target = e.target;
    const action = target.dataset.change;

    if (!action) return;

    const source = state.currentRoute;

    console.log("ACTION: " + action, "SOURCE: " + source);

    changeMap[source]?.[action]?.({
      target,
      id: target.value,
    });
  }

  const submitMap = {
    footer: footerActions,
    contact: contactActions,
  };

  function handleSubmit(e) {
    e.preventDefault();

    const target = e.target;
    const action = target.dataset.submit;

    if (!action) return;

    const source = target.closest(".footer")
      ? "footer"
      : target.closest(".contact-cta__form")
        ? "contact"
        : state.currentRoute;

    console.log("ACTION: " + action, "SOURCE: " + source);

    submitMap[source]?.[action]?.({ target });
  }
};
