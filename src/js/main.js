import { initRouter } from "./core/router.js";
import { initEventManager } from "./events/eventManager.js";
import { loadProducts } from "./controllers/homeController.js";
import { syncHeaderCounts } from "./controllers/headerController.js";
import { renderCompareTray } from "./controllers/compareTrayController.js";

const init = async function () {
  await loadProducts();
  initRouter();
  initEventManager();
  syncHeaderCounts();
  renderCompareTray();
};

init();
