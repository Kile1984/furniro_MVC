import { routerActions } from "../state/actions/routerActions.js";
import { navigationManager } from "../navigation/navigationManager.js";

export const initRouter = function () {
  window.addEventListener("hashchange", renderCurrentRoute);

  renderCurrentRoute();
};

function renderCurrentRoute() {
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
    "/compare": "compare",
  };

  const view = routesMap[route] || "home";

  navigationManager.navigate(view);
}
