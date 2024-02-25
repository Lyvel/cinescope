import MovieView from "@/components/movie-view";

/**
 * A page component for displaying movies currently playing.
 * @returns {JSX.Element} JSX representing the Now Playing page component.
 */

export default function NowPlayingPage() {
  return (
    <main className="main-container">
      <MovieView pageName="Now Playing" queryUrl="now-playing" />
    </main>
  );
}
