import { useAppSelector } from "@/lib/hooks";
import { Genre, Genres, Movies } from "@/lib/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Genres = {
  genres: [{ name: "All" }],
  currentGenre: { name: "All" },
};

const regex = "^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$";

export const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {
    addGenre: (state, action: PayloadAction<string>) => {
      if (!action.payload?.match(regex)) {
        return;
      }
      const genreExists = state.genres.some(
        (genre) => genre.name === action.payload
      );
      if (!genreExists) state.genres.push({ name: action.payload });
    },
    setCurrentGenre: (state, action: PayloadAction<string>) => {
      state.currentGenre = { name: action.payload };
    },
    clearGenres: (state) => {
      state.genres = initialState.genres;
    },
  },
});

export const { addGenre, setCurrentGenre, clearGenres } = genresSlice.actions;
export default genresSlice.reducer;
