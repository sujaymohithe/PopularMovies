import axios from "axios";
import { requestUrl, searchUrl, movieUrl } from "../utils/network";

//load popular movies or search movies
class APIService {
  static loadPopularMovies(page = 1, searchTerm: string): Promise<any | null> {
    const url = searchTerm
      ? `${searchUrl}${searchTerm}&page=${page}`
      : `${requestUrl}&page=${page}`;
    return axios
      .get(`${url}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error(error);
        return null;
      });
  }

  //load movie details
  static loadMovieDetails(id: string): Promise<any | null> {
    const movieURL = movieUrl.replace("movieId", id);
    return axios
      .get(movieURL)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error(error);
        return null;
      });
  }
}

export default APIService;
