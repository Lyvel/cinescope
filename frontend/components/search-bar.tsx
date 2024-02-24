"use client";
import { clearGenres } from "@/lib/features/genres/slice";
import { setQuery } from "@/lib/features/search-results/slice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  const searchResultQuery = useAppSelector(
    (state: RootState) => state.searchResults.query
  );
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState(searchResultQuery);
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchResultQuery === search) return;
    dispatch(setQuery(search));
    dispatch(clearGenres());
    router.push("/search/" + search);
  };
  return (
    <div className="bg-[#333333] py-2 px-4 rounded-full w-full">
      <form onSubmit={handleSubmit} className="w-full flex justify-between">
        <input
          type="text"
          required
          className="bg-[#333333] outline-none w-full"
          value={search}
          onClick={() => setSearch("")}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">
          <FaSearch className="text-stone-500 hover:text-green-400" />
        </button>
      </form>
    </div>
  );
}
