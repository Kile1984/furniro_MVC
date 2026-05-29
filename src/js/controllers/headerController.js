import { state } from "../state/state.js";
import {
  updateHeaderCartCount,
  updateHeaderWishlistCount,
} from "../views/headerView.js";

export const syncHeaderCounts = function () {
  const cartCount = state.cart.reduce((acc, item) => acc + item.quantity, 0);
  const wishlistCount = state.wishlist.length;

  updateHeaderCartCount(cartCount);
  updateHeaderWishlistCount(wishlistCount);
};
