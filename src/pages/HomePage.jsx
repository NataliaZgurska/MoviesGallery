import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../services/api';
import MovieList from '../components/MovieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        console.log(error);
      } finally {
        console.log('finally');
      }
    }
    fetchMovies();
  }, []);

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
