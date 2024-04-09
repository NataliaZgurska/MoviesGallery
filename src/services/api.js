import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers = {
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2I4YmZiYjQyZjgxYjBjZjM5OTQ0Y2RiNjM3NmExMiIsInN1YiI6IjY2MTM3NDRjM2Q3NDU0MDE4NTA3M2RjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N3JgaB98FynS03ZaFbPWbSkOAmLxaSWvKVqsuo_M4vs',
};
axios.defaults.params = { language: 'en - US' };

export const getTrendingMovies = async () => {
  const { data } = await axios.get('trending/movie/day');
  return data.results;
};

export const getMovieInf = async id => {
  const { data } = await axios.get(`/movie/${id}`);
  console.log('data: ', data);
  return data;
};

// adult: false;
// backdrop_path: '/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg';
// genre_ids: (2)[(878, 12)];
// id: 693134;
// media_type: 'movie';
// original_language: 'en';
// original_title: 'Dune: Part Two';
// overview: 'Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.';
// popularity: 1380.968;
// poster_path: '/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg';
// release_date: '2024-02-27';
// title: 'Dune: Part Two';
// video: false;
// vote_average: 8.357;
// vote_count: 2520;
