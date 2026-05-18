import { images } from "../../../assets/images.js";
import { createHeroView } from "./heroView.js";
import { createMainView } from "./mainView.js";

const mainView = createMainView();
const heroView = createHeroView();

export const createHomeView = function (appEl) {
  return {
    generateMarkup() {
      return `
         ${heroView.generateMarkup()}
         ${mainView.generateMarkup()}
    `;
    },
  };
};
