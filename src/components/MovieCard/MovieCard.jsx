import s from "./MovieCard.module.css";
import { MdGrade } from "react-icons/md";
import { FaEye } from "react-icons/fa";

const MovieCard = ({ item }) => {
  return (
    <li className={s.card}>
      <div className={s.img_wrap}><img src={item.poster} alt="" /></div>

      <div className={s.desc}>
        <p> {item.title}</p>
        <div className={s.votes}>
          <p><MdGrade /> { item.vote_average}</p>
          <p><FaEye /> { item.vote_count}</p>
        </div>
      </div>
    </li>
  );
};

export default MovieCard;
