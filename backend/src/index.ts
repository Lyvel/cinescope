import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import movie from "./routes/movie";
import search from "./routes/search";
import topRated from "./routes/top-rated";
import trending from "./routes/trending";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use("/trending", trending);
app.use("/search", search);
app.use("/movie", movie);
app.use("/top-rated", topRated);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
