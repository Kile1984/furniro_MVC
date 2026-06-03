import { state } from "../state/state.js";
import { getProducts } from "../services/productsServices.js";
import { cartActions } from "../state/actions/cartActions.js";
import { productsActions } from "../state/actions/productsActions.js";
import { getPrice } from "../utils/getPrice.js";

export const loadProducts = async function () {
  const products = await getProducts();
  productsActions.setProducts(products);
};

export const preparedHomeProducts = function () {
  const cartMap = new Map(state.cart.map((item) => [item.id, item]));
  const wishlistIds = new Set(state.wishlist.map((item) => item.id));

  return state.products.map((product) => {
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
    };
  });
};
