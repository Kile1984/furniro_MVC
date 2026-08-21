import { productCardsView } from "../shared/productCardsView";
import { images } from "../../../assets/images";

export const categoryView = function () {
  return {
    generateMarkup({ products, category }) {
      console.log(products);
      return `

       <!-- BREADCRUMB -->
        <div class="breadcrumb">
          <div class="container">
            <nav class="breadcrumb__nav" aria-label="Breadcrumb">
              <a href="#/" class="breadcrumb__link text-body">Home</a>
              &gt;
              <a href="#/shop" class="breadcrumb__link text-body">Shop</a>
              &gt;
              <span class="breadcrumb__product">${category}</span>
            </nav>
          </div>
        </div>
         <!-- PRODUCT -->
        <section class="section products">
          <div class="container">
            <h2 class="section-title products__main-title text-center">
              Our Product
            </h2>
            
              <div class="products__grid">
               
                 ${productCardsView.generateMarkup({ products })}
                
              </div>

             
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
              
        `;
    },
  };
};
