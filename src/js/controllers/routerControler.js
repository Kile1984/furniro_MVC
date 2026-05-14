import { actions } from "../state/actions.js";
import { renderApp } from "../core/render.js";

export const controlRoutes = function () {
  const hash = window.location.hash.slice(1) || "/";

  const routesMap = {
    "/": "home",
    "/shop": "shop",
    "/about": "about",
    "/contact": "contact",
  };

  const view = routesMap[hash] || "home";

  actions.setRoute(view);

  renderApp();
};
