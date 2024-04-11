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
  return data;
};

export const getMovieCastInf = async id => {
  const { data } = await axios.get(`/movie/${id}/credits`);
  return data.cast;
};

export const getMovieReviewstInf = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews`);
  return data.results;
};
