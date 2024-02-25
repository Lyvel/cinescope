import { Movie, Movies } from "@/lib/types";
import MovieCard from "./movie-card";

interface MovieGridProps {
  movies: Movies;
}
/**
 * A component that renders a grid of movie cards.
 * @param {Object} props - The props object containing the movies to display.
 * @param {Movie[]} props.movies - An array of movie objects to be displayed in the grid.
 * @returns {JSX.Element} JSX representing the movie grid component.
 */

export default function MoviesGrid({ movies }: MovieGridProps) {
  return (
    <div
      role="grid"
      className="xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-10 pt-10 lg:pt-16"
    >
      {movies.map((movie: Movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
