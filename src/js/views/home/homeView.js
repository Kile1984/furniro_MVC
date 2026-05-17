import { images } from "../../../assets/images.js";

export const createHomeView = function (appEl) {
  return {
    generateMarkup() {
      return `
      <!-- HERO -->
      <section class="hero">
        <div class="container container--wide">
          <div class="hero__panel">
            <div class="hero__content">
              <span class="hero__badge">New Arrival</span>
              <h1 class="heading-hero hero__heading">
                Discover Our New Collection
              </h1>
              <p class="hero__text text-body-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
              <a href="#" class="btn btn--primary">Buy now</a>
            </div>
          </div>
        </div>
      </section>

      <main class="page">
        <!-- RANGE -->
        <section class="section range">
          <div class="container">
            <div class="range__header text-center">
              <h2 class="section-title range__title">Browse The Range</h2>
              <p class="text-body-xl range__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div class="range__grid text-center">
              <div class="range__box range__box--dining">
                <a href="#">
                  <img
                    class="range__img"
                    src="${images.diningImg}"
                    alt="Dining"
                  />
                  <span class="ui-title range__ui-title"> Dining </span>
                </a>
              </div>

              <div class="range__box range__box--living">
                <a href="#">
                  <img
                    class="range__img"
                      src="${images.livingImg}"
                    alt="Living room"
                  />
                  <span class="ui-title range__ui-title"> Living </span>
                </a>
              </div>

              <div class="range__box range__box--bedroom">
                <a href="#">
                  <img
                    class="range__img"
                    src="${images.bedroomImg}"
                    alt="Bedroom"
                  />
                  <span class="ui-title range__ui-title"> Bedroom </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- PRODUCTS -->
        <section class="section products">
          <div class="container">
            <h2 class="section-title products__main-title text-center">
              Our Product
            </h2>
            <div class="products__grid">
              <!-- JS -->
              <button class="btn btn--secondary products__btn-load-more">
                Show More
              </button>
            </div>
          </div>
        </section>

        <!-- ROOMS -->
        <section class="section rooms">
          <div class="rooms__inner container">
            <div class="rooms__content">
              <h2 class="section-title rooms__title">
                50+ Beautiful rooms inspiration
              </h2>
              <p class="text-body rooms__text">
                Our designer already made a lot of beautiful prototipe of rooms
                that inspire you
              </p>
              <a href="#" class="btn btn--primary">Explore More</a>
            </div>

            <div class="rooms__main">
              <img  src="${images.sliderImg_01}" alt="" />

              <div class="rooms__overlay">
                <span class="rooms__index">01 - Bed Room</span>
                <h3 class="rooms__overlay-title">Inner Peace</h3>
              </div>

              <a
                href="/rooms"
                class="rooms__arrow"
                aria-label="View room details"
              >
                <img src="${images.arrowLeft_small}" alt="" />
              </a>
            </div>

            <div class="rooms__slider">
              <div class="rooms__slider-track">
                <div class="rooms__slide">
                  <img  src="${images.sliderImg_02}" alt="" />
                </div>

                <div class="rooms__slide">
                 <img  src="${images.sliderImg_03}" alt="" />
                </div>
                <div class="rooms__slide">
                  <img  src="${images.sliderImg_01}" alt="" />
                </div>
                <div class="rooms__slide">
                  <img  src="${images.sliderImg_02}" alt="" />
                </div>

                <button class="rooms__slider-btn rooms__slider-btn--left">
                  <img  src="${images.arrowLeft}" alt="" />
                </button>

                <button class="rooms__slider-btn rooms__slider-btn--right">
                  <img  src="${images.arrowRight}" alt="" />
                </button>
              </div>

              <div class="rooms__dots">
                <span class="rooms__dot rooms__dot--active">
                  <div class="rooms__dot-inner"></div>
                </span>
                <span class="rooms__dot">
                  <div class="rooms__dot-inner"></div>
                </span>
                <span class="rooms__dot">
                  <div class="rooms__dot-inner"></div>
                </span>

                <span class="rooms__dot">
                  <div class="rooms__dot-inner"></div>
                </span>
              </div>
            </div>
          </div>
        </section>

        <!-- SHARE -->
        <section class="section share">
          <div class="share__heading text-center">
            <p class="text-body-xl range__text">Share your setup with</p>
            <h2 class="section-title">#FuniroFurniture</h2>
          </div>

          <div class="share__gallery">
             <img  src="${images.gallery_01}" alt=""  class="share__gallery-img"/>
             <img  src="${images.gallery_02}" alt=""  class="share__gallery-img"/>
             <img  src="${images.gallery_03}" alt=""  class="share__gallery-img"/>
             <img  src="${images.gallery_04}" alt=""  class="share__gallery-img"/>
             <img  src="${images.gallery_05}" alt=""  class="share__gallery-img"/>
             <img  src="${images.gallery_06}" alt=""  class="share__gallery-img"/>
             <img  src="${images.gallery_07}" alt=""  class="share__gallery-img"/>
             <img  src="${images.gallery_08}" alt=""  class="share__gallery-img"/>
             <img  src="${images.gallery_09}" alt=""  class="share__gallery-img"/>
          </div>
        </section>
      </main>
`;
    },
  };
};
