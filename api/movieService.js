import tmdb from './tmdb';

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await tmdb.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch movie details:', error);
    // Handle the error according to your application's requirements
  }
};

export const fetchTopRatedMovies = async () => {
  try {
    const response = await tmdb.get('/movie/top_rated');
    return response.data.results;
  } catch (error) {
    console.error('Failed to fetch top rated movies:', error);
    // Handle the error according to your application's requirements
  }
};
