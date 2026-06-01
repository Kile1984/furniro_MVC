import { state } from "../state/state.js";
import { views } from "../views/views.js";
import { preparedCartProducts } from "../controllers/cartController.js";
import { preparedHomeProducts } from "../controllers/homeController.js";
import { preparaWishlistProduct } from "../controllers/wishlistController.js";

const appEl = document.querySelector("#app");

const routeControllers = {
  home: preparedHomeProducts,
  cart: preparedCartProducts,
  wishlist: preparaWishlistProduct,
  shop: preparedHomeProducts,
};

export const renderApp = function () {
  const currentView = views[state.currentRoute];

  const controller = routeControllers[state.currentRoute];
  const data = controller ? controller() : null;

  const markup = currentView.generateMarkup(data);

  appEl.innerHTML = markup;
};
