import { state } from "../state.js";

export const routerActions = {
  setRoute(route) {
    state.currentRoute = route;
  },
};
