import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.movieList}>
      {Array.isArray(movies) &&
        movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movie/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default MovieList;
