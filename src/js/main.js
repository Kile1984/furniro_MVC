import { initRouter } from "./core/router.js";
import { initEventManager } from "./core/eventManager.js";
import { loadProducts } from "../js/controllers/productsController.js";

const init = async function () {
  await loadProducts();
  initRouter();
  initEventManager();
};

init();
