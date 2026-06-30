import * as cartController from "../controllers/cartController.js";
import * as wishlistController from "../controllers/wishlistController.js";
import * as productController from "../controllers/productController.js";
import * as singleProductController from "../controllers/singleProductController.js";
import * as comparisonController from "../controllers/comparisonController.js";
import * as compareTrayController from "../controllers/compareTrayController.js";
import * as searchController from "../controllers/searchController.js";
import * as shopController from "../controllers/shopController.js";
import * as filterDrawerController from "../controllers/filterDrawerController.js";

export const productEventActions = {
  "add-to-cart": productController.controlAddToCart,
  "qt-increment": productController.controlIncrement,
  "qt-decrement": productController.controlDecrement,
  "add-to-wishlist": wishlistController.controlAddToWishlist,
  "remove-from-wishlist": wishlistController.controlRemoveFromWishlist,
  "add-to-compare": productController.controlAddToCompare,
  "remove-from-compare": productController.controlRemoveFromCompare,
};

export const cartEventActions = {
  "remove-from-cart": cartController.controlRemoveFromCart,
  "qt-increment": cartController.controlIncrement,
  "qt-decrement": cartController.controlDecrement,
};

export const wishlistEventActions = {
  "add-to-cart": wishlistController.controlAddToCartFromWishlist,
  "remove-from-wishlist": wishlistController.controlRemoveFromWishlist,
};

export const singleProductEventActions = {
  "qt-increment-single": singleProductController.controlIncrement,
  "qt-decrement-single": singleProductController.controlDecrement,
  "add-to-cart-single": singleProductController.controlAddToCart,
  "add-to-compare-single": singleProductController.controlAddToCompare,
  "remove-from-compare-single":
    singleProductController.controlRemoveFromCompare,
  "add-to-compare": productController.controlAddToCompare,
  "remove-from-compare": productController.controlRemoveFromCompare,
  "add-to-wishlist": wishlistController.controlAddToWishlist,
  "remove-from-wishlist": wishlistController.controlRemoveFromWishlist,
  "add-to-cart": productController.controlAddToCart,
  "qt-increment": productController.controlIncrement,
  "qt-decrement": productController.controlDecrement,
  "select-image": singleProductController.controlSelectImage,
  "change-tab": singleProductController.controlActivateTab,
};

export const cartInputActions = {
  quantity: cartController.controlUpdateInputField,
};

export const singleProductInputActions = {
  quantity: singleProductController.controlUpdateInputField,
};

export const compareTrayActions = {
  "close-compare-tray": compareTrayController.controlCloseCompareTray,
  "remove-all-from-compare-tray": comparisonController.controlClearCompare,
  "remove-from-compare": compareTrayController.controlRemoveFromCompare,
};

export const headerEventActions = {
  "open-compare-tray": compareTrayController.controlOpenCompareTray,
  "toggle-search": searchController.controlToggleSearch,
};

export const searchInputActions = {
  search: searchController.controlSearchInput,
};

export const filterEventActions = {
  "open-filter": shopController.controlToggleFilterDrawer,
  "close-filter": shopController.controlToggleFilterDrawer,
  "apply-filters": filterDrawerController.controlApplayFilters,
};

export const filterInputActions = {
  filter: filterDrawerController.controlFilter,
};

export const shopEventActions = {
  ...productEventActions,
  ...filterEventActions,
  "grid-2": shopController.controlChangeGrid,
  "grid-4": shopController.controlChangeGrid,
};
