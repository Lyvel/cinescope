"use client";
import { tags } from "@/assets/constants";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
export default function TagFilters() {
  const searchParams = useSearchParams();
  const currentTag = searchParams?.get("tag") || "ALL";
  return (
    <ul className="flex gap-2">
      {tags.map((tag) => (
        <Link
          href={`/?tag=${tag.value}`}
          key={tag.value}
          className={
            currentTag === tag.value ? "btn-filter-selected" : "btn-filter"
          }
        >
          {tag.title}
        </Link>
      ))}
    </ul>
  );
}
