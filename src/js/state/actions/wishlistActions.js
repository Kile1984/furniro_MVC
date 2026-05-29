import { state } from "../state.js";
import { persistActions } from "./persistActions.js";

export const wishlistActions = {
  addToWishlist(id) {
    const existing = state.wishlist.some((p) => p.id === id);

    if (existing) return;

    const product = state.products.find((p) => p.id === id);

    state.wishlist.push(product);

    persistActions.save("wishlist", state.wishlist);
  },

  removeFromWishlist(id) {
    const existing = state.wishlist.some((p) => p.id === id);

    if (!existing) return;

    state.wishlist = state.wishlist.filter((p) => p.id !== id);

    persistActions.save("wishlist", state.wishlist);
  },
};
