import { images } from "../../../assets/images.js";
import { sprite, icons } from "../../../assets/icons/icons.js";
import { productCardsView } from "../shared/productCardsView.js";
import { filterDrawerView } from "./filterDrawerView.js";

export const createShopView = function (appEl) {
  return {
    generateMarkup(products) {
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
                <span>Filter</span>
              </button>
              <button class="toolbar__btn toolbar__btn--grid-4">
                <svg class="icon">
                     <use href="${sprite}#${icons.grid1}"></use>
                </svg>
              </button>
              <button class="toolbar__btn toolbar__btn--grid-2">
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
                 ${productCardsView.generateMarkup(products)}
                 <button class="btn btn--secondary products__btn-load-more">
                  Show More
                  </button>
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

      <!-- FILTER DRAWER -->
      <div class="filter">
        <div class="filter-overlay"></div>

        <aside
          class="filter-drawer"
          role="dialog"
          arial-modal="true"
          aria-labelledby="filter-title"
        >
          <div class="filter-drawer__header">
            <h3 class="filter-drawer__title">Filter</h3>
            <button type="button" class="filter-drawer__close" data-action="close-filter">&times;</button>
          </div>

          <form class="filter-form">
            <div class="filter-form__body">
              <!-- Category -->
              <div class="filter-form__group">
                <h4 class="filter-form__title">Category</h4>
                <label class="filter-form__option">
                  <input type="checkbox" name="category" value="chairs" />
                  <span class="filter-form__box"></span>
                  <span class="filter-form__label">Chairs</span>
                </label>

                <label class="filter-form__option">
                  <input type="checkbox" name="category" value="sofa" />
                  <span class="filter-form__box"></span>
                  <span class="filter-form__label">Sofa</span>
                </label>

                <label class="filter-form__option">
                  <input type="checkbox" name="category" value="tables" />
                  <span class="filter-form__box"></span>
                  <span class="filter-form__label">Tables</span>
                </label>
              </div>

              <!-- Price -->
              <div class="filter-form__group">
                <h4 class="filter-form__title">Price</h4>
                <div class="filter-form__price">
                  <input
                    type="number"
                    name="price-min"
                    placeholder="Min"
                    min="0"
                  />
                  <span> - </span>
                  <input
                    type="number"
                    name="price-max"
                    placeholder="Max"
                    min="0"
                  />
                </div>
              </div>

              <!-- Size -->
              <div class="filter-form__group">
                <h4 class="filter-form__title">Size</h4>
                <label class="filter-form__option">
                  <input type="checkbox" name="size" value="small" />
                  <span class="filter-form__box"></span>
                  <span class="filter-form__label">Small</span>
                </label>

                <label class="filter-form__option">
                  <input type="checkbox" name="size" value="medium" />
                  <span class="filter-form__box"></span>
                  <span class="filter-form__label">Medium</span>
                </label>

                <label class="filter-form__option">
                  <input type="checkbox" name="size" value="large" />
                  <span class="filter-form__box"></span>
                  <span class="filter-form__label">Large</span>
                </label>
              </div>

              <!-- Rating -->
              <div class="filter-form__group">
                <h4 class="filter-form__title">Rating</h4>

                <label class="filter-form__option">
                  <input type="radio" name="rating" value="4" />
                  <span class="filter-form__radio"></span>
                  <span class="filter-form__label"> 4★ & up</span>
                </label>

                <label class="filter-form__option">
                  <input type="radio" name="rating" value="3" />
                  <span class="filter-form__radio"></span>
                  <span class="filter-form__label">3★ & up</span>
                </label>
              </div>

              <!-- Color -->
              <div class="filter-form__group">
                <h4 class="filter-form__title">Color</h4>
                <div class="filter-form__colors">
                  <label class="filter-form__color">
                    <input
                      type="checkbox"
                      name="color"
                      value="black"
                      class="filter-form__color-input"
                    />
                    <span
                      class="filter-form__dot filter-form__dot--black"
                    ></span>
                  </label>

                  <label class="filter-form__color">
                    <input
                      type="checkbox"
                      name="color"
                      value="gray"
                      class="filter-form__color-input"
                    />
                    <span
                      class="filter-form__dot filter-form__dot--gray"
                    ></span>
                  </label>

                  <label class="filter-form__color">
                    <input
                      type="checkbox"
                      name="color"
                      value="beige"
                      class="filter-form__color-input"
                    />
                    <span
                      class="filter-form__dot filter-form__dot--beige"
                    ></span>
                  </label>
                </div>
              </div>
            </div>

            <div class="filter-drawer__footer">
              <button class="btn btn--secondary">Reset</button>
              <button class="btn btn--primary">Apply</button>
            </div>
          </form>
        </aside>
      </div>

      ${filterDrawerView.generateMArkup()}
      `;
    },
  };
};
