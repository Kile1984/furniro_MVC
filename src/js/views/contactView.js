import { images } from "../../assets/images.js";
import { sprite, icons } from "../../assets/icons/icons.js";

export const createContactView = function (appEl) {
  return {
    generateMarkup() {
      return `
      
      <main class="page page--contact">
        <header class="page-hero">
          <div class="container page-hero__inner">
            <img
              src="${images.logo_crop}"
              alt="Logo-crop"
              class="m-auto"
            />
            <h1 class="page-title page-title--medium page-hero__title">
              Contact
            </h1>
            <nav
              class="page-hero__breadcrumb text-center"
              aria-label="Breadcrumb"
            >
              <a href="index.html" class="text-body text-body--medium">Home</a>
              >
              <span>Contact</span>
            </nav>
          </div>
        </header>

        <!-- CTA -->
        <section class="contact-cta">
          <div class="container">
            <div class="contact-cta__header text-center">
              <h2 class="section-title">Get In Touch With Us</h2>
              <p class="text-body-xl contact-cta__text">
                For More Information About Our Product & Services. Please Feel
                Free To Drop Us An Email. Our Staff Always Be There To Help You
                Out. Do Not Hesitate!
              </p>
            </div>

            <div class="contact-cta__content">
              <div class="contact-cta__info">
                <div class="contact-cta__box contact-cta__address">
                  <svg class="icon contact-cta__icon">
                    <use href="${sprite}#${icons.location}"></use>
                  </svg>
                  <h4 class="contact-cta__title">Address</h4>
                  <p>236 5th SE Avenue,</p>
                  <p>New York NY10000, United States</p>
                </div>

                <div class="contact-cta__box contact-cta__phone">
                
                  <svg class="icon contact-cta__icon">
                     <use href="${sprite}#${icons.phone}"></use>
                  </svg>
                  <h4 class="contact-cta__title">Phone</h4>

                  <p>Mobile:<a href="tel:+845466789">+(84) 546-6789</a></p>
                  <p>Hotline:<a href="tel:+844566789"> +(84) 456-6789</a></p>
                </div>

                <div class="contact-cta__box contact-cta__phone">
                  <svg class="icon contact-cta__icon">
                     <use href="${sprite}#${icons.working_time}"></use>
                  </svg>
                  <h4 class="contact-cta__title">Working Time</h4>
                  <p>Monday-Friday: 9:00 - 22:00</p>
                  <p>Saturday-Sunday: 9:00 - 21:00</p>
                </div>
              </div>
              <form action="#" method="post" class="contact-cta__form">
                <div class="contact-cta__form-group">
                  <label for="name" class="contact-cta__label">Your name</label>
                  <input
                    type="text"
                    id="name"
                    class="contact-cta__input"
                    placeholder="Abc"
                  />
                </div>

                <div class="contact-cta__form-group">
                  <label for="mail" class="contact-cta__label"
                    >Email address</label
                  >
                  <input
                    type="email"
                    id="mail"
                    class="contact-cta__input"
                    placeholder="Abc@def.com"
                  />
                </div>

                <div class="contact-cta__form-group">
                  <label for="subject" class="contact-cta__label"
                    >Subject</label
                  >
                  <input
                    type="text"
                    id="subject"
                    class="contact-cta__input"
                    placeholder="This is optional"
                  />
                </div>

                <div class="contact-cta__form-group">
                  <label for="message" class="contact-cta__label"
                    >Message</label
                  >
                  <textarea
                    name="message"
                    id="message"
                    class="contact-cta__message"
                    placeholder="Hi! i’d like to ask about"
                    rows="5"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="btn btn--primary contact-cta__submit"
                >
                  Submit
                </button>
              </form>
            </div>
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
