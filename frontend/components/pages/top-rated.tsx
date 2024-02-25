import MoviesGrid from "@/components/movie-grid";
import Navbar from "@/components/navbar";
import SearchBar from "@/components/search-bar";
import TagFilters from "@/components/tag-filter";
import { Movies } from "@/lib/types";

/**
 * Renders the page displaying top-rated movies with a navbar, search bar, tag filters, and a grid of movies.
 * @returns {JSX.Element} JSX representing the page displaying top-rated movies.
 */

export default async function TopRated() {
  let movies: Movies = [];
  try {
    const moviesQuery = await fetch("http://localhost:3001/top-rated", {
      cache: "default",
    });
    movies = await moviesQuery.json();
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <Navbar currentPage="Top Rated" />
      <section className="xl:mt-16" aria-labelledby="top-rated-heading">
        <h1
          id="top-rated-heading"
          className="font-bold text-6xl tracking-wider"
        >
          Top Rated Movies
        </h1>
        <div className="pt-10 flex flex-col gap-4">
          <div className="xl:hidden" aria-hidden="true">
            <SearchBar />
          </div>
          <ul
            className="flex gap-2 w-full"
            role="list"
            aria-label="Tag Filters"
          >
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
