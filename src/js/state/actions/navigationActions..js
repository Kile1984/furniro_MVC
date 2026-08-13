import { state } from "../state.js";

export const navigationActions = {
  saveReturnScroll() {
    state.navigation.returnScrollY = window.scrollY;
  },

  saveReturnRoute() {
    state.navigation.returnRoute = state.currentRoute;
  },

  clearReturnNavigation() {
    state.navigation.returnRoute = null;
    state.navigation.returnScrollY = 0;
  },
};
