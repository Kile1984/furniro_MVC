import { images } from "../../../assets/images.js";
import { sprite, icons } from "../../../assets/icons/icons.js";

export const createWishlistView = function () {
  return {
    removeWishlistItem(id) {
      const wishlistItemEl = document.querySelector(
        `.wishlist-page__item[data-id="${id}"]`,
      );

      if (!wishlistItemEl) return;

      wishlistItemEl.remove();
    },

    getStockWarning(stock) {
      if (stock === 0) {
        return `<span class="wishlist-page__quantity-warning wishlist-page__quantity-warning--red">Out of stock</span>`;
      }
      if (stock <= 2) {
        return `<span class="wishlist-page__quantity-warning wishlist-page__quantity-warning--red">Only ${stock} left</span>`;
      }

      if (stock <= 5) {
        return `<span class="wishlist-page__quantity-warning wishlist-page__quantity-warning--orange">Only ${stock} left</span>`;
      }

      return "";
    },

    generateMarkup(data) {
      return `
      <main class="page page--cart">
        <header class="page-hero mb-0">
          <div class="container page-hero__inner">
            <img
              src="${images.logo_crop}"
              alt="Logo-crop"
              class="m-auto"
            />
            <h1 class="page-title page-title--medium page-hero__title">
              Wishlist
            </h1>
            <nav
              class="page-hero__breadcrumb text-center"
              aria-label="Breadcrumb"
            >
              <a href="#/home" class="text-body text-body--medium">Home</a> >
              <span>Wishlist</span>
            </nav>
          </div>
        </header>

        <!-- WISHLIST -->
        <section class="wishlist-page">
          <div class="container wishlist-page__inner">
            <div class="wishlist-page__items-wrapper">
              <div class="wishlist-page__items">
                <div class="wishlist-page__headers">
                  <span>Product</span>
                  <span>Price</span>
                </div>
                <ul class="wishlist-page__item-wrapp">
                  <!-- JS -->
                  ${data
                    .map((p) => {
                      return `
                    <li class="wishlist-page__item" data-id=${p.id}>
                      <div class="wishlist-page__product">
                        <a href="/#/product/${p.id}" class="wishlist-page__link">
                            <img src=${p.image} alt="Aurelia Chair">
                            <span>${p.title}</span>
                        </a>
                      </div>

                      <div class="wishlist-page__price">
                       
                          ${this.getStockWarning(p.stock)}
                          <span> ${p.price}</span>
                          
                      </div>

                      
                    <button class="btn btn--secondary wishlist-page__add-btn ${p.stock === 0 ? "disabled" : ""}"
                    ${p.stock === 0 ? "disabled" : ""}
                    data-id="${p.id}" 
                    data-action="add-to-cart">${p.stock > 0 ? "Add to cart" : "Out of stock"}</button>

                    <button class="wishlist-page__remove-btn" data-id="${p.id}" data-action="remove-from-wishlist">
                        <svg class="icon">
                        <use href="${sprite}#${icons.bin}"></use>
                        </svg>
                    </button>
                </li>
                    `;
                    })
                    .join("")}
                  
                </ul>
              </div>
            </div>
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
      </main>
      `;
    },
  };
};

export const wishListView = createWishlistView();
