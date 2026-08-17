import { state } from "../state.js";

export const roomsSliderActions = {
  next() {
    state.roomsSlider.currentIndex++;
    console.log(state.roomsSlider.currentIndex);
  },
};
