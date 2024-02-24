"use client";
import { clearGenres, setCurrentGenre } from "@/lib/features/genres/slice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
export default function TagFilters() {
  const genres = useAppSelector((state: RootState) => state.genres.genres);
  const dispatch = useAppDispatch();
  const currentGenre = useAppSelector(
    (state: RootState) => state.genres.currentGenre
  );

  return (
    <ul className="flex gap-2  overflow-auto w-fit">
      {genres.map((tag) => (
        <li
          onClick={() => {
            dispatch(setCurrentGenre(tag.name));
          }}
          key={tag.name}
          className={`${
            currentGenre.name === tag.name
              ? "btn-filter-selected"
              : "btn-filter"
          } cursor-pointer`}
        >
          {tag.name}
        </li>
      ))}
    </ul>
  );
}
