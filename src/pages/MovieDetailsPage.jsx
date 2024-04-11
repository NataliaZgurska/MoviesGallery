import { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getMovieInf } from '../services/api';

import Loader from '../components/Loader/Loader';
import GoBackBtn from '../components/GoBackBtn/GoBackBtn';
import MovieInfo from '../components/MovieInfo/MovieInfo';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

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
      {isLoading && <Loader />}
      {error && <ErrorMessage title={error} />}
      <GoBackBtn to={goBack.current} />
      {movie && <MovieInfo movieData={movie} />}
    </div>
  );
};

export default MovieDetailsPage;
