"use client";
import { setCurrentGenre } from "@/lib/features/genres/slice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";

/**
 * A component representing tag filters for genres.
 * @returns {JSX.Element} JSX representing the tag filters component.
 */

export default function TagFilters() {
  const genres = useAppSelector((state: RootState) => state.genres.genres);
  const dispatch = useAppDispatch();
  const currentGenre = useAppSelector(
    (state: RootState) => state.genres.currentGenre
  );

  return (
    <ul role="list" className="flex gap-2 overflow-auto w-fit pb-2">
      {genres.map((tag) => (
        <li key={tag.name}>
          <button
            onClick={() => {
              dispatch(setCurrentGenre(tag.name));
            }}
            className={`${
              currentGenre.name === tag.name
                ? "btn-filter-selected"
                : "btn-filter"
            } cursor-pointer`}
            aria-current={currentGenre.name === tag.name ? "true" : undefined}
          >
            {tag.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
