import { Movie, Movies } from "@/lib/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Movies = [];

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<Movie>) => {
      const movieExists = state.some((movie) => movie.id === action.payload.id);
      if (!movieExists) state.push(action.payload);
    },
  },
});

export const { addMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
