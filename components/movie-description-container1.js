import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const MovieDescriptionContainer1 = ({ movie }) => {
  const router = useRouter();

  const handleClick = async () => {
    if (!movie || !movie.id) {
      console.error('Movie or movie ID is undefined.');
      return;
    }
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/videos`, {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWMzOTlmNzY0NWUzZTI5OGM3ZDk2NjYwMmRmMjJlNSIsInN1YiI6IjY0ZmY1N2I3ZGI0ZWQ2MTAzNjNlN2I0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a5rFXnu9548fxjCagEpsamuWrM7iZdSidT7KDciyJkA', // Replace with your TMDb API key
          'accept': 'application/json'
        }
      });

      console.log(response.data.results); // Log all videos

      const trailer = response.data.results.find(video => video.type === 'Trailer');

      if (trailer) {
        const trailerUrl = `https://www.youtube.com/embed/${trailer.key}`;

        router.push(`/movies1?trailerUrl=${encodeURIComponent(trailerUrl)}`);
      } else {
        console.error('No trailer available for this movie.');
      }
    } catch (error) {
      console.error('Failed to fetch movie trailer:', error);
    }
  };

  if (!movie) return null;

  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="flex flex-col items-start justify-start gap-[16px] text-left text-sm text-white font-dm-sans">
      
      <b className="relative text-29xl leading-[56px] inline-block w-[404px]">
        {movie.title}
      </b>
      <div className="w-[184px] h-[17px] flex flex-row items-center justify-start gap-[34px] text-xs">
        <div className="flex flex-row items-center justify-start gap-[10px]">
          <img
            className="relative w-[35px] h-[17px] object-cover"
            alt=""
            src="/mv5bmtk3oda4mjc0nf5bml5bcg5nxkftztgwndc1mzq2ote-11@2x.png"
          />
          <div className="relative leading-[12px]">{movie.vote_average * 10} / 100</div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[10px]">
          <img
            className="relative w-4 h-[17px] object-cover"
            alt=""
            src="/pngitem-1381056-11@2x.png"
          />
          <div className="relative leading-[12px]">{movie.popularity}</div>
        </div>
      </div>
      <div className="relative leading-[18px] font-medium inline-block w-[302px]">
        {movie.overview}
      </div>
      <button onClick={handleClick} className="rounded-md bg-rose-700 flex flex-row py-1.5 px-4 items-center justify-start gap-[8px] transform transition-transform duration-500 ease-in-out hover:bg-rose-600 hover:scale-105 hover:animate-shake">
  <img
    className="relative w-5 h-5 overflow-hidden shrink-0"
    alt=""
    src="/play.svg"
  />
  <b className="relative leading-[24px] uppercase">Watch trailer</b>
</button>

    </div>
  );
};

export default MovieDescriptionContainer1;
