export const createComparisonView = function () {
  return {
    generateMarkup(products) {
      return products.map((p) => {
        console.log(p);
        return `
       <div class="comparison">
        <div class="container comparison__table">
          <!-- HEADER -->
          <div class="comparison__row comparison__row--header">
            <div class="comparison__info">
              <p class="comparison__info-title">
                Go to Product page for more products
              </p>
              <a class="btn comparison__info-btn" href="#/shop">View More</a>
              <div class="comparison__scroll-hint">
                <svg class="icon comparison__icon-swipe">
                  <use
                    href="/assets/icons/sprite.svg#icon-one-finger-swipe-horizontally"
                  ></use>
                </svg>
              </div>
            </div>

            <div class="comparison__product">
              <img
                src="${p.images.main}"
                alt="${p.title}"
                class="comparison__product-image"
              />
              <a href="#/product/${p.id}" class="ui-title comparison__product-title"
                >${p.title}</a
              >
              <p class="comparison__price">${p.finalPrice}</p>
              <div class="comparison__rating">
                <span class="comparison__rating-value">4.7</span>
                <span class="comparison__rating-stars">
                  <svg class="icon">
                    <use href="/assets/icons/sprite.svg#icon-star-full"></use>
                  </svg>
                  <svg class="icon">
                    <use href="/assets/icons/sprite.svg#icon-star-full"></use>
                  </svg>
                  <svg class="icon">
                    <use href="/assets/icons/sprite.svg#icon-star-full"></use>
                  </svg>
                  <svg class="icon">
                    <use href="/assets/icons/sprite.svg#icon-star-full"></use>
                  </svg>
                  <svg class="icon">
                    <use href="/assets/icons/sprite.svg#icon-star-full"></use>
                  </svg>
                </span>
                <span class="comparison__rating-review"> 204 Reviews </span>
              </div>
            </div>

            <div class="comparison__product">
              <img
                src="./assets/images/products/chairs/chair-01/chair-01-1.png"
                alt="Chair"
                class="comparison__product-image"
              />
              <a href="product.html" class="ui-title comparison__product-title"
                >Chair Asgaard
              </a>
              <p class="comparison__price">250,000.00</p>
              <div class="comparison__rating">
                <span class="comparison__rating-value">4.7</span>
                <span class="comparison__rating-stars">
                  <svg class="icon">
                    <use href="/assets/icons/sprite.svg#icon-star-full"></use>
                  </svg>
                  <svg class="icon">
                    <use href="/assets/icons/sprite.svg#icon-star-full"></use>
                  </svg>
                  <svg class="icon">
                    <use href="/assets/icons/sprite.svg#icon-star-full"></use>
                  </svg>
                  <svg class="icon">
                    <use href="/assets/icons/sprite.svg#icon-star-full"></use>
                  </svg>
                  <svg class="icon">
                    <use href="/assets/icons/sprite.svg#icon-star-full"></use>
                  </svg>
                </span>
                <span class="comparison__rating-review"> 204 Reviews </span>
              </div>
            </div>

            <div class="comparison__add">
              <label
                for="product-3"
                class="comparison__add-label visually-hidden"
              >
                Add a Product
              </label>
              <div class="comparison__add-select-wrapper">
                <select
                  name="product-3"
                  id="product-3"
                  class="comparison__select"
                  data-column="3"
                >
                  <option value="" selected disabled>Choose a product</option>
                  <option value="asgaard-sofa">Asgaard Sofa</option>
                  <option value="asgaard-sofa">Asgaard Sofa</option>
                  <option value="asgaard-sofa">Asgaard Sofa</option>
                  <option value="asgaard-sofa">Asgaard Sofa</option>
                </select>
              </div>
            </div>
          </div>

          <!-- SECTION -->
          <div class="comparison__row comparison__row--section">
            <div class="comparison__section">General</div>
            <div class="comparison__section-empty"></div>
            <div class="comparison__section-empty"></div>
            <div class="comparison__section-empty"></div>
          </div>

          <!-- SPEC -->
          <div class="comparison__row">
            <div class="comparison__label">Sales<wbr />Package</div>

            <div class="comparison__spec" data-label="Sales Package">
              1 sectional sofa
            </div>

            <div class="comparison__spec" data-label="Sales Package">
              1 three seater
            </div>

            <div class="comparison__spec" data-label="Sales Package">-</div>
          </div>

          <!-- SPEC -->
          <div class="comparison__row">
            <div class="comparison__label">Model<wbr /> Number</div>

            <div class="comparison__spec" data-label="Model Number">
              TFCBLIGRBL6SRHS
            </div>

            <div class="comparison__spec" data-label="Model Number">
              DTUBLIGRBL568
            </div>

            <div class="comparison__spec" data-label="Model Number">-</div>
          </div>

          <!-- SPEC -->
          <div class="comparison__row">
            <div class="comparison__label">Secondary<wbr /> Material</div>

            <div class="comparison__spec" data-label="Secondary Material">
              Solid Wood
            </div>

            <div class="comparison__spec" data-label="Secondary Material">
              Solid Wood
            </div>

            <div class="comparison__spec" data-label="Secondary Material">
              -
            </div>
          </div>

          <!-- SPEC -->
          <div class="comparison__row">
            <div class="comparison__label">Configur<wbr /><wbr />ation</div>

            <div class="comparison__spec" data-label="Configuration">
              L-shaped
            </div>

            <div class="comparison__spec" data-label="Configuration">
              L-shaped
            </div>

            <div class="comparison__spec" data-label="Configuration">-</div>
          </div>

          <!-- SECTION -->
          <div class="comparison__row">
            <div class="comparison__section">Product</div>
            <div class="comparison__section-empty"></div>
            <div class="comparison__section-empty"></div>
            <div class="comparison__section-empty"></div>
          </div>

          <!-- SPEC -->
          <div class="comparison__row">
            <div class="comparison__label">Filling<wbr /> Material</div>

            <div class="comparison__spec" data-label="Filling Material">
              Foam
            </div>

            <div class="comparison__spec" data-label="Filling Material">
              Matte
            </div>

            <div class="comparison__spec" data-label="Filling Material">-</div>
          </div>

          <!-- SPEC -->
          <div class="comparison__row">
            <div class="comparison__label">
              Maximum <wbr />Load <wbr />Capacity
            </div>

            <div class="comparison__spec" data-label="Maximum Load Capacity">
              280 KG
            </div>

            <div class="comparison__spec" data-label="Maximum Load Capacity">
              300 KG
            </div>

            <div class="comparison__spec" data-label="Maximum Load Capacity">
              -
            </div>
          </div>

          <!-- SPEC -->
          <div class="comparison__row">
            <div class="comparison__label">
              Origin of<wbr /> Manufac<wbr />ture
            </div>

            <div class="comparison__spec" data-label="Origin of Manufacture">
              India
            </div>

            <div class="comparison__spec" data-label="Origin of Manufacture">
              India
            </div>

            <div class="comparison__spec" data-label="Origin of Manufacture">
              -
            </div>
          </div>

          <!-- SECTION -->
          <div class="comparison__row">
            <div class="comparison__section">Dimension</div>
            <div class="comparison__section-empty"></div>
            <div class="comparison__section-empty"></div>
            <div class="comparison__section-empty"></div>
          </div>

          <!-- SPEC -->
          <div class="comparison__row">
            <div class="comparison__label">Width</div>

            <div class="comparison__spec" data-label="Width">265.32 cm</div>

            <div class="comparison__spec" data-label="Width">265.32 cm</div>

            <div class="comparison__spec" data-label="Width">-</div>
          </div>

          <!-- SPEC -->
          <div class="comparison__row">
            <div class="comparison__label">Height</div>

            <div class="comparison__spec" data-label="Height">76 cm</div>

            <div class="comparison__spec" data-label="Height">76 cm</div>

            <div class="comparison__spec" data-label="Height">-</div>
          </div>

          <!-- SPEC -->
          <div class="comparison__row">
            <div class="comparison__label">Depth</div>

            <div class="comparison__spec" data-label="Depth">167.76 cm</div>

            <div class="comparison__spec" data-label="Depth">167.76 cm</div>

            <div class="comparison__spec" data-label="Depth">-</div>
          </div>

          <!-- SPEC -->
          <div class="comparison__row">
            <div class="comparison__label">Weight</div>

            <div class="comparison__spec" data-label="Weight">45 KG</div>

            <div class="comparison__spec" data-label="Weight">65 KG</div>

            <div class="comparison__spec" data-label="Weight">-</div>
          </div>

          <!-- SECTION -->
          <div class="comparison__row">
            <div class="comparison__section">Warranty</div>
            <div class="comparison__section-empty"></div>
            <div class="comparison__section-empty"></div>
            <div class="comparison__section-empty"></div>
          </div>

          <!-- SPEC -->
          <div class="comparison__row">
            <div class="comparison__label">Warranty<wbr /> Summary</div>

            <div class="comparison__spec" data-label="Warranty Summar">
              1 Year Manufacturing Warranty
            </div>

            <div class="comparison__spec" data-label="Warranty Summar">
              1.2 Year Manufacturing Warranty
            </div>

            <div class="comparison__spec" data-label="Warranty Summar">-</div>
          </div>

          <!-- SPEC -->
          <div class="comparison__row">
            <div class="comparison__label"></div>

            <div class="comparison__spec text-center">
              <button class="btn btn--primary mt-xl comparison__btn">
                Add To Cart
              </button>
            </div>

            <div class="comparison__spec text-center">
              <button class="btn btn--primary mt-xl comparison__btn">
                Add To Cart
              </button>
            </div>

            <div class="comparison__spec"></div>
          </div>
        </div>
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
            `;
      });
    },
  };
};
