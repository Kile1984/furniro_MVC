import * as model from "../model/model.js";
import { updateProductCartUI } from "../shared/productCardsUI";

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
