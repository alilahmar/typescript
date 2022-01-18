type TMultiResults<T extends Record<string, unknown>> = {
  page: number;
  results: Array<T>;
  total_results: number;
  total_pages: number;
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

type TMovieSearchIds<A, P, PC, SL extends Record<string, unknown>> = {
  adult:boolean;
  backdrop_path:string | null;
  belongs_to_collection:null | object;
  budget:number;
  genres:Array<A>;
  homepage:string | null;
id:number;
imdb_id:string | null;
original_language:string;
original_title:string;
overview:string | null;
popularity:number;
poster_path:string | null;
production_companies:Array<P>;
production_countries:Array<PC>;
release_date:string;
// how to use date 
// format: date;
revenue:number;
runtime:number | null;
spoken_languages:Array<SL>;
status:string;
// Allowed Values: Rumored, Planned, In Production, Post Production, Released, Canceled
tagline:string | null;
title:string;
video:boolean;
vote_average:number;
vote_count: number
}
type TGenre = {
  id: number;
  name:string
}
type PRocomp = {
  name:string;
id: number;
logo_path:string | null
origin_country:string
}
type PCount = {
  iso_3166_1:string;
name:string;
release_date:string;
// format: date;
revenue: number;
runtime:number | null
}

type SPlanguage = {
  iso_639_1:string;
name:string
}


type TMoviesResult = TMultiResults<TMovie>;
type TMovieSearchId = TMovieSearchIds<TGenre, PRocomp, PCount, SPlanguage>;
export { TMoviesResult, TMovieSearchId};



