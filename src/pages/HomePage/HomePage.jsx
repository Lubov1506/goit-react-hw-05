import Container from "components/Container/Container"
import MovieList from "components/MovieList/MovieList"
import { useHttp } from "../../hooks/useHttp"
import { fetchMovies } from "service/moviesAPI"
import Loader from "components/Loader/Loader"

const HomePage = () => {

  const [movies, _, loading] = useHttp(fetchMovies)
  return (<>
      {loading && <Loader/>}
    <Container>
      <div>
        <h2>This week in trend...</h2>
        <MovieList movies={movies} /></div>
      
    </Container>
  </>

  )
}

export default HomePage