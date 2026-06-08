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

  updateInputQuantity(id, value) {
    const product = productsActions.getProductById(id);
    const stock = product.properties.stock;
    let newValue = value;

    if (Number.isNaN(newValue)) newValue = 1;
    if (newValue < 1) newValue = 1;
    if (newValue > stock) newValue = stock;

    return { newValue, stock };
  },
};
