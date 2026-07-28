import { state } from "../state/state.js";

export const paginateProducts = function (products) {
  const PRODUCTS_PER_PAGE = state.pagination.productPerPage;
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const currentPage = state.pagination.currentPage;
  const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const end = start + PRODUCTS_PER_PAGE;

  const paginationData = {
    products: products.slice(start, end),
    totalPages,
    currentPage,
  };

  return paginationData;
};
