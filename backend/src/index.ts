import dotenv from "dotenv";
import express, { Express } from "express";
import { limiter } from "./middleware/rate-limited";
import movie from "./routes/movie";
import nowPlaying from "./routes/now-playing";
import search from "./routes/search";
import topRated from "./routes/top-rated";
import trending from "./routes/trending";
import upcoming from "./routes/upcoming";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(limiter);
app.use("/trending", trending);
app.use("/search", search);
app.use("/movie", movie);
app.use("/top-rated", topRated);
app.use("/upcoming", upcoming);
app.use("/now-playing", nowPlaying);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
