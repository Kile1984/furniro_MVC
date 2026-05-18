export const createHeroView = function () {
  return {
    generateMarkup() {
      return `
        <!-- HERO -->
        <section class="hero">
          <div class="container container--wide">
            <div class="hero__panel">
              <div class="hero__content">
                <span class="hero__badge">New Arrival</span>
                <h1 class="heading-hero hero__heading">
                  Discover Our New Collection
                </h1>
                <p class="hero__text text-body-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                  tellus, luctus nec ullamcorper mattis.
                </p>
                <a href="#" class="btn btn--primary">Buy now</a>
              </div>
            </div>
          </div>
        </section>
      `;
    },
  };
};
