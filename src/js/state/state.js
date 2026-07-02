export const initialFilters = {
  category: [],
  minPrice: null,
  maxPrice: null,
  inStock: false,
  discount: false,
  rating: null,
};

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

  filter: structuredClone(initialFilters),

  minFilterPrice: 0,
  maxFilterPrice: 0,
};
