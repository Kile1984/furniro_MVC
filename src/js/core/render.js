import { state } from "../state/state.js";
import { views } from "../views/views.js";
import { preparedCartProducts } from "../controllers/cartController.js";
import { preparedHomeProducts } from "../controllers/homeController.js";
import { preparaWishlistProduct } from "../controllers/wishlistController.js";
import { prepareSinglProduct } from "../controllers/singleProductController.js";

const appEl = document.querySelector("#app");

const routeControllers = {
  home: preparedHomeProducts,
  cart: preparedCartProducts,
  wishlist: preparaWishlistProduct,
  shop: preparedHomeProducts,
  product: prepareSinglProduct,
};

export const renderApp = function () {
  const currentView = views[state.currentRoute];

  const controller = routeControllers[state.currentRoute];

  const data = controller ? controller() : null;

  const markup = currentView.generateMarkup(data);

  appEl.innerHTML = markup;
};
