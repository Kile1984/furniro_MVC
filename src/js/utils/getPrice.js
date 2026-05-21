export const getPrice = function (price) {
  const { original, discountPercent } = price;
  const hasDiscount = discountPercent > 0;

  return {
    hasDiscount,
    finalPrice: hasDiscount
      ? original - (original * discountPercent) / 100
      : original,
  };
};
