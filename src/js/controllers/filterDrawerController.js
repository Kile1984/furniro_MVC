import { state } from "../state/state.js";
import { filterDrawerView } from "../views/shop/filterDrawerView";
import { filterDrawerActions } from "../state/actions/filterDrawerActions.js";
import { filterProducts } from "../services/filterService.js";
import { preparedProduct } from "../utils/prepareProduct.js";
import { productCardsView } from "../views/shared/productCardsView.js";

const filterMap = {
  category: handleCategory,
  minPrice: handlePrice,
  maxPrice: handlePrice,
  inStock: handleCheckbox,
  discount: handleCheckbox,
  rating: handleRating,
};

// category
function handleCategory(target) {
  filterDrawerActions.toggleCategory(target.value, target.checked);
}

// price
function handlePrice(target) {
  let value = Number(target.value);

  if (value < state.minFilterPrice) {
    value = state.minFilterPrice;
  }

  if (value > state.maxFilterPrice) {
    value = state.maxFilterPrice;
  }

  filterDrawerActions.setFilters(target.name, value);
}

// stock and discount
function handleCheckbox(target) {
  filterDrawerActions.setFilters(target.name, target.checked);
}

// rating
function handleRating(target) {
  filterDrawerActions.setFilters(target.name, Number(target.value));
}

export const controlFilter = function ({ target }) {
  filterMap[target.name]?.(target);
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
