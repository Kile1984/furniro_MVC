import { getPrice } from "../utils/getPrice.js";

export const sortProducts = function (products, sortBy) {
  const sortedProducts = [...products];

  const sortMap = {
    "price-asc": (a, b) =>
      getPrice(a.price).finalPrice - getPrice(b.price).finalPrice,
    "price-desc": (a, b) =>
      getPrice(b.price).finalPrice - getPrice(a.price).finalPrice,
    "name-asc": (a, b) => a.title.localeCompare(b.title),
    "name-desc": (a, b) => b.title.localeCompare(a.title),
  };
  const sortFn = sortMap[sortBy];

  if (sortFn) {
    sortedProducts.sort(sortFn);
  }
  return sortedProducts;
};
