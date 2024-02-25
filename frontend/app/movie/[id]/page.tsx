import Navbar from "@/components/navbar";
import MovieDetails from "@/components/pages/movie-details";

/**
 * A page component for displaying movie details.
 * @param {Object} props - The props object containing the parameters for the movie details.
 * @param {Object} props.params - An object containing the movie ID as a string.
 * @param {string} props.params.id - The ID of the movie to display details for.
 * @returns {JSX.Element} JSX representing the movie details page component.
 */

export default async function MovieDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <main className="my-10">
      <div className="main-container">
        <Navbar currentPage="search" />
      </div>
      <MovieDetails params={params} />
    </main>
  );
}
