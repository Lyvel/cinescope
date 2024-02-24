import MovieCard from "@/components/movie-card";
import MoviesGrid from "@/components/movie-grid";
import Navbar from "@/components/navbar";
import SearchBar from "@/components/search-bar";
import SearchTitle from "@/components/search-title";
import TagFilters from "@/components/tag-filter";
import { Movie, Movies } from "@/lib/types";

export default async function SearchResults({
  params,
}: {
  params: { title: string };
}) {
  const moviesQuery = await fetch(
    "http://localhost:3001/search/" + params.title,
    {
      cache: "default",
    }
  );
  const movies: Movies = await moviesQuery.json();
  return (
    <>
      <Navbar currentPage="search" />
      <section className="lg:mt-16">
        <SearchTitle />
        <div className="pt-10 flex flex-col gap-4">
          <div className="xl:hidden">
            <SearchBar />
          </div>
          <ul className="flex gap-2 w-full">
            <TagFilters />
          </ul>
        </div>
        <MoviesGrid movies={movies} />
      </section>
    </>
  );
}
