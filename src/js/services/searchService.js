import { state } from "../state/state.js";

export const searchProducts = function (query) {
  const normalizeQuery = query.trim().toLowerCase();

  if (!normalizeQuery) return [];

  return state.products.filter((product) =>
    product.title.toLowerCase().includes(normalizeQuery),
  );
};
