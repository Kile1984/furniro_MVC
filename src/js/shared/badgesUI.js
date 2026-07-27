export const generateBadge = function (discountPercent, badges) {
  if (discountPercent > 0) {
    return `  <span class="product-card__badge  product-card__badge--discount">-${discountPercent}%</span>`;
  }

  if (badges.isNew) {
    return `  <span class="product-card__badge  product-card__badge--new">NEW</span>`;
  }
};
