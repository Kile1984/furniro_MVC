import { sprite, icons } from "../../../assets/icons/icons.js";

export const generateStars = function (stars) {
  const fullStars = Math.round(stars);
  const emptyStars = 5 - fullStars;

  const fullStarSvg = `
                  <svg class="icon product__icon-star">
                    <use href="${sprite}#${icons.star_full}"></use>
                  </svg>`;
  const emptyStarSvg = `
                  <svg class="icon product__icon-star">
                    <use href="${sprite}#${icons.star_empty}"></use>
                  </svg>
      `;

  return fullStarSvg.repeat(fullStars) + emptyStarSvg.repeat(emptyStars);
};
