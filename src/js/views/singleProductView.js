import { sprite, icons } from "../../assets/icons/icons.js";
import { productCardsView } from "./shared/productCardsView.js";

export const createSingleProductView = function () {
  return {
    addToCartTimeout: null,
    isAdding: false,

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

    getQuantityInputById(id) {
      return document.querySelector(
        `.product__quantity[data-id="${id}"] .product__quantity-input`,
      );
    },

    updateProductQuantityButtons({ newValue, stock }, element) {
      const quantityEl = element.closest(".product__quantity");
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

    updateQuantityValue({ id, quantity }) {
      const productInput = document.querySelector(
        `.product__quantity-input[data-id=${id}]`,
      );
      productInput.value = quantity;
    },

    generateCompareButton(isInCompare, id) {
      return isInCompare
        ? `
      <button type="button" class="btn product__compare in-comparison" data-action="remove-from-compare-single" data-id=${id}>
                  <span>✓</span>  Compared
                </button>
      `
        : `
        <button type="button" class="btn product__compare" data-action="add-to-compare-single" data-id=${id}>
                  <span class="product__btn-icon">+</span>
                  <span class="product__btn-label">Compare</span>
                   
       </button>
        `;
    },

    updateCompareButton(id, isInCompare) {
      const compareBtnEl = document.querySelector(".product__compare");

      if (!compareBtnEl) return;

      const [, , currentId] = window.location.hash.split("/");

      if (currentId !== id) return;

      if (isInCompare) {
        compareBtnEl.dataset.action = "remove-from-compare-single";
        compareBtnEl.innerHTML = ` <span>✓</span> Compared`;
        compareBtnEl.classList.add("in-comparison");
        return;
      }

      compareBtnEl.dataset.action = "add-to-compare-single";
      compareBtnEl.innerHTML = ` <span>+</span> Compare`;
      compareBtnEl.classList.remove("in-comparison");
    },

    showAddedToCart() {
      if (this.isAdding) return;

      const btn = document.querySelector(".product__add-to-cart");

      if (!btn) return;

      const btnIcon = btn.querySelector(".product__btn-icon");
      const btnTLabel = btn.querySelector(".product__btn-label");

      this.isAdding = true;
      btnIcon.textContent = "✓";
      btnTLabel.textContent = "Added";
      btn.classList.add("added");

      this.addToCartTimeout = setTimeout(() => {
        btnIcon.textContent = "";
        btnTLabel.textContent = "Add to cart";
        btn.classList.remove("added");

        this.isAdding = false;
      }, 2000);
    },

    generateMarkup(product) {
      console.log(product.relatedProducts);
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
                <div class="product__quantity" data-id=${product.id}>
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
                     data-input="quantity"
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
                <button type="button" class="btn product__add-to-cart"  data-action="add-to-cart" data-id=${product.id}>
                <span class="product__btn-icon"></span>
                <span class="product__btn-label">Add To Cart</span>
                </button>
                ${this.generateCompareButton(product.isInCompare, product.id)}
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
                  <a href="#/category/${product.categorySlug}" class="product__meta-link">${product.category}</a>
                </dd>
              </div>

              <div class="product__meta-item">
                <dt class="product__meta-label">Tags</dt>
                <dd>:</dd>
                <dd>
                ${product.tags
                  .map((tag) => {
                    return `<span class="product__meta-link">
                        ${tag},
                      </span>`;
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
          
            ${productCardsView.generateMarkup(product.relatedProducts)}

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
