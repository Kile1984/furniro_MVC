import { state } from "./state.js";

export const actions = {
  setRoute(route) {
    state.currentRoute = route;
  },

  addToCart(product) {
    if (!product) return;

    const existingProduct = state.cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      state.cart.push({ ...product, quantity: 1 });
    }
  },

  removeFromCart() {},
  toggleWishlist() {},
};
