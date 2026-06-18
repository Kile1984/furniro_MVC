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

    addProduct(product) {
      const slotsEl = parentEl.querySelector(".compare-tray__slots");
      slotsEl.insertAdjacentHTML(
        "beforeend",
        this.generateProductMarkup(product),
      );
    },

    removeProduct(id) {
      const productEl = parentEl.querySelector(
        `.compare-tray__product[data-id="${id}"]`,
      );

      if (!productEl) return;

      productEl.remove();
    },

    closeCompareTray() {
      parentEl.classList.remove("open");
    },

    openCompareTray() {
      parentEl.classList.add("open");
    },

    generateProductMarkup(product) {
      return `
       <article class="compare-tray__product" data-id=${product.id}>
         <img
            src="${product.image}"
            alt="${product.title}"
            class="compare-tray__image"
          />

          <div class="compare-tray__content">
            <h4 class="compare-tray__name">${product.title}</h4>

            <span class="compare-tray__price"> ${product.price} </span>
          </div>

          <button
            class="compare-tray__remove"
            data-action="remove-from-compare"
            data-id=${product.id}
          >
            ✕
          </button>
        </article>
      `;
    },

    updateCounter(count) {
      const counterEl = parentEl.querySelector(".compare-tray__counter");

      counterEl.textContent = `${count}/3`;
    },

    compareTrayFull() {
      const counterEl = parentEl.querySelector(".compare-tray__counter");

      counterEl.classList.remove("full");

      void counterEl.offsetWidth;

      counterEl.classList.add("full");
    },

    generateMarkup({ products }) {
      console.log(products);
      return `
        <div class="compare-tray__header">
        <h3 class="compare-tray__title">
          Comparison product
          <span class="compare-tray__counter"> ${products.length}/3 </span>
        </h3>
      </div>

      <div class="compare-tray__slots">${products.map((p) => this.generateProductMarkup(p)).join("")}
      </div>

      <div class="compare-tray__actions">
        <a href="#/compare" class="btn btn--primary compare-tray__actions-compare"> Compare </a>
        <button class="btn btn--secondary compare-tray__actions-remove" data-action="remove-all-from-compare-tray"> Remove </button>
      </div>

    

      <button class="compare-tray__close" data-action="close-compare-tray">
        ✕
      </button>
      `;
    },
  };
};
export const compareTrayView = createCompareTrayView();
