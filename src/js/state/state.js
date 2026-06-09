export const state = {
  currentRoute: "home",
  products: [],
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
  search: {
    query: "",
    results: [],
  },

  singleProduct: {
    quantity: 1,
  },
};
