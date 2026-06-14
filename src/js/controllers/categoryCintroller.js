import { state } from "../state/state";
import { preparedProduct } from "../utils/prepareProduct.js";
import { getPrice } from "../utils/getPrice.js";

export const preparedCategoryProduct = function () {
  const category = window.location.hash.split("/")[2];

  const productsCategory = state.products.filter((p) => {
    return p.categorySlug.toLowerCase() === category.toLowerCase();
  });

  return productsCategory.map((product) => preparedProduct(product));
};
