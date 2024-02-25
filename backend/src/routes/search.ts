import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import fetch from "node-fetch";
import caching from "../middleware/route-cache";
import getGenreNameById from "../utils/genres";

const router = express.Router();
dotenv.config();

const apiKey = process.env.APIKEY;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
};

router.get("/:title", caching, async (req: Request, res: Response) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${req.params.title}&include_adult=false&language=en-US&page=1&region=GB`;
  try {
    const response = await fetch(url, options);
    const json = await response.json();

    const moviesPromises = json.results.map(async (movie: any) => {
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
    });

    const movies = await Promise.all(moviesPromises); // Wait for all promises to resolve
    res.json(movies);
  } catch (err) {
    console.error("error:" + err);
    res.status(500).send("An error occurred while fetching movies.");
  }
});

export default router;
