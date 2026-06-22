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

import {
  openCompareTray,
  closeCompareTray,
  updateCompareButtons,
} from "../shared/compareUI.js";

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
    openCompareTray();
    compareTrayView.compareTrayFull();

    return;
  }

  model.addToCompare(dataset.id);

  updateCompareButtons(
    dataset.id,
    comparisonActions.isInComparison(dataset.id),
  );

  openCompareTray();

  const compareProduct = compareTrayActions.getCompareTrayProduct(dataset.id);

  if (!compareProduct) return;

  const product = prepareCompareTrayProduct(compareProduct);

  compareTrayView.addProduct(product);
  compareTrayView.updateCounter(state.compare.length);

  syncHeaderCounts();
};

export const controlRemoveFromCompare = function ({ dataset }) {
  model.removeFromCompare(dataset.id);

  updateCompareButtons(
    dataset.id,
    comparisonActions.isInComparison(dataset.id),
  );

  if (state.compare.length === 0) {
    closeCompareTray();
  }

  compareTrayView.removeProduct(dataset.id);
  compareTrayView.updateCounter(state.compare.length);

  syncHeaderCounts();
};
