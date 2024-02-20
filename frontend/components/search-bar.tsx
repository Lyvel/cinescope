"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
export default function SearchBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/search/" + search);
  };
  return (
    <div className="bg-[#333333] flex justify-between items-center py-2 px-4 rounded-full">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="bg-[#333333] outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">
          <FaSearch className="text-stone-500" />
        </button>
      </form>
    </div>
  );
}
