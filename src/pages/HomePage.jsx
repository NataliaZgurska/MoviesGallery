import { useEffect, useState } from 'react';
import MovieList from '../components/MovieList/MovieList';
import Loader from '../components/Loader/Loader';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import { Section } from '../components/Section/Section';
import { Container } from '../components/Container/Container';
import { getTrendingMovies } from '../services/api';

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
    <Section>
      <Container>
        {isLoading && <Loader />}
        {error && <ErrorMessage title={error} />}
        <h2>Trending today</h2>
        <MovieList movies={movies} />
      </Container>
    </Section>
  );
};

export default HomePage;
