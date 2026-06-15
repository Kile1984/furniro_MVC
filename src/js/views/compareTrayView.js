import { state } from "../state/state.js";
import { images } from "../../assets/images.js";

export const createCompareTrayView = function () {
  const parentEl = document.querySelector(".compare-tray");

  return {
    render({ products, isOpen }) {
      const markup = this.generateMarkup({ products, isOpen });
      parentEl.innerHTML = markup;
      parentEl.classList.toggle("open", isOpen);
    },

    generateMarkup({ products }) {
      return `
        <div class="compare-tray__header">
        <h3 class="compare-tray__title">
          Products for comparison
          <span class="compare-tray__counter"> 1/3 </span>
        </h3>
      </div>

      <div class="compare-tray__slots">${products
        .map((p) => {
          products;

          return `
       <article class="compare-tray__product">
          <img
            src="${p.image}"
            alt="Syltherine"
            class="compare-tray__image"
          />

          <div class="compare-tray__content">
            <h4 class="compare-tray__name">Syltherine</h4>

            <span class="compare-tray__price"> Rp 2.500.000 </span>
          </div>

          <button
            class="compare-tray__remove"
            data-action="remove-from-compare-tray"
            data-id=${p.id}
          >
            ✕
          </button>
        </article>
      `;
        })
        .join("")}
      </div>

      <div class="compare-tray__actions">
        <a href="#/compare" class="btn btn--primary"> Compare </a>
      </div>

      <button class="compare-tray__close" data-action="close-compare-tray">
        ✕
      </button>
      `;
    },
  };
};
export const compareTrayView = createCompareTrayView();
