import MovieView from "@/components/movie-view";

/**
 * Renders the home page with a MovieView component displaying trending movies.
 * @returns {JSX.Element} JSX representing the home page.
 */

export default function Home() {
  return (
    <main className="main-container">
      <MovieView pageName="Trending" queryUrl="trending" />
    </main>
  );
}
