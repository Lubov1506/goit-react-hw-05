import axios from "axios";
import { createImgURL } from "helpers/createImgURL";
import { transformCastData } from "helpers/transformCastData";
import { transformMoviesData } from "helpers/transformMoviesData";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});
instance.defaults.headers.Authorization =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGI1MjhjZGRmNGExYzc1NTU3YzFiMGI1NTRmNWVhNSIsInN1YiI6IjY2M2RiYzI0MzA0MmYzNWJlM2ZiMTMwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wwUvIt_qmoKfzSPjtQMoX2Vt4pVr0vcSwnfFIT_Fz1Y";

export const fetchMovies = async () => {
  const { data } = await instance.get("trending/movie/day");
  return transformMoviesData(data.results);
};
export const fetchMovieById = async (movieId) => {
  const { data } = await instance.get(`movie/${movieId}`);
  return transformMoviesData([data])[0];
};
export const fetchMovieByQuery = async (query) => {
  const { data } = await instance.get(`search/movie`, {
    params: {
      query,
    },
  });
  return transformMoviesData(data.results);
};
export const fetchMovieCast = async (movieId) => {
  const { data } = await instance.get(`movie/${movieId}/credits`);
  return transformCastData(data.cast);
};
export const fetchMovieReviews = async (movieId) => {
  const {
    data: { results },
  } = await instance.get(`movie/${movieId}/reviews`);
  return results;
};
