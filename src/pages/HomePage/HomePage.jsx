import Container from "components/Container/Container"
import MoviesList from "components/MoviesList/MoviesList"
import { useHttp } from "../../hooks/useHttp"
import { useEffect, useState } from "react"
import { fetchMovies } from "service/moviesAPI"

const HomePage = () => {

  const [movies, _, loading] = useHttp(fetchMovies)
  return (
    <Container>
      <MoviesList movies={movies}/>
    </Container>
  )
}

export default HomePage