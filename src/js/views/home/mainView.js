import { state } from "../../state/state.js";
import { createProductView } from "./productsView.js";
import { createShareView } from "./shareView.js";
import { createRangeView } from "./rangeView.js";
import { createRoomsView } from "./roomsView.js";

const productView = createProductView();
const shareView = createShareView();
const rangeView = createRangeView();
const roomsView = createRoomsView();

export const createMainView = function () {
  return {
    generateMarkup(data) {
      return `
      <main class="page">
        ${rangeView.generateMarkup()}
        ${productView.generateMarkup(data)}
        ${shareView.generateMarkup()}
        ${roomsView.generateMarkup(data.roomsSlider)}
      </main>
      `;
    },
  };
};
