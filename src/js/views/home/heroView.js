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
                 Discover thoughtfully crafted furniture that blends comfort, style, and functionality for every room in your home.
                </p>
                <a href="#/shop" class="btn btn--primary">Buy now</a>
              </div>
            </div>
          </div>
        </section>
      `;
    },
  };
};
