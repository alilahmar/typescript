import { Axios } from "axios";
import { TMoviesResult } from './tmdb-api.types';
import {TMovieSearchId} from './tmdb-api.types'

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
}


class TMDBVID {
  private _axios: Axios;

  constructor(accessToken: string,movie_id:number){
    this._axios = new Axios({baseURL: `https://api.themoviedb.org/3/${movie_id}`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json;charset=utf-8',
    },
    transformResponse: (res) => JSON.parse(res)
  });

  }
  public async searchMovieById(text: string, movie_id:number): Promise<TMovieSearchId> {
    try {
      const result = await this._axios.get<TMovieSearchId>(`/movie/${movie_id}`, {
        params: {
          query: text
        }
      });
      return result.data;
    }catch(err){
      return Promise.reject(err);
    }
  }
}

export {TMDB, TMDBVID};
