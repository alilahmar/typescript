type TMultiResults<T extends Record<string, unknown>> = {
  page: number;
  results: Array<T>;
  total_results: number;
  total_pages: number;
}

type TProductionCountry = {
  iso_3166_1: string,
  name: string;
}

type TGenre = {
  id: number;
  name:string
}

type TProductionCompany = {
  name:string;
  id: number;
  logo_path:string | null
  origin_country:string
}


type TSpokenLanguages = {
  iso_639_1:string;
  name:string
}

type TMovie = {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: Array<number>;
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: string;
  vote_count: number;
  video: boolean;
  vote_average: number;
}
type CreatedBy ={
  id: number;
  credit_card:string;
  name:string;
  gender:number;
  profile_path: string | null
}
type Genres={
  id: Number;
  name: number
}
type LastEpisode = {
  air_date:string;
  episode_number:number;
  id:number;
  name:string;
  next_episode_to_air:null;
  overview: string;
  production_code:string;
  season_number: number;
  still_path:string | null;
  vote_average:number;
  vote_count: number
}
  type Networks = {
  name:string;
  id:number;
  logo_path:string | null;
  origin_country:string
  }
  type ProductionCompany = {
  id: number;
  logo_path:null | string;
  name:string;
  origin_country:string
  }
  type ProductionCountry = {
    iso_3166_1:string;
    name:string
  }
  type Seasons = {
    air_date:string;
    episode_count:number;
    id: number;
    name:string;
    overview:string;
    poster_path:string;
    season_number:number
  }
  type SpokenLanguage = {
    english_name:string;
    iso_639_1:string;
    name:string
  }

type TStatus = 'Rumored' | 'Planned' | 'In Production' | 'Production' | 'Released' | 'Canceled';

type TMovieDetails = {
  adult:boolean;
  backdrop_path:string | null;
  belongs_to_collection:null | object;
  budget:number;
  genres:Array<number>;
  homepage:string | null;
  id:number;
  imdb_id:string | null;
  original_language:string;
  original_title:string;
  overview:string | null;
  popularity:number;
  poster_path:string | null;
  production_companies:Array<TProductionCompany>;
  production_countries:Array<TProductionCountry>;
  release_date:string;
  revenue:number;
  runtime:number | null;
  spoken_languages:Array<TSpokenLanguages>;
  status:TStatus;
  tagline:string | null;
  title:string;
  video:boolean;
  vote_average:number;
  vote_count: number
}

type TvDetails = {
  backdrop_path: string | null;
  created_by:Array<CreatedBy>;
  episode_run_time:Array<Number>;
  first_air_date: string;
  genres:Array<Genres>;
  homepage:string;
  id:number;
  in_production:boolean;
  languages: Array<string>;
  last_air_date:string;
  last_episode_to_air: Array<LastEpisode>;
  name:string;
  next_episode_to_air: null;
  networks: Array<Networks>;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country:Array<string>;
  original_language:string;
  original_name:string;
  overview:string;
  popularity:number;
  poster_path:string | null;
  production_companies:Array<ProductionCompany>;
  production_countries:Array<ProductionCountry>;
  seasons:Array<Seasons>;
  spoken_languages:Array<SpokenLanguage>;
  status:string;
  tagline:string;
  type:string;
  vote_average:number;
  vote_count:number
}

type TMoviesResult = TMultiResults<TMovie>;

export { TMoviesResult, TMovieDetails, TvDetails};



