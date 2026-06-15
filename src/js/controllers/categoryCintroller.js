import { state } from "../state/state";
import { preparedProduct } from "../utils/prepareProduct.js";
import { getPrice } from "../utils/getPrice.js";

export const preparedCategoryProduct = function () {
  const category = window.location.hash.split("/")[2];

  const products = state.products
    .filter((p) => p.categorySlug.toLowerCase() === category.toLowerCase())
    .map((product) => preparedProduct(product));

  return {
    category,
    products,
  };
};
