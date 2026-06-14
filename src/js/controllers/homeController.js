import { state } from "../state/state.js";
import { getProducts } from "../services/productsServices.js";
import { cartActions } from "../state/actions/cartActions.js";
import { productsActions } from "../state/actions/productsActions.js";
import { getPrice } from "../utils/getPrice.js";
import { preparedProduct } from "../utils/prepareProduct.js";

export const loadProducts = async function () {
  const products = await getProducts();
  productsActions.setProducts(products);
};

export const preparedProducts = function () {
  return state.products.map((product) => preparedProduct(product));
};
