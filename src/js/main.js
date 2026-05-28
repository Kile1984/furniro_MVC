import { initRouter } from "./core/router.js";
import { initEventManager } from "./core/eventManager.js";
import { loadProducts } from "./controllers/homeController.js";
import { syncHeaderCartCount } from "./controllers/headerController.js";

const init = async function () {
  await loadProducts();
  initRouter();
  initEventManager();
  syncHeaderCartCount();
};

init();
