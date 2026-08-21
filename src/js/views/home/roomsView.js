import { images } from "../../../assets/images";
import { state } from "../../state/state.js";
export const createRoomsView = function () {
  return {
    prev(index, callback) {
      const track = document.querySelector(".rooms__slider-track");
      const slide = track.querySelector(".rooms__slide");

      const slideWidth = slide.getBoundingClientRect().width;
      const gap = parseFloat(getComputedStyle(track).gap);

      track.style.transform = `translateX(-${(slideWidth + gap) * index}px)`;

      track.addEventListener(
        "transitionend",
        (e) => {
          callback();
        },
        { once: true },
      );
    },

    next(index, callback) {
      const track = document.querySelector(".rooms__slider-track");
      const slide = track.querySelector(".rooms__slide");

      const slideWidth = slide.getBoundingClientRect().width;
      const gap = parseFloat(getComputedStyle(track).gap);

      track.style.transform = `translateX(-${(slideWidth + gap) * index}px)`;

      track.addEventListener("transitionend", () => callback(), { once: true });
    },

    generateSLides(data) {
      return data.slides
        .map((img, index) => {
          return ` <div class="rooms__slide" data-id="${index}">
          
                    <img  src="${img}" alt="${img}" />
                </div>`;
        })
        .join("");
    },

    generateDots(data) {
      const dotActive = ` <span class="rooms__dot rooms__dot--active">
                  <div class="rooms__dot-inner"></div>
                </span>`;

      return data.slides
        .map((dot, index) => {
          return `
         <span class="rooms__dot ${index === 0 ? "rooms__dot--active" : ""}" data-id=${index} data-action="slider-dot">
            <div class="rooms__dot-inner"></div>
         </span>
        `;
        })
        .join("");
    },

    activeDot(id) {
      const dots = document.querySelectorAll(".rooms__dot");
      dots.forEach((dot) => {
        dot.classList.remove("rooms__dot--active");
      });

      const activDot = document.querySelector(`.rooms__dot[data-id="${id}"]`);
      activDot.classList.add("rooms__dot--active");
    },

    activeSlide(id, callback) {
      const dots = document.querySelectorAll(".rooms__dot");

      dots.forEach((dot) => {
        dot.classList.remove("rooms__dot--active");
      });

      const activeDot = document.querySelector(`.rooms__dot[data-id="${id}"]`);

      activeDot.classList.add("rooms__dot--active");

      const track = document.querySelector(".rooms__slider-track");
      const slide = track.querySelector(".rooms__slide");

      const slideWidth = slide.getBoundingClientRect().width;
      const gap = parseFloat(getComputedStyle(track).gap);

      track.style.transform = `translateX(-${(slideWidth + gap) * id}px)`;

      track.addEventListener("transitionend", () => callback(), { once: true });
    },

    generateMarkup(data) {
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
              <a href="#/shop" class="btn btn--primary">Explore More</a>
            </div>

            <div class="rooms__main">
              <img  src="${images.sliderImg_01}" alt="" />

              <div class="rooms__overlay">
                <span class="rooms__index"></span>
                <h3 class="rooms__overlay-title">Go to Shop</h3>
                  <a
                href="/#/shop"
                class="rooms__arrow"
                aria-label="View room details"
              >
                <img src="${images.arrowLeft_small}" alt="" />
              </a>
              </div>

            
            </div>

            <div class="rooms__slider">
            <div class="rooms__slider-viewport">
              <div class="rooms__slider-track">

               ${this.generateSLides(data)}
              
              </div>
             </div>
                 <button class="rooms__slider-btn rooms__slider-btn--left" data-action="rooms-slider-prev">
                  <img  src="${images.arrowLeft}" alt="" />
                </button>

                <button class="rooms__slider-btn rooms__slider-btn--right" data-action="rooms-slider-next">
                  <img  src="${images.arrowRight}" alt="" />
                </button>

              <div class="rooms__dots">
               ${this.generateDots(data)}
              </div>
            </div>
          </div>
        </section>
      `;
    },
  };
};

export const roomsView = new createRoomsView();
