import { tags } from "@/assets/constants";
import MovieCard from "@/components/movie-card";
import SearchBar from "@/components/search-bar";
export default function Trending() {
  return (
    <section className="mt-16">
      <h1 className="font-bold text-6xl tracking-wider">Trending Movies</h1>
      <div className="pt-10 flex justify-between">
        <ul className="flex gap-2">
          {tags.map((tag) => (
            <li key={tag.value} className="btn-filter">
              {tag.title}
            </li>
          ))}
        </ul>
        <div>
          <SearchBar />
        </div>
      </div>
      <div className="grid-cols-4 grid gap-10 pt-16">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </section>
  );
}
