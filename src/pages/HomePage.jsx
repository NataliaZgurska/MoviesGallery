import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../services/api';

const HomePage = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        console.log(error);
      } finally {
        console.log('finally');
      }
    }
    fetchMovies();
  }, []);

  return (
    <div>
      <ul>
        {Array.isArray(movies) &&
          movies.map(item => {
            return (
              <li key={item.id}>
                <h2>{item.title}</h2>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default HomePage;
