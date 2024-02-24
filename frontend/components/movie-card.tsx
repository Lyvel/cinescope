"use client";
import { addGenre } from "@/lib/features/genres/slice";
import { addMovie } from "@/lib/features/movies/slice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { MovieCardProps } from "@/lib/types";
import FallbackPoster from "@/public/no-poster.png";
import Link from "next/link";
import ImageFallback from "./image-fallback";

export default function MovieCard({ movie }: MovieCardProps) {
  const currentGenre = useAppSelector(
    (state: RootState) => state.genres.currentGenre
  );
  const dispatch = useAppDispatch();
  dispatch(addGenre(movie.genre));
  dispatch(addMovie(movie));

  if (currentGenre.name === "All" || currentGenre.name === movie.genre) {
    return (
      <Link
        href={`/movie/${movie.id}`}
        className="flex flex-col cursor-pointer xl:hover:scale-110 transition-all"
      >
        <ImageFallback
          src={movie.poster_path}
          fallbackSrc={FallbackPoster}
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
}
