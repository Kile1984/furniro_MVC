import { state } from "../state.js";
import { productsActions } from "./productsActions.js";

export const singleProductActions = {
  incrementQuantity(id, value) {
    const product = productsActions.getProductById(id);
    const stock = product.properties.stock;
    const newValue = value;

    if (value < stock) return { newValue: value + 1, stock };

    return { newValue, stock };
  },

  decrementQuantity(id, value) {
    const product = productsActions.getProductById(id);
    const stock = product.properties.stock;
    const newValue = value;

    if (value <= 1) return { newValue: 1, stock };

    return { newValue: value - 1, stock };
  },
};
