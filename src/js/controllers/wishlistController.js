import { wishlistActions } from "../state/actions/wishlistActions.js";
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
    };
  });
};

export const controlAddToWishlist = function ({ dataset }) {
  wishlistActions.addToWishlist(dataset.id);
  productCardsView.updateWishlistButton(dataset.id, true);
  syncHeaderCounts();
};

export const controlRemoveFromWishlist = function ({ dataset }) {
  wishlistActions.removeFromWishlist(dataset.id);
  productCardsView.updateWishlistButton(dataset.id, false);
  wishListView.removeWishlistItem(dataset.id);
  syncHeaderCounts();
};

export const controlAddToCartFromWishlist = function ({ dataset }) {
  console.log(dataset);
  model.addToCartItem(dataset.id);
  wishlistActions.removeFromWishlist(dataset.id);
  wishListView.removeWishlistItem(dataset.id);
  syncHeaderCounts();
};
