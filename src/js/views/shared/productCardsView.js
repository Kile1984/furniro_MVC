import { sprite, icons } from "../../../assets/icons/icons.js";
import { formatPrice } from "../../utils/format.js";
import { generateBadge } from "../../shared/badgesUI.js";
import { generateDiscount } from "../../shared/discountUI.js";

export const createProductCardsView = function () {
  return {
    updateCartButton({ id, quantity, stock, isDisabled }) {
      const cart = document.querySelector(
        `.product-card__cart-state[data-id="${id}"]`,
      );

      if (!cart) return;

      if (quantity > 0) {
        cart.innerHTML = `
               <button class="btn product-card__btn--decrement"         data-action="qt-decrement" data-id=${id}>-
              </button>
                <span class="product-card__quantity">${quantity}</span>
              <button class="btn product-card__btn--icrement ${isDisabled ? "cart-page__quantity-btn--disabled" : ""}" data-action="qt-increment" data-id=${id}>+
              </button> `;
      } else {
        cart.innerHTML = ` <button
                  type="button"
                  class="btn btn--secondary product-card__btn"
                  data-id=${id}
                  data-action="add-to-cart"
                >
                  Add to cart
                </button>`;
      }
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
      const compareBtnEl = document.querySelector(
        `.product-card__action--compare[data-id=${id}]`,
      );

      if (!compareBtnEl) return;

      console.log(compareBtnEl);

      const compareSvg = compareBtnEl.querySelector("svg");
      const compareSpan = compareBtnEl.querySelector("span");

      compareBtnEl.classList.toggle("active", isInComparison);
      compareBtnEl.dataset.action = isInComparison
        ? "remove-from-compare"
        : "add-to-compare";

      compareSpan.textContent = isInComparison ? "In Compare" : "Compare";
    },

    render(products) {
      const parentEl = document.querySelector(".products__grid");

      parentEl.innerHTML = this.generateMarkup(products);
    },

    generateMarkup(products) {
      return `
          ${products
            .map((p) => {
              return `
            <article class="product-card" data-id="${p.id}">
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
                    class="btn btn--secondary product-card__btn ${p.stock === 0 ? "disabled" : ""}"
                    data-id=${p.id}
                    data-action="add-to-cart"
                    ${p.stock === 0 ? "disabled" : ""}
                >${p.stock > 0 ? "Add to cart" : "Out of stock"}</button>`
              }
              </div>
              
                <a href="#/product/${p.id}" class="btn  product-card__view">
                  <svg class="icon">
                      <use href="${sprite}#${icons.eye}"></use>
                  </svg>
                </a>

                <div class="product-card__actions">
                  <button type="button" class="product-card__action product-card__action--share" data-action="share" data-id=${p.id}>
                    <svg class="icon">
                      <use href="${sprite}#${icons.share}"></use>
                    </svg>
                    <span>Share</span>
                  </button>

                  <button type="button" class="product-card__action product-card__action--compare ${p.isInCompare ? "active" : "not-active"}" data-action="${p.isInCompare ? "remove-from-compare" : "add-to-compare"}" data-id=${p.id}>
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
                ${generateBadge(p.discountPercent, p.badges) ? generateBadge(p.discountPercent, p.badges) : ""}
                  
              </div>

              <div class="product-card__content">
                <h3 class="product-card__title">${p.title}</h3>
                <p class="product-card__description">${p.shortDescription}</p>
                ${generateDiscount(p.finalPrice, p.original, p.hasDiscount)}
              </div>
            </article>`;
            })
            .join("")}   
      `;
    },
  };
};

export const productCardsView = createProductCardsView();
