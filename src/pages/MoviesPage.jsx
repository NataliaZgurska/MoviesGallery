// сторінка пошуку кінофільмів за ключовим словом.

import { useEffect, useState } from 'react';
import SearchForm from '../components/SearchForm/SearchForm';
import { getMoviesByQuery } from '../services/api';
import Loader from '../components/Loader/Loader';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import MovieList from '../components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';

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
      <SearchForm searchMovie={searchMovie} />
      {isLoading && <Loader />}
      {error && <ErrorMessage title={error} />}
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;

// export const SearchCountry = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [countries, setCountries] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     const region = searchParams.get('region');
//     if (!region) return;
//     setIsLoading(true);
//     fetchByRegion(region)

//       .then(countries => setCountries(countries))
//       .catch(error => setError(error.message))
//       .finally(() => setIsLoading(false));
//   }, [searchParams]);

//   const searchCountry = region => {
//     setSearchParams({ region });
//   };

//   return (
//     <Section>
//       <Container>
//         <SearchForm searchCountry={searchCountry} />
//         <CountryList countries={countries} />
//         {isLoading && <Loader />}
//         {error && <Heading title={error} />}
//       </Container>
//     </Section>
//   );
// };

// const MoviesPage = () => {
//   const [query, setQuery] = useState('');
//   const [movies, setMovies] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const searchQuery = query => {
//     setQuery(query);
//   };

//   useEffect(() => {
//     setIsLoading(true);
//     getMoviesByQuery(query)
//       .then(data => setMovies(data))
//       .catch(error => setError(error.message))
//       .finally(() => setIsLoading(false));
//   }, [query]);

//   return (
//     <div>
//       <SearchForm searchQuery={searchQuery} />
//       {isLoading && <Loader />}
//       {error && <ErrorMessage title={error} />}
//       <MovieList movies={movies} />
//     </div>
//   );
// };
