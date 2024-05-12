import MovieReviews from "components/NestedComponents/MovieReviews/MovieReviews";
import { useHttp } from "../../hooks/useHttp";
import { Suspense, useRef } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { fetchMovieById } from "service/moviesAPI";
import s from "./MovieDetailsPage.module.css";
import Container from "components/Container/Container";
import Loader from "components/Loader/Loader";
import Button from "components/Button/Button";
import { buildLinkClass } from "helpers/addActiveClass";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const goBackRef = useRef(location.state || "/movies");
  const [movie, _, loading] = useHttp(fetchMovieById, movieId);
  if (!movie) return <Loader />;
  return (
    <div>
      <Container>
        <div className={s.container}>
          <Link to={goBackRef.current}>
            <Button>Go back</Button>
          </Link>
          <section className={s.main_info}>
            <div className={s.img_wrap}>
              <img src={movie.poster} alt={movie.title} />
            </div>
            <div className={s.descript}>
              <div>
                <h2>{movie.title}</h2>
                {movie.original_title && (
                  <p className={s.subtitle}>{movie.original_title}</p>
                )}
              </div>
              <p>{movie.overview}</p>
              <ul className={s.genres}>
                {movie.genres.map((item) => {
                  return (
                    <li key={item.id} className={s.genre}>
                      {item.name}
                    </li>
                  );
                })}
              </ul>

              <p>
                <span className={s.accent}>Country</span>{" "}
                {movie.production_countries.map((item) => item.name).join(", ")}
                .
              </p>
              <p>
                <span className={s.accent}>Produced by:</span>{" "}
                {movie.production_companies.map((item) => item.name).join(", ")}
                .
              </p>
            </div>
          </section>
          <section>
            <nav className={s.nav_list}>
              <NavLink
                to="cast"
                className={({ isActive }) =>
                  buildLinkClass(isActive, s.movieLink)
                }
              >
                Cast
              </NavLink>
              <NavLink
                to="reviews"
                className={({ isActive }) =>
                  buildLinkClass(isActive, s.movieLink)
                }
              >
                Reviews
              </NavLink>
            </nav>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default MovieDetailsPage;
