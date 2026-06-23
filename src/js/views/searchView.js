export const createSearchView = function () {
  const searchResultEl = document.querySelector(".header__search-list");

  return {
    render(products) {
      searchResultEl.innerHTML = this.generateMarkup(products);
      searchResultEl.classList.add("show");
    },

    generateMarkup(products) {
      return products
        .map(
          (p) =>
            `<li class="header__search-result">
              <a href="#/product/${p.id}">
                <img src="${p.image}" alt="${p.title}" class="header__search-img">
                <span class="header__search-title">${p.title}</span>
                <span class="header__search-price">${p.price}</span>
            </a>
            </li>`,
        )
        .join("");
    },
  };
};

export const searchView = createSearchView();
