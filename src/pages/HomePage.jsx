import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../services/api';
import MovieList from '../components/MovieList/MovieList';
import Loader from '../components/Loader/Loader';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <Heading title={error} />}
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
