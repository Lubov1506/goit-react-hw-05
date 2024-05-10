import MoviesList from "components/MoviesList/MoviesList";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  const query = searchParams.get('name') ?? ''
  console.log(query);
  return (
    <div>
      <input
        name="query"
        value={query}
        onChange={(e) =>
          setSearchParams(e.target.value ? { name: e.target.value } : {})
        }
      />

      <MoviesList />
    </div>
  );
};

export default MoviesPage;
