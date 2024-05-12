import Loader from "components/Loader/Loader";
import { useHttp } from "../../../hooks/useHttp";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "service/moviesAPI";
import ReviewItem from "components/ReviewItem/ReviewItem";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews] = useHttp(fetchMovieReviews, movieId);

  if (!reviews) return <Loader />;

  return (
    <div>
      {reviews && (
        <ul className={s.list_rev}>
          {reviews.map((item) => {
            return <ReviewItem key={item.id} item={item} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;
