import { images } from "../../../assets/images";

export const createRoomsView = function () {
  return {
    generateMarkup() {
      return `
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
      `;
    },
  };
};
