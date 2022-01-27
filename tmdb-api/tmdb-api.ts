import { Axios } from "axios";
import { TMoviesResult, TMovieDetails, TvDetails } from './tmdb-api.types';

class TMDB {
  private _axios: Axios;

  constructor(accessToken: string){
    this._axios = new Axios({baseURL: 'https://api.themoviedb.org/3/',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json;charset=utf-8',
    },
    transformResponse: (res) => JSON.parse(res)
  });
  }

  public async searchMovie(text: string): Promise<TMoviesResult> {
    try {
      const result = await this._axios.get<TMoviesResult>('/search/movie', {
        params: {
          query: text
        }
      });
      return result.data;
    }catch(err){
      return Promise.reject(err);
    }
  }

  public async searchMovieById(movie_id:number): Promise<TMovieDetails> {
    try {
      const result = await this._axios.get<TMovieDetails>(`/movie/${movie_id}`);
      return result.data;
    }catch(err){
      return Promise.reject(err);
    }
  }


  public async tvDetails(tv_id: number): Promise<TvDetails> {
    try {
      const result = await this._axios.get<TvDetails>(`/tv/${tv_id}`);
      return result.data;
    }catch(err){
      return Promise.reject(err);
    }
  }
}





export {TMDB};
