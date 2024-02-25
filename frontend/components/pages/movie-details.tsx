import { MovieDetails } from "@/lib/types";
import FallbackPoster from "@/public/no-poster.png";
import Image from "next/image";

/**
 * Displays details of a movie fetched from an API.
 * @param {Object} props - The props object containing the parameters for the movie details.
 * @param {Object} props.params - An object containing the movie ID as a string.
 * @param {string} props.params.id - The ID of the movie to display details for.
 * @returns {JSX.Element} JSX representing the movie details page.
 */

export default async function MovieDetails({
  params,
}: {
  params: { id: string };
}) {
  const moviesQuery = await fetch(process.env.APIURL + "movie/" + params.id, {
    cache: "default",
  });
  const movieDetails: MovieDetails = await moviesQuery.json();
  return (
    <>
      <div
        className="-z-10 hidden md:flex absolute xl:mt-16 bg-no-repeat xl:bg-cover bg-center blur w-screen h-1/2 "
        style={{
          backgroundImage: `url(
              "${movieDetails.backdrop_path}"
            )`,
        }}
        aria-hidden="true" // Hide the backdrop image from screen readers as it's decorative
      />
      <section className="main-container" aria-labelledby="movie-title">
        <div className="flex-col xl:flex-row flex justify-center gap-10 xl:pt-24 pt-10">
          <Image
            src={
              !movieDetails.poster_path.includes("null")
                ? movieDetails.poster_path
                : FallbackPoster
            }
            alt="movie poster"
            width={300}
            height={450}
            aria-labelledby="movie-poster"
            className="rounded-xl h-full m-auto"
          />
          <div className="p-10 flex-col flex items-center 2xl:items-start gap-5 h-full m-auto 2xl:bg-[#333333] rounded-3xl 2xl:text-left text-center">
            <h1 className="text-5xl font-bold tracking-wide flex flex-col 2xl:flex-row gap-2 justify-center items-center">
              {movieDetails.title}
              <span className="text-gray-300">
                {" "}
                ({movieDetails.release_year})
              </span>
            </h1>
            <div className="flex gap-1 items-center py-2">
              <h2
                className={`border-2 px-1 outline-white rounded-lg ${
                  movieDetails.age_rating === undefined ? "hidden" : ""
                }`}
              >
                {movieDetails.age_rating}
              </h2>
              <h2 className="">
                &#9679; {movieDetails.genres} &#9679;{" "}
                {movieDetails.release_date}
              </h2>
            </div>
            <div className="flex gap-4 items-center">
              <h2
                role="progressbar"
                aria-valuenow={movieDetails.rating}
                aria-valuemax={100}
                aria-valuemin={0}
                className="text-lg font-bold p-4 h-[100px] w-[100px] rounded-full flex items-center justify-center text-green-400"
                style={{
                  background: `radial-gradient(closest-side, #333333 79%, transparent 80% 100%), conic-gradient(rgb(74 222 128) ${movieDetails.rating}%, rgb(220 252 231) 0)`,
                }}
              >
                {movieDetails.rating}%
              </h2>
              <h2>User Rating</h2>
            </div>
            <h2 className="italic text-gray-300">{movieDetails.tagline}</h2>
            <h2 className="text-2xl font-semibold">Overview</h2>
            <h3>{movieDetails.overview}</h3>
          </div>
        </div>
      </section>
    </>
  );
}
