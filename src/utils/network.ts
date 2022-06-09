const baseURL = "https://api.themoviedb.org/3";
const apiKey = "api_key=e47c6a91d4916f2683fa83e81c424ffd";

export const requestUrl = `${baseURL}/movie/popular?${apiKey}&language=en-US`;

export const searchUrl = `${baseURL}/search/movie?${apiKey}&language=en-US&query=`;

export const movieUrl = `https://api.themoviedb.org/3/movie/movieId?${apiKey}&language=en-US`;
