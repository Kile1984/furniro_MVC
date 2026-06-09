import { state } from "../state.js";
import { productsActions } from "./productsActions.js";
import { persistActions } from "./persistActions.js";

export const singleProductActions = {
  incrementQuantity(id, value) {
    const product = productsActions.getProductById(id);
    const stock = product.properties.stock;
    let newValue = value;

    if (value < stock) {
      newValue = value + 1;
      state.singleProduct.quantity = newValue;

      return { newValue, stock };
    }

    state.singleProduct.quantity = newValue;

    return { newValue, stock };
  },

  decrementQuantity(id, value) {
    const product = productsActions.getProductById(id);
    const stock = product.properties.stock;
    let newValue = value;

    if (value <= 1) {
      newValue = 1;
      state.singleProduct.quantity = newValue;

      return { newValue, stock };
    }

    newValue = value - 1;
    state.singleProduct.quantity = newValue;
    console.log(state.singleProduct.quantity);
    return { newValue: value - 1, stock };
  },

  updateInputQuantity(id, value) {
    const product = productsActions.getProductById(id);
    const stock = product.properties.stock;
    let newValue = value;

    if (Number.isNaN(newValue)) newValue = 1;
    if (newValue < 1) newValue = 1;
    if (newValue > stock) newValue = stock;

    state.singleProduct.quantity = newValue;
    console.log(state.singleProduct.quantity);
    return { newValue, stock };
  },

  resetQuantity(id) {
    const product = productsActions.getProductById(id);
    state.singleProduct.quantity = 1;

    const stock = product.properties.stock;

    return { newValue: 1, stock };
  },
};
