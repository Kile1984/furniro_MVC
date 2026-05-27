import { state } from "../../state/state.js";
import { images } from "../../../assets/images.js";
import { sprite, icons } from "../../../assets/icons/icons";
import { formatPrice } from "../../utils/format.js";
import { getPrice } from "../../utils/getPrice.js";
import { productCardsView } from "../shared/productCardsView.js";
import { getCartTotal } from "../../model/model.js";

export const createCartView = function () {
  return {
    updateQuantityValue({ id, quantity }) {
      const inputEl = document.querySelector(
        `.cart-page__quantity-input[data-id="${id}"]`,
      );
      inputEl.addEventListener("onchange", function () {
        console.log(inputEl.value);
      });

      inputEl.value = quantity;
    },

    updateInputValue(id, value) {
      const inputEl = document.querySelector(
        `.cart-page__quantity-input[data-id="${id}"]`,
      );

      inputEl.value = value;
    },

    removeCartItem(id) {
      const cartItemEl = document.querySelector(
        `.cart-page__item[data-id="${id}"]`,
      );
      cartItemEl.remove();
    },

    updateCartSubtotal(id, subtotal) {
      const subtotalEl = document.querySelector(
        `.cart-page__subtotal-value[data-id="${id}"]`,
      );

      if (!subtotalEl) return;

      subtotalEl.textContent = subtotal;
    },

    updateTotals(summary) {
      const subtotalEl = document.querySelector(
        ".cart-page__summary-price--subtotal",
      );
      const taxEl = document.querySelector(".cart-page__summary-price--tax");
      const shippingEl = document.querySelector(
        ".cart-page__summary-price--shipping",
      );
      const totalEl = document.querySelector(
        ".cart-page__summary-price--total",
      );

      subtotalEl.textContent = summary.subtotal;
      taxEl.textContent = summary.tax;
      shippingEl.textContent = summary.shipping;
      totalEl.textContent = summary.total;
    },

    getStockWarning(stock) {
      if (stock <= 2) {
        return `<span class="cart-page__quantity-warning cart-page__quantity-warning--red">Only ${stock} left</span>`;
      }

      if (stock <= 5) {
        return `<span class="cart-page__quantity-warning cart-page__quantity-warning--orange">Only ${stock} left</span>`;
      }

      return "";
    },

    updateIncrementButtonState({ id, isDisabled }) {
      const btn = document.querySelector(
        `.cart-page__quantity-btn--increment[data-id="${id}"]`,
      );
      console.log(isDisabled);
      btn.classList.toggle("cart-page__quantity-btn--disabled", isDisabled);
    },

    generateMarkup(data) {
      console.log(data);
      return ` 
     <!-- PAGE HEADING SHOP -->
      <main class="page page--cart">
        <header class="page-hero mb-0">
          <div class="container page-hero__inner">
            <img
              src="${images.logo_crop}"
              alt="Logo-crop"
              class="m-auto"
            />
            <h1 class="page-title page-title--medium page-hero__title">Cart</h1>
            <nav
              class="page-hero__breadcrumb text-center"
              aria-label="Breadcrumb"
            >
              <a href="index.html" class="text-body text-body--medium">Home</a>
              >
              <span>Cart</span>
            </nav>
          </div>
        </header>

        <!-- CART -->
        <section class="cart-page">
          <div class="container cart-page__inner">
            <div class="cart-page__items-wrapper">
              <div class="cart-page__items">
                <div class="cart-page__headers">
                  <span>Product</span>
                  <span>Price</span>
                  <span>Quantity</span>
                  <span>Subtotal</span>
                </div>

                <div class="cart-page__item-wrapp">
                  <!-- JS -->
                  ${data.products

                    .map((p) => {
                      return `
                     <div class="cart-page__item" data-id="${p.id}">
                      <div class="cart-page__product">
                        <a href="#" class="cart-page__link">
                            <img
                            src="${p.image}"
                            alt="${p.title}"
                            />
                            <span>${p.title}</span>
                        </a>
                      </div>

                      <div class="cart-page__price">
                        <span class="cart-page__price-label">Price</span>
                        <span>${formatPrice(p.finalPrice)}</span>
                      </div>
                      
                      <div class="cart-page__quantity">
                    ${this.getStockWarning(p.stock)}
                      
                        <button
                            type="button"
                            class="btn cart-page__quantity-btn cart-page__quantity-btn--decrement"
                            data-id="${p.id}"
                            data-action="qt-decrement"
                            
                        >
                          -
                       </button>

                        <input
                            type="number"
                            min="1"
                            value=${p.quantity}
                            class="cart-page__quantity-input"
                            data-id=${p.id}
                        />

                        <button
                            type="button"
                            class="btn cart-page__quantity-btn cart-page__quantity-btn--increment ${p.quantity >= p.stock ? "cart-page__quantity-btn--disabled" : ""}"
                            data-id=${p.id}
                            data-action="qt-increment"
                        >
                            +
                        </button>
                      </div>

                      <div class="cart-page__subtotal">
                        <span class="cart-page__price-label">Subtotal</span>
                        <span class="cart-page__subtotal-value" data-id="${p.id}">${formatPrice(p.subtotal)}</span>
                      </div>

                      <button class="cart-page__remove-btn" data-id="${p.id}" data-action="remove-from-cart">
                        <svg class="icon">
                            <use href="${sprite}#${icons.bin}"></use>
                        </svg>
                      </button>
                  </div>
                    `;
                    })
                    .join("")}
                 
                </div>
              </div>
            </div>

            <aside class="cart-page__summary">
              <div class="cart-page__summary-body">
                <h2 class="cart-page__summary-title">Cart Totals</h2>

                <div class="cart-page__summary-row">
                  <span class="cart-page__summary-label">Subtotal</span>
                  <span
                    class="cart-page__summary-price cart-page__summary-price--subtotal cart-page__summary-price--gray"
                  >
                    ${data.summary.subtotal}
                  </span>
                </div>

                <div class="cart-page__summary-row cart-page__summary-row--tax">
                  <span class="cart-page__summary-label">Tax:</span>
                  <span
                    class="cart-page__summary-price cart-page__summary-price--tax cart-page__summary-price--gray"
                  >
                   ${data.summary.tax}
                  </span>
                 
                </div>

                <div
                  class="cart-page__summary-row cart-page__summary-row--shipping"
                >
                  <span class="cart-page__summary-label">Shipping:</span>
                  <span
                    class="cart-page__summary-price cart-page__summary-price--shipping cart-page__summary-price--gray"
                  >
                     ${data.summary.shipping}
                  </span>
                </div>

                <div class="cart-page__summary-row">
                  <span class="cart-page__summary-label">Total</span>
                  <span
                    class="cart-page__summary-price--total cart-page__summary-price--accent"
                  >
                     ${data.summary.total}
                  </span>
                </div>
              </div>

              <button type="button" class="btn cart-page__summary-btn">
                Check Out
              </button>
            </aside>
          </div>
        </section>

        <!-- FEATURES -->
        <section class="features">
          <div class="container container--wide features__inner">
            <div class="features__box features__quality">
              <img
                src="./assets/images/trophy.png"
                alt=""
                class="features__img"
              />
              <h3 class="features__title ui-title ui-title--dark">
                Hight Quality
              </h3>
              <p class="text-body-xl features__text">
                crafted from top materials
              </p>
            </div>
            <div class="features__box features__warranty">
              <img
                src="./assets/images/guarantee.png"
                alt=""
                class="features__img"
              />
              <h3 class="features__title ui-title ui-title--dark">
                Warranty Protection
              </h3>
              <p class="text-body-xl features__text">Over 2 years</p>
            </div>
            <div class="features__box features__shipping">
              <img
                src="./assets/images/shipping.png"
                alt=""
                class="features__img"
              />
              <h3 class="features__title ui-title ui-title--dark">
                Free Shipping
              </h3>
              <p class="text-body-xl features__text">Order over 150 $</p>
            </div>
            <div class="features__box features__support">
              <img
                src="./assets/images/customer-support.png"
                alt=""
                class="features__img"
              />
              <h3 class="features__title ui-title ui-title--dark">
                24 / 7 Support
              </h3>
              <p class="text-body-xl features__text">Dedicated support</p>
            </div>
          </div>
        </section>
      </main>`;
    },
  };
};

export const cartView = createCartView();
