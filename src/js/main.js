import { initRouter } from "./core/router.js";
import { initEventManager } from "./events/eventManager.js";
import { loadProducts } from "./controllers/homeController.js";
import { syncHeaderCounts } from "./controllers/headerController.js";
import { renderCompareTray } from "./shared/compareTrayUI.js";
import { hideLoader } from "./views/pageTransitionView.js";
import { navigationManager } from "./navigation/navigationManager.js";

const init = async function () {
  await loadProducts();
  hideLoader();
  initRouter();
  initEventManager();
  syncHeaderCounts();
  renderCompareTray();
};

init();
