import * as model from "../model/model.js";
import { state } from "../state/state.js";
import { filterDrawerView } from "../views/shop/filterDrawerView.js";
import { shopView } from "../views/shop/shopView.js";
import { preparedProduct } from "../utils/prepareProduct.js";
import { paginationActions } from "../state/actions/paginationActions.js";
import { renderApp } from "../core/render.js";
import { paginateProducts } from "../services/paginationService.js";
import { filterProducts } from "../services/filterService.js";
import { render } from "sass";
import { filterDrawerActions } from "../state/actions/filterDrawerActions.js";

export const controlCloseFilterDrawer = function () {
  filterDrawerActions.setDrawerState(false);

  filterDrawerView.toggleFilterDrawer(false);
};

export const controlToggleFilterDrawer = function ({ dataset }) {
  const { action } = dataset;

  const isOpen = action === "open-filter";

  filterDrawerActions.setDrawerState(isOpen);

  filterDrawerView.toggleFilterDrawer(isOpen);
};

export const controlChangeGrid = function ({ dataset }) {
  const columns = dataset.action === "grid-2" ? 2 : 4;
  shopView.setGrid(columns);
};

export const preparedShopProducts = function () {
  const filteredProducts = filterProducts(state.products, state.filter);

  const preparedProducts = filteredProducts.map(preparedProduct);
  const paginationData = paginateProducts(preparedProducts);

  return { ...paginationData, isDrawerOpen: state.isDrawerOpen };
};

export const controlChangePage = function ({ dataset }) {
  paginationActions.setCurrentPage(Number(dataset.page));

  renderApp();

  shopView.scrollToProducts();
};

export const controlProductPerPage = function ({ target, id: value }) {
  const productPerPage = Number(value);
  paginationActions.setProductsPerPage(productPerPage);

  paginationActions.setCurrentPage(1);

  renderApp();
};

export const controlSortProduct = function ({ target, id }) {
  console.log(target, id);
};
