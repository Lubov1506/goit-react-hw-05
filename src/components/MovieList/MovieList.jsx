import MovieCard from "components/MovieCard/MovieCard";
import s from "./MovieList.module.css";
const MovieList = ({ movies }) => {
  return (
    <ul className={s.list}>
      {movies?.map((item) => {
        return <MovieCard key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default MovieList;
