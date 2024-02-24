import MovieCard from "@/components/movie-card";
import MoviesGrid from "@/components/movie-grid";
import Navbar from "@/components/navbar";
import SearchBar from "@/components/search-bar";
import TagFilters from "@/components/tag-filter";
import { Movie, Movies } from "@/lib/types";
export default async function Trending() {
  const moviesQuery = await fetch("http://localhost:3001/trending", {
    cache: "default",
  });
  const movies: Movies = await moviesQuery.json();

  return (
    <>
      <Navbar currentPage="Trending" />
      <section className="xl:mt-16">
        <h1 className="font-bold text-6xl tracking-wider">Trending Movies</h1>
        <div className="pt-10 flex flex-col gap-4">
          <div className="xl:hidden">
            <SearchBar />
          </div>
          <ul className="flex gap-2 w-full">
            <TagFilters />
          </ul>
        </div>
        {movies.length === 0 ? (
          <h1 className="text-3xl font-bold pt-10">No Movies Found</h1>
        ) : (
          <MoviesGrid movies={movies} />
        )}
      </section>
    </>
  );
}
