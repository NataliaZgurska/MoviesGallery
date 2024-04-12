import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchForm from '../components/SearchForm/SearchForm';
import Loader from '../components/Loader/Loader';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import MovieList from '../components/MovieList/MovieList';
import { Section } from '../components/Section/Section';
import { Container } from '../components/Container/Container';
import { getMoviesByQuery } from '../services/api';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;

    setIsLoading(true);
    getMoviesByQuery(query)
      .then(data => setMovies(data))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [searchParams]);

  const searchMovie = query => {
    setSearchParams({ query });
  };

  return (
    <div>
      <Section>
        <Container>
          <SearchForm searchMovie={searchMovie} />
          {isLoading && <Loader />}
          {error && <ErrorMessage title={error} />}
          <MovieList movies={movies} />
        </Container>
      </Section>
    </div>
  );
};

export default MoviesPage;
