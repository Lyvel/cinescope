import { Movie, Movies } from "@/lib/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for movies
const initialState: Movies = [];

/**
 * The movies slice of the Redux store.
 */
export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    /**
     * Adds a new movie to the state.
     * @param {Movies} state - The current state.
     * @param {PayloadAction<Movie>} action - The action containing the movie.
     */
    addMovie: (state, action: PayloadAction<Movie>) => {
      const movieExists = state.some((movie) => movie.id === action.payload.id);
      if (!movieExists) state.push(action.payload);
    },
  },
});

// Export the action creators and reducer
export const { addMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
