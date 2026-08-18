import { state } from "../state/state.js";
import { roomsSliderActions } from "../state/actions/roomsSliderActions.js";
import { roomsView } from "../views/home/roomsView.js";

export const prev = function () {
  if (state.roomsSlider.isAnimating) return;

  if (state.roomsSlider.currentIndex === 0) return;

  roomsSliderActions.setIsAnimating(true);

  roomsSliderActions.prev();

  roomsView.prev(state.roomsSlider.currentIndex, () => {
    roomsSliderActions.setIsAnimating(false);
  });
};

export const next = function () {
  if (state.roomsSlider.isAnimating) return;

  if (state.roomsSlider.currentIndex === state.roomsSlider.slides.length - 1)
    return;

  roomsSliderActions.setIsAnimating(true);

  roomsSliderActions.next();

  roomsView.next(state.roomsSlider.currentIndex, () => {
    roomsSliderActions.setIsAnimating(false);
  });
};
