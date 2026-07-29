export const createPaginationView = function () {
  return {
    generateMarkup({ products, totalPages, currentPage }) {
      let buttons = "";

      for (let i = 1; i <= totalPages; i++) {
        buttons += `
          <button class="btn btn--pagination products__btn ${currentPage === i ? "products__btn--active" : ""}" data-page=${i} data-action="pagination-btn">
            ${i}
          </button>
        `;
      }

      return `
            <div class="products__btn-group">
              ${buttons}
            </div>
          `;
    },
  };
};

export const paginationView = createPaginationView();
