import MoviesList from "components/MovieList/MovieList";
import { useHttp } from "../../hooks/useHttp";
import { useSearchParams } from "react-router-dom";
import { fetchMovieByQuery } from "service/moviesAPI";
import Container from "components/Container/Container";
import s from "./MoviesPage.module.css";
import { Field, Form, Formik } from "formik";
import Button from "components/Button/Button";
import Loader from "components/Loader/Loader";
import toast, { Toaster } from "react-hot-toast";
import { FaFeatherPointed } from "react-icons/fa6";
import EmptyData from "components/EmptyData/EmptyData";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let query = searchParams.get("query") ?? "";
  const [searchMovies, setSearchMovies] = useHttp(fetchMovieByQuery, query);
  const handleSubmit = (values) => {
    if (!values.searchStr.length) {
      toast.success("Будь ласка, введіть назву фільму", {
        position: "top-center",
        icon: <FaFeatherPointed color="green" />,
      });

      return;
    }
    setSearchParams({ query: values.searchStr, page: 1 });
  };
  const handleReset = () => {
    searchParams.set("query", "");
    setSearchMovies([]);
  };
  if (!searchMovies) return <Loader />;

  return (
    <>
      <Container>
        <Formik initialValues={{ searchStr: query }} onSubmit={handleSubmit}>
          <Form className={s.form}>
            <Field className={s.input} name="searchStr" />
            <Button type="submit">Search</Button>
            {searchMovies && (
              <Button type="button" onClick={handleReset}>
                Reset
              </Button>
            )}
          </Form>
        </Formik>
        <Toaster />

        <div>
          {searchMovies && searchMovies.length > 0 ? (
            <MoviesList movies={searchMovies} />
          ) : (
            <EmptyData />
          )}
        </div>
      </Container>
    </>
  );
};

export default MoviesPage;
