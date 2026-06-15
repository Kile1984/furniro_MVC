import { state } from "../state.js";

export const compareTrayActions = {
  openCompareTray() {
    state.isCompareTrayOpen = true;
  },

  closeCompareTray() {
    state.isCompareTrayOpen = false;
  },
};
