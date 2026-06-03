import { state } from "../state/state.js";

export const searchProducts = function (query) {
  return state.products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase()),
  );
};
