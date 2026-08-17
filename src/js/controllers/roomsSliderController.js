import { state } from "../state/state.js";
import { roomsSliderActions } from "../state/actions/roomsSliderActions.js";
import { roomsView } from "../views/home/roomsView.js";

export const initSlider = function () {
  roomsView.init();
};

export const prev = function () {
  console.log("PREV");
};

export const next = function () {
  console.log("NEXT");
  roomsSliderActions.next();
};
