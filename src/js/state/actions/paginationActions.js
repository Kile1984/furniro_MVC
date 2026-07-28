import { state } from "../state.js";

export const paginationActions = {
  setCurrentPage(page) {
    state.pagination.currentPage = page;
    console.log(state.pagination);
  },
};
