import { controlRoutes } from "../controllers/routerController.js";

export const initRouter = function () {
  window.addEventListener("hashchange", controlRoutes);

  controlRoutes();
};
