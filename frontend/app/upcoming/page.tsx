import MovieView from "@/components/movie-view";

/**
 * A page component for displaying upcoming movies.
 * @returns {JSX.Element} JSX representing the Upcoming page component.
 */

export default function UpcomingPage() {
  return (
    <main className="main-container">
      <MovieView pageName="Upcoming" queryUrl="upcoming" />
    </main>
  );
}
