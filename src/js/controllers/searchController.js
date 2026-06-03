import { serachActions } from "../state/actions/searchActions.js";
import { state } from "../state/state.js";
import { searchProducts } from "../services/searchService.js";

export const constrolSearchInput = function ({ value }) {
  serachActions.setQuery(value);
  const result = searchProducts(value);
  serachActions.setResults(result);

  console.log(state.search.results);
};
