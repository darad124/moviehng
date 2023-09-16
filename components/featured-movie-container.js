import { useEffect, useState } from "react";
import MovieCard from "./movieCard"; // Make sure this path is correct
import axios from 'axios';

const fetchTopRatedMovies = async () => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWMzOTlmNzY0NWUzZTI5OGM3ZDk2NjYwMmRmMjJlNSIsInN1YiI6IjY0ZmY1N2I3ZGI0ZWQ2MTAzNjNlN2I0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a5rFXnu9548fxjCagEpsamuWrM7iZdSidT7KDciyJkA',
        'accept': 'application/json'
      }
    });
    return response.data.results;
  } catch (error) {
    console.error('Failed to fetch top rated movies:', error);
    // Handle the error according to your application's requirements
  }
};

const FeaturedMovieContainer = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const topRatedMovies = await fetchTopRatedMovies();
        setMovies(topRatedMovies.slice(0, 10)); 
      } catch (error) {
        console.error("Failed to fetch top rated movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="absolute top-[750px] left-[40px]">
      {[0, 1, 2].map(batch => (
        <div key={batch} className="flex flex-row items-start justify-start gap-[80px] mb-4">
          {movies.slice(batch * 4, (batch + 1) * 4).map(movie => (
            <MovieCard className="w-64"
              key={movie.id}
              movie={movie}
              posterImage={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              title={movie.title}
              releaseDate={movie.release_date}
              rating={movie.vote_average}
              popularity={movie.popularity}
              genres={movie.genre_ids} // You'll need to fetch the genre names based on these ids
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default FeaturedMovieContainer;
