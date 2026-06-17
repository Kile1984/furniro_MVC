import { state } from "../state/state.js";
import { getPrice } from "../utils/getPrice.js";
import { formatPrice } from "../utils/format.js";
import { compareTrayView } from "../views/compareTrayView.js";
import { compareTrayActions } from "../state/actions/compareTrayActions.js";
import { comparisonActions } from "../state/actions/comparisonActions.js";

// Shape for compare tray product'S
export const prepareCompareTrayProducts = function () {
  return state.compare.map((product) => ({
    id: product.id,
    title: product.title,
    image: product.images.main,
    price: formatPrice(getPrice(product.price).finalPrice),
  }));
};

export const renderCompareTray = function () {
  const products = prepareCompareTrayProducts();
  compareTrayView.render({ products, isOpen: state.isCompareTrayOpen });
};

export const controlCloseCompareTray = function () {
  compareTrayActions.closeCompareTray();
};
