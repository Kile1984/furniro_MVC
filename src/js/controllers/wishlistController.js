import { state } from "../state/state.js";
import * as model from "../model/model.js";
import { getPrice } from "../utils/getPrice.js";
import { formatPrice } from "../utils/format.js";
import { productCardsView } from "../views/shared/productCardsView.js";
import { syncHeaderCounts } from "../controllers/headerController.js";
import { wishListView } from "../views/wishlist/wishlistView.js";

export const preparaWishlistProduct = function () {
  return state.wishlist.map((p) => {
    return {
      id: p.id,
      image: p.images.main,
      title: p.title,
      price: formatPrice(getPrice(p.price).finalPrice),
      stock: p.properties.stock,
    };
  });
};

export const controlAddToWishlist = function ({ dataset }) {
  model.addToWishlist(dataset.id);
  productCardsView.updateWishlistButton(dataset.id, true);
  syncHeaderCounts();
};

export const controlRemoveFromWishlist = function ({ dataset }) {
  model.removeFromWishlist(dataset.id);
  productCardsView.updateWishlistButton(dataset.id, false);
  wishListView.removeWishlistItem(dataset.id);
  syncHeaderCounts();
};

export const controlAddToCartFromWishlist = function ({ dataset }) {
  const added = model.addToCartItem(dataset.id);

  if (!added) return;

  model.removeFromWishlist(dataset.id);
  wishListView.removeWishlistItem(dataset.id);
  syncHeaderCounts();
};
