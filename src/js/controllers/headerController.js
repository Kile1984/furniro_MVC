import { state } from "../state/state.js";
import { updateHeaderCartCount } from "../views/headerView.js";

export const syncHeaderCartCount = function () {
  const count = state.cart.reduce((acc, item) => acc + item.quantity, 0);
  updateHeaderCartCount(count);
};
