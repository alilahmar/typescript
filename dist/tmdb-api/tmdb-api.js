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
exports.TMDBVID = exports.TMDB = void 0;
const axios_1 = require("axios");
class TMDB {
    constructor(accessToken) {
        this._axios = new axios_1.Axios({ baseURL: 'https://api.themoviedb.org/3/',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json;charset=utf-8',
            },
            transformResponse: (res) => JSON.parse(res)
        });
    }
    searchMovie(text) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this._axios.get('/search/movie', {
                    params: {
                        query: text
                    }
                });
                return result.data;
            }
            catch (err) {
                return Promise.reject(err);
            }
        });
    }
}
exports.TMDB = TMDB;
class TMDBVID {
    constructor(accessToken) {
        this._axios = new axios_1.Axios({ baseURL: 'https://api.themoviedb.org/3/',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json;charset=utf-8',
            },
            transformResponse: (res) => JSON.parse(res)
        });
    }
}
exports.TMDBVID = TMDBVID;
//# sourceMappingURL=tmdb-api.js.map