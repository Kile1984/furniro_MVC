import { compareTrayActions } from "../state/actions/compareTrayActions.js";
import { compareTrayView } from "../views/compareTrayView.js";
import { singleProductView } from "../views/singleProductView.js";
import { productCardsView } from "../views/shared/productCardsView.js";

export const closeCompareTray = function () {
  compareTrayActions.closeCompareTray();
  compareTrayView.closeCompareTray();
};

export const openCompareTray = function () {
  compareTrayActions.openCompareTray();
  compareTrayView.openCompareTray();
};

export const updateCompareButtons = function (id, isInCompare) {
  singleProductView.updateCompareButton(id, isInCompare);
  productCardsView.updateCompareButton(id, isInCompare);
};
