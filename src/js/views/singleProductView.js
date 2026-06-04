import { sprite, icons } from "../../assets/icons/icons.js";

export const createSingleProductView = function () {
  return {
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
              ${product.images.gallery.map((img) => {
                return `
                 <img
                  src="${img}"
                  alt="${product.title}"
                />
                `;
              })}
               
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
                  <svg class="icon product__icon-star">
                    <use href="${sprite}#${icons.star_full}"></use>
                  </svg>
                   <svg class="icon product__icon-star">
                    <use href="${sprite}#${icons.star_full}"></use>
                  </svg>
                   <svg class="icon product__icon-star">
                    <use href="${sprite}#${icons.star_full}"></use>
                  </svg>
                   <svg class="icon product__icon-star">
                    <use href="${sprite}#${icons.star_full}"></use>
                  </svg>
                   <svg class="icon product__icon-star">
                    <use href="${sprite}#${icons.star_empty}"></use>
                  </svg>
                </div>

                <div class="product__review-text">
                  <span class="product__review-count">5</span>
                  <span class="product__review-label">Customer Reviews</span>
                </div>
              </div>

              <!-- description -->
              <p class="product__description-short text-xs">
                ${product.shortDescription}
              </p>

              <!-- size -->
              <div class="product__size">
                <p class="product__label">Size</p>
                <div class="product__size-options">
                  <label class="product__size-option product__size-option--s">
                    <input type="radio" name="size" value="s" />
                    <span class="product__size-label">S</span>
                  </label>

                  <label class="product__size-option product__size-option--l">
                    <input type="radio" name="size" value="l" />

                    <span class="product__size-label">L</span>
                  </label>

                  <label class="product__size-option product__size-option--xl">
                    <input type="radio" name="size" value="xl" />

                    <span class="product__size-label">XL</span>
                  </label>
                </div>
              </div>
              <!-- quantity -->
              <div class="product__actions">
                <div class="product__quantity">
                  <button
                    type="button"
                    class="btn product__quantity-btn product__quantity-btn--decrement"
                    data-action="decrement"
                  >
                    -
                  </button>

                  <input
                    type="number"
                    min="1"
                    value="1"
                    id="quantity"
                    class="product__quantity-input"
                  />

                  <button
                    type="button"
                    class="btn product__quantity-btn product__quantity-btn--increment"
                    data-action="increment"
                    data-input="quantity"
                  >
                    +
                  </button>
                </div>
                <button type="button" class="btn product__add-to-cart" data-action="add-to-cart">
                  Add To Cart
                </button>
                <button type="button" class="btn product__compare" data-action="compare">
                  <span>+</span> Compare
                </button>
              </div>
            </section>

            <!-- META -->
            <dl class="product__meta border-top">
              <div class="product__meta-item">
                <dt class="product__meta-label">SKU</dt>
                <dd>:</dd>
                <dd class="product__meta-value">SS001</dd>
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
                  <a href="#" class="product__meta-link">${product.category}</a>
                 
                </dd>
              </div>

              <div class="product__meta-item">
                <dt class="product__meta-label">Share</dt>
                <dd>:</dd>
                <dd class="product__meta-icons">
                  <a href="#" class="product__meta-link">
                    <svg class="icon product__icon">
                      <use href="/assets/icons/sprite.svg#icon-facebook2"></use>
                    </svg>
                  </a>
                  <a href="#" class="product__meta-link">
                    <svg class="icon product__icon">
                      <use href="/assets/icons/sprite.svg#icon-twitter"></use>
                    </svg>
                  </a>
                  <a href="#" class="product__meta-link">
                    <svg class="icon product__icon">
                      <use href="/assets/icons/sprite.svg#icon-linkedin"></use>
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
                Reviews [<span class="prodict-tab__count">5</span>]
              </button>
            </div>

            <div class="product-tabs__content">
              <div class="product-tabs__panel product-tabs__panel--active">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Delectus molestias, quibusdam ea dicta ducimus repudiandae
                  eaque obcaecati quis illum inventore autem, accusantium neque
                  laborum adipisci.
                </p>
                <p>
                  Quibusdam autem unde iure dignissimos! Ab facilis praesentium
                  sed dolor error cupiditate iure voluptatum eaque dolorem,
                  maxime natus unde eveniet reiciendis, voluptates quibusdam
                  blanditiis autem doloribus quam assumenda nam rem
                  necessitatibus. Libero deleniti aliquam vel?
                </p>
              </div>

              <div class="product-tabs__panel">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Delectus molestias, quibusdam ea dicta ducimus repudiandae
                  eaque obcaecati quis illum inventore autem, accusantium neque
                  laborum adipisci.
                </p>
                <p>
                  Quibusdam autem unde iure dignissimos! Ab facilis praesentium
                  sed dolor error cupiditate iure voluptatum eaque dolorem,
                  maxime natus unde eveniet reiciendis, voluptates quibusdam
                  blanditiis autem doloribus quam assumenda nam rem
                  necessitatibus. Libero deleniti aliquam vel?
                </p>
              </div>

              <div class="product-tabs__panel">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Delectus molestias, quibusdam ea dicta ducimus repudiandae
                  eaque obcaecati quis illum inventore autem, accusantium neque
                  laborum adipisci.
                </p>
                <p>
                  Quibusdam autem unde iure dignissimos! Ab facilis praesentium
                  sed dolor error cupiditate iure voluptatum eaque dolorem,
                  maxime natus unde eveniet reiciendis, voluptates quibusdam
                  blanditiis autem doloribus quam assumenda nam rem
                  necessitatibus. Libero deleniti aliquam vel?
                </p>
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
