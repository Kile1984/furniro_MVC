import * as model from "../model/model.js";
import { filterDrawerView } from "../views/shop/filterDrawerView.js";

export const controlOpenFilterDrawer = function () {
  filterDrawerView.open();
};

export const controlCloseFilterDrawer = function () {
  filterDrawerView.close();
  console.log("Open...");
};
