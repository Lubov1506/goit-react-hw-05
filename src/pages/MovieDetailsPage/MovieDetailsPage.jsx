import MovieReviews from "components/MovieReviews/MovieReviews";
import { useHttp } from "../../hooks/useHttp";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { fetchMovieById } from "service/moviesAPI";
import s from './MovieDetailsPage.module.css'

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const goBackRef = useRef(location.state || "/movies");
  const [movie, _, loading] = useHttp(fetchMovieById, movieId);
  console.log(movie);
  if(!movie) return <p>Loading ...</p>
  return (
    <div>
      <Link to={goBackRef.current}>Go back</Link>
      <section className={s.main_info}>
        <div className={s.img_wrap}><img src={movie.poster} alt="" /></div>
        
        <div>
          <h2>{ movie.title}</h2>

      </div>
    </section>

    </div>
  );
};

export default MovieDetailsPage;
