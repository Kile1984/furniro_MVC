export const createSearchView = function () {
  const searchResultEl = document.querySelector(".header__search-list");
  const searchEl = document.querySelector(".header__search-item");
  const searchInput = searchEl.querySelector(".header__search-input");

  return {
    toggle() {
      searchInput.classList.toggle("open");
    },

    clear() {
      searchResultEl.innerHTML = "";
      searchResultEl.classList.remove("show");
      searchInput.value = "";
    },

    render(products) {
      if (!products.length) {
        searchResultEl.innerHTML = "";
        searchResultEl.classList.remove("show");
        return;
      }
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
