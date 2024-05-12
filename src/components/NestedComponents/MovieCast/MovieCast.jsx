import { useHttp } from "../../../hooks/useHttp";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "service/moviesAPI";
import CastList from "components/CastList/CastItem";
import s from './MovieCast.module.css'
const MovieCast = () => {
  const { movieId } = useParams();
  const [cast] = useHttp(fetchMovieCast, movieId);
  if (!cast) return;
  return (
    <div>
      <ul className={s.list}>
        {cast.map((item) => {
          console.log(item);
          return <CastList key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default MovieCast;
