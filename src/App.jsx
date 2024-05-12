import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navigation from "components/Navigation/Navigation";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";
import Loader from "components/Loader/Loader";
import MovieCast from "components/NestedComponents/MovieCast/MovieCast";
import MovieReviews from "components/NestedComponents/MovieReviews/MovieReviews";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
