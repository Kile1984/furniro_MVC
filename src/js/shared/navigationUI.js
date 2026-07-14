import { controlCloseSearch } from "../controllers/searchController.js";
import { controlCloseMenu } from "../controllers/headerController.js";
import { controlUpdateActiveLinks } from "../controllers/navigationController.js";

export const close = function () {
  controlCloseSearch();
  controlCloseMenu();
};

export const initialize = function () {
  controlUpdateActiveLinks();
};
