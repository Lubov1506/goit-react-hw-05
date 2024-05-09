import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from 'react';
import Navigation from "components/Navigation/Navigation";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";


const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/images" element={<MoviesPage />} />
				<Route path='*' element={<NotFoundPage />} />
      </Routes>

    </>
  );
}

export default App;
