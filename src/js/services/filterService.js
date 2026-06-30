import { getPrice } from "../utils/getPrice.js";
import { state } from "../state/state.js";

export const filterProducts = function (products, filters) {
  let filteredProducts = [...products];
  const categories = new Set(filters.category);

  if (filters.category.length) {
    filteredProducts = filteredProducts.filter((p) => {
      return categories.has(p.category);
    });
  }

  if (filters.minPrice !== null && filters.maxPrice !== null) {
    filteredProducts = filteredProducts.filter((p) => {
      const productPrice = getPrice(p.price).finalPrice;

      return (
        productPrice >= filters.minPrice && productPrice <= filters.maxPrice
      );
    });
  }

  return filteredProducts;
};
