import { state } from "./state";

export const actions = {
  setRoute(route) {
    state.route = route;
  },

  addToCart(product) {
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
