import { state } from "../state/state.js";
import { views } from "../views/views.js";
import { controlCartPage } from "../controllers/cartController.js";

const appEl = document.querySelector("#app");

export const renderApp = function () {
  const currentView = views[state.currentRoute];

  let data = null;

  if (state.currentRoute === "cart") {
    data = controlCartPage();
  }

  const markup = currentView.generateMarkup(data);
  console.log(state.currentRoute);
  console.log(data);
  appEl.innerHTML = markup;
};
