import { controlRoutes } from "../controllers/routerControler.js";

export const initRouter = function () {
  window.addEventListener("hashchange", controlRoutes);

  controlRoutes();
};
