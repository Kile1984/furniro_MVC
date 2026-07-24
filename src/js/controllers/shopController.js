import * as model from "../model/model.js";
import { state } from "../state/state.js";
import { filterDrawerView } from "../views/shop/filterDrawerView.js";
import { shopView } from "../views/shop/shopView.js";
import { preparedProduct } from "../utils/prepareProduct.js";
import { paginationView } from "../views/shop/paginationView.js";

export const controlCloseFilterDrawer = function () {
  filterDrawerView.close();
};

export const controlToggleFilterDrawer = function ({ dataset }) {
  const { action } = dataset;

  filterDrawerView.toggleFilterDrawer(action === "open-filter");
};

export const controlChangeGrid = function ({ dataset }) {
  const columns = dataset.action === "grid-2" ? 2 : 4;
  shopView.setGrid(columns);
};

export const preparedShopProducts = function () {
  const products = state.products.map((product) => preparedProduct(product));

  return controlPagination(products);
};

export const controlPagination = function (products) {
  const PRODUCTS_PER_PAGE = 8;
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  return {
    products: products.slice(0, PRODUCTS_PER_PAGE),
    totalPages,
  };
};
