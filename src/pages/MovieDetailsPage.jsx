import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getMovieInf } from '../services/api';
import MovieInfo from '../components/MovieInfo/MovieInfo';
import Loader from '../components/Loader/Loader';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    getMovieInf(movieId)
      .then(movie => setMovie(movie))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  // return <div>{movie && <MovieInfo movie={movie} />}</div>;
  return (
    <div>
      {isLoading && <Loader />}
      {error && <Heading title={error} />}
      {movie && <MovieInfo movieData={movie} />}
    </div>
  );
};

export default MovieDetailsPage;
