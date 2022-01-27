import { TMDB  } from "./tmdb-api";
require('dotenv').config({path: '../.env'});

const token = process.env.token;
console.log('Token', token);
async function main(): Promise<void> {
  if(!token){
    console.log('API KEY not provided');
    return;
  }
  const tmdb = new TMDB(token);
  const movies = await tmdb.searchMovie('Hunger Games');
  console.log(movies);
  const movie = movies.results[0];
  if(movie){
    console.log('Original Title', movie.id);
    console.log('Overview', movie.overview);
    console.log('Language', movie.original_language);
  }
}

main();