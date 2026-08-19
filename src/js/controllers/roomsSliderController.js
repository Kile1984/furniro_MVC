import { state } from "../state/state.js";
import { roomsSliderActions } from "../state/actions/roomsSliderActions.js";
import { roomsView } from "../views/home/roomsView.js";

export const controlPrev = function () {
  if (state.roomsSlider.isAnimating) return;

  if (state.roomsSlider.currentIndex === 0) return;

  roomsSliderActions.setIsAnimating(true);

  roomsSliderActions.prev();

  roomsView.activeDot(state.roomsSlider.currentIndex);

  roomsView.prev(state.roomsSlider.currentIndex, () => {
    roomsSliderActions.setIsAnimating(false);
  });
};

export const controlNext = function () {
  if (state.roomsSlider.isAnimating) return;

  if (state.roomsSlider.currentIndex === state.roomsSlider.slides.length - 1)
    return;

  roomsSliderActions.setIsAnimating(true);

  roomsSliderActions.next();

  roomsView.activeDot(state.roomsSlider.currentIndex);

  roomsView.next(state.roomsSlider.currentIndex, () => {
    roomsSliderActions.setIsAnimating(false);
  });
};

export const controlDots = function ({ dataset }) {
  if (state.roomsSlider.isAnimating) return;

  roomsSliderActions.setIsAnimating(true);

  roomsSliderActions.setCurrentIndex(Number(dataset.id));

  roomsView.activeSlide(dataset.id, () => {
    roomsSliderActions.setIsAnimating(false);
  });
};
