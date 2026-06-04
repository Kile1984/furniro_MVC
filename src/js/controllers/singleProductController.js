import { state } from "../state/state";
import { productsActions } from "../state/actions/productsActions";
import { getPrice } from "../utils/getPrice.js";
import { formatPrice } from "../utils/format.js";

export const controlSingleProduct = function () {};

export const prepareSinglProduct = function () {
  const [, , id] = window.location.hash.split("/");

  const product = productsActions.getProductById(id);

  return {
    ...product,
    finalPrice: formatPrice(getPrice(product.price).finalPrice),
    isInWishList: state.wishlist,
  };
};
