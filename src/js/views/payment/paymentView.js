import { images } from "../../../assets/images.js";
import { sprite, icons } from "../../../assets/icons/icons.js";

export const createPaymentView = function (appEl) {
  return {
    generateMarkup() {
      return `
      <main class="page page--legal">
        <!-- PAYMENT OPTIONS -->
        <div class="container">
          <h1 class="section-title">Payment Options</h1>

          <p>
            We offer several convenient payment methods to make your shopping
            experience simple and secure.
          </p>

          <h2 class="ui-title">Bank Transfer</h2>
          <p>
            You can complete your purchase via bank transfer. After placing your
            order, you will receive the necessary payment details. Once the
            payment is confirmed, your order will be processed and shipped.
          </p>

          <h2 class="ui-title">Cash on Delivery</h2>
          <p>
            You can also pay for your order when it is delivered. Payment is
            made directly to the courier at the time of delivery.
          </p>

          <p>
            If you have any questions regarding payment methods, please contact
            our customer support team.
          </p>
        </div>
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
                High Quality
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
      </main>
      `;
    },
  };
};
