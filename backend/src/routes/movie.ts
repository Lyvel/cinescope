import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import fetch from "node-fetch";
import caching from "../route-cache";
import { Genre } from "../types";
import getGenreNameById from "./genres";

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

function getAgeRating(releaseDates: any): string {
  let ageRating = "";
  releaseDates.results.map((release: any) => {
    if (release.iso_3166_1 === "GB") {
      release.release_dates.map((date: any) => {
        if (date.certification !== "") {
          ageRating = date.certification;
        }
      });
    }
  });
  return ageRating;
}

router.get("/:id", caching, async (req: Request, res: Response) => {
  const url = `https://api.themoviedb.org/3/movie/${req.params.id}?language=en-US&append_to_response=release_dates`;
  try {
    const response = await fetch(url, options);
    const movie = await response.json();
    const movieDetails = {
      id: movie.id,
      title: movie.title,
      release_year: new Date(movie.release_date).getFullYear(),
      release_date: movie.release_date,
      poster_path:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/" +
        movie.poster_path,
      backdrop_path:
        "https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/" +
        movie.backdrop_path,
      rating: Math.ceil(movie.vote_average * 10),
      genres: movie.genres?.map((genre: Genre) => genre.name).join(", "),
      overview: movie.overview,
      tagline: movie.tagline,
      runtime:
        Math.floor(movie.runtime / 60) + "h " + (movie.runtime % 60) + "m",
      age_rating: getAgeRating(movie.release_dates),
    };
    console.log(movieDetails);
    res.json(movieDetails);
  } catch (err) {
    console.error("error:" + err);
    res.status(500).send("An error occurred while fetching movies.");
  }
});

export default router;
