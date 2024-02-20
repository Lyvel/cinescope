import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import search from "./routes/search";
import trending from "./routes/trending";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use("/trending", trending);
app.use("/search", search);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
