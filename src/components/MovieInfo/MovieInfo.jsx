//   genres: { name }

const MovieInfo = ({ movieData }) => {
  console.log('movieData: ', movieData);

  const { id, title, poster_path, vote_average, overview, release_date } =
    movieData;

  const genresArray = movieData.genres.map(obj => obj.name);
  console.log(genresArray);

  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  const imgSrc = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div>
      <img src={poster_path ? imgSrc : defaultImg} width={250} alt="poster" />
      <h2>{title}</h2>
      <p>{release_date}</p>
      <p>User Score: {vote_average}</p>
      <p>Overview: {overview}</p>
      <p>Genres: {genresArray}</p>
    </div>
  );
};

export default MovieInfo;
