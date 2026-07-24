import { state } from "../state/state.js";
import { getProducts } from "../services/productsServices.js";
import { cartActions } from "../state/actions/cartActions.js";
import { productsActions } from "../state/actions/productsActions.js";
import { getPrice } from "../utils/getPrice.js";
import { preparedProduct } from "../utils/prepareProduct.js";
import { getMaxPrice } from "../utils/getPrice.js";

export const loadProducts = async function () {
  const products = await getProducts();
  productsActions.setProducts(products);
  state.maxFilterPrice = getMaxPrice(products);
};

export const preparedHomeProducts = function () {
  return state.products
    .filter((product) => product.featured)
    .map((product) => preparedProduct(product));
};
