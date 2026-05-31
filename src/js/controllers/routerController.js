import { routerActions } from "../state/actions/routerActions.js";
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
    "/wishlist": "wishlist",
  };

  const view = routesMap[hash] || "home";

  routerActions.setRoute(view);

  renderApp();
};
