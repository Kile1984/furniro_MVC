import { initRouter } from "./core/router.js";
import { initEventManager } from "./events/eventManager.js";
import { loadProducts } from "./controllers/homeController.js";
import { syncHeaderCounts } from "./controllers/headerController.js";
import { renderCompareTray } from "./controllers/compareTrayController.js";
import * as loaderView from "./views/loaderView.js";

const init = async function () {
  loaderView.show();
  const start = performance.now();

  await loadProducts();
  initRouter();
  initEventManager();
  syncHeaderCounts();
  renderCompareTray();

  const elapsed = performance.now() - start;

  const MIN_LOADING_TIME = 1000;

  if (elapsed < MIN_LOADING_TIME) {
    await new Promise((resolve) =>
      setTimeout(resolve, MIN_LOADING_TIME - elapsed),
    );
  }

  loaderView.hide();
};

init();
