import { state } from "../state.js";

export const serachActions = {
  setQuery(query) {
    state.search.query = query;
  },

  setResults(results) {
    state.search.results = results;
  },
};
