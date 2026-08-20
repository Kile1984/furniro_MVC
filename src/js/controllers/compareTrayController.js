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
import { prepareCompareTrayProduct } from "../utils/prepareCompareTrayProduct.js";
import { emptyTrayMessage } from "../views/headerView.js";

import {
  openCompareTray,
  closeCompareTray,
  updateCompareButtons,
} from "../shared/compareUI.js";

export const controlCloseCompareTray = function () {
  closeCompareTray();
};

export const controlOpenCompareTray = function () {
  if (state.compare.length === 0) {
    emptyTrayMessage();
    return;
  }

  openCompareTray();
};
