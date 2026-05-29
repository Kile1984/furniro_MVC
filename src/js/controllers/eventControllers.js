import * as homeController from "./homeController.js";
import * as cartController from "./cartController.js";
import * as wishlistController from "./wishlistController.js";

export const homeEventActions = {
  "add-to-cart": homeController.controlAddToCart,
  "qt-increment": homeController.controlIncrement,
  "qt-decrement": homeController.controlDecrement,
  "add-to-wishlist": wishlistController.controlAddToWishlist,
  "remove-from-wishlist": wishlistController.controlRemoveFromWishlist,
};

export const cartEventActions = {
  "remove-from-cart": cartController.controlRemoveFromCart,
  "qt-increment": cartController.controlIncrement,
  "qt-decrement": cartController.controlDecrement,
};
