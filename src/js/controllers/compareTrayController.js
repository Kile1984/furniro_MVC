import { state } from "../state/state.js";
import * as model from "../model/model.js";
import { getPrice } from "../utils/getPrice.js";
import { formatPrice } from "../utils/format.js";
import { compareTrayView } from "../views/compareTrayView.js";
import { compareTrayActions } from "../state/actions/compareTrayActions.js";
import { comparisonActions } from "../state/actions/comparisonActions.js";
import { singleProductView } from "../views/singleProductView.js";
import { productCardsView } from "../views/shared/productCardsView.js";
import { syncHeaderCounts } from "./headerController.js";

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
  compareTrayView.closeCompareTray();
};

export const controlOpenCompareTray = function () {
  if (state.compare.length === 0) return;

  compareTrayActions.openCompareTray();
  compareTrayView.openCompareTray();
};

export const controlRemoveFromCompare = function ({ dataset }) {
  model.removeFromCompare(dataset.id);

  compareTrayView.removeProduct(dataset.id);
  compareTrayView.updateCounter(state.compare.length);

  singleProductView.updateCompareButton(
    comparisonActions.isInComparison(dataset.id),
  );

  if (state.compare.length === 0) {
    compareTrayActions.closeCompareTray();
    compareTrayView.closeCompareTray();
  }

  productCardsView.updateCompareButton(
    dataset.id,
    comparisonActions.isInComparison(dataset.id),
  );

  console.log(comparisonActions.isInComparison(dataset.id));
  syncHeaderCounts();
};
