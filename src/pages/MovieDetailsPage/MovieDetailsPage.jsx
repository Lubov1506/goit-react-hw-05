import MovieReviews from "components/MovieReviews/MovieReviews";
import { useHttp } from "../../hooks/useHttp";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { fetchMovieById } from "service/moviesAPI";
import s from "./MovieDetailsPage.module.css";
import Container from "components/Container/Container";
import Loader from "components/Loader/Loader";
import Button from "components/Button/Button";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const goBackRef = useRef(location.state || "/movies");
  const [movie, _, loading] = useHttp(fetchMovieById, movieId);
  console.log(movie);
  if (!movie) return <Loader />;
  
  return (
    <div>
      <Container className={s.container}>
        <Link to={goBackRef.current}><Button>Go back</Button></Link>
        <section className={s.main_info}>
          <div className={s.img_wrap}>
            <img src={movie.poster} alt={movie.title} />
          </div>

          <div className={s.descript}>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <ul className={s.genres}>{movie.genres.map(item => {
              return <li key={item.id} className={s.genre}>{ item.name}</li>
            })}</ul>
          </div>
        </section>
        
      </Container>
    </div>
  );
};

export default MovieDetailsPage;
