export interface GenresResponse {
  genres: Genre[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  id: number;
  title: string;
  release_year: number;
  poster_path: string;
  rating: number;
  genre: string;
}

export type Movies = Movie[];

export interface MovieResponse {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ExtendedMovieResponse extends MovieResponse {
  belongs_to_collection: null | {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
  };
  budget: number;
  genres: Array<{
    id: number;
    name: string;
  }>;
  homepage: string;
  imdb_id: string;
  production_companies: Array<{
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }>;
  production_countries: Array<{
    iso_3166_1: string;
    name: string;
  }>;
  revenue: number;
  runtime: number;
  spoken_languages: Array<{
    english_name: string;
    iso_639_1: string;
    name: string;
  }>;
  status: string;
  tagline: string;
  release_dates: {
    results: Array<ReleaseDatesResults>;
  };
}

export interface ReleaseDatesResults {
  iso_3166_1: string;
  release_dates: Array<ReleaseDates>;
}

export interface ReleaseDates {
  certification: string;
  descriptors: any[];
  iso_639_1: string;
  note: string;
  release_date: string;
  type: number;
}

export interface MovieDetails extends Movie {
  tagline: string;
  overview: string;
  backdrop_path: string;
  genres: string;
  age_rating: string;
  release_date: string;
  runtime: string;
}
