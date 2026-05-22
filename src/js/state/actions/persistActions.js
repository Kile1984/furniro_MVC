import { state } from "../state.js";

export const persistActions = {
  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
};
