import { state } from "../state/state.js";
import {
  updateHeaderCartCount,
  updateHeaderWishlistCount,
  updateHeaderCompareCount,
  toggleMenu,
  closeMenu,
} from "../views/headerView.js";
import * as headerActions from "../state/actions/headerActions.js";

export const syncHeaderCounts = function () {
  const cartCount = state.cart.reduce((acc, item) => acc + item.quantity, 0);
  const wishlistCount = state.wishlist.length;
  const compareCount = state.compare.length;

  updateHeaderCartCount(cartCount);
  updateHeaderWishlistCount(wishlistCount);
  updateHeaderCompareCount(compareCount);
};

export const controlToggleMenu = function ({ dataset }) {
  const isOpen = headerActions.toggleMenu();
  toggleMenu(state.isMobileMenuOpen);
};

export const controlCloseMenu = function () {
  headerActions.closeMenu();
  closeMenu();
};
