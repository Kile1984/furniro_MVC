import { state } from "./state.js";

export const storeActions = {
  setRoute(route) {
    state.currentRoute = route;
  },

  setProducts(products) {
    state.products = products;
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

  getCart() {
    return state.cart;
  },

  removeFromCart() {},
  toggleWishlist() {},
};
