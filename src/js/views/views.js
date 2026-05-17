import { createAboutView } from "../views/aboutView.js";
import { createContactView } from "../views/contactView.js";
import { createHomeView } from "../views/home/homeView.js";
import { createShopView } from "../views/shopView.js";
import { createPaymentView } from "../views/paymentView.js";
import { createReturnsView } from "./returnsView.js";
import { createPolicyView } from "../views/policyView.js";

export const views = {
  home: createHomeView(),
  shop: createShopView(),
  about: createAboutView(),
  contact: createContactView(),
  payment: createPaymentView(),
  returns: createReturnsView(),
  policy: createPolicyView(),
};
