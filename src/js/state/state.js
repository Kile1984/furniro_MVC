export const state = {
  currentRoute: "home",
  products: [],
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
  search: {
    query: "",
    results: [],
  },
  compare: JSON.parse(localStorage.getItem("compare")) || [],
  isCompareTrayOpen: false,

  singleProduct: {
    quantity: 1,
  },
};
