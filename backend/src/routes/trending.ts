import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import fetch from "node-fetch";
import caching from "../route-cache";
import getGenreNameById from "./genres";

const router = express.Router();
dotenv.config();

const url = "https://api.themoviedb.org/3/trending/movie/week?language=en-US";
const apiKey = process.env.APIKEY;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
};

router.get("/", caching, async (req: Request, res: Response) => {
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
    res.json(movies); // Send the movies array back as response
  } catch (err) {
    console.error("error:" + err);
    res.status(500).send("An error occurred while fetching movies.");
  }
});

export default router;
