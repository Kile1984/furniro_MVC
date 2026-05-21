import { storeActions } from "../state/storeActions.js";
import { renderApp } from "../core/render.js";

export const controlRoutes = function () {
  const hash = window.location.hash.slice(1) || "/";

  const routesMap = {
    "/": "home",
    "/shop": "shop",
    "/about": "about",
    "/contact": "contact",
    "/payment": "payment",
    "/returns": "returns",
    "/policy": "policy",
    "/cart": "cart",
  };

  const view = routesMap[hash] || "home";

  storeActions.setRoute(view);

  renderApp();
};
