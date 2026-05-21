import { state } from "../../state/state.js";
import { images } from "../../../assets/images.js";
import { sprite, icons } from "../../../assets/icons/icons";
import { formatPrice } from "../../utils/format.js";
import { getPrice } from "../../utils/getPrice.js";

export const createCartView = function () {
  return {
    generateMarkup() {
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
                  ${state.cart
                    .map((p) => {
                      return `
                     <div class="cart-page__item" data-id="P.ID">
                      <div class="cart-page__product">
                        <a href="#" class="cart-page__link">
                            <img
                            src="${p.images.main}"
                            alt="${p.title}"
                            />
                            <span>${p.title}</span>
                        </a>
                      </div>

                      <div class="cart-page__price">
                        <span class="cart-page__price-label">Price</span>
                        <span>${getPrice.finalPrice}</span>
                      </div>

                      <div class="cart-page__quantity">
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
                            class="btn cart-page__quantity-btn cart-page__quantity-btn--increment"
                            data-id=${p.id}
                            data-action="qt-increment"
                        >
                            +
                        </button>
                      </div>

                      <div class="cart-page__subtotal">
                        <span class="cart-page__price-label">Subtotal</span>
                        <span class="cart-page__subtotal-value">${getPrice.finalPrice}</span>
                      </div>

                      <button class="cart-page__remove-btn" data-id=1>
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
                    0
                  </span>
                </div>

                <div class="cart-page__summary-row cart-page__summary-row--tax">
                  <span class="cart-page__summary-label">Tax:</span>
                  <span
                    class="cart-page__summary-price cart-page__summary-price--tax cart-page__summary-price--gray"
                  >
                    1 0
                  </span>
                </div>

                <div
                  class="cart-page__summary-row cart-page__summary-row--shipping"
                >
                  <span class="cart-page__summary-label">Shipping:</span>
                  <span
                    class="cart-page__summary-price cart-page__summary-price--shipping cart-page__summary-price--gray"
                  >
                    2 0
                  </span>
                </div>

                <div class="cart-page__summary-row">
                  <span class="cart-page__summary-label">Total</span>
                  <span
                    class="cart-page__summary-price--total cart-page__summary-price--accent"
                  >
                    0
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
