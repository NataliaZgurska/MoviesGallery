import { Link } from 'react-router-dom';

const MovieAdditionalInfo = movieData => {
  return (
    <div>
      <p>Additional Infromation</p>
      <ul>
        <li key={movieData.id}>
          <Link to={`/movies/${movieData.id}/cast`}>Cast</Link>
        </li>
        <li key={movieData.id}>
          <Link to={`/movies/${movieData.id}/reviews`}>Reviews</Link>
        </li>
      </ul>
    </div>
  );
};

export default MovieAdditionalInfo;
//    <Link to={`/movies/${movieData.id}/cast`} state={{ from: location }}></Link>
