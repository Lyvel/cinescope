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
export interface Genres {
  genres: Genre[];
  currentGenre: Genre;
}

export interface Genre {
  name: string;
}

export interface MovieDetails extends Movie {
  tagline: string;
  overview: string;
  backdrop_path: string;
  genres: string;
  age_rating: string;
  release_date: string;
}
