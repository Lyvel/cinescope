import { useAppSelector } from "@/lib/hooks";
import { Genre, Genres, Movies } from "@/lib/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for genres
const initialState: Genres = {
  genres: [{ name: "All" }],
  currentGenre: { name: "All" },
};

// Define a regular expression for validation
const regex = "^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$";

/**
 * The genres slice of the Redux store.
 */
export const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {
    /**
     * Adds a new genre to the state.
     * @param {Genres} state - The current state.
     * @param {PayloadAction<string>} action - The action containing the genre name.
     */
    addGenre: (state, action: PayloadAction<string>) => {
      if (!action.payload?.match(regex)) {
        return;
      }
      const genreExists = state.genres.some(
        (genre) => genre.name === action.payload
      );
      if (!genreExists) state.genres.push({ name: action.payload });
    },
    /**
     * Sets the current genre in the state.
     * @param {Genres} state - The current state.
     * @param {PayloadAction<string>} action - The action containing the genre name.
     */
    setCurrentGenre: (state, action: PayloadAction<string>) => {
      state.currentGenre = { name: action.payload };
    },
    /**
     * Clears the genres in the state.
     * @param {Genres} state - The current state.
     */
    clearGenres: (state) => {
      state.genres = initialState.genres;
      state.currentGenre = initialState.currentGenre;
    },
  },
});

// Export the action creators and reducer
export const { addGenre, setCurrentGenre, clearGenres } = genresSlice.actions;
export default genresSlice.reducer;
