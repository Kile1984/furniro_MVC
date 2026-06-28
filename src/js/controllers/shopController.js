import * as model from "../model/model.js";
import { filterDrawerView } from "../views/shop/filterDrawerView.js";
import { shopView } from "../views/shop/shopView.js";

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
