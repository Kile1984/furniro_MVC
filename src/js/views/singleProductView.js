import { sprite, icons } from "../../assets/icons/icons.js";

export const createSingleProductView = function () {
  return {
    generateStars(stars) {
      const fullStars = Math.round(stars);
      const emptyStars = 5 - fullStars;

      const fullStarSvg = `
                  <svg class="icon product__icon-star">
                    <use href="${sprite}#${icons.star_full}"></use>
                  </svg>`;
      const emptyStarSvg = `
                  <svg class="icon product__icon-star">
                    <use href="${sprite}#${icons.star_empty}"></use>
                  </svg>
      `;

      return fullStarSvg.repeat(fullStars) + emptyStarSvg.repeat(emptyStars);
    },

    updateQuantity(input, { newValue }) {
      input.value = newValue;
    },

    updateProductQuantityButtons({ newValue, stock }, btn, id) {
      const quantityEl = btn.closest(".product__quantity");
      const incrementBtn = quantityEl.querySelector(
        `[data-action="qt-increment"]`,
      );
      const decrementBtn = quantityEl.querySelector(
        `[data-action="qt-decrement"]`,
      );

      if (newValue === 1) {
        incrementBtn.classList.remove("disabled");
        decrementBtn.classList.add("disabled");
        return;
      }

      if (newValue === stock) {
        incrementBtn.classList.add("disabled");
        decrementBtn.classList.remove("disabled");
        return;
      }
      incrementBtn.classList.remove("disabled");
      decrementBtn.classList.remove("disabled");
    },

    generateMarkup(product) {
      console.log(product);

      return `
    
      <main class="page page--product">
        <!-- BREADCRUMB -->
        <div class="breadcrumb">
          <div class="container">
            <nav class="breadcrumb__nav" aria-label="Breadcrumb">
              <a href="#/" class="breadcrumb__link text-body">Home</a>
              &gt;
              <a href="#/shop" class="breadcrumb__link text-body">Shop</a>
              &gt;
              <span class="breadcrumb__product">${product.title}</span>
            </nav>
          </div>
        </div>

        <!-- PRODUCT -->
        <article class="section product">
          <div class="container product__inner">
            <!-- GALLERY -->
            <section class="product__gallery">
              <div class="product__gallery-thumbnails">
              ${product.images.gallery
                .map((img) => {
                  return `
                 <img
                  src="${img}"
                  alt="${product.title}"
                />
                `;
                })
                .join("")}
               
              </div>

              <div class="product__gallery-main">
                <img
                  src="${product.images.main}"
                 alt="${product.title}"
                />
              </div>
            </section>

            <!-- INFO -->
            <section class="product__info">
              <h1 class="product__name page-title--product">${product.title}</h1>
              <p class="product__price">
                <span class="product__amount ui-title">${product.finalPrice}0</span>
              </p>

              <!-- rating -->
              <div class="product__rating" aria-label="Rated 4 out of 5 stars">
                <div class="product__stars" aria-hidden="true">
                  ${this.generateStars(product.averageRating)}
                </div>

                <div class="product__review-text">
                  <span class="product__review-count">${product.reviews.length}</span>
                  <span class="product__review-label">${product.reviews.length < 2 ? "Customer Review" : "Customer Reviews"}</span>
                </div>
              </div>

              <!-- description -->
               <p class="product__description-short text-xs">
                ${product.longDescription.introduction}
              </p>
              <p class="product__description-short text-xs">
                ${product.longDescription.paragraphs}
              </p>

              <!-- quantity -->
              <div class="product__actions">
                <div class="product__quantity">
                  <button
                    type="button"
                    class="btn product__quantity-btn product__quantity-btn--decrement ${product.quantity === 1 ? "disabled" : ""}"
                    data-action="qt-decrement"
                    data-id=${product.id}
                  >
                    -
                  </button>

                  <input
                    type="number"
                    min="1"
                    value=${product.quantity}
                    id="quantity"
                    class="product__quantity-input"
                     data-action="quantity"
                     data-id=${product.id}
                  />

                  <button
                    type="button"
                    class="btn product__quantity-btn product__quantity-btn--increment ${product.quantity === product.properties.stock ? "disabled" : ""}"
                    data-action="qt-increment"
                    data-id=${product.id}
                  >
                    +
                  </button>
                </div>
                <button type="button" class="btn product__add-to-cart" data-action="add-to-cart" data-id=${product.id}>
                  Add To Cart
                </button>
                <button type="button" class="btn product__compare" data-action="compare" data-id=${product.id}>
                  <span>+</span> Compare
                </button>
              </div>
            </section>

            <!-- META -->
            <dl class="product__meta border-top">
              <div class="product__meta-item">
                <dt class="product__meta-label">SKU</dt>
                <dd>:</dd>
                <dd class="product__meta-value">${product.properties.modelNumber}</dd>
              </div>

              <div class="product__meta-item">
                <dt class="product__meta-label">Category</dt>
                <dd>:</dd>
                <dd>
                  <a href="#" class="product__meta-link">${product.category}</a>
                </dd>
              </div>

              <div class="product__meta-item">
                <dt class="product__meta-label">Tags</dt>
                <dd>:</dd>
                <dd>
                ${product.tags
                  .map((tag) => {
                    return `<a href="#" class="product__meta-link">
                        ${tag},
                      </a>`;
                  })
                  .join("")}
                                  
                </dd>
              </div>

              <div class="product__meta-item">
                <dt class="product__meta-label">Share</dt>
                <dd>:</dd>
                <dd class="product__meta-icons">
                  <a href="https://www.facebook.com/ilija.zikic.1?locale=sr_RS" class="product__meta-link">
                    <svg class="icon product__icon">
                      <use href="${sprite}#${icons.facebook}"></use>
                    </svg>
                  </a>
                  <a href="https://x.com/ilija_zikic" class="product__meta-link">
                    <svg class="icon product__icon">
                      <use href="${sprite}#${icons.twitter}"></use>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/ilija-zikic-640902167/" class="product__meta-link">
                    <svg class="icon product__icon">
                      <use href="${sprite}#${icons.linkedin}"></use>
                    </svg>
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </article>

        <!-- TABS -->
        <section class="section product-tabs border-top">
          <div class="container">
            <div class="product-tabs__nav">
              <button
                type="button"
                class="product-tabs__btn product-tabs__btn--active ui-title ui-title--light"
              >
                Description
              </button>

              <button
                type="button"
                class="product-tabs__btn ui-title ui-title--light"
              >
                Additional Information
              </button>

              <button
                type="button"
                class="product-tabs__btn ui-title ui-title--light"
              >
                Reviews [<span class="prodict-tab__count">${product.reviews.length}</span>]
              </button>
            </div>

            <div class="product-tabs__content">
              <div class="product-tabs__panel product-tabs__panel--description product-tabs__panel--active">
                <p>
                 ${product.longDescription.paragraphs}
                </p>
              </div>

              <div class="product-tabs__panel product-tabs__panel--additional ">
               
                <table>
                  <tr>
                    <td>Sales Package:</td>
                    <td>${product.properties.salesPackage}</td>
                  </tr>

                  ${
                    product.properties.primaryMaterial
                      ? `<tr>
                      <td>Primary Material:</td>
                      <td>${product.properties.primaryMaterial}</td>
                    </tr>`
                      : ""
                  }

                   ${
                     product.properties.maximumLoadCapacity
                       ? `<tr>
                      <td>Maximum load capacity:</td>
                      <td>${product.properties.maximumLoadCapacity}</td>
                    </tr>`
                       : ""
                   }


                    ${
                      product.properties.dimensions
                        ? `<tr>
                      <td>Width:</td>
                      <td>
                        ${product.properties.dimensions.width}
                      </td>
                    </tr>
                    
                    <tr>
                    <td>Height</td>
                      <td>
                        ${product.properties.dimensions.height}
                      </td>
                    </tr>
                    
                    <tr>
                      <td>Depth</td>
                      <td>
                      ${product.properties.dimensions.depth}
                      </td>
                    </tr>

                      <tr>
                      <td>Weight</td>
                      <td>
                      ${product.properties.dimensions.weight}
                      </td>
                    </tr>
                    `
                        : ""
                    }
                 
                </table>
              </div>

              <div class="product-tabs__panel product-tabs__panel--reviews ">
              ${product.reviews
                .map((r) => {
                  return `
                  <div class="review">
                    <div class="review__header">
                      <h4 class="review__author">[${r.rating}] ${r.author} </h4>
                    </div>

                    <div class="review__date">${r.date}</div>

                    <div class="review__comment">
                      <i>${r.comment}</i>
                    </div>
                </div>
                `;
                })
                .join("")}
              </div>
            </div>
          </div>
        </section>

        <!-- PRODUCTS -->
        <section class="section products">
          <div class="container">
            <h2 class="section-title products__main-title text-center">
              Related Products
            </h2>

            <div class="products__grid">
              <!-- 1 -->
              <article class="product-card">
                <a href="product.html" class="product-card__stretched-link"></a>
                <div class="product-card__overlay">
                  <button
                    type="button"
                    class="btn btn--secondary product-card__btn"
                  >
                    Add to cart
                  </button>

                  <a
                    href="product.html"
                    class="btn btn--outline product-card__view"
                  >
                    View details
                  </a>

                  <div class="product-card__actions">
                    <button type="button" class="product-card__action">
                      <svg class="icon">
                        <use href="/assets/icons/sprite.svg#icon-share2"></use>
                      </svg>
                      <span>Share</span>
                    </button>
                    <button type="button" class="product-card__action">
                      <svg class="icon">
                        <use href="/assets/icons/sprite.svg#icon-tab"></use>
                      </svg>
                      <span>Compare</span>
                    </button>
                    <button type="button" class="product-card__action">
                      <svg class="icon">
                        <use href="/assets/icons/sprite.svg#icon-heart"></use>
                      </svg>
                      <span>Like</span>
                    </button>
                  </div>
                </div>

                <div class="product-card__image-wrapper">
                  <img
                    src="./assets/images/product-syltherine.png"
                    alt="Syltherine"
                    class="product-card__image"
                  />
                  <span class="product-card__badge product-card__badge--red"
                    >-30%</span
                  >
                </div>

                <div class="product-card__content">
                  <h3 class="product-card__title">Syltherine</h3>
                  <p class="product-card__description">Stylish cafe chair</p>
                  <div class="product-card__price">
                    <span class="product-card__price-current"
                      >Rp 2.500.000</span
                    >
                    <span class="product-card__price-old">Rp 3.500.000</span>
                  </div>
                </div>
              </article>

              <!-- 2 -->
              <article class="product-card">
                <a href="product.html" class="product-card__stretched-link"></a>
                <div class="product-card__overlay">
                  <button
                    type="button"
                    class="btn btn--secondary product-card__btn"
                  >
                    Add to cart
                  </button>
                  <a
                    href="product.html"
                    class="btn btn--outline product-card__view"
                    >View details</a
                  >
                  <div class="product-card__actions">
                    <button type="button" class="product-card__action">
                      <svg class="icon">
                        <use href="/assets/icons/sprite.svg#icon-share2"></use>
                      </svg>
                      <span>Share</span>
                    </button>
                    <button type="button" class="product-card__action">
                      <svg class="icon">
                        <use href="/assets/icons/sprite.svg#icon-tab"></use>
                      </svg>
                      <span>Compare</span>
                    </button>
                    <button type="button" class="product-card__action">
                      <svg class="icon">
                        <use href="/assets/icons/sprite.svg#icon-heart"></use>
                      </svg>
                      <span>Like</span>
                    </button>
                  </div>
                </div>

                <div class="product-card__image-wrapper">
                  <img
                    src="./assets/images/product-leviosa.png"
                    alt="Leviosa"
                    class="product-card__image"
                  />
                </div>

                <div class="product-card__content">
                  <h3 class="product-card__title">Leviosa</h3>
                  <p class="product-card__description">Stylish cafe chair</p>
                  <div class="product-card__price">
                    <span class="product-card__price-current"
                      >Rp 2.500.000</span
                    >
                  </div>
                </div>
              </article>

              <!-- 3 -->
              <article class="product-card">
                <a href="product.html" class="product-card__stretched-link"></a>
                <div class="product-card__overlay">
                  <button
                    type="button"
                    class="btn btn--secondary product-card__btn"
                  >
                    Add to cart
                  </button>
                  <a
                    href="product.html"
                    class="btn btn--outline product-card__view"
                    >View details</a
                  >
                  <div class="product-card__actions">
                    <button type="button" class="product-card__action">
                      <svg class="icon">
                        <use href="./assets/icons/sprite.svg#icon-share2"></use>
                      </svg>
                      <span>Share</span>
                    </button>
                    <button type="button" class="product-card__action">
                      <svg class="icon">
                        <use href="/assets/icons/sprite.svg#icon-tab"></use>
                      </svg>
                      <span>Compare</span>
                    </button>
                    <button type="button" class="product-card__action">
                      <svg class="icon">
                        <use href="/assets/icons/sprite.svg#icon-heart"></use>
                      </svg>
                      <span>Like</span>
                    </button>
                  </div>
                </div>

                <div class="product-card__image-wrapper">
                  <img
                    src="./assets/images/product-lolito.png"
                    alt="Lolito"
                    class="product-card__image"
                  />
                  <span class="product-card__badge product-card__badge--red"
                    >-50%</span
                  >
                </div>

                <div class="product-card__content">
                  <h3 class="product-card__title">Lolito</h3>
                  <p class="product-card__description">Luxury big sofa</p>
                  <div class="product-card__price">
                    <span class="product-card__price-current"
                      >Rp 7.000.000</span
                    >
                    <span class="product-card__price-old">Rp 14.000.000</span>
                  </div>
                </div>
              </article>

              <!-- 4 -->
              <article class="product-card">
                <a href="product.html" class="product-card__stretched-link"></a>
                <div class="product-card__overlay">
                  <button
                    type="button"
                    class="btn btn--secondary product-card__btn"
                  >
                    Add to cart
                  </button>
                  <a
                    href="product.html"
                    class="btn btn--outline product-card__view"
                    >View details</a
                  >
                  <div class="product-card__actions">
                    <button type="button" class="product-card__action">
                      <svg class="icon">
                        <use href="./assets/icons/sprite.svg#icon-share2"></use>
                      </svg>
                      <span>Share</span>
                    </button>
                    <button type="button" class="product-card__action">
                      <svg class="icon">
                        <use href="/assets/icons/sprite.svg#icon-tab"></use>
                      </svg>
                      <span>Compare</span>
                    </button>
                    <button type="button" class="product-card__action">
                      <svg class="icon">
                        <use href="/assets/icons/sprite.svg#icon-heart"></use>
                      </svg>
                      <span>Like</span>
                    </button>
                  </div>
                </div>

                <div class="product-card__image-wrapper">
                  <img
                    src="./assets/images/product-respira.png"
                    alt="Respira"
                    class="product-card__image"
                  />
                  <span class="product-card__badge product-card__badge--green"
                    >New</span
                  >
                </div>

                <div class="product-card__content">
                  <h3 class="product-card__title">Respira</h3>
                  <p class="product-card__description">Outdoor bar table</p>
                  <div class="product-card__price">
                    <span class="product-card__price-current">Rp 500.000</span>
                  </div>
                </div>
              </article>

              <button class="btn btn--secondary products__btn-load-more">
                Show More
              </button>
            </div>
          </div>
        </section>
      </main>
    
      `;
    },
  };
};

export const singleProductView = createSingleProductView();
