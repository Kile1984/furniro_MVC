import { state } from "../state/state.js";
import { filterDrawerView } from "../views/shop/filterDrawerView";
import { filterDrawerActions } from "../state/actions/filterDrawerActions.js";
import { getPrice } from "../utils/getPrice.js";
import { filterProducts } from "../services/filterService.js";
import { preparedProduct } from "../utils/prepareProduct.js";
import { productCardsView } from "../views/shared/productCardsView.js";
import { getMaxPrice } from "../utils/getPrice.js";

export const controlFilter = function ({ target }) {
  const { name, checked } = target;

  let value = Number(target.value);

  // category
  if (name === "category") {
    filterDrawerActions.toggleCategory(target.value, checked);
  }

  // price
  if (name === "minPrice" || name === "maxPrice") {
    if (value < 0) {
      value = state.minFilterPrice;
    }

    if (value > state.maxFilterPrice) {
      value = state.maxFilterPrice;
    }
    filterDrawerActions.setFilters(name, value);
  }

  // stock and discount
  if (name === "inStock" || name === "discount") {
    filterDrawerActions.setFilters(name, checked);
  }

  // rating
  if (name === "rating") {
    filterDrawerActions.setFilters(name, value);
  }
};

export const controlApplyFilters = function () {
  const filteredProducts = filterProducts(state.products, state.filter);

  const preparedProducts = filteredProducts.map((product) =>
    preparedProduct(product),
  );

  productCardsView.render(preparedProducts);
  filterDrawerView.close();
};

export const controlResetFilters = function () {
  filterDrawerActions.resetFilters();
  filterDrawerView.reset();

  const preparedProducts = state.products.map((product) =>
    preparedProduct(product),
  );

  productCardsView.render(preparedProducts);
};
