import { state } from "../state/state.js";
import { getProducts } from "../services/productsServices.js";
import { createProductView } from "../views/home/productsView.js";
import { actions } from "../state/actions.js";

const productView = createProductView();

export const loadProducts = async function () {
  const products = await getProducts();

  actions.setProducts(products);
};
