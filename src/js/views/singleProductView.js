export const createSingleProductView = function () {
  return {
    generateMarkup(data) {
      console.log(data);
      return `Single Product View`;
    },
  };
};
