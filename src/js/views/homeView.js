const diningImg = new URL("../../assets/images/dining.png", import.meta.url)
  .href;

export const createHomeView = function (appEl) {
  return {
    generateMarkup() {
      return `<h1>Home</h1>
   <button data-action="add-to-cart" data-id="5">Button
</button>
`;
    },

    bindEvents() {},
  };
};
