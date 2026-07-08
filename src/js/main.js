import { initRouter } from "./core/router.js";
import { initEventManager } from "./events/eventManager.js";
import { loadProducts } from "./controllers/homeController.js";
import { syncHeaderCounts } from "./controllers/headerController.js";
import { renderCompareTray } from "./controllers/compareTrayController.js";
import { hideLoader } from "./views/loaderView.js";

const init = async function () {
  await loadProducts();
  hideLoader();
  initRouter();
  initEventManager();
  syncHeaderCounts();
  renderCompareTray();
};

init();
