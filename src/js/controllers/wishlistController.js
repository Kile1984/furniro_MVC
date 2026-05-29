import { wishlistActions } from "../state/actions/wishlistActions.js";
import { state } from "../state/state.js";
import { getPrice } from "../utils/getPrice.js";
import { productCardsView } from "../views/shared/productCardsView.js";
import { syncHeaderCounts } from "../controllers/headerController.js";

export const preparaWishlistProduct = function () {
  return state.wishlist.map((p) => {
    return {
      id: p.id,
      image: p.image.main,
      title: p.title,
      price: getPrice(p.price).finalPrice,
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
  syncHeaderCounts();
};
