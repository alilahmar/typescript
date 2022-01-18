"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const tmdb_api_1 = require("./tmdb-api");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const tmdb = new tmdb_api_1.TMDB('eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzcwYWVlN2NmY2UxNjViZTU4YTUxZDQ4ODdjMzIzZCIsInN1YiI6IjYxZDQ5MjQ3YTIyZDNlMDAxZGE0MDZlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vOtU9DE6EQOv6IaYBFwmrPtZch793LCAoqorjEjcrBQ');
        const movies = yield tmdb.searchMovie('Hunger Games');
        const movie = movies.results[0];
        if (movie) {
            console.log('Original Title', movie.id);
            console.log('Overview', movie.overview);
            console.log('Language', movie.original_language);
        }
    });
}
main();
//# sourceMappingURL=index.js.map