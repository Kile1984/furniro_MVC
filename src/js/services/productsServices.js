import { products } from "./products.js";

export const getProducts = async function () {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 500);
  });
};
