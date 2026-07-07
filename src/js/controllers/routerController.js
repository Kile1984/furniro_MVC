import { routerActions } from "../state/actions/routerActions.js";
import { renderApp } from "../core/render.js";
import { state } from "../state/state.js";
import * as loaderView from "../views/loaderView.js";

const MIN_LOADING_TIME = 600;

export const controlRoutes = async function () {
  loaderView.show();
  const start = performance.now();

  document.documentElement.style.scrollBehavior = "auto";
  document.documentElement.scrollTop = 0;
  document.documentElement.style.scrollBehavior = "";

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
    "/category": "category",
  };

  const view = routesMap[route] || "home";

  routerActions.setRoute(view);

  renderApp();

  const elapsed = performance.now() - start;

  if (elapsed < MIN_LOADING_TIME) {
    await new Promise((resolve) =>
      setTimeout(resolve, MIN_LOADING_TIME - elapsed),
    );
  }

  loaderView.hide();
};
