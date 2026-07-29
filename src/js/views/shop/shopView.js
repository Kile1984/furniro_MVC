import { images } from "../../../assets/images.js";
import { sprite, icons } from "../../../assets/icons/icons.js";
import { productCardsView } from "../shared/productCardsView.js";
import { filterDrawerView } from "./filterDrawerView.js";
import { paginationView } from "./paginationView.js";

export const createShopView = function (appEl) {
  return {
    setGrid(columns) {
      const grid = document.querySelector(".products__grid");

      grid.classList.toggle("products__grid--2", columns === 2);
    },

    scrollToProducts() {
      const grid = document.querySelector(".products__grid");

      grid.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    },

    generateMarkup(data) {
      return `
      <!-- PAGE HEADING SHOP -->
      <main class="page page--shop">
        <header class="page-hero mb-0">
          <div class="container page-hero__inner">
            <img
              src="${images.logo_crop}"
              alt="Logo-crop"
              class="m-auto"
            />
            <h1 class="page-title page-title--medium page-hero__title">Shop</h1>
            <nav
              class="page-hero__breadcrumb text-center"
              aria-label="Breadcrumb"
            >
              <a href="index.html" class="text-body text-body--medium">Home</a>
              >
              <span>Shop</span>
            </nav>
          </div>
        </header>

        <!-- TOOLBAR -->
        <div class="toolbar">
          <div class="container toolbar__inner">
            <div class="toolbar__group toolbar__group--start">
              <button class="toolbar__btn toolbar__btn--filter" data-action="open-filter">
                <svg class="icon">
                  <use href="${sprite}#${icons.equalizer}"></use>
                </svg>
                <span class="toolbar__btn--text">Filter</span>
              </button>
              <button class="toolbar__btn toolbar__btn--grid-4" data-action="grid-4">
                <svg class="icon">
                     <use href="${sprite}#${icons.grid1}"></use>
                </svg>
              </button>
              <button class="toolbar__btn toolbar__btn--grid-2" data-action="grid-2">
                <svg class="icon">
                  <use href="${sprite}#${icons.grid}"></use>
                </svg>
              </button>
            </div>
            <div class="toolbar__group toolbar__group--center">
              <span class="toolbar__results">Showing 1–16 of 32 results</span>
            </div>
            <div class="toolbar__group toolbar__group--end">
              <div class="toolbar__control">
                <label for="view" class="toolbar__label pr-sm">Show</label>
                <select class="toolbar__select toolbar__select--show" id="view">
                  <option value="">16</option>
                  <option value="">32</option>
                </select>
              </div>

              <div class="toolbar__control">
                <label for="sort" class="toolbar__label pr-sm">Sort by</label>
                <select class="toolbar__select toolbar__select--sort" id="sort">
                  <option value="">Default</option>
                  <option value="">Price: Lower to Hight</option>
                  <option value="">Price: Hight to Low</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <!-- PRODUCT -->
        <section class="section products">
          <div class="container">
            <h2 class="section-title products__main-title text-center">
              Our Product
            </h2>
            
              <div class="products__grid">
                 ${productCardsView.generateMarkup(data.products)}
                 ${paginationView.generateMarkup(data)}
              </div>

             
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
                Hight Quality
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

     >

      ${filterDrawerView.generateMarkup()}
      `;
    },
  };
};

export const shopView = createShopView();
