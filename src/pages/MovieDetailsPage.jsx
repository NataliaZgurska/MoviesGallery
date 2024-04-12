import { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import Loader from '../components/Loader/Loader';
import GoBackBtn from '../components/GoBackBtn/GoBackBtn';
import MovieInfo from '../components/MovieInfo/MovieInfo';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import { Section } from '../components/Section/Section';
import { Container } from '../components/Container/Container';
import { getMovieInf } from '../services/api';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const goBack = useRef(location.state?.from || '/');

  useEffect(() => {
    setIsLoading(true);
    getMovieInf(movieId)
      .then(movie => setMovie(movie))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <div>
      <Section>
        <Container>
          {isLoading && <Loader />}
          {error && <ErrorMessage title={error} />}
          {movie && <GoBackBtn to={goBack.current} />}
          {movie && <MovieInfo movieData={movie} />}
        </Container>
      </Section>
    </div>
  );
};

export default MovieDetailsPage;
