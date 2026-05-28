import { state } from "../state.js";

export const productsActions = {
  setProducts(products) {
    state.products = products;
  },

  getProductById(id) {
    return state.products.find((p) => p.id === id);
  },

  getProductItemById(id) {
    state.products.find((p) => p.id === id);
  },
};
