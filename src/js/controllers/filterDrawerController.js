import { state } from "../state/state.js";
import { filterDrawerView } from "../views/shop/filterDrawerView";
import { filterDrawerActions } from "../state/actions/filterDrawerActions.js";
import { getPrice } from "../utils/getPrice.js";

export const controlFilter = function ({ target }) {
  const { name, checked } = target;
  const min = 0;
  const max = Math.max(
    ...state.products.map((p) => {
      return getPrice(p.price).finalPrice;
    }),
  );
  let value = Number(target.value);

  if (name === "category") {
    filterDrawerActions.toggleCategory(target.value, checked);
  }

  if (name === "minPrice" || name === "maxPrice") {
    if (value < 0) {
      value = min;
    }

    if (value > max) {
      value = max;
    }
    filterDrawerActions.setFilters(name, value);
  }

  if (name === "inStock" || name === "discount") {
    filterDrawerActions.setFilters(name, checked);
  }

  if (name === "rating") {
    filterDrawerActions.setFilters(name, value);
  }
  filterDrawerActions.consoleState();
};
