import { state } from "../state/state.js";
import { getProducts } from "../services/productsServices.js";
import { createProductView } from "../views/home/productsView.js";
import { productsActions } from "../state/actions/productsActions.js";

const productView = createProductView();

export const loadProducts = async function () {
  const products = await getProducts();

  productsActions.setProducts(products);
};
