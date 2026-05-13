import { actions } from "../state/actions.js";

export const controlRoutes = function () {
  const route = window.location.hash.slice(1) || "/";

  actions.setRoute(route);

  console.log(route);
};
