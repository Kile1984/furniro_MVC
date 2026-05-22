import { state } from "../state/state.js";
import { getPrice } from "../utils/getPrice.js";

export const preparedCartProducts = function () {
  return state.cart.map((product) => {
    const price = getPrice(product.price);

    return {
      id: product.id,
      title: product.title,
      image: product.images.main,
      quantity: product.quantity,
      finalPrice: price.finalPrice,
      subtotal: price.finalPrice * product.quantity,
    };
  });
};
