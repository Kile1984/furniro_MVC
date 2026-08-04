import { state } from "../state.js";

export const paginationActions = {
  setCurrentPage(page) {
    state.pagination.currentPage = page;
  },

  setProductsPerPage(value) {
    state.pagination.productPerPage = value;
  },

  sortProduct(type) {
    state.pagination.sortBy = type;
  },
};
