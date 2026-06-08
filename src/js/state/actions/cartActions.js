import { state } from "../state.js";
import { persistActions } from "./persistActions.js";

export const cartActions = {
  getCart() {
    return state.cart;
  },

  getCartItemById(id) {
    return state.cart.find((p) => p.id === id);
  },

  addToCart(product) {
    if (!product) return;

    const existingProduct = state.cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      state.cart.push({ ...product, quantity: 1 });
    }

    persistActions.save("cart", state.cart);
  },

  removeFromCart(id) {
    state.cart = state.cart.filter((p) => p.id !== id);

    persistActions.save("cart", state.cart);
  },

  incrementQuantity(id) {
    const product = state.cart.find((p) => p.id === id);

    if (!product) return;

    if (product.quantity >= product.properties.stock) return;

    product.quantity++;

    persistActions.save("cart", state.cart);
  },

  decrementQuantity(id) {
    const product = state.cart.find((p) => p.id === id);

    if (!product) return;

    if (product.quantity !== 0) {
      product.quantity--;
    }

    if (product.quantity === 0) {
      this.removeFromCart(id);
    }

    persistActions.save("cart", state.cart);
  },

  getQuantity(id) {
    const product = state.cart.find((p) => p.id === id);
    if (!product) return;

    return product.quantity;
  },

  changeQuantity(id, quantity) {
    const product = state.cart.find((p) => p.id === id);

    if (!product) return;

    product.quantity = quantity;

    persistActions.save("cart", state.cart);
  },

  updateInputQuantity(id, value) {
    const product = this.getCartItemById(id);
    const stock = product.properties.stock;
    let newValue = value;
  },
};
