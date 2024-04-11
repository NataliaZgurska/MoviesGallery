import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { getMovieReviewstInf } from '../../services/api';
import css from './MovieReviews.module.css';

const MovieReviews = ({ id }) => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getMovieReviewstInf(id)
      .then(reviews => setReviews(reviews))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [id]);

  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessage title={error} />}
      <ul className={css.reviewList}>
        {Array.isArray(reviews) &&
          reviews.map(review => {
            return (
              <li key={review.id} className={css.reviewItem}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MovieReviews;
