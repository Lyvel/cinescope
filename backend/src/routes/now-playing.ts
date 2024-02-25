import dotenv from "dotenv";
import express, { Request, Response } from "express";
import caching from "../middleware/route-cache";
import { Movies } from "../types";
import FetchMovies from "../utils/fetch";

const router = express.Router();
dotenv.config();

const url =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-GB&page=1";

router.get("/", caching, async (req: Request, res: Response) => {
  const response: Movies | string = await FetchMovies(url);
  console.log(response);

  if (typeof response === "string") {
    res.status(500).send("An error occurred while fetching movies.");
  } else {
    res.json(response);
  }
});

export default router;
