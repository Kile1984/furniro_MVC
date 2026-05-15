import { initRouter } from "./core/router.js";
import { initEventManager } from "./core/eventManager.js";

const init = function () {
  initRouter();
  initEventManager();
};

init();
