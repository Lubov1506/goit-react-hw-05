import MovieCard from "components/MovieCard/MovieCard";
import s from './MoviesList.module.css'
const MoviesList = ({ movies }) => {
  console.log(movies);
  return (
    <ul className={s.list}>
      {movies?.map((item) => {
        return <MovieCard key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default MoviesList;
