import MovieView from "@/components/movie-view";

/**
 * A page component for displaying top-rated movies.
 * @returns {JSX.Element} JSX representing the Top Rated page component.
 */

export default function TopRatedPage() {
  return (
    <main className="main-container">
      <MovieView pageName="Top Rated" queryUrl="top-rated" />
    </main>
  );
}
