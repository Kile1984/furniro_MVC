import { images } from "../../../assets/images";

export const createRangeView = function () {
  return {
    generateMarkup() {
      return `
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
      `;
    },
  };
};
