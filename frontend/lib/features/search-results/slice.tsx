import { Movies } from "@/lib/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

/**
 * Represents the state of the search results.
 */
export interface SearchResultsState {
  query: string;
  results: Movies;
}

// Define the initial state for the search results
const initialState: SearchResultsState = {
  query: "",
  results: [],
};

/**
 * The search results slice of the Redux store.
 */
export const searchResultsSlice = createSlice({
  name: "searchResults",
  initialState,
  reducers: {
    /**
     * Sets the search query.
     * @param {SearchResultsState} state - The current state.
     * @param {PayloadAction<string>} action - The action containing the new query.
     */
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    /**
     * Sets the search results.
     * @param {SearchResultsState} state - The current state.
     * @param {PayloadAction<Movies>} action - The action containing the new results.
     */
    setResults: (state, action: PayloadAction<any>) => {
      state.results = action.payload;
    },
  },
});

// Export the action creators and reducer
export const { setQuery, setResults } = searchResultsSlice.actions;
export default searchResultsSlice.reducer;
