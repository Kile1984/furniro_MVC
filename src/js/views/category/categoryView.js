import { productCardsView } from "../shared/productCardsView";

export const categoryView = function () {
  return {
    generateMarkup(products) {
      console.log(products);
      return `
             Products
            `;
    },
  };
};
