/**
 * Interface representing a movie.
 */

export interface Movie {
  id: number;
  title: string;
  release_year: number;
  poster_path: string;
  rating: number;
  genre: string;
}

/**
 * Type representing an array of movies.
 */

export type Movies = Movie[];

/**
 * Interface representing the props for the MovieCard component.
 */

export interface MovieCardProps {
  movie: Movie;
}

/**
 * Interface representing genres.
 */

export interface Genres {
  genres: Genre[];
  currentGenre: Genre;
}

/**
 * Interface representing a genre.
 */

export interface Genre {
  name: string;
}

/**
 * Interface representing additional details for a movie.
 * Extends the Movie interface.
 */

export interface MovieDetails extends Movie {
  tagline: string;
  overview: string;
  backdrop_path: string;
  genres: string;
  age_rating: string;
  release_date: string;
}
