"use client";
import { addGenre } from "@/lib/features/genres/slice";
import { addMovie } from "@/lib/features/movies/slice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { MovieCardProps } from "@/lib/types";
import FallbackPoster from "@/public/no-poster.png";
import Image from "next/image";
import Link from "next/link";
// import ImageFallback from "./image-fallback";

/**
 * A component representing a movie card.
 * @param {Object} props - The props object containing the movie details.
 * @param {Object} props.movie - The movie object containing details like title, genre, release year, and rating.
 * @returns {JSX.Element|null} JSX representing the movie card component or null if the current genre does not match the movie's genre.
 */

export default function MovieCard({ movie }: MovieCardProps) {
  const currentGenre = useAppSelector(
    (state: RootState) => state.genres.currentGenre
  );
  const dispatch = useAppDispatch();
  dispatch(addMovie(movie));
  dispatch(addGenre(movie.genre));

  // Render the movie card only if it belongs to the current genre or the current genre is "All"
  if (currentGenre.name === "All" || currentGenre.name === movie.genre) {
    return (
      <Link
        href={`/movie/${movie.id}`}
        className="flex flex-col cursor-pointer xl:hover:scale-110 transition-all"
        role="link"
        aria-label={`View details of ${movie.title}`}
      >
        <Image
          src={
            !movie.poster_path.includes("null")
              ? movie.poster_path
              : FallbackPoster
          }
          alt="Movie Poster"
          className="rounded-xl"
          width={600}
          height={900}
        />
        <div className="pt-2">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold tracking-wide">{movie.title}</h1>
            <h2 className="border-2 p-1 text-xs outline-white rounded-lg">
              {movie.rating}%
            </h2>
          </div>
          <h2 className="font-light">
            {movie.genre} &#9679; {movie.release_year}
          </h2>
        </div>
      </Link>
    );
  }

  // Return null if the current genre does not match the movie's genre
  return null;
}
