import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/slice";
import genresReducer from "./features/genres/slice";
import moviesReducer from "./features/movies/slice";
import searchResultsReducer from "./features/search-results/slice";
/**
 * A function that creates and configures the Redux store.
 * @returns {EnhancedStore} The Redux store instance.
 */
export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      searchResults: searchResultsReducer,
      genres: genresReducer,
      movies: moviesReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
