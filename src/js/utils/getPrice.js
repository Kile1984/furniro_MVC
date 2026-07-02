export const getPrice = function (price) {
  const { original, discountPercent } = price;
  const hasDiscount = discountPercent > 0;

  return {
    hasDiscount,
    original,
    finalPrice: hasDiscount
      ? original - (original * discountPercent) / 100
      : original,
  };
};

export const getMaxPrice = function (products) {
  return Math.max(
    ...products.map((p) => {
      return getPrice(p.price).finalPrice;
    }),
  );
};
