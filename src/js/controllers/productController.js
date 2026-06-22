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
import { prepareCompareTrayProduct } from "../utils/prepareCompareTrayProduct.js";
import { singleProductView } from "../views/singleProductView.js";

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
  if (
    state.compare.length === 3 &&
    !compareTrayActions.getCompareTrayProduct(dataset.id)
  ) {
    compareTrayView.openCompareTray();
    compareTrayView.compareTrayFull();

    return;
  }
  model.addToCompare(dataset.id);
  productCardsView.updateCompareButton(
    dataset.id,
    comparisonActions.isInComparison(dataset.id),
  );

  compareTrayActions.openCompareTray();
  compareTrayView.openCompareTray();

  const compareProduct = compareTrayActions.getCompareTrayProduct(dataset.id);

  if (!compareProduct) return;

  const product = prepareCompareTrayProduct(compareProduct);

  singleProductView.updateCompareButton(
    product.id,
    comparisonActions.isInComparison(product.id),
  );

  compareTrayView.addProduct(product);
  compareTrayView.updateCounter(state.compare.length);

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
    compareTrayView.closeCompareTray();
  }

  compareTrayView.removeProduct(dataset.id);
  compareTrayView.updateCounter(state.compare.length);

  singleProductView.updateCompareButton(
    dataset.id,
    comparisonActions.isInComparison(dataset.id),
  );

  syncHeaderCounts();
};
