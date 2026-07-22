import { sprite, icons } from "../../../assets/icons/icons.js";
import { images } from "../../../assets/images.js";
import { generateStars } from "../../views/shared/ratingView.js";
export const createComparisonView = function () {
  return {
    generateAddProducts(allProducts) {
      return `
        <div class="comparison__add">
          <label
            for="product-3"
            class="comparison__add-label visually-hidden"
          >
            Add a Product
          </label>
          <div class="comparison__add-select-wrapper">
            <select
              name="add-product"
              id="add-product"
              class="comparison__select"
              
            >
              <option value="" selected disabled>Choose a product</option>
              ${allProducts
                .map((product) => {
                  return `
                <option value="${product.title}" data-id="${product.id}"> 
                <span>${product.title}</span> - 
                <span>${product.finalPrice}</span>

                </option>
                `;
                })
                .join("")}
             
            </select>
          </div>
        </div>
  `;
    },

    generateEmptyRow() {
      return `
     
           <div class="comparison__spec">
             -
           </div>

          `;
    },

    generateHeader(products) {
      return products
        .map(
          (p) =>
            `
            <div class="comparison__product">
            <button class="comparison__product-remove" data-id="${p.id}" data-action="remove-from-compare">&cross;</button>  
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
                <span class="comparison__rating-value">${p.rating}</span>
                <span class="comparison__rating-stars">
                  ${generateStars(p.rating)}
                </span>
                <span class="comparison__rating-review"> 204 Reviews </span>
              </div>
            </div>
            `,
        )
        .join("");
    },

    generateSection(title) {
      return `

        <!-- SECTION -->
          <div class="comparison__row">
            <div class="comparison__section">${title}</div>
            <div class="comparison__section-empty"></div>
            <div class="comparison__section-empty"></div>
            <div class="comparison__section-empty"></div>
          </div>
      `;
    },

    generateRow(label, property, products) {
      const emptySlots = 3 - products.length;
      const keys = property.split(".");

      return `
       <!-- SPEC -->
          <div class="comparison__row">
            <div class="comparison__label">${label}</div>

            ${products
              .map((p) => {
                let value = p.properties;

                for (const key of keys) {
                  value = value[key];
                }

                return `
            <div class="comparison__spec" >
              ${value}
              
            </div>
              `;
              })
              .join("")}

               ${Array.from({ length: emptySlots })
                 .map(() => this.generateEmptyRow())
                 .join("")}
           </div>
      `;
    },

    generateMarkup({ compareProducts, allProducts }) {
      const emptySlots = 3 - compareProducts.length;

      return `
      <!-- COMPARISON  -->
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
                   <use href="${sprite}#${icons.one_finger}"></use>
                </svg>
              </div>
            </div>
            ${this.generateHeader(compareProducts)}
            ${Array.from({ length: emptySlots })
              .map(() => this.generateAddProducts(allProducts))
              .join("")}
            
            
          </div>

            ${this.generateSection("General")}
            ${this.generateRow("Sales Package", "salesPackage", compareProducts)}
            
            ${this.generateRow("Model Number", "modelNumber", compareProducts)}
            ${this.generateSection("Product")}
            ${this.generateRow("Primary Material ", "primaryMaterial", compareProducts)}
            ${this.generateRow("Secondary Material ", "secondaryMaterial", compareProducts)}
            ${this.generateRow("Maximum Load Capacity ", "maximumLoadCapacity", compareProducts)}
            ${this.generateSection("Dimensions")}
            ${this.generateRow("Width ", "dimensions.width", compareProducts)}
            ${this.generateRow("Height ", "dimensions.height", compareProducts)}
            ${this.generateRow("Depth ", "dimensions.depth", compareProducts)}
            ${this.generateRow("Weight ", "dimensions.weight", compareProducts)}
            ${this.generateSection("Warranty")}
            ${this.generateRow("Warranty Summary ", "warrantySummary", compareProducts)}
            
        </div>
      </div>    
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
            `;
    },
  };
};

export const comparisonView = createComparisonView();
