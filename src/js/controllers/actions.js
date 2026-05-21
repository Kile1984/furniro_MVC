import { storeActions } from "../state/storeActions.js";
import {
  controlAddToCart,
  controlDecrement,
  controlRemoveFromCart,
} from "./cartController.js";
import { controlIncrement } from "./cartController.js";

export const actions = {
  "add-to-cart": controlAddToCart,
  "remove-from-cart": controlRemoveFromCart,
  "qt-increment": controlIncrement,
  "qt-decrement": controlDecrement,
};
