import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../services/api';
import MovieList from '../components/MovieList/MovieList';
import Loader from '../components/Loader/Loader';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTrendingMovies()
      .then(data => setMovies(data))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessage title={error} />}
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
