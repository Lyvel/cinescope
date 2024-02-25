"use client";
import { clearGenres, setCurrentGenre } from "@/lib/features/genres/slice";
import { setQuery } from "@/lib/features/search-results/slice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

/**
 * A component representing a search bar for searching movies.
 * @returns {JSX.Element} JSX representing the search bar component.
 */

export default function SearchBar() {
  const searchResultQuery = useAppSelector(
    (state: RootState) => state.searchResults.query
  );
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState(searchResultQuery);
  const router = useRouter();

  /**
   * Handles the form submission.
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search !== searchResultQuery) dispatch(clearGenres());
    dispatch(setCurrentGenre("All"));
    dispatch(setQuery(search));
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
          placeholder="Search..."
          aria-label="Search movies"
        />
        <button type="submit" aria-label="Submit search">
          <FaSearch className="text-stone-500 hover:text-green-400" />
        </button>
      </form>
    </div>
  );
}
