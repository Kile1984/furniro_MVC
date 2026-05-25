// import { storeActions } from "../state/storeActions.js";
import * as homeController from "./homeController.js";
import * as cartController from "./cartController.js";

export const homeEventActions = {
  "add-to-cart": homeController.controlAddToCart,
  "qt-increment": homeController.controlIncrement,
  "qt-decrement": homeController.controlDecrement,
};

export const cartEventActions = {
  "remove-from-cart": cartController.controlRemoveFromCart,
  "qt-increment": cartController.controlIncrement,
  "qt-decrement": cartController.controlDecrement,
};
