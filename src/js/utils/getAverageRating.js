export const getAverageRating = function (reviews) {
  const sum = reviews.reduce((acc, curr) => {
    return acc + curr.rating;
  }, 0);

  if (reviews.length === 0) return 0;

  return (sum / reviews.length).toFixed(1);
};
