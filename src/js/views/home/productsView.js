import { productCardsView } from "../shared/productCardsView.js";

export const createProductView = function () {
  return {
    generateMarkup(products) {
      return `
          <!-- PRODUCTS -->
          <section class="section products">
            <div class="container">
              <h2 class="section-title products__main-title text-center">
                Our Product
              </h2>
              <div class="products__grid">
               ${productCardsView.generateMarkup(products)}
              <a href="#/shop" class="btn btn--secondary products__btn-load-more">
                  Browse All Products
              </a>
              </div>
            </div>
          </section>
      `;
    },
  };
};
