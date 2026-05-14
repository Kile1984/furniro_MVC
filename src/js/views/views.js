import { createAboutView } from "../views/aboutView";
import { createContactView } from "../views/contactView";
import { createHomeView } from "../views/homeView";
import { createShopView } from "../views/shopView";

const appEl = document.querySelector("#app");

export const views = {
  home: createHomeView(appEl),
  shop: createShopView(appEl),
  about: createAboutView(appEl),
  contact: createContactView(appEl),
};
