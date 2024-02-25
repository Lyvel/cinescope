import dotenv from "dotenv";
import fetch from "node-fetch";
import { cache } from "../middleware/route-cache";
import { Genre, GenresResponse } from "../types";
dotenv.config();

const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
const apiKey = process.env.APIKEY;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
};

const fetchGenres = async (): Promise<Genre[]> => {
  const key = "__express__genres";
  const cachedResponse = cache.get(key) as Genre[] | undefined;

  if (cachedResponse) {
    return cachedResponse;
  } else {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json: GenresResponse = await response.json();
      cache.set(key, json.genres, 300);
      return json.genres;
    } catch (err) {
      console.error("error: " + err);
      return [];
    }
  }
};

async function getGenreNameById(genreId: number): Promise<string | undefined> {
  try {
    const genres = await fetchGenres();
    const genre = genres.find((g) => g.id === genreId);
    return genre ? genre.name : undefined;
  } catch (error) {
    console.error("Error fetching genres: ", error);
    return undefined;
  }
}

export default getGenreNameById;
