import { state } from "../state/state.js";
import { views } from "../views/views.js";
import { preparedCartProducts } from "../controllers/cartController.js";
import { preparedProducts } from "../controllers/homeController.js";
import { preparaWishlistProduct } from "../controllers/wishlistController.js";
import { prepareSinglProduct } from "../controllers/singleProductController.js";
import { preparedCategoryProduct } from "../controllers/categoryCintroller.js";
import { prepareCompareProducts } from "../controllers/comparisonController.js";

const appEl = document.querySelector("#app");

const routeControllers = {
  home: preparedProducts,
  cart: preparedCartProducts,
  wishlist: preparaWishlistProduct,
  shop: preparedProducts,
  product: prepareSinglProduct,
  category: preparedCategoryProduct,
  compare: prepareCompareProducts,
};

export const renderApp = function () {
  const currentView = views[state.currentRoute];

  const controller = routeControllers[state.currentRoute];

  const data = controller ? controller() : null;

  const markup = currentView.generateMarkup(data);

  appEl.innerHTML = markup;
};
