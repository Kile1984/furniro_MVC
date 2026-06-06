import { state } from "../state/state";
import { productsActions } from "../state/actions/productsActions";
import { cartActions } from "../state/actions/cartActions.js";
import { getPrice } from "../utils/getPrice.js";
import { formatPrice } from "../utils/format.js";

export const controlSingleProduct = function () {};

export const prepareSinglProduct = function () {
  const [, , id] = window.location.hash.split("/");

  const product = productsActions.getProductById(id);

  const getAverageRating = function (reviews) {
    const sum = reviews.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0);

    if (reviews.length === 0) return 0;

    return sum / reviews.length;
  };

  const getCartProductQuantity = function () {
    const cartProduct = cartActions.getCartItemById(id);

    if (!cartProduct) return 1;

    return cartProduct.quantity;
  };

  return {
    ...product,
    finalPrice: formatPrice(getPrice(product.price).finalPrice),
    reviewsCount: product.reviews.length,
    averageRating: getAverageRating(product.reviews),
    quantity: getCartProductQuantity(),
  };
};

const controlIncrement = function (id) {
  console.log(id);
};

const controlDecrement = function (id) {
  console.log(id);
};

const controlCompare = function (id) {
  console.log(id);
};
