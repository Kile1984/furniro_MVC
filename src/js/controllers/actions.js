import { storeActions } from "../state/storeActions.js";
import { controlAddToCart } from "./cartControler.js";

export const actions = {
  "add-to-cart": controlAddToCart,
};
