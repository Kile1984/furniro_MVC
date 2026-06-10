import * as cartController from "./cartController.js";
import * as wishlistController from "./wishlistController.js";
import * as productController from "./productController.js";
import * as singleProductController from "./singleProductController.js";

export const productEventActions = {
  "add-to-cart": productController.controlAddToCart,
  "qt-increment": productController.controlIncrement,
  "qt-decrement": productController.controlDecrement,
  "add-to-wishlist": wishlistController.controlAddToWishlist,
  "remove-from-wishlist": wishlistController.controlRemoveFromWishlist,
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
  "add-to-compare": singleProductController.controlAddToCompare,
};

export const cartInputActions = {
  quantity: cartController.controlUpdateInputField,
};

export const singleProductInputActions = {
  quantity: singleProductController.controlUpdateInputField,
};
