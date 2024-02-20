import MovieCard from "@/components/movie-card";
import SearchBar from "@/components/search-bar";
import TagFilters from "@/components/tag-filter";
import Search from "@/pages/search";
import { Movie, Movies } from "@/types";

export default async function SearchPage({
  params,
}: {
  params: { title: string };
}) {
  return (
    <main>
      <Search params={params} />
    </main>
  );
}
