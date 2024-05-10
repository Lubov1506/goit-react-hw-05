import MoviesList from "components/MoviesList/MoviesList";
import { useHttp } from "../../hooks/useHttp";
import { useSearchParams } from "react-router-dom";
import { fetchMovieByQuery } from "service/moviesAPI";
import Container from "components/Container/Container";
import s from "./MoviesPage.module.css";
import { Field, Form, Formik } from "formik";
const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const [searchMovies] = useHttp(fetchMovieByQuery, query);
  return (
    <Container>
      <Formik
        initialValues={{ searchStr: query }}
        onSubmit={(values) => {
          setSearchParams({ query: values.searchStr, page:1 });
        }}
      >
        <Form>
          <Field className={s.input} name="searchStr" />
          <button type="submit">Search</button>
        </Form>
      </Formik>

      <div>{searchMovies && <MoviesList movies={searchMovies} />}</div>
    </Container>
  );
};

export default MoviesPage;
