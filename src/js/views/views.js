import { createAboutView } from "./about/aboutView.js";
import { createContactView } from "./contact/contactView.js";
import { createHomeView } from "./home/homeView.js";
import { createShopView } from "./shop/shopView.js";
import { createPaymentView } from "./payment/paymentView.js";
import { createReturnsView } from "./returns/returnsView.js";
import { createPolicyView } from "./policy/policyView.js";
import { createCartView } from "./cart/cartView.js";
import { createWishlistView } from "./wishlist/wishlistView.js";

export const views = {
  home: createHomeView(),
  shop: createShopView(),
  about: createAboutView(),
  contact: createContactView(),
  payment: createPaymentView(),
  returns: createReturnsView(),
  policy: createPolicyView(),
  cart: createCartView(),
  wishlist: createWishlistView(),
};
