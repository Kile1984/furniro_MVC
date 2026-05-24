import { state } from "../state/state.js";
import { productCardsView } from "../views/shared/productCardsView.js";
import { getProducts } from "../services/productsServices.js";
import { productsActions } from "../state/actions/productsActions.js";

import { getPrice } from "../utils/getPrice.js";
import * as model from "../model/model.js";

const updateProductCartUI = function (id) {
  const cartItem = state.cart.find((item) => item.id === id);

  productCardsView.updateCartButton({
    id,
    quantity: cartItem?.quantity || 0,
  });
};

export const loadProducts = async function () {
  const products = await getProducts();
  productsActions.setProducts(products);
};

export const controlAddToCart = function ({ dataset }) {
  model.addToCartItem(dataset.id);
  updateProductCartUI(dataset.id);
};

export const controlIncrement = function ({ dataset }) {
  model.incrementCartItem(dataset.id);
  updateProductCartUI(dataset.id);
};

export const controlDecrement = function ({ dataset }) {
  model.decrementCartItem(dataset.id);
  updateProductCartUI(dataset.id);
};

export const preparedHomeProducts = function () {
  return state.products.map((product) => {
    const price = getPrice(product.price);

    const cartItem = state.cart.find((item) => {
      return item.id === product.id;
    });

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
    };
  });
};

// Ovo ne ulazi ovde
export const controlRemoveFromCart = function (id) {
  console.log("Removing...");
  const product = state.cart.find((p) => p.id === id);
  storeActions.removeFromCart(product.id);
};
