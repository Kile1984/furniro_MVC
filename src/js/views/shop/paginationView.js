export const createPaginationView = function () {
  return {
    generateMarkup(totalPages) {
      let buttons = "";

      for (let i = 1; i <= totalPages; i++) {
        buttons += `
          <button class="btn btn--pagination products__btn">
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
