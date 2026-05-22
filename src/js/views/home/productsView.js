import { images } from "../../../assets/images.js";
import { sprite, icons } from "../../../assets/icons/icons.js";
import { formatPrice } from "../../utils/format.js";
import { productCardsView } from "../shared/productCardsView.js";
import { state } from "../../state/state.js";

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
              </div>
            </div>
          </section>
      `;
    },
  };
};
