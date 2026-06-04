import { routerActions } from "../state/actions/routerActions.js";
import { renderApp } from "../core/render.js";
import { state } from "../state/state.js";

export const controlRoutes = function () {
  const hash = window.location.hash.slice(1) || "/";
  const route = hash === "/" ? "/" : "/" + hash.split("/")[1];

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
    "/product": "product",
  };

  const view = routesMap[route] || "home";

  routerActions.setRoute(view);

  renderApp();
};
