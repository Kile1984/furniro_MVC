import { formatPrice } from "./format.js";
import { getPrice } from "./getPrice.js";

// Shape compare tray product
export const prepareCompareTrayProduct = function (product) {
  return {
    id: product.id,
    title: product.title,
    image: product.images.main,
    price: formatPrice(getPrice(product.price).finalPrice),
  };
};
