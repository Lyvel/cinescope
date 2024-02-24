"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
export default function SearchTitle() {
  const searchResultQuery = useAppSelector(
    (state: RootState) => state.searchResults.query
  );
  return (
    <h1 className="font-bold text-6xl tracking-wider text-center xl:text-left ">
      Searching: {searchResultQuery.toLocaleUpperCase()}
    </h1>
  );
}
