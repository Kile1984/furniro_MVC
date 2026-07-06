import { state } from "../state.js";

export const toggleMenu = function () {
  state.isMobileMenuOpen = !state.isMobileMenuOpen;
};

export const closeMenu = function () {
  state.isMobileMenuOpen = false;
};
