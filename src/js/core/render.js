import { state } from "../state/state.js";
import { views } from "../views/views.js";

const appEl = document.querySelector("#app");

export const renderApp = function () {
  const currentView = views[state.currentRoute];
  const markup = currentView.generateMarkup();

  appEl.innerHTML = markup;
};
