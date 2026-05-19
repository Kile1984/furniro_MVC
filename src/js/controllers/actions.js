import { storeActions } from "../state/storeActions.js";
import { controlAddToCart } from "./cartControler.js";
import { controlIncrement } from "./cartControler.js";

export const actions = {
  "add-to-cart": controlAddToCart,
  "qt-increment": controlIncrement,
};
