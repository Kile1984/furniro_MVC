import { serachActions } from "../state/actions/searchActions.js";
import { state } from "../state/state.js";
import { searchProducts } from "../services/searchService.js";
import { searchView } from "../views/searchView.js";
import { formatPrice } from "../utils/format.js";
import { getPrice } from "../utils/getPrice.js";

export const prepareSearchProduct = function (product) {
  const price = getPrice(product.price).finalPrice;

  return {
    id: product.id,
    title: product.title,
    image: product.images.main,
    price: formatPrice(price),
  };
};

export const constrolSearchInput = function ({ value }) {
  serachActions.setQuery(value);

  const result = searchProducts(value);

  serachActions.setResults(result);
  const products = result.map((res) => prepareSearchProduct(res));

  searchView.render(products);
};
