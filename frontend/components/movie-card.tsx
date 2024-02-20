import MoviePoster from "@/public/movie-poster.jpg";
import Image from "next/image";

export default function MovieCard() {
  return (
    <div className="flex flex-col cursor-pointer">
      <Image src={MoviePoster} alt="Movie Poster" className="rounded-xl" />
      <div className="pt-2">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">Deadpool</h1>
          <h2 className="border-2 p-1 text-xs outline-white rounded-lg">
            PG-13
          </h2>
        </div>
        <h2 className="font-light">Action &#9679; 2h &#9679; 2018</h2>
      </div>
    </div>
  );
}
