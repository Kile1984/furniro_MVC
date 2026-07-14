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
  return state.compare.map((product) => {
    return {
      ...product,
      finalPrice: formatPrice(getPrice(product.price).finalPrice),
      reviews: product.reviews,
    };
  });
};
