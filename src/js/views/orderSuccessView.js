import { images } from "../../assets/images.js";
import { sprite, icons } from "../../assets/icons/icons.js";

export const createOrderSuccessView = function () {
  return {
    generateMarkup() {
      return `
      <main class="border-top border-bottom">
        <h1 class="text-center">YOU HAVE SUCCESSFULLY PLACED YOUR ORDER</h1>
      </main>`;
    },
  };
};

export const orderSuccessView = new createOrderSuccessView();
