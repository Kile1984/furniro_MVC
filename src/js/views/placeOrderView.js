import { images } from "../../assets/images.js";
import { sprite, icons } from "../../assets/icons/icons.js";

export const createPlaceOrderView = function () {
  return {
    generateMarkup() {
      return `
             <main class="page page--contact">
      <header class="page-hero">
        <div class="container page-hero__inner">
          <img
           src="${images.logo_crop}"
            alt="Logo"
            class="m-auto"
          />
          <h1 class="page-title page-title--medium page-hero__title">
            Checkout
          </h1>
          <nav
            class="page-hero__breadcrumb text-center"
            aria-label="Breadcrumb"
          >
            <a href="#/home" class="text-body text-body--medium">Home</a> >
            <span>Checkout</span>
          </nav>
        </div>
      </header>

      <!-- CTA -->
      <section class="checkout">
        <div class="container">
          <form action="#" class="checkout__form" data-submit="place-order">
            <div class="checkout__left">
              <h2 class="checkout__header">Billing details</h2>

              <div class="checkout__inputs-wrapper">
                <div class="checkout__group checkout__group--name">
                  <label for="name" class="checkout__label">First Name</label>
                  <input id="firstaName" name="firstName" type="text" class="checkout__input" />
                </div>
                <div class="checkout__group checkout__group--lastname">
                  <label for="lastname" class="checkout__label"
                    >Last Name</label
                  >
                  <input
                    id="lastname"
                    name="lastname"
                    type="text"
                    class="checkout__input"
                  />
                </div>
              </div>

              <div class="checkout__group">
                <label for="company" class="checkout__label"
                  >Company Name (Optional)</label
                >
                <input
                  id="company"
                  type="text"
                  name="company"
                  class="checkout__input"
                />
              </div>

              <div class="checkout__group">
                <label for="address" class="checkout__label"
                  >Street address</label
                >
                <input
                  id="address"
                  type="text"
                  name="address"
                  class="checkout__input"
                />
              </div>

              <div class="checkout__group">
                <label for="town" class="checkout__label">Town / City</label>
                <input
                  id="town"
                  type="text"
                  name="town"
                  class="checkout__input"
                />
              </div>

              <div class="checkout__group">
                <label for="zip" class="checkout__label">ZIP code</label>
                <input
                  id="zip"
                  type="text"
                  name="zip"
                  class="checkout__input"
                />
              </div>

              <div class="checkout__group">
                <label for="phone" class="checkout__label">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  class="checkout__input"
                />
              </div>

              <div class="checkout__group">
                <label for="mail" class="checkout__label">Email address</label>
                <input
                  id="mail"
                  type="email"
                  name="mail"
                  class="checkout__input"
                />
              </div>

              <div class="checkout__group checkout__group--additional">
                <textarea
                  id="message"
                  type="text"
                  name="message"
                  class="checkout__textarea"
                  placeholder="Additional information"
                ></textarea>
              </div>
            </div>

            <div class="checkout__right">
              <div class="checkout__product-wrapper">
                <div class="checkout__product">
                  <h2 class="checkout__title">Product</h2>
                  <p class="checkout__product-text">
                    <span
                      class="checkout__product-text checkout__product-text--gray"
                      >Asgaard sofa</span
                    >
                    <span>x 1</span>
                  </p>
                  <p class="checkout__subtotal-text">Subtotal</p>
                  <p class="checkout__total-text">Total</p>
                </div>

                <div class="checkout__total">
                  <h2 class="checkout__title">Subtotal</h2>
                  <p class="checkout__price">Rs. 250,000.00</p>
                  <p class="checkout__subtotal">Rs. 250,000.00</p>
                  <p class="checkout__total-value">Rs. 250,000.00</p>
                </div>
              </div>

              <div class="checkout__payment">
                <div class="checkout__payment-options">
                  <label for="bank" class="checkout__payment-option">
                    <input type="radio" name="payment" id="bank" />
                    <div class="checkout__payment-wrapper">
                      <span class="checkout__payment-radio"></span>
                      <span class="checkout__payment-label"
                        >Direct Bank Transfer</span
                      >
                    </div>
                  </label>
                </div>

                <div class="checkout__payment-options">
                  <label for="delivery" class="checkout__payment-option">
                    <input type="radio" name="payment" id="delivery" />
                    <div class="checkout__payment-wrapper">
                      <span class="checkout__payment-radio"></span>
                      <span class="checkout__payment-label">
                        Cash On Delivery</span
                      >
                    </div>
                  </label>
                </div>

                <div class="checkout__option-texts">
                  <p
                    class="checkout__payment-text checkout__payment-text--bank"
                  >
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference.
                  </p>

                  <p
                    class="checkout__payment-text checkout__payment-text--delivery"
                  >
                    Make your payment to the courier service upon delivery of
                    the product.
                  </p>
                </div>
              </div>

              <button class="btn checkout__submit" type="submit" >
                Place order
              </button>
            </div>
          </form>
        </div>
      </section>

      <!-- FEATURES -->
      <section class="features">
        <div class="container container--wide features__inner">
          <div class="features__box features__quality">
            <img
              src="${images.trophy}"
              alt=""
              class="features__img"
            />
            <h3 class="features__title ui-title ui-title--dark">
              High Quality
            </h3>
            <p class="text-body-xl features__text">
              crafted from top materials
            </p>
          </div>
          <div class="features__box features__warranty">
            <img
               src="${images.guarantee}"
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
               src="${images.shipping}"
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
               src="${images.customer_supp}"
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
    </main>
        `;
    },
  };
};

export const placeOrderView = new createPlaceOrderView();
