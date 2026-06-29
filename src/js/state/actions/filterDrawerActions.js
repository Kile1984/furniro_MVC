import { state } from "../state.js";

export const filterDrawerActions = {
  setFilters(name, value, checked) {
    state.filter[name] = value;
  },

  toggleCategory(value, checked) {
    if (checked) {
      state.filter.category.push(value);
    } else {
      const index = state.filter.category.indexOf(value);

      if (index !== -1) {
        state.filter.category.splice(index, 1);
      }
    }
  },

  consoleState() {
    console.log(state.filter);
  },
};
