import * as model from "../model/model.js";
import { state } from "../state/state.js";
import { productsActions } from "../state/actions/productsActions";
import { comparisonActions } from "../state/actions/comparisonActions.js";
import { cartActions } from "../state/actions/cartActions.js";
import { getPrice } from "../utils/getPrice.js";
import { formatPrice } from "../utils/format.js";
import { singleProductActions } from "../state/actions/singleProductActions.js";
import { singleProductView } from "../views/singleProductView.js";
import { syncHeaderCounts } from "./headerController.js";
import { compareTrayView } from "../views/compareTrayView.js";
import { compareTrayActions } from "../state/actions/compareTrayActions.js";
import { prepareCompareTrayProduct } from "../utils/prepareCompareTrayProduct.js";

export const prepareSinglProduct = function () {
  const [, , id] = window.location.hash.split("/");

  const product = productsActions.getProductById(id);

  const getAverageRating = function (reviews) {
    const sum = reviews.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0);

    if (reviews.length === 0) return 0;

    return sum / reviews.length;
  };

  const getCartProductQuantity = function () {
    const cartProduct = cartActions.getCartItemById(id);

    if (!cartProduct) return 1;

    return cartProduct.quantity;
  };

  return {
    ...product,
    finalPrice: formatPrice(getPrice(product.price).finalPrice),
    reviewsCount: product.reviews.length,
    averageRating: getAverageRating(product.reviews),
    quantity: getCartProductQuantity(),
    isInCompare: comparisonActions.isInComparison(product.id),
  };
};

const controlUpdateQuantity = function (target, id, action) {
  const input = singleProductView.getQuantityInputById(id);

  const value = Number(input.value);

  const quantityData = action(id, value);

  singleProductView.updateQuantity(input, quantityData);
  singleProductView.updateProductQuantityButtons(quantityData, input);
};

export const controlIncrement = function ({ target, dataset }) {
  controlUpdateQuantity(
    target,
    dataset.id,
    singleProductActions.incrementQuantity,
  );
};

export const controlDecrement = function ({ target, dataset }) {
  controlUpdateQuantity(
    target,
    dataset.id,
    singleProductActions.decrementQuantity,
  );
};

export const controlUpdateInputField = function ({ id, value, target }) {
  controlUpdateQuantity(target, id, singleProductActions.updateInputQuantity);
};

export const controlAddToCart = function ({ target, dataset, source }) {
  model.addToCartItem(dataset.id, state.singleProduct.quantity);

  const quantityData = singleProductActions.resetQuantity(dataset.id);

  const input = singleProductView.getQuantityInputById(dataset.id);

  singleProductView.updateQuantity(input, quantityData);
  singleProductView.updateProductQuantityButtons(quantityData, input);

  singleProductView.showAddedToCart();

  syncHeaderCounts();
};

export const controlAddToCompare = function ({ target, dataset }) {
  // ADD
  model.addToCompare(dataset.id);
  // IS ADD
  const isInCompare = comparisonActions.isInComparison(dataset.id);
  if (
    state.compare.length === 3 &&
    !compareTrayActions.getCompareTrayProduct(dataset.id)
  ) {
    compareTrayView.openCompareTray();
    compareTrayView.compareTrayFull();
  }
  // UPDATE BUTTON
  singleProductView.updateCompareButton(dataset.id, isInCompare);

  // PREPARE AND UPDATE TRAY
  const compareProduct = compareTrayActions.getCompareTrayProduct(dataset.id);
  if (!compareProduct) return;

  const prepareedProduct = prepareCompareTrayProduct(compareProduct);

  compareTrayView.addProduct(prepareedProduct);
  // OPEN TRAY
  compareTrayActions.openCompareTray();
  compareTrayView.openCompareTray();
  // UPDATE COUNTS
  compareTrayView.updateCounter(state.compare.length);
  syncHeaderCounts();
};

export const controlRemoveFromCompare = function ({ target, dataset }) {
  // REMOVE
  model.removeFromCompare(dataset.id);
  // IS REMOVED
  const isInCompare = comparisonActions.isInComparison(dataset.id);
  // UPDATE BUTTON
  singleProductView.updateCompareButton(dataset.id, isInCompare);
  // IS EMPTY
  if (state.compare.length === 0) {
    compareTrayActions.closeCompareTray();
    compareTrayView.closeCompareTray();
  }
  // UPDATE TRAY
  compareTrayView.removeProduct(dataset.id);
  // UPDATE COUNTS
  syncHeaderCounts();
};
