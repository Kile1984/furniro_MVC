import { state } from "../state/state.js";
import { roomsSliderActions } from "../state/actions/roomsSliderActions.js";
import { roomsView } from "../views/home/roomsView.js";

export const initSlider = function () {
  roomsView.init();
};

export const prev = function () {
  if (state.roomsSlider.isAnimating) return;
  roomsSliderActions.setIsAnimating(true);

  roomsSliderActions.prev();
  roomsView.prev(state.roomsSlider.currentIndex, () => {
    roomsSliderActions.setIsAnimating(false);
  });
};

export const next = function () {
  if (state.roomsSlider.isAnimating) return;
  roomsSliderActions.setIsAnimating(true);

  roomsSliderActions.next();
  roomsView.next(state.roomsSlider.currentIndex, () => {
    roomsSliderActions.setIsAnimating(false);
  });
};
