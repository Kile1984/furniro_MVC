import { sprite, icons } from "../../../assets/icons/icons.js";
import { formatPrice } from "../../utils/format.js";

export const createProductCardsView = function () {
  return {
    generateDiscount(finalPrice, original, hasDiscount) {
      const markup = ` 
        <div class="product-card__price">
          <span class="product-card__price-current">
            ${formatPrice(finalPrice)}
          </span>

          <span class="product-card__price-old">
            ${hasDiscount ? formatPrice(original) : ""}
          </span>
        </div>`;

      return markup;
    },

    generateBadge(discountPercent, badges) {
      if (discountPercent > 0) {
        return `  <span class="product-card__badge  product-card__badge--discount">-${discountPercent}%</span>`;
      }

      if (badges.isNew) {
        return `  <span class="product-card__badge  product-card__badge--new">NEW</span>`;
      }
    },

    updateCartButton({ id, quantity, stock, isDisabled }) {
      const cart = document.querySelector(
        `.product-card__cart-state[data-id="${id}"]`,
      );

      if (!cart) return;
      cart.innerHTML =
        quantity > 0
          ? ` <button class="btn product-card__btn--decrement" data-action="qt-decrement" data-id=${id}>-
              </button>
                <span class="product-card__quantity">${quantity}</span>
              <button class="btn product-card__btn--icrement ${isDisabled ? "cart-page__quantity-btn--disabled" : ""}" data-action="qt-increment" data-id=${id}>+
              </button> `
          : ` <button
                  type="button"
                  class="btn btn--secondary product-card__btn"
                  data-id=${id}
                  data-action="add-to-cart"
                >
                  Add to cart
                </button>`;
    },

    updateWishlistButton(id, isInWishlist) {
      const btn = document.querySelector(
        `.product-card__action--wishlist[data-id=${id}]`,
      );

      if (!btn) return;

      btn.innerHTML = `
                <svg class="icon">
                      <use href="${sprite}#${isInWishlist ? icons.heart_1 : icons.heart}"></use>
                </svg>
                 <span>Like</span>
      `;

      btn.dataset.action = isInWishlist
        ? "remove-from-wishlist"
        : "add-to-wishlist";
    },

    updateCompareButton(id, isInComparison) {
      console.log("UPDATEEEEE");
      const compareBtnEl = document.querySelector(
        `.product-card__action[data-id=${id}]`,
      );

      if (!compareBtnEl) return;

      const compareSvg = compareBtnEl.querySelector("svg");
      const compareSpan = compareBtnEl.querySelector("span");

      compareBtnEl.classList.toggle("active", isInComparison);
      compareBtnEl.dataset.action = isInComparison
        ? "remove-from-compare"
        : "add-to-compare";

      compareSpan.textContent = isInComparison ? "In Compare" : "Compare";
    },

    generateMarkup(products) {
      return `
          ${products
            .map((p) => {
              return `
            <article class="product-card">
              <a href="#/product/${p.id}" class="product-card__stretched-link"></a>
              <div class="product-card__overlay">
              <div class="product-card__cart-state" data-id=${p.id}>
              ${
                p?.quantity > 0
                  ? `
                  <button class="btn product-card__btn--decrement" data-action="qt-decrement" 
                  data-id=${p.id}>-
                  </button>
                    <span class="product-card__quantity">${p.quantity}</span>
                  <button class="btn product-card__btn--icrement
                   ${p.quantity >= p.stock ? "cart-page__quantity-btn--disabled" : ""}" data-action="qt-increment"
                  data-id=${p.id}>+</button>`
                  : `
                  <button
                    type="button"
                    class="btn btn--secondary product-card__btn"
                    data-id=${p.id}
                    data-action="add-to-cart"
                >Add to cart</button>`
              }
              </div>
              
                <a href="#/product/${p.id}" class="btn  product-card__view">
                  <svg class="icon">
                      <use href="${sprite}#${icons.eye}"></use>
                  </svg>
                </a>

                <div class="product-card__actions">
                  <button type="button" class="product-card__action" >
                    <svg class="icon">
                      <use href="${sprite}#${icons.share}"></use>
                    </svg>
                    <span>Share</span>
                  </button>
                  <button type="button" class="product-card__action ${p.isInCompare ? "active" : "not-active"}" data-action="${p.isInCompare ? "remove-from-compare" : "add-to-compare"}" data-id=${p.id}>
                    <svg class="icon">
                      <use href="${sprite}#${icons.tab}"></use>
                    </svg>
                    <span>${p.isInCompare ? "In Compare" : " Compare"}</span>
                  </button>
                  <button type="button" class="product-card__action product-card__action--wishlist" data-action="${p.isInWishlist ? "remove-from-wishlist" : "add-to-wishlist"}" 
                  data-id=${p.id}>
                    <svg class="icon">
                        <use href="${sprite}#${p.isInWishlist ? icons.heart_1 : icons.heart}">
                        </use>
                    </svg>
                    <span>Like</span>
                  </button>
                </div>
              </div>

              <div class="product-card__image-wrapper">
                <img
                  src="${p.image}"
                  alt="${p.title}"
                  class="product-card__image"
                />
                ${this.generateBadge(p.discountPercent, p.badges) ? this.generateBadge(p.discountPercent, p.badges) : ""}
                  
              </div>

              <div class="product-card__content">
                <h3 class="product-card__title">${p.title}</h3>
                <p class="product-card__description">${p.shortDescription}</p>
                ${this.generateDiscount(
                  p.finalPrice,
                  p.original,
                  p.hasDiscount,
                )}
              </div>
            </article>`;
            })
            .join("")}   
      `;
    },
  };
};

export const productCardsView = createProductCardsView();
