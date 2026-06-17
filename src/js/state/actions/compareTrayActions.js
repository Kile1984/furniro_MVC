import { state } from "../state.js";

export const compareTrayActions = {
  getCompareTrayProduct(id) {
    return state.compare.find((p) => p.id === id);
  },

  openCompareTray() {
    state.isCompareTrayOpen = true;
  },

  closeCompareTray() {
    state.isCompareTrayOpen = false;
  },
};
