// import { storeActions } from "../state/storeActions.js";
import {
  controlIncrement,
  controlAddToCart,
  controlDecrement,
  controlRemoveFromCart,
} from "./homeController.js";

export const eventActions = {
  "add-to-cart": controlAddToCart,
  "remove-from-cart": controlRemoveFromCart,
  "qt-increment": controlIncrement,
  "qt-decrement": controlDecrement,
};
