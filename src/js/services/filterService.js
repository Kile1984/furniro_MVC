import { getPrice } from "../utils/getPrice.js";

export const filterProducts = function (products, filters) {
  let filteredProducts = [...products];
  const categories = new Set(filters.category);

  console.log(filteredProducts, filters);

  // category
  if (filters.category.length) {
    filteredProducts = filteredProducts.filter((product) => {
      return categories.has(product.category);
    });
  }

  // price
  if (filters.minPrice !== null && filters.maxPrice !== null) {
    filteredProducts = filteredProducts.filter((product) => {
      const productPrice = getPrice(product.price).finalPrice;

      return (
        productPrice >= filters.minPrice && productPrice <= filters.maxPrice
      );
    });
  }

  //stock
  if (filters.inStock) {
    filteredProducts = filteredProducts.filter(
      (product) => product.properties.stock > 0,
    );
  }

  // rating
  if (filters.rating) {
    filteredProducts = filteredProducts.filter((product) => {
      const averageRating =
        product.reviews.reduce((sum, review) => sum + review.rating, 0) /
        product.reviews.length;

      return averageRating >= filters.rating;
    });
  }

  return filteredProducts;
};
