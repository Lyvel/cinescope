import { MovieCardProps } from "@/types";
import Image from "next/image";

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="flex flex-col cursor-pointer">
      <Image
        src={movie.poster_path}
        alt="Movie Poster"
        className="rounded-xl"
        width={600}
        height={900}
      />
      <div className="pt-2">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">{movie.title}</h1>
          <h2 className="border-2 p-1 text-xs outline-white rounded-lg">
            {movie.rating}%
          </h2>
        </div>
        <h2 className="font-light">
          {movie.genre} &#9679; {movie.release_year}
        </h2>
      </div>
    </div>
  );
}
