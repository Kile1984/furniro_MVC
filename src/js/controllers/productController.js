import * as model from "../model/model.js";
import { updateProductCartUI } from "../shared/productCardsUI";
import { comparisonActions } from "../state/actions/comparisonActions.js";
import { formatPrice } from "../utils/format.js";
import { getPrice } from "../utils/getPrice.js";
import { productCardsView } from "../views/shared/productCardsView.js";
import { syncHeaderCounts } from "./headerController.js";
import { compareTrayActions } from "../state/actions/compareTrayActions.js";
import { state } from "../state/state.js";
import { compareTrayView } from "../views/compareTrayView.js";

// Shape compare tray product
export const prepareCompareTrayProduct = function (product) {
  return {
    id: product.id,
    title: product.title,
    image: product.images.main,
    price: formatPrice(getPrice(product.price).finalPrice),
  };
};

export const controlAddToCart = function ({ dataset }) {
  model.addToCartItem(dataset.id);

  updateProductCartUI(dataset.id);
};

export const controlIncrement = function ({ dataset }) {
  model.incrementCartItem(dataset.id);

  updateProductCartUI(dataset.id);
};

export const controlDecrement = function ({ dataset }) {
  model.decrementCartItem(dataset.id);

  updateProductCartUI(dataset.id);
};

export const controlAddToCompare = function ({ dataset }) {
  model.addToCompare(dataset.id);
  productCardsView.updateCompareButton(
    dataset.id,
    comparisonActions.isInComparison(dataset.id),
  );

  compareTrayActions.openCompareTray();

  const compareProduct = compareTrayActions.getCompareTrayProduct(dataset.id);

  if (!compareProduct) return;

  const product = prepareCompareTrayProduct(compareProduct);

  compareTrayView.addProduct(product);

  syncHeaderCounts();
};

export const controlRemoveFromCompare = function ({ dataset }) {
  model.removeFromCompare(dataset.id);
  productCardsView.updateCompareButton(
    dataset.id,
    comparisonActions.isInComparison(dataset.id),
  );

  if (state.compare.length === 0) {
    compareTrayActions.closeCompareTray();
  }

  compareTrayView.removeProduct(dataset.id);

  syncHeaderCounts();
};
