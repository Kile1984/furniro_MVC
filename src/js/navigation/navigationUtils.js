export const shouldSaveScroll = function (from, to) {
  return ["home", "shop"].includes(from) && to === "product";
};
