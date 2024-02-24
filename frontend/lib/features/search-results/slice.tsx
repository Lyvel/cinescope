import { Movies } from "@/lib/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface SearchResultsState {
  query: string;
  results: Movies;
}

const initialState: SearchResultsState = {
  query: "",
  results: [],
};

export const searchResultsSlice = createSlice({
  name: "searchResults",
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setResults: (state, action: PayloadAction<any>) => {
      state.results = action.payload;
    },
  },
});

export const { setQuery, setResults } = searchResultsSlice.actions;

export default searchResultsSlice.reducer;
