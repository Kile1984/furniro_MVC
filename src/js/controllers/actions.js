import { storeActions } from "../state/storeActions.js";
import {
  controlAddToCart,
  controlDecrement,
  controlRemoveFromCart,
} from "./cartControler.js";
import { controlIncrement } from "./cartControler.js";

export const actions = {
  "add-to-cart": controlAddToCart,
  "remove-from-cart": controlRemoveFromCart,
  "qt-increment": controlIncrement,
  "qt-decrement": controlDecrement,
};
