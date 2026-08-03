export const creteFilterDrawer = function () {
  const body = document.querySelector("body");
  let filter = null;

  return {
    close() {
      const drawerEl = document.querySelector(".filter");

      drawerEl.classList.remove("active");
      body.classList.remove("drawer-open");
    },

    reset() {
      const formEl = document.querySelector(".filter-form");

      formEl.reset();
    },

    toggleFilterDrawer(isOpen) {
      const drawerEl = document.querySelector(".filter");
      drawerEl.classList.toggle("active", isOpen);
      body.classList.toggle("drawer-open", isOpen);
    },

    checkInputs(currentFilter) {
      filter = currentFilter;
    },

    isCategoryChecked(name, value) {
      if (!filter) return "";

      return filter[name].includes(value) ? "checked" : "";
    },

    isCheckboxChecked(name) {
      if (!filter) return "";

      return filter[name] ? "checked" : "";
    },

    isRadioChecked(property, value) {
      if (!filter) return "";

      return filter[property] === value ? "checked" : "";
    },

    inputValue(property) {
      if (!filter) return "";

      return `value="${filter[property] ?? ""}"`;
    },

    generateMarkup(isDrawerOpen) {
      return `
      <!-- FILTER DRAWER -->
      <div class="filter ${isDrawerOpen ? "active" : ""}">
        <div class="filter-overlay"></div>

        <aside
          class="filter-drawer"
          role="dialog"
          aria-modal="true"
          aria-labelledby="filter-title"
        >
          <div class="filter-drawer__header">
            <h3 class="filter-drawer__title" id="filter-title">Filter</h3>
            <button type="button" class="filter-drawer__close" data-action="close-filter">&times;</button>
          </div>

          <form class="filter-form" autocomplete="off">
            <div class="filter-form__body">
              <!-- Category -->
              <div class="filter-form__group">
                <h4 class="filter-form__title">Category</h4>
                <label class="filter-form__option">
                  <input type="checkbox" name="category" value="chair" data-input="filter"
                  ${this.isCategoryChecked("category", "chair")}/>
                  <span class="filter-form__box"></span>
                  <span class="filter-form__label">Chairs</span>
                </label>

                <label class="filter-form__option">
                  <input type="checkbox" name="category" value="sofa" data-input="filter"
                  ${this.isCategoryChecked("category", "sofa")}/>
                  <span class="filter-form__box"></span>
                  <span class="filter-form__label">Sofa</span>
                </label>

                <label class="filter-form__option">
                  <input type="checkbox" name="category" value="table" data-input="filter"
                   ${this.isCategoryChecked("category", "table")}/>
                  <span class="filter-form__box"></span>
                  <span class="filter-form__label">Tables</span>
                </label>
              </div>

              <!-- Price -->
              <div class="filter-form__group">
                <h4 class="filter-form__title">Price</h4>
                <div class="filter-form__price">
                  <input
                    type="number"
                    name="minPrice"
                    placeholder="Min"
                    min="0"
                    data-input="filter"
                    ${this.inputValue("minPrice")}
                  />
                  <span> - </span>
                  <input
                    type="number"
                    name="maxPrice"
                    placeholder="Max"
                    min="0"
                    data-input="filter"
                    ${this.inputValue("maxPrice")}
                  />
                </div>
              </div>

               <!-- In stock and Discount -->
              <div class="filter-form__group">
                <label class="filter-form__option">
                  <input type="checkbox" name="inStock" value="inStock" data-input="filter"
                   ${this.isCheckboxChecked("inStock")}/>
                  <span class="filter-form__box"></span>
                  <span class="filter-form__label">In stock</span>
                </label>


                <label class="filter-form__option">
                  <input type="checkbox" name="discount" value="discount" data-input="filter"
                   ${this.isCheckboxChecked("discount")}/>
                  <span class="filter-form__box"></span>
                  <span class="filter-form__label">Discount</span>
                </label>

              </div>

              <!-- Rating -->
              <div class="filter-form__group">
                <h4 class="filter-form__title">Rating</h4>

                <label class="filter-form__option">
                  <input type="radio" name="rating" value="4" data-input="filter"
                  ${this.isRadioChecked("rating", 4)}
                  />
                  <span class="filter-form__radio"></span>
                  <span class="filter-form__label"> 4★ & up</span>
                </label>

                <label class="filter-form__option">
                  <input type="radio" name="rating" value="3" data-input="filter"
                  ${this.isRadioChecked("rating", 3)}
                  />
                  <span class="filter-form__radio"></span>
                  <span class="filter-form__label">3★ & up</span>
                </label>
              </div>
            </div>

            <div class="filter-drawer__footer">
              <button class="btn btn--secondary" type="button" data-action="reset-filters">Reset</button>
              <button class="btn btn--primary" type="button" data-action="apply-filters">Apply</button>
            </div>
          </form>
        </aside>
      </div>
      `;
    },
  };
};

export const filterDrawerView = creteFilterDrawer();
