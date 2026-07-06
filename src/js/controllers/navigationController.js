import { state } from "../state/state.js";
import { updateActiveLink } from "../views/shared/navigationView.js";

export const controlUpdateActiveLinks = function () {
  updateActiveLink(state.currentRoute);
};
