import MovieCard from "@/components/movie-card";
import MoviesGrid from "@/components/movie-grid";
import Navbar from "@/components/navbar";
import SearchBar from "@/components/search-bar";
import SearchTitle from "@/components/search-title";
import TagFilters from "@/components/tag-filter";
import { Movie, Movies } from "@/lib/types";

/**
 * Renders the search results page with a navbar, search title, search bar, tag filters, and movies grid.
 * @param {Object} props - The props object containing the parameters for the search results.
 * @param {Object} props.params - An object containing the search query title as a string.
 * @param {string} props.params.title - The title of the search query.
 * @returns {JSX.Element} JSX representing the search results page.
 */

export default async function SearchResults({
  params,
}: {
  params: { title: string };
}) {
  let movies: Movies = [];
  try {
    const moviesQuery = await fetch(
      process.env.APIURL + "search/" + params.title,
      {
        cache: "default",
      }
    );
    movies = await moviesQuery.json();
  } catch (error) {
    console.error(error);
  }
  return (
    <>
      <Navbar currentPage="search" />
      <section className="lg:mt-16" aria-labelledby="search-results">
        <SearchTitle />
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
