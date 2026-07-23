import { state } from "../state/state.js";
import { compareTrayView } from "../views/compareTrayView.js";
import { prepareCompareTrayProduct } from "../utils/prepareCompareTrayProduct.js";

export const prepareCompareTrayProducts = function () {
  return state.compare.map((product) => prepareCompareTrayProduct(product));
};

export const renderCompareTray = function () {
  const products = prepareCompareTrayProducts();
  compareTrayView.render({ products, isOpen: state.isCompareTrayOpen });
};
