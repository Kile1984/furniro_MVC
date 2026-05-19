import { sprite, icons } from "../../../assets/icons/icons.js";
import { formatPrice } from "../../utils/format.js";
import { state } from "../../state/state.js";

export const createCartView = function () {
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

    updateCartButton(cartState, id) {
      const product = cartState.find((p) => p.id === id);
      const quantity = product.quantity;
      const cart = document
        .querySelector(`[data-id="${id}"]`)
        .closest(".product-card__cart-state");

      if (!cart) return;

      cart.innerHTML =
        quantity > 0
          ? ` <button class="btn product-card__btn--decrement" data-action="qt-decrement" data-id=${id}>-</button>
                <span class="product-card__quantity">${quantity}</span>
              <button class="btn product-card__btn--icrement" data-action="qt-increment" data-id=${id}>+</button> `
          : `Add to Cart`;
    },

    updateQuantity(cartState, id) {
      const product = cartState.find((p) => p.id === id);
      const quantity = product?.quantity || 0;

      const quantityEl = document.querySelector(
        `[data-id="${id}"] .product-card__quantity`,
      );

      quantityEl.textContent = quantity;
    },

    generateMarkup(products) {
      return `
          ${products
            .map((p) => {
              return `
            <article class="product-card">
              <a href="product.html" class="product-card__stretched-link"></a>
              <div class="product-card__overlay">
              <div class="product-card__cart-state" data-id=${p.id}>
                <button
                  type="button"
                  class="btn btn--secondary product-card__btn"
                  data-id=${p.id}
                  data-action="add-to-cart"
                >
                  Add to cart
                </button>
              </div>
              
                <a href="product.html" class="btn  product-card__view">
                  <svg class="icon">
                      <use href="${sprite}#${icons.eye}"></use>
                  </svg>
                </a>

                <div class="product-card__actions">
                  <button type="button" class="product-card__action">
                    <svg class="icon">
                      <use href="${sprite}#${icons.share}"></use>
                    </svg>
                    <span>Share</span>
                  </button>
                  <button type="button" class="product-card__action">
                    <svg class="icon">
                      <use href="${sprite}#${icons.tab}"></use>
                    </svg>
                    <span>Compare</span>
                  </button>
                  <button type="button" class="product-card__action">
                    <svg class="icon">
                        <use href="${sprite}#${icons.heart}"></use>
                    </svg>
                    <span>Like</span>
                  </button>
                </div>
              </div>

              <div class="product-card__image-wrapper">
                <img
                  src="${p.images.main}"
                  alt="${p.images.title}"
                  class="product-card__image"
                />
                ${this.generateBadge(p) ? this.generateBadge(p) : ""}
                  
              </div>

              <div class="product-card__content">
                <h3 class="product-card__title">${p.title}</h3>
                <p class="product-card__description">Stylish cafe chair</p>
                ${this.generateDiscount(p.price)}
              </div>
            </article>`;
            })
            .join("")}   
      `;
    },
  };
};

export const cartView = createCartView();
