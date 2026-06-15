import { state } from "../state/state.js";
import { getPrice } from "../utils/getPrice.js";
import { compareTrayView } from "../views/compareTrayView.js";
import { compareTrayActions } from "../state/actions/compareTrayActions.js";

export const prepareCompareTrayProducts = function () {
  return state.compare.map((product) => ({
    id: product.id,
    title: product.title,
    image: product.images.main,
    price: getPrice(product.price).finalPrice,
  }));
};
export const renderCompareTray = function () {
  const products = prepareCompareTrayProducts();
  compareTrayView.render({ products, isOpen: state.isCompareTrayOpen });
};

export const controlCloseCompareTray = function ({ target }) {
  compareTrayActions.closeCompareTray();
  renderCompareTray();
};
