import { state } from "../state.js";

export const roomsSliderActions = {
  next() {
    state.roomsSlider.currentIndex++;
  },

  prev() {
    state.roomsSlider.currentIndex--;
  },

  setIsAnimating(isAnimating) {
    state.roomsSlider.isAnimating = isAnimating;
  },
};
