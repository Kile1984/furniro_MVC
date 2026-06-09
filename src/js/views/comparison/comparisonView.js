export const createComparisonView = function () {
  return {
    generateMarkup(products) {
      return `
            Comparison page ${products}
            `;
    },
  };
};
