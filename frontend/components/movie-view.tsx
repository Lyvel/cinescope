import { Movies } from "@/lib/types";
import MoviesGrid from "./movie-grid";
import Navbar from "./navbar";
import SearchBar from "./search-bar";
import TagFilters from "./tag-filter";

interface MovieViewProps {
  pageName: string;
  queryUrl: string;
}

/**
 * Renders the movie view page including a navigation bar, search bar, tag filters, and a grid of movies.
 *
 * @param {MovieViewProps} props - The props object containing pageName and queryUrl.
 * @returns The movie view component with a navbar, search bar, tag filters, and either a message indicating no movies were found or a grid of movies.
 */
export default async function MovieView(props: MovieViewProps) {
  let movies: Movies = [];
  try {
    const moviesQuery = await fetch(process.env.APIURL + props.queryUrl, {
      cache: "default",
    });
    movies = await moviesQuery.json();
  } catch (error) {
    console.error(error);
  }
  return (
    <>
      <Navbar currentPage={props.pageName} />
      <main className="xl:mt-16" role="main">
        <header>
          <h1 className="font-bold text-6xl tracking-wider">
            {props.pageName} Movies
          </h1>
        </header>
        <section className="pt-10 flex flex-col gap-4">
          <div className="xl:hidden">
            <SearchBar />
          </div>
          <ul className="flex gap-2 w-full" role="list">
            <TagFilters />
          </ul>
        </section>

        {movies.length === 0 ? (
          <h2 className="text-3xl font-bold pt-10">No Movies Found</h2>
        ) : (
          <MoviesGrid movies={movies} />
        )}
      </main>
    </>
  );
}
