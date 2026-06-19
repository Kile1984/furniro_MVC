import { state } from "../state/state";
import { compareTrayActions } from "../state/actions/compareTrayActions";
import { comparisonActions } from "../state/actions/comparisonActions";
import { productCardsView } from "../views/shared/productCardsView.js";
import { compareTrayView } from "../views/compareTrayView.js";
import { syncHeaderCounts } from "./headerController.js";
import { singleProductView } from "../views/singleProductView.js";

export const controlClearCompare = function ({ dataset, target, source }) {
  comparisonActions.clearCompare();
  compareTrayActions.closeCompareTray();
  compareTrayView.render({ products: [], isOpen: false });
  state.products.forEach((product) => {
    productCardsView.updateCompareButton(product.id, false);
    singleProductView.updateCompareButton(product.id, false);
  });
  compareTrayView.updateCounter(0);
  syncHeaderCounts();
};
