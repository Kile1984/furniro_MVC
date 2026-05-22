import { images } from "../../../assets/images.js";

export const createAboutView = function () {
  return {
    generateMarkup() {
      return `  
      <!-- PAGE HEADING SHOP -->
      <main class="page page--about">
        <header class="page-hero">
          <div class="container page-hero__inner">
            <img
              src="${images.logo_crop}"
              alt="Logo-crop"
              class="m-auto"
            />
            <h1 class="page-title page-title--medium page-hero__title">
              About
            </h1>
            <nav
              class="page-hero__breadcrumb text-center"
              aria-label="Breadcrumb"
            >
              <a href="index.html" class="text-body text-body--medium">Home</a>
              >
              <span>About</span>
            </nav>
          </div>
        </header>

        <!-- ABOUT STORY -->
        <section class="about-story">
          <div class="container about-story__inner">
            <img
               src="${images.about_02}"
              alt="About"
              class="about-story__img"
            />
            <div class="about-story__text">
              <h2 class="section-title about-story__title">
                Founded with the idea of blending functionality and aesthetics
              </h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident accusamus voluptatum eum inventore nulla esse sed
                dolor exercitationem tempore? Perspiciatis repellat nisi odio,
                explicabo omnis magnam! Optio voluptatibus dicta architecto.
              </p>
              <p>
                Laudantium, voluptatum et facilis repellendus dolorem officiis
                eius quaerat consequatur dolore asperiores molestias quia
                doloremque harum cum sunt quidem nobis. Ut aperiam mollitia quod
                ad esse suscipit dolores obcaecati quaerat!
              </p>
            </div>
          </div>
        </section>

        <!-- FEATURES -->
        <section class="section features">
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

        <!-- CTA -->
        <section class="section about-cta text-center">
          <div class="container">
            <h3 class="section-title about-cta__title">
              Discover Our Collection
            </h3>

            <a href="#/shop">
              <button class="btn btn--primary">Shop Now</button></a
            >
          </div>
        </section>
      </main>
  `;
    },
  };
};
