import * as cartController from "../controllers/cartController.js";
import * as wishlistController from "../controllers/wishlistController.js";
import * as productController from "../controllers/productController.js";
import * as singleProductController from "../controllers/singleProductController.js";
import * as comparisonController from "../controllers/comparisonController.js";
import * as compareTrayController from "../controllers/compareTrayController.js";

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
  "qt-increment": singleProductController.controlIncrement,
  "qt-decrement": singleProductController.controlDecrement,
  "add-to-cart": singleProductController.controlAddToCart,
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
};
