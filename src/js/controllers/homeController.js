import * as model from "../model/model.js";
import { state } from "../state/state.js";
import { getProducts } from "../services/productsServices.js";
import { cartActions } from "../state/actions/cartActions.js";
import { productsActions } from "../state/actions/productsActions.js";
import { productCardsView } from "../views/shared/productCardsView.js";
import { syncHeaderCartCount } from "./headerController.js";
import { getPrice } from "../utils/getPrice.js";

const updateProductCartUI = function (id) {
  const cartItem = cartActions.getCartItemById(id);

  productCardsView.updateCartButton({
    id,
    quantity: cartItem?.quantity || 0,
    stock: cartItem?.properties.stock,
    isDisabled: cartItem?.quantity >= cartItem?.properties.stock,
  });
  syncHeaderCartCount();
};

export const loadProducts = async function () {
  const products = await getProducts();
  productsActions.setProducts(products);
};

export const controlAddToCart = function ({ dataset }) {
  model.addToCartItem(dataset.id);
  updateProductCartUI(dataset.id);

  syncHeaderCartCount();
};

export const controlIncrement = function ({ dataset }) {
  model.incrementCartItem(dataset.id);
  updateProductCartUI(dataset.id);
  syncHeaderCartCount();
};

export const controlDecrement = function ({ dataset }) {
  model.decrementCartItem(dataset.id);
  updateProductCartUI(dataset.id);
  syncHeaderCartCount();
};

export const preparedHomeProducts = function () {
  return state.products.map((product) => {
    const price = getPrice(product.price);

    const cartItem = cartActions.getCartItemById(product.id);
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
    };
  });
};
