import Container from "components/Container/Container"
import MoviesList from "components/MoviesList/MoviesList"
import { useHttp } from "../../hooks/useHttp"
import { fetchMovies } from "service/moviesAPI"

const HomePage = () => {

  const [movies, _, loading] = useHttp(fetchMovies)
  return (
    <Container>
      <div>
        <h2>This week in trend...</h2>
        <MoviesList movies={movies} /></div>
      
    </Container>
  )
}

export default HomePage