import { state } from "../state.js";

export const shareActions = {
  openShareMenu(id) {
    state.share.openedProductId = id;
  },
};
