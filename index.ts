import { TMDB  } from "./tmdb-api";
// import {TMDBVID} from './tmdb-api'


var port = process.env.token;
async function main(): Promise<void> {
  const tmdb = new TMDB(`${port}`);
  const movies = await tmdb.searchMovie('Hunger Games');
  const movie = movies.results[0];
  if(movie){
    console.log('Original Title', movie.id);
    console.log('Overview', movie.overview);
    console.log('Language', movie.original_language);
  }

//   const movieId = await  TMDBVID.searchMovieById()
//   const movieTest = movieId.results[0]
//  if(movieTest){
//    console.log()
//  }
}

main();