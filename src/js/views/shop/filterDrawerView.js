export const creteFilterDrawer = function () {
  const body = document.querySelector("body");

  return {
    // open() {
    //   const drawerEl = document.querySelector(".filter");

    //   drawerEl.classList.add("active");
    //   body.classList.add("drawer-open");
    // },

    close() {
      const drawerEl = document.querySelector(".filter");

      drawerEl.classList.remove("active");
      body.classList.remove("drawer-open");
    },

    toggleFilterDrawer(isOpen) {
      const drawerEl = document.querySelector(".filter");
      drawerEl.classList.toggle("active", isOpen);
      body.classList.toggle("drawer-open", isOpen);
    },

    generateMArkup() {
      return `
      <!-- FILTER DRAWER -->
      <div class="filter">
        <div class="filter-overlay"></div>

        <aside
          class="filter-drawer"
          role="dialog"
          arial-modal="true"
          aria-labelledby="filter-title"
        >
          <div class="filter-drawer__header">
            <h3 class="filter-drawer__title">Filter</h3>
            <button type="button" class="filter-drawer__close">&times;</button>
          </div>

          <form class="filter-form">
            <div class="filter-form__body">
              <!-- Category -->
              <div class="filter-form__group">
                <h4 class="filter-form__title">Category</h4>
                <label class="filter-form__option">
                  <input type="checkbox" name="category" value="chairs" />
                  <span class="filter-form__box"></span>
                  <span class="filter-form__label">Chairs</span>
                </label>

                <label class="filter-form__option">
                  <input type="checkbox" name="category" value="sofa" />
                  <span class="filter-form__box"></span>
                  <span class="filter-form__label">Sofa</span>
                </label>

                <label class="filter-form__option">
                  <input type="checkbox" name="category" value="tables" />
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
                    name="price-min"
                    placeholder="Min"
                    min="0"
                  />
                  <span> - </span>
                  <input
                    type="number"
                    name="price-max"
                    placeholder="Max"
                    min="0"
                  />
                </div>
              </div>

              <!-- Size -->
              <div class="filter-form__group">
                <h4 class="filter-form__title">Size</h4>
                <label class="filter-form__option">
                  <input type="checkbox" name="size" value="small" />
                  <span class="filter-form__box"></span>
                  <span class="filter-form__label">Small</span>
                </label>

                <label class="filter-form__option">
                  <input type="checkbox" name="size" value="medium" />
                  <span class="filter-form__box"></span>
                  <span class="filter-form__label">Medium</span>
                </label>

                <label class="filter-form__option">
                  <input type="checkbox" name="size" value="large" />
                  <span class="filter-form__box"></span>
                  <span class="filter-form__label">Large</span>
                </label>
              </div>

              <!-- Rating -->
              <div class="filter-form__group">
                <h4 class="filter-form__title">Rating</h4>

                <label class="filter-form__option">
                  <input type="radio" name="rating" value="4" />
                  <span class="filter-form__radio"></span>
                  <span class="filter-form__label"> 4★ & up</span>
                </label>

                <label class="filter-form__option">
                  <input type="radio" name="rating" value="3" />
                  <span class="filter-form__radio"></span>
                  <span class="filter-form__label">3★ & up</span>
                </label>
              </div>

              <!-- Color -->
              <div class="filter-form__group">
                <h4 class="filter-form__title">Color</h4>
                <div class="filter-form__colors">
                  <label class="filter-form__color">
                    <input
                      type="checkbox"
                      name="color"
                      value="black"
                      class="filter-form__color-input"
                    />
                    <span
                      class="filter-form__dot filter-form__dot--black"
                    ></span>
                  </label>

                  <label class="filter-form__color">
                    <input
                      type="checkbox"
                      name="color"
                      value="gray"
                      class="filter-form__color-input"
                    />
                    <span
                      class="filter-form__dot filter-form__dot--gray"
                    ></span>
                  </label>

                  <label class="filter-form__color">
                    <input
                      type="checkbox"
                      name="color"
                      value="beige"
                      class="filter-form__color-input"
                    />
                    <span
                      class="filter-form__dot filter-form__dot--beige"
                    ></span>
                  </label>
                </div>
              </div>
            </div>

            <div class="filter-drawer__footer">
              <button class="btn btn--secondary">Reset</button>
              <button class="btn btn--primary">Apply</button>
            </div>
          </form>
        </aside>
      </div>
      `;
    },
  };
};

export const filterDrawerView = creteFilterDrawer();
