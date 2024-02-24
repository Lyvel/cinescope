import { Movie, Movies } from "@/lib/types";
import MovieCard from "./movie-card";

interface MovieGridProps {
  movies: Movies;
}

export default function MoviesGrid({ movies }: MovieGridProps) {
  return (
    <div className="xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-10 pt-10 lg:pt-16">
      {movies.map((movie: Movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
