import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { getMovieCastInf } from '../../services/api';
import css from './MovieCast.module.css';
import { useParams } from 'react-router-dom';

const MovieCast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getMovieCastInf(movieId)
      .then(casts => setCasts(casts))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessage title={error} />}
      <ul className={css.castList}>
        {Array.isArray(casts) &&
          casts.map(cast => {
            return (
              <li key={cast.id} className={css.castItem}>
                <img
                  src={
                    cast.profile_path
                      ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                      : defaultImg
                  }
                  width={150}
                  alt="{cast.name}"
                />
                <h3>● {cast.name}</h3>
                <p>Character: {cast.character}</p>
              </li>
            );
          })}
      </ul>
      moviecast
    </div>
  );
};

export default MovieCast;
