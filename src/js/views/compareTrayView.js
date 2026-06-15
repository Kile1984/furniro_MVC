export const createCompareTrayView = function () {
  return {
    generateMarkup(products) {
      return `
       <article class="compare-tray__product">
          <img
            src="./assets/images/Asgaard-sofa.png"
            alt="Syltherine"
            class="compare-tray__image"
          />

          <div class="compare-tray__content">
            <h4 class="compare-tray__name">Syltherine</h4>

            <span class="compare-tray__price"> Rp 2.500.000 </span>
          </div>

          <button
            class="compare-tray__remove"
            data-action="remove-from-compare"
            data-id="p1"
          >
            ✕
          </button>
        </article>
      `;
    },
  };
};
