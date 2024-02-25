import fetch from "node-fetch";
import { MovieResponse, Movies } from "../types";
import getGenreNameById from "./genres";

const apiKey = process.env.APIKEY;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
};

/**
 * Asynchronously fetches movies from a specified URL and processes the results.
 *
 * This function attempts to fetch movie data from an API, processes each movie to include its
 * genre name by ID, and returns a structured array of movie objects.
 *
 * @param {string} url - The URL from which to fetch movie data.
 * @returns {Promise<string | Movies>} - A promise that resolves to either an error message (string)
 *                                        or an array of processed movie objects (Movies).
 */
export default async function FetchMovies(
  url: string
): Promise<string | Movies> {
  try {
    const response = await fetch(url, options);
    const json = await response.json();

    const moviesPromises: Movies = json.results.map(
      async (movie: MovieResponse) => {
        const genreName = await getGenreNameById(movie.genre_ids[0]);
        return {
          id: movie.id,
          title: movie.title,
          release_year: new Date(movie.release_date).getFullYear(),
          poster_path:
            "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/" +
            movie.poster_path,
          rating: Math.ceil(movie.vote_average * 10),
          genre: genreName,
        };
      }
    );

    const movies = await Promise.all(moviesPromises); // Wait for all promises to resolve
    return movies; // Send the movies array back
  } catch (err) {
    console.error("error:" + err);
    return "An error occurred while fetching movies.";
  }
}
