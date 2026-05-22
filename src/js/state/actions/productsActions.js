import { state } from "../state.js";

export const productsActions = {
  setProducts(products) {
    state.products = products;
  },

  getProductItemById(id) {
    state.products.find((p) => p.id === id);
  },
};
