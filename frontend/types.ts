export interface Movie {
  id: number;
  title: string;
  release_year: number;
  poster_path: string;
  rating: number;
  genre: string;
}

export type Movies = Movie[];

export interface MovieCardProps {
  movie: Movie;
}
