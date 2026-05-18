import { images } from "../../../assets/images.js";
import { sprite, icons } from "../../../assets/icons/icons.js";
import { formatPrice } from "../../utils/format.js";
import { createCartView } from "../shared/cartView.js";
import { state } from "../../state/state.js";

const cartView = createCartView();

export const createProductView = function () {
  return {
    generateDiscount(price) {
      const { original, discountPercent } = price;
      const hasDiscount = discountPercent > 0;
      const discountPrice = original - (original * discountPercent) / 100;

      const markup = ` 
        <div class="product-card__price">
            <span class="product-card__price-current">${hasDiscount ? `${formatPrice(discountPrice)}` : `${formatPrice(original)}`}</span>
            <span class="product-card__price-old">${hasDiscount ? `${formatPrice(original)}` : ""}</span>
        </div>`;

      return markup;
    },

    generateBadge(products) {
      if (products.price.discountPercent > 0) {
        return `  <span class="product-card__badge  product-card__badge--discount">-${products.price.discountPercent}%</span>`;
      }

      if (products.badges.isNew) {
        return `  <span class="product-card__badge  product-card__badge--new">NEW</span>`;
      }
    },

    generateMarkup(products) {
      return `
          <!-- PRODUCTS -->
          <section class="section products">
            <div class="container">
              <h2 class="section-title products__main-title text-center">
                Our Product
              </h2>
              <div class="products__grid">
               ${cartView.generateMarkup(state.products)}
              </div>
            </div>
          </section>
      `;
    },
  };
};
