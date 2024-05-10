import Container from "components/Container/Container"
import MoviesList from "components/MoviesList/MoviesList"
import { useEffect, useState } from "react"
import { fetchMovies } from "service/moviesAPI"

const HomePage = () => {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const data = await fetchMovies()
        setMovies(data);
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [])
  return (
    <Container>
      <MoviesList movies={movies}/>
    </Container>
  )
}

export default HomePage