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
import { useForm } from "react-hook-form";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const [searchMovies, _, loading] = useHttp(fetchMovieByQuery, query);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (values) => {
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
    setSearchParams("");
    reset();
  };
  if (!searchMovies) return <Loader />;
  console.log(query);
  return (
    <>
      <Container>
        <div>
          <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("searchStr")}
              className={s.input}
               value={query}
              name="searchStr"
            />
            <Button type="submit">Search</Button>
            {searchMovies && (
              <Button
                type="button"
                onClick={ handleReset}
              >
                Reset
              </Button>
            )}
          </form>

          <Toaster />

          {!!searchMovies?.length && <MoviesList movies={searchMovies} />}
          {loading && <Loader />}
          {query.length > 0 && !searchMovies?.length && <EmptyData />}
        </div>
      </Container>
    </>
  );
};

export default MoviesPage;
