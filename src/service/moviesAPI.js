import axios from "axios";
import { transformMoviesData } from "helpers/transformMoviesData";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/trending/",
});
const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGI1MjhjZGRmNGExYzc1NTU3YzFiMGI1NTRmNWVhNSIsInN1YiI6IjY2M2RiYzI0MzA0MmYzNWJlM2ZiMTMwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wwUvIt_qmoKfzSPjtQMoX2Vt4pVr0vcSwnfFIT_Fz1Y",
  },
};
export const fetchMovies = async () => {
  const { data } = await instance.get("movie/day", options);
  return transformMoviesData(data.results);
};
