import { formatPrice } from "../utils/format.js";

export const generateDiscount = function (finalPrice, original, hasDiscount) {
  const markup = ` 
        <div class="product-card__price">
          <span class="product-card__price-current">
            ${formatPrice(finalPrice)}
          </span>

          <span class="product-card__price-old">
            ${hasDiscount ? formatPrice(original) : ""}
          </span>
        </div>`;

  return markup;
};
