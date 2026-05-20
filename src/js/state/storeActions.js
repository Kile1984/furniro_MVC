import { state } from "./state.js";

export const storeActions = {
  setRoute(route) {
    state.currentRoute = route;
  },

  setProducts(products) {
    state.products = products;
  },

  getCart() {
    return state.cart;
  },

  getProductItemById(id) {
    state.products.find((p) => p.id === id);
  },

  getCartItemById(id) {
    return state.cart.find((p) => p.id === id);
  },

  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  addToCart(product) {
    if (!product) return;

    const existingProduct = state.cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      state.cart.push({ ...product, quantity: 1 });
    }

    this.save("cart", state.cart);
  },

  removeFromCart(id) {
    state.cart = state.cart.filter((p) => p.id !== id);

    this.save("cart", state.cart);
  },

  incrementQuantity(id) {
    const product = state.cart.find((p) => p.id === id);

    product.quantity++;

    this.save("cart", state.cart);
  },

  decrementQuantity(id) {
    const product = state.cart.find((p) => p.id === id);

    if (product.quantity !== 0) {
      product.quantity--;
    }

    if (product.quantity === 0) {
      this.removeFromCart(id);
    }

    this.save("cart", state.cart);
  },

  toggleWishlist() {},
};
