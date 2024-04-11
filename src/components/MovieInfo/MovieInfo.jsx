import { Link, Route, Routes } from 'react-router-dom';
import MovieCast from '../MovieCast/MovieCast';
import MovieReviews from '../MovieReviews/MovieReviews';

import css from './MovieInfo.module.css';

const MovieInfo = ({ movieData }) => {
  const { id, title, poster_path, vote_average, overview, release_date } =
    movieData;

  const genresArray = movieData.genres.map(obj => obj.name);

  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  const imgSrc = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <>
      <div className={css.movieInformation}>
        <img src={poster_path ? imgSrc : defaultImg} width={250} alt="poster" />
        <div className={css.filmInformation}>
          <h2>{title}</h2>
          <p>{release_date}</p>
          <p>{`User Score: ${Math.round(vote_average * 10)}%`}</p>
          <h3>Overview</h3>
          <p> {overview}</p>
          <h3>Genres</h3>
          <p> {genresArray.toString()}</p>
        </div>
      </div>

      <div className={css.additionalInfo}>
        <h3>Additional Infromation</h3>
        <Link className={css.additionalLink} to="cast">
          Cast
        </Link>
        <Link className={css.additionalLink} to="reviews">
          Reviews
        </Link>

        <Routes>
          <Route path="/cast" element={<MovieCast id={id} />} />
          <Route path="/reviews" element={<MovieReviews id={id} />} />
        </Routes>
      </div>
    </>
  );
};

export default MovieInfo;
