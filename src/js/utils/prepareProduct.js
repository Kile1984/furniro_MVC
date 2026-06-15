import { state } from "../state/state.js";
import { getPrice } from "../utils/getPrice.js";

export const preparedProduct = function (product, category = null) {
  const cartMap = new Map(state.cart.map((item) => [item.id, item]));
  const wishlistIds = new Set(state.wishlist.map((item) => item.id));
  const compareIds = new Set(state.compare.map((item) => item.id));
  const price = getPrice(product.price);
  const cartItem = cartMap.get(product.id);

  return {
    id: product.id,
    title: product.title,
    image: product.images.main,
    shortDescription: product.shortDescription,
    badges: product.badges,
    original: product.price.original,
    finalPrice: price.finalPrice,
    discountPercent: product.price.discountPercent,
    hasDiscount: price.hasDiscount,
    quantity: cartItem?.quantity || 0,
    stock: product.properties.stock,
    isInWishlist: wishlistIds.has(product.id),
    isInCompare: compareIds.has(product.id),
  };
};
