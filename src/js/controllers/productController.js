import * as model from "../model/model.js";
import { updateProductCartUI } from "../shared/productCardsUI";
import { comparisonActions } from "../state/actions/comparisonActions.js";
import { productCardsView } from "../views/shared/productCardsView.js";
import { renderCompareTray } from "./compareTrayController.js";
import { controlRemoveFromCompareTray } from "./compareTrayController.js";
import { syncHeaderCounts } from "./headerController.js";
import { compareTrayActions } from "../state/actions/compareTrayActions.js";
import { state } from "../state/state.js";

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
  renderCompareTray();
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

  renderCompareTray();
  syncHeaderCounts();
};
