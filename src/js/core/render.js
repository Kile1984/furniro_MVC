import { state } from "../state/state.js";
import { views } from "../views/views.js";
import { preparedCartProducts } from "../controllers/cartController.js";

const appEl = document.querySelector("#app");

const routeControllers = {
  cart: preparedCartProducts,
};

export const renderApp = function () {
  const currentView = views[state.currentRoute];

  const controller = routeControllers[state.currentRoute];
  const data = controller ? controller() : null;

  const markup = currentView.generateMarkup(data);

  appEl.innerHTML = markup;
};
