import Navbar from "@/components/navbar";
import MovieDetails from "@/components/pages/movie-details";
import Search from "@/components/pages/search-results";

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
