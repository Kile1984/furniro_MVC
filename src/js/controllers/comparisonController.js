import { state } from "../state/state";
import { compareTrayActions } from "../state/actions/compareTrayActions";
import { comparisonActions } from "../state/actions/comparisonActions";
import { productCardsView } from "../views/shared/productCardsView.js";
import { compareTrayView } from "../views/compareTrayView.js";
import { syncHeaderCounts } from "./headerController.js";
import { singleProductView } from "../views/singleProductView.js";
import {
  openCompareTray,
  closeCompareTray,
  updateCompareButtons,
} from "../shared/compareUI.js";
import { getPrice } from "../utils/getPrice.js";
import { formatPrice } from "../utils/format.js";
import { getAverageRating } from "../utils/getAverageRating.js";
import * as model from "../model/model.js";
import { comparisonView } from "../views/comparison/comparisonView.js";
import { renderApp } from "../core/render.js";

export const controlClearCompare = function ({ dataset, target, source }) {
  comparisonActions.clearCompare();
  compareTrayActions.closeCompareTray();
  compareTrayView.render({ products: [], isOpen: false });
  state.products.forEach((product) => {
    updateCompareButtons(product.id, false);
    updateCompareButtons(product.id, false);
  });

  compareTrayView.updateCounter(0);
  syncHeaderCounts();
};

export const prepareCompareProducts = function () {
  const compareProducts = state.compare.map((product) => {
    return {
      ...product,
      finalPrice: formatPrice(getPrice(product.price).finalPrice),
      reviews: product.reviews,
      rating: getAverageRating(product.reviews),
    };
  });

  const compareIDs = new Set(state.compare.map((product) => product.id));

  const allProducts = state.products
    .filter((product) => !compareIDs.has(product.id))
    .map((product) => {
      return {
        id: product.id,
        image: product.images.main,
        title: product.title,
        finalPrice: formatPrice(getPrice(product.price).finalPrice),
      };
    });

  return {
    compareProducts,
    allProducts,
  };
};

export const controlRemoveFromCompare = function ({ dataset }) {
  model.removeFromCompare(dataset.id);

  compareTrayView.removeProduct(dataset.id);
  compareTrayView.updateCounter(state.compare.length);

  updateCompareButtons?.(
    dataset.id,
    comparisonActions.isInComparison(dataset.id),
  );

  if (state.compare.length === 0) {
    closeCompareTray();
  }

  updateCompareButtons(
    dataset.id,
    comparisonActions.isInComparison(dataset.id),
  );

  renderApp();

  syncHeaderCounts();
};
