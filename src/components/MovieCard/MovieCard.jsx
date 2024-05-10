import s from "./MovieCard.module.css";
import { MdGrade } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const MovieCard = ({ item }) => {
  const location = useLocation();
  return (
    <li className={s.card}>
      <Link to={`/movies/${item.id}`} state={location}>
        <div className={s.img_wrap}>
          <img src={item.poster} alt="" />
        </div>
        <div className={s.desc}>
          <p> {item.title}</p>
          <div className={s.votes}>
            <p>
              <MdGrade /> {item.vote_average}
            </p>
            <p>
              <FaEye /> {item.vote_count}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default MovieCard;
