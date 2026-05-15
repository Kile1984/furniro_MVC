import { createAboutView } from "../views/aboutView";
import { createContactView } from "../views/contactView";
import { createHomeView } from "../views/homeView";
import { createShopView } from "../views/shopView";

export const views = {
  home: createHomeView(),
  shop: createShopView(),
  about: createAboutView(),
  contact: createContactView(),
};
