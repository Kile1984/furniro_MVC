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
                Explore beautifully crafted furniture collections designed for every room, style, and lifestyle.
              </p>
            </div>

            <div class="range__grid text-center">
              <div class="range__box range__box--dining">
                <a href="#/category/chairs">
                  <img
                    class="range__img"
                    src="${images.home_chairs}"
                    alt="Chair"
                  />
                  <span class="ui-title range__ui-title"> Chairs </span>
                </a>
              </div>

              <div class="range__box range__box--living">
                <a href="#/category/tables">
                  <img
                    class="range__img"
                      src="${images.home_tables}"
                    alt="Table"
                  />
                  <span class="ui-title range__ui-title"> Tables </span>
                </a>
              </div>

              <div class="range__box range__box--bedroom">
                <a href="#/category/sofas">
                  <img
                    class="range__img"
                    src="${images.home_sofas}"
                    alt="Sofa"
                  />
                  <span class="ui-title range__ui-title"> Sofas </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      `;
    },
  };
};
