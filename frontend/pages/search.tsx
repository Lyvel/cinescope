import MovieCard from "@/components/movie-card";
import SearchBar from "@/components/search-bar";
import TagFilters from "@/components/tag-filter";
import { Movie, Movies } from "@/types";

export default async function Search({
  params,
}: {
  params: { title: string };
}) {
  const moviesQuery = await fetch(
    "http://localhost:3001/search/" + params.title,
    {
      cache: "no-cache",
    }
  );
  const movies: Movies = await moviesQuery.json();
  return (
    <section className="mt-16">
      <h1 className="font-bold text-6xl tracking-wider">
        Searching: {params.title}
      </h1>
      <div className="pt-10 flex justify-between">
        <ul className="flex gap-2">
          <TagFilters />
        </ul>
        <div>
          <SearchBar />
        </div>
      </div>
      <div className="grid-cols-4 grid gap-10 pt-16">
        {movies.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
