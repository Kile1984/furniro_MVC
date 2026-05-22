import { images } from "../../../assets/images.js";
import { sprite, icons } from "../../../assets/icons/icons.js";

export const createReturnsView = function (appEl) {
  return {
    generateMarkup() {
      return `
      <main class="page page--legal">
        <!-- RETURNS -->
        <div class="container">
          <h1>Return Policy</h1>

          <p>
            We want you to be completely satisfied with your purchase. If you
            are not happy with your order, you may request a return within 14
            days of receiving the product.
          </p>

          <h2>Return Conditions</h2>
          <p>
            To be eligible for a return, the item must be unused, in its
            original condition, and returned in the original packaging. Items
            that are damaged or show signs of use may not be eligible for a
            refund.
          </p>

          <h2>Refund Process</h2>
          <p>
            Once we receive and inspect the returned item, we will notify you
            about the status of your refund. If the return is approved, the
            refund will be processed using the original payment method.
          </p>

          <h2>Shipping Costs</h2>
          <p>
            Shipping costs are generally non-refundable unless the product was
            damaged or incorrect when delivered.
          </p>

          <p>
            For any questions regarding returns or refunds, please contact our
            customer support team.
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
